# Plumber To Your Door — build report (2026-10-27)

Demo redesign of plumbertoyourdoor.ca, built to pitch the owner. Not deployed. Preview: `python3 -m http.server 8085` in this folder → http://localhost:8085/. Publish with `./deploy.sh` → https://web.soichirosaimon.com/plumber-to-your-door/

## Sources used
- Google Maps listing "Plumber To Your Door of Toronto" (4.9, 462 reviews; 90 reviews read; hours Open · Closes 12 a.m.).
- plumbertoyourdoor.ca: home, about, services, FAQ, reviews, projects, locations, contact, book-an-appointment, 9 service pages, 2 city pages. 127 images downloaded; ~45 real job/van/crew photos kept.
- Instagram @plumbertoyourdoor_canada (bio "Call the best, flush the rest", 1,070 followers).
- HomeStars and Yelp profiles blocked automated fetch (403). HomeStars Best of the Best 2025 badge taken from their site.
- Competitors: Drain King, Priority Plumbing, Anta, DrainEx, Plumber GTA, Everest, John The Plumber (Toronto), Mr. Rooter Toronto. Notes in the session scratchpad `competitors/competitors.md`.
- Audit of the current site: 69/100 on the plumbing playbook rubric (`~/plumbing-sites/audits/plumbertoyourdoor-ca-2026-10-27.md`).

## Facts used on the site
| Fact | Value | Source |
|---|---|---|
| Phone | 647-894-7354 (toll-free 1-866-306-2080 on vans and footer) | Google, site, vans |
| Address | 509 Bloor St W, Toronto ON M5S 1Y2 | Google, site schema |
| Email | info@plumbertoyourdoor.ca | site |
| Licence | 1000022109 | site footer |
| Founded | 2021 by George | About page |
| Experience | 15+ years in the trade | site hero (attributed to George) |
| Hours | Office 7 am–midnight daily; emergency 24/7 | Google + schema (hours) and site (24/7) |
| Pricing | By the job, fixed price upfront; $95 assessment waived if you go ahead | FAQ Q1, hero line, a Google review quoting "$95 for assessment" |
| Warranty | 12 months parts & workmanship; 5 years on main water line; drain cleaning excluded | site |
| Response | 60–90 minutes for emergencies | FAQ Q7 |
| Payment | Visa, Mastercard, e-transfer, cash; cheque for installs/renos | FAQ Q8 |
| Crew | George, Emil, Chris, David, Matteo, Andy | Google reviews |
| Toronto subsidy | Up to $6,650 (Basement Flooding Protection Subsidy) | toronto.ca per another build on 2026-10-27; **verify before pitching** |

