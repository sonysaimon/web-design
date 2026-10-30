# Toronto plumber competitor audit (for Plumber To Your Door)

Captured 2026-10-27 with curl + headless Chromium (1440px desktop, iPhone 13). Files in this folder:
`<slug>-desk.png`, `<slug>-mob.png`, `<slug>.html`, `<slug>.txt` (rendered text), `view/` (downscaled parts).
Google Maps ratings in headings are from the brief; on-site counts are what the site itself shows.

---

## 1. Drain King Plumbers — https://www.drainkingplumbers.ca/  (4.7 / 2,893)
- Stack: WordPress + Elementor, Podium chat/text widget, Trustindex Google review feed, reCAPTCHA.
- Sections: header (GET A QUOTE + phone) → hero → request form → 24/7 intro + service cards (6, image + blue
  caption bar) → promotions banner → emergency Q&A → "why professional plumbers" (4 image/text rows) →
  blog (2 posts) → awards strip → 5 testimonials → careers → SEO copy → FAQ accordion (13) →
  service areas (neighbourhood list) → "Find us on" logo strip → Google review carousel → footer.
- Hero: slogan "PUTTING YOU BACK ON THE THRONE" (registered mark), cut-out crew photo (one smiling uniformed
  tech with pipe wrench, looks like a staged stock-style shoot but branded), yellow "$30 OFF for first time
  customers" coupon graphic, one yellow CTA "REQUEST PLUMBING SERVICE". Right rail of badges: Google
  (stars + 2891), HomeStars 91%, BBB Accredited, Consumer Choice Award 2026.
- Booking: phone (416 local + 1-833 toll-free), long request form directly under hero with
  Residential/Commercial radio + 9 issue checkboxes (incl. Backwater Valve, Camera Inspection) + photo
  upload; Podium chat bubble ("Want to chat with a human?" / "Text us").
- Pricing: "$30 OFF for first time customers" coupon in hero; "This month's promotions" section linking to
  a specials page; "no surprise after-hours premiums"; "warranties of up to 30 years" (select repairs);
  note that a cancellation charge applies if tech already dispatched.
- Trust: 2,818/2,891 Google reviews shown twice (badge + live widget), HomeStars Best of Award badges
  2019–2025, BBB, Consumer Choice 2026, "over 15 years", named techs appear in reviews (Jason, Tyler,
  Michael, Jordan Mancini), blog posts bylined by Jason Genah (owner). No licence number on homepage.
- Service area: flat list of ~30 neighbourhoods/cities (Ajax to Hamilton) with "view all"; separate
  Service Areas page. No map.
- Emergency: "true 24/7", "mobile units", "aim for 1-hour arrival times across the GTA, even on
  weekends and holidays", dedicated 24/7 line in footer.
- Visual: yellow #f1c117 + blue #0077a1/#008dbf + near-black #161616; Poppins; mix of real branded photos
  (crew in Drain King shirts, excavation with cones) and stock tech photos; dark "tools on concrete"
  texture band. Busy but strongly branded.
- Mobile: fixed header with GET A QUOTE + phone; hamburger; badges stack under hero; form is very tall;
  Podium chat bubble; no bottom sticky bar; no cookie banner.
- Notable: issue-checkbox intake with photo upload; coupon placed inside the hero; blog cadence weekly.

## 2. Priority Plumbing & Drains — https://www.priorityplumbing.ca/  (4.8 / 1,939)
- Stack: custom/agency build behind Cloudflare (curl blocked, Playwright OK); Podium-style "Have a
  question? Text us here" + Chat bubble.
- Sections: header (phone, nav, red BOOK AN APPOINTMENT pill) → full-bleed video hero → "How can we help?"
  4 service cards (Plumbing, Drain Cleaning, Sewer, Heating) → intro copy + $50 OFF coupon card →
  "What makes a Priority plumber different" 6 tiles → "We stand behind our solutions" + van photo + red
  "Upfront Pricing & Same Day Availability" card → reviews band (5.0 / 5,000 reviews, Google/Yelp/Facebook,
  scrolling 100+ quotes with named techs) → "Ready to fix?" CTA pair + 3 proof chips → footer with
  licence numbers. Short page (~7k px desktop).
