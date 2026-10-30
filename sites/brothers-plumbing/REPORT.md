# Brothers Plumbing — build report (2026-10-27)

Local preview: http://localhost:8093/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/brothers-plumbing/
Purpose (user decision): demo to pitch the owner. Multi-page lean. Real photos + placeholders. Navy + copper heritage look.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Brothers Plumbing | Google, site |
| Category | Plumber (residential + commercial, drains, heating repair) | site |
| Address | 130 Osler St, Toronto, ON M6N 2Y8 (The Junction / Davenport) | Google, site |
| Phone | 647-247-2230 "call or text" (used) · (416) 656-6717 on Google · 416-656-8160 on old contact page | conflict |
| Email | info@brothersplumbing.ca | site schema |
| Hours | Site: Mon–Sun 7 am–7 pm, "someone answers at 3 am Sunday" · Google: Open 24 hours | conflict; site shows 7–7 + 24/7 line |
| Founded | 1969 (homepage, logo "50" badge, a reviewer says 1970) · 1977 (old About page) | conflict; 1969 used |
| Booking | Old site: form on /online-booking/ and "Schedule Now" modal; Google has a Book online button to the site | site |
| Ratings | Google 4.4 (299) · HomeStars badge (count not checked) | Google 2026-10-27 |
| Team | Techs named in reviews: Tony, Jimmy, Aman, Jacob, Johnathan, Patrick; office "Cindy" in old letters | reviews |
| Offers | $50 off any service; $100 off sewage drain replacement; CVPP plan (one-time fee, priority, price protection) | site |
| Socials | facebook.com/p/Brothers-Plumbing-100071004742472, x.com/BroPlumbing | site schema |

**Conflicts between sources:** phone (3 numbers), hours (7–7 vs 24 h), founding year (1969 vs 1977 vs "40 years"), licence number (none published anywhere).

**Affiliation:** the owner's reply to a Google review on 2026-10-20 thanks the customer for choosing "Priority Plumbing and Drains". Priority Plumbing & Drains is at 1594 Dupont St (500 m away), 4.8 (1,939 reviews), phone 647-247-2275 vs Brothers' 647-247-2230, and uses the same reply wording. Brothers is very likely a sister brand run from the same office. The pitch may need to go to Priority's owner.

## Audit of the existing site (playbook Part 5)
brothersplumbing.ca: WordPress + Elementor + NitroPack, built by TechWyse (images dated March 2024), blog active to June 2026.

| Category | Score | Why |
|---|---|---|
| Hero | 5 | Stock model under a sink; one button; no rating badge |
| CTAs & booking | 5 | Phone is plain text on desktop (0 tel links); Book Online → form page; side "Schedule Now" tab |
| Trust | 3 | No numeric rating anywhere; testimonials are letters from 2012–13; no licence number; no named guarantee |
| Services structure | 6 | 21 service pages with thin copy; menu/hub/footer mostly consistent |
| Service area / SEO | 5 | 34 neighbourhood pages that are local history, not plumbing; areaServed schema OK |
| Navigation | 4 | Two-row nav, 11 items + mega menus; footer has NAP but no licence |
| Mobile | 6 | Sticky header, call icon, no overflow; 47 scripts; no bottom bar |
| Visual design | 4 | Template blue/red, Montserrat, stock photos |
| Copy & pricing | 4 | "Welcome to…" H1, keyword-heavy; $50 off with no expiry; hours contradict 24/7 claim |
| Technical | 6 | Good schema (Plumber, AggregateRating, FAQPage); 314 KB HTML, 47 scripts |
| **Total** | **48/100** | Critical failures (cap 50): phone differs site vs Google; hours contradict 24/7 claim |

## Sources used
- Google Maps listing (reviews, topics, photos, hours, phone) via Chrome, 2026-10-27
- brothersplumbing.ca: home, about, testimonials, contact, online-booking, plumbing hub, drain-and-sewer hub, service-areas, heating, emergency, Junction page, CVPP page
- Instagram: none found. Facebook/X linked from site schema, not fetched.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Priority Plumbing & Drains (likely sister co.) | 4.8 (1,939) | priorityplumbing.ca | 4 service tiles, $50 coupon, "beat any written quote", lifetime install warranty, named-tech review wall | Coupon card, named-tech reviews |
| Sewer Squad | 4.9 (2,110) | sewersquad.ca | Plain-spoken 3-line promise hero, $219 sewer clearing offer, licence # in footer, payment plans band | Promise headline, plain copy, licence line |
| Plumber To Your Door | 4.9 (462) | plumbertoyourdoor.ca | Real van/tech photos, 3 badge logos in hero, 3 coloured entry cards, 12-month warranty | Real photos only, badge facts in hero |
| Drain King Plumbers | 4.9 (2,891) | drainkingplumbers.ca | Hero request form with service checkboxes, badge column, FAQ | Short form with emergency checkbox |
| Mr. Rooter Toronto | franchise | mrrooter.ca/toronto | Locally specific copy (clay laterals, pre-1970 homes), CASL consent, $30 off with expiry | Local housing-stock copy, CASL line |

