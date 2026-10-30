#!/usr/bin/env python3
"""Generate every HTML page from content.py. Run: python3 build.py"""
import html, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content import *

OUT = os.path.dirname(os.path.abspath(__file__))
B = BUSINESS
SVC = {s["slug"]: s for s in SERVICES}

def e(s): return html.escape(str(s), quote=True)

def tel(label=None, cls="btn btn-primary", icon=True):
    label = label or B["phone"]
    ic = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>' if icon else ""
    return f'<a class="{cls}" href="tel:{B["phone_e164"]}">{ic}<span>{e(label)}</span></a>'

def book(root, label="Book online", cls="btn btn-outline"):
    return f'<a class="{cls}" href="{root}book.html">{e(label)}</a>'

def head(root, title, desc, path, extra_ld=None, og_image="photos/crew-main-line-etobicoke.jpg"):
    url = SITE_URL + path
    ld = [{
        "@context": "https://schema.org", "@type": "Plumber", "@id": SITE_URL + "#plumber",
        "name": B["name"], "legalName": B["legal"], "url": SITE_URL, "telephone": B["phone_e164"], "email": B["email"],
        "image": SITE_URL + og_image, "logo": SITE_URL + "photos/plumbing-logo.png", "priceRange": "$$",
        "foundingDate": str(B["founded"]),
        "address": {"@type": "PostalAddress", "streetAddress": B["street"], "addressLocality": B["city"], "addressRegion": B["region"], "postalCode": B["postal"], "addressCountry": "CA"},
        "geo": {"@type": "GeoCoordinates", "latitude": 43.6683161, "longitude": -79.4061898},
        "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "07:00", "closes": "23:59"}],
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": B["rating"], "reviewCount": B["review_count"], "bestRating": "5"},
        "areaServed": [{"@type": "City", "name": c} for g in GTA for c in g[1]] + [{"@type": "City", "name": "Toronto"}],
        "sameAs": [B["instagram"], B["facebook"], B["youtube"], B["homestars_url"], B["yelp_url"]],
        "hasCredential": {"@type": "EducationalOccupationalCredential", "name": "Ontario plumbing licence " + B["licence"]},
    }]
    if extra_ld: ld += extra_ld
    return f'''<!doctype html>
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
<meta property="og:image" content="{SITE_URL}{og_image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#003660">
<link rel="icon" href="{root}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{root}apple-touch-icon.png">
<link rel="preload" href="{root}fonts/BigShouldersDisplay-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{root}fonts/IBMPlexSans-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{root}styles.css">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
'''

def header(root, current=""):
    items = ""
    for label, href in NAV:
        cls = ' class="is-current"' if current and href == current else ""
        items += f'<li><a{cls} href="{root}{href}">{e(label)}</a></li>'
    return f'''<div class="utility"><div class="wrap">
  <span><strong>Emergency line open 24/7</strong> · Office {e(B["hours_office"])}</span>
  <span class="utility-right">Serving Toronto &amp; the GTA · Licence {B["licence"]}</span>
</div></div>
<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="{root}index.html" aria-label="{e(B["name"])} home">
      <img src="{root}photos/plumbing-logo.png" alt="{e(B["name"])}" width="200" height="64">
    </a>
    <nav class="site-nav" id="site-nav" aria-label="Main">
      <ul>{items}</ul>
      <div class="nav-actions">{tel(cls="btn btn-primary btn-sm")}{book(root, cls="btn btn-outline btn-sm")}</div>
    </nav>
    <div class="header-actions">
      {tel(cls="btn btn-primary btn-sm header-phone")}
      <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="nav-toggle-bar"></span><span class="sr-only">Menu</span></button>
    </div>
  </div>
</header>
<main id="main">
'''