- Hero: "TORONTO'S #1 PLUMBING COMPANY / Serving Homeowners Since 2001", background video of tech greeting
  homeowner in a living room (own footage, play/pause control), single red CTA "BOOK AN APPOINTMENT".
  No badges in hero.
- Booking: phone (289 number), "Book an appointment" button (form/scheduler on another page), text/chat
  widget. No form on the homepage.
- Pricing: "$50 OFF Any Plumbing Services — Cannot be combined… Valid on standard pricing only… one-time
  use per household" with Download button; "Best Value Guaranteed — We'll beat any written drain,
  waterproofing, or water service quote by any licensed and insured plumbing contractor"; "Lifetime
  Warranty on All Installations"; "100% satisfaction… we make it right or you don't pay";
  "Service Plans" and "Make a Payment" links in footer.
- Trust: "5.0 Based on 5,000 reviews" (aggregated), "Since 2001", "award-winning", 100+ review quotes each
  naming the tech (Aaron, Brian, Kyle, Tony, Cole, Ouweis…), "Plumbing License #P17794 | Heating License
  #00749274" in footer, "fully stocked service vehicles".
- Service area: sentence list (Toronto, Mississauga, Brampton, Scarborough, North York, Etobicoke,
  Thornhill) + separate Mississauga and "Our Locations" nav items; address 1594 Dupont St.
- Emergency: "Open 7 Days a Week", "Same-Day Service Available", "Any Hour" copy — but no explicit
  24/7 claim; hours shown as Mon–Sun.
- Visual: bright blue #1d7fe0-ish gradients with wave dividers, red #c8102e CTAs, white cards; thin
  geometric light display face (Raleway/Montserrat Light feel); real van + own video. Clean, premium.
- Mobile: top bar phone + logo + red round call button (fixed); hero video plays; "Text us here" toast
  + Chat pill float over content; no bottom bar; no cookie banner.
- Notable: beat-any-written-quote guarantee; downloadable coupon; review wall with tech names as the
  main proof block; heating/waterproofing cross-sell.

## 3. Anta Plumbing And Drain — https://www.antaplumbing.com/  (4.7 / 467)
- Stack: WordPress + Elementor, Trustindex, LiveChat, reCAPTCHA.
- Sections: utility bar (email, 3 phone numbers: main/toll-free/Oakville) → nav (Plumbing, Drain,
  Horizontal Drilling, Trenchless, Water Service Line, Rebates…) → hero with inline schedule form →
  "Reliable company" 5 proof bullets + video embed → Google reviews carousel (4.7, 419) → 3 service
  accordions (Plumbing / Drainage / Water line & sewer) each with photo collage → "Watch our work"
  4 job videos → Plumbing Cost Estimator (5-step calculator) → "Why choose" 6 tiles + "21 years" tile →
  24/7 emergency band → offers (free inspection, free estimates, membership, rebate assistance) →
  Toronto & GTA Rebate Programs → CTA band → service areas (20 photo tiles) → contact block → footer.
- Hero: "Top Rated Toronto Plumbers Serving GTA For 20+ Years", dark blue background with faded vans,
  badge row (HomeStars, BBB, Google 4.7 stars) directly under subhead, two CTAs (orange "Call
  416-231-3331" + white "Book a Plumber Online"), schedule form on the right (name, email, phone,
  address, preferred date/time, message).
- Booking: phone x3, hero form with preferred date/time, LiveChat.
- Pricing: no flat prices, but an interactive estimator (category → service → scope Minor/Major/
  Emergency → quantity slider → modifiers "After-hours / Weekend (+20%)", "Permit Required (+$250)",
  "Difficult Access (+15%)", "Add Camera Inspection (+$250)"); "Free Plumbing Inspections —
  Complimentary plumbing and camera sewer inspection with every service call"; "Free Written Estimates";
  "Membership Discounts" for repeat customers; "City Rebate Assistance".
- Trust: "City of Toronto licensed plumbing company", "Ontario-certified master plumbers", "Signed
  contract before work begins", 4.7/419 Google, HomeStars, BBB, "Locally Owned — Not a franchise",
  "21 YEARS", named techs in reviews (Igor, Matt Carson).
