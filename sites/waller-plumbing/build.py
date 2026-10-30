#!/usr/bin/env python3
"""Builds the shared header/footer, the service cards, reviews, areas and FAQ on
index.html, and generates services/<slug>.html + service-areas.html from services.js.
Run after editing services.js or index.html:   python3 build.py
"""
import json, re, html, pathlib

ROOT = pathlib.Path(__file__).parent
src = (ROOT / 'services.js').read_text()
def block(name):
    m = re.search(r'const %s = (\[.*?\]|\{.*?\});\n' % name, src, re.S)
    return json.loads(m.group(1))
B = block('BUSINESS'); SERVICES = block('SERVICES'); GROUPS = block('GROUPS')
REVIEWS = block('REVIEWS'); HOME_REVIEWS = block('HOME_REVIEWS'); AREAS = block('AREAS'); FAQ = block('FAQ')
BY = {s['slug']: s for s in SERVICES}
e = html.escape
BASE = 'https://web.soichirosaimon.com/waller-plumbing/'
TEL = 'tel:' + B['tel']; SMS = 'sms:' + B['tel']
PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2z"/></svg>'
SMS_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
MARK = '<svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="14" fill="#1E3FD1"/><path d="M32 10c6 9 14 18 14 27a14 14 0 0 1-28 0c0-9 8-18 14-27z" fill="#fff"/><path d="M24 38a8 8 0 0 0 8 8" fill="none" stroke="#1E3FD1" stroke-width="3" stroke-linecap="round"/></svg>'

def replace(text, marker, inner):
    return re.sub(r'(<!-- %s:start -->).*?(<!-- %s:end -->)' % (marker, marker),
                  lambda m: m.group(1) + '\n' + inner + '\n' + m.group(2), text, flags=re.S)

def brand(up):
    return f'<a class="brand" href="{up}index.html"><span>{MARK}</span><span><span class="word">WALLER</span><span class="tag">Plumbing · Heating · Gas</span></span></a>'

def header(up, current=''):
    links = [('index.html#services', 'Services', 'services'), ('services/hot-water-tanks.html', 'Water heaters', 'hot-water-tanks'),
             ('services/emergency-plumber.html', 'Emergency', 'emergency-plumber'), ('service-areas.html', 'Areas', 'areas'),
             ('index.html#reviews', 'Reviews', 'reviews'), ('index.html#about', 'About', 'about')]
    def a(h, l, k, cls=''):
        cur = ' aria-current="page"' if k == current else ''
        return f'<a href="{up}{h}"{cur}{cls}>{l}</a>'
    nav = ''.join(a(h, l, k) for h, l, k in links)
    return f'''<a class="skip" href="#main">Skip to content</a>
<div class="utility"><div class="wrap">
  <span class="status"><span class="dot" aria-hidden="true"></span><span data-status>Open 24 hours, 7 days</span></span>
  <span class="area">Surrey · Langley · Tri-Cities · Fraser Valley</span>
  <span class="right"><span>{e(B['licence'])}</span><a href="{TEL}">{e(B['phone'])}</a></span>
</div></div>
<header class="header"><div class="wrap">
  {brand(up)}
  <nav class="nav" aria-label="Main">{nav}</nav>
  <div class="actions">
    <a class="btn ghost small text" href="{SMS}">{SMS_SVG}Text us</a>
    <a class="btn primary small" href="{TEL}">{PHONE_SVG}<span class="num">Call </span>{e(B['phone'])}</a>
  </div>
  <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</div></header>
<div class="drawer" id="drawer" aria-hidden="true">
  <div class="panel" role="dialog" aria-label="Menu">
    <button class="close" aria-label="Close menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
    {nav}
    {''.join(f'<a href="{up}services/{s["slug"]}.html" style="font-size:1rem;font-weight:500;padding:8px 10px 8px 22px">{e(s["name"])}</a>' for s in SERVICES if s["slug"] not in ("hot-water-tanks","emergency-plumber"))}
    <a class="btn primary" href="{TEL}">{PHONE_SVG}Call {e(B['phone'])}</a>
    <a class="btn ghost" href="{SMS}">{SMS_SVG}Text {e(B['phone'])}</a>
  </div>
</div>'''

