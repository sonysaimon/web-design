# Brentwood Chiropractic & Sports Rehab Centre — build report

Built 2026-11-02 as a **demo to pitch the owner**. Local preview: http://localhost:8107/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/brentwood-chiropractic/ (not deployed; waiting for your go).

## Business facts
| | Value | Source |
|---|---|---|
| Name | Brentwood Chiropractic & Sports Rehab Centre | Old site header, Google |
| Category | Chiropractic, registered massage therapy, custom orthotics, ICBC claims | Old site, Cliniko booking page |
| Address | #101 – 1160 Douglas Road, Burnaby, BC V5C 4Z6 | Old site (every page footer and the 2018 "we are moving" post) |
| Phone | (604) 299-7199 | Old site, Google |
| Email | none found anywhere | — |
| Hours | Mon–Fri 9:00 am – 6:00 pm, Sat/Sun closed | Google (matches old site "Monday – Friday: 9:00 am-6:00 pm") |
| Booking | Cliniko: https://brentwood-chiropractic-sports-rehab-centre.cliniko.com/bookings (the "Book online" button in the old site's sidebar) | Old site HTML |
| Ratings | Google 4.9 (39) | research.json, 2026-11-02 |
| Team | Dr. Chris Csabai, BSc, DC (clinical director); Robyn Thompson, RMT; Maria (front desk); founder Dr. Joe Csabai, MSc, DC (deceased, obituary linked from the old site) | Old site Chiropractor and Massage pages, Cliniko practitioner bios, Google reviews |
| Fees | First chiro visit $145 / extended $160; follow-up $85; returning after a year or new complaint $115; ICBC $0 / $0 / $10; massage $80 (30 min) to $235 (120 min); orthotics $550 | Cliniko booking page, read 2026-11-02 |
| Policies | 24 h cancellation or full fee; cash, debit, Visa, Mastercard; direct billing for chiropractic only; massage paid at visit with receipt | Cliniko booking page |

**Conflicts between sources**
- **Postal code**: old site says V5C 4Z6 (every page); Google listing says V5C 3E8. Site uses the owner-written V5C 4Z6. Confirm.
- **WorkSafeBC**: old site footer says "ICBC and WCB (approved) claims accepted"; the Cliniko page says new WCB consultations are "not available at this time due to the new contract negotiations and requirements by Worksafe BC". Site says "WorkSafeBC claim: call first" and promises nothing. Confirm current status.
- **Dr. Joe's practice length**: "45 years" on the Chiropractor page; "over 45 years" in Chris's bio on the same page. Site uses 45. Reviews say "about 40 years" as patients; the site repeats that only inside the quote.

## Sources used
- Old website http://www.brentwoodchiro.com/ (a frameset around https://brentwoodchiropractic.blogspot.com/: Home, Chiropractor, Massage Therapy, Meet the Team (empty), Office Hours, Contact Us, plus 10 blog posts 2009–2026).
- Cliniko online booking page (services, fees, practitioner bios, cancellation and payment policy).
- research.json (Google rating, hours, 6 review quotes, review themes).
- Old-site screenshots `shots/brentwoodchiro.jpg` and `brentwoodchiro-d.jpg`.
- Images on the old site: insurer logo sheet (1169×718, used), BCCA and CCA association logos (used), the header banner (text on blue, not used), two photos of Dr. Chris at 160×120 px (too small for any use), a "Book online" button graphic.

## Old-site problems (verified)
- The domain is an invisible frameset around a Blogger blog ("Awesome Inc." theme, "Powered by Blogger" footer); the desktop screenshot shows a 2000s layout with Facebook/Twitter/Pinterest share rows under every post.
- The home page is a reverse-chronological blog: the first thing a visitor reads is "Tips to avoid foot &/or leg problems in the summer", not what the clinic does, where it is, or how to book.
- Not mobile: the phone screenshot shows the header and tabs cut off at the right edge; the page needs horizontal scrolling.
- The booking button is a sidebar image below the fold; the Contact page says "or book online:" with nothing after it.
- "Meet the Team" is an empty page. Fees, direct billing, ICBC rules and the cancellation policy only exist on the Cliniko page.
- No photos of the clinic or treatment rooms; the only team photos are 160 px thumbnails. The one image is a Telus eClaims insurer sheet.
- Still carries the 2018 "please be aware of our new address" notice, a 2020 direct-billing post and a 2014 "we added online booking" post as news.