def footer(root):
    svc_links = "".join(f'<li><a href="{root}services/{s["slug"]}.html">{e(s["nav"])}</a></li>' for s in SERVICES)
    areas = "".join(f'<li><a href="{root}service-area.html#{c.lower().replace(" ", "-").replace(".", "")}">{e(c)}</a></li>' for g in GTA[:3] for c in g[1])
    return f'''</main>
<section class="cta-band" aria-labelledby="cta-title">
  <div class="wrap cta-row">
    <div>
      <p class="eyebrow eyebrow-light">Need a plumber now?</p>
      <h2 id="cta-title">We're just a call away.</h2>
      <p>Open 24/7 for emergencies. Fixed price before we start, 12-month warranty after.</p>
    </div>
    <div class="cta-actions">{tel(cls="btn btn-amber btn-lg")}{book(root, cls="btn btn-outline-light btn-lg")}</div>
  </div>
</section>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <img src="{root}photos/plumbing-logo-white.png" alt="" width="220" height="70" loading="lazy">
      <p class="footer-tagline">Call the best, flush the rest.</p>
      <address>
        {e(B["legal"])}<br>{e(B["street"])}, {e(B["city"])}, {e(B["region"])} {e(B["postal"])}<br>
        <a href="tel:{B["phone_e164"]}">{e(B["phone"])}</a> · Toll-free <a href="tel:{B["tollfree_e164"]}">{e(B["tollfree"])}</a><br>
        <a href="mailto:{B["email"]}">{e(B["email"])}</a>
      </address>
      <dl class="hours">
        <div><dt>Office</dt><dd>{e(B["hours_office"])}</dd></div>
        <div><dt>Emergencies</dt><dd>24 hours, 7 days</dd></div>
      </dl>
    </div>
    <div><h3>Services</h3><ul>{svc_links}</ul></div>
    <div><h3>Service area</h3><ul><li><a href="{root}service-area.html">Toronto</a></li>{areas}<li><a href="{root}service-area.html">All areas</a></li></ul></div>
    <div><h3>Company</h3><ul>
      <li><a href="{root}about.html">About George &amp; the crew</a></li>
      <li><a href="{root}reviews.html">Reviews</a></li>
      <li><a href="{root}index.html#pricing">Pricing &amp; warranty</a></li>
      <li><a href="{root}book.html">Book online</a></li>
      <li><a href="{B["instagram"]}" rel="noopener">Instagram</a></li>
      <li><a href="{B["facebook"]}" rel="noopener">Facebook</a></li>
      <li><a href="{B["youtube"]}" rel="noopener">YouTube</a></li>
    </ul></div>
  </div>
  <div class="wrap footer-bottom">
    <span>© 2026 {e(B["legal"])} · Ontario plumbing licence {B["licence"]} · Licensed, insured &amp; bonded</span>
    <span>Site by <a href="https://web.soichirosaimon.com" rel="noopener">Sony Saimon</a></span>
  </div>
</footer>
<div class="mobile-bar" role="group" aria-label="Call or book">
  <a href="tel:{B["phone_e164"]}" class="btn btn-primary">Call {e(B["phone"])}</a>
  <a href="{root}book.html" class="btn btn-amber">Book online</a>
</div>
<script src="{root}main.js" defer></script>
</body>
</html>
'''

def faq_block(items, title="Questions people ask us", id_="faq"):
    out = f'<section class="section faq" id="{id_}" aria-labelledby="{id_}-title"><div class="wrap faq-grid"><div><p class="eyebrow">FAQ</p><h2 id="{id_}-title">{e(title)}</h2></div><div class="faq-list">'
    for q, a in items:
        out += f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>'
    return out + "</div></div></section>"

def faq_ld(items):
    return {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in items]}

def review_card(key):
    name, when, job, tech, text = REVIEWS[key]
    techline = f' · with {e(tech)}' if tech else ""
    return f'''<figure class="review">
  <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
  <blockquote><p>{e(text)}</p></blockquote>
  <figcaption><strong>{e(name)}</strong> <span>{e(job)}{techline} · Google, {e(when)}</span></figcaption>
</figure>'''

