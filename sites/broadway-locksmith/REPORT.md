# Broadway Locksmith Ltd — build report (2 Nov 2026)

Local preview: http://localhost:58664/ (port chosen at build time; `python3 -m http.server <port>` in this folder serves it) · Publish: `./deploy.sh` → https://web.soichirosaimon.com/broadway-locksmith/

Purpose: demo site to pitch to the owner (Harvey's first email goes out 3 Nov 2026 in the morning). Static build, no scroll animation (user's choice).

## Business facts
| | Value | Source |
|---|---|---|
| Name | Broadway Locksmith Ltd | own site, Google |
| Category | Locksmith (walk-in shop + mobile service) | Google, own site |
| Address | 335 West Broadway, Vancouver, BC V5Y 1P8 | own site, Google |
| Phone | 604-874-1040 (main), 604-879-8720; fax 604-874-0207 | own site |
| After-hours emergency | 604-889-2634 | own site |
| Email | broadwaylocksmith@gmail.com | own site |
| Hours | Mon–Fri 8:30–5:30 per own site and Google; a review says the counter opens at 9:00 and 8:30–9:00 is phone calls only | own site, Google review (Laura, 5 months ago) |
| Founded | 1971, family owned and operated | own site |
| Location notes | Next to Broadway–City Hall Canada Line; free parking at the back | own site, storefront sign, review |
| Payment | Visa, Mastercard, Amex, Interac (icons on old site) + cash (assumed) | own site |
| Booking | None; walk in or call | own site |
| Ratings | Google 4.6 (451) | Google Maps |
| Team | Staff named in reviews: Simon, Peter, Jimmy, Alliza. Not shown on the site (shop, no team section). | Google reviews |

**Conflicts between sources:** Hours. Own site and Google say 8:30–5:30; a reviewer reports the counter opens at 9:00 with phones only from 8:30. The site says "counter 9:00–5:30, phones from 8:30". Owner to confirm.

## Sources used
- Own site: broadwaylocksmith.ca (index, sales-service, photos, contact pages; gallery images).
- Google Maps listing: rating, review count, 70 reviews read, 4 place photos (interior key wall, storefront, workshop, hardware display), review topics (key cutting 44, car key cutting 7, boat key cutting 2, bike lock keys 2).
- No Instagram, Facebook or booking platform found.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Fob Vancouver | 4.9 (2,550) | fobcouver.ca | Clear "what do you need" hero, three service doors | Three facts under the H1, direct CTAs |
| Mr Quick Fob | 4.9 (1,236) | vancouverquickfob.com | "How it works" steps, book appointment | Not needed (walk-in shop) |
| Safe & Secure Locksmith | 4.7 (651) | safeandsecurelocksmith.ca | Modern, founding-year stat, real photos, services split, shop section | Trust strip with years, services four pillars, real photos |
| Top Locksmith | 4.8 (1,233) | emergencylocksmithvancouver.ca | Phone bar, trust strip (bonded, police-cleared), on-site time promise | Phone button in header, trust strip |
| Yaletown Locksmith | 4.9 (287) | yaletownlocksmith.com | Emergency button | After-hours number in hero and visit |
| Yes Locksmith | 4.9 (211) | yeslocksmith.ca | Service cards, Google badge | Reviews section with rating headline |

Table stakes in this market: phone as a button in the header, residential / commercial / automotive (+ safes) split, Google rating shown, bonded & licensed line, emergency line, hours and address, call/quote CTA.
Opportunities nobody uses: the walk-in shop angle (biggest key wall in the city, "old and hard-to-find blanks since 1971"), the odd keys reviewers rave about (boat, bike lock, e-bike battery, motorcycle, broken-in-half car keys), "next to the Canada Line, free parking at the back".

## Design decisions
- Palette: navy from the blue awning, brass from the key wall, warm paper background. Tokens in `styles.css`.
- Type: Barlow Condensed (signage-style display), Barlow (body), IBM Plex Mono (eyebrows, hours, labels).
- Signature element: the key wall. Real workshop photo as the hero; the "Keys we cut" section is a pegboard with hanging brass tags, one per key type.
- Structure (single page): header + phone → hero (eyebrow, 5-word H1, three facts, Call + Directions, proof card with live open/closed status and a review quote) → trust strip → Keys we cut → four service pillars with product photos → brands line → hardware photo band → reviews (4.6/451 + 6 quotes) → Visit (storefront photo, address, hours, emergency line, payment, map embed) → FAQ → footer. Sticky mobile bar: Call / Directions.
- No prices: locksmiths quote per job; the old site shows none.
- No contact form: the shop is phone/walk-in; the old site's form has no stated recipient.

## What was built
- Header: wordmark with key icon, 5-item nav, phone button (collapses to hamburger + sticky bar on mobile).
- Hero: "Any key. Even the hard-to-find ones." with facts, CTAs, after-hours line, workshop photo, proof card.
- Trust strip: 54 years, thousands of blanks, bonded & licensed, free parking / Canada Line.
- Keys we cut: 14 pegboard tags (data in `services.js`).
- Services: Locks & doors, Car keys, Commercial & strata, Safes, each with bullets and an "Ask about…" tap-to-call.
- Brands: Medeco, Mul-T-Lock, Schlage, Weiser, Kaba/Unican, Abus.
- Hardware band: Weiser/Schlage display photo with caption.
- Reviews: 6 real Google quotes, first names, link to Google.
- Visit: storefront photo, facts table, directions + call, Google map embed.
- FAQ: 6 questions from reviews and the old site.
- Footer with credit.

## Assumptions
- Counter opens 9:00 and phones 8:30 (from a review); own site says 8:30.
- "Largest key inventory in Vancouver" and "specializing in old and hard-to-find blanks" are the shop's own claims from its site.
- Abus listed as a brand because the gallery shows an Abus padlock; Kaba/Unican because of the pushbutton locks shown.
- Cash accepted (not stated anywhere).
- "Thousands of blanks" is an estimate from the photos; replace with the owner's number.
- Safe "delivery and installation available" and "safe keys and combination help" are typical for the category and not confirmed.

## Open questions for the owner
- Exact counter vs phone hours; Saturday hours if any.
- Does the money-back guarantee one reviewer mentioned exist?
- Mobile service radius and after-hours pricing.
- Brands they actually stock in safes.

## Needs from the owner
- Real photos of: the team at the counter, the key-cutting machines up close, a safe on the floor, a van if they have one.
- Confirm: hours, brands, the "largest inventory" claim wording, email address to publish.

## QA
Desktop 1440 and iPhone 15 checked · no horizontal overflow (393 = 393) · no console errors · no broken images · 14 tags, 4 services, 6 reviews, 6 FAQs rendered · mobile menu fixed (hidden nav was intercepting taps) · reduced motion respected (only CSS transitions, disabled under the media query). Map iframe renders blank in headless screenshots; verified in Chrome.

## Placeholder / generated images
None. All photos are the business's own (Google listing + old website gallery). Product thumbnails are small (300–500 px originals) and should be replaced with the owner's photos.
