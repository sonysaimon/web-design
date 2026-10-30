#!/usr/bin/env python3
"""Generate the five service pages for CDP Plumbing. Run from anywhere; writes into ~/cdp-plumbing-website/services/."""
import html, os, json

OUT = os.path.expanduser("~/cdp-plumbing-website/services")
BASE = "https://web.soichirosaimon.com/cdp-plumbing/"
PHONE = "(647) 558-2622"; TEL = "+16475582622"

PAGES = [
 dict(slug="drain-cleaning", title="Drain cleaning", h1="Drains that stay clear, not clogs that come back",
  meta="Professional drain cleaning in Toronto, 24 hours. Snaking, hydro-jetting and camera inspection for kitchen, bathroom, laundry, floor and main drains. Call (647) 558-2622.",
  photo="shower-drain.jpg", photo_w=1200, photo_h=710, photo_alt="Linear shower drain set in a new walk-in shower", photo_cap="Linear shower drain, Toronto renovation",
  intro="A slow sink or a shower that pools is your plumbing telling you something. Store-bought drain cleaner eats the surface of the clog, and often your pipe. We clear the whole line so the problem doesn't return next month.",
  handle=["Kitchen sink clogs (grease, food, soap buildup)","Bathroom sink, tub and shower drains (hair, scale)","Toilet clogs and recurring backups","Laundry and utility drains","Floor drains and basement drains","Main drain and sewer line cleaning","Hydro-jetting for grease, sludge and roots","Camera inspection when a clog keeps returning"],
  signs=["Water drains slowly in sinks, tubs or showers","Gurgling from drains or the toilet","Water backs up when you run two fixtures at once","Bad smells from a drain","The same drain clogs again and again","Water around a floor drain"],
  steps=[("Find the blockage","We work out which part of the system is affected and what's causing it: grease, hair, wipes, roots or a sagging pipe."),("Clear the full line","Augers and snakes for most clogs; hydro-jetting when there's buildup along the pipe walls. No harsh chemicals."),("Camera, flush and test","For stubborn or repeat clogs we run a camera to see the pipe itself, then flush and test every fixture before we leave.")],
  faq=[("Snake or hydro-jet, which do I need?","A snake clears the blockage. A hydro-jet scours the whole pipe clean and is the better choice when a drain clogs repeatedly or you have grease and root buildup. We'll tell you which one your line needs and why."),("Can I just use a chemical drain cleaner?","We'd rather you didn't. They rarely clear more than the surface of a clog and they corrode older pipes, which turns a cheap fix into an expensive one."),("Do you clean drains at night?","Yes. Same crew, same rate, 24 hours.")],
  related=[("sewer-backup","Sewer backups"),("leaks-and-pipe-repair","Leaks & pipe repair"),("bathroom-and-kitchen","Bathroom & kitchen")]),

 dict(slug="sewer-backup", title="Sewer backup & main line", h1="Sewage in the basement is an emergency. We treat it like one.",
  meta="Sewer backup and main line service in Toronto, 24/7. Main line clearing, camera inspection, sewer repair and replacement, backwater valves. Call (647) 558-2622.",
  photo="sewer-line-excavation.jpg", photo_w=1200, photo_h=710, photo_alt="Excavated sewer line under a basement floor with new pipe tied in", photo_cap="Main sewer line replaced under a Toronto basement",
  intro="A backup isn't just a mess. It's contaminated water in your home and a sign something is wrong in the main line: tree roots, a cracked or collapsed clay pipe, grease and wipes, or a storm overwhelming an old system. We stop it, find the cause and show you what we found on camera.",
  handle=["Emergency containment and main line clearing","Tree root removal (auger and hydro-jet)","Camera inspection of the sewer lateral","Sewer line repair and replacement","Backwater valve installation and repair","Sump pump repair and replacement","Basement floor drain backups","Restaurant and commercial drain backups"],
  signs=["Several fixtures backing up at once","Gurgling or bubbling toilets","Sewage smell indoors or in the yard","Water pooling around the floor drain","Every drain in the house running slow","Backups after heavy rain"],
  steps=[("Contain and clear","We stop the backup, protect the rest of the home and clear the main line with professional augers or hydro-jetting."),("Camera the line","We inspect the lateral on video so you can see cracks, roots, bellies or collapse. No guessing."),("Fix it for good","Spot repair, full replacement or a backwater valve, with options and prices before we dig.")],
  faq=[("Is a sewer backup covered by insurance?","Often, if you have sewer backup coverage on your home policy. Our camera footage and written report help with the claim."),("Can a backwater valve stop this happening again?","A backwater valve stops the city sewer from flowing back into your home during storms. We install and service them."),("Will you have to dig up my basement?","Only if the line is damaged. Most backups are cleared without excavation. When digging is needed, you'll see the camera footage and agree to the price first.")],
  related=[("drain-cleaning","Drain cleaning"),("leaks-and-pipe-repair","Leaks & pipe repair")]),

 dict(slug="leaks-and-pipe-repair", title="Leaks & pipe repair", h1="Leaks found fast, pipes fixed once",
  meta="Leak detection, burst pipe repair, low water pressure and repiping in Toronto. Copper, PEX, cast iron and galvanized. 24-hour service. Call (647) 558-2622.",
  photo="pex-manifold.jpg", photo_w=1200, photo_h=710, photo_alt="New PEX manifold with labelled lines after a repipe", photo_cap="PEX manifold after a repipe, west-end Toronto",
  intro="Toronto's older houses hide galvanized, cast iron and tired copper behind the walls. A drip under the sink, a stain on the ceiling or pressure that drops every year are all the same story. We find the source without tearing the house apart and replace what's failed, not just the symptom.",
  handle=["Burst and leaking pipes (emergency)","Leak detection behind walls and under floors","Low water pressure from corroded galvanized pipe","Repiping with copper or PEX","Pipe freezing and thaw repairs","Shut-off valve and main valve replacement","Outdoor taps and hose bibs","Water service and backflow preventers"],
  signs=["Water stains on a ceiling or wall","Pressure that drops when two taps run","Rusty or discoloured water","A hissing sound in a wall","A water bill that jumped for no reason","Damp or mould in a cupboard under a sink"],
  steps=[("Shut it off, then find it","If water is spraying we'll walk you through the main shut-off on the phone. On site we trace the leak with diagnostic tools, not holes in the drywall."),("Price the real fix","Sometimes it's a fitting. Sometimes it's twenty feet of galvanized pipe that should have gone years ago. We tell you which and give you the price before work starts."),("Replace, test, warranty","Proper materials, pressure-tested, covered by our warranty.")],
  faq=[("My water pressure is low all over the house. What's going on?","Usually corrosion inside old galvanized supply pipe narrowing the flow. Replacing the worst section often fixes it; a full repipe fixes it permanently."),("Copper or PEX?","Both are good. PEX is faster to install and handles freezing better; copper is the traditional choice and lasts decades. We'll recommend based on your house and budget."),("A pipe burst at night. Do you charge extra?","No. Same rate nights and weekends.")],
  related=[("water-heaters","Water heaters"),("bathroom-and-kitchen","Bathroom & kitchen"),("drain-cleaning","Drain cleaning")]),

 dict(slug="water-heaters", title="Water heaters", h1="Hot water back today, with honest advice on repair vs. replace",
  meta="Water heater repair, replacement and installation in Toronto. Tank and tankless, same-day service. Call (647) 558-2622.",
  photo="backflow-valve.jpg", photo_w=1200, photo_h=710, photo_alt="Copper piping and valves on a mechanical room install", photo_cap="Mechanical room piping, Toronto",
  intro="No hot water is a same-day call for us. We service tank and tankless heaters, and we'll tell you straight whether a repair is worth it or whether the money is better spent on a new unit.",
  handle=["No hot water or not enough","Water heater leaks and corrosion","Pilot, igniter and thermostat problems","Tank water heater replacement","Tankless (on-demand) installation and service","Expansion tanks and pressure relief valves","Rental unit buyouts and swaps","Annual flushing and maintenance"],
  signs=["Hot water runs out quickly","Rumbling or popping from the tank","Rusty hot water","Water around the base of the heater","A heater older than 10 to 12 years","Pilot light that keeps going out"],
  steps=[("Diagnose","We check the unit, the venting, the valves and the water quality to find the actual fault."),("Repair or replace, your call","If a part fixes it, we say so. If the tank is at the end of its life, we show you the options and prices."),("Install and test","Installed to code, tested, old unit taken away.")],
  faq=[("How long does a water heater last?","A tank typically lasts 10 to 12 years in Toronto water; tankless units longer with yearly service. Past that, leaks are a matter of time."),("Tank or tankless?","Tankless saves space and gives endless hot water, but costs more up front and needs the right gas supply. For many houses a good tank is still the sensible choice. We'll be honest about which fits."),("Can you come today?","Usually, yes. No hot water is treated as a same-day call.")],
  related=[("leaks-and-pipe-repair","Leaks & pipe repair"),("bathroom-and-kitchen","Bathroom & kitchen")]),

 dict(slug="bathroom-and-kitchen", title="Bathroom & kitchen plumbing", h1="Fixtures, renovations and repairs done cleanly",
  meta="Bathroom and kitchen plumbing in Toronto: toilets, faucets, vanities, shower drains, dishwashers and full renovation rough-ins. Call (647) 558-2622.",
  photo="tiled-shower.jpg", photo_w=1200, photo_h=710, photo_alt="Finished tiled walk-in shower with new plumbing", photo_cap="Finished shower, Toronto renovation",
  intro="From a running toilet to a complete bathroom rough-in, this is the everyday work that makes a house run. We protect your floors, test everything and leave it cleaner than we found it. Customers say it in their reviews, and we'd like to keep it that way.",
  handle=["Toilet repair and same-day replacement","Faucet, shower valve and fixture repair","Vanity, sink and shower drain installation","Linear and standard shower drains","Dishwasher and fridge water line hookups","Garbage disposals","Full bathroom and kitchen renovation rough-ins","Condo plumbing (with building approvals)"],
  signs=["Toilet runs, rocks or won't flush properly","Dripping faucet or weak shower","Water under the vanity or dishwasher","Renovation planned and you need the plumbing moved","New fixtures bought and waiting to be installed","Old shut-offs that don't fully close"],
  steps=[("Tell us what you're after","Repair, replace or renovate. Send a photo if it helps; we'll give you a price range on the phone where we can."),("Fixed price before we start","Once on site, one number for the job, agreed before tools come out."),("Install, test, tidy","Floors covered, every connection tested under pressure, packaging gone with us.")],
  faq=[("Can I supply my own toilet or faucet?","Yes. We install customer-supplied fixtures and will tell you if a model has known problems before we fit it."),("Do you work with contractors on renovations?","Yes. We do rough-in and finish plumbing for bathroom and kitchen renovations across Toronto, and coordinate with your contractor or designer."),("Do you do condos?","Yes. We handle building notice, water shut-off scheduling and the paperwork most condo boards require.")],
  related=[("drain-cleaning","Drain cleaning"),("leaks-and-pipe-repair","Leaks & pipe repair"),("water-heaters","Water heaters")]),
]