def service_card(root, s):
    return f'''<a class="service-card" href="{root}services/{s["slug"]}.html">
  <div class="service-photo"><img src="{root}photos/{s["card_photo"]}" alt="" width="1200" height="900" loading="lazy"></div>
  <div class="service-body"><h3>{e(s["title"])}</h3><p>{e(s["card"])}</p><span class="link-arrow">See what we fix</span></div>
</a>'''

def pricing_section(root):
    return f'''<section class="section pricing" id="pricing" aria-labelledby="pricing-title">
  <div class="wrap">
    <div class="section-head"><p class="eyebrow">Pricing &amp; how it works</p><h2 id="pricing-title">You know the price before we start.</h2></div>
    <div class="pricing-grid">
      <div class="price-card price-card-big">
        <span class="price-amount">$95</span>
        <h3>Assessment visit</h3>
        <p>A licensed plumber comes to your door, finds the problem and gives you a fixed price for the fix. <strong>Go ahead with the work and the $95 comes off the bill.</strong></p>
      </div>
      <div class="price-card"><span class="price-k">01</span><h3>Fixed price, by the job</h3><p>No hourly rate, no clock running while someone looks for a part. The number you approve is the number on the invoice.</p></div>
      <div class="price-card"><span class="price-k">02</span><h3>Same price, any hour</h3><p>Nights, weekends and holidays cost the same as a Tuesday morning. Emergency means we come faster, not that we charge more.</p></div>
      <div class="price-card"><span class="price-k">03</span><h3>12-month warranty</h3><p>Parts and workmanship on every repair and installation, and 5 years on main water line replacements. If it fails, we come back and fix it at no charge.</p></div>
    </div>
    <p class="pay-line">We take Visa, Mastercard, e-transfer and cash. Cheques for installations and renovations.</p>
  </div>
</section>'''

