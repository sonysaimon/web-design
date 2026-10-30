#!/usr/bin/env python3
"""Generates every HTML page from shared header/footer + per-page content.
Run from the site folder:  python3 tools/build.py
Edit the CONTENT below (or the data in services.js / reviews.js), then rebuild."""
import os, re, json
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://web.soichirosaimon.com/priority-plumbing/'

PHONE = '(647) 247-2275'; TEL = '+16472472275'
BOOK = 'https://book.servicetitan.com/xog76t01mgild6kil2yfcsjg'
MAPS = 'https://maps.google.com/?cid=3485196140299663483'
ADDR = '1594 Dupont St, Toronto, ON M6P 3S7'
LIC_P = 'P17794'; LIC_H = '00749274'

NAV = [('plumbing.html', 'Plumbing'), ('drains-sewer.html', 'Drains & Sewer'), ('heating.html', 'Heating'),
       ('waterproofing.html', 'Waterproofing'), ('areas.html', 'Areas'), ('reviews.html', 'Reviews')]

def head(title, desc, path, og='photos/top-choice-award.jpg', extra_ld=''):
    url = SITE + ('' if path == 'index.html' else path)
    ld = {
      "@context": "https://schema.org", "@type": "Plumber", "name": "Priority Plumbing & Drains",
      "url": url, "telephone": TEL, "image": SITE + og, "foundingDate": "2001",
      "address": {"@type": "PostalAddress", "streetAddress": "1594 Dupont St", "addressLocality": "Toronto", "addressRegion": "ON", "postalCode": "M6P 3S7", "addressCountry": "CA"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.6652225, "longitude": -79.4543336},
      "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}],
      "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1939"},
      "areaServed": ["Toronto", "Mississauga", "Brampton", "Vaughan", "Thornhill", "Oakville"],
      "sameAs": ["https://www.priorityplumbing.ca/", MAPS],
      "hasMap": MAPS, "priceRange": "$$"
    }
    return f'''<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}{og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B2A55">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="preload" href="fonts/BigShouldersDisplay-900.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/IBMPlexSans-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="styles.css">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>{extra_ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
'''

def header(path):
    links = ''.join(f'<a href="{h}"{" aria-current=\"page\"" if h == path else ""}>{t}</a>' for h, t in NAV)
    mlinks = ''.join(f'<li><a href="{h}">{t}</a></li>' for h, t in NAV) + '<li><a href="about.html">About</a></li>'
    return f'''<div class="util">
  <div class="wrap">
    <a href="tel:{TEL}"><span class="pulse" aria-hidden="true"></span>Open 24 hours · Emergency line {PHONE}</a>
    <span class="right">Toronto &amp; the GTA · Plumbing licence #{LIC_P} · Heating licence #{LIC_H}</span>
  </div>
</div>
<header class="nav">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="Priority Plumbing & Drains, home"><span><b>Priority</b> <b>Plumbing</b></span><small>&amp; Drains · Toronto</small></a>
    <nav class="nav-links" aria-label="Main">{links}</nav>
    <div class="nav-cta">
      <a class="btn btn-outline" href="tel:{TEL}">{PHONE}</a>
      <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
    </div>
    <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span></span></button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>{mlinks}</ul>
    <div class="btns">
      <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
      <a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a>
    </div>
  </div>
</header>
<main id="main">
'''

CTA_BAND = f'''<section class="cta-band section-tight">
  <div class="wrap">
    <div>
      <h2>Book a plumber who shows up</h2>
      <p>Pick a time online or call. You get a text when your technician is on the way, a firm price at the door, and a cleaner house than we found it.</p>
    </div>
    <div class="ctas">
      <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
      <a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a>
    </div>
  </div>
</section>
'''

