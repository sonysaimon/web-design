#!/usr/bin/env python3
"""Generate the inner pages from index.html's chrome + services.js data.

  python3 build.py

index.html is written by hand and is the source of truth for <head> assets, header and footer
(the blocks between <!--HEAD-->, <!--CHROME-TOP--> and <!--CHROME-BOTTOM--> markers).
services.js holds the service content; reviews.js the review quotes.
Generated: services.html, <service-slug>.html x9, service-area.html, about.html, reviews.html, contact.html
"""
import json, re, html, pathlib

ROOT = pathlib.Path(__file__).parent
BASE = "https://web.soichirosaimon.com/plumbers-direct/"
PHONE_TEL = "tel:+14164027798"
PHONE = "416-402-7798"

index = (ROOT / "index.html").read_text(encoding="utf8")
def block(name):
    m = re.search(rf"<!--{name}-->(.*?)<!--/{name}-->", index, re.S)
    return m.group(1)
HEAD, TOP, BOTTOM = block("HEAD"), block("CHROME-TOP"), block("CHROME-BOTTOM")

js = (ROOT / "services.js").read_text(encoding="utf8")
SERVICES = json.loads(js[js.index("= [") + 2 : js.index("];") + 1])

E = html.escape
PHONE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>'
CALL_BTN = f'<a class="btn btn--red" href="{PHONE_TEL}">{PHONE_ICON}Call {PHONE}</a>'
REQ_BTN = '<a class="btn btn--outline" href="contact.html#request">Request service</a>'

def head(title, desc, path, extra=""):
    h = HEAD
    h = re.sub(r"<title>.*?</title>", f"<title>{E(title)}</title>", h)
    h = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{E(desc)}">', h)
    h = h.replace(f'<link rel="canonical" href="{BASE}">', f'<link rel="canonical" href="{BASE}{path}">')
    h = h.replace(f'<meta property="og:url" content="{BASE}">', f'<meta property="og:url" content="{BASE}{path}">')
    h = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{E(title)}">', h)
    h = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{E(desc)}">', h)
    return f"<!doctype html>\n<html lang=\"en-CA\">\n<head>{h}{extra}</head>\n<body>{TOP}\n<main id=\"main\">\n"

def tail():
    return f"\n</main>\n{BOTTOM}</body>\n</html>\n"

def write(name, content):
    (ROOT / name).write_text(content, encoding="utf8")
    print("wrote", name)

def faq_schema(items):
    return '<script type="application/ld+json">' + json.dumps({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in items]
    }) + "</script>"

def crumbs(*parts):
    out = ['<a href="./">Home</a>']
    for text, href in parts:
        out.append(f'<a href="{href}">{E(text)}</a>' if href else E(text))
    return '<div class="crumbs">' + '<span>/</span>'.join(out) + '</div>'

def closing_band(text="Need this fixed today?"):
    return f'''
<section class="section section--ink">
  <div class="wrap" style="display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap">
    <div><span class="eyebrow" style="color:#fff">24 hours, every day</span><h2 style="margin:0">{E(text)}</h2></div>
    <div class="btn-row"><a class="btn btn--red" href="{PHONE_TEL}">{PHONE_ICON}Call {PHONE}</a><a class="btn btn--outline-light" href="contact.html#request">Request service</a></div>
  </div>
</section>'''

PHOTO = {
    "faucet-toilet-repair": ("photos/job-shower-valve.jpg", "New shower valve and trim installed by Plumbers Direct"),
    "drain-cleaning": ("photos/job-drain-camera.jpg", "Inside view of an old drain pipe during a camera inspection"),
    "leaking-frozen-pipes": ("photos/frozen-pipe.jpg", "A frozen, split pipe with ice forming at the break"),
    "sump-pumps-flooding": ("photos/job-tub-rough-in.jpg", "Basement rough-in plumbing with new supply and drain lines"),
    "water-main-repairs": ("photos/hero-van.jpg", "The Plumbers Direct van by Lake Ontario"),
    "emergency-plumber": ("photos/hero-van-mobile.jpg", "Plumbers Direct van ready to go"),
    "hot-water-tanks": ("photos/job-water-heater.jpg", "New gas water heater installed with fresh copper connections"),
    "sewer-lines": ("photos/job-drain-camera.jpg", "Camera inspection view inside a sewer line"),
    "water-quality": ("photos/job-shower-install.jpg", "Finished shower with new fixtures"),
}