# ---------------------------------------------------------------- HOME
def page_home():
    root = ""
    chips = "".join(f'<button type="button" class="chip" data-what="{e(w)}" data-href="services/{slug}.html" data-label="{e(SVC[slug]["nav"])}">{e(l)}</button>' for l, w, slug in SYMPTOMS)
    facts = "".join(f'<li><strong>{e(a)}</strong><span>{e(b)}</span></li>' for a, b in FACTS)
    trust = "".join(f'<li><strong>{e(a)}</strong><span>{e(b)}</span></li>' for a, b in TRUST)
    cards = "".join(service_card(root, s) for s in SERVICES[:6])
    projects = "".join(f'''<figure class="project"><img src="photos/{p}" alt="{e(t)}, {e(c)}" width="1200" height="1600" loading="lazy"><figcaption><strong>{e(t)}</strong><span class="project-place">{e(c)}</span><p>{e(d)}</p></figcaption></figure>''' for p, t, c, d in PROJECTS)
    reviews = "".join(review_card(k) for k in HOME_REVIEWS)
    team = "".join(f'<li><span class="team-name">{e(n)}</span><span class="team-role">{e(r)}</span><span class="team-note">{e(d)}</span></li>' for n, r, d in TEAM)
    tor = ", ".join(TORONTO_AREAS)
    gta = "".join(f'<div><h3>{e(g)}</h3><p>{", ".join(e(c) for c in cs)}</p></div>' for g, cs in GTA)
    body = f'''
<section class="hero" aria-labelledby="hero-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Toronto &amp; the GTA · Licensed · Family-owned</p>
      <h1 id="hero-title">A licensed plumber at your door today.</h1>
      <ul class="facts">{facts}</ul>
      <div class="hero-actions">{tel(cls="btn btn-primary btn-lg")}{book(root, cls="btn btn-outline btn-lg")}</div>
      <div class="picker" id="picker">
        <p class="picker-label" id="picker-label">What's going on?</p>
        <div class="chips" role="group" aria-labelledby="picker-label">{chips}</div>
        <p class="picker-out" aria-live="polite"><span class="picker-text">Pick the closest one and we'll tell you what happens next.</span> <a class="picker-link" hidden href="#">See the service</a></p>
      </div>
    </div>
    <div class="hero-visual">
      <figure class="door">
        <img src="photos/crew-main-line-etobicoke.jpg" alt="George and two Plumber To Your Door technicians replacing a main water line in a front yard in Etobicoke" width="1200" height="1600" fetchpriority="high">
        <figcaption>George and the crew on a main water line replacement, Etobicoke</figcaption>
      </figure>
      <a class="rating-chip" href="{B["google_reviews_url"]}" rel="noopener"><strong>4.9 ★</strong><span>462 Google reviews</span><span class="rating-sub">HomeStars Best of the Best 2025</span></a>
    </div>
  </div>
</section>

<section class="trust" aria-label="Why people trust us"><div class="wrap"><ul>{trust}</ul></div></section>

<section class="section services" id="services" aria-labelledby="services-title">
  <div class="wrap">
    <div class="section-head row">
      <div><p class="eyebrow">What we fix</p><h2 id="services-title">Start with the problem, not the pipe.</h2></div>
      <a class="link-arrow" href="services/index.html">All eight services</a>
    </div>
    <div class="service-grid">{cards}</div>
  </div>
</section>

<section class="emergency" id="emergency" aria-labelledby="em-title">
  <div class="wrap emergency-grid">
    <div>
      <p class="eyebrow">Emergency line · 24/7</p>
      <h2 id="em-title">Water where it shouldn't be?</h2>
      <p>Call and you'll usually get George. He'll tell you what to shut off, and a van is on its way: 60 to 90 minutes in most of Toronto, any hour, at the same fixed price as daytime.</p>
      <div class="hero-actions">{tel(cls="btn btn-dark btn-lg")}<a class="btn btn-outline-dark btn-lg" href="services/emergency-plumbing.html">What to do while you wait</a></div>
    </div>
    <ul class="emergency-list">
      <li>Burst or frozen pipe</li><li>Sewer backing up</li><li>Overflowing toilet or drain</li><li>Flooded basement</li><li>Leaking water heater</li><li>No water at all</li>
    </ul>
  </div>
</section>

{pricing_section(root)}

<section class="section projects" id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="section-head"><p class="eyebrow">Recent work</p><h2 id="work-title">Jobs with an address, not stock photos.</h2></div>
    <div class="project-grid">{projects}</div>
  </div>
</section>

<section class="section reviews" id="reviews" aria-labelledby="reviews-title">
  <div class="wrap">
    <div class="section-head row">
      <div><p class="eyebrow">Google reviews</p><h2 id="reviews-title">4.9 out of 5, from 462 people who called.</h2></div>
      <div class="review-links"><a class="link-arrow" href="reviews.html">Read more reviews</a><a class="link-arrow" href="{B["google_reviews_url"]}" rel="noopener">Leave a review</a></div>
    </div>
    <div class="review-grid">{reviews}</div>
  </div>
</section>

<section class="section team" id="crew" aria-labelledby="crew-title">
  <div class="wrap team-grid">
    <div>
      <p class="eyebrow">Who's at the door</p>
      <h2 id="crew-title">A family company. The name on the van is the person who shows up.</h2>
      <p>Plumber To Your Door was started in 2021 by George, a licensed plumber with 15+ years in the trade. He still answers the phone and still takes the emergency calls. The crew are plumbers he trained or worked with, not subcontractors.</p>
      <a class="link-arrow" href="about.html">More about us</a>
    </div>
    <ul class="team-list">{team}</ul>
  </div>
</section>

<section class="section area" id="area" aria-labelledby="area-title">
  <div class="wrap area-grid">
    <div>
      <p class="eyebrow">Service area</p>
      <h2 id="area-title">Based on Bloor West. Serving the whole GTA.</h2>
      <p><strong>Toronto:</strong> {e(tor)} and everywhere in between.</p>
      <div class="gta-grid">{gta}</div>
      <a class="link-arrow" href="service-area.html">Response times by area</a>
    </div>
    <div class="map">
      <a class="map-fallback" href="https://www.google.com/maps/search/?api=1&query=509+Bloor+St+W+Toronto+ON+M5S+1Y2" rel="noopener">Open in Google Maps</a>
      <iframe title="Map of Plumber To Your Door, 509 Bloor St W, Toronto" src="https://www.google.com/maps?q=509+Bloor+St+W,+Toronto,+ON+M5S+1Y2&output=embed" width="600" height="450" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>

{faq_block(FAQ_HOME)}
'''
    title = "Plumber To Your Door · Licensed Toronto plumber, 24/7 emergency, fixed pricing"
    desc = "Family-owned Toronto plumber. 4.9 stars from 462 Google reviews. Emergency plumbing in 60–90 minutes, fixed price before we start, 12-month warranty. Call 647-894-7354."
    return head(root, title, desc, "", [faq_ld(FAQ_HOME)]) + header(root, "") + body + footer(root)

