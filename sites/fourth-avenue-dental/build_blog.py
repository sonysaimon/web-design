#!/usr/bin/env python3
"""Rebuild blog.html and blog/<slug>.html from blog/posts.json. Run: python3 build_blog.py
Articles are the clinic's own, copied from 4thavenuedental.ca. Canonical tags point at the originals until this site replaces it."""
import json, html, datetime, os, re
os.chdir(os.path.dirname(os.path.abspath(__file__)))
posts = sorted(json.load(open("blog/posts.json", encoding="utf-8")), key=lambda p: p["date"], reverse=True)
BOOK = "https://calendly.com/appts-2"
BLOG_URL = "https://www.4thavenuedental.ca/blogs/vancouver-bc-general-dentist-blog"
e = html.escape
def nice(d):
    return datetime.date.fromisoformat(d).strftime("%B %-d, %Y")
def excerpt(p, n=150):
    t = p["desc"].strip()
    return t if len(t) <= n else t[:n].rsplit(" ", 1)[0].rstrip(" .,;:") + "…"
def page(title, desc, body, root, canonical, extra=""):
    return f"""<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)} — Fourth Avenue Dental Clinic</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{e(canonical)}">
<link rel="icon" href="{root}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{root}apple-touch-icon.png">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta name="theme-color" content="#231B18">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{root}styles.css">{extra}
</head>
<body class="blog-page">
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <div class="wrap nav-row">
    <a class="brand" href="{root}index.html" aria-label="Fourth Avenue Dental Clinic, home"><img class="brand-logo" src="{root}photos/logo.png" width="392" height="79" alt="Fourth Avenue Dental Clinic. Our Doctors Care"></a>
    <nav class="menu" id="menu" aria-label="Sections">
      <a href="{root}index.html#services">Services</a>
      <a href="{root}index.html#new-patients">New patients</a>
      <a href="{root}index.html#team">Team</a>
      <a href="{root}index.html#reviews">Reviews</a>
      <a href="{root}blog.html" aria-current="page">Blog</a>
      <a href="{root}index.html#visit">Visit</a>
    </nav>
    <div class="nav-cta">
      <a class="btn btn-ghost btn-phone" href="tel:+16047362505"><svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/></svg>(604) 736-2505</a>
      <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span></button>
    </div>
  </div>
</header>
<main id="main">
{body}
</main>
<footer class="footer">
  <div class="wrap footer-row">
    <p><strong>Fourth Avenue Dental Clinic</strong> · 1905 W 4th Ave, Vancouver · Dr. Nishant Goswami</p>
    <p><a href="tel:+16047362505">(604) 736-2505</a> · <a href="mailto:appts@4thavenuedental.ca">appts@4thavenuedental.ca</a></p>
    <p class="credit">Site by <a href="https://web.soichirosaimon.com" target="_blank" rel="noopener">Sony Saimon</a></p>
  </div>
</footer>
<div class="sticky-bar" aria-label="Quick actions">
  <a class="btn btn-outline" href="tel:+16047362505">Call</a>
  <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
</div>
<script src="{root}blog.js"></script>
</body>
</html>
"""
cards = "\n".join(f"""      <a class="blog-card" href="blog/{e(p['slug'])}.html">
        <img src="{e(p['img'])}" width="{p['w']}" height="{p['h']}" alt="" loading="lazy">
        <div class="blog-card-body">
          <time datetime="{p['date']}">{nice(p['date'])}</time>
          <h2>{e(p['title'])}</h2>
          <p>{e(excerpt(p))}</p>
          <span class="blog-more">Read article <span aria-hidden="true">→</span></span>
        </div>
      </a>""" for p in posts)
index = f"""<section class="blog-head">
  <div class="wrap">
    <p class="eyebrow">Blog</p>
    <h1>From the clinic.</h1>
    <p class="lede">Articles from the team at Fourth Avenue Dental Clinic on comfortable visits, everyday care and how we protect natural teeth.</p>
  </div>
</section>
<section class="blog-list">
  <div class="wrap blog-grid">
{cards}
  </div>
</section>"""
open("blog.html", "w", encoding="utf-8").write(page("Blog", "Articles from Fourth Avenue Dental Clinic in Kitsilano, Vancouver, on comfortable visits, everyday care and protecting natural teeth.", index, "", BLOG_URL))
for i, p in enumerate(posts):
    newer = posts[i - 1] if i > 0 else None
    older = posts[i + 1] if i + 1 < len(posts) else None
    pager = ""
    if newer: pager += f'<a class="blog-pager-newer" href="{e(newer["slug"])}.html"><span>Newer article</span>{e(newer["title"])}</a>'
    if older: pager += f'<a class="blog-pager-older" href="{e(older["slug"])}.html"><span>Older article</span>{e(older["title"])}</a>'
    cats = " · ".join(e(c) for c in p["cats"])
    body = f"""<article class="blog-article">
  <div class="wrap blog-narrow">
    <p class="blog-back"><a href="../blog.html"><span aria-hidden="true">←</span> All articles</a></p>
    <h1>{e(p['title'])}</h1>
    <p class="blog-meta"><time datetime="{p['date']}">{nice(p['date'])}</time> · Fourth Avenue Dental Clinic</p>
    {f'<p class="blog-cats">{cats}</p>' if cats else ''}
  </div>
  <div class="wrap blog-hero"><img src="../{e(p['img'])}" width="{p['w']}" height="{p['h']}" alt="" fetchpriority="high"></div>
  <div class="wrap blog-narrow blog-body">
{p['body']}
  </div>
  <div class="wrap blog-narrow">
    <div class="blog-cta">
      <h2>Ready to book a visit?</h2>
      <p>1905 West 4th Avenue, Kitsilano. Book online or call the clinic.</p>
      <div class="blog-cta-actions">
        <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
        <a class="btn btn-outline" href="tel:+16047362505">Call (604) 736-2505</a>
      </div>
    </div>
    <nav class="blog-pager" aria-label="More articles">{pager}</nav>
  </div>
</article>"""
    ld = json.dumps({"@context": "https://schema.org", "@type": "BlogPosting", "headline": p["title"], "datePublished": p["date"], "author": {"@type": "Organization", "name": "Fourth Avenue Dental Clinic"}, "publisher": {"@type": "Organization", "name": "Fourth Avenue Dental Clinic"}, "description": p["desc"]}, ensure_ascii=False)
    open(f"blog/{p['slug']}.html", "w", encoding="utf-8").write(page(p["title"], excerpt(p), body, "../", p["src"], f'\n<script type="application/ld+json">{ld}</script>'))
print(len(posts), "articles built")