def footer(up):
    svc = ''.join(f'<li><a href="{up}services/{s["slug"]}.html">{e(s["name"])}</a></li>' for s in SERVICES)
    areas = ''.join(f'<li><a href="{up}service-areas.html#{re.sub(r"[^a-z]+","-",g.lower()).strip("-")}">{e(g)}</a></li>' for g, _ in AREAS)
    return f'''<footer class="footer">
<div class="wrap">
  <div>
    {brand(up)}
    <address>
      <span>{e(B['legal'])}</span>
      <span>{e(B['street'])}, {e(B['city'])}, {e(B['region'])} {e(B['postal'])}</span>
      <a href="{TEL}">{e(B['phone'])}</a>
      <a href="mailto:{e(B['email'])}">{e(B['email'])}</a>
      <span>Open 24 hours, 7 days · emergency line same number</span>
    </address>
    <p class="lic">Technical Safety BC gas contractor licence LGA0208910 · Licensed &amp; insured</p>
    <div class="pay"><span>INTERAC</span><span>VISA</span><span>MASTERCARD</span><span>AMEX</span></div>
  </div>
  <div><h4>Services</h4><ul>{svc}</ul></div>
  <div><h4>Areas</h4><ul>{areas}</ul></div>
  <div><h4>Company</h4><ul>
    <li><a href="{up}index.html#about">About Adam</a></li>
    <li><a href="{up}index.html#reviews">Reviews</a></li>
    <li><a href="{up}index.html#work">Recent work</a></li>
    <li><a href="{up}index.html#faq">FAQ</a></li>
    <li><a href="{up}index.html#contact">Request a visit</a></li>
    <li><a href="{e(B['mapsUrl'])}" target="_blank" rel="noopener">Google listing</a></li>
  </ul></div>
</div>
<div class="bottom"><div class="wrap">
  <span>© <span data-year>2026</span> {e(B['legal'])} · Surrey, BC</span>
  <span>Site by <a href="https://web.soichirosaimon.com">Sony Saimon</a></span>
</div></div>
</footer>
<div class="sticky-bar" aria-label="Quick contact">
  <a class="btn primary" href="{TEL}">{PHONE_SVG}Call now</a>
  <a class="btn ghost" href="{SMS}">{SMS_SVG}Text us</a>
</div>'''

def quote(rid):
    r = REVIEWS[rid]
    svc = f' · {e(r["service"])}' if r['service'] else ''
    return (f'<article class="quote reveal"><div class="stars" aria-hidden="true">★★★★★</div>'
            f'<blockquote>“{e(r["text"])}”</blockquote>'
            f'<footer><b>{e(r["name"])}</b>{svc} · Google, {e(r["when"])}</footer></article>')

def schema():
    d = {
      "@context": "https://schema.org", "@type": "Plumber", "name": B['name'], "legalName": B['legal'],
      "url": BASE, "telephone": B['tel'], "email": B['email'], "image": BASE + 'photos/hero-tankless.jpg',
      "priceRange": "$$",
      "address": {"@type": "PostalAddress", "streetAddress": B['street'], "addressLocality": B['city'], "addressRegion": B['region'], "postalCode": B['postal'], "addressCountry": "CA"},
      "geo": {"@type": "GeoCoordinates", "latitude": 49.177166, "longitude": -122.7328359},
      "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}],
      "areaServed": [{"@type": "City", "name": c} for _, cs in AREAS for c in cs],
      "sameAs": [B['mapsUrl'], "https://www.wallerplumbing.ca/"],
      "aggregateRating": {"@type": "AggregateRating", "ratingValue": B['rating'], "reviewCount": B['reviewCount'], "bestRating": "5"},
      "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Plumbing, heating and gas services", "itemListElement": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": s['name'], "url": BASE + 'services/' + s['slug'] + '.html'}} for s in SERVICES]},
      "identifier": {"@type": "PropertyValue", "name": "Technical Safety BC licence", "value": "LGA0208910"}
    }
    faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in FAQ]}
    return json.dumps([d, faq], ensure_ascii=False, indent=1)

# ---------- index.html ----------
idx = (ROOT / 'index.html').read_text()
idx = idx.replace('{PHONE_SVG}', PHONE_SVG).replace('{SMS_SVG}', SMS_SVG)
idx = replace(idx, 'header', header('', 'home'))
idx = replace(idx, 'footer', footer(''))
idx = replace(idx, 'schema', schema())
groups = []
for key, title, sub in GROUPS:
    items = [s for s in SERVICES if s['group'] == key]
    cards = ''
    for s in items:
        alert = ' alert' if s['slug'] == 'emergency-plumber' else ''
        cards += (f'<a class="card{alert} reveal" href="services/{s["slug"]}.html">'
                  f'<div class="thumb"><img src="photos/{s["photo"]}.jpg" alt="{e(s["alt"])}" loading="lazy" width="800" height="450"></div>'
                  f'<div class="body"><span class="kicker">{e(s["eyebrow"])}</span><h4>{e(s["name"])}</h4><p>{e(s["problem"])}</p><span class="more">{"Call now →" if alert else "How we fix it →"}</span></div></a>')
    groups.append(f'<div class="group"><div class="group-head"><h3>{e(title)}</h3><p>{e(sub)}</p></div><div class="cards">{cards}</div></div>')
