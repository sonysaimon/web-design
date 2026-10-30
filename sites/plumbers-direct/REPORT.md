# Plumbers Direct — build report (2026-10-27)

Local preview: http://localhost:8083/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/plumbers-direct/

Purpose (user decision): **demo to pitch the owner**. Real facts only; nothing invented.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Plumbers Direct (Plumbers Direct Inc.) | Google Maps, plumbersdirect.ca |
| Category | Plumber, residential + small commercial, 24-hour emergency | both |
| Address | 2100 Bloor St W, Suite 6222, Toronto ON M6S 5A5 (mailbox suite inside Chartwell Grenadier) | Google, old site |
| Phone | 416-402-7798 (van, billboard, Google). Old site also lists 416-997-3063 | Google, old site |
| Email | plumbersdirect@me.com | old site |
| Hours | Open 24 hours | Google, old site ("24/7 on-call") |
| Booking | None. Phone only; old site had a chat bubble | old site |
| Ratings | Google 4.9 (87) · HomeStars 96%, Best of Award 2019–2023 (widget: "Best of 2023, winner 5 times") | Google Maps 2026-10-27, old site widget |
| Licence | Plumbers Licence # P26432 | old site footer |
| Since | 2000 | old site ("in business since 2000", "over 20 years") |
| Guarantees | "If we can't fix it you don't pay"; all work warrantied 1 full year | old site |
| Ownership | "Identifies as women-owned" | Google |
| Team | Peter (founder, "Peter K."), Joyce (office/dispatch), Tenzin (lead plumber), Andrew, Bruce, George, Callan | Google reviews only |

**Conflicts between sources:**
- Two phone numbers on the old site; Google, the van and the billboard show only 416-402-7798. Site uses that one (user decision).
- City flood-protection subsidy: old site says "up to $3,400" (and "$3,200" elsewhere). toronto.ca as of May 1, 2026: **up to $6,650 per property**, 80% of invoiced cost, max $1,600 per backwater valve (two devices), $2,250 for sump pump + battery back-up. Site uses $6,650.
- HomeStars profile link on the old site (companies/2783360) returns "page not found"; the HomeStars widget on their site still renders. Rating and award years taken from that widget and their badge images.
- Google lists the office as "located in Chartwell Grenadier Retirement Residence"; it is a mailbox suite, so the site does not invite walk-ins.
- "No after-hours surcharge" appears only in a 2018 customer review, not in owner copy. The site quotes the review and says "ask when you call" rather than promising it.
- "$59 service fee" appears in a 2021 review. Not published.

## Sources used
- Google Maps place (cid 8295190557234385444): rating, 87 reviews read in full, 7 place photos, hours, women-owned attribute.
- plumbersdirect.ca: home, about, contact, emergency, reviews pages; 28 images; service lists and guarantees in the owner's words.
- toronto.ca Basement Flooding Protection Subsidy Program page (fetched 2026-10-27) for the subsidy amounts.
- No Instagram, Facebook or Yelp presence found linked from the site; not searched further.

## Existing site assessment (why rebuild)
WordPress 6.7 on a 2020 template. Stock-photo slider hero and a stock "plumber with plunger" cutout; `<title>` and meta description stuffed with 19 place names; 19 thin city pages; two phone numbers in the header; COVID-safe page still in the nav; no sticky mobile call bar; no schema; no booking path; HomeStars and Google widgets as iframes. Scored against the plumbing playbook rubric it fails on hero, proof placement, NAP consistency and mobile CTA.

## Competitors studied (Google Maps "plumber Toronto", top by rating × reviews with real sites)
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Drain King Plumbers | 4.7 (2,893) | drainkingplumbers.ca | $30-off coupon, Google+HomeStars+BBB badges beside CTA, rebates page, FAQ+Plumber schema | badges with counts in hero/strip; FAQ schema; subsidy section |
| Priority Plumbing & Drains | 4.8 (1,939) | priorityplumbing.ca | "since 2001" in hero, Rates/Service Plans/Coupons pages, "make it right or you don't pay" | year in eyebrow; guarantee section |
| New Canadian Drain & Plumbing | 4.7 (1,823) | newcanadiandrain.com | Licence number in the hero, 7 HomeStars badges, review count | licence in hero facts, proof strip |
| Royal Plumbing Services | 4.9 (771) | royalplumbingservices.com | blocked automated fetch | — |
| Plumber To Your Door (509 Bloor W) | 4.9 (462) | plumbertoyourdoor.ca | Real van and job photos with captions, "free estimate if you accept the price" | captioned job photos |
| Top One Plumbing | 5.0 (386) | toponeplumbing.ca | Google review card in hero | reviews named by job/tech instead |
| Mister Plumber | 4.9 (307) | misterplumber.ca | Subsidy page, Projects page, 15 city pages | subsidy section; one area page with local copy instead of city shells |
| Mr. Rooter Toronto (brand) | — | mrrooter.ca/toronto | Call + Schedule paired, CASL consent on form, $30-off card | paired CTAs; consent checkbox |

Table stakes: 24/7 + phone in header, licence number, badges with counts, service cards, quote form, service-area list, backwater-valve subsidy content.
Opportunities nobody uses: real crew names; "who answers the phone"; honest response-time facts from reviews; a light static site; a map on the area page; women-owned. All used.