# ---------------------------------------------------------------- SERVICE PAGES
def page_service(s):
    root = "../"
    fixes = "".join(f'<li>{e(f)}</li>' for f in s["fixes"])
    aside = "".join(f'<p>{e(a)}</p>' for a in s["aside"])
    related = "".join(f'<a class="related-link" href="{r}.html">{e(SVC[r]["title"])}</a>' for r in s["related"])
    ld = [faq_ld(s["faq"]), {"@context": "https://schema.org", "@type": "Service", "name": s["title"], "serviceType": s["title"], "provider": {"@id": SITE_URL + "#plumber"}, "areaServed": "Toronto and the Greater Toronto Area", "url": SITE_URL + f"services/{s['slug']}.html"},
          {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL}, {"@type": "ListItem", "position": 2, "name": "Services", "item": SITE_URL + "services/index.html"}, {"@type": "ListItem", "position": 3, "name": s["title"]}]}]
    body = f'''
<section class="page-hero" aria-labelledby="svc-title">
  <div class="wrap page-hero-grid">
    <div>
      <nav class="crumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a> / <a href="index.html">Services</a> / <span>{e(s["nav"])}</span></nav>
      <p class="eyebrow">{e(s["title"])}</p>
      <h1 id="svc-title">{e(s["h1"])}</h1>
      <p class="lede">{e(s["intro"])}</p>
      <div class="hero-actions">{tel(cls="btn btn-primary btn-lg")}{book(root, cls="btn btn-outline btn-lg")}</div>
      <p class="fine">$95 assessment, waived when you go ahead · Fixed price before we start · 12-month warranty</p>
    </div>
    <figure class="door door-sm">
      <img src="../photos/{s["photo"]}" alt="{e(s["photo_alt"])}" width="1200" height="1600" fetchpriority="high">
      <figcaption>{e(s["caption"])}</figcaption>
    </figure>
  </div>
</section>

<section class="section" aria-labelledby="fix-title">
  <div class="wrap fix-grid">
    <div>
      <p class="eyebrow">What we fix</p>
      <h2 id="fix-title">On the truck and ready for</h2>
      <ul class="fix-list">{fixes}</ul>
    </div>
    <aside class="aside-card">
      <h3>{e(s["aside_title"])}</h3>
      {aside}
    </aside>
  </div>
</section>

<section class="section reviews reviews-one" aria-label="Customer review">
  <div class="wrap">{review_card(s["review"])}</div>
</section>

{faq_block(s["faq"], title="Questions about " + s["title"].lower(), id_="svc-faq")}

<section class="section related" aria-labelledby="rel-title">
  <div class="wrap">
    <p class="eyebrow">Related</p>
    <h2 id="rel-title" class="sr-only">Related services</h2>
    <div class="related-row">{related}</div>
  </div>
</section>
'''
    title = f'{s["title"]} · Plumber To Your Door, Toronto'
    desc = s["card"] + " Licensed Toronto plumber, fixed pricing, 12-month warranty. Call 647-894-7354."
    return head(root, title, desc, f"services/{s['slug']}.html", ld, og_image="photos/" + s["photo"]) + header(root, "services/emergency-plumbing.html" if s["slug"] == "emergency-plumbing" else "services/index.html") + body + footer(root)