# ---------- service pages ----------
for i, s in enumerate(SERVICES):
    others = [o for o in SERVICES if o["slug"] != s["slug"]]
    related = [others[(i + k) % len(others)] for k in range(3)]
    photo, alt = PHOTO[s["slug"]]
    title = f"{s['name']} in Toronto · Plumbers Direct"
    desc = f"{s['short']} Licensed Toronto plumbers since 2000, 24-hour line {PHONE}."
    body = head(title, desc, s["slug"] + ".html", faq_schema(s["faq"]))
    body += f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      {crumbs(("Services", "services.html"), (s["name"], None))}
      <span class="eyebrow">{E(s["sym"])} · {E(s["problem"])}</span>
      <h1>{E(s["name"])}</h1>
      <p class="lede">{E(s["page_lede"])}</p>
      <div class="btn-row">{CALL_BTN}{REQ_BTN}</div>
    </div>
    <img src="{photo}" alt="{E(alt)}" width="1200" height="900">
  </div>
</section>
<section class="section">
  <div class="wrap svc-layout">
    <div class="prose">
      {''.join(f'<p>{E(p)}</p>' for p in s["body"])}
      <h2>What's included</h2>
      <ul class="includes">{''.join(f'<li>{E(x)}</li>' for x in s["includes"])}</ul>
      <div class="mid-cta"><div><b>Talk to Joyce now</b><span>24 hours. Written price before work starts.</span></div><a class="btn btn--red" href="{PHONE_TEL}">Call {PHONE}</a></div>
      <div class="cred-row"><span>Licence P26432</span><span>Since 2000</span><span>1-year warranty</span><span>Can't fix it, you don't pay</span><span>24-hour line</span></div>
      <h2>What customers said about this work</h2>
      <div class="review-grid" id="reviews-service" data-ids="{','.join(s["reviews"])}" style="grid-template-columns:1fr;max-width:720px"></div>
      <h2>Questions</h2>
      <div class="faq">{''.join(f'<details><summary>{E(q)}</summary><div class="a">{E(a)}</div></details>' for q, a in s["faq"])}</div>
      <h2>Related</h2>
      <div class="related">{''.join(f'<a href="{o["slug"]}.html">{E(o["problem"])}<small>{E(o["name"])}</small></a>' for o in related)}</div>
    </div>
    <aside class="aside">
      <div class="aside-card">
        <h3>Get it fixed</h3>
        <ul><li>Same-day service</li><li>Written price before work starts</li><li>One number, 24 hours</li><li>All work warrantied one year</li></ul>
        <a class="btn btn--red" href="{PHONE_TEL}">Call {PHONE}</a>
        <a class="btn btn--outline" href="contact.html#request">Request service</a>
      </div>
      <div class="aside-card">
        <h3>All services</h3>
        <ul>{''.join(f'<li><a href="{o["slug"]}.html">{E(o["name"])}</a></li>' for o in SERVICES)}</ul>
      </div>
    </aside>
  </div>
</section>
{closing_band()}'''
    write(s["slug"] + ".html", body + tail())

# ---------- services hub ----------
hub = head("Plumbing services in Toronto · Plumbers Direct", "Faucets, drains, pipes, sump pumps, water mains, water heaters, sewer lines and water quality. Licensed Toronto plumbers since 2000, 24 hours.", "services.html")
hub += f'''
<section class="page-hero page-hero--plain">
  <div class="wrap">
    <div>
      {crumbs(("Services", None))}
      <span class="eyebrow">Plumbing services</span>
      <h1>Named by what's wrong.</h1>
      <p class="lede">Nine things we fix every week in Toronto homes and small commercial buildings. If yours is not on the list, call anyway; it probably is.</p>
      <div class="btn-row">{CALL_BTN}{REQ_BTN}</div>
    </div>
  </div>
