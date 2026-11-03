#!/usr/bin/env python3
"""Rebuild blog.html and blog/<slug>.html from blog/posts.json. Run: python3 build_blog.py"""
import json, html, datetime, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
posts = json.load(open("blog/posts.json"))
posts.sort(key=lambda p: p["date"], reverse=True)
def nice(d): return datetime.date.fromisoformat(d).strftime("%-d %B %Y")
def page(title, desc, body, root="", canonical=""):
    return f"""<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)} · Vancouver Century Music School</title>
  <meta name="description" content="{html.escape(desc)}">
  <link rel="canonical" href="https://web.soichirosaimon.com/century-music-school/{canonical}">
  <meta property="og:title" content="{html.escape(title)}"><meta property="og:description" content="{html.escape(desc)}">
  <meta property="og:image" content="https://web.soichirosaimon.com/century-music-school/photos/storefront-dusk.jpg">
  <meta name="theme-color" content="#1F5A3C">
  <link rel="icon" href="{root}favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="{root}apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{root}styles.css">
</head>
<body data-root="{root}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap site-header__in">
    <a class="brand" href="{root}index.html" aria-label="Vancouver Century Music School home">
      <svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="currentColor"/><path d="M14 13c0-2.5 2-4 4-4s4 1.5 4 4c0 3-4 5-4 9v5" fill="none" stroke="#F7F3EA" stroke-width="2.2" stroke-linecap="round"/><circle cx="18" cy="29" r="2.4" fill="#F7F3EA"/><path d="M24 11v18" stroke="#F7F3EA" stroke-width="1.6" opacity=".6"/></svg>
      <span class="brand__name">Century <em>Music School</em></span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav id="site-nav" class="site-nav" aria-label="Pages">
      <a href="{root}index.html#lessons">Lessons</a>
      <a href="{root}index.html#tuition">Tuition</a>
      <a href="{root}teachers.html">Teachers</a>
      <a href="{root}index.html#reviews">Reviews</a>
      <a href="{root}blog.html" aria-current="page">Blog</a>
      <a href="{root}policies.html">Policies</a>
      <a href="{root}zh.html" lang="zh-Hans">中文</a>
    </nav>
    <a class="btn btn--green header-cta" href="https://www.centurymusic.ca/store/p9/25%25_OFF_One-Month_Trial_Class_for_New_Customers_Only_%E2%80%93_Limited_Time_Promotion%21.html" target="_blank" rel="noopener">Book a trial</a>
  </div>
</header>
<main id="main">
{body}
</main>
<footer class="site-footer">
  <div class="wrap site-footer__in">
    <p><strong>Vancouver Century Music School</strong> · 1730 Kingsway, Vancouver, BC V5N 2S3 · <a href="tel:+17787239999">778‑723‑9999</a></p>
    <p class="site-footer__links"><a href="{root}index.html#lessons">Lessons</a> · <a href="{root}index.html#tuition">Trial &amp; tuition</a> · <a href="{root}teachers.html">Teachers</a> · <a href="{root}english.html">English course</a> · <a href="{root}blog.html">Blog</a> · <a href="{root}policies.html">Policies</a> · <a href="{root}zh.html" lang="zh-Hans">中文</a></p>
    <p class="credit">© <span id="year">2026</span> Vancouver Century Music School · Site by <a href="https://web.soichirosaimon.com" rel="noopener">Sony Saimon</a></p>
  </div>
</footer>
<div class="mobile-bar" aria-label="Quick actions">
  <a class="btn btn--green" href="https://www.centurymusic.ca/store/p9/25%25_OFF_One-Month_Trial_Class_for_New_Customers_Only_%E2%80%93_Limited_Time_Promotion%21.html" target="_blank" rel="noopener">Book a trial</a>
  <a class="btn btn--outline" href="sms:+17787239999">Text us</a>
</div>
<script src="{root}services.js"></script><script src="{root}main.js"></script>
</body>
</html>
"""
# index of posts
items = "".join(f'<li class="post-item"><a href="blog/{p["slug"]}.html"><span class="post-item__date">{nice(p["date"])}</span><strong>{html.escape(p["title"])}</strong></a></li>' for p in posts)
body = f"""
  <section class="page-hero"><div class="wrap"><p class="eyebrow staff">News and facts</p><h1>How music benefits you.</h1>
  <p class="section-head__lead">{len(posts)} articles from the school on choosing a teacher, practising at home, exam preparation and what music does for growing minds.</p></div></section>
  <section class="post-list-sec"><div class="wrap"><ol class="post-list">{items}</ol></div></section>"""
open("blog.html", "w").write(page("Blog", "Articles from Vancouver Century Music School on piano, violin and guitar lessons, practice, RCM exams and music for kids and adults.", body, "", "blog.html"))
for i, p in enumerate(posts):
    prev = posts[i + 1] if i + 1 < len(posts) else None
    nxt = posts[i - 1] if i > 0 else None
    nav = ""
    if prev: nav += f'<a class="post-nav__a" href="{prev["slug"]}.html">← Older: {html.escape(prev["title"])}</a>'
    if nxt: nav += f'<a class="post-nav__a" href="{nxt["slug"]}.html">Newer: {html.escape(nxt["title"])} →</a>'
    desc = html.unescape(__import__("re").sub("<[^>]+>", " ", p["html"]))[:155].strip()
    body = f"""
  <article class="post"><div class="wrap post__wrap">
    <p class="eyebrow staff"><a href="../blog.html">Blog</a> · {nice(p["date"])}</p>
    <h1>{html.escape(p["title"])}</h1>
    <div class="post__body">{p["html"]}</div>
    <p class="post__cta"><a class="btn btn--green" href="https://www.centurymusic.ca/store/p9/25%25_OFF_One-Month_Trial_Class_for_New_Customers_Only_%E2%80%93_Limited_Time_Promotion%21.html" target="_blank" rel="noopener">Book a first‑month trial</a> <a class="btn btn--outline" href="sms:+17787239999">Text 778‑723‑9999</a></p>
    <nav class="post-nav" aria-label="More articles">{nav}</nav>
  </div></article>"""
    open(f"blog/{p['slug']}.html", "w").write(page(p["title"], desc, body, "../", f"blog/{p['slug']}.html"))
print(f"built blog.html and {len(posts)} posts")