LOGO = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 30 32 13l18 17v21H14z" fill="none" stroke="#F5C842" stroke-width="6" stroke-linejoin="round"/><path d="M32 27c-4.5 6-7 9.5-7 13a7 7 0 0 0 14 0c0-3.5-2.5-7-7-13z" fill="#35B4E6"/></svg>'
PHONE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2.1z"/></svg>'
e = html.escape

def li(items): return "".join(f"<li>{e(i)}</li>" for i in items)

def page(p):
    url = f"{BASE}services/{p['slug']}.html"
    faq_ld = json.dumps({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in p["faq"]]})
    svc_ld = json.dumps({"@context":"https://schema.org","@type":"Service","name":p["title"],"serviceType":p["title"],"url":url,"areaServed":"Toronto, ON","provider":{"@type":"Plumber","name":"CDP Plumbing of Toronto","telephone":TEL,"url":BASE,"address":{"@type":"PostalAddress","streetAddress":"1344 Davenport Rd","addressLocality":"Toronto","addressRegion":"ON","postalCode":"M6H 2G9","addressCountry":"CA"}}})
    steps = "".join(f'<div class="step reveal"><h3>{e(t)}</h3><p>{e(d)}</p></div>' for t,d in p["steps"])
    faqs = "".join(f'<details class="faq-item"><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q,a in p["faq"])
    related = "".join(f'<a href="{s}.html">{e(t)}</a>' for s,t in p["related"])
    return f"""<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{e(p['title'])} in Toronto · CDP Plumbing, 24 hours</title>
  <meta name="description" content="{e(p['meta'])}">
  <link rel="canonical" href="{url}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{e(p['title'])} · CDP Plumbing of Toronto">
  <meta property="og:description" content="{e(p['meta'])}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{BASE}photos/{p['photo']}">
  <meta name="theme-color" content="#0B2B5E">
  <link rel="icon" href="../favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="../apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
  <script type="application/ld+json">{svc_ld}</script>
  <script type="application/ld+json">{faq_ld}</script>
</head>
<body data-root="../">
<a class="skip" href="#main">Skip to content</a>

<header class="header" id="top">
  <div class="container">
    <a class="logo" href="../" aria-label="CDP Plumbing of Toronto, home">{LOGO}<span>CDP <span class="pl">Pl</span>umbing</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span></button>
    <nav class="nav" id="nav" aria-label="Main">
      <a href="../#services">Services</a>
      <a href="../#work">Recent work</a>
      <a href="../#reviews">Reviews</a>
      <a href="../#areas">Service area</a>
      <a href="../#faq">FAQ</a>
    </nav>
    <div class="header-cta">
      <a class="btn btn-outline" href="../#callback">Request a callback</a>
      <a class="btn btn-call" href="tel:{TEL}" aria-label="Call {PHONE}">{PHONE_ICON}<span class="num">{PHONE}</span></a>
    </div>
  </div>
</header>

<main id="main">
  <section class="svc-hero" aria-labelledby="svc-title">
    <div class="container">
      <div>
        <p class="crumbs"><a href="../">Home</a> › <a href="../#services">Services</a> › {e(p['title'])}</p>
        <p class="eyebrow">{e(p['title'])} · Toronto · 24 hours</p>
        <h1 id="svc-title">{e(p['h1'])}</h1>
        <p class="lead">{e(p['intro'])}</p>
        <div class="hero-actions" style="margin-top:22px">
          <a class="btn btn-call btn-lg" href="tel:{TEL}">{PHONE_ICON}Call {PHONE}</a>
          <a class="btn btn-outline btn-lg" href="../#callback">Request a callback</a>
        </div>
        <p class="hero-note">5.0 on Google from 248 reviews · Price before we start · Same rate nights and weekends</p>
      </div>
      <figure>
        <img src="../photos/{p['photo']}" width="{p['photo_w']}" height="{p['photo_h']}" alt="{e(p['photo_alt'])}" fetchpriority="high">
        <figcaption>{e(p['photo_cap'])}</figcaption>
      </figure>
    </div>
  </section>

  <section class="section svc-body">
    <div class="container">
      <div class="reveal">
        <h2>What we handle</h2>
        <ul class="check-list">{li(p['handle'])}</ul>
        <p style="margin-bottom:6px"><strong>Related</strong></p>
        <div class="related">{related}</div>
      </div>
      <aside class="signs reveal">
        <h3>Signs you need a plumber</h3>
        <ul>{li(p['signs'])}</ul>
        <p style="margin:12px 0 0"><a href="tel:{TEL}"><strong>Call {PHONE}</strong></a> and describe what you see. We'll tell you if it can wait.</p>
      </aside>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="section-head reveal"><p class="eyebrow">How it goes</p><h2>What happens when you call</h2></div>
      <div class="svc-steps">{steps}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="faq-title">
    <div class="container">
      <div class="section-head reveal"><p class="eyebrow">Questions</p><h2 id="faq-title">{e(p['title'])} FAQ</h2></div>
      <div class="faq-list reveal">{faqs}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <div><h2>Ready when you are. Any hour.</h2><p>One number, a real person, a price before we start.</p></div>
      <div class="actions">
        <a class="btn btn-call btn-lg" href="tel:{TEL}">Call {PHONE}</a>
        <a class="btn btn-outline on-dark btn-lg" href="../#callback">Request a callback</a>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div>
      <a class="logo" href="../">{LOGO}<span>CDP <span class="pl">Pl</span>umbing</span></a>
      <address>1344 Davenport Rd<br>Toronto, ON M6H 2G9<br><a href="tel:{TEL}">{PHONE}</a><br><a href="mailto:info@cdpplumbing.ca">info@cdpplumbing.ca</a></address>
      <p class="small">Open 24 hours, 7 days. Licensed and insured plumbers serving Toronto and the GTA.</p>
    </div>
    <div>
      <h4>Services</h4>
      <ul>
        <li><a href="drain-cleaning.html">Drain cleaning</a></li>
        <li><a href="sewer-backup.html">Sewer backup &amp; main line</a></li>
        <li><a href="leaks-and-pipe-repair.html">Leaks &amp; pipe repair</a></li>
        <li><a href="water-heaters.html">Water heaters</a></li>
        <li><a href="bathroom-and-kitchen.html">Bathroom &amp; kitchen</a></li>
        <li><a href="../#emergency">24/7 emergency</a></li>
      </ul>
    </div>
    <div>
      <h4>Areas</h4>
      <ul>
        <li><a href="../#areas">Toronto west end</a></li>
        <li><a href="../#areas">Downtown &amp; midtown</a></li>
        <li><a href="../#areas">North York &amp; Etobicoke</a></li>
        <li><a href="../#areas">Scarborough &amp; East York</a></li>
        <li><a href="../#areas">Vaughan, Mississauga &amp; the GTA</a></li>
      </ul>
    </div>
    <div>
      <h4>Company</h4>
      <ul>
        <li><a href="../#about">About CDP</a></li>
        <li><a href="../#reviews">Reviews</a></li>
        <li><a href="../#faq">FAQ</a></li>
        <li><a href="../#callback">Request a callback</a></li>
        <li><a href="https://maps.google.com/?cid=5469742744729864452" target="_blank" rel="noopener">Google Maps listing</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year">2026</span> CDP Plumbing of Toronto. All rights reserved.</span>
      <span>Site by <a href="https://web.soichirosaimon.com" rel="noopener">Sony Saimon</a></span>
    </div>
  </div>
</footer>

<div class="mobile-bar" aria-label="Quick actions">
  <a class="btn btn-call" href="tel:{TEL}">Call now</a>
  <a class="btn btn-outline" href="../#callback">Callback</a>
</div>

<script src="../services.js"></script>
<script src="../main.js"></script>
</body>
</html>
"""

os.makedirs(OUT, exist_ok=True)
for p in PAGES:
    with open(os.path.join(OUT, p["slug"] + ".html"), "w") as f: f.write(page(p))
    print("wrote", p["slug"])
