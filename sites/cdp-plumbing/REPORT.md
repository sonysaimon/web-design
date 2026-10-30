# CDP Plumbing of Toronto — build report (2026-10-27)

Local preview: http://localhost:8091/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/cdp-plumbing/ (not deployed)

## Audit of the current site (cdpplumbing.ca), playbook Part 5

| Category | Score |
|---|---|
| 1. Hero | 3 (AI-generated image, "Trusted Plumbing Service", no city, "let's get started" / "read more") |
| 2. CTAs & booking | 4 (contact form only, phone not in header, no mobile bar) |
| 3. Trust | 3 (no rating with count, unsourced testimonials, counters render "0 +", no licence) |
| 4. Services structure | 4 (6 grid items vs 4 service pages, names don't match) |
| 5. Service area / SEO | 4 (11 thin city pages, homepage copy says Vaughan; shop is in Toronto) |
| 6. Navigation | 5 ("Location" parent links to #, footer has no address) |
| 7. Mobile | 5 (responsive Elementor, no persistent CTA, heavy) |
| 8. Visual design | 3 (brand blue only; Envato stock + AI images; an electrician photo in the support block) |
| 9. Copy & pricing | 2 ("years of experiance", "Costumer support", lorem ipsum on Contact, no offer or policy) |
| 10. Technical | 4 (145 KB HTML, Elementor 4.3, Yoast WebPage schema only, no LocalBusiness/FAQ schema, empty alt text) |
| **Total** | **37 / 100, capped at 50 → rebuild** |

Critical failures: placeholder text live (contact page), phone number differs (About page shows (647) 584-9345, everywhere else (647) 558-2622), animated counters stuck at "0 +".

Top 5 problems in plain language: the site doesn't say where you are or show your 5.0 rating; the photos aren't yours; the copy talks about Vaughan; there's lorem ipsum and typos on live pages; nobody can call you from the header on a phone.

## Business facts
| | Value | Source |
|---|---|---|
| Name | CDP Plumbing of Toronto ("CDP Plumbing" on sign, site and truck) | Google, sign photo |
| Category | Plumber, 24 hours | Google |
| Address | 1344 Davenport Rd, Toronto, ON M6H 2G9 | Google (not on their site) |
| Phone | (647) 558-2622 | Google, truck decal, site header/footer/contact |
| Email | info@cdpplumbing.ca | Site, truck decal |
| Hours | Open 24 hours, 7 days | Google, site footer |
| Booking | None. Phone + contact form | Site |
| Ratings | Google 5.0 (248) | Google Maps 2026-10-27 (screenshot showed 249) |
| Team | Kemar, Alex, George, David, Michael (named in reviews) | Google reviews |
| Licence | Not published | — |
| Founding year | Not published; site published 2025-10-31 | Yoast schema |

**Conflicts:** About page phone (647) 584-9345 vs (647) 558-2622 everywhere else (used 558-2622, matches Google and the truck). Site copy names Vaughan as home base; Google and the sign place the shop on Davenport Rd, Toronto (used Toronto). Site footer hours "Monday – Friday: 24/7 Hours / Sunday - Saturday : 24/7 Hours" (used "Open 24 hours, 7 days").

## Sources used
- Google Maps listing (cid 5469742744729864452): rating, 150 reviews read, 17 photos downloaded, About tab (empty).
- cdpplumbing.ca: home, about, contact, plumbing-repairs, sewer-backup, drain-cleaning, clogged-drain, toronto-on; raw HTML for schema and generator; page list via WP REST API.
- No Instagram, Facebook, Yelp or HomeStars presence found (web search).

## Competitors studied (Toronto, Google Maps "plumber toronto")
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Drain King Plumbers | 4.7 (2,893) | drainkingplumbers.ca | Awards row, 1-hour arrival target, rebates page, strong neighbourhood pages | Arrival target in emergency band |
| Sewer Squad | 4.9 (2,110) | sewersquad.ca | Bold voice, one dated promo, Book Online, licence in footer, "real humans answer" | "A real person answers"; rating badge with count |
| Plumber To Your Door | 4.9 (462) | plumbertoyourdoor.ca | Dated reviews with technician names; response-time promise | Reviews with month, job and tech |
| Plumber GTA | 5.0 (331) | plumbergta.org | JS-rendered, not readable | — |
| Everest Drain & Plumbing | 4.8 (314) | everestplumbing.ca | "since 2013, upfront pricing, background-checked" subhead; hourly rate in FAQ; City subsidy explainer | Facts line under H1; pricing-policy FAQ |

Table stakes: header phone + 24/7 framing, grouped services, quote form, licensed & insured, Google aggregate, city pages, warranty claim. Nobody: one phone number everywhere, consistent claims, a clean fast site, a symptom-first picker.

## Design decisions
- Palette from the sign and truck: navy #0B2B5E, royal #1D4FD7 (sign blue), water #35B4E6 (drop), yellow #F5C842 (house mark, used only on the Call button and the house icon). Pale blue surfaces (#F2F7FC) for "bright and local".
- Type: Bricolage Grotesque 800 for headlines, Figtree for body. No serif, no cream, no dark theme.
- Signature: the "What's going on?" picker in the hero: six symptoms → likely cause, what CDP does, urgency tag (Emergency / Same day / Scheduled) and a Call button. Everything else stays quiet.
- Structure follows the plumbing playbook homepage blueprint, trimmed: header → hero → trust strip → services → emergency band → recent work → how a call goes → reviews → service area + map → about → FAQ → callback form → footer → mobile Call/Callback bar. Five service pages on one template with Service + FAQPage schema.
- Photos: 14 of CDP's own Google photos; caption bars cropped off. Excluded a Royal Plumbing van and a stock still-life that Google mixed in.

## What was built
- Header: logo mark redrawn as SVG, 5 nav items, "Request a callback" outline, yellow Call button (number hidden on phones).
- Hero: eyebrow TORONTO · DAVENPORT RD · 24 HOURS, "Fast, honest plumbing. Any hour.", facts line (5.0/248, licensed & insured, price before we start), Call + Callback, truck photo, picker card.
- Trust strip: Google 5.0 (248), open 24 hours / same rate nights and weekends, licensed & insured, price before work, warranty.
- What we fix: 5 photo cards → service pages + navy emergency card with the number.
- Emergency band: "Burst pipe at 2 a.m.? We pick up.", within-the-hour target, 4 "what counts as an emergency" items with first-aid advice.
- Recent work: 10 captioned real jobs with lightbox.
- How a call goes: 4 numbered steps.
- Reviews: 5.0 badge linking to Google, 6 quotes with first name, month, job and technician.
- Service area: 14 west-end/Toronto neighbourhood lines, GTA list, embedded Google map of the shop.
- About: tech-in-shirt, sign and rough-in photos; "A Davenport Rd shop, not a call centre"; five technician names.
- FAQ: 7 questions, FAQPage schema.
- Callback form: name, phone, neighbourhood, what's going on, emergency checkbox (tells them to call), Formspree placeholder.
- Footer: NAP, hours, services, areas, company, Google listing link, Site by Sony Saimon.
- Service pages ×5: hero with photo, what we handle, signs you need a plumber, 3 steps, FAQ, CTA band.

## Assumptions (owner to confirm)
- "Same rate nights and weekends" and "within the hour" for Toronto emergencies: inferred from the 24-hour listing and a review ("here within the same hour"); not stated on their site.
- "Warranty on labour and the parts we supply": their FAQ says warranties on labour and materials with no term. No duration shown.
- "Licensed & insured": their site claims it; no licence number is published anywhere.
- Neighbourhood list is drawn from the shop's location; the owner may want to add or remove areas.
- Service page copy is their own wording from the existing site, tightened. Water-heater page content is new (their site had only a card).
- Review dates were converted from Google's relative "x months ago" to months.

## Open questions for the owner
- Licence number and named licence holder for the footer.
- Founding year / years in business (their counters show "0 +").
- Warranty length. Emergency surcharge policy, if any.
- Whether to show any price (e.g. a drain-clearing special or a diagnostic fee policy).
- Do they want the 10 GTA city pages kept? None were rebuilt.
- Which phone is correct on the About page: (647) 584-9345 is unused on the new site.

## Needs from the owner
- A crew/owner photo and a clean front-on truck photo for the hero.
- Formspree (or other) form endpoint; who receives callback requests.
- Note: one Google review (steven shao, Feb 2026) complains of being pressured to leave a review, and many short reviews cluster in Dec 2025–Feb 2026 with repeated phrasing. Only detailed, specific reviews were used on the site. Worth raising gently with the owner.

## QA
Desktop 1440 and iPhone 15 (393) checked with Playwright · scrollWidth = innerWidth on both pages · no console errors · no broken images (empty lightbox img only) · all local assets exist · external links return 200 (canonical URLs 404 until deployed) · JS passes `node --check` · map embed verified in Chrome · reduced motion respected · keyboard: skip link, focus rings, lightbox Escape/close.
Fixed during QA: step counters on service pages all read "01"; hero eyebrow wrapped on phones; work grid had an empty slot (added two cards).

## Placeholder / generated images
None.