FOOTER = f'''</main>
<footer class="footer">
  <div class="wrap">
    <div>
      <a class="logo" href="index.html"><span><b>Priority</b> <b>Plumbing</b></span><small>&amp; Drains · Toronto</small></a>
      <p style="margin-top:14px">Residential service plumbing, drains, sewer, heating and waterproofing across Toronto and the GTA since 2001. We don&rsquo;t leave until it&rsquo;s right.</p>
      <p class="lic">Plumbing licence #{LIC_P} · Heating licence #{LIC_H} · Licensed and insured</p>
    </div>
    <div>
      <h4>Services</h4>
      <ul><li><a href="plumbing.html">Plumbing</a></li><li><a href="drains-sewer.html">Drains &amp; sewer</a></li><li><a href="heating.html">Heating</a></li><li><a href="waterproofing.html">Basement waterproofing</a></li><li><a href="index.html#offers">Offers</a></li></ul>
    </div>
    <div>
      <h4>Company</h4>
      <ul><li><a href="about.html">About</a></li><li><a href="reviews.html">Reviews</a></li><li><a href="areas.html">Service areas</a></li><li><a href="https://www.priorityplumbing.ca/" rel="noopener">Current website</a></li></ul>
    </div>
    <div class="hours">
      <h4>Reach us</h4>
      <ul>
        <li><a href="tel:{TEL}">{PHONE}</a></li>
        <li><a href="{MAPS}" target="_blank" rel="noopener">{ADDR}</a></li>
        <li><b>Emergency line:</b> 24 hours, 7 days</li>
        <li><b>Scheduled service:</b> 7 days a week, same rate on weekends</li>
        <li><a href="{BOOK}" target="_blank" rel="noopener">Book online</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap base" style="display:flex">
    <span>&copy; <span class="year"></span> Priority Plumbing &amp; Drains</span>
    <span>Site by <a href="https://web.soichirosaimon.com" rel="noopener">Sony Saimon</a></span>
  </div>
</footer>
<div class="mobile-bar">
  <a class="btn btn-outline" href="tel:{TEL}">Call</a>
  <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
</div>
<script src="services.js"></script>
<script src="reviews.js"></script>
<script src="main.js"></script>
</body>
</html>
'''

# ---------------------------------------------------------------- pages
PAGES = {}