def page_services_index():
    root = "../"
    cards = "".join(service_card(root, s) for s in SERVICES)
    body = f'''
<section class="page-hero page-hero-plain" aria-labelledby="pt">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a> / <span>Services</span></nav>
    <p class="eyebrow">Services</p>
    <h1 id="pt">Everything we fix, grouped by the problem you have.</h1>
    <p class="lede">Residential and small commercial plumbing across Toronto and the GTA. Fixed price before we start, 12-month warranty after.</p>
    <div class="hero-actions">{tel(cls="btn btn-primary btn-lg")}{book(root, cls="btn btn-outline btn-lg")}</div>
  </div>
</section>
<section class="section services"><div class="wrap"><div class="service-grid">{cards}</div></div></section>
{pricing_section(root)}
'''
    return head(root, "Plumbing services in Toronto · Plumber To Your Door", "Emergency plumbing, drain cleaning, sewer and water lines, basement flooding, toilets and fixtures, water heaters, leaks and commercial plumbing across Toronto and the GTA.", "services/index.html") + header(root, "services/index.html") + body + footer(root)

# ---------------------------------------------------------------- OTHER PAGES
def page_area():
    root = ""
    tor = "".join(f'<li>{e(a)}</li>' for a in TORONTO_AREAS)
    times = {"West": "45–90 min", "North": "45–90 min", "East": "60–90 min", "Farther out": "Same or next day, scheduled"}
    gta = "".join(f'<div class="area-card" id="{g.lower().replace(" ", "-")}"><h3>{e(g)}</h3><p class="eyebrow">Emergency response {e(times[g])}</p><ul>{"".join(f"<li id=\"{c.lower().replace(' ', '-').replace('.', '')}\">{e(c)}</li>" for c in cs)}</ul></div>' for g, cs in GTA)
    body = f'''
<section class="page-hero page-hero-plain" aria-labelledby="pt">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <span>Service area</span></nav>
    <p class="eyebrow">Service area</p>
    <h1 id="pt">Vans based at Bloor &amp; Bathurst, on the road across the GTA.</h1>
    <p class="lede">Emergency response is 60 to 90 minutes in the city. Outside Toronto we give you a real arrival time on the phone rather than a promise we can't keep in traffic.</p>
    <div class="hero-actions">{tel(cls="btn btn-primary btn-lg")}{book(root, cls="btn btn-outline btn-lg")}</div>
  </div>
</section>
<section class="section area-page">
  <div class="wrap">
    <div class="area-card area-card-toronto"><h2>Toronto</h2><p class="eyebrow">Emergency response 60–90 min</p><ul class="cols">{tor}<li>Everywhere in between</li></ul></div>
    <div class="area-cards">{gta}</div>
    <p class="fine">Don't see your area? Call. If it's within reach of a van, we'll come.</p>
    <div class="map map-wide">
      <a class="map-fallback" href="https://www.google.com/maps/search/?api=1&query=509+Bloor+St+W+Toronto+ON+M5S+1Y2" rel="noopener">Open in Google Maps</a>
      <iframe title="Map of Plumber To Your Door, 509 Bloor St W, Toronto" src="https://www.google.com/maps?q=509+Bloor+St+W,+Toronto,+ON+M5S+1Y2&output=embed" width="600" height="450" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>
'''
    return head(root, "Service area · Plumber To Your Door, Toronto & GTA", "Plumber To Your Door serves Toronto, Etobicoke, North York, Scarborough, Mississauga, Oakville, Richmond Hill and across the GTA. Emergency response 60–90 minutes in the city.", "service-area.html") + header(root, "service-area.html") + body + footer(root)

