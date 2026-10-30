#!/usr/bin/env python3
"""Build the ADP Toronto Plumbing site.

Each page in src/ is an HTML fragment with a JSON front-matter block between
two '---' lines (title, description, path, schema extras). build.py wraps every
fragment in the shared shell (head, utility bar, header, footer, mobile bar)
so the menu, hub and footer always list the same services.

    python3 build.py        # writes index.html, services/*.html, service-areas.html
"""
import json, os, re, html

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA = json.load(open(os.path.join(ROOT, 'site-data.json'), encoding='utf-8'))
SRC = os.path.join(ROOT, 'src')

# ---------- SVG pictograms (navy tiles for services without a real photo) ----------
PICT = {
    'sewer': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="Cross-section: a cracked clay sewer lateral with tree roots, replaced by new pipe"><rect class="fl" width="400" height="300"/><rect class="soil" y="120" width="400" height="180"/><path class="ln" d="M0 120h400"/><path class="ln" d="M110 40l50-28 50 28v70h-100z"/><path class="ln" d="M60 118v90M150 118v70"/><path class="ln" d="M40 210h100l20 20h40"/><path class="ln" d="M90 160c-10 14-26 20-40 18M90 175c12 16 22 26 30 44M60 150c-14 2-24 10-32 22"/><path class="ln" d="M300 110c0-30-20-45-40-45s-40 15-40 45"/><path class="ln" d="M260 65v-30M240 85l-22-16M280 85l22-16"/><path class="hl" d="M200 230h160M360 230v-40"/><circle class="yl" cx="200" cy="230" r="5"/><circle class="yl" cx="360" cy="190" r="5"/></svg>''',
    'valve': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="Diagram: a backwater valve on the sewer lateral and a sump pump in the basement floor"><rect class="fl" width="400" height="300"/><rect class="soil" y="150" width="400" height="150"/><path class="ln" d="M0 150h400"/><path class="ln" d="M120 150v-60l70-40 70 40v60M120 150v90h140v-90"/><path class="hl" d="M20 240h100"/><rect class="hl" x="128" y="226" width="44" height="28" rx="4"/><path class="hl" d="M150 226v-16M140 210h20"/><circle class="yl" cx="150" cy="240" r="5"/><path class="hl" d="M210 240a20 20 0 0 0 40 0v-14h-40z"/><path class="hl" d="M230 226v-50h30"/><circle class="yl" cx="230" cy="236" r="5"/><path class="ln" d="M172 240h38"/></svg>''',
    'watermain': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="Diagram: an old lead water service replaced by new copper from the street to the house"><rect class="fl" width="400" height="300"/><rect class="soil" y="130" width="400" height="170"/><path class="ln" d="M0 130h400"/><path class="ln" d="M220 130v-50l60-34 60 34v50M220 130v90h120v-90"/><path class="ln" d="M40 300v-170M30 160h20"/><path class="ln" stroke-dasharray="6 7" d="M60 250c40 0 60-30 100-30h60"/><path class="hl" d="M60 210h160"/><circle class="yl" cx="60" cy="210" r="6"/><circle class="yl" cx="220" cy="210" r="6"/><path class="ln" d="M100 60h-70M30 60l10-8M30 60l10 8" transform="translate(0,0)"/><text x="60" y="48" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#CBD5E1" letter-spacing=".08em">CITY SHUTOFF</text><text x="110" y="200" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#FFC600" letter-spacing=".08em">NEW COPPER</text><text x="110" y="276" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#93A3B8" letter-spacing=".08em">OLD LEAD, ABANDONED</text></svg>''',
    'camera': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="Diagram: a CCTV camera head inside a sewer pipe with the footage on a monitor"><rect class="fl" width="400" height="300"/><path class="ln" d="M20 200h360M20 250h360"/><path class="ln" d="M20 190v70M380 190v70"/><rect class="hl" x="200" y="214" width="44" height="22" rx="6"/><path class="hl" d="M20 225h180"/><circle class="yl" cx="244" cy="225" r="6"/><path class="ln" d="M262 213l30-18M262 237l30 18"/><rect class="ln" x="60" y="40" width="200" height="120" rx="8"/><path class="ln" d="M120 80a40 40 0 1 0 80 0a40 40 0 1 0-80 0"/><path class="hl" d="M160 80a14 14 0 1 0 28 0a14 14 0 1 0-28 0"/><text x="72" y="150" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#FFC600" letter-spacing=".08em">DIST 12.4 m   ROOT INTRUSION</text><path class="ln" d="M100 170v16M220 170v16"/></svg>''',
    'night': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="A house at night with the porch light on and a plumber's van outside"><rect class="fl" width="400" height="300"/><rect class="soil" y="230" width="400" height="70"/><path class="ln" d="M0 230h400"/><path class="ln" d="M140 230v-110l70-50 70 50v110"/><path class="ln" d="M190 230v-60h40v60"/><rect class="yl" x="196" y="176" width="28" height="22" rx="2" opacity=".9"/><circle class="yl" cx="248" cy="150" r="7"/><path class="hl" d="M248 157v10" opacity=".6"/><path class="ln" d="M20 230v-40h60l20-24h40v64"/><path class="ln" d="M40 230a12 12 0 1 0 24 0a12 12 0 1 0-24 0M106 230a12 12 0 1 0 24 0a12 12 0 1 0-24 0"/><circle class="ln" cx="330" cy="60" r="22"/><circle class="ln" cx="320" cy="52" r="2"/><text x="18" y="58" font-family="Big Shoulders Display, Impact, sans-serif" font-size="44" font-weight="800" fill="#FFC600">24 h</text></svg>''',
    'foundation': '''<svg class="pict" viewBox="0 0 400 300" role="img" aria-label="Cross-section: an excavated foundation wall with waterproofing membrane and new weeping tile"><rect class="fl" width="400" height="300"/><rect class="soil" y="110" width="400" height="190"/><path class="ln" d="M0 110h400"/><path class="ln" d="M180 110v-40l80-40 80 40v40"/><path class="ln" d="M180 110v150h160v-150"/><path class="ln" d="M180 260h-40v-20h40"/><path class="hl" d="M176 114v142"/><path class="hl" d="M150 262a12 12 0 1 0 24 0a12 12 0 1 0-24 0"/><path class="ln" d="M60 110l40 150" stroke-dasharray="5 7"/><path class="ln" d="M120 120l-16 40M112 150l-14 38M105 180l-12 42"/><circle class="yl" cx="176" cy="130" r="5"/><circle class="yl" cx="162" cy="262" r="5"/><text x="196" y="200" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#CBD5E1" letter-spacing=".08em">BASEMENT</text><text x="20" y="98" font-family="Archivo, sans-serif" font-size="11" font-weight="600" fill="#FFC600" letter-spacing=".08em">MEMBRANE + NEW WEEPING TILE</text></svg>''',
}

