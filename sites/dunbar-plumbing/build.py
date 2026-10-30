#!/usr/bin/env python3
"""Builds every page of the Dunbar Plumbing site from content.py.
Run:  python3 build.py
Outputs: index.html, services.html, services/<slug>.html, service-areas.html, contact.html, privacy.html
"""
import html, json, os, datetime
from content import *

ROOT = os.path.dirname(os.path.abspath(__file__))
YEAR = datetime.date.today().year
B = BUSINESS
e = html.escape


def P(rel, path):
    """Prefix a site-relative path for a page at depth `rel` ('' or '../')."""
    return rel + path


# ---------- shared fragments ----------

LOGO_SVG = """<svg class="wordmark" viewBox="0 0 340 66" role="img" aria-label="Dunbar Plumbing">
  <path d="M28 17 Q170 -9 312 17 Q170 4 28 17 Z"/>
  <text x="170" y="46" text-anchor="middle" textLength="282" lengthAdjust="spacingAndGlyphs">DUNBAR PLUMBING</text>
  <path d="M28 49 Q170 75 312 49 Q170 62 28 49 Z"/>
</svg>"""

STAR = '<svg class="star" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.5 7.8l5.9-.8z"/></svg>'


def phone_link(cls="", label=None, rel=""):
    label = label or f"Call {B['phone_display']}"
    return f'<a class="{cls}" href="tel:{B["phone_e164"]}">{e(label)}</a>'


def sms_link(cls="", label="Text us"):
    return f'<a class="{cls}" href="sms:{B["phone_e164"]}?&body=Hi%20Dunbar%20Plumbing%2C%20">{e(label)}</a>'


def head(rel, title, desc, path, schema_extra=None):
    url = f"{BASE_URL}/{path}" if path else f"{BASE_URL}/"
    schema = [plumber_schema()]
    if schema_extra:
        schema += schema_extra
    return f"""<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Dunbar Plumbing Ltd.">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{BASE_URL}/photos/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#16304F">
<link rel="icon" href="{P(rel,'favicon.svg')}" type="image/svg+xml">
<link rel="apple-touch-icon" href="{P(rel,'apple-touch-icon.png')}">
<link rel="preload" href="{P(rel,'fonts/archivo-black.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{P(rel,'fonts/archivo-var.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{P(rel,'styles.css')}">
<script type="application/ld+json">{json.dumps(schema if len(schema) > 1 else schema[0], ensure_ascii=False)}</script>
</head>"""


def plumber_schema():
    return {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "@id": f"{BASE_URL}/#business",
        "name": B["name"],
        "alternateName": B["short"],
        "url": f"{BASE_URL}/",
        "telephone": B["phone_e164"],
        "email": B["email"],
        "image": f"{BASE_URL}/photos/og.jpg",
        "logo": f"{BASE_URL}/apple-touch-icon.png",
        "foundingDate": str(B["founded"]),
        "slogan": B["tagline"],
        "priceRange": "$$",
        "address": {"@type": "PostalAddress", "addressLocality": "Vancouver", "addressRegion": "BC", "addressCountry": "CA"},
        "areaServed": [{"@type": "Place", "name": a[0] + ", Vancouver"} for a in AREAS],
        "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:30", "closes": "17:00"}],
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": B["google_rating"], "reviewCount": B["google_count"], "bestRating": "5"},
        "sameAs": [B["google_url"], B["bbb_url"], B["yelp_url"]],
        "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Plumbing services", "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": s["title"], "url": f"{BASE_URL}/services/{s['slug']}.html"}} for s in SERVICES]},
    }


def faq_schema(items):
    return {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in items]}