- Service area: 20 aerial-photo tiles (Ajax…Toronto) + two offices (Toronto, Oakville) + Etobicoke line.
- Emergency: "24/7 Emergency Service — Live answer, day or night, 365 days a year", list of emergency
  types (burst pipes, backups, no hot water, frozen pipes, gas line), "no hold music, no voicemail".
- Visual: navy #1a4d8f + mid blue #2e75b6 + orange #fe6b02; Poppins; real job photos (excavation,
  pipe lining, catch basins) and own YouTube videos; feels contractor-authentic, slightly cluttered.
- Mobile: hero stacks badges → 2 CTAs → full form; no sticky bar; hamburger; LiveChat bubble.
- Notable: cost calculator with explicit surcharges; dedicated Rebates nav + Toronto Basement Subsidy /
  Mississauga BWV rebate / Oakville / Burlington / Halton Hills list; job-video gallery; trenchless and
  horizontal drilling as headline specialties.

## 4. DrainEx Plumbing — https://drainexplumbing.site/  (5.0 / 378)
- Stack: WordPress + Elementor template on a .site domain (drainexplumbing.ca is an unrelated Winnipeg
  firm; .com is parked). Thinnest site of the set.
- Sections: top bar (email, phone, socials) → hero → 4 service blocks (Drain, Emergency, Residential,
  Commercial) → "Who we are" → green/navy "Premium services / Our value" split → full-bleed CTA band
  "Free Consultations!" → "Our service" copy + photos → 8 numbered service cards → "Why choose" 4 columns
  → "Trusted" photo + 5.0 badge → Google reviews carousel (5.0, 373) → emergency strip → service area
  copy + 7 city links → contact form → footer.
- Hero: "Trusted Plumber in Toronto for Fast, Reliable Plumbing Service", stock photo of a plumber under
  a sink (blue overlay), CTAs "Book an Appointment" (green) + "Learn more". No badges.
- Booking: phone (437), short form (name, phone, subject, message) at the bottom; no scheduler, no chat.
- Pricing: only "Free Consultations!" — no fees, specials, financing.
- Trust: "Excellent 5.0 Client Ratings" badge, Google widget 373 reviews; no licence, years, names, or
  guarantees. Several reviews read as generic/solicited.
- Service area: sentence of neighbourhoods (Yorkville, Yonge & Lawrence, Danforth, Downsview,
  Leslieville, Newtonbrook) + "Plumber in Brampton/Mississauga/Oshawa/Pickering/Vaughan/Richmond Hill"
  links. No map, no address beyond "Toronto, Ontario".
- Emergency: "Need emergency help? Call right away." strip; no 24/7 or response-time claim.
- Visual: navy #0d2a5c + bright green #3cb043 gradients; Bebas Neue condensed headings + DM Sans/Inter;
  all stock photography. Template look.
- Mobile: no sticky elements at all; hamburger; no cookie banner.
- Notable: proof that a 5.0/378 Maps listing can sit on a near-empty site — rating alone drives the
  ranking; the site adds little.

## 5. PlumberGTA — https://plumbergta.org/  (5.0 / 331)
- Stack: Hostinger Horizons (AI site builder) React SPA; raw HTML empty, renders client-side. Cookie
  consent modal with Accept all / Reject optional / Preferences.
- Sections: utility bar (tagline, email, address) → sticky nav → dark hero → scrolling service ticker →
  4 proof chips (Upfront written quotes, Fast emergency response, Toronto-based, Book online in minutes)
  → "Your Downtown Toronto plumber" copy + request form → 27-item service list (numbered, one line each)
  → "Book a plumber in four steps" → service areas (Primary vs Secondary boxes) → advice library (6 of
  24 guides) → FAQ (5) → "Popular searches" links → CTA band → footer.
- Hero: "DOWNTOWN TORONTO PLUMBER FOR DRAIN CLEANING, REPAIRS & EMERGENCY SERVICE", dark moody photo of
  a tech (stock-like, heavily darkened), orange call button + outlined "Book a plumber online". No
  rating/badges anywhere on the homepage despite 5.0/331 on Maps.