# Calculator diagram: ids match rebate items; main.js toggles .on
CALC_DIAGRAM = '''<svg class="dg calc-diagram" viewBox="0 0 440 210" aria-hidden="true">
  <rect class="soil" x="0" y="112" width="440" height="98" rx="0"/>
  <path class="base" d="M0 112h440"/>
  <path class="base" d="M150 112v-58l80-42 80 42v58"/>
  <path class="base" d="M150 112v76h160v-76"/>
  <rect class="fill" x="22" y="124" width="26" height="86" rx="3"/>
  <path class="base" d="M22 124h26"/>
  <text x="18" y="200" transform="rotate(-90 18 200)">SEWER MAIN</text>
  <text x="156" y="128">BASEMENT</text>
  <path class="item-line" data-dg="valve" d="M48 178h100"/>
  <rect class="item" data-dg="valve" x="150" y="166" width="30" height="22" rx="3"/>
  <path class="item-line" data-dg="valve" d="M180 178h32"/>
  <text class="lbl" data-dg="valve" x="150" y="160">VALVE</text>
  <path class="item" data-dg="sump" d="M262 188a14 14 0 0 0 28 0v-16h-28z"/>
  <path class="item-line" data-dg="sump" d="M276 172v-44h34"/>
  <text data-dg="sump" x="298" y="166">SUMP</text>
  <rect class="item" data-dg="battery" x="296" y="176" width="14" height="12" rx="2"/>
  <path class="item-line" data-dg="battery" d="M290 182h6"/>
  <path class="item-line" data-dg="severance" d="M150 192h-14M136 180v24"/>
  <path class="base" d="M150 192c-30 0-40-6-60-6" stroke-dasharray="4 5"/>
  <text data-dg="severance" x="60" y="200">WEEPING TILE</text>
  <circle class="item" data-dg="assessment" cx="236" cy="156" r="13"/>
  <path class="item-line" data-dg="assessment" d="M245 165l9 9"/>
</svg>'''

