#!/usr/bin/env python3
"""Generates the service pages, emergency.html and the service cards / review
cards inside index.html from services.js. Run after editing services.js:
    python3 build.py
"""
import json, re, html, pathlib

ROOT = pathlib.Path(__file__).parent
src = (ROOT / 'services.js').read_text()
def block(name):
    m = re.search(r'const %s = (\[.*?\]|\{.*?\});\n' % name, src, re.S)
    return json.loads(m.group(1))
SERVICES, REVIEWS, HOME_REVIEWS = block('SERVICES'), block('REVIEWS'), block('HOME_REVIEWS')
PHONE, TEL = '(647) 560-2948', 'tel:+16475602948'
BASE = 'https://web.soichirosaimon.com/luxury-plumbing/'
GROUPS = [('repair', 'Repairs · same day where we can'), ('install', 'Installs · bathrooms, kitchens, water heaters'), ('commercial', 'Commercial · scheduled around your hours')]
e = html.escape
PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2z"/></svg>'

def quote(rid, light=False):
    r = REVIEWS[rid]
    svc = f' · {e(r["service"])}' if r['service'] else ''
    return (f'<article class="quote"><div class="stars" aria-hidden="true">★★★★★</div>'
            f'<blockquote>{e(r["text"])}</blockquote>'
            f'<footer><b>{e(r["name"])}</b>{svc} · {e(r["source"])}</footer></article>')

def replace(text, marker, inner):
    return re.sub(r'(<!-- %s:start -->).*?(<!-- %s:end -->)' % (marker, marker), lambda m: m.group(1) + '\n' + inner + '\n' + m.group(2), text, flags=re.S)

# ---- index.html cards, reviews, footer list ----
cards = []
for key, label in GROUPS:
    items = [s for s in SERVICES if s['group'] == key]
    cls = 'cards two' if len(items) == 2 else ('cards one' if len(items) == 1 else 'cards')
    inner = ''.join(
        f'<a class="card{" wide" if len(items)==1 else ""} reveal" href="services/{s["slug"]}.html">'
        f'<div class="thumb"><img src="photos/{s["photo"]}-thumb.jpg" width="900" height="600" alt="{e(s["alt"])}" loading="lazy"></div>'
        f'<div class="body"><h3>{e(s["name"])}</h3><p>{e(s["problem"])}</p><span class="more">See how we fix it</span></div></a>'
        for s in items)
    cards.append(f'<div class="group reveal"><p class="group-label">{e(label)}</p><div class="{cls}">{inner}</div></div>')
idx = (ROOT / 'index.html').read_text()
idx = replace(idx, 'services', '\n'.join(cards))
idx = replace(idx, 'reviews', '\n'.join(quote(r) for r in HOME_REVIEWS))
idx = replace(idx, 'footer-services', '\n'.join(f'<li><a href="services/{s["slug"]}.html">{e(s["name"])}</a></li>' for s in SERVICES))
(ROOT / 'index.html').write_text(idx)

# ---- shared chrome for inner pages (paths relative to /services/) ----
def chrome_head(title, desc, url, image, up):
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
<meta name="theme-color" content="#15171a">
<link rel="icon" href="{up}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{up}apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;0,6..96,600;1,6..96,500&family=IBM+Plex+Mono:wght@400;500&family=Work+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="{up}styles.css">
'''

def header(up, current):
    def nav(href, label, key):
        cur = ' aria-current="page"' if key == current else ''
        return f'<a href="{href}"{cur}>{label}</a>'
    return f'''<a class="skip" href="#main">Skip to content</a>
<div class="utility"><div class="wrap">
  <span class="pulse">Open 24 hours<span class="hide-m"> · emergency line answered</span></span>
  <span class="area">230 Mavety St · The Junction, Toronto</span>
  <a href="{TEL}">{PHONE}</a>