def page_reviews():
    root = ""
    cards = "".join(review_card(k) for k in REVIEWS)
    body = f'''
<section class="page-hero page-hero-plain" aria-labelledby="pt">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <span>Reviews</span></nav>
    <p class="eyebrow">Reviews</p>
    <h1 id="pt">4.9 out of 5 on Google, from 462 reviews.</h1>
    <p class="lede">What people say after the van has left. Pulled from Google; names shortened. HomeStars Best of the Best winner 2025.</p>
    <div class="hero-actions"><a class="btn btn-primary btn-lg" href="{B["google_reviews_url"]}" rel="noopener">Read them all on Google</a><a class="btn btn-outline btn-lg" href="{B["homestars_url"]}" rel="noopener">HomeStars profile</a></div>
  </div>
</section>
<section class="section reviews"><div class="wrap"><div class="review-grid">{cards}</div></div></section>
'''
    return head(root, "Reviews · Plumber To Your Door, Toronto", "4.9 stars from 462 Google reviews. Read what Toronto homeowners say about George and the Plumber To Your Door crew.", "reviews.html") + header(root, "reviews.html") + body + footer(root)

def page_about():
    root = ""
    team = "".join(f'<li><span class="team-name">{e(n)}</span><span class="team-role">{e(r)}</span><span class="team-note">{e(d)}</span></li>' for n, r, d in TEAM)
    body = f'''
<section class="page-hero" aria-labelledby="pt">
  <div class="wrap page-hero-grid">
    <div>
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <span>About</span></nav>
      <p class="eyebrow">About</p>
      <h1 id="pt">We're not a call centre. We're the people in the van.</h1>
      <p class="lede">Plumber To Your Door is a family-owned Toronto plumbing company started in 2021 by George, a licensed plumber with 15+ years in the trade. The business was built on the idea in the name: a plumber comes to your door, tells you the price, fixes it and stands behind it.</p>
      <div class="hero-actions">{tel(cls="btn btn-primary btn-lg")}{book(root, cls="btn btn-outline btn-lg")}</div>
    </div>
    <figure class="door door-sm">
      <img src="photos/george-kitchen-sink.jpg" alt="George working under a kitchen sink" width="1200" height="1600" fetchpriority="high">
      <figcaption>George, under a kitchen sink in Toronto</figcaption>
    </figure>
  </div>
</section>
<section class="section"><div class="wrap about-grid">
  <div>
    <p class="eyebrow">How we work</p>
    <h2>Three things we don't do.</h2>
    <ul class="fix-list">
      <li><strong>We don't charge by the hour.</strong> You get a fixed price for the job before we start.</li>
      <li><strong>We don't charge more at night.</strong> The emergency line is open 24/7 and the price is the price.</li>
      <li><strong>We don't walk away.</strong> 12 months on parts and workmanship, 5 years on main water lines.</li>
    </ul>
    <p class="eyebrow">Credentials</p>
    <ul class="fix-list">
      <li>Ontario plumbing licence {B["licence"]}</li>
      <li>Licensed, insured and bonded</li>
      <li>HomeStars Best of the Best winner 2025</li>
      <li>4.9 stars from 462 Google reviews</li>
    </ul>
  </div>
  <div>
    <p class="eyebrow">The crew</p>
    <ul class="team-list">{team}</ul>
  </div>
</div></section>
<section class="section projects"><div class="wrap">
  <div class="section-head"><p class="eyebrow">The vans</p><h2>Two Metris vans, T5 and T6, stocked for the common jobs.</h2></div>
  <div class="van-row">
    <img src="photos/van-street.jpg" alt="Plumber To Your Door van on a Toronto street" width="1600" height="1200" loading="lazy">
    <img src="photos/vans-snow.jpg" alt="Both Plumber To Your Door vans in a snowy driveway" width="1600" height="1200" loading="lazy">
    <img src="photos/van-garage.jpg" alt="Plumber To Your Door van in an underground parking garage" width="1200" height="1600" loading="lazy">
  </div>
</div></section>
'''
    return head(root, "About · Plumber To Your Door, Toronto", "Family-owned Toronto plumbing company started in 2021 by George, a licensed plumber with 15+ years in the trade. Meet the crew and see how we work.", "about.html", og_image="photos/george-kitchen-sink.jpg") + header(root, "about.html") + body + footer(root)