PAGES['index.html'] = dict(
  title='Priority Plumbing & Drains | Toronto plumbers, drains & sewer, 24/7',
  desc='Toronto plumbing, drain and sewer, heating and waterproofing since 2001. 4.8 stars from 1,900+ Google reviews, same-day service 7 days a week, lifetime warranty on installations. Book online or call (647) 247-2275.',
  body=f'''
<section class="hero">
  <div class="wrap">
    <div>
      <div class="eyebrow"><span class="tag"><span>Toronto</span></span> Residential plumbers since 2001</div>
      <h1>Fixed right.<br>Or you <em>don&rsquo;t pay.</em></h1>
      <ul class="facts">
        <li><strong>4.8</strong> <span class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span> from <strong>1,939 Google reviews</strong></li>
        <li>Same-day service, 7 days a week, <strong>same rate on weekends</strong></li>
        <li><strong>Lifetime warranty</strong> on every installation</li>
      </ul>
      <div class="ctas">
        <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
        <a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a>
      </div>
      <p class="note">Emergency? The line is open 24 hours. Booking online takes about a minute.</p>
    </div>
    <div class="hero-photo">
      <img src="photos/top-choice-award.jpg" alt="Two Priority Plumbing technicians in navy uniforms holding the Top Choice Award in front of a company van" width="1800" height="1200" fetchpriority="high">
      <div class="proof-card">
        <div class="num">#1<small>Top Choice Award</small></div>
        <p><b>Voted Toronto&rsquo;s best plumbing company</b> by customers, and HomeStars Best of Award winner 2023.</p>
      </div>
    </div>
  </div>
</section>

<section class="trust" aria-label="Why homeowners trust Priority">
  <div class="wrap">
    <ul>
      <li><b>4.8 <span class="stars" aria-hidden="true">&#9733;</span></b><span>1,939 Google reviews</span></li>
      <li><b>Since 2001</b><span>24 years in Toronto homes</span></li>
      <li><b>24 / 7</b><span>Emergency line, same rate nights &amp; weekends</span></li>
      <li><b>#{LIC_P}</b><span>Ontario plumbing licence</span></li>
      <li><b>Lifetime</b><span>Warranty on installations</span></li>
      <li><b>Best value</b><span>We beat any written drain or waterproofing quote</span></li>
    </ul>
  </div>
</section>

<section class="section" id="whats-going-on">
  <div class="wrap">
    <div class="head">
      <span class="tag"><span>Start here</span></span>
      <h2>What&rsquo;s going on?</h2>
      <p>Pick the closest match. We&rsquo;ll tell you which crew we send and what it usually takes.</p>
    </div>
    <div class="picker">
      <div class="symptoms" id="symptoms" role="group" aria-label="Pick your problem"></div>
      <div class="picker-result" id="picker-result" aria-live="polite"></div>
    </div>
  </div>
</section>

<section class="section" id="services" style="padding-top:0">
  <div class="wrap">
    <div class="head">
      <span class="tag blue"><span>What we fix</span></span>
      <h2>Four crews. One phone number.</h2>
      <p>We only do residential service: no new-construction crews learning on your house.</p>
    </div>
    <div class="services" id="services-grid"></div>
  </div>
</section>

<section class="emergency section" id="emergency">
  <div class="wrap">
    <div>
      <span class="k">Emergency plumbing &amp; heating</span>
      <h2>Burst pipe at 2 a.m.? We&rsquo;re up.</h2>
      <a class="phone" href="tel:{TEL}">{PHONE}</a>
      <p>Open 24 hours, 7 days, and the rate is the same at midnight on Sunday as it is on Tuesday afternoon. Acting fast limits damage to walls, floors and foundations.</p>
      <a class="btn btn-outline on-dark" href="{BOOK}" target="_blank" rel="noopener">Not urgent? Book online</a>
    </div>
    <ul aria-label="What counts as an emergency">
      <li>Water you can&rsquo;t shut off</li>
      <li>Sewage backing up into the basement</li>
      <li>No heat in winter, or a boiler leaking</li>
      <li>Sump pump dead during a storm</li>
      <li>No water at all, or a frozen pipe</li>
    </ul>
  </div>
</section>

<section class="section" id="promise">
  <div class="wrap">
    <div class="head">
      <span class="tag"><span>The Priority promise</span></span>
      <h2>Guarantees, not adjectives</h2>
    </div>
    <div class="promise">
      <article class="vow reveal"><span class="k">Workmanship</span><h3>Make it right or you don&rsquo;t pay</h3><p>If you&rsquo;re not satisfied with our workmanship, we come back and fix it. If we can&rsquo;t, you don&rsquo;t pay.</p></article>
      <article class="vow reveal"><span class="k">Installations</span><h3>Lifetime warranty</h3><p>Every fixture, heater, pump and valve we install is covered for as long as you own the house.</p></article>
      <article class="vow reveal"><span class="k">Price</span><h3>We beat any written quote</h3><p>On drain, waterproofing or water-service work, bring a written quote from any licensed, insured contractor and we beat it.</p></article>
      <figure class="vow photo reveal"><img src="photos/truck-parts-inventory.jpg" alt="Rows of labelled parts bins inside a Priority Plumbing service van" width="1800" height="1350" loading="lazy"></figure>
      <article class="vow reveal"><span class="k">One visit</span><h3>Parts on the truck</h3><p>Every van carries a full inventory, so most repairs are finished the day we arrive instead of &ldquo;we&rsquo;ll order it.&rdquo;</p></article>
      <article class="vow reveal"><span class="k">Your home</span><h3>Shoe covers and drop cloths</h3><p>Every visit, every technician. You get a text with who is coming and when, and the work area is cleaned before we leave.</p></article>
    </div>
  </div>
</section>

<section class="section" id="offers" style="padding-top:0">
  <div class="wrap">
    <div class="head">
      <span class="tag blue"><span>Offers</span></span>
      <h2>Painted on the trucks</h2>
      <p>If it&rsquo;s on the side of the van, it&rsquo;s real. Mention the offer when you book.</p>
    </div>
    <div class="offers" id="offers"></div>
  </div>
</section>

<section class="section" id="reviews" style="background:var(--paper)">
  <div class="wrap">
    <div class="head">
      <span class="tag"><span>Reviews</span></span>
      <h2>Who&rsquo;s coming to your door</h2>
      <p>Customers name the technician in their reviews. Pick a name to read what people say about the person who might show up at yours.</p>
    </div>
    <div class="rating-card">
      <div><span class="num">4.8</span><span class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
      <p><b>1,939 reviews on Google.</b> Most-mentioned themes: polite staff, thoroughness, clear explanations, and explaining options without pressure.</p>
    </div>
    <div class="techs" id="techs" role="group" aria-label="Filter reviews by technician"></div>
    <div class="quotes" id="quotes" data-limit="6"></div>
    <div class="reviews-foot">
      <a class="btn btn-outline" href="reviews.html">Read more reviews</a>
      <a class="btn-ghost btn" href="{MAPS}" target="_blank" rel="noopener">See all 1,939 on Google &rarr;</a>
    </div>
  </div>
</section>

<section class="section" id="areas">
  <div class="wrap">
    <div class="areas">
      <div>
        <span class="tag blue"><span>Where we work</span></span>
        <h2>Toronto and the GTA</h2>
        <p class="lead">Based at Dupont and Symington in the Junction Triangle, with trucks across the city every day. Older houses in the Annex, Rosedale and the west end mean clay drains, cast-iron stacks and galvanized supply lines, the exact things our crews see every week.</p>
        <div class="area-cols">
          <div><h3>Toronto</h3><ul>''' + ''.join(f'<li>{a}</li>' for a in ['Annex','Bloor West Village','High Park','Junction Triangle','Roncesvalles','Liberty Village','Leslieville','The Beaches','Danforth','East York','Leaside','Rosedale','North York','Etobicoke','Scarborough']) + f'''</ul></div>
          <div><h3>GTA</h3><ul>''' + ''.join(f'<li>{a}</li>' for a in ['Mississauga','Brampton','Vaughan','Thornhill','Maple','Concord','Oakville']) + f'''</ul>
          <p style="margin-top:14px;font-size:15px;color:var(--grey)">Don&rsquo;t see your area? <a href="tel:{TEL}">Call</a>, we probably cover it.</p></div>
        </div>
      </div>
      <figure class="map">
        <iframe title="Map of Priority Plumbing & Drains at 1594 Dupont St, Toronto" src="https://www.google.com/maps?q=1594+Dupont+St,+Toronto,+ON+M6P+3S7&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        <figcaption>{ADDR} · <a href="areas.html">All service areas</a></figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section" id="about" style="background:var(--paper)">
  <div class="wrap">
    <div class="split">
      <img src="photos/crew-voted-torontos-best.jpg" alt="Three Priority Plumbing technicians in front of a van lettered Voted Toronto's Best" width="1334" height="1800" loading="lazy">
      <div>
        <span class="tag"><span>About</span></span>
        <h2>We don&rsquo;t dabble in residential service</h2>
        <p class="lead">Austin Tsakopoulos started Priority in 2001 because the plumbers who were great on a construction site were showing up in people&rsquo;s homes smelling of smoke and hiding mistakes behind drywall.</p>
        <p>Twenty-four years later the company only does residential service: plumbing, drains, sewer, radiator heating and waterproofing. Technicians are hired for critical thinking and manners first, then trained on the brands and tools in your house.</p>
        <p class="names" aria-label="Technicians customers mention most"><span>Cole</span><span>Kyle</span><span>Tony</span><span>Brian</span><span>Brenden</span><span>Aaron</span><span>Ouweis</span><span>Zac</span><span>Jacob</span><span>Jordan</span></p>
        <p style="margin-top:18px"><a class="btn btn-outline" href="about.html">Our story</a></p>
      </div>
    </div>
  </div>
</section>

<section class="section" id="how">
  <div class="wrap">
    <div class="head">
      <span class="tag blue"><span>How a visit goes</span></span>
      <h2>From call to clean-up</h2>
    </div>
    <div class="steps">
      <div class="step reveal"><h3>Book or call</h3><p>Pick a window online or call dispatch. Emergencies jump the queue.</p></div>
      <div class="step reveal"><h3>Text on the way</h3><p>You get the technician&rsquo;s name and arrival time by text, email or phone, your choice.</p></div>
      <div class="step reveal"><h3>Options and a firm price</h3><p>The technician diagnoses, shows you what they found, and gives options at different price points. Nothing starts until you pick one.</p></div>
      <div class="step reveal"><h3>Fixed, cleaned, warranted</h3><p>Shoe covers on, drop cloths down, work area cleaned. Installations carry a lifetime warranty.</p></div>
    </div>
  </div>
</section>

<section class="section" id="faq" style="padding-top:0">
  <div class="wrap">
    <div class="head"><span class="tag"><span>Questions</span></span><h2>Before you book</h2></div>
    <div class="faq">
      <details><summary>How fast can you come?</summary><div class="a"><p>Same day for most calls, and emergencies are prioritized by dispatch even on full days. The emergency line is answered 24 hours.</p></div></details>
      <details><summary>Do you charge more at night or on weekends?</summary><div class="a"><p>No. One rate, seven days a week.</p></div></details>
      <details><summary>How does pricing work?</summary><div class="a"><p>The technician diagnoses first, then gives you a firm price with options before any work starts. No hourly meter. Ask about the $99 main drain clearing and the $50 off any plumbing service.</p></div></details>
      <details><summary>Are you licensed and insured?</summary><div class="a"><p>Yes. Plumbing licence #{LIC_P}, heating licence #{LIC_H}, fully insured, and our technicians are background-checked employees, not subcontractors.</p></div></details>
      <details><summary>What&rsquo;s covered by the warranty?</summary><div class="a"><p>Every installation carries a lifetime warranty, and all workmanship is backed by our make-it-right-or-you-don&rsquo;t-pay guarantee.</p></div></details>
      <details><summary>Which areas do you cover?</summary><div class="a"><p>All of Toronto plus Mississauga, Brampton, Vaughan, Thornhill, Maple, Concord and Oakville. See <a href="areas.html">service areas</a>.</p></div></details>
    </div>
  </div>
</section>
''' + CTA_BAND)