</div></div>
<header class="header" id="top"><div class="wrap">
  <a class="brand" href="{up}" aria-label="Luxury Plumbing home"><svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 4h8v9a5 5 0 0 0 5 5h9v8h-8a5 5 0 0 1-5-5v-3H6z" fill="#c9a14a"/><circle cx="24" cy="8" r="3" fill="#f2eee6"/></svg><span class="word">Luxury <em>Plumbing</em></span></a>
  <button class="nav-toggle" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span></button>
  <nav class="nav" id="nav" aria-label="Main">
    {nav(up+'#services','Services','services')}
    {nav(up+'emergency.html','Emergency','emergency')}
    {nav(up+'#work','Our work','work')}
    {nav(up+'#reviews','Reviews','reviews')}
    {nav(up+'#areas','Areas','areas')}
    {nav(up+'#about','About','about')}
  </nav>
  <div class="header-cta">
    <a class="btn btn-outline" href="{up}#request">Request a visit</a>
    <a class="btn btn-primary" href="{TEL}">{PHONE_SVG}{PHONE}</a>
  </div>
</div></header>
'''

def footer(up):
    svc = ''.join(f'<li><a href="{up}services/{s["slug"]}.html">{e(s["name"])}</a></li>' for s in SERVICES)
    return f'''<footer class="footer"><div class="wrap">
  <div class="cols">
    <div><a class="brand" href="{up}"><span class="word">Luxury <em>Plumbing</em></span></a>
      <address>230 Mavety St<br>Toronto, ON M6P 2M2<br><a href="{TEL}">{PHONE}</a><br><a href="mailto:plumbingcontractservices@gmail.com">plumbingcontractservices@gmail.com</a></address>
      <p style="margin-top:14px">Open 24 hours, every day.<br>Licensed &amp; insured plumbers, Ontario.</p></div>
    <div><h4>Services</h4><ul>{svc}<li><a href="{up}emergency.html">24-hour emergency</a></li></ul></div>
    <div><h4>Areas</h4><ul><li>The Junction</li><li>Bloor West Village</li><li>High Park</li><li>Roncesvalles</li><li>Parkdale</li><li>Liberty Village</li><li>Downtown Toronto</li></ul></div>
    <div><h4>Company</h4><ul><li><a href="{up}#about">About</a></li><li><a href="{up}#reviews">Reviews</a></li><li><a href="https://maps.google.com/?cid=11626745281232050159" target="_blank" rel="noopener">Google profile</a></li><li><a href="{up}#request">Request a visit</a></li></ul></div>
  </div>
  <div class="legal"><span>© <span id="year">2026</span> Luxury Plumbing of Downtown Toronto</span><span>Site by <a href="https://web.soichirosaimon.com">Sony Saimon</a></span></div>
</div></footer>
<div class="mobile-bar"><a class="btn btn-primary" href="{TEL}">Call now</a><a class="btn btn-outline" href="{up}#request">Request a visit</a></div>
<script src="{up}main.js" defer></script>
</body>
</html>
'''

def cta_band(up, headline, sub):
    return f'''<section class="emergency"><div class="wrap">
  <div><p class="eyebrow">Ready when you are</p><h2>{e(headline)}</h2><p>{e(sub)}</p>
  <div class="actions"><a class="btn btn-primary btn-lg" href="{TEL}">Call {PHONE}</a><a class="btn btn-outline" href="{up}#request">Request a visit</a></div></div>
  <ul><li>Open 24 hours, same rate nights and weekends</li><li>$150 visit, credited toward the repair</li><li>Flat quote before work starts</li><li>Licensed &amp; insured, Ontario</li></ul>
</div></section>'''

# ---- service pages ----
(ROOT / 'services').mkdir(exist_ok=True)
for s in SERVICES:
    up = '../'
    url = f'{BASE}services/{s["slug"]}.html'
    title = f'{s["name"]} in Toronto · Luxury Plumbing'
    desc = f'{s["problem"]} {s["lead"]} 24 hours, $150 visit credited to the repair. Call {PHONE}.'
    faq_ld = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in s['faqs']]})
    svc_ld = json.dumps({"@context": "https://schema.org", "@type": "Service", "serviceType": s['name'], "areaServed": "Toronto, ON",
        "provider": {"@type": "Plumber", "name": "Luxury Plumbing of Downtown Toronto", "telephone": "+16475602948", "url": BASE},
        "offers": {"@type": "Offer", "price": "150", "priceCurrency": "CAD", "description": "Diagnostic visit, credited toward the repair"}})
    crumbs_ld = json.dumps({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": BASE + '#services'},
        {"@type": "ListItem", "position": 3, "name": s['name'], "item": url}]})
    others = ''.join(f'<a href="{o["slug"]}.html">{e(o["short"])}</a>' for o in SERVICES if o is not s) + f'<a href="{up}emergency.html">24-hour emergency</a>'
    includes = ''.join(f'<li>{e(i)}</li>' for i in s['includes'])
    faqs = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in s['faqs'])
    revs = ''.join(quote(r) for r in s['reviews'])
    group_word = {'repair': 'Repair', 'install': 'Install', 'commercial': 'Commercial'}[s['group']]
    page = chrome_head(title, desc, url, f'{BASE}photos/{s["photo"]}-card.jpg', up) + f'''<script type="application/ld+json">{svc_ld}</script>