</section>
<section class="section"><div class="wrap"><div class="services-grid" id="services-grid"></div></div></section>
{closing_band("Not sure which one it is?")}'''
write("services.html", hub + tail())

# ---------- service area ----------
AREAS = [
    ("Toronto west end", "High Park, Bloor West Village, The Junction, Roncesvalles, Swansea, Parkdale. Our home base, minutes away. Houses here are 1900s–1940s: clay drains, lead water services and galvanized supply lines are the everyday calls."),
    ("Downtown & Midtown Toronto", "Condos, walk-ups and Victorian semis. Condo work needs the building's shut-off coordinated with the property manager; we do that regularly."),
    ("Etobicoke", "Post-war bungalows and 1960s–70s subdivisions. Sump pumps, backwater valves and basement flooding after summer storms."),
    ("North York, York & East York", "Mixed housing stock. Water heater replacements, drain clogs and sewer back-ups on older streets."),
    ("Leslieville, The Beach & Scarborough", "East-end homes, many with original drains. Camera inspections and backwater valve installs are common here."),
    ("Mississauga & Oakville", "West of the city. Same-day service for most calls; emergencies dispatched from the west end."),
    ("Vaughan, Woodbridge, Thornhill & Richmond Hill", "North of the 401. Newer homes with polybutylene supply lines from the 80s and 90s show up here."),
    ("Brampton & Markham", "Outer GTA. We come for scheduled work and emergencies; call for a realistic time."),
]
area = head("Service area · Plumbers Direct, Toronto and the GTA", "Plumbers Direct serves Toronto, Etobicoke, North York, East York, Scarborough, Mississauga, Oakville, Brampton, Vaughan, Richmond Hill and Markham from 2100 Bloor St W.", "service-area.html")
area += f'''
<section class="page-hero page-hero--plain">
  <div class="wrap">
    <div>
      {crumbs(("Service area", None))}
      <span class="eyebrow">Where we work</span>
      <h1>Based in Bloor West. Across the GTA.</h1>
      <p class="lede">We are at 2100 Bloor St W by High Park. The west end is minutes away and the rest of the city is usually within the hour. Not on the list? Call. We probably still come.</p>
      <div class="btn-row">{CALL_BTN}{REQ_BTN}</div>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap area">
    <div>
      {''.join(f'<h3 style="margin-top:22px">{E(n)}</h3><p style="color:var(--muted)">{E(d)}</p>' for n, d in AREAS)}
    </div>
    <div class="map" style="position:sticky;top:calc(var(--header-h) + 16px)">
      <iframe title="Map: Plumbers Direct, 2100 Bloor St W, Toronto" src="https://www.google.com/maps?q=Plumbers%20Direct%2C%202100%20Bloor%20St%20W%2C%20Toronto%2C%20ON%20M6S%205A5&z=10&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>
{closing_band("In our area and need a plumber?")}'''
write("service-area.html", area + tail())

# ---------- about ----------
about = head("About Plumbers Direct · Toronto plumbers since 2000", "Plumbers Direct is a women-owned Toronto plumbing company, licensed (P26432) and in business since 2000. Meet Joyce, Tenzin and Peter.", "about.html")
about += f'''
<section class="page-hero">
  <div class="wrap">
    <div>
      {crumbs(("About", None))}
      <span class="eyebrow">About Plumbers Direct</span>
      <h1>Twenty-five years. One phone number.</h1>
      <p class="lede">Plumbers Direct has been fixing Toronto plumbing since 2000: residential and commercial, routine upkeep to the 4 a.m. burst pipe. We are a small, women-owned company, and customers know us by the people who answer and show up.</p>
      <div class="btn-row">{CALL_BTN}{REQ_BTN}</div>
    </div>
    <img src="photos/billboard-drip-leak-clog.jpg" alt="Plumbers Direct transit-shelter ad in Toronto reading Drip, Leak, Clog" width="1096" height="1400" style="aspect-ratio:4/5">
  </div>
</section>
<section class="section">
  <div class="wrap about">
    <img src="photos/crew-at-work.jpg" width="550" height="387" alt="Two Plumbers Direct technicians working on a bathtub installation" loading="lazy">
    <div>
      <h2>Who you'll deal with</h2>
      <ul class="people">
        <li>Joyce<span>Answers the phone, books the job, follows up after. Named in more reviews than anyone.</span></li>
        <li>Tenzin<span>Lead plumber. Explains what he's doing, takes photos, tidies up.</span></li>
        <li>Peter<span>Founder. Started the company in 2000 and still quotes and works jobs.</span></li>
        <li>Andrew, Bruce &amp; George<span>Plumbers on the road across the GTA.</span></li>
      </ul>
      <p>What we do: faucets and toilets, drains and sewers, leaking and frozen pipes, sump pumps and backwater valves, water mains, hot water tanks, water quality, and bathroom and kitchen plumbing for renovations. We pull permits, close them, and give you a written quote before any work begins.</p>
    </div>
  </div>