def service_page(sid, fname, title, desc, h1, lead, photo, alt, pricing, gallery):
    return dict(title=title, desc=desc, og=photo, body=f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      <p class="crumbs"><a href="index.html">Home</a> &rsaquo; {h1}</p>
      <h1>{h1}</h1>
      <p class="lead">{lead}</p>
      <div class="ctas">
        <a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a>
        <a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a>
      </div>
    </div>
    <img src="{photo}" alt="{alt}" width="1800" height="1350" fetchpriority="high">
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="head"><span class="tag"><span>What we fix</span></span><h2>Problems we see every week</h2></div>
    <div class="problems" id="problems" data-service="{sid}"></div>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="head"><span class="tag blue"><span>Pricing</span></span><h2>How we price it</h2></div>
    <div class="pricing">{pricing}</div>
  </div>
</section>
{gallery}
<section class="section" style="background:var(--paper)">
  <div class="wrap">
    <div class="head"><span class="tag"><span>Reviews</span></span><h2>From this kind of job</h2><p>Real Google reviews. Pick a technician&rsquo;s name to read theirs.</p></div>
    <div class="techs" id="techs"></div>
    <div class="quotes" id="quotes" data-service="{sid}"></div>
    <div class="reviews-foot"><a class="btn btn-outline" href="reviews.html">All reviews</a></div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="head"><span class="tag blue"><span>Questions</span></span><h2>Good to know</h2></div>
    <div class="faq" id="faq" data-service="{sid}"></div>
  </div>
</section>
''' + CTA_BAND)

def vow(k, h, p): return f'<article class="vow reveal"><span class="k">{k}</span><h3>{h}</h3><p>{p}</p></article>'
def gal(items):
    figs = ''.join(f'<figure class="reveal"><img src="{src}" alt="{alt}" width="1350" height="1350" loading="lazy"><figcaption>{cap}</figcaption></figure>' for src, alt, cap in items)
    return f'<section class="section" style="padding-top:0"><div class="wrap"><div class="head"><span class="tag"><span>Recent jobs</span></span><h2>Real work, real houses</h2></div><div class="gallery">{figs}</div></div></section>'

PAGES['plumbing.html'] = service_page('plumbing', 'plumbing.html',
  'Toronto Plumbing Repairs | Leaks, Toilets, Faucets, Water Heaters | Priority Plumbing',
  'Toronto plumbing repairs and installs: leaks, toilets, faucets, water heaters, sump pumps and shut-off valves. Same-day, 7 days a week, lifetime warranty. Book online or call (647) 247-2275.',
  'Plumbing', 'Leaks, toilets, taps, water heaters, sump pumps. Diagnosed first, priced before we start, finished in one visit when the part is on the truck, which it usually is.',
  'photos/tech-shower-valve.jpg', 'Priority Plumbing technician replacing a shower valve in a marble-tiled bathroom',
  vow('Step 1', 'Diagnose first', 'The technician finds the actual cause before quoting. A dripping ceiling is rarely the pipe directly above it.')
  + vow('Step 2', 'Options at your door', 'Repair, replace, or replace-and-upgrade, each with a firm price. You choose; nothing starts until you do.')
  + vow('Step 3', 'One rate, any day', 'Same price nights and weekends. $50 off any plumbing service when you mention it at booking.'),
  gal([('photos/toilet-install.jpg', 'New dual-flush toilet installed in a small Toronto bathroom', 'Toilet replacement, under an hour'),
       ('photos/tech-tub-drain.jpg', 'Technician giving a thumbs up beside a bathtub with the drain removed', 'Tub drain rebuild'),
       ('photos/shower-drain-job.jpg', 'Shower stall with the drain opened and a plumber’s tool bag on the floor', 'Shower drain and valve'),
       ('photos/tech-cleaning-up.jpg', 'Technician in a mask wiping down a toilet after a repair', 'Cleaned before we leave')]))

PAGES['drains-sewer.html'] = service_page('drains', 'drains-sewer.html',
  'Toronto Drain Cleaning & Sewer Repair | $99 Main Drain | Priority Plumbing & Drains',
  'Drain cleaning, camera inspection, drain repair, sewer line replacement, trenchless sewer and backwater valves in Toronto. We beat any written drain quote. Call (647) 247-2275.',
  'Drains &amp; Sewer', 'Backed-up kitchen stacks, tubs that won&rsquo;t drain, sewage in the basement, roots in the line. Cleared today, inspected on camera so it doesn&rsquo;t come back, and repaired without digging when the pipe allows.',
  'photos/basement-stack.jpg', 'Cast-iron drain stack and new ABS piping in a Toronto basement',
  vow('Clear', '$99 main drain', 'The offer on our trucks and our building. Your technician confirms it before starting and tells you if the line needs more than a clear.')
  + vow('See', 'Camera before you decide', 'A camera inspection shows the break, the roots or the belly. You see the footage and decide with facts, not guesses.')
  + vow('Beat', 'Any written drain quote', 'Bring a written quote from a licensed, insured contractor for drain or sewer work. We beat it.'),
  gal([('photos/basement-stack.jpg', 'Cast-iron drain stack with new ABS piping in a basement', 'Stack replacement, pre-war semi'),
       ('photos/sewer-excavation.jpg', 'Mini excavator beside a brick bungalow digging for a sewer line', 'Sewer line replacement, North York'),
       ('photos/tech-tub-drain.jpg', 'Technician beside a bathtub with the drain assembly removed', 'Tub drain clear and rebuild'),
       ('photos/truck-parts-inventory.jpg', 'Labelled parts bins inside a service van', 'Fittings for every stack on the truck')]))

PAGES['heating.html'] = service_page('heating', 'heating.html',
  'Toronto Boiler & Radiator Repair | Licensed Heating | Priority Plumbing & Drains',
  'Boiler repair, boiler installation, radiator repair and no-heat emergencies in Toronto. Heating licence #00749274. Same rate on weekends. Call (647) 247-2275.',
  'Heating', 'Boilers and hot-water radiators, the system most of Toronto&rsquo;s older houses still run on. Licensed heating technicians (licence #00749274), not a plumber improvising.',
  'photos/tech-radiator.jpg', 'Technician bleeding and servicing a hot-water radiator in a Toronto home',
  vow('Repair', 'Fix what&rsquo;s broken', 'Cold radiators, leaking valves, error codes. Most repairs finished the same day when the part is on the truck.')
  + vow('Replace', 'Sized to the house', 'A new high-efficiency boiler sized for your radiators, not a catalogue number. Lifetime warranty on our installation.')
  + vow('Protect', 'Annual check', 'A pre-winter inspection of venting, combustion and pressure. One customer&rsquo;s check found a carbon monoxide leak.'),
  gal([('photos/tech-radiator.jpg', 'Technician servicing a radiator valve on a wood floor', 'Radiator valve, Annex'),
       ('photos/basement-stack.jpg', 'Basement mechanical piping', 'Mechanical room piping'),
       ('photos/office-core-values.jpg', 'Framed Core Values poster in the Priority Plumbing office', 'Core values on the office wall'),
       ('photos/truck-parts-inventory.jpg', 'Labelled parts bins inside a service van', 'Parts on the truck')]))

PAGES['waterproofing.html'] = service_page('waterproofing', 'waterproofing.html',
  'Toronto Basement Waterproofing & Backwater Valves | Priority Plumbing & Drains',
  'Interior and exterior basement waterproofing, backwater valves, sump pumps with battery backup and flood-prevention assessments in Toronto. We beat any written waterproofing quote.',
  'Basement Waterproofing', 'Water in the basement after every storm has a cause. We find where it gets in, fix it from the right side of the wall, and back the work with a lifetime warranty and our best-value guarantee.',
  'photos/sewer-excavation.jpg', 'Mini excavator digging beside a Toronto house for exterior waterproofing',
  vow('Assess', 'Flood-prevention walk-through', 'A technician walks the house, inside and out, and shows you where water gets in and what to fix first.')
  + vow('Subsidy', 'City of Toronto program', 'The City&rsquo;s Basement Flooding Protection Subsidy can cover part of a backwater valve or sump pump job. We tell you if you qualify.')
  + vow('Beat', 'Any written waterproofing quote', 'Bring a written quote from a licensed, insured contractor. We beat it, and the installation carries a lifetime warranty.'),
  gal([('photos/sewer-excavation.jpg', 'Mini excavator beside a brick bungalow', 'Exterior excavation to the footing'),
       ('photos/basement-stack.jpg', 'Basement drain stack and piping', 'Basement drainage'),
       ('photos/hq-dupont-street.jpg', 'Priority Plumbing blue headquarters building on Dupont Street', 'Our HQ on Dupont St'),
       ('photos/van-99-main-drain.jpg', 'Side of a Priority Plumbing van lettered $99 clear any main drain', 'The trucks you&rsquo;ll see')]))

PAGES['areas.html'] = dict(
  title='Service Areas | Plumbers in Toronto, Mississauga, Vaughan & the GTA | Priority Plumbing',
  desc='Priority Plumbing & Drains serves all of Toronto plus Mississauga, Brampton, Vaughan, Thornhill, Maple, Concord and Oakville, 24 hours a day. Based at Dupont & Symington.',
  og='photos/hq-dupont-street.jpg',
  body=f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      <p class="crumbs"><a href="index.html">Home</a> &rsaquo; Service areas</p>
      <h1>Where we work</h1>
      <p class="lead">Based at Dupont and Symington in the Junction Triangle, with trucks on the road across Toronto and the GTA every day. If you&rsquo;re not on the list, call anyway.</p>
      <div class="ctas"><a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a><a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a></div>
    </div>
    <img src="photos/hq-dupont-street.jpg" alt="Priority Plumbing's bright blue two-storey headquarters on Dupont Street with a mural reading Toronto's #1 Plumbing Company" width="1350" height="1800" style="aspect-ratio:4/3">
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="areas">
      <div class="area-cols">
        <div><h3>Toronto</h3><ul class="two">''' + ''.join(f'<li>{a}</li>' for a in ['Annex','Bloor West Village','High Park','Junction Triangle','Roncesvalles','Liberty Village','Leslieville','The Beaches','Danforth','East York','Leaside','Rosedale','Forest Hill','North York','York','Etobicoke','Markland Wood','Don Mills','Scarborough']) + '''</ul></div>
        <div><h3>GTA</h3><ul>''' + ''.join(f'<li>{a}</li>' for a in ['Mississauga','Brampton','Vaughan','Thornhill','Maple','Concord','Oakville']) + f'''</ul></div>
      </div>
      <figure class="map">
        <iframe title="Map of Priority Plumbing & Drains at 1594 Dupont St, Toronto" src="https://www.google.com/maps?q=1594+Dupont+St,+Toronto,+ON+M6P+3S7&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        <figcaption>{ADDR} · <a href="{MAPS}" target="_blank" rel="noopener">Open in Google Maps</a></figcaption>
      </figure>
    </div>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="head"><span class="tag blue"><span>Local knowledge</span></span><h2>Every neighbourhood plumbs differently</h2></div>
    <div class="promise">
      {vow('Pre-war west end', 'Clay drains and cast iron', 'Annex, High Park, Roncesvalles and the Junction: century houses with clay sewer laterals that roots love and cast-iron stacks near the end of their life. Camera first, then the right fix.')}
      {vow('Post-war suburbs', 'Galvanized and low pressure', 'North York, Etobicoke and Scarborough bungalows from the 50s and 60s: galvanized supply lines that choke pressure and original water heaters.')}
      {vow('Low-lying streets', 'Basement flooding', 'After every big storm the same streets flood. A backwater valve and a backed-up sump pump are the fix, and the City may subsidize both.')}
      {vow('Condos and towers', 'Liberty Village, downtown', 'In-suite repairs with building rules, insurance letters and elevator bookings handled. Our crews do it weekly.')}
      {vow('Winter', 'Frozen and burst pipes', 'Exterior walls, uninsulated additions and hose bibs freeze first. We thaw, repair and tell you how to stop it next year.')}
      {vow('GTA', 'Same crews, same rate', 'Mississauga, Brampton, Vaughan, Thornhill and Oakville get the same trucks, the same pricing and the same 24-hour line.')}
    </div>
  </div>
</section>
''' + CTA_BAND)