<script type="application/ld+json">{faq_ld}</script>
<script type="application/ld+json">{crumbs_ld}</script>
</head>
<body>
''' + header(up, 'services') + f'''<main id="main">
<section class="page-hero"><div class="wrap">
  <div>
    <nav class="crumbs" aria-label="Breadcrumb"><a href="{up}">Home</a><span>/</span><a href="{up}#services">Services</a><span>/</span><span>{e(s["short"])}</span></nav>
    <p class="eyebrow">{group_word} · Toronto · 24 hours</p>
    <h1>{e(s["name"])}</h1>
    <p class="lead">{e(s["lead"])}</p>
    <div class="cta" style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-primary btn-lg" href="{TEL}">{PHONE_SVG}Call {PHONE}</a><a class="btn btn-outline btn-lg" href="{up}#request">Request a visit</a></div>
    <a class="rating" href="https://maps.google.com/?cid=11626745281232050159" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:12px;margin-top:26px;text-decoration:none;font-size:15px"><span class="num" style="font-family:var(--display);font-size:26px">5.0</span><span><span class="stars" style="color:var(--brass);letter-spacing:2px" aria-hidden="true">★★★★★</span><br><span class="muted">103 Google reviews</span></span></a>
  </div>
  <figure class="ticket">
    <div class="photo"><img src="{up}photos/{s["photo"]}.jpg" width="1000" height="1250" alt="{e(s["alt"])}" fetchpriority="high"></div>
    <figcaption class="stub stamped"><div class="row"><span>Job · {e(s["short"])}</span><span>Toronto</span></div><div class="title">{e(s.get("ticket", s["name"]))}</div><p class="desc">{e(s["problem"])}</p><div class="stamp"><b>5.0</b>Google<br>103 reviews</div></figcaption>
  </figure>
</div></section>

<section class="section light"><div class="wrap"><div class="service-body">
  <div>
    <p class="eyebrow">What's included</p>
    <h2>What we do on a {e(s["short"].lower())} call</h2>
    <ul class="includes">{includes}</ul>
    <p class="eyebrow">Questions</p>
    <div class="faq">{faqs}</div>
  </div>
  <aside>
    <div class="price-card"><p class="eyebrow">What a visit costs</p><div class="big">$150 <small>visit</small></div><p>Credited in full toward any repair we do on the same visit.</p>
      <ul><li>Flat quote before work starts</li><li>Same rate nights and weekends</li><li>Pay when it is done and tested</li></ul>
      <a class="btn btn-primary" href="{TEL}">Call {PHONE}</a></div>
    <div class="service-reviews">{revs}</div>
    <p class="eyebrow" style="margin-top:28px">Other services</p>
    <div class="other-services" style="margin-top:0">{others}</div>
  </aside>