- Booking: phone (437), request form with Area dropdown (24 areas), Preferred time (ASAP/Today/
  Tomorrow/This week/Next week), Service dropdown (27), issue textarea; "A plumber reviews every request
  and calls you back to confirm"; note "Water moving right now? Call… rather than waiting on a form".
- Pricing: "Upfront written quotes — price agreed before work begins"; cost guides in the advice library
  ("How much does drain cleaning cost in Toronto? Real 2026 pricing…"); no coupons or financing.
- Trust: none of the usual (no reviews, licence, years). Only process promises and "Licensed G2 gas
  fitting" in the gas line item.
- Service area: explicit PRIMARY (Downtown Toronto, Toronto, North York, Scarborough, Etobicoke, York,
  East York) vs SECONDARY (Vaughan…Oshawa) with the disclaimer "We do not claim a local office or
  dedicated local crew in these communities."
- Emergency: "Emergency calls prioritized", "priority dispatch for urgent calls", "real arrival window
  on the phone"; no 24/7 claim and no response-time number.
- Visual: near-black navy #0f1b2d + orange #e8531f + off-white; heavy condensed uppercase display face
  (Barlow Condensed/Oswald feel) + humanist body; editorial/"agency" look. Only one photo.
- Mobile: sticky top header; fixed bottom bar "CALL NOW | BOOK ONLINE" (orange/dark split); cookie modal
  covers the hero on load.
- Notable: condo/vertical-plumbing positioning (shared risers, concierge access, elevator bookings, condo
  board shut-off rules); honest primary/secondary area split; "services we actually perform" framing;
  advice library tied to Toronto housing stock and municipal rules.

## 6. Everest Drain & Plumbing — https://everestplumbing.ca/  (4.8 / 314)
- Stack: WordPress, reCAPTCHA; a promo modal ("View Details") appears as a fixed sheet mid-page on both
  desktop and mobile and partly covers content.
- Sections: top bar (Proudly Canadian, "Plumbing Emergency? We're Ready 24/7", REQUEST A QUOTE) → nav
  (incl. HVAC, Fire & Sprinkler) → hero with form → 4 proof icons → 8 service tiles (B&W photos + red
  icons) → Residential/Commercial/Industrial cards → "Trusted by leading brands" logos (The Brick,
  BGIS, Bulk Barn, Chartwell, Costco…) → second quote form band → long Toronto SEO essay with
  homeowner-vs-city responsibility infographic → licensing paragraph → how it works → why choose → FAQ
  (10) → founder letter (Khem Bohora) → Google reviews grid → "Trusted for more than 13 years" badge
  wall (Houzz, BBB, ThreeBestRated, Top Choice, WSIB, Google, yp.ca, HomeStars) → recent projects (4,
  dated) → "Our local activity" live dispatch map → video + certificate → blog → service areas (chips)
  → 24/7 band + "Find a plumber near you" postal-code box → footer with licence numbers.
- Hero: "Trusted Toronto Plumbers for All Your Plumbing Needs — serving since 2013. Upfront pricing.
  Background-checked technicians.", background real group photo of the crew (darkened), Skilled Trades
  Ontario + WSIB logo pill above headline, red "CALL US NOW (416) 383-7378", form on right
  (name, phone, email, service dropdown, message).
- Booking: phone, two forms on the page, postal-code "Find a plumber near you"; "phone is answered by a
  master plumber. No call centre, no pressing buttons 1, 2, 3, no voicemail."
- Pricing: "price over the phone before we dispatch" for simple jobs, "upfront flat price" on site for
  complex; "one-year warranty on our labour", "existing customers get the same rate every time";
  no coupons; FAQ "How much does a plumber cost in Toronto?" + blog "2026 Pricing Guide".
- Trust: licence block "City License No: T94-4306348 / Corporation No (OCN): 2365781 / Trade No:
  P23714"; "306A plumber licence issued by Skilled Trades Ontario"; "general liability… up to $10
  million", WSIB; background checks; Infrastructure Ontario & BGIS partner; client logos; awards;
  founder letter with name; dated project cards; live job map.
- Service area: 28 chips (Aurora…The Beaches) + live Google map of recent jobs + postal-code lookup.
- Emergency: top-bar "We're Ready 24/7", "technician dispatched instantly", 24/7/365 band; no
  arrival-time promise.