idx = replace(idx, 'services', '\n'.join(groups))
idx = replace(idx, 'reviews', '\n'.join(quote(r) for r in HOME_REVIEWS))
idx = replace(idx, 'areas', '\n'.join(f'<div><h3>{e(g)}</h3><ul>{"".join(f"<li>{e(c)}</li>" for c in cs)}</ul></div>' for g, cs in AREAS))
idx = replace(idx, 'faq', '\n'.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in FAQ))
(ROOT / 'index.html').write_text(idx)

# ---------- inner pages ----------
def head(title, desc, url, image, up, extra_schema=''):
    return f'''<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B1B33">
<link rel="icon" href="{up}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{up}apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="{up}styles.css">
{extra_schema}
</head>
<body>
'''

def cta_band(h, p):
    return f'<div class="cta-band reveal"><div><h3>{e(h)}</h3><p>{e(p)}</p></div><div class="cta-row" style="margin:0"><a class="btn light" href="{TEL}">{PHONE_SVG}Call {e(B["phone"])}</a><a class="btn copper" href="{SMS}">{SMS_SVG}Text a photo</a></div></div>'

(ROOT / 'services').mkdir(exist_ok=True)
for s in SERVICES:
    up = '../'
    url = BASE + 'services/' + s['slug'] + '.html'
    title = f'{s["name"]} · Waller Plumbing, Surrey & Fraser Valley'
    desc = s['sub']
    sch = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "name": s['name'], "serviceType": s['name'], "url": url, "description": s['problem'],
         "provider": {"@type": "Plumber", "name": B['name'], "telephone": B['tel'], "url": BASE},
         "areaServed": [{"@type": "City", "name": c} for _, cs in AREAS for c in cs]},
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in s['faq']]},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": BASE + '#services'},
            {"@type": "ListItem", "position": 3, "name": s['name'], "item": url}]}]}
    body = ''.join(f'<p>{e(p)}</p>' for p in s['body'])
    inc = ''.join(f'<li>{e(i)}</li>' for i in s['included'])
    faq = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in s['faq'])
    rel = ''.join(f'<a href="{BY[r]["slug"]}.html"><b>{e(BY[r]["name"])}</b><span>{e(BY[r]["problem"].split(". ")[0])}.</span></a>' for r in s['related'])
    revs = ''.join(quote(r) for r in s['reviews'])
    page = head(title, desc, url, BASE + 'photos/' + s['photo'] + '.jpg', up,
                f'<script type="application/ld+json">{json.dumps(sch, ensure_ascii=False)}</script>')
    page += header(up, s['slug'])
    page += f'''
<main id="main">
<section class="page-hero"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="{up}index.html">Home</a><span>/</span><a href="{up}index.html#services">Services</a><span>/</span><span>{e(s["short"])}</span></nav>
  <div class="page-grid">
    <div>
      <p class="eyebrow">{e(s["eyebrow"])}</p>
      <h1>{e(s["h1"])}</h1>
      <p class="lede">{e(s["sub"])}</p>
      <div class="cta-row">
        <a class="btn primary" href="{TEL}">{PHONE_SVG}Call {e(B["phone"])}</a>
        <a class="btn ghost" href="{SMS}">{SMS_SVG}Text a photo</a>
      </div>
      <ul class="facts">
        <li><span class="star">★</span> 5.0 on Google · 16 reviews</li>
        <li>Open 24 hours</li>
        <li>12-month guarantee</li>
        <li><span class="mono">{e(B["licence"])}</span></li>
      </ul>
    </div>
    <figure class="page-photo"><img src="{up}photos/{s["photo"]}.jpg" alt="{e(s["alt"])}" width="900" height="1125" fetchpriority="high"><figcaption>Waller job photo</figcaption></figure>
  </div>
</div></section>

<section class="sec"><div class="wrap two-col">
  <div class="prose">{body}</div>
  <aside class="included reveal"><h3>What's included</h3><ul>{inc}</ul></aside>
</div></section>

<section class="wrap">{cta_band("Need this sorted today?", "Call for an honest ETA, or text a photo and get a price back.")}</section>

<section class="sec"><div class="wrap">
  <ul class="cred-row reveal">
    <li><b>Licensed &amp; insured</b><span>Technical Safety BC LGA0208910</span></li>
    <li><b>Upfront pricing</b><span>Price agreed before work starts</span></li>
    <li><b>12-month guarantee</b><span>Same problem comes back, so do we</span></li>
    <li><b>Family-owned, Surrey</b><span>Over a decade in the trade</span></li>
  </ul>
</div></section>

<section class="sec reviews"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">From Google</p><h2>What customers said about this kind of job.</h2></div>
  <div class="quotes">{revs}</div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Questions</p><h2>Good to know.</h2></div>
  <div class="faq-list">{faq}</div>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Related</p><h2>Often on the same visit.</h2></div>
  <div class="related">{rel}</div>
</div></section>

<section class="wrap" style="padding-bottom:80px">{cta_band("Talk to Adam now.", "One number, day or night: " + B["phone"] + ".")}</section>
</main>
'''
    page += footer(up) + f'\n<script src="{up}main.js" defer></script>\n</body>\n</html>\n'
    (ROOT / 'services' / f'{s["slug"]}.html').write_text(page)