</div></div></section>
''' + cta_band(up, f'Need {s["short"].lower()} today?', 'Call and you get a real arrival window from the plumber who is coming, not a call centre.') + '</main>\n' + footer(up)
    page = page.replace('<div class="other-services" style="margin-top:0">', '<div class="other-services" style="margin-top:0;color:var(--on-light)">')
    (ROOT / 'services' / f'{s["slug"]}.html').write_text(page)

# ---- emergency page ----
up = ''
url = BASE + 'emergency.html'
title = '24-hour emergency plumber in Toronto · Luxury Plumbing'
desc = f'Burst pipe, sewer backup, no hot water: Luxury Plumbing answers 24 hours in Toronto\'s west end and downtown. Same rate nights and weekends. Call {PHONE}.'
em_faq = [
    ("What should I do before you arrive?", "Shut off the water. For a fixture, the small valve under the sink or behind the toilet. For a burst pipe, the main shut-off, usually where the water line enters the basement. Then move anything that can be damaged and call us."),
    ("Is there an extra charge at night?", "No. The $150 visit and the flat quote are the same at 2 a.m. as at 2 p.m."),
    ("How fast can you get here?", "It depends on where you are and what is already booked. We tell you a real window on the phone, and we call if it changes."),
    ("Is a slow drain an emergency?", "Not usually. Water you cannot stop, sewage coming up, no water at all, or no hot water in winter are the ones to call about immediately. Everything else we book for the next slot."),
]
faq_ld = json.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in em_faq]})
faqs = ''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in em_faq)
page = chrome_head(title, desc, url, BASE + 'photos/og.jpg', up) + f'<script type="application/ld+json">{faq_ld}</script>\n</head>\n<body>\n' + header(up, 'emergency') + f'''<main id="main">
<section class="page-hero"><div class="wrap">
  <div>
    <nav class="crumbs" aria-label="Breadcrumb"><a href="./">Home</a><span>/</span><span>Emergency</span></nav>
    <p class="eyebrow" style="color:#f3c9c9">24-hour line · Toronto</p>
    <h1>Water you can't stop? Call now.</h1>
    <p class="lead">We answer the phone ourselves, around the clock, and we tell you what to do while we are on the way. Same $150 visit and the same flat rates at night and on weekends.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-emergency btn-lg" href="{TEL}">{PHONE_SVG}Call {PHONE}</a><a class="btn btn-outline btn-lg" href="#before">What to do first</a></div>
  </div>
  <figure class="ticket square">
    <div class="photo"><img src="photos/drain-before-after.jpg" width="1143" height="1161" alt="Before and after: corroded under-sink drain replaced with a new ABS trap and braided supply lines" fetchpriority="high"></div>
    <figcaption class="stub stamped"><div class="row"><span>Job · Leak repair</span><span>Toronto</span></div><div class="title">Leaking trap, same visit fix</div><p class="desc">Corroded drain and stained supply lines replaced on the spot, cabinet dried and wiped.</p><div class="stamp"><b>24</b>hours<br>every day</div></figcaption>
  </figure>
</div></section>

<section class="section light" id="before"><div class="wrap"><div class="service-body">
  <div>
    <p class="eyebrow">What counts</p>
    <h2>Call right away for any of these</h2>
    <ul class="includes">
      <li>Burst or frozen pipe, or water you cannot shut off</li>
      <li>Sewer backing up into a basement drain, tub or toilet</li>
      <li>No water at all, or no hot water in winter</li>
      <li>Toilet overflowing and it is the only washroom</li>
      <li>Water heater leaking from the tank, or a gas smell near it (leave the house and call the gas utility first)</li>
      <li>Commercial: a washroom or kitchen you cannot open without</li>
    </ul>
    <p class="eyebrow">Before we arrive</p>
    <h2 style="font-size:clamp(26px,3vw,34px)">Three things that limit the damage</h2>
    <ol class="steps">
      <li class="step"><div class="num">1</div><div><h3>Shut the water off</h3><p>Fixture valve under the sink or behind the toilet; main shut-off where the line enters the house, usually in the basement near the front wall.</p></div></li>
      <li class="step"><div class="num">2</div><div><h3>Kill power near the water</h3><p>If water is near outlets, a panel or the water heater, switch off that breaker.</p></div></li>
      <li class="step"><div class="num">3</div><div><h3>Clear the area and call</h3><p>Move what you can, put towels down, and call. We will give you an arrival window and stay on the phone if you need us to.</p></div></li>
    </ol>
    <p class="eyebrow" style="margin-top:36px">Questions</p>
    <div class="faq">{faqs}</div>
  </div>
  <aside>
    <div class="price-card"><p class="eyebrow">Night, weekend, holiday</p><div class="big">Same <small>rate</small></div><p>$150 visit, credited toward the repair. Flat quote before work starts, whatever the hour.</p>
      <a class="btn btn-emergency" href="{TEL}">Call {PHONE}</a></div>
    <div class="service-reviews">{quote("sira")}{quote("joey")}</div>
  </aside>
</div></div></section>
''' + cta_band(up, 'Not sure if it can wait? Call anyway.', 'Two minutes on the phone and you will know whether it is tonight or tomorrow.') + '</main>\n' + footer(up)
(ROOT / 'emergency.html').write_text(page)
print('built', len(SERVICES), 'service pages + emergency.html + index sections')
