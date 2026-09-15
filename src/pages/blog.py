# -*- coding: utf-8 -*-
"""Blog: paginated index (12 per page) + one page per post, migrated from the WordPress export."""
import json, os, re, html as htmlmod
from datetime import datetime
from src.layout import *
from src.components import page_hero, cta_band, hours_html

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
POSTS = json.load(open(os.path.join(ROOT, "blog", "_posts.json"), encoding="utf-8"))

# New posts written by the clinic as content/blog/*.toml (see the template in that folder)
from src.content import load_dir as _load_dir, render_text as _render_text
for _np in _load_dir("blog"):
    if not _np.get("title") or not _np.get("slug"):
        continue
    _html = _render_text(_np.get("body", ""))
    if _np.get("image"):
        _html = f'<p><img src="{_np["image"]}" alt=""></p>' + _html
    POSTS.append({"url": "", "slug": _np["slug"].strip("/"), "title": _np["title"], "date": _np.get("date", ""), "categories": [],
                  "html": _html, "images": [_np["image"]] if _np.get("image") else [], "videos": []})
PER_PAGE = 12
IMG_DIR = os.path.join(ROOT, "assets", "img", "blog")
LOCAL_IMGS = set(os.listdir(IMG_DIR)) if os.path.isdir(IMG_DIR) else set()
SLUGS = {p["slug"] for p in POSTS}
OLD_LINKS = {
    "/our-services/advanced-restorations/": "/our-services/dental-restorations/",
    "/our-services/sleep-dentistry/": "/our-services/sedation-dentistry/",
    "/why-choose-us/our-office/": "/why-choose-us/#office",
    "/why-choose-us/our-languages/": "/why-choose-us/our-team/#languages",
    "/our-technology/itero-scanner/": "/our-technology/#itero",
}


def parse_date(s):
    for fmt in ("%b %d, %Y", "%B %d, %Y"):
        try:
            return datetime.strptime(s.strip(), fmt)
        except ValueError:
            pass
    return None


def localize_img(url, slug):
    fn = slug[:40] + "__" + os.path.basename(url.split("?")[0])
    return f"/assets/img/blog/{fn}" if fn in LOCAL_IMGS else url


def clean_html(post):
    b = post["html"]
    slug = post["slug"]
    # localize images hosted on the old site
    def repl_src(m):
        return f'src="{localize_img(m.group(1), slug)}"'
    b = re.sub(r'src="((?:https?://(?:www\.)?atlantisdental\.ca)?/wp-content/uploads/[^"]+)"', repl_src, b)
    b = re.sub(r'\s(srcset|sizes|decoding|fetchpriority)="[^"]*"', "", b)
    # links to full-size uploads -> local when available
    b = re.sub(r'href="((?:https?://(?:www\.)?atlantisdental\.ca)?/wp-content/uploads/[^"]+\.(?:jpe?g|png|gif))"', lambda m: f'href="{localize_img(m.group(1), slug)}"', b)
    # internal links -> relative
    b = b.replace('href="https://atlantisdental.ca/', 'href="/').replace('href="http://atlantisdental.ca/', 'href="/')
    b = b.replace('href="http://www.atlantisdental.ca/', 'href="/').replace('href="https://www.atlantisdental.ca/', 'href="/')
    for old, new in OLD_LINKS.items():
        b = b.replace(f'href="{old}"', f'href="{new}"')
    b = re.sub(r'href="/([a-z0-9\-]+)/"', lambda m: f'href="/blog/{m.group(1)}/"' if m.group(1) in SLUGS else m.group(0), b)
    # protocol-relative youtube
    b = b.replace('src="//www.youtube.com', 'src="https://www.youtube.com').replace('src="http://www.youtube.com', 'src="https://www.youtube.com')
    b = re.sub(r'<iframe([^>]*)>', lambda m: '<iframe' + m.group(1) + (' loading="lazy"' if 'loading=' not in m.group(1) else '') + (' title="Embedded video"' if 'title=' not in m.group(1) else '') + '>', b)
    # strip inline styles/dimensions that fight the layout
    b = re.sub(r'\sstyle="[^"]*"', "", b)
    b = re.sub(r'<img([^>]*)\swidth="\d+"\sheight="\d+"', r'<img\1', b)
    b = b.replace("<img ", '<img loading="lazy" ')
    b = re.sub(r'<a([^>]*target="_blank")(?![^>]*rel=)([^>]*)>', r'<a\1 rel="noopener"\2>', b)
    # WordPress markup often has unbalanced <div>s that would swallow the sidebar; drop div/span wrappers
    b = re.sub(r"</?div[^>]*>", "", b)
    b = re.sub(r"</?span[^>]*>", "", b)
    # remove empty paragraphs and WP comments
    b = re.sub(r"<p>(\s|&nbsp;)*</p>", "", b)
    b = re.sub(r"<!--.*?-->", "", b, flags=re.S)
    return b.strip()


def excerpt(post, n=150):
    t = re.sub(r"<[^>]+>", " ", post["html"])
    t = htmlmod.unescape(re.sub(r"\s+", " ", t)).strip()
    return (t[:n].rsplit(" ", 1)[0] + "…") if len(t) > n else t


def thumb(post):
    for u in post["images"]:
        if u.startswith("/assets/"):
            return u
        if "atlantisdental.ca" in u:
            return localize_img(u, post["slug"])
    return None