## Competitors studied
| Competitor | Website | What they do well | Adopted? |
|---|---|---|---|
| Metrotown Family Chiropractic | metrotownchiropractic.com | Hours/phone/text bar, new vs existing patient booking, stat strip under the hero (years, reviews, insurers), conditions grid, owner story, sticky 3-button mobile bar | Trust strip with real numbers; conditions list; mobile sticky bar; named doctor story |
| Baseline Health & Wellness | baselinewellness.ca | Rates & Pricing in the nav, direct-billing block, treatment cards, one Book Online pill everywhere | Fees shown openly; "Care & fees" in the nav; one booking link on every button |
| Holdom Chiropractic | burnabychiropractor.com | Clean nav with New/Existing booking, address and phone right under the hero CTAs | Address line in the hero eyebrow; consistent booking link |

Table stakes in this market: Book-online button in the header, direct-billing statement, conditions treated, named chiropractor with credentials, Google rating, map and parking.
Opportunities nobody uses: honest fees on the home page, ICBC $0 made explicit, a "what happens on the first visit" card above the fold, a "we discharge you when you are well" promise (this clinic's strongest review theme), and the founder's sports lineage.

## Design decisions
- **No usable real photos exist**, so this is a photo-light, typographic build: a large condensed headline, one proof card in the hero, and a signature line drawing instead of a hero image. The 160 px photos of Dr. Chris were not used; no Street View, no stock, no generated images.
- **Headline** "Treated like an athlete." is Dr. Joe's own creed from the Chiropractor page ("each patient deserved to be cared for like an athlete"), 4 words.
- **Palette** from the clinic's sign blue (#0F5BBF, matured from the old header's blue), deep navy text and band (#0E1B33), cool paper white (#F3F5F9), oxblood (#8B2E3C) from the treatment table in the one old photo, used only for the pull-quote rule and today's row, and gold only on the star.
- **Type**: Barlow Condensed 700 for headlines, fees and years (athletic, jersey-like), Public Sans for body.
- **Signature**: pitch markings. A faint centre circle and halfway line behind the hero; a full pitch line drawing (`pitch.svg`) drifting behind a pebble mask in the lineage band. It comes from Dr. Joe's soccer life (FIFA coach, AC Milan) and reads "sports rehab" without a stock photo. The eyebrow marker is a small ring on a line for the same reason.
- **Motion**: Lenis + GSAP ScrollTrigger per the Westeck playbook: hero words stagger in on load, fade-ups, staggered rows (care, steps, new-patient cards, team, timeline, reviews), scrubbed parallax on the masked pitch. Static for reduced-motion users (verified).
- **Structure** (11 sections): nav → hero + first-visit card → trust strip → care & fees + conditions → how a course of care goes → new patients → team → lineage band → reviews → FAQ → visit → footer. Sticky Call/Book bar on mobile.
- **Fees shown**: the brief allows chiro fees only if the old site publishes them. The old site's own "Book online" button leads to the Cliniko page that lists every fee publicly, so fees are shown with the line "Fees as listed on our online booking". To remove: delete the `fee` strings in `services.js`.

## What was built
- Hero: eyebrow "Brentwood, Burnaby · Douglas Road at William", headline, facts line (second generation, since 2002, 4.9/39, direct billing, 9–6), Book online (Cliniko) + Call, ICBC/WorkSafe note, "Your first visit" card with Winston's review.
- Trust strip: 4.9★ 39 · since 2002 · 2 generations · direct billing · $0 ICBC visits · free parking.
- Care & fees: Chiropractic (5 fee lines), Massage therapy (6 lengths), Custom orthotics, ICBC and work injuries, each with its own CTA; 10 condition chips.
- Course of care: 5 numbered steps from the first-visit post, the Cliniko bio and the review themes, plus Jessica's quote.
- New patients: before you come, paying (Cliniko policy), after a car accident (ICBC rules), insurer logo sheet.
- Team: Dr. Chris Csabai, Robyn Thompson (link to her guidelines site), Maria; BCCA and CCA member logos.
- Lineage band: 1967 / 2002 / 2014 / 2018 / Today timeline, founder tribute to Dr. Joe with his quote, masked parallax pitch.
- Reviews: Google 4.9 (39) card + 6 real quotes, first names.
- FAQ: first visit, direct billing, ICBC cost, "coming forever?", massage with Robyn, orthotics, cancellation, parking and bus.
- Visit: address, phone, open-today line, hours table with today highlighted, parking/transit/driving access, Google map embed, Book + Directions.
- JSON-LD `Chiropractor` with address, hours, rating, employees, booking action. OG tags with absolute URLs and a typographic share card.

## Assumptions
- Dr. Chris "in practice since 2002" is from his Cliniko bio. The 2002 timeline line ("joins his father, the Centre takes shape on Halifax Street") combines that with the 2018 post ("after 15 years of residing on Halifax Street").
- "1967" as the start of the lineage: Dr. Joe graduated in 1967 and "had been in practice in Vancouver for 45 years".
- Maria's name is from research.json; her duties on the site are inferred from the old site ("our receptionist will gladly help you find more times") and the Cliniko orthotics note.
- "Treated the same day in almost every case" paraphrases "Treatment will usually be given on the first visit".
- Orthotics "pick-up and fitting: Included" reflects the $0.00 "Custom Orthotics-pick up" booking item; "some plans need a prescription or a gait report" is general knowledge, not from the clinic.
- "WorkSafeBC billing rules changed in 2025" is my dating of the undated Cliniko note.
- Conditions list combines the old sidebar, blog posts, Robyn's bio and the review themes (sciatica).
- "Comfortable clothes you can move in" and "bring your plan card" are standard advice, not from the clinic.
- "Families on their second and third generation of Csabai care" paraphrases Bel's 40-year review.
- Transit directions are from the 2023 directions post; the current bus route was not verified.

## Open questions for the owner
- Are the Cliniko fees current, and is he happy to show them on the home page?
- Correct postal code: V5C 4Z6 (his site) or V5C 3E8 (Google)?
- Can he take new WorkSafeBC claims today, or should the site keep saying "call first"?
- Is there a clinic email he wants published? None was found.
- Is Robyn currently at the clinic, and should the site link to robynthompsonrmt.com?
- Should the Dr. Joe tribute stay? It is the most distinctive thing on the page, but it is personal.
- Saturday hours: Google and the old site both say closed. Confirm.

## Needs from the owner
- Real photos of: the treatment room, the entrance on Douglas Road, Dr. Chris and Robyn (the hero card and the lineage band are built to take them; see README "Add a photo").
- Confirm: fees, postal code, WorkSafe status, email.

## QA
Desktop 1440 and iPhone 15 (393) checked · scrollWidth equals viewport on both · 0 console errors · 0 broken images · every local asset exists · external links (Cliniko, Google Maps, robynthompsonrmt.com, web.soichirosaimon.com, jsDelivr) return 200 · reduced-motion emulation renders fully static with Lenis off and no split words · scroll to bottom and back re-hides nothing · mobile menu, FAQ, map embed and today's hours highlight exercised · `node --check` passes on all three JS files.

## Placeholder / generated images
None. `photos/og.jpg` is a typographic share card (text and lines, no photo); `pitch.svg` and the hero markings are hand-drawn vector lines. The insurer sheet and association logos are from the clinic's own site.