ICON_PHONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

def rel(depth):
    return '../' * depth

def phone_btn(depth, cls='btn btn-primary', label=True):
    lbl = f'<span class="lbl">Call </span>{DATA["phone_display"]}' if label else DATA['phone_display']
    return f'<a class="{cls} phone-link" href="tel:{DATA["phone_tel"]}">{ICON_PHONE}<span>{lbl}</span></a>'

def head(meta, depth):
    r = rel(depth)
    url = DATA['site_url'] + meta['path'].lstrip('/')
    og_img = DATA['site_url'] + 'photos/office-homewood.jpg'
    schema = [{
        "@context": "https://schema.org",
        "@type": "Plumber",
        "@id": DATA['site_url'] + '#business',
        "name": DATA['name'],
        "alternateName": "Absolute Draining & Plumbing",
        "url": DATA['site_url'],
        "telephone": DATA['phone_tel'],
        "email": DATA['email'],
        "image": og_img,
        "logo": DATA['site_url'] + 'photos/logo.png',
        "foundingDate": str(DATA['founded']),
        "priceRange": "$$",
        "address": {"@type": "PostalAddress", "streetAddress": DATA['street'], "addressLocality": DATA['city'], "addressRegion": DATA['region'], "postalCode": DATA['postal'], "addressCountry": "CA"},
        "geo": {"@type": "GeoCoordinates", "latitude": DATA['lat'], "longitude": DATA['lng']},
        "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}],
        "aggregateRating": {"@type": "AggregateRating", "ratingValue": DATA['rating'], "reviewCount": DATA['review_count'], "bestRating": 5},
        "areaServed": [{"@type": "City", "name": c} for g in DATA['areas'].values() for c in g],
        "sameAs": [DATA['facebook'], DATA['homestars'], DATA['google_reviews_url']],
        "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Plumbing and drain services", "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": s['name'], "url": DATA['site_url'] + 'services/' + s['slug'] + '.html'}} for s in DATA['services']]},
    }]
    schema += meta.get('schema', [])
    ld = '\n'.join(f'<script type="application/ld+json">{json.dumps(s, ensure_ascii=False)}</script>' for s in schema)
    return f'''<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(meta['title'])}</title>
<meta name="description" content="{html.escape(meta['description'])}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{html.escape(meta['title'])}">
<meta property="og:description" content="{html.escape(meta['description'])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{og_img}">
<meta property="og:locale" content="en_CA">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B2545">
<link rel="icon" href="{r}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{r}apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Archivo:wght@400;600&display=swap">
<link rel="stylesheet" href="{r}styles.css">
{ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
'''

