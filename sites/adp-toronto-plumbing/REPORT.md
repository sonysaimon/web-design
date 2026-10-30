# ADP Toronto Plumbing — build report (2026-10-27)

Local preview: http://localhost:8094/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/adp-toronto-plumbing/

Purpose (user's answer): **demo to pitch the owner**. Not deployed.

## Business facts
| | Value | Source |
|---|---|---|
| Name | ADP Toronto Plumbing; trades as / partner of Absolute Draining & Plumbing (absolutedp.com, 416-252-5557) | Old site footer, email domain, reviews |
| Category | Plumber; drain, sewer, water service and waterproofing contractor, residential + commercial | Google, old site |
| Address | 51 Homewood Ave #1, Toronto, ON M4Y 2K1 (Google photo shows the sign on a brick house) | Google, old site, schema |
| Phone | 416-822-2221 | Google, old site |
| Email | info@absolutedp.com | Old site |
| Hours | Open 24 hours | Google, old site schema |
| Founded | 1998 | Old site About + schema |
| Team | 12 plumbers, 5 trucks (About page); Andrew leads (named in ~25 reviews; also "Andrew M, the manager, and Andrew L"), Alexander, Josh, Vasyl, Victor | Old site, reviews |
| Ratings | Google 4.4 (63) · HomeStars 5.0 (1) | Google Maps, HomeStars |
| Offers | Flat-rate pricing; 25-year warranty on completed drain work; 10% seniors discount; beat any written quote from a licensed local contractor by 10%; rebate assistance; free estimate | Old site |
| Booking | None (phone + form) | |

**Conflicts between sources:** years in business stated as "since 1998", "over 20 years", "more than a decade", "over 15 years" on the same site (used 1998 everywhere). Rebate page says "In 2012" and $3,200; the City's program is now up to $6,650 (May 1, 2026, verified on toronto.ca). Two trading names; one 9-year-old review complains "they own 2 sites causing confusion" (handled with a one-line note in About and the footer).

## Sources used
- Google Maps listing (via `?cid=12939387111798307033`): panel, all 63 reviews, 4 place photos.
- onetorontoplumbing.com: home, About, Rebate Assistance, Contact, service pages (WordPress 7.1.3, Rank Math, 254 KB HTML, 25 scripts).
- absolutedp.com (parent brand): offers, confirms 20+ years / 25-year warranty / lowest-price guarantee.
- HomeStars profile 2806531 (1 review, 5/5).
- toronto.ca Basement Flooding Protection Subsidy page (amounts as of 2026-05-01).
- Playbook: ~/plumbing-sites/plumbing-website-playbook.md (audit rubric, homepage blueprint, service-page template).

## Audit of the existing site (playbook Part 5)
Hero 4 · CTAs 6 · Trust 4 · Services 6 · Service area 5 · Navigation 4 · Mobile 5 · Visual 3 · Copy & pricing 6 · Technical 5 = **48/100**, capped at 50 (no licence number anywhere). Verdict: restructure and re-skin. Top problems: stock hero + "Welcome to" + one button; no rating/count on the site; four different years claims; 40-item two-row mega menu; no sticky mobile call bar; stale 2012 rebate page; stale blog (Jan 2024); name confusion; "Name we help?" leftover form label.

## Competitors studied (Google Maps "plumber toronto")
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Drain King Plumbers | 4.7 (2,893) | drainkingplumbers.ca | Badge stack (Google count, HomeStars, BBB) beside hero; coupon in hero; FAQ schema | Badge/fact chips beside the hero; FAQ schema |
| Priority Plumbing & Drains | 4.8 (1,939) | priorityplumbing.ca | Own-van video hero, one red Book button, 7-item nav, "since 2001" | Short nav, one primary action |
| New Canadian Drain & Plumbing | 4.7 (1,823) | newcanadiandrain.com | Licence number in the hero; "2,438 reviews"; red emergency band; 10% seniors | Emergency band; licence slot; seniors discount card |
| True Service Plumbing | 5.0 (1,258) | trueserviceplumbing.ca | Quote form in the hero split; Maintenance Plans nav | Form kept short and at the bottom instead |
| Royal Plumbing | 4.9 (771) | royalplumbingtoronto.com | $97 sewer special, "no trip fees", Flooding Protection Rebates nav item, Guarantee page | Rebates as a top-level nav item; concrete offers block |
| Plumber To Your Door | 4.9 (462) | plumbertoyourdoor.ca | Facts line under H1 (15+ yrs, same day, 7 days), three coloured cards under hero, 12-month warranty | Facts chips; 25-year warranty surfaced |

Table stakes in this market: phone button + Book/Estimate in the header; 24/7 emergency band; rating with count and platform badges; licence line; seniors discount; backwater valve/sump/waterproofing grouped as flood protection; rebate page; free estimate; short form; area pages.
Opportunities nobody uses: the current 2026 subsidy numbers with a calculator; "we file the City paperwork" as a headline promise; named reviewers with the service done; a light static build (this site: 43 KB home page, 2 font weights each, no frameworks); a true sticky mobile Call + Estimate bar; honest hours vs 24/7.

## Design decisions
- **Palette** navy #0B2545 / safety yellow #FFC600 / logo blue #1F4FA3 / paper #F4F5F7. Navy from the logo, yellow from the phone number on their Google cover. Deliberately not the light-blue-and-white that every Toronto competitor uses.
- **Type** Big Shoulders Display 800 (condensed working-city signage, sentence case) + Archivo 400/600. Two weights each from Google Fonts.
- **Signature** the Toronto rebate calculator in the hero: tick valve (×1 or ×2), sump, battery, weeping-tile capping, assessment; sums to the City cap of $6,650; a cross-section diagram highlights what's ticked. It is the one thing ADP already does (file the application) that no competitor shows.
- **Second motif** navy/yellow hazard stripe (trench safety tape) used exactly twice: under the hero and the emergency band.
- **Hero** headline "Drains fixed. Basement dry. Paperwork filed." (6 words), eyebrow with city + since 1998, four fact chips, Call (filled) + Request a free estimate (outline). No hero photo: ADP has no usable crew/truck photo and Higgsfield had no credits; the calculator carries the first screen.
- **Structure** home + 6 service pages (playbook 3.4 template: eyebrow, H1, two CTAs, problem/how/included, mid CTA band, credentials, two reviews, FAQ with schema, related, sidebar) + service-area hub with one genuinely local paragraph per region. Generated by `build.py` so menu, home grid and footer list identical services.
- **Services grouped by problem** ("What's going wrong?"), six cards; the other 7 services listed as chips.
- **Numbers only on How-it-works**, which is a real sequence.
- **Schema** Plumber with address, geo, 24/7 hours, AggregateRating 4.4/63, areaServed cities, OfferCatalog; FAQPage on home and each service page; Service + BreadcrumbList on service pages.

## What was built
- Utility bar: open 24 hours + emergency line; sticky header with Services dropdown, Rebates, Service areas, Reviews, About, yellow Call button, outline Free estimate.
- Hero with the rebate calculator card.
- Trust strip: 4.4★ (63), 25-year warranty, flat rate, 24 hours, since 1998.
- Services grid (6 cards: 2 real photos, 4 technical SVG diagrams) + "Also" chips.
- Emergency band with the number at 84 px.
- Offers: $6,650 rebate, 25-year warranty, 10% seniors, beat quote by 10%, flat-rate bar.
- How it works, five numbered steps.
- Recent work: three real job photos with captions + one quoted customer project.
- Reviews: 4.4 score, six named quotes with the service done, links to read/write on Google.
- Service area: Google map embed + four regional lists, link to the area page.
- About with the office photo, the two-name note, 1998 / 12 / 5.
- FAQ (6) with schema.
- Free-estimate form (name, phone, email, address, message, emergency checkbox, consent) on Formspree placeholder; shows a demo message until connected.
- Footer: NAP, hours, licence placeholder, services, areas, company links, credit.
- Mobile: hamburger menu with the same dropdown; fixed Call + Free estimate bar with safe-area padding.
- Six service pages and the service-area page as above.

## Assumptions
- "Open 24 hours" taken from Google and the old site; the site says the phone is answered around the clock and avoids promising arrival times.
- No "same rate nights and weekends" claim is made (not stated by ADP); the site says "flat-rate quote before any work starts, day or night".
- The 25-year warranty is applied to "completed drain work" exactly as their site words it.
- Vaughan's subsidy is mentioned only as "has run its own; ask for current terms" (not verified today).
- Reviewer names shortened to first name + initial; quotes lightly trimmed, wording kept.
- Address and office photo: the Google place photo of a brick house with the ADP sign is assumed to be 51 Homewood Ave.
- The quoted-project card ("Lead water service replacement") uses Bryan C.'s review in place of a photo.

## Open questions for the owner
- City of Toronto plumbing contractor licence number and the named licence holder (footer slot is a placeholder).
- Is ADP still "12 plumbers, 5 trucks" (About page text may be old)?
- Is the 10%-beat-any-quote offer still current? Any expiry/terms?
- Which name do they want on the door: ADP Toronto Plumbing or Absolute Draining & Plumbing?
- Preferred lead destination for the form (email) and whether they want texting.
- HomeStars / BBB membership to show as badges.

## Needs from the owner
- Real photos (1800 px): crew and trucks in front of a Toronto house (hero), a lead-to-copper service in a trench, a camera inspection in progress, a waterproofing excavation, a night call, a drain-cleaning job; higher-res versions of the backwater valve, sump pump and excavation photos; vector logo.
- Confirm: licence number, email for the form, current subsidy handling, seniors discount wording.

## QA
Desktop 1440 and iPhone-width 393 checked on all 8 pages · scrollWidth = innerWidth on every page · no console errors · no broken images · every local asset exists · external links verified (Google Maps CID, g.page review link, HomeStars, Facebook, toronto.ca, Google Fonts) · calculator: all items ×2 valves = $6,650 (cap), battery auto-unchecks and disables without a sump · mobile menu and desktop dropdown open/close · form shows the demo message · reduced motion disables reveal and transitions · `node --check main.js` clean. Home page 43 KB HTML, 2 font families × 2 weights.

## Placeholder / generated images
None generated: Higgsfield account is on the free plan with 0 credits on 2026-10-27, so the AI placeholders the user chose could not be made. Four service tiles and three sidebar tiles use hand-drawn SVG diagrams instead (`build.py` → `PICT`). Low-res real photos still in use: `job-backwater-valve.jpg` (670 px), `job-sump-pump.jpg` (670 px), `job-drain-excavation.jpg` (250 px), `logo.png` (278 px). When credits are added, generate the six images listed under "Needs from the owner" as flagged placeholders.