def page_book():
    root = ""
    opts = "".join(f'<option value="{e(s["title"])}">{e(s["title"])}</option>' for s in SERVICES)
    body = f'''
<section class="page-hero page-hero-plain" aria-labelledby="pt">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <span>Book online</span></nav>
    <p class="eyebrow">Book online</p>
    <h1 id="pt">Tell us what's going on. We'll call you back with a time.</h1>
    <p class="lede">For anything urgent, skip the form and call {tel(label=B["phone"], cls="inline-tel", icon=False)}. The emergency line is open 24/7.</p>
  </div>
</section>
<section class="section"><div class="wrap book-grid">
  <form class="book-form" action="{B["form_action"]}" method="POST">
    <div class="field-row">
      <label>Your name<input type="text" name="name" autocomplete="name" required></label>
      <label>Phone<input type="tel" name="phone" autocomplete="tel" inputmode="tel" required></label>
    </div>
    <div class="field-row">
      <label>Email <span class="opt">(optional)</span><input type="email" name="email" autocomplete="email"></label>
      <label>Address or neighbourhood<input type="text" name="address" autocomplete="street-address" required></label>
    </div>
    <label>What kind of job is it?
      <select name="service"><option value="">Not sure</option>{opts}</select>
    </label>
    <fieldset class="urgency">
      <legend>How urgent?</legend>
      <label><input type="radio" name="urgency" value="Emergency - water is running now" required> Emergency: water is going somewhere it shouldn't</label>
      <label><input type="radio" name="urgency" value="Today or tomorrow"> Today or tomorrow</label>
      <label><input type="radio" name="urgency" value="This week is fine"> This week is fine</label>
    </fieldset>
    <label>What's happening? <span class="opt">(what you see, when it started, what you've tried)</span>
      <textarea name="message" rows="5" required></textarea>
    </label>
    <label class="consent"><input type="checkbox" name="consent" value="yes" required> It's okay to call or text me about this request.</label>
    <input type="hidden" name="_subject" value="New booking request from the website">
    <input type="text" name="_gotcha" class="sr-only" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" class="btn btn-primary btn-lg">Send request</button>
    <p class="fine">We reply by phone during office hours (7 am – midnight). Photos help: text them to {e(B["phone"])} after you send this.</p>
  </form>
  <aside class="aside-card">
    <h3>What happens next</h3>
    <ol class="steps">
      <li><strong>We call you back</strong> with a time window, usually within the hour during the day.</li>
      <li><strong>A licensed plumber arrives</strong>, looks at the problem and gives you a fixed price. The $95 assessment comes off the bill if you go ahead.</li>
      <li><strong>Fixed, cleaned up, warrantied.</strong> 12 months on parts and workmanship.</li>
    </ol>
    <h3>Prefer to talk?</h3>
    <p>{tel(cls="btn btn-primary")}</p>
    <p class="fine">Office {e(B["hours_office"])}. Emergencies any hour.</p>
  </aside>
</div></section>
'''
    return head(root, "Book online · Plumber To Your Door, Toronto", "Request a plumber online. Tell us what's happening and we'll call you back with a time. For emergencies call 647-894-7354, open 24/7.", "book.html") + header(root, "") + body + footer(root)

def write(path, content):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f: f.write(content)
    print(f"wrote {path} ({len(content)//1024} KB)")

if __name__ == "__main__":
    write("index.html", page_home())
    write("services/index.html", page_services_index())
    for s in SERVICES: write(f"services/{s['slug']}.html", page_service(s))
    write("service-area.html", page_area())
    write("reviews.html", page_reviews())
    write("about.html", page_about())
    write("book.html", page_book())
