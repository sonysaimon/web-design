# Central Park Chiropractic & Massage — build report

Local preview: http://localhost:8108/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/central-park-chiropractic/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Central Park Chiropractic & Massage (Central Park Chiropractic Inc.) | Old site, Google |
| Category | Chiropractor + registered massage therapy, shockwave, custom orthotics, compression stockings, naturopath | Old site menus |
| Address | 3977 Kingsway, Burnaby, BC V5H 1Y7 (49.23296, -123.01639; ~300 m from Patterson Station, across Kingsway from Central Park) | Old site, Nominatim geocode, Google map embed |
| Phone | (604) 439-1230 · Fax 604-439-9426 | Old site contact page |
| Email | centralparkhealth@telus.net | Old site, research.json |
| Hours | Mon–Wed 9–6, Thu 9–6:30, Fri 9–5, Sat 9–5, Sun closed | Google listing (research.json). **Conflict:** the old site shows three different sets (home page Mon–Thu 9–7, Fri 9–5, Sat 9–5:30; booking page Mon–Thu 9–7, Fri 9–6, Sat 9–5:30; contact page Mon/Wed 9–6, Tue/Thu 9–7, Fri 9–5, Sat 9–5). Google used, owner to confirm. |
| Booking | https://centralparkchiro.mrxsolutions.com/onlinebooking/ (returns 200; "Book an appointment online" link on the old site's booking and contact pages) | Old site |
| Ratings | Google 4.8 (33) | research.json |
| Team | Dr. Rupi Kaila BSc, MSc, DC (chiropractor); Christina Nguyen RMT; Bianca Costa RMT (English/Portuguese); Yelim Lee RMT; Ziping Cui RMT (English/Mandarin); Dr. Rod Santos ND | Old site About and RMT pages |
| Established | 1988 ("established in 1988", "over 25 years") | Old site /burnaby-chiropractic/ |
| Dr. Kaila | Western States DC 1998 summa cum laude; BSc SFU; MSc Nutrition & Functional Medicine; past director B.C. Chiropractic Association; Orthotic Group casting training; 25 years in practice | Old site About page |
| Fees | Chiro $110 / $75 (Premium Assistance $87 / $52); RMT 30/45/60/90 min $90 / $110 / $135 / $220 incl. GST (PA $67/$87/$112); shockwave $120 / $100 (+$50 per extra area); orthotics $400 + $100 exam; orthopaedic shoes from $650; ICBC, WCB, DVA, RCMP no charge; ICBC RMT 45 min no charge | Old site Fees & Billing page |
| Direct billing | Pacific Blue Cross, Manulife, Sun Life, Green Shield, Desjardins, Medavie, Empire Life, Industrial Alliance, SSQ, Co-operators, Global Benefits, Johnson Inc., Chambers of Commerce, Crown, Maximum Benefit, Standard Life, DVA, RCMP | Union of the home-page and fees-page lists |
| Payment | Cash, Visa, Mastercard, Interac | Fees page |

**Conflicts between sources:** hours (above). Reviews mention "Kyle (RMT)" and "Amy" (front desk); neither is on the old site, and the old site lists four RMTs with other names. Kyle left out; Amy mentioned once as "Amy at the front desk", from a review.

## Old-site problems verified
- Lucid v2.6.9 WordPress theme (crawl `generator` tag). On a phone it opens with two dropdowns, "Pages Menu" and "Categories Menu", above a 1080×406 stock massage photo with the phone number pasted into the image (shots/centralparkchiro.jpg).
- Every image is iStock or a vendor product shot (TOG GaitScan kit, Storz Masterpuls). No photo of the clinic, the room or Dr. Kaila anywhere. Logo is a generic blue "Chiropractic" clip-art.
- "Book an Appointment" appears twice in the top menu and twice more in the sidebar, and the actual online-booking link is buried on the Book and Contact pages below a paragraph telling you to phone.
- Three contradictory sets of hours on three pages.
- Body copy is long and generic ("According to the Insurance Research Council…", 2014 blog posts), the naturopath page describes chelation and ozone therapy at length, and a WordPress admin URL is pasted into the naturopath text.
- Footer still says "© 2010".
- Domain in the browser bar changes from centralparkchiropracticandmassage.com to burnabychiropractorandmassage.com on the first click.