def header(depth, current):
    r = rel(depth)
    items = ''.join(f'<a href="{r}services/{s["slug"]}.html"{" aria-current=page" if current == "services/" + s["slug"] else ""}>{html.escape(s["name"])}</a>' for s in DATA['services'])
    def cur(p): return ' aria-current="page"' if current == p else ''
    return f'''<div class="utility">
  <div class="container">
    <span><span class="dot">●</span> Open 24 hours · Emergency line <a href="tel:{DATA["phone_tel"]}">{DATA["phone_display"]}</a></span>
    <span class="hide-sm">Serving Toronto &amp; the GTA from {DATA["street"]}, Toronto</span>
  </div>
</div>
<header class="header" data-menu="closed">
  <div class="container">
    <a class="logo" href="{r}index.html" aria-label="ADP Toronto Plumbing home"><img src="{r}photos/logo.png" alt="ADP Toronto Plumbing" width="278" height="114"></a>
    <nav aria-label="Main">
      <ul class="nav">
        <li data-open="false"><button type="button" aria-expanded="false" aria-haspopup="true">Services <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 4l4 4 4-4"/></svg></button>
          <div class="submenu">{items}<a class="all" href="{r}index.html#services">All services</a></div>
        </li>
        <li><a href="{r}services/backwater-valve-sump-pump.html#rebate">Rebates</a></li>
        <li><a href="{r}service-areas.html"{cur("service-areas")}>Service areas</a></li>
        <li><a href="{r}index.html#reviews">Reviews</a></li>
        <li><a href="{r}index.html#about">About</a></li>
      </ul>
    </nav>
    <div class="header-cta">
      {phone_btn(depth)}
      <a class="btn btn-outline" href="{r}index.html#estimate">Free estimate</a>
    </div>
    <button class="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span></button>
  </div>
</header>
<main id="main">
'''

def footer(depth):
    r = rel(depth)
    svc = ''.join(f'<li><a href="{r}services/{s["slug"]}.html">{html.escape(s["short"])}</a></li>' for s in DATA['services'])
    areas = ''.join(f'<li><a href="{r}service-areas.html#{slug(g)}">{html.escape(g)}: {html.escape(", ".join(t.split(" & ")[0].split(",")[0] for t in towns))}</a></li>' for g, towns in DATA['areas'].items())
    return f'''</main>
<footer class="footer">
  <div class="container">
    <div class="top">
      <div class="brand">
        <img src="{r}photos/logo.png" alt="ADP Toronto Plumbing" width="278" height="114">
        <p>Full-service plumbing and drain contractor serving the Greater Toronto Area since {DATA["founded"]}. ADP is Absolute Draining &amp; Plumbing: same crew, same phone number.</p>
        <div class="nap">
          <a href="tel:{DATA["phone_tel"]}">{DATA["phone_display"]}</a>
          <a href="mailto:{DATA["email"]}">{DATA["email"]}</a>
          <span>{DATA["street"]}, {DATA["city"]}, {DATA["region"]} {DATA["postal"]}</span>
          <span>Open 24 hours, every day</span>
        </div>
        <div class="licence">Licensed, insured &amp; bonded · City of Toronto plumbing contractor licence <b>No. [to be confirmed by ADP]</b></div>
      </div>
      <div>
        <h4>Services</h4>
        <ul>{svc}<li><a href="{r}index.html#services">All services</a></li></ul>
      </div>
      <div>
        <h4>Service areas</h4>
        <ul>{areas}<li><a href="{r}service-areas.html">Full list</a></li></ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="{r}index.html#about">About ADP</a></li>
          <li><a href="{r}index.html#reviews">Reviews</a></li>
          <li><a href="{r}services/backwater-valve-sump-pump.html#rebate">Toronto flood-protection rebate</a></li>
          <li><a href="{r}index.html#estimate">Request a free estimate</a></li>
          <li><a href="{DATA["google_reviews_url"]}" rel="noopener" target="_blank">Google reviews</a></li>
          <li><a href="{DATA["homestars"]}" rel="noopener" target="_blank">HomeStars</a></li>
          <li><a href="{DATA["facebook"]}" rel="noopener" target="_blank">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <span>© <span data-year>2026</span> ADP Toronto Plumbing · Absolute Draining &amp; Plumbing</span>
      <span>Site by <a href="https://web.soichirosaimon.com" rel="noopener">Sony Saimon</a></span>
    </div>
  </div>
</footer>
<div class="mobile-bar">
  {phone_btn(depth, label=False)}
  <a class="btn btn-outline" href="{r}index.html#estimate">Free estimate</a>
</div>
<script src="{r}main.js" defer></script>
</body>
</html>
'''