PAGES['about.html'] = dict(
  title='About Priority Plumbing & Drains | Toronto Residential Plumbers Since 2001',
  desc='Founded in 2001 by Austin Tsakopoulos to raise the standard of residential service plumbing in Toronto. Licensed, insured, award-winning, and only residential service.',
  og='photos/crew-voted-torontos-best.jpg',
  body=f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      <p class="crumbs"><a href="index.html">Home</a> &rsaquo; About</p>
      <h1>Why we&rsquo;re in business</h1>
      <p class="lead">Austin Tsakopoulos grew up in the trade and started Priority in 2001 with one complaint: plumbers who were great on a job site were terrible in people&rsquo;s homes. The company exists to fix that.</p>
      <div class="ctas"><a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a><a class="btn btn-outline" href="tel:{TEL}">Call {PHONE}</a></div>
    </div>
    <img src="photos/crew-voted-torontos-best.jpg" alt="Three Priority Plumbing technicians in navy uniforms in front of a van lettered Voted Toronto's Best" width="1334" height="1800">
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="split rev">
      <img class="land" src="photos/office-core-values.jpg" alt="Framed Core Values poster in the Priority Plumbing office: competence, accountability, reliability, professionalism, effectiveness" width="1350" height="1800" loading="lazy">
      <div>
        <span class="tag"><span>Our mission</span></span>
        <h2>Raise the standard</h2>
        <p class="lead">Most independent plumbing shops close within five years. Their warranties go with them. Priority has been answering the same phone number since 2001.</p>
        <p>The mission is simple: give homeowners extraordinary service, no matter how small the job, and raise the standard of the whole trade by doing it. Residential service is all we do. No construction crews, no renovation sidelines.</p>
      </div>
    </div>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="head"><span class="tag blue"><span>The Priority difference</span></span><h2>Three things we hire for</h2></div>
    <div class="promise">
      {vow('Intelligence', 'Problem solvers', 'No two houses are the same after decades of renovations. Our technicians are hired for critical thinking, because the plumbing behind the drywall rarely matches the textbook.')}
      {vow('Personality', 'Manners first', 'A caring personality can&rsquo;t be taught, so we screen for it. Hundreds of applicants are turned down every year; some go on to work for our competitors.')}
      {vow('Experience', 'Residential specialists', 'A licence is the start, not the finish. Our people know the fixture brands, the diagnostic tools and the old Toronto housing stock they work in every day.')}
    </div>
  </div>
</section>
<section class="section" style="background:var(--paper)">
  <div class="wrap">
    <div class="head"><span class="tag"><span>Recognition</span></span><h2>Awards and press</h2></div>
    <div class="press">
      <div><b>Top Choice Award</b><p>Voted Toronto&rsquo;s best plumbing company by customers. It&rsquo;s painted on the vans for a reason.</p></div>
      <div><b>HomeStars Best of Award 2023</b><p>Awarded on verified homeowner reviews.</p></div>
      <div><b>CBC Radio</b><p>When Toronto was in a plumbing crisis, CBC Radio turned to Priority for answers.</p></div>
      <div><b>CityPulse</b><p>CityTV&rsquo;s news team uses Priority as its trusted plumbing resource.</p></div>
    </div>
    <div class="gallery" style="margin-top:18px">
      <figure><img src="photos/office-awards-wall.jpg" alt="Hallway in the Priority Plumbing office lined with framed award plaques" width="1350" height="1800" loading="lazy"><figcaption>The awards hallway, Dupont St</figcaption></figure>
      <figure><img src="photos/top-choice-award.jpg" alt="Two technicians holding the Top Choice Award plaque" width="1800" height="1200" loading="lazy"><figcaption>Top Choice Award</figcaption></figure>
      <figure><img src="photos/van-rear.jpg" alt="Rear of a Priority Plumbing van with the blue water-swirl livery" width="1350" height="1800" loading="lazy"><figcaption>The fleet</figcaption></figure>
      <figure><img src="photos/hq-front.jpg" alt="Front of the blue Priority Plumbing building with a red inflatable tube man" width="1350" height="1800" loading="lazy"><figcaption>1594 Dupont St</figcaption></figure>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="split">
      <img src="photos/team-with-van.jpg" alt="The Priority Plumbing team gathered in front of a company van holding an award" width="640" height="427" loading="lazy" class="land">
      <div>
        <span class="tag blue"><span>The team</span></span>
        <h2>The names in the reviews</h2>
        <p class="lead">Greg and Victor lead the field team. The technicians customers mention most, by name, in their Google reviews:</p>
        <p class="names"><span>Cole</span><span>Kyle</span><span>Tony</span><span>Brian</span><span>Brenden</span><span>Aaron</span><span>Ouweis</span><span>Zac</span><span>Jacob</span><span>Jordan</span></p>
        <p style="margin-top:18px"><a class="btn btn-outline" href="reviews.html">Read their reviews</a></p>
      </div>
    </div>
  </div>
</section>
''' + CTA_BAND)

PAGES['reviews.html'] = dict(
  title='Reviews | 4.8 Stars from 1,939 Google Reviews | Priority Plumbing & Drains Toronto',
  desc='Read what Toronto homeowners say about Priority Plumbing & Drains technicians by name. 4.8 stars from 1,939 Google reviews.',
  body=f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      <p class="crumbs"><a href="index.html">Home</a> &rsaquo; Reviews</p>
      <h1>Who&rsquo;s coming to your door</h1>
      <p class="lead">Customers name their technician. Pick a name and read what people say about the person who might show up at your house.</p>
      <div class="ctas"><a class="btn btn-primary" href="{BOOK}" target="_blank" rel="noopener">Book online</a><a class="btn btn-outline" href="{MAPS}" target="_blank" rel="noopener">All 1,939 on Google</a></div>
    </div>
    <div class="rating-card" style="max-width:none">
      <div><span class="num">4.8</span><span class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
      <p><b>1,939 reviews on Google.</b> What people mention most: polite staff (93), thoroughness (90), clear explanations (79), inspections (63), problem assessment (38), explaining options (27).</p>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="techs" id="techs" role="group" aria-label="Filter reviews by technician"></div>
    <div class="quotes" id="quotes"></div>
    <p style="margin-top:28px;color:var(--grey);font-size:15px">Quotes are real Google reviews as published on priorityplumbing.ca, lightly trimmed for length.</p>
  </div>
</section>
''' + CTA_BAND)

for fname, p in PAGES.items():
    html = head(p['title'], p['desc'], fname, p.get('og', 'photos/top-choice-award.jpg')) + header(fname) + p['body'] + FOOTER
    with open(os.path.join(ROOT, fname), 'w', encoding='utf-8') as f: f.write(html)
    print('wrote', fname, len(html)//1024, 'KB')
