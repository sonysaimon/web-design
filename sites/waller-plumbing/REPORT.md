# Waller Plumbing — build report (2026-10-30)

Local preview: http://localhost:8097/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/waller-plumbing/
Purpose: **demo to pitch to the owner (Adam)**. Not deployed.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Waller Plumbing Ltd. ("Waller Plumbing \| Plumbing – Heating – Gas") | wallerplumbing.ca footer, Google |
| Category | Plumber + gas contractor, residential, rental and light commercial | site, reviews |
| Address | 17649 96 Avenue, Surrey, BC V4N 4A9 (Port Kells) | contact page, Google |
| Phone | 778 898 6189 ("Adam – 778 898 6189") | contact page, logo, Google |
| Email | adam@wallerplumbing.ca | contact page |
| Hours | 24/7, every day; emergency 24/7 | contact page, footer, Google "Open 24 hours" |
| Booking | None. Phone only; email listed | — |
| Ratings | Google 5.0 (16) · site widget shows 6 reviews from March 2019 (stale) | Google Maps |
| Licence | Technical Safety BC LGA0208910 (gas contractor) | site footer |
| Guarantee | 12 months workmanship from date of work; "same issue within a few days, we come back free" | footer + emergency page |
| Owner / team | Adam (every review names him); "Brandon" appears in one 2023 review | Google reviews |
| Experience | A 2022 review says "10 years experience" → "over a decade" used | Google review (Ray D.) |
| Payment | Interac e-Transfer, Visa, Mastercard, Amex | site footer image |

**Conflicts between sources:** none on phone/address/hours. The site's review widget (6 reviews, 2019) disagrees with Google (16, 5.0); the new site uses Google. No years-in-business claim exists anywhere; "over a decade" is inferred from the review and flagged below.

## Sources used
- wallerplumbing.ca: home, About, Contact (403 to curl, read in Chrome), 9 service pages, 14 hidden city pages, sitemap. All 44 uploaded images downloaded.
- Google Maps listing (cid 12090313008131342369): rating, 16 reviews in full, 10 photos (4 belong to other businesses and were excluded: UBC, John the Plumber van, stock globe).
- Yelp / BBB / HomeStars / Facebook: no indexed listing found for "Waller Plumbing Surrey" (web search); Facebook search is not reachable without login.
- FortisBC rebate pages (web search): income-qualified gas water heater rebates exist and require a Technical Safety BC licensed installer; amounts vary by source, so the site says "ask us what's current" rather than quoting a figure.
- Playbook: `~/plumbing-sites/plumbing-website-playbook.md` (audit rubric, homepage blueprint, service-page template, Canada notes).

## Audit of the current site (playbook Part 5): 38/100 → rebuild
| Category | Score | Why |
|---|---|---|
| Hero | 3 | Slider Revolution with a stock bathroom photo and an empty dark overlay box; headline and buttons below the fold |
| CTAs & booking | 2 | **Zero `tel:` links on the whole site.** The phone exists only inside the logo image and in city-page text; no form on the home page |
| Trust | 5 | Live Google widget but stuck at 6 reviews from 2019 while Google has 16; licence number and 12-month guarantee in footer; no years, no badges |
| Services structure | 4 | 9 pages in one flat dropdown; "Recent Work" page is empty; 4 orphan pages; no FAQ |
| Service area / SEO | 5 | 14 city pages of generic third-person 2024 copy, no map, no schema, no meta descriptions |
| Navigation | 5 | Empty Recent Work page, duplicated "MENUMENU" markup, footer lists different services than the menu |
| Mobile | 4 | Responsive, but no sticky call bar and no tap-to-call |
| Visual design | 3 | 2018 "techreshape" template, stock imagery, icon diamonds, nothing beyond the logo blue |
| Copy & pricing | 4 | About page has a real voice; home has "Customer Satisfication"; no special, financing or pricing policy |
| Technical | 3 | WordPress with Slider Revolution 5.4.8.1 (2018), no JSON-LD, no meta description, contact page returns 403 to crawlers |
Critical failure: the primary call path is an image, not a link. Three lowest: CTAs, Hero, Visual/Technical.

## Competitors studied (Google Maps "plumber Surrey BC")
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Milani | 4.8 (1,686) | milani.ca/locations/surrey-bc | 3-platform rating row, since 1956, Offers/Rebates/Membership nav, floating Book tab | Rating with count up top; rebate mention |
| Hilltop | 4.7 (932) | hilltopplumbing.com | Utility bar with 24/7 line + phone + quote, 4 trust bullets, BBB/FortisBC/Google badges, grouped services with sub-pages | Utility bar, trust bullets, grouped services |
| Call Moe | 4.8 (661) | callmoe.ca | Licence numbers in the utility bar, problem-led service tiles, Coupons + Membership + Financing | Licence number in utility bar and footer; problem-led cards |
| Well Done | 4.9 (264) | welldoneplumbing.ca | Phone + quote in header, fixed Google widget, gallery | Phone in header; real-job gallery |
| Nagra Bros | 4.9 (217) | nagrabros.ca | Offer marquee, 4 trust chips under hero, emergency block, FAQPage + LocalBusiness + AggregateRating schema | Trust strip, emergency block, schema |
| Crescent Park | 5.0 (112) | crescentparkplumbing.com | Honest funny voice, "We work where we live", request form on home | Plain-spoken voice; form on home |
| John Sadler | 5.0 (262) | johnsadler.ca | Site returns 403 to automation | — |