- Visual: navy #0b2347 + red #eb242a + light grey; Proxima Nova Condensed headings; real crew/job photos
  (B&W treated), infographic. Dense, institutional/commercial feel.
- Mobile: fixed top strip "EMERGENCY? | CALL US" (red/blue), fixed "SLIDE OR TAP TO CALL" slider under
  hero, promo sheet pops over the form; long page (~23k px).
- Notable: live dispatch map as proximity proof; homeowner/city responsibility diagram; explicit
  Basement Flooding Protection Subsidy help ("we give you the invoices, permits and photos you need to
  claim your rebate"); lead pipe replacement page; Fire & Sprinkler/HVAC lines.

## 7. John The Plumber (Toronto page) — https://johntheplumber.ca/toronto-plumber/  (4.8 / 266)
- Ottawa-based multi-location franchise-style brand; Toronto is one of ~30 location pages.
  Stack: WordPress + Elementor, Podium text widget, Trustindex, Jobber-style online booking, cookie
  banner, arrival-window modal on load.
- Sections: top bar (My Account/Login) → nav → location bar (Toronto, ON · 613 phone · All Locations) →
  hero (copy + BOOK ONLINE / CALL A PLUMBER + mascot illustration) → YouTube embed → ~30 service blocks
  on yellow with before/after photo pairs → "Why choose" (6, with real team/van photos) → service areas
  → Google reviews carousel (265) → FAQ (5, first one answered inline) → CTA → logo + "BOOK ONLINE CLICK
  HERE! SAVE $20" → footer with address, blog, neighbourhoods, and 30 location addresses.
- Hero: "Toronto Plumbers and Drains" + paragraph; cartoon mascot + CN Tower illustration instead of a
  photo; two blue CTAs; no badges. On load a modal "Select Your Plumber's Arrival Window — Select a Time
  Slot Today & Save $20 Instantly!" lists 3-hour windows (8–11, 10–1, 11–2, 12–3, 1–4) with "Book This
  Slot / Save $30 Instantly!" and "Call if you have an emergency and you need you now!".
- Booking: online slot picker (arrival windows), phone (Ottawa 613 number even on Toronto page),
  Podium text, customer account login.
- Pricing: "Save $20/$30 instantly" for booking online; "Financing Available — Have you ever met a
  Toronto plumber that offers financing?"; "Loyalty Program" link; FAQ states "Plumber rates in Toronto
  can range widely from around $100 to over $1,000 per hour"; "no hidden fees".
- Trust: 265 Google reviews widget with named techs (Marcus, Liam, Michael, Adam, Jeff), licensed &
  insured, "decades of experience", real team photos (crew in front of wrapped van), before/after
  photos with brand stamp, "Warranty Information" link. No licence number.
- Service area: "Downtown Toronto – York – North York – East York – Etobicoke – Scarborough" + 15
  neighbourhoods + massive all-locations footer (Ottawa, Kingston, London, Hamilton…).
- Emergency: "7 days a week", "OPEN 24 HOURS" in footer address block; "rapid response"; no time promise.
- Visual: saturated yellow #f5bf00 + blue #0868b1 + red; Montserrat heavy + Roboto; cartoon mascot,
  before/after photo pairs; loud, cartoonish.
- Mobile: fixed bottom bar "Book Online | Call Now"; cookie banner; arrival-window modal; Podium
  bubble — three overlays stacked on first load. Very long (~27k px).
- Notable: arrival-window slot picker with instant discount; before/after galleries per service;
  account login + loyalty program.

## 8. Mr. Rooter Plumbing of Toronto — https://www.mrrooter.ca/toronto/  (national franchise reference)
- Stack: Neighbourly corporate platform; "Ready to help, just say the word" chat widget.
- Sections: Neighbourly bar → franchise header (Canadian Owned, Change Location, Apply Locally, Special
  Offers, Payment Plans) → red nav with "Schedule Service in under 2 minutes" + phone "24/7 Scheduling"
  → hero + "Let Us Call You" form (Residential/Commercial tabs) → Special Offers ($30 Off card) → "Why
  Toronto homeowners call" + video → 4 service cards → services accordion (Res/Com toggle) → Done Right
  Promise → Why choose (3) → "Service you can trust" red band → location card with Google map polygon +
  21 neighbourhoods → very long Toronto SEO article (clay laterals, cast iron stacks, seasons, repair vs
  replace, DIY vs pro, 311 vs plumber) → review carousel → financing → partners → FAQ (22, Toronto
  specific) → careers → Neighbourly block → footer.
- Hero: "Licensed Plumber Toronto Homeowners Trust…" + "Quality Work by Local Plumbing Professionals",
  real-looking branded photo (tech in red uniform beside red Mr. Rooter van), form under hero with
  postal code + CASL consent checkbox. No badges in hero.
- Booking: "Schedule Service in under 2 minutes" online scheduler, "Let Us Call You" form, 24/7
  scheduling line, chat widget.
- Pricing: "$30 Off Your Next Plumbing Service — Limited Time Offer. No cash value. Limit one per
  customer. Offer expires 03/31/27… must be presented at time of scheduling" with Print Offer;
  "Upfront Flat Rate Pricing"; "Payment Plans"/"Secure Financing"; "We don't charge overtime fees. The
  price you're quoted at 3 a.m. is the same price you'd get at 3 p.m."
- Trust: Neighbourly Done Right Promise (if it's not right, we'll make it right), "licensed, insured, and
  background-checked", "We guarantee our parts and workmanship", partner logos; named techs in reviews
  (Ali, Habib, Pouya). Review count not shown.
- Service area: 21 neighbourhoods + Google map with shaded territory polygon; "Change Location".
- Emergency: "24/7 Scheduling", "available 24 hours a day, 7 days a week, 365 days a year", same price
  nights/weekends; no arrival-time promise.
- Visual: red #d7282f + blue #1c64f2/#3a73b7 + light grey; Open Sans; real branded photos.
  Corporate, long, text-heavy.
- Mobile: sticky header + fixed bottom bar "24/7 Scheduling (416) 613-7492" + chat button; no cookie
  banner; page ~30k px.
- Notable: 22 Toronto-specific FAQs citing City of Toronto/311/Toronto Water/MyWaterToronto; territory
  polygon map; residential/commercial tabbed form; CASL-compliant consent.

---

## Table stakes (what every real competitor does)
- Phone number in the header on every viewport, plus a second CTA (Book/Request/Quote).
- A lead form on the homepage (6 of 8 put it in or directly under the hero).
- A Google review widget with star rating and count (7 of 8; PlumberGTA is the exception).
- "Licensed & insured", "upfront pricing / no hidden fees", "24/7" or "7 days" copy.
- Service list covering drains, sewer, water heater, sump pump, backwater valve, leaks, emergency.
- A service-area list of Toronto neighbourhoods and GTA cities; a FAQ accordion; a blog.
- Blue as the primary colour (6 of 8) with one hot accent (yellow, orange, red or green).
- Some mobile-only call affordance: fixed call button or bottom bar (Priority, PlumberGTA, Everest,
  John, Mr. Rooter).

## Best ideas worth adopting
- Arrival-window slot picker with an instant discount for booking online (John The Plumber).
- Issue checkboxes + photo upload on the intake form, incl. Backwater Valve and Camera Inspection
  options (Drain King); Residential/Commercial tabs and postal code (Mr. Rooter).
- Explicit response promise: "aim for 1-hour arrival" and "no surprise after-hours premiums" (Drain
  King); "price quoted at 3 a.m. is the same at 3 p.m." (Mr. Rooter).
- Written guarantees stated as numbers: "beat any written quote", "lifetime warranty on installations",
  "make it right or you don't pay" (Priority); "one-year labour warranty", "$10M liability" (Everest).
- Licence numbers in the footer (Priority P17794; Everest T94-4306348 / P23714) — cheap, rare, credible.
- Proof chips directly under the hero headline: HomeStars / BBB / Google stars (Anta, Drain King).
- Live dispatch/job map and dated "recent projects" cards (Everest); shaded territory polygon map
  (Mr. Rooter) — both answer "do you really come to my street?".
- Before/after photo pairs per service (John The Plumber); own job videos (Anta).
- Cost calculator with transparent surcharges (+20% after hours, +$250 permit) (Anta) and
  "how much does X cost in Toronto" cost guides (PlumberGTA, Everest, Mr. Rooter).
- Primary vs secondary service-area honesty with a disclaimer (PlumberGTA).
- Rebate assistance as a product: "we give you the invoices, permits and photos you need to claim your
  rebate" (Everest) and a dedicated Rebates nav item listing each municipality's program (Anta).
- Founder letter with real name and crew group photo in the hero (Everest); named techs recurring in
  reviews (Priority, John) — consider a "meet the plumber who's coming" strip.
- Condo-specific copy (shared risers, concierge, elevator booking, board shut-off rules) (PlumberGTA).
- Homeowner vs City responsibility diagram for the water service / sewer lateral (Everest).

## What nobody does (opportunities)
- Publish an actual price list or starting-at prices (only Anta's calculator and John's "$100–$1,000/hr"
  FAQ come close). A simple "diagnostic fee $X, waived if you proceed / no dispatch fee" line would stand out.
- Show a real "plumber is on the way" promise with a time window on the homepage (only Drain King
  mentions 1 hour, buried in FAQ copy).
- A lightweight mobile experience: every site is 10k–30k px tall on mobile and 3 of 8 stack cookie
  banner + popup + chat on first load. Fast, short, sticky-call-bar-first would feel different.
- Technician profiles with photos/names/licence class on the homepage (names appear only inside reviews).
- A true online scheduler with live availability (John is the only slot picker; the rest are forms
  that promise a callback).
- Text/SMS-first booking ("text us a photo of the problem") — Podium bubbles exist but nobody leads
  with it.
- Winter/seasonal prompts tied to the calendar (frozen pipe checklist in Jan–Feb, sump pump test before
  spring thaw) — mentioned in essays, never surfaced as UI.
- Insurance-claim help for sewer backups / flooding (only Everest's FAQ touches it).
- Any site that looks designed rather than templated: Priority is the only genuinely polished one;
  PlumberGTA has editorial styling but zero social proof.

## Toronto-specific content seen
- City of Toronto Basement Flooding Protection Subsidy Program: Everest (explains rebate for backwater
  valve + sump pump, promises invoices/permits/photos for the claim; FAQ item), Anta ("Toronto Basement
  Subsidy — backwater valve, sump pump, and pipe separation upgrades"; also Mississauga BWV rebate,
  Oakville, Burlington, Halton Hills programs; "Backflow Preventer Testing" for commercial), Mr. Rooter
  (FAQ: subsidy covers both devices, "substantially expanded in 2026"; backwater valve needs a building
  permit), Drain King ("Plumbing Rebates" footer link; backwater valve in intake form).
- Lead pipes / lead water service lines: Everest ("major issue we repair throughout downtown Toronto is
  lead pipes", Lead Pipe Replacement page), Mr. Rooter (FAQ: pre-mid-1950s homes, call 311 to check).
- Toronto Water / 311: Mr. Rooter has a whole block ("When to call 311 vs a plumber", shared sewer
  service line responsibility, downspout disconnection requirement, MyWaterToronto for high bills,
  pressure zones); Everest has the homeowner-vs-city responsibility infographic for the water service.
- Old housing stock: Mr. Rooter (pre-1970 clay laterals, cast iron stacks, galvanized supply, offset
  joints), Everest (pre-1950 subdivisions, clay drains, root intrusion, galvanized, hard water pre-1980),
  PlumberGTA (Poly-B and galvanized repiping; condo towers, converted lofts, heritage buildings),
  John (older downtown properties vs newer condos).
- Weather: frozen pipes Jan–Feb (Everest, Drain King, Mr. Rooter, PlumberGTA "minus 20C"), spring thaw
  flooding and sump pump testing (Mr. Rooter), storm sewer backups (Priority, Anta).
- Neighbourhood name-dropping: Annex, Rosedale, Liberty Village, High Park, The Beaches, Leslieville,
  CityPlace, King West, St. Lawrence, Financial District, Cabbagetown, Forest Hill, Distillery District.
- Licensing language: Skilled Trades Ontario 306A, City of Toronto plumbing licence numbers, WSIB,
  Ontario building permits for backwater valves and bathroom relocations, TSSA-style gas (G2) fitting.
