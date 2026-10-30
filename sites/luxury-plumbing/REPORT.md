# Luxury Plumbing of Downtown Toronto — build report (2026-10-27)

Local preview: http://localhost:8082/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/luxury-plumbing/ (not run)

## Business facts
| | Value | Source |
|---|---|---|
| Name | Luxury Plumbing of Downtown Toronto ("Luxury Plumbing" on their site) | Google Maps / luxuryplumbing.shop |
| Category | Plumber, residential + commercial | Google, own site |
| Address | 230 Mavety St, Toronto, ON M6P 2M2 (The Junction) | Google |
| Phone | **(647) 560-2948** used on the site | Google. Own site shows 647-360-2546 (conflict, user chose Google) |
| Email | plumbingcontractservices@gmail.com | own site footer |
| Hours | Open 24 hours | Google |
| Booking | None. Old site's "Book Service" button dials the phone | own site |
| Ratings | Google 5.0 (103) | Google, 2026-10-27 |
| Team | "John" and "Jimmy" named in reviews | Google reviews |
| Pricing | "$150 Show Up Fee" (residential) | own site services page |

**Conflicts between sources:** two different phone numbers (above); service area "Downtown Toronto" (listing name) vs "across Ontario" (site) vs actual address in The Junction; company name with/without "of Downtown Toronto".

**Review timing:** all 103 Google reviews were posted in roughly the last month (Sept–Oct 2026); about 40 have text, mostly one-liners. The site shows the live 5.0 (103) as the user chose, linked to the Maps listing.

## Existing site audit (playbook Part 5)
luxuryplumbing.shop: Hostinger WordPress + Elementor, 3 pages. Hero 3, CTAs 3 (no phone in header, Book = tel link), Trust 2 ("Top rated by 100+ clients", no count, no licence), Services 3, Service area 1 ("across Ontario", no address), Navigation 4, Mobile 5, Visual 3 (stock plant/faucet hero, stock plumber as "logo"), Copy/pricing 4 ($150 show-up fee stated, no offer), Technical 4. **Total ≈ 32/100 → rebuild.** Critical: no licence info, no NAP, review claim without a number.

## Sources used
- Google Maps listing (cid 11626745281232050159): facts, hours, all 103 reviews, 10 owner photos (8 usable; a house exterior and a duplicate were dropped).
- luxuryplumbing.shop: home, services, about, and the Google-linked landing page (same content as home).
- Web search: no Instagram, Facebook, Yelp or HomeStars presence found.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Advanced Plumbing & Drains (Annette St, Junction) | 5.0 (585) | advancedplumbing.ca | Owner photo hero, "family-owned since 2005" chip, 4-stat strip, "Tell us what is happening" picker, century-house vs condo local copy, neighbourhood pages | Stats strip, symptom chips in the form, housing-stock line in Areas |
| Runnymede Plumbing (Annette St, Junction) | 5.0 (111) | runnymedeplumbing.ca | Direct peer; dark photo hero, checklist chips, rating + avatars, FAQ | Dark hero, FAQ; note their site has no tel: links |
| Priority Plumbing & Drains (Dupont) | 4.8 (1,939) | priorityplumbing.ca | "Since 2001", van hero, Book an appointment, text chat | Nothing specific (Cloudflare-gated on desktop) |
| New Canadian Drain & Plumbing | 4.7 (1,823) | newcanadiandrain.com | Licence number in hero, HomeStars badges, 2,438 reviews with count, red emergency band, FAQ | Emergency band, numeric review count; licence slot flagged for owner |
| True Service Plumbing | 5.0 (1,258) | trueserviceplumbing.ca | Quote form in hero, maintenance plans, city pages | Short request form with emergency checkbox |
| Royal Plumbing Services | 4.9 (771) | royalplumbingtoronto.com | Concrete offers: $97 sewer clearing, $50 off, no trip fee, BBB A+ | Concrete "$150 credited" price card instead of adjectives |
| Mr. Rooter Toronto (brand) | — | mrrooter.ca/toronto | "Schedule in under 2 minutes", payment plans, upfront flat-rate | Flat-quote-before-work promise |

Table stakes in this market: phone in header, 24/7 line, licensed & insured line, years, services grid, review count, request form, FAQ.
Opportunities nobody uses: real finished-work photos with captions (all use vans, mascots or stock), named technicians, a clear explanation of what the visit costs, an embedded map, neighbourhood-level copy for the Junction / Bloor West / Roncesvalles / Liberty Village.