Table stakes in this market: phone button in header, 24/7 line, licence number visible, trust chips under the hero, services grouped plumbing / heating / gas / drainage, Google rating with count, request form on the home page, service-area list, Canadian badges.
Opportunities nobody uses: the owner-led story (every Waller review names Adam; no big competitor can say that), real job photos as captioned proof cards, a sticky mobile Call + Text bar (none of the six has one), a static build under 50 KB of HTML versus 85–343 KB plus 17–49 scripts, sentence-case type instead of all-caps keyword H1s.

## Design decisions
- **Palette** from Waller's own material: ink navy `#0B1B33`, the logo's ultramarine `#1E3FD1` for buttons and links, cool paper `#F4F6FA`, and **copper `#B9612A`** taken from the copper pipe in their tankless photo for the emergency band and eyebrows. Red/yellow (the Surrey default) deliberately avoided.
- **Type**: Bricolage Grotesque 600–800 for headings in sentence case, IBM Plex Sans body, IBM Plex Mono for the licence number, hours and live status. Three weights of each, loaded from Google Fonts.
- **Signature**: the "How old is your tank?" checker in the hero. Pick the year off the rating plate, get a verdict built from Waller's own 8–12-year guidance, then Call or "Text us the label". Hot water tanks are the most-mentioned job in their reviews, so the interactive element is their core service, not a gimmick.
- **Live status line** in the utility bar uses the visitor's clock ("It's 1:35 pm Friday — the line is open") to make the 24/7 claim feel real.
- **Structure** (playbook Part 3/4, trimmed to the user's choice of home + service pages): utility bar → sticky header with Text + Call → hero with real tankless photo and the checker → trust strip (rating, 24/7, licence, guarantee, upfront) → services grouped by problem (water, emergencies, drains, gas/septic) → copper emergency band with "while we're on the way" steps → 8 captioned real job photos → 5.0/16 rating + 6 named quotes → 4-step what to expect → About Adam with photo → service areas with map → FAQ (FAQPage schema) → contact with short form and emergency checkbox → footer with NAP, licence, services, areas → sticky mobile Call + Text bar.
- **Service pages** follow the playbook template: eyebrow, benefit H1, city subhead, Call + Text, facts row, photo, three paragraphs, "what's included", mid CTA, credentials row, three relevant reviews, FAQ with schema, related services, closing CTA. Service + FAQPage + BreadcrumbList JSON-LD on each.
- **No city pages**, per the user. A single service-areas page has one real paragraph per region instead of 14 swapped-name shells.

## What was built
- `index.html` — home, as above (41 KB, 2 scripts).
- `services/` — hot-water-tanks, emergency-plumber, leaks-and-repairs, sewer-line-repair, wet-basement-and-drain-tile, sump-pumps, water-main-replacement, furnace-and-gas, septic-tank-service.
- `service-areas.html` — four region cards + map.
- `services.js` + `build.py` — all content in one data file; one command regenerates everything.
- Plumber JSON-LD with address, geo, 24/7 hours, areaServed (17 cities), AggregateRating 5.0/16, OfferCatalog of the 9 services, licence identifier; FAQPage on home and every service page.

## Assumptions
- "Over a decade in the trade" / "10+ years": inferred from a 2022 review saying Adam had 10 years' experience. Confirm the real founding year.
- "A plumber answers, not a call centre" / "answers his own phone": supported by the contact page ("Adam – 778 898 6189") and reviews, but it is a claim Adam should approve.
- "No fee just to come and look" / "price before work starts": from the About page ("upfront and fair pricing that you understand before any work begins") and Lindsey W.'s review about not being charged $400 to show up. Confirm the actual service-call policy before launch.
- "Brandon" is treated as a second tech on the strength of one review; the site only mentions him inside that quote.
- Review years are approximate (Google shows "a year ago" etc.) and are labelled by year only.
- Septic and furnace copy is adapted from their own pages; the furnace page says Waller repairs furnaces and handles the gas side of replacements rather than full HVAC installs. Confirm.
- FortisBC rebate wording is deliberately vague ("ask us what's current").
- Text/SMS CTAs assume 778 898 6189 is a mobile that receives texts.

## Open questions for the owner
1. Founding year and whether to state it.
2. Service-call / after-hours pricing policy, in one sentence, to put in the FAQ.
3. Is tankless installation (and FortisBC rebate paperwork) something to lead with?
4. Does he still offer septic service and furnace repair? Keep or drop those pages.
5. Does he want the form at all, or phone/text only?
6. Any association memberships (BBB, HomeStars) or brands (Navien, Bradford White, Rheem) to badge?

## Needs from the owner
- Real photos of: Adam with the truck or van, the truck itself, a recent tank or tankless install at full resolution, a drain-tile or water-main job in progress. The 2019 Facebook photos are 280–370 px and soft at card size.
- Replace `photos/stock-sump.jpg` and `photos/stock-storm-line.jpg` (old-site stock images) with real job photos.
- Formspree form ID for adam@wallerplumbing.ca (currently `REPLACE_ME`).
- Confirm licence number LGA0208910 is current on the Technical Safety BC register.

## QA
Desktop 1440 and 390-wide phone checked on home, hot-water-tanks, emergency-plumber and service-areas · no horizontal overflow (scrollWidth = innerWidth on all) · no console errors · no broken images · every local asset exists · external links are Google Fonts, the Google Maps listing and the maps embed · drawer, tank checker, FAQ accordion and reveal animations tested in Playwright · reduced motion respected · skip link, focus styles, labelled buttons · home HTML 41 KB, CSS 26 KB, JS 5 KB, 2 scripts.
Screenshots in the session scratchpad under `waller/shots/`.

## Placeholder / generated images
None generated. Two stock images inherited from the old site are used as card thumbnails and flagged for replacement: `stock-sump.jpg`, `stock-storm-line.jpg`.