## Sources used
- Old site, 13 pages read with playwright-cli (home, about, book, fees, contact, chiropractic, RMT, shockwave, orthotics, compression, conditions, welcome, naturopathic, auto injuries).
- Google listing via research.json (rating, count, hours, six reviews).
- 12 crawl images + logo + 3 extra equipment images downloaded and judged on a contact sheet: all stock or vendor, none used.
- Nominatim geocode for the map pin and station distance.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Metrotown Family Chiropractic | n/a | metrotownchiropractic.com | Stats strip under the hero (years, reviews, insurers), condition cards, chiropractor bio with association logos, step-by-step process, direct-billing block, FAQ, sticky mobile bar with Call / Book / Text, separate new-patient online booking on the same mrxsolutions platform | Stats strip, process steps ("Examine / Explain / Treat / Hand back"), direct-billing block, FAQ, sticky bar |
| Baseline Health & Wellness | n/a | baselinewellness.ca | "Rates & Pricing" in the nav, Book Online (Jane) in every section, direct billing as a headline feature | Fees in the nav and a full fee section; Book button on every care card |
| Couve Health | n/a | couvehealth.com | ICBC as a top-level nav item, service tiles, real clinic photos | ICBC/WCB card inside "First visit"; nothing else (icon tiles and all-caps headings avoided) |

Table stakes in this market: online booking button in the header and hero, direct-billing list, conditions list, team with credentials, reviews, FAQ, map.
Opportunities nobody uses: posted fees with ICBC/WCB "no charge" stated plainly; a first-screen explanation of *how* the clinic diagnoses (the gait scan card); real photos (none of the three has strong ones either, and this clinic has none at all).

## Design decisions
- **Palette** from the clinic's own world: the dark green of the old banner's wordmark and Central Park's conifers (`--pine #173F35`, `--moss #2E6B57`, `--fern #8FBF9F`), a green-tinted paper (`#F5F7F4`, not cream) and the warm end of a pressure-map ramp (`--amber #E2B85A`, `--ember #D35F3B`) used only for stars, "today" and the hot spots of the scan.
- **Type**: Newsreader (optical-size serif, the "25 years on Kingsway" voice) for headings and review quotes; Hanken Grotesk for body and UI. Atkinson Hyperlegible was tried first and dropped: its slashed zeros made "$110" and the phone number look like errors.
- **Signature element**: an illustrated GaitScan pressure map (SVG dot grid, `gaitmap.svg`) as the hero's proof card, with slow parallax, and again faint behind the "How Dr. Kaila works" band. It comes from the one piece of equipment the clinic actually promotes (TOG GaitScan + 3D laser cast) and makes the headline "Find the cause. Then fix the pain." concrete. No photos exist, so the hero is typographic plus this card; no stock, no generated images.
- **Structure** (11 sections): hero → trust strip → care (5 groups, each with technique list, fee and a Book button) → conditions in four body-region groups → first visit (what to bring, what happens, ICBC/WCB/DVA card, direct-billing list) → fees (four tables, because the old site publishes them) → team (Dr. Kaila lead card + 4 RMTs + ND, initials in place of photos) → approach band with the father story, her quote and the four-step process → reviews (4.8 / 33 + six quotes) → FAQ (8) → visit (address, transit, hours with today, map) → footer.
- **Motion**: Lenis + GSAP per animated-scroll.md; hero word split (second sentence italic green), fade-ups, stagger rows on care / conditions / fees / team / reviews / steps, scrubbed parallax on the hero card (40 px) and the band art (240 px). Reduced motion switches it all off (verified).
- **CTAs**: every Book button → the clinic's mrxsolutions online booking; phone as the secondary everywhere; sticky Call / Book bar on mobile.