def breadcrumb_schema(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": f"{BASE_URL}/{u}"} for i, (n, u) in enumerate(items)]}


def header(rel, active=""):
    nav = "".join(
        f'<li><a href="{P(rel,u)}"{" aria-current=\"page\"" if u.split("#")[0]==active else ""}>{e(l)}</a></li>' for u, l in NAV)
    return f"""<a class="skip" href="#main">Skip to content</a>
<div class="util">
  <div class="wrap util-in">
    <span class="util-hours"><b>{e(B['hours_short'])}</b> · <span class="util-long">Call before noon, usually there the same day</span><span class="util-short">Usually there the same day</span><span class="util-closed" hidden></span></span>
    <span class="util-area">Based in {e(B['base_area'])} · Serving {e(B['region'])} · No travel time charges</span>
  </div>
</div>
<header class="site">
  <div class="wrap site-in">
    <a class="brand" href="{P(rel,'index.html')}" aria-label="Dunbar Plumbing home">{LOGO_SVG}</a>
    <nav class="nav" aria-label="Main">
      <ul>{nav}</ul>
    </nav>
    <div class="site-cta">
      {phone_link('btn btn-ghost btn-phone')}
      <a class="btn btn-red" href="{P(rel,'contact.html')}">Request a visit</a>
    </div>
    <button class="burger" type="button" aria-expanded="false" aria-controls="mnav" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div>
  <div class="mnav" id="mnav" hidden>
    <ul>{nav}<li><a href="{P(rel,'contact.html')}">Request a visit</a></li></ul>
    <div class="mnav-contact">{phone_link('btn btn-red')}{sms_link('btn btn-outline')}</div>
  </div>
</header>"""


def van_band():
    return '<div class="vanband" aria-hidden="true"><div class="wrap vanband-in">' + \
        '<span class="dot"></span>'.join(f'<span>{e(w)}</span>' for w in VAN_BAND) + '</div></div>'


def stripe():
    return '<div class="stripe" aria-hidden="true"></div>'


def cta_band(rel, heading="Something leaking right now?", text=None):
    text = text or f"Call us on a weekday before noon and we are usually there the same day. Hours are {B['hours_days']}, {B['hours_time']}. Outside hours, leave a message or text and we call back first thing."
    return f"""<section class="band band-red">
  <div class="wrap band-in">
    <div>
      <h2>{e(heading)}</h2>
      <p>{e(text)}</p>
    </div>
    <div class="band-cta">
      {phone_link('btn btn-white')}
      {sms_link('btn btn-outline-white')}
    </div>
  </div>
</section>"""


def creds_row():
    return """<ul class="creds" aria-label="Credentials">
  <li><b>Licensed</b> bonded and insured</li>
  <li><b>WorkSafeBC</b> approved</li>
  <li><b>BBB A+</b> accredited since 2023</li>
  <li><b>Since 2002</b> on the West Side</li>
  <li><b>No</b> travel time charges</li>
</ul>"""


def review_card(key):
    name, src, when, text, job = REVIEWS[key]
    return f"""<figure class="review">
  <div class="review-stars" aria-label="5 out of 5 stars">{STAR*5}</div>
  <blockquote>{e(text)}</blockquote>
  <figcaption><b>{e(name)}</b> <span>{e(src)} · {e(when)}</span><em>{e(job)}</em></figcaption>
</figure>"""


def faq_block(items, heading="Questions people ask us"):
    its = "".join(f"""<details class="faq-item"><summary>{e(q)}</summary><div class="faq-a"><p>{e(a)}</p></div></details>""" for q, a in items)
    return f"""<section class="section faq" id="faq">
  <div class="wrap narrow">
    <h2>{e(heading)}</h2>
    {its}
  </div>
</section>"""


def form_html(rel, compact=False):
    opts = "".join(f'<option>{e(o)}</option>' for o in NEIGHBOURHOOD_OPTIONS)
    return f"""<form class="req" action="{B['formspree']}" method="POST" novalidate>
  <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="hp" aria-hidden="true">
  <input type="hidden" name="_subject" value="Website request: new visit">
  <div class="req-grid">
    <label><span>Your name</span><input type="text" name="name" autocomplete="name" required></label>
    <label><span>Phone</span><input type="tel" name="phone" autocomplete="tel" inputmode="tel" required></label>
    <label><span>Email <small>(optional)</small></span><input type="email" name="email" autocomplete="email"></label>
    <label><span>Neighbourhood</span><select name="neighbourhood">{opts}</select></label>
    <label class="full"><span>What's going on?</span><textarea name="message" rows="4" required placeholder="Kitchen sink drains slowly, leak under the bathroom sink, no hot water since this morning…"></textarea></label>
    <label class="check full"><input type="checkbox" name="urgent" value="yes"> <span>This is urgent (water is leaking or something is not working at all)</span></label>
  </div>
  <div class="req-foot">
    <button class="btn btn-red" type="submit">Send request</button>
    <p class="req-note">We reply by phone or text during office hours, {e(B['hours_short'])}. If it cannot wait, {phone_link('', 'call ' + B['phone_display'])}. See our <a href="{P(rel,'privacy.html')}">privacy note</a>.</p>
  </div>
  <p class="req-ok" hidden role="status">Thanks, we have your request. We will call or text you back during office hours.</p>
  <p class="req-err" hidden role="alert">The form did not send. Please call or text {e(B['phone_display'])} instead.</p>
</form>"""


def footer(rel):
    svc = "".join(f'<li><a href="{P(rel,"services/"+s["slug"]+".html")}">{e(s["title"])}</a></li>' for s in SERVICES)
    areas = "".join(f'<li>{e(a[0])}</li>' for a in AREAS)
    return f"""<footer class="foot">
  {stripe()}
  <div class="wrap foot-in">
    <div class="foot-brand">
      {LOGO_SVG}
      <p>{e(B['tagline'])}. Family-run residential plumbers based in {e(B['base_area'])} since {B['founded']}.</p>
      <p class="foot-contact">
        {phone_link('', B['phone_display'])}<br>
        <a href="mailto:{B['email']}">{e(B['email'])}</a><br>
        {e(B['hours_short'])}<br>
        Closed Saturday and Sunday
      </p>
    </div>
    <div>
      <h3>Services</h3>
      <ul>{svc}</ul>
    </div>
    <div>
      <h3>Areas we serve</h3>
      <ul>{areas}</ul>
      <p><a href="{P(rel,'service-areas.html')}">See the full list</a></p>
    </div>
    <div>
      <h3>Company</h3>
      <ul>
        <li><a href="{P(rel,'index.html#about')}">About Ken and Dexter</a></li>
        <li><a href="{P(rel,'index.html#reviews')}">Reviews</a></li>
        <li><a href="{P(rel,'contact.html')}">Request a visit</a></li>
        <li><a href="{B['google_url']}" rel="noopener">Google listing</a></li>
        <li><a href="{B['bbb_url']}" rel="noopener">BBB profile</a></li>
        <li><a href="{P(rel,'privacy.html')}">Privacy</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-legal">
    <p>Dunbar Plumbing Ltd. · Licensed, bonded and insured · Certified tradesmen · WorkSafeBC approved · BBB Accredited Business, A+</p>
    <p>© <span id="year">{YEAR}</span> Dunbar Plumbing Ltd. · Vancouver, BC · <a href="https://web.soichirosaimon.com" rel="noopener">Site by Sony Saimon</a></p>
  </div>
</footer>
<div class="mobilebar" aria-label="Quick actions">
  {phone_link('mb-call', 'Call')}
  {sms_link('mb-text', 'Text')}
  <a class="mb-req" href="{P(rel,'contact.html')}">Request a visit</a>
</div>
<script src="{P(rel,'main.js')}" defer></script>
</body>
</html>"""


# ---------- pages ----------

def page_home():
    rel = ""
    chips = "".join(f'<a class="chip" href="{u}">{e(l)}</a>' for l, u in SYMPTOMS)
    trust = "".join(f'<li><b>{e(a)}</b><span>{e(b)}</span></li>' for a, b in TRUST)
    groups = ""
    for gid, gname, gdesc in GROUPS:
        cards = "".join(f"""<a class="svc" href="services/{s['slug']}.html">
      <h4>{e(s['title'])}</h4>
      <p>{e(s['symptom'])}</p>
      <span class="svc-more">What we do<i aria-hidden="true">→</i></span>
    </a>""" for s in SERVICES if s["group"] == gid)
        groups += f"""<div class="svc-group">
    <div class="svc-head"><h3>{e(gname)}</h3><p>{e(gdesc)}</p></div>
    <div class="svc-cards">{cards}</div>
  </div>"""
    why = "".join(f'<li><h3>{e(h)}</h3><p>{e(t)}</p></li>' for h, t in WHY)
    steps = "".join(f'<li><span class="step-n">{i+1}</span><h3>{e(h)}</h3><p>{e(t)}</p></li>' for i, (h, t) in enumerate(STEPS))
    reviews = "".join(review_card(k) for k in HOME_REVIEWS)
    areas = "".join(f'<li><b>{e(n)}</b><p>{e(t)}</p></li>' for n, t in AREAS)

    body = f"""
<body class="home">
{header(rel, 'index.html')}
<main id="main">
<section class="hero">
  <div class="wrap hero-in">
    <div class="hero-left">
      <p class="eyebrow">Dunbar Plumbing · {e(B['region'])} · Since {B['founded']}</p>
      <h1>Always in the neighbourhood.</h1>
    </div>
    <div class="hero-right">
      <p class="lede">Family-run plumbers for Dunbar, Kitsilano, Point Grey and Kerrisdale. Call before noon on a weekday and we are usually there the same day. No travel time charges.</p>
      <ul class="facts">
        <li><a href="{B['google_url']}" rel="noopener">{STAR}<b>{B['google_rating']}</b> Google · {B['google_count']} reviews</a></li>
        <li><b>A+</b> BBB accredited</li>
        <li>Licensed, bonded, insured</li>
      </ul>
      <div class="hero-cta">
        {phone_link('btn btn-red btn-lg')}
        <a class="btn btn-outline btn-lg" href="contact.html">Request a visit</a>
      </div>
      <div class="symptoms">
        <p>What's going on?</p>
        <div class="chips">{chips}</div>
      </div>
    </div>
  </div>
  <figure class="hero-photo">
    <picture>
      <source media="(max-width: 760px)" srcset="photos/crew-trucks-mobile.jpg">
      <img src="photos/crew-trucks.jpg" width="{HERO_W}" height="{HERO_H}" alt="The Dunbar Plumbing crew standing beside their two white service trucks, with the North Shore mountains behind" fetchpriority="high">
    </picture>
    <figcaption>Ken and Dexter with the two trucks you see around the West Side</figcaption>
  </figure>
</section>
{van_band()}

<section class="trust" aria-label="Why people trust us">
  <ul class="wrap trust-in">{trust}</ul>
</section>

<section class="section services" id="services">
  <div class="wrap">
    <div class="section-head">
      <h2>What we fix, replace and renovate</h2>
      <p>Residential plumbing for houses, suites and small buildings on the West Side. Pick the one that sounds like your problem.</p>
    </div>
    {groups}
    <p class="section-foot"><a class="btn btn-outline" href="services.html">All services</a></p>
  </div>
</section>

{cta_band(rel)}

<section class="section why">
  <div class="wrap">
    <div class="section-head">
      <h2>Why the West Side keeps calling us back</h2>
    </div>
    <ul class="why-list">{why}</ul>
  </div>
</section>

<section class="section steps">
  <div class="wrap">
    <div class="section-head">
      <h2>How a visit works</h2>
      <p>No dispatcher, no call centre. The person you speak to is the person who shows up.</p>
    </div>
    <ol class="steps-list">{steps}</ol>
  </div>
</section>

<section class="section reviews" id="reviews">
  <div class="wrap">
    <div class="section-head">
      <h2>What customers say</h2>
      <ul class="platforms">
        <li><a href="{B['google_url']}" rel="noopener">{STAR}<b>{B['google_rating']}</b> on Google · {B['google_count']} reviews</a></li>
        <li><a href="{B['yelp_url']}" rel="noopener">{STAR}<b>{B['yelp_rating']}</b> on Yelp · {B['yelp_count']} reviews</a></li>
        <li><a href="{B['bbb_url']}" rel="noopener"><b>A+</b> BBB Accredited Business</a></li>
      </ul>
    </div>
    <div class="review-grid">{reviews}</div>
    <p class="section-foot"><a class="btn btn-outline" href="{B['google_url']}" rel="noopener">Read all {B['google_count']} Google reviews</a> <a class="btn btn-ghost" href="{B['google_url']}" rel="noopener">Leave a review</a></p>
  </div>
</section>

<section class="section areas" id="areas">
  <div class="wrap areas-in">
    <div>
      <div class="section-head">
        <h2>Where we work</h2>
        <p>Based in Dunbar, serving the West Side of Vancouver only. That is why we can be there fast and why there is no travel charge.</p>
      </div>
      <ul class="area-list">{areas}</ul>
      <p class="section-foot left"><a class="btn btn-outline" href="service-areas.html">More about each neighbourhood</a></p>
    </div>
    <div class="map">
      <iframe title="Map of Vancouver's West Side, Dunbar Plumbing service area" src="https://www.google.com/maps?q=Dunbar-Southlands,+Vancouver,+BC&z=12&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section class="section about" id="about">
  <div class="wrap about-in">
    <figure class="about-photo">
      <img src="photos/crew-detail.jpg" width="{DETAIL_W}" height="{DETAIL_H}" alt="One of the Dunbar Plumbing plumbers beside the service truck" loading="lazy">
    </figure>
    <div class="about-text">
      <p class="eyebrow">About us</p>
      <h2>Ken, Dexter, and two well-stocked trucks.</h2>
      <p>Ken MacDonald started Dunbar Plumbing in {B['founded']} to look after the houses around him on the West Side. His son Dexter works alongside him now. Between them they have been inside more Dunbar, Kitsilano and Point Grey basements than almost anyone, which is why customers say they know what is behind the wall before it is opened.</p>
      <p>We are licensed, bonded and insured. Our plumbers are certified tradesmen and WorkSafeBC approved. Dunbar Plumbing Ltd. has been a BBB Accredited Business with an A+ rating since {B['bbb_since']}.</p>
      <p>We also look after small commercial spaces and multi-family buildings in Kitsilano for owners who want one plumber who knows the building.</p>
      {creds_row()}
    </div>
  </div>
</section>

{faq_block(FAQ_HOME)}

<section class="section request" id="request">
  <div class="wrap request-in">
    <div class="request-text">
      <h2>Request a visit</h2>
      <p>Tell us what is going on and we will call or text you back with a time. For anything urgent, the phone is faster.</p>
      <p class="request-phone">{phone_link('', B['phone_display'])}<br><small>{e(B['hours_short'])}</small></p>
      {sms_link('btn btn-outline', 'Text us a photo')}
    </div>
    {form_html(rel)}
  </div>
</section>
</main>
{footer(rel)}"""
    return head(rel, "Dunbar Plumbing Ltd. · Plumbers for Vancouver's West Side", "Family-run plumbers serving Dunbar, Kitsilano, Point Grey and Kerrisdale since 2002. Same-day service on weekday calls before noon, no travel charges. 5.0 on Google, BBB A+.", "", [faq_schema(FAQ_HOME)]) + body


def page_services():
    rel = ""
    chips = "".join(f'<a class="chip" href="{u}">{e(l)}</a>' for l, u in SYMPTOMS)
    groups = ""
    for gid, gname, gdesc in GROUPS:
        cards = "".join(f"""<a class="svc svc-wide" href="services/{s['slug']}.html">
      <h3>{e(s['title'])}</h3>
      <p class="svc-symptom">{e(s['symptom'])}</p>
      <p>{e(s['lead'])}</p>
      <span class="svc-more">What we do<i aria-hidden="true">→</i></span>
    </a>""" for s in SERVICES if s["group"] == gid)
        groups += f"""<div class="svc-group">
    <div class="svc-head"><h2>{e(gname)}</h2><p>{e(gdesc)}</p></div>
    <div class="svc-cards">{cards}</div>
  </div>"""
    body = f"""
<body class="inner">
{header(rel, 'services.html')}
<main id="main">
<section class="pagehead">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Services</span></nav>
    <p class="eyebrow">Residential plumbing · {e(B['region'])}</p>
    <h1>Services</h1>
    <p class="lede">Everything a West Side house needs from a plumber, from a dripping tap to a full repipe. No travel time charges, and most jobs finished on the first visit.</p>
    <div class="hero-cta">{phone_link('btn btn-red btn-lg')}<a class="btn btn-outline btn-lg" href="contact.html">Request a visit</a></div>
    <div class="symptoms"><p>What's going on?</p><div class="chips">{chips}</div></div>
  </div>
</section>
{van_band()}
<section class="section services">
  <div class="wrap">{groups}</div>
</section>
{cta_band(rel)}
</main>
{footer(rel)}"""
    return head(rel, "Plumbing services · Dunbar Plumbing Ltd.", "Drains, leaks, toilets, garburators, faucets, hot water tanks, repiping and bathroom renovations for Vancouver's West Side. Family-run since 2002.", "services.html", [breadcrumb_schema([("Home", ""), ("Services", "services.html")])]) + body


def page_service(s):
    rel = "../"
    gname = next(g[1] for g in GROUPS if g[0] == s["group"])
    intro = "".join(f"<p>{e(p)}</p>" for p in s["intro"])
    inc = "".join(f"<li>{e(i)}</li>" for i in s["included"])
    revs = "".join(review_card(k) for k in s["reviews"])
    related = "".join(f"""<a class="svc" href="{r}.html"><h4>{e(next(x['title'] for x in SERVICES if x['slug']==r))}</h4><p>{e(next(x['symptom'] for x in SERVICES if x['slug']==r))}</p><span class="svc-more">What we do<i aria-hidden="true">→</i></span></a>""" for r in s["related"])
    schema = [
        faq_schema(s["faq"]),
        breadcrumb_schema([("Home", ""), ("Services", "services.html"), (s["title"], f"services/{s['slug']}.html")]),
        {"@context": "https://schema.org", "@type": "Service", "name": s["title"], "serviceType": s["title"], "description": s["lead"],
         "provider": {"@id": f"{BASE_URL}/#business"}, "areaServed": [{"@type": "Place", "name": a[0] + ", Vancouver"} for a in AREAS], "url": f"{BASE_URL}/services/{s['slug']}.html"},
    ]
    body = f"""
<body class="inner service">
{header(rel, 'services.html')}
<main id="main">
<section class="pagehead">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="../services.html">Services</a><span>/</span><span>{e(s['short'])}</span></nav>
    <p class="eyebrow">{e(gname)} · {e(B['region'])}</p>
    <h1>{e(s['title'])}</h1>
    <p class="lede">{e(s['lead'])}</p>
    <div class="hero-cta">{phone_link('btn btn-red btn-lg')}<a class="btn btn-outline btn-lg" href="../contact.html">Request a visit</a></div>
    <p class="pagehead-note"><b>Sounds familiar?</b> {e(s['symptom'])}</p>
  </div>
</section>
{van_band()}
<section class="section svc-body">
  <div class="wrap svc-cols">
    <div class="svc-main">
      {intro}
      <h2>What's included</h2>
      <ul class="checks">{inc}</ul>
    </div>
    <aside class="svc-aside">
      <div class="local">
        <p class="eyebrow">In West Side homes</p>
        <p>{e(s['local'])}</p>
      </div>
      <div class="aside-call">
        <p class="eyebrow">Talk to a plumber</p>
        {phone_link('btn btn-red', B['phone_display'])}
        {sms_link('btn btn-outline', 'Text a photo')}
        <p><small>{e(B['hours_short'])} · No travel time charges</small></p>
      </div>
    </aside>
  </div>
</section>
{cta_band(rel)}
<section class="section">
  <div class="wrap">
    {creds_row()}
    <div class="review-grid two">{revs}</div>
  </div>
</section>
{faq_block(s['faq'], 'Questions about ' + s['short'].lower())}
<section class="section related">
  <div class="wrap">
    <div class="section-head"><h2>Related services</h2></div>
    <div class="svc-cards">{related}</div>
  </div>
</section>
</main>
{footer(rel)}"""
    return head(rel, f"{s['title']} · Dunbar Plumbing, Vancouver West Side", s["lead"] + f" Serving Dunbar, Kitsilano, Point Grey and Kerrisdale. Call {B['phone_display']}.", f"services/{s['slug']}.html", schema) + body


def page_areas():
    rel = ""
    cards = "".join(f'<li class="area-card"><h2>{e(n)}</h2><p>{e(t)}</p></li>' for n, t in AREAS)
    faq = [FAQ_HOME[1], FAQ_HOME[0], ("Do you come to the North Shore or the East Side?", "Not as a rule. Staying on the West Side is how we keep response times short and travel charges at zero. If you are just outside our area, call and we will tell you honestly whether we can help.")]
    body = f"""
<body class="inner">
{header(rel, 'service-areas.html')}
<main id="main">
<section class="pagehead">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Areas we serve</span></nav>
    <p class="eyebrow">Based in Dunbar · West Side only</p>
    <h1>Areas we serve</h1>
    <p class="lede">We work on the West Side of Vancouver and nowhere else. It keeps us close, which is why a weekday call before noon usually means a same-day visit and why there are no travel time charges.</p>
    <div class="hero-cta">{phone_link('btn btn-red btn-lg')}<a class="btn btn-outline btn-lg" href="contact.html">Request a visit</a></div>
  </div>
</section>
{van_band()}
<section class="section">
  <div class="wrap areas-page">
    <div class="map tall">
      <iframe title="Map of Vancouver's West Side, Dunbar Plumbing service area" src="https://www.google.com/maps?q=Dunbar-Southlands,+Vancouver,+BC&z=12&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
    <ul class="area-cards">{cards}</ul>
    <p class="nearby">{e(NEARBY)}</p>
  </div>
</section>
{cta_band(rel, "Not sure if you are in our area?", "Call and ask. If we cannot get to you quickly we will say so rather than keep you waiting.")}
{faq_block(faq, 'Questions about where we work')}
</main>
{footer(rel)}"""
    return head(rel, "Areas we serve · Dunbar Plumbing, Vancouver West Side", "Plumbers for Dunbar, Southlands, West Point Grey, Kitsilano, Kerrisdale, Arbutus Ridge, Shaughnessy and UBC. West Side only, no travel charges.", "service-areas.html", [faq_schema(faq), breadcrumb_schema([("Home", ""), ("Areas we serve", "service-areas.html")])]) + body


def page_contact():
    rel = ""
    steps = "".join(f'<li><span class="step-n">{i+1}</span><h3>{e(h)}</h3><p>{e(t)}</p></li>' for i, (h, t) in enumerate(STEPS))
    body = f"""
<body class="inner contact">
{header(rel, 'contact.html')}
<main id="main">
<section class="pagehead">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Request a visit</span></nav>
    <p class="eyebrow">{e(B['hours_short'])} · Closed weekends</p>
    <h1>Request a visit</h1>
    <p class="lede">Call, text or send the form. The person who answers is the plumber who comes out.</p>
  </div>
</section>
{van_band()}
<section class="section">
  <div class="wrap contact-grid">
    <div class="contact-ways">
      <a class="way" href="tel:{B['phone_e164']}"><span class="eyebrow">Call</span><b>{e(B['phone_display'])}</b><small>Fastest for anything urgent</small></a>
      <a class="way" href="sms:{B['phone_e164']}"><span class="eyebrow">Text</span><b>{e(B['phone_display'])}</b><small>Send a photo of the problem</small></a>
      <a class="way" href="mailto:{B['email']}"><span class="eyebrow">Email</span><b>{e(B['email'])}</b><small>For quotes and renovation planning</small></a>
      <div class="way static"><span class="eyebrow">Hours</span><b>{e(B['hours_days'])}</b><small>{e(B['hours_time'])}. Messages left outside hours are returned first thing.</small></div>
      <div class="way static"><span class="eyebrow">Where</span><b>Based in Dunbar</b><small>Serving the West Side of Vancouver only. <a href="service-areas.html">See the neighbourhoods</a>.</small></div>
    </div>
    <div class="contact-form">
      <h2>Send a request</h2>
      {form_html(rel)}
    </div>
  </div>
</section>
<section class="section steps alt">
  <div class="wrap">
    <div class="section-head"><h2>What happens next</h2></div>
    <ol class="steps-list">{steps}</ol>
  </div>
</section>
</main>
{footer(rel)}"""
    return head(rel, "Request a visit · Dunbar Plumbing Ltd.", f"Call or text {B['phone_display']} or send a request. Family-run plumbers for Vancouver's West Side, {B['hours_short']}.", "contact.html", [breadcrumb_schema([("Home", ""), ("Request a visit", "contact.html")])]) + body


def page_privacy():
    rel = ""
    body = f"""
<body class="inner">
{header(rel)}
<main id="main">
<section class="pagehead small">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><span>Privacy</span></nav>
    <h1>Privacy note</h1>
  </div>
</section>
<section class="section">
  <div class="wrap narrow prose">
    <p>When you send the request form, your name, phone number, optional email, neighbourhood and message are emailed to Dunbar Plumbing Ltd. so we can call you back about your plumbing. We use them for that purpose only. We do not sell or share them, and we do not send marketing messages.</p>
    <p>The form is delivered by Formspree, which processes the submission on our behalf. This site does not use analytics cookies. The embedded map is provided by Google Maps and loads only when you scroll to it.</p>
    <p>To have your details removed, email <a href="mailto:{B['email']}">{e(B['email'])}</a> or call {phone_link('', B['phone_display'])}.</p>
  </div>
</section>
</main>
{footer(rel)}"""
    return head(rel, "Privacy · Dunbar Plumbing Ltd.", "How Dunbar Plumbing Ltd. uses the details you send through the request form.", "privacy.html") + body


# ---------- write ----------

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"wrote {path} ({len(content)//1024} KB)")


if __name__ == "__main__":
    from PIL import Image
    DETAIL_W, DETAIL_H = Image.open(os.path.join(ROOT, "photos/crew-detail.jpg")).size
    HERO_W, HERO_H = Image.open(os.path.join(ROOT, "photos/crew-trucks.jpg")).size
    write("index.html", page_home())
    write("services.html", page_services())
    for s in SERVICES:
        write(f"services/{s['slug']}.html", page_service(s))
    write("service-areas.html", page_areas())
    write("contact.html", page_contact())
    write("privacy.html", page_privacy())
