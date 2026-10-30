#!/usr/bin/env python3
"""Generate the service pages and service-areas.html from services.js + the header/footer in index.html.
Run:  python3 build.py
Edit content in services.js, never in the generated *.html files (they are overwritten)."""
import json, re, html, os

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE = "https://web.soichirosaimon.com/pristine-plumbing/"

src = open(os.path.join(ROOT, "services.js"), encoding="utf-8").read()
js = src[src.rindex("window.PP =") + len("window.PP ="):].strip().rstrip(";")
D = json.loads(js)
B = D["business"]

index = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
header = re.search(r"<!-- HEADER:START -->.*?<!-- HEADER:END -->", index, re.S).group(0)
footer = re.search(r"<!-- FOOTER:START -->.*?<!-- FOOTER:END -->", index, re.S).group(0)
head_links = re.search(r'<link rel="icon".*?<link rel="stylesheet" href="styles.css">', index, re.S).group(0)
e = html.escape

def shell(title, desc, path, body, extra_ld="", og_image="photos/hero-crew-vans.jpg", cls=""):
    return f"""<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{BASE}{path}">
<meta property="og:type" content="website">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{BASE}{path}">
<meta property="og:image" content="{BASE}{og_image}">
<meta name="theme-color" content="#5b3a9b">
{head_links}
{extra_ld}
</head>
<body class="{cls}">
<a class="skip" href="#main">Skip to content</a>
{header}
<main id="main">
{body}
</main>
{footer}
<script src="services.js"></script>
<script src="main.js"></script>
</body>
</html>
"""

CALL = f'<a class="btn btn--call btn--lg" href="tel:{B["phoneE164"]}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>Call {B["phone"]}</a>'
REQ = '<a class="btn btn--outline btn--lg" href="index.html#request">Request a visit</a>'
CREDS = '<ul class="creds"><li>5.0 on Google · 260 reviews</li><li>HomeStars Best of the Best 2025</li><li>BBB A+</li><li>Red Seal journeymen</li><li>Licensed &amp; insured</li><li>Burnaby-based since 2015</li></ul>'

def faq_ld(faq):
    items = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]
    return '<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": items}, ensure_ascii=False) + "</script>"

def crumbs_ld(name, path):
    return '<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE},
        {"@type": "ListItem", "position": 2, "name": name, "item": BASE + path}]}, ensure_ascii=False) + "</script>"

def service_ld(s):
    return '<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@type": "Service", "name": s["name"], "serviceType": s["eyebrow"],
        "provider": {"@type": "Plumber", "name": B["name"], "telephone": B["phoneE164"], "url": BASE},
        "areaServed": [a["name"] for a in D["areas"]], "url": BASE + s["slug"] + ".html", "image": BASE + s["photo"]}, ensure_ascii=False) + "</script>"

svc_by = {s["slug"]: s for s in D["services"]}

for s in D["services"]:
    path = s["slug"] + ".html"
    title = f'{s["name"]} | Pristine Plumbing & Drainage, Burnaby'
    desc = s["card"] + " Upfront pricing, 24/7. Call 778-980-1883."
    body_ps = "".join(f"<p>{e(p)}</p>" for p in s["body"])
    included = "".join(f"<li>{e(i)}</li>" for i in s["included"])
    gallery = "".join(f'<figure><img src="{g[0]}" alt="{e(g[1])}" loading="lazy" width="800" height="600"><figcaption>{e(g[1])}</figcaption></figure>' for g in s["gallery"])
    faq = "".join(f"<details><summary>{e(q)}</summary><p>{e(a)}</p></details>" for q, a in s["faq"])
    related = "".join(f'<a href="{r}.html">{e(svc_by[r]["name"])}</a>' for r in s["related"] if r in svc_by)
    em = s["slug"] == "emergency-plumbing"
    band_h = "Flooding right now? Call, we'll talk you through the shut-off." if em else "Price before work starts. Free home plumbing inspection with every call."
    band_p = "Same upfront pricing nights, weekends and holidays." if em else f"Call {B['phone']} day or night, or send a request and we'll call you back."
    body = f"""
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html#services">Services</a><span>/</span>{e(s["name"])}</nav>
    <div class="page-hero__in">
      <div>
        <p class="eyebrow">{e(s["eyebrow"])} · Burnaby &amp; the Lower Mainland</p>
        <h1>{e(s["h1"])}</h1>
        <p class="lede">{e(s["sub"])}</p>
        <div class="hero__cta">{CALL}{REQ}</div>
      </div>
      <figure class="page-hero__media"><div class="sunburst" aria-hidden="true"></div><img src="{s["photo"]}" alt="{e(s["photoAlt"])}" width="1200" height="900" fetchpriority="high"></figure>
    </div>
  </div>
</section>
<section class="sp">
  <div class="wrap sp__in">
    <div class="prose">{body_ps}</div>
    <aside class="included"><h2>What's included</h2><ul>{included}</ul></aside>
  </div>
</section>
<section class="band"><div class="wrap band__in"><div><h2>{e(band_h)}</h2><p>{e(band_p)}</p></div><a class="btn btn--white btn--lg" href="tel:{B["phoneE164"]}">Call {B["phone"]}</a></div></section>
<section class="sp">
  <div class="wrap">
    <div class="section__head"><p class="eyebrow">From the job</p><h2>What this work looks like</h2></div>
    <div class="gallery">{gallery}</div>
  </div>
</section>
<section class="sp" style="padding-top:0">
  <div class="wrap">{CREDS}</div>
</section>
<section class="sp reviews">
  <div class="wrap">
    <div class="section__head"><p class="eyebrow">Reviews</p><h2>From people who called about this</h2></div>
    <div class="quotes two" data-ids="{",".join(s["reviews"])}"></div>
  </div>
</section>
<section class="sp">
  <div class="wrap faq__in">
    <div class="section__head"><p class="eyebrow">Questions</p><h2>Asked about {e(s["name"].lower())}</h2></div>
    <div class="accordion">{faq}</div>
  </div>
</section>
<section class="sp" style="padding-top:0">
  <div class="wrap">
    <div class="section__head"><p class="eyebrow">Related</p><h2>Often booked together</h2></div>
    <div class="related">{related}</div>
  </div>
</section>
<section class="band"><div class="wrap band__in"><div><h2>Ready when you are, 24/7</h2><p>Burnaby, New Westminster, Coquitlam, Port Moody, Vancouver, Surrey and Bowen Island.</p></div><div class="hero__cta" style="margin:0"><a class="btn btn--white btn--lg" href="tel:{B["phoneE164"]}">Call {B["phone"]}</a><a class="btn btn--outline btn--lg" style="color:#fff;border-color:rgba(255,255,255,.5)" href="index.html#request">Request a visit</a></div></div></section>
"""
    ld = faq_ld(s["faq"]) + crumbs_ld(s["name"], path) + service_ld(s)
    open(os.path.join(ROOT, path), "w", encoding="utf-8").write(shell(title, desc, path, body, ld, s["photo"]))
    print("wrote", path)