# ---------- service-areas.html ----------
up = ''
url = BASE + 'service-areas.html'
local = {
  "Surrey & Langley": "Home base. Port Kells, Fraser Heights, Guildford, Cloverdale and Clayton are minutes away, which is why most same-day and emergency calls here are on site within the hour. Older Surrey and Langley homes still have clay sewer laterals and original galvanized water services; both show up as recurring work.",
  "Tri-Cities": "Coquitlam, Port Coquitlam and Port Moody are straight down Highway 1 and the Mary Hill Bypass. Hillside lots mean perimeter drainage and sump pumps matter here more than almost anywhere else in the region.",
  "Fraser Valley": "Across the Golden Ears Bridge to Maple Ridge and Pitt Meadows, and east to Mission and Abbotsford. Acreage and rural properties on septic and wells are a regular part of the schedule, including pre-purchase inspections.",
  "Metro Vancouver": "Burnaby, New Westminster, Richmond and Vancouver for existing customers, landlords with multiple properties and commercial accounts. Call to confirm availability for same-day work."
}
blocks = ''
for g, cs in AREAS:
    aid = re.sub(r'[^a-z]+', '-', g.lower()).strip('-')
    blocks += f'<article class="step no-step reveal" id="{aid}"><h3 style="font-size:1.35rem">{e(g)}</h3><p>{e(local[g])}</p><ul class="facts" style="margin-top:6px">{"".join(f"<li>{e(c)}</li>" for c in cs)}</ul></article>'
sch = {"@context": "https://schema.org", "@type": "Plumber", "name": B['name'], "url": BASE, "telephone": B['tel'], "areaServed": [{"@type": "City", "name": c} for _, cs in AREAS for c in cs]}
page = head('Service areas · Waller Plumbing · Surrey, Langley, Tri-Cities, Fraser Valley', 'Where Waller Plumbing works: Surrey, Langley, Delta, Coquitlam, Port Coquitlam, Port Moody, Maple Ridge, Pitt Meadows, Mission, Abbotsford, Burnaby, New Westminster, Richmond and Vancouver.', url, BASE + 'photos/job-water-main.jpg', up, f'<script type="application/ld+json">{json.dumps(sch, ensure_ascii=False)}</script>')
page += header(up, 'areas') + f'''
<main id="main">
<section class="page-hero"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Service areas</span></nav>
  <div class="page-grid">
    <div>
      <p class="eyebrow">Where we work</p>
      <h1>Surrey out to Abbotsford, and across the river.</h1>
      <p class="lede">Waller Plumbing works from 176 Street and 96 Avenue in north Surrey, minutes from Highway 1 and the Golden Ears Bridge. One truck, one number, and an honest ETA when you call.</p>
      <div class="cta-row"><a class="btn primary" href="{TEL}">{PHONE_SVG}Call {e(B["phone"])}</a><a class="btn ghost" href="{SMS}">{SMS_SVG}Text us</a></div>
    </div>
    <div class="map reveal"><iframe title="Map of Waller Plumbing, 17649 96 Avenue, Surrey" src="https://www.google.com/maps?q=17649+96+Avenue,+Surrey,+BC+V4N+4A9&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><div class="addr"><div><b>{e(B["legal"])}</b><br>{e(B["street"])}, {e(B["city"])}, {e(B["region"])} {e(B["postal"])}</div><div class="mono">Open 24 hours · 7 days</div></div></div>
  </div>
</div></section>
<section class="sec"><div class="wrap"><div class="expect" style="grid-template-columns:repeat(2,1fr)">{blocks}</div></div></section>
<section class="wrap" style="padding-bottom:80px">{cta_band("Not on the list?", "If you're near any of these, call. If we can't get to you fast enough we'll say so.")}</section>
</main>
''' + footer(up) + '\n<script src="main.js" defer></script>\n</body>\n</html>\n'
(ROOT / 'service-areas.html').write_text(page)
print('built index.html,', len(SERVICES), 'service pages, service-areas.html')