## What was built
- Hero: eyebrow "Kingsway at Central Park, Burnaby · since 1988", 6-word headline, facts line (25 years, 4.8/33, six days, ICBC/WCB no charge), Book + Call, gait-scan card.
- Trust strip: 4.8★, since 1988, no referral, direct billing, Mon–Sat.
- Care: Chiropractic, Registered Massage Therapy, Shockwave, Custom Orthotics & Gait Scan, Compression Stockings.
- Conditions: 18 conditions in four groups, "Book an assessment".
- First visit: what to bring, what happens, ICBC/WCB/DVA card, 18 direct-bill insurers.
- Fees: chiropractic, RMT, shockwave, orthotics tables from the old site.
- Team: six people with credentials and short bios in their own words.
- Approach band: Dr. Kaila's story, quote, four-step process.
- Reviews: Google 4.8 (33) card + six real quotes, first names.
- FAQ: referral, ICBC, WCB, direct billing, first visit, shockwave sessions, orthotics break-in, payment.
- Visit: address, phone, email, fax, transit note, hours table with today highlighted, Google map embed, Directions.
- Footer with disclaimer and "Site by Sony Saimon".

## Assumptions
- Google hours are current; the old site's three versions are stale.
- "Since 1988" and "37 years" come from the old site's "established in 1988". "25 years" for Dr. Kaila is her own wording.
- Fees are as posted on the old Fees & Billing page (copyright 2010 page, but the RMT bios on the same site were updated in 2025, so the page is maintained).
- The gait-scan card is labelled "Illustration" on the page; it is not a patient's scan.
- "Four minutes on foot from Patterson Station" is from the geocoded distance (~300 m). "The 19 bus stops on Kingsway outside" assumes the Metrotown–Stanley Park route still runs this block.
- "Plan on about 45 minutes" for the first visit and "about a week apart" for shockwave sessions are typical-practice assumptions, not from their site.
- "Four RMTs" and the languages (Portuguese, Mandarin) are from the RMT page as of today.
- Massage fee listed as including GST, chiropractic as no GST, as the old site states.

## Open questions for the owner
- Which hours are right? Google says Thu to 6:30 and Sat to 5; your site says Mon–Thu to 7.
- Are the fees on the Fees & Billing page still current (chiro $110/$75, RMT $90–$220, shockwave $120/$100, orthotics $400 + $100)?
- Is the mrxsolutions online booking link the one you want patients to use, and does it take new patients and RMT bookings?
- Is Kyle (named in a review as an RMT) still with the clinic? Is Amy the right name for the front desk?
- Is Dr. Rod Santos (naturopath) still practising at the clinic? His page describes chelation, ozone and EECP therapy; I kept his card to one plain sentence.
- Keep the telus.net email, or set up one on the domain?
- Which domain should the new site live on (centralparkchiropracticandmassage.com or burnabychiropractorandmassage.com)?

## Needs from the owner
- Real photos of: the clinic front on Kingsway, the treatment rooms, Dr. Kaila (portrait and adjusting), the RMTs, the gait-scan plate and shockwave unit in use. The site is built photo-light; a hero photo and team portraits slot in without a redesign.
- Confirm: hours, fees, booking link, team list, any logo they want kept (the current one is clip-art).

## QA
Desktop 1440 full page after scrolling (7 slices read) and iPhone 15 viewport-by-viewport (28 shots read) · `scrollWidth === innerWidth` on both (1440/1440, 393/393) · no console errors · no broken images · all 7 local assets present · external links return 200 (booking, CDNs, fonts, maps; the deploy URL 404s until published) · reduced-motion emulation: `no-motion` class set, Lenis off, 0 hidden elements, hero words not split · mobile menu opens, anchor scroll lands on Fees, FAQ toggles · `node --check` on services.js, main.js, motion.js clean.
Full-page capture on the iPhone profile with Lenis repeats the viewport; viewport stitching was used instead.

## Placeholder / generated images
none (the gait-scan SVG is a drawn illustration, labelled as such on the page; no AI-generated or stock photos).