# Service areas page
def slug(n): return re.sub(r"[^a-z]+", "-", n.lower().replace("&", "")).strip("-")
areas = ""
for a in D["areas"]:
    tag = "Home base" if a.get("home") else "Served"
    areas += f'<div class="area" id="{slug(a["name"])}"><div><h2>{e(a["name"])}</h2><span class="area__tag">{tag}</span></div><p>{e(a["note"])}</p></div>'
body = f"""
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span>Service areas</nav>
    <div class="page-hero__in">
      <div>
        <p class="eyebrow">Where we work</p>
        <h1>Burnaby first, the Lower Mainland every day</h1>
        <p class="lede">Four vans based on Capella Drive in Burnaby. Same-day across the inner suburbs, scheduled visits further out, and the ferry to Bowen Island. Don't see your city? Call, we probably come there too.</p>
        <div class="hero__cta">{CALL}{REQ}</div>
      </div>
      <figure class="page-hero__media"><div class="sunburst" aria-hidden="true"></div><img src="photos/ig-sun-rain-snow.jpg" alt="A Pristine Plumbing van in the snow" width="1200" height="900" fetchpriority="high"></figure>
    </div>
  </div>
</section>
<section class="sp">
  <div class="wrap sp__in">
    <div>{areas}</div>
    <div>
      <div class="areas__map" style="margin-bottom:18px"><iframe title="Map of Pristine Plumbing & Drainage, 9133 Capella Dr, Burnaby" src="https://www.google.com/maps?q=Pristine+Plumbing+%26+Drainage+Ltd,+9133+Capella+Dr,+Burnaby,+BC+V3J+7K4&output=embed&z=10" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      <aside class="included"><h2>Local notes</h2><ul><li>Pre-1970 homes: clay tile perimeter drains and sewer lines, roots at every joint</li><li>1978 to 1995 homes: grey Poly-B supply pipe, insurer surcharges</li><li>Combined storm and sanitary outlets in older Vancouver neighbourhoods</li><li>Permits and tree-protection rules differ by city; we handle them</li></ul></aside>
    </div>
  </div>
</section>
<section class="band"><div class="wrap band__in"><div><h2>Ready when you are, 24/7</h2><p>Price before work starts. Free home plumbing inspection with every call.</p></div><a class="btn btn--white btn--lg" href="tel:{B["phoneE164"]}">Call {B["phone"]}</a></div></section>
"""
open(os.path.join(ROOT, "service-areas.html"), "w", encoding="utf-8").write(shell(
    "Service Areas | Pristine Plumbing & Drainage, Burnaby & the Lower Mainland",
    "Plumber and drainage contractor serving Burnaby, New Westminster, Coquitlam, Port Moody, Vancouver, Surrey, Port Coquitlam, Delta and Bowen Island. 24/7. 778-980-1883.",
    "service-areas.html", body, crumbs_ld("Service areas", "service-areas.html"), "photos/ig-sun-rain-snow.jpg"))
print("wrote service-areas.html")