## Design decisions
- **Palette** charcoal ink #15171A + brass #C9A14A + porcelain #F2EEE6, oxblood #8B2E2E for the emergency band only. Brass comes from the tub fixtures in their own photo; porcelain from the tub. Every competitor is blue/red, so this stands apart and earns the "Luxury" name.
- **Type** Bodoni Moda (display, italic for the hero's second line), Work Sans (body), IBM Plex Mono for eyebrows and ticket data: the work-order / invoice vernacular of the trade.
- **Signature: the job ticket.** The hero proof card is a finished shower photo with a perforated ticket stub (job type, scope, Toronto, a 5.0 stamp). The "Recent jobs" section repeats the ticket for six real photos. Portrait phone photos fit the ticket format without cropping.
- **Structure** Home + `/services/` × 6 (drain cleaning, toilet repair, shower & bath install, water heaters, garbage disposals, commercial) + `/emergency.html`, one template generated by `build.py`. Nav: Services · Emergency · Our work · Reviews · Areas · About + Request a visit + phone button. Sticky Call / Request bar on mobile.
- **Copy** from their own phrases ("clean work", "built on trust", "plumbing done right") tightened; problem-first service lines; no "welcome to", no keyword stuffing.
- **Schema** Plumber with address, geo, 24h hours, areaServed, AggregateRating; FAQPage on home, emergency and every service page; Service + Offer + BreadcrumbList on service pages.

## What was built
- Utility bar: open 24 hours, address, phone.
- Sticky header: wordmark, 6-item nav, Request a visit (outline), phone (filled). Hamburger under 860px.
- Hero: eyebrow "Plumber · The Junction, Toronto · 24 hours", "Clean work. Any hour.", facts line, Call + Request, 5.0 rating link, job-ticket proof card.
- Stats strip: 5.0 · 103 reviews · 24h · $150 credited.
- Services: three groups (Repairs, Installs, Commercial), photo cards with a problem line, each linking to its page.
- Emergency band (oxblood): what to do first, five "call right away" cases, link to the emergency page.
- Recent jobs: six job tickets with real photos and honest captions.
- How a visit works: four real steps + sticky price card ($150 visit credited, flat quote, same rate nights/weekends, pay when done).
- Reviews: 5.0 score block linked to Google, six quotes naming service/technician.
- Areas: Junction-based copy, 10 neighbourhoods, embedded Google map (verified rendering in Chrome).
- About: technician photo, four fact chips.
- FAQ: six questions with FAQPage schema.
- Request a visit: big phone, email, address; form with symptom chips that prefill the message, name/phone/address/details, emergency checkbox, CASL-style consent, Formspree placeholder, honeypot.
- Footer: NAP, hours, services, areas, company links, Google profile, credit.
- Service pages (×6): breadcrumb, eyebrow, H1, lead, Call + Request, rating, ticket with photo, "what's included" list, 1–2 FAQs, price card, related reviews, other-services chips, CTA band.
- Emergency page: red Call button, "what counts" list, three-step damage-limiting guide, FAQ, same-rate card.

## Assumptions
- "$150 visit, credited toward the repair" and "same rate nights, weekends and holidays" are proposed wording built on their "$150 show up fee". Not confirmed.
- "Licensed & insured in Ontario" is assumed (required to operate); no licence number was found anywhere.
- Service area list is my choice around The Junction; the business may not want Etobicoke or St. Clair West.
- John and Jimmy are named in reviews; assumed to be current staff.
- Photo captions describe what is visible; job locations are not known, so every ticket says "Toronto".
- The Google phone number is the right one.
- Ticket titles on service pages (e.g. "Toilet reset on a new flange") describe plausible jobs matching the photo; the toilet page reuses the tub photo because there is no toilet photo.

## Open questions for the owner
- Which phone number is live, 560-2948 or 360-2546?
- Confirm the $150 visit policy and whether it is credited toward the repair.
- Licence number and named licence holder; insurance line.
- Years in business / founding year (reviews suggest a new listing; nothing is claimed on the site).
- Real service area and whether commercial work is a focus.
- Who answers the form (email address to connect to Formspree).

## Needs from the owner
- A crew-and-truck photo on a clear day (would replace the shower ticket in the hero if preferred).
- A toilet job photo, a landscape shot of the shop/van, a logo if one exists.
- Confirm or edit every assumption above.

## QA
Desktop 1440 and iPhone 15 (and a 390px viewport) checked on home, two service pages and the emergency page · scrollWidth = innerWidth on all · no console errors · no broken images · one H1 per page · all local assets resolve · external links: Google Maps listing (cid verified), Google map embed (renders in Chrome), fonts.googleapis.com, web.soichirosaimon.com · reduced motion disables the ticket animation, reveals and pulse · skip link, focus styles, aria labels on nav toggle and sticky bar · form validates and explains that the endpoint is not connected yet.

Known limits: Playwright's full-page capture under iPhone emulation repeated the top of the page in the composite; viewport shots confirmed the real layout.

## Placeholder / generated images
None. All eight photos are from the business's Google profile.