## Design decisions
- **Palette**: ink navy `#0B1F3A` (wordmark blue pushed dark), wordmark blue `#1E5BB8`, signal red `#D7262C` (wordmark red), paper `#F4F6F9`. Same two brand colours as the van and billboard, no third hue.
- **Type**: Barlow Condensed 700/800 for display (condensed trade-sign letterforms, close to the van lettering), Barlow 400/600 for body. One family, Google Fonts, four weights.
- **Headline**: their own tagline, "When it happens, we can help." Eyebrow carries Toronto, 24 hours, since 2000.
- **Signature**: the Pattison billboard's problem list ("DRIP LEAK CLOG") becomes the hero picker: five big condensed words (Drip · Leak · Clog · Flood · No hot water) that route to the right service page and state one honest fact from reviews. Service cards are headed by the same one-word symbols (DRIP, CLOG, LEAK, FLOOD, MAIN, NOW, COLD, BACKUP, TASTE).
- **Proof as facts**: the hero facts list and the navy proof strip use numbers (4.9/87, 5× HomeStars, P26432, 2000, 1-yr, 24/7) instead of adjectives. Emergency band quotes three real reviews with their times (4 a.m., Christmas Day, 11 p.m. Sunday).
- **Structure**: multi-page, lean (user decision). Home; services hub; 9 service pages on one template (eyebrow, H1, lede, two CTAs, 3 paragraphs, includes list, mid CTA, credentials row, 3 reviews, FAQ with FAQPage schema, related, closing band, sticky aside); service-area page with map and eight area notes (no thin city shells); about; reviews (52 quotes); contact. Flat URLs, no subfolders.
- **CTA system**: one phone number everywhere, click-to-call in the utility bar, header, hero, mid-page bands, footer; "Request service" outline button to the Formspree form; fixed mobile bar with Call + Request.
- **Schema**: Plumber with address, geo, 24-hour opening hours, areaServed, AggregateRating 4.9/87 on the home page; FAQPage on each service page.

## What was built
- Utility bar: 24-hour line, phone, GTA, licence, since 2000.
- Sticky header: CSS wordmark (Plumbers / Direct / .ca in brand colours, tagline above), 6-item nav, Request service + Call buttons, hamburger under 860px.
- Hero: tagline headline, four fact bullets, Call + Request, upscaled van photo on a navy frame with caption, "What's happening?" picker.
- Proof strip: six numbers.
- Services: 9 cards from `services.js`, the emergency card in navy.
- Emergency band (red): "Someone answers. Day or night." with three timed review quotes.
- How it works: 4 steps written from review language (written quote, booties, photos, follow-up call).
- Guarantee: three promises (can't fix it/don't pay, 1-year warranty, licence).
- Reviews: badges for Google and HomeStars, six quotes with job and technician, link to all reviews and to leave one.
- Subsidy: $6,650 City program with the three eligible items and a link to toronto.ca.
- Recent work: four captioned job photos.
- Service area: 15 areas + embedded Google map (verified rendering in Chrome).
- About teaser: crew photo, women-owned, Joyce / Tenzin / Peter.
- FAQ: six questions (cost, speed, surcharge, licence, warranty, commercial).
- Final band: big phone number + request form (name, phone, email, address, what's going on, emergency checkbox, consent checkbox).
- Footer: NAP, licence badge, services, areas, company links, credit.
- Inner pages as listed above.

## Assumptions
- Phone 416-402-7798 is the number the owner wants; 416-997-3063 dropped.
- Photo captions for the four job photos are read from the images (Rheem tank, pressure-balanced valve, rough-in, finished shower); unconfirmed.
- Van caption "at Humber Bay" is a guess from the skyline angle.
- "Residential specialists" is on the van livery; used as the caption label.
- Team roles are inferred from reviews (Joyce books/follows up, Tenzin lead plumber, Peter founder). "Peter … still on the tools" is inferred from recent-ish reviews; confirm.
- Area-page notes about housing stock (clay drains, lead services, polybutylene in 80s/90s subdivisions) are general Toronto knowledge, not Plumbers Direct claims.
- Hours line on contact: "Scheduled work weekdays, evenings and weekends by arrangement" is an assumption; the only owner fact is 24-hour availability.
- Service page copy (how a job is done, what to do while waiting) is written from the old site's lists and standard practice; the owner should read every page.

## Open questions for the owner
- Is 416-997-3063 still in use? Should it appear anywhere?
- Confirm the HomeStars profile URL and current rating/award years; confirm the HomeStars widget should be embedded.
- Confirm the licence holder's name for the footer (playbook recommends naming the master plumber).
- Is there an emergency surcharge policy to state plainly?
- Financing, membership or a dated special to show? None found.
- Commercial work: condo/riser/backflow testing worth its own page?
- Do you want city pages back (old site had 19)? Only worth it with real local copy.

## Needs from the owner
- Real photos: the original van photo at full size (hero is a 2× upscale of an 828px Google photo), crew and technician portraits, 6–10 job photos with one-line captions.
- Confirm facts: team names and roles, since-2000, licence number, warranty wording, women-owned statement, email.
- Formspree form ID (or another form endpoint) and who receives requests.
- Google Business Profile: switch the website link when the site goes live; keep NAP identical.

## QA
Desktop 1440 and mobile 390 (Playwright, Chromium) on home, drain-cleaning, sump-pumps-flooding, emergency-plumber, services, about, reviews, contact, service-area: `scrollWidth === innerWidth` on all · no console errors · no broken images · every local asset exists · external links checked (Google Maps cid, review link, toronto.ca subsidy page 200, Google Fonts) · mobile menu opens and closes · hero picker switches · Formspree form posts via fetch with a status message (needs a real ID) · reduced motion respected · focus styles visible · JS passes `node --check`. Home page ~24 KB HTML + 27 KB CSS + 39 KB JS + 251 KB hero image. Map embed verified in the user's Chrome.

## Placeholder / generated images
None generated. `hero-van.jpg` is a Pillow 2× Lanczos upscale of the Google place photo (flag: replace with the original). `crew-at-work.jpg` and `frozen-pipe.jpg` come from the old site at low resolution and may be stock; replace or drop.