</section>
<section class="section section--paper">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Credentials</span><h2>The parts you can check.</h2></div>
    <div class="guar">
      <div class="g"><h3>Licence P26432</h3><p>City of Toronto plumbing licence. Permits pulled and inspected where the work requires it.</p></div>
      <div class="g"><h3>4.9 on Google</h3><p>87 reviews on Google Maps. <a href="reviews.html">Read them here</a> or on Google.</p></div>
      <div class="g"><h3>HomeStars Best of Award</h3><p>Winner five times, 2019 through 2023, with a 96% HomeStars rating.</p></div>
      <div class="g"><h3>Since 2000</h3><p>Twenty-five years serving Toronto and the GTA from Bloor West Village.</p></div>
      <div class="g"><h3>One-year warranty</h3><p>On all work. If we can't fix it, you don't pay.</p></div>
      <div class="g"><h3>Women-owned</h3><p>A small, independently owned Toronto company.</p></div>
    </div>
  </div>
</section>
{closing_band("Want to talk to a person?")}'''
write("about.html", about + tail())

# ---------- reviews ----------
rev = head("Reviews · Plumbers Direct, Toronto", "Google reviews for Plumbers Direct: 4.9 stars from 87 reviews. Named plumbers, real jobs, emergency calls at 4 a.m. and on Christmas Day.", "reviews.html")
rev += f'''
<section class="page-hero page-hero--plain">
  <div class="wrap">
    <div>
      {crumbs(("Reviews", None))}
      <span class="eyebrow">Reviews</span>
      <h1>Named plumbers, real jobs.</h1>
      <div class="rating-badges" style="margin-bottom:22px">
        <a class="badge" href="https://maps.google.com/?cid=8295190557234385444" target="_blank" rel="noopener"><span class="b-num">4.9<span class="b-stars" aria-hidden="true">★★★★★</span></span><span class="b-lbl">Google<br>87 reviews</span></a>
        <span class="badge"><span class="b-num">96%</span><span class="b-lbl">HomeStars<br>Best of Award 2019–2023</span></span>
      </div>
      <p class="lede">Every quote below is from a public Google review or the testimonials customers sent us, shortened for length and nothing else. <a href="https://g.page/r/Ce72MsgN53Y3EAg/review" target="_blank" rel="noopener">Leave your own on Google →</a></p>
    </div>
  </div>
</section>
<section class="section"><div class="wrap"><div class="review-grid review-grid--all" id="reviews-all"></div></div></section>
{closing_band("Be the next one.")}'''
write("reviews.html", rev + tail())

# ---------- contact ----------
form = re.search(r'<form class="form reveal".*?</form>', index, re.S).group(0).replace(' reveal', '')
contact = head("Contact Plumbers Direct · 416-402-7798, 24 hours", "Call Plumbers Direct at 416-402-7798, 24 hours a day, or send a service request. 2100 Bloor St W, Suite 6222, Toronto ON M6S 5A5.", "contact.html")
contact += f'''
<section class="page-hero page-hero--plain">
  <div class="wrap">
    <div>
      {crumbs(("Contact", None))}
      <span class="eyebrow">Contact</span>
      <h1>Call. Someone answers.</h1>
      <p class="lede">One number, 24 hours a day, every day of the year. If water is running right now, call rather than filling in the form.</p>
    </div>
  </div>
</section>
<section class="section" id="request">
  <div class="wrap contact-grid">
    <div>
      <ul class="contact-list">
        <li><b>Phone, 24 hours</b><a href="{PHONE_TEL}">{PHONE}</a></li>
        <li><b>Email</b><a href="mailto:plumbersdirect@me.com">plumbersdirect@me.com</a></li>
        <li><b>Office</b><span style="font-size:17px">2100 Bloor St W, Suite 6222<br>Toronto, ON M6S 5A5</span></li>
        <li><b>Hours</b><span style="font-size:17px">Emergency line open 24 hours. Scheduled work weekdays, with evenings and weekends by arrangement.</span></li>
        <li><b>Licence</b><span style="font-size:17px">City of Toronto plumbing licence P26432</span></li>
      </ul>
      <div class="map" style="aspect-ratio:4/3;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line)">
        <iframe title="Map: Plumbers Direct, 2100 Bloor St W, Toronto" src="https://www.google.com/maps?q=Plumbers%20Direct%2C%202100%20Bloor%20St%20W%2C%20Toronto%2C%20ON%20M6S%205A5&z=14&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen style="width:100%;height:100%;border:0"></iframe>
      </div>
    </div>
    {form}
  </div>
</section>'''
write("contact.html", contact + tail())