def post_card(post):
    th = thumb(post)
    img = f'<img src="{th}" alt="" width="600" height="375" loading="lazy">' if th else icon("tooth")
    return f"""<a class="post-card reveal" href="/blog/{post['slug']}/">
  <div class="post-card__img">{img}</div>
  <div class="post-card__body"><span class="post-card__date">{post['date']}</span><h2 class="card__title">{post['title']}</h2><p>{excerpt(post)}</p><span class="link-arrow">Read more {icon("arrow")}</span></div>
</a>"""


def pagination(cur, total):
    def href(p):
        return "/blog/" if p == 1 else f"/blog/page/{p}/"
    items = []
    if cur > 1:
        items.append(f'<li><a href="{href(cur-1)}" aria-label="Previous page">{icon("arrow-left")}</a></li>')
    for p in range(1, total + 1):
        items.append(f'<li><span aria-current="page">{p}</span></li>' if p == cur else f'<li><a href="{href(p)}">{p}</a></li>')
    if cur < total:
        items.append(f'<li><a href="{href(cur+1)}" aria-label="Next page">{icon("arrow")}</a></li>')
    return f'<nav aria-label="Blog pagination"><ul class="pagination">{"".join(items)}</ul></nav>'


def index_page(cur, total, posts):
    cards = "".join(post_card(p) for p in posts)
    sub = f" – Page {cur}" if cur > 1 else ""
    path = "/blog/" if cur == 1 else f"/blog/page/{cur}/"
    body = f"""
{page_hero("Atlantis Dental Blog" + sub, "Oral health tips, treatment insights and news from our Yaletown team.", [("Blog", "/blog/")], "Blog")}
<section class="section"><div class="container">
  <div class="grid grid--3">{cards}</div>
  {pagination(cur, total)}
</div></section>
{cta_band()}
"""
    return path, page(path, "Blog" + sub, f"Dental health articles, tips and news from Atlantis Dental Yaletown. Page {cur} of {total}.", body, active="blog")


def post_page(post, prev_post, next_post):
    d = parse_date(post["date"])
    iso = d.date().isoformat() if d else ""
    nav = ""
    if prev_post or next_post:
        a = f'<a href="/blog/{prev_post["slug"]}/"><small>← Newer</small>{prev_post["title"]}</a>' if prev_post else "<span></span>"
        b = f'<a class="next" href="/blog/{next_post["slug"]}/"><small>Older →</small>{next_post["title"]}</a>' if next_post else ""
        nav = f'<nav class="post-nav" aria-label="More posts">{a}{b}</nav>'
    th = thumb(post)
    og = th or "/assets/img/hero-patient.jpg"
    schema = json.dumps({
        "@context": "https://schema.org", "@type": "BlogPosting", "headline": post["title"], "datePublished": iso,
        "author": {"@type": "Organization", "name": "Atlantis Dental Yaletown"},
        "publisher": {"@type": "Organization", "name": "Atlantis Dental Yaletown", "logo": {"@type": "ImageObject", "url": SITE_URL + "/assets/img/brand/atlantis_logo_square.png"}},
        "image": SITE_URL + og, "mainEntityOfPage": SITE_URL + f"/blog/{post['slug']}/",
    })
    body = f"""
<section class="page-hero"><div class="container container--narrow">
  <nav aria-label="Breadcrumb"><ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="/blog/">Blog</a></li><li><span aria-current="page">{post['title']}</span></li></ol></nav>
  <h1 class="maxw-none">{post['title']}</h1>
  <div class="post-meta"><span>{icon("calendar")}</span><time datetime="{iso}">{post['date']}</time><span>·</span><span>Atlantis Dental Yaletown</span></div>
</div></section>
<section class="section"><div class="container with-aside">
  <article class="prose post-body">{clean_html(post)}{nav}</article>
  <aside class="aside">
    <div class="card card--navy"><h2 class="aside__h">Request An Appointment</h2><p>Call <a class="white-bold" href="tel:{PHONE_TEL}">{PHONE}</a> or book online.</p><a class="btn btn--accent btn--block" href="/contact-us/book-now/">{icon("calendar")}Book Now</a></div>
    <div class="card"><h2 class="aside__h">Our Services</h2><ul class="aside__links">
      <li><a href="/our-services/dental-restorations/">Dental Restorations{icon("chevron-right")}</a></li>
      <li><a href="/our-services/cosmetic-dentistry/">Cosmetic Dentistry{icon("chevron-right")}</a></li>
      <li><a href="/invisalign/">Invisalign{icon("chevron-right")}</a></li>
      <li><a href="/our-services/preventative-dentistry/">Preventative Dentistry{icon("chevron-right")}</a></li>
      <li><a href="/our-services/sedation-dentistry/">Sedation Dentistry{icon("chevron-right")}</a></li>
      <li><a href="/contact-us/emergency-dentist/">Emergency Dentist{icon("chevron-right")}</a></li>
    </ul></div>
    <div class="card"><h2 class="aside__h">Our Hours</h2>{hours_html()}</div>
  </aside>
</div></section>
{cta_band()}
"""
    path = f"/blog/{post['slug']}/"
    return path, page(path, post["title"], excerpt(post, 155), body, active="blog", og_image=og, schema=schema)


def build():
    posts = sorted(POSTS, key=lambda p: parse_date(p["date"]) or datetime.min, reverse=True)
    out = []
    total = (len(posts) + PER_PAGE - 1) // PER_PAGE
    for i in range(total):
        out.append(index_page(i + 1, total, posts[i * PER_PAGE:(i + 1) * PER_PAGE]))
    for i, p in enumerate(posts):
        prev_post = posts[i - 1] if i > 0 else None
        next_post = posts[i + 1] if i + 1 < len(posts) else None
        out.append(post_page(p, prev_post, next_post))
    return out