Table stakes in this market: phone button + Book button in header, $30–$50 coupon, same-day + 7 days, licensed & insured, Google rating badge, photo service cards, service-area list, FAQ.
Opportunities nobody uses: a symptom picker that routes to the right page; proof shown as named work orders; techs listed by name; map on the home page; a bottom mobile call/book bar; City of Toronto subsidy pages (backwater valve, sump, lead service).

## Design decisions
- **Palette** navy #0F2440 (logo) / copper #B8622B (pipe) / porcelain #F2F4F6 (fixture white, deliberately not cream). Every Toronto competitor is blue + red or blue + yellow.
- **Type** Barlow Condensed 600/700 for headings (van-lettering feel, sentence case), IBM Plex Sans body, IBM Plex Mono for eyebrows, labels and the work-order slips (ledger feel).
- **Signature** the "work order": a service slip built from a real review (job, crew, price line, quote) overlapping the hero photo, with an EST 1969 stamp on the photo corner. The same slip format carries every review on the site.
- **Hero interaction** "What's going on?" symptom chips route to the matching service page and prefill the booking form.
- **Structure** home · Plumbing hub · Drains & sewer hub · Emergency · About & reviews · Service areas · Book, plus 19 service pages generated from `services.js` with the playbook's service-page template (eyebrow, H1, two CTAs, problem/how/expect, what's included, credentials row, 2 reviews, FAQ with FAQPage schema, related, closing CTA).
- **Primary action** Call (filled copper) everywhere; Book online as the outline secondary. Sticky mobile Call + Book bar.
- **Hours line** "Open 7 days, 7 am–7 pm · emergency line 24/7" reconciles the site's 7–7 hours with its 3 a.m. claim and Google's 24 h.

## What was built
- Home: top bar, header with phone + Book, hero (headline, facts, two CTAs, symptom chips, real photo, work-order slip, stamp), trust strip, services in three groups (9 cards + heating/commercial/emergency), emergency band, four proof points quoting reviews, 4-step process, reviews (4.4 / 299 + 6 slips), offers ($50, $100, CVPP), map + grouped areas, about teaser with crew names and photo placeholder, FAQ (6, with the questions the playbook lists), final CTA with short form (emergency checkbox, CASL consent), footer with NAP, licence line, service columns.
- Plumbing hub: 12 service cards, west-end housing-stock explainer, subsidy links, reviews.
- Drains & sewer hub: 6 cards, "clear it or fix it" explainer, $100 offer, reviews.
- Emergency: copper hero, what counts, while-you-wait instructions, what happens next, is-it-an-emergency, truck inventory, 4 emergency service cards.
- About & reviews: story, crew names, hours, awards (with owner-to-confirm note), 8 review slips, leave-a-review link, 5 real job photos as captioned project cards.
- Service areas: map, 4 area cards with local notes, City of Toronto subsidy and lead-service programs.
- Book: full form (service select prefilled from chips), contact lines, what happens next, map.
- 19 service pages from one template.
- Schema: Plumber with address, geo, hours, emergency ContactPoint, 33 City areaServed, AggregateRating; FAQPage + Service + BreadcrumbList on service pages.

## Assumptions
- 647-247-2230 is the number (owner-written site, "call or text"); the two 416 numbers are flagged.
- Founded 1969; "Greek founder, two sons" story condensed from the old About page ("founding father originated in Greece"; the "Brothers" name implies sons, not verified).
- Coupons have no expiry and are shown with "confirm with the office".
- "Licensed & insured · WSIB covered" is stated on the old site; the licence number is a placeholder.
- The Consumer Choice Award is from an image on the old site, year unknown; mentioned in text only.
- Review quotes are shortened but not reworded; first names + initial only.
- Service copy is written from the old site's service pages plus review themes; "what's included" lists are reasonable defaults for the owner to correct.

## Open questions for the owner
- Which phone number, and does it take texts? Do calls after 7 pm go to a person or a service?
- Licence number and named licence holder; BBB; HomeStars rating and count.
- Coupon terms and expiry; CVPP fee; any workmanship warranty length to state.
- Is Brothers operated with Priority Plumbing & Drains? Should the site say so?
- Which neighbourhoods actually get same-day response?

## Needs from the owner
- Real photos of: the crew and trucks outside 130 Osler, a technician at a customer's door, the shop/office, before/after job shots (sewer dig, water heater, backwater valve).
- Confirm: hours, founding year, phone, licence, offers.
- Formspree ID (or their preferred booking tool) for the form.

## QA
Desktop 1440 and iPhone 15 (393) checked on home, plumbing, drains, emergency, about, areas, book and two service pages · scrollWidth equals innerWidth on every mobile page · no console errors · no broken images · every local asset exists · external links listed and real · `node --check main.js` passes · no unresolved template tags · reduced motion respected · visible focus styles · skip link.
Not checked: Formspree submission (placeholder ID), Google Maps embed renders only in a real browser (blank in headless capture).

## Placeholder / generated images
No AI-generated images (Higgsfield account had 0 credits on the free plan). Dashed, labelled placeholder boxes: home About section (crew photo), About page hero (crew/founder photo), and nine service pages without a photo (listed in README).