## Conflicts found (and what the site does)
- **Years**: About says founded 2021; hero says 15+ years; blog says "two decades as a master plumber". Site: "family-owned since 2021, 15+ years in the trade" (user's choice).
- **Hours**: 7 am–midnight (Google, schema) vs "24/7" (contact page, hero). Site: office 7 am–midnight, emergency line 24/7 (user's choice). Google listing should get "24 hours" or the owner should confirm the line really is answered overnight.
- **Free estimates**: hero "free estimate if you accept the price" vs FAQ "we do not offer free estimates". Site: $95 assessment, waived when you go ahead (user's choice). Owner to confirm the $95 figure.
- **Review counts**: 480 (hero), 230+ (services page), 3,255 (Opio widget), 461–462 (Google). Site uses Google only.
- **Opio reviews** on their site are all dated the same day and signed "Plumber to Your Door of <city>"; several reviewer names look generated. Not used. All quotes on the new site are from Google Maps with names shortened.
- **Phone**: 647 and 866 both shown on their site without labels. Site: 647 everywhere as the action; 866 labelled toll-free in the footer only.
- Hidden "RoofLife" roofing template block exists in every page of the current site (not visible). Mentioned so the owner knows.

## User decisions (asked before design)
Demo to pitch · Call is the primary action, Book online secondary · Multi-page · Show the $95 fee + waiver · Real crew photos only · Navy + bright blue, bold and direct · "Since 2021, 15+ years in the trade" · Office hours + 24/7 emergency line.

## Design
- Palette from the logo: navy #003660, door-blue #0090FC, ice #EEF5FB, amber #FFB020 for the emergency band and CTA (their site used red; amber keeps red free for errors and reads warmer).
- Type: Big Shoulders Display (sign-painting condensed grotesk, matches van lettering) + IBM Plex Sans body + IBM Plex Mono for work-order-style labels. Self-hosted, 86 KB total.
- Signature: the open door from the logo. The hero and page-hero photos sit in a navy frame with a bright-blue door leaf swung open to the left; service cards get the same blue edge on hover; list bullets are tiny door leaves.
- Hero: eyebrow, 5-word headline, four facts (4.9★/462, 60–90 min, fixed price, 12 months), Call + Book, and a "What's going on?" symptom picker that answers in one line and links to the right service. Right: crew photo with caption + rating chip.
- Home order follows the plumbing playbook blueprint: utility strip → header → hero → trust strip → services by problem → emergency band → pricing/how it works → named work → Google reviews with tech names → crew → service area + map → FAQ → CTA → footer with NAP, two hour lines, licence. Mobile: fixed Call | Book bar.
- Pages: home, services hub, 8 service pages (emergency, drains, sewer & water lines, basement flooding, toilets & fixtures, water heaters, leaks & frozen pipes, commercial & rough-ins), service area, reviews, about, book. Generated by `build.py` from `content.py`.
- Schema: Plumber (NAP, geo, hours, AggregateRating, areaServed, sameAs, licence), FAQPage on home and service pages, Service + BreadcrumbList on service pages.
- Adopted from competitors: licence number in footer, proof chips under the hero, numeric guarantees, Toronto subsidy block with paperwork promise, who-owns-which-pipe explainer, honest response-time tiers by area, named-technician review wall. Deliberately not adopted: coupon pop-ups, cookie banners, chat widgets.

## Assumptions
- Toll-free number is the same office, not a call centre.
- "60–90 minutes" applies to Toronto, Etobicoke, North York, Scarborough; West/North tiers shown as 45–90, East 60–90, farther out scheduled. Owner to adjust.
- 5-year main water line warranty (from their service card) is still offered.
- Commercial work: restaurants, condos, garages, offices inferred from their commercial page + photos.
- Crew descriptions are written from what reviewers said about each person.
- Booking form posts to a Formspree placeholder; the owner's current form (date, time, photo upload) could be wired instead.

## QA (Playwright, Chromium)
- Desktop 1440 and iPhone 13 full-page captures of home, services hub, drain-cleaning, book, service-area, about, reviews: no console errors, no broken images, no horizontal overflow (one honeypot-input overflow found and fixed).
- Google Maps embed renders in real Chrome; headless Chromium shows the "Open in Google Maps" fallback behind it.
- Scroll-reveal fixed for hash navigation (elements above the viewport now show immediately).
- Weight: home HTML 31 KB, CSS 25 KB, JS 3 KB, fonts 86 KB; photos 9.3 MB total across all pages (each page loads 0.5–2.5 MB of lazy images; hero ~500 KB).
- Every local asset exists; every external link is the business's own profile or Google Maps.

## What the owner should supply before this goes live
1. Confirm the $95 assessment fee and the waiver rule, and the 5-year main-line warranty.
2. Confirm the emergency line is answered 24/7 (and update Google hours to match), or change the site to 7 am–midnight.
3. A sharper commercial photo (the garage shot is 1134×580) and, ideally, one posed crew photo with both vans.
4. A Formspree ID or their own form endpoint for `book.html`.
5. Which GTA cities they genuinely service with 60–90 minute response, to tune the tiers on `service-area.html`.
6. The exact Toronto subsidy figure they want to quote (site says up to $6,650).
7. Decide what to do with the 20 city pages and the blog on the old site (redirects to the service-area hub and relevant service pages are the simplest).

## Open questions
- Is "G. George" the founder's full name, and does he want to be named on the site?
- Do they want the toll-free number at all?
- HomeStars rating/count could not be read (blocked); only the Best of the Best 2025 badge is used.