def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def render_services_grid(depth):
    r = rel(depth)
    cards = []
    for s in DATA['services']:
        if s['img']:
            media = f'<img src="{r}{s["img"]}" alt="" loading="lazy" width="800" height="600">'
        else:
            media = PICT[s['svg']]
        cards.append(f'''<a class="service-card reveal" href="{r}services/{s["slug"]}.html">
  <div class="media">{media}</div>
  <div class="body"><span class="eyebrow">{html.escape(s["eyebrow"])}</span><h3>{html.escape(s["name"])}</h3><p>{html.escape(s["blurb"])}</p><span class="more">Read more {ICON_ARROW}</span></div>
</a>''')
    also = ''.join(f'<li>{html.escape(a)}</li>' for a in DATA['also'])
    return f'<div class="services-grid">{"".join(cards)}</div>\n<ul class="also"><span>Also:</span>{also}</ul>'

def render_calc():
    rows = []
    for it in DATA['rebates']:
        checked = ' checked' if it['id'] in ('valve', 'sump') else ''
        qty = ''
        if it['max_qty'] > 1:
            opts = ''.join(f'<option value="{i}">{i}</option>' for i in range(1, it['max_qty'] + 1))
            qty = f'<span class="qty">× <select data-qty-for="{it["id"]}" aria-label="Number of {html.escape(it["label"].lower())}s">{opts}</select></span>'
        rows.append(f'''<label><input type="checkbox" data-id="{it["id"]}" data-amount="{it["amount"]}"{checked}><span class="name">{html.escape(it["label"])}<small>{html.escape(it["note"])}</small></span><span class="amt">${it["amount"]:,}{qty}</span></label>''')
    return f'''<aside class="calc" data-cap="{DATA["rebate_cap"]}" aria-label="Toronto flood-protection subsidy calculator">
  <span class="eyebrow">City of Toronto subsidy · updated May 1, 2026</span>
  <h2>What the City pays you back</h2>
  <p class="sub">Tick what your basement needs. We install it, pull the permit and file the application.</p>
  {CALC_DIAGRAM}
  <div class="calc-list">{"".join(rows)}</div>
  <div class="calc-total"><span class="lbl">Eligible subsidy</span><span class="num">$0</span></div>
  <a class="btn btn-primary" href="#estimate">Book a flood-protection assessment</a>
  <p class="fine">Basement Flooding Protection Subsidy: 80% of the invoiced cost up to the amounts shown, maximum ${DATA["rebate_cap"]:,} per property, for eligible Toronto homes. <a href="https://www.toronto.ca/services-payments/water-environment/managing-rain-melted-snow/basement-flooding/basement-flooding-protection-subsidy-program/" rel="noopener" target="_blank">City program terms</a>.</p>
</aside>'''

def render(fragment_path, out_path, depth, current):
    raw = open(fragment_path, encoding='utf-8').read()
    m = re.match(r'---\n(.*?)\n---\n(.*)$', raw, re.S)
    meta = json.loads(m.group(1)); body = m.group(2)
    r = rel(depth)
    body = body.replace('{{SERVICES_GRID}}', render_services_grid(depth))
    body = body.replace('{{CALC}}', render_calc())
    body = body.replace('{{PHONE_BTN_LG}}', phone_btn(depth, 'btn btn-primary btn-lg'))
    body = body.replace('{{PHONE_BTN}}', phone_btn(depth))
    body = body.replace('{{PHONE}}', DATA['phone_display']).replace('{{TEL}}', DATA['phone_tel'])
    body = body.replace('{{ROOT}}', r)
    for k, v in PICT.items():
        body = body.replace('{{PICT:' + k + '}}', v)
    out = head(meta, depth) + header(depth, current) + body + footer(depth)
    os.makedirs(os.path.dirname(out_path) or '.', exist_ok=True)
    open(out_path, 'w', encoding='utf-8').write(out)
    print('wrote', os.path.relpath(out_path, ROOT), len(out.encode()) // 1024, 'KB')

if __name__ == '__main__':
    render(os.path.join(SRC, 'index.html'), os.path.join(ROOT, 'index.html'), 0, 'index')
    render(os.path.join(SRC, 'service-areas.html'), os.path.join(ROOT, 'service-areas.html'), 0, 'service-areas')
    for s in DATA['services']:
        render(os.path.join(SRC, 'services', s['slug'] + '.html'), os.path.join(ROOT, 'services', s['slug'] + '.html'), 1, 'services/' + s['slug'])
