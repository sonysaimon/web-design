# Vancouver Chiropractic Services — build report

Local preview: http://localhost:8110/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/vancouver-chiropractic-services/

Demo site to pitch the owner (Dr. Michael Horowitz). Not deployed.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Vancouver Chiropractic Services (Dr. Michael Horowitz & Associates; also trades as Hycroft Chiropractic & Massage) | Old site header and footer |
| Category | Chiropractor; also custom orthotics (Vancouver Orthotics, same suite), licensed acupuncture, RMT | Old site home, services, acupuncture pages |
| Address | Suite 114, 3195 Granville St, Vancouver, BC V6H 3K2 — Hycroft Medical Building, NW corner of Granville and 16th | Old site, bio page |
| Phone | (604) 733-7744 | Old site, Google |
| Email | info@vancouverchiropractic.net | Old site |
| Hours | Mon 12–6, Tue 10–6, Wed 10–6:30, Thu 11–6:30, Fri 8–3, Sat 9–2:30, Sun closed | Google Business Profile (research.json) |
| Booking | Jane App: https://vancouverorthotics.janeapp.com/ (returns 200) | Old site "Book online", direct-billing blog post |
| Ratings | Google 4.8 (62) | research.json |
| Team | Dr. Michael Horowitz DC (CMCC 2000, York U biology/kinesiology, owner); Dr. Dana Koren DC; Jack Hsu, licensed acupuncturist (Wed and Thu) | Old site bio, neck-pain page, acupuncture page |
| Fees | New patient 30 min $95; follow-up 15 min $60; re-exam 30 min $80 (returning after 1+ year) | Old site "Vancouver-Chiropractic-Services" page and direct-billing post |
| Direct billing | Pacific Blue Cross, Great-West Life/Canada Life, Sun Life, Manulife, Green Shield, Desjardins, ClaimSecure, Equitable Life, Johnson Group; cash, debit, Visa, Mastercard, no Amex | Direct-billing blog post (Jan 2021) |

**Conflicts between sources:**
- Acupuncturist: the "Vancouver-Chiropractic-Services" page lists *Parisa Ehsan – Registered Acupuncture*; the dedicated acupuncture page (newer, with photo) is *Jack Hsu*, Wed and Thu. Site uses Jack Hsu. Confirm.
- The bio page gives a second phone number (604-255-1579). Site uses 604-733-7744 only, which is on every other page and on Google.
- "Great West Life" in the 2021 post is now Canada Life; site lists Canada Life.
- Old site copyright says 2023 and the blog shows posts dated July 2026, so the site is still being edited but the template is not.

## Sources used
- Old website crawl: home, bio, acupuncture, posture, chiropractor, services/fees, neck pain (2 pages), direct-billing post (10 pages).
- Old-site screenshots (phone and desktop).
- research.json: Google rating, review count, hours, six review quotes, review themes.
- 24 images from the old site, downloaded and judged. Real: two Canon 6D studio portraits of Dr. Horowitz (2018), his older jacket portrait, the posture-mannequin portrait, Dr. Koren's photo (321 px), Jack Hsu's photo, two small shots of the Hycroft building, one "Stretch of the Day" photo (clinic's own, 2010). Stock or graphic, not used: orthotics mock-ups (AI-looking), three blue-tinted banners, acupuncture close-up, Dreamstime headache photo, massage banner, anatomy diagram, "We Treat That" and "You don't have to live with pain" graphics, Adobe Spark collage, Ubertor template logo.
- No Google owner photos exist for this listing.

## Competitors studied
| Competitor | Website | What they do well | Adopted? |
|---|---|---|---|
| Metrotown Family Chiropractic (Burnaby) | metrotownchiropractic.com | Stats strip under the hero (years, reviews, insurance partners); separate New/Existing patient booking; sticky bottom bar with Call / Book / Text on mobile; conditions grid | Stats strip with the clinic's real numbers; sticky Call / Book bar; conditions as a chip list rather than a grid |
| Baseline Health & Wellness (Burnaby/Vancouver) | baselinewellness.ca | Rates & Pricing as a top-level page; direct billing block; "Request a free consultation" | Fees shown openly (the old site already publishes them); direct-billing card with insurer names |
| Couve Health (Vancouver) | couvehealth.com | ICBC as its own nav item; "why we're different" two-step model; Google reviews inline | ICBC card and FAQ; an "approach" section with a clear thesis (from the feet up) |

Table stakes in this market: online booking button in the header, direct billing named, ICBC mentioned, Google rating shown, conditions list, mobile sticky actions.
Opportunities nobody uses: naming the practitioner and showing a real face above the fold (all three use stock-looking treatment photos); publishing fees; a first-visit walkthrough; evening and Saturday hours as a selling point.

## Design decisions
- **Palette** from the clinic's world: the Hycroft building's white and glass (paper #F5F7F6, white cards, pale sky #E4ECF6 for alternate sections), the navy and gold of the old site's own "Book online" button (#1B3A6B, #D8A33D), and the chambray blue Dr. Horowitz wears in every photo (#2E5EA8).
- **Type**: Young Serif for headlines (warm, low-contrast, friendly, uncommon) and Figtree for body and UI.
- **Signature element: the plumb line.** A posture assessment is measured against a plumb line (ear, shoulder, hip). It hangs beside the hero portrait with landmark ticks and a gold bob that draws itself in on load, and the gold tick-and-bob mark repeats as the eyebrow marker and favicon. The portrait has no mask; the line is the device.
- **Hero**: real studio portrait of Dr. Horowitz, 6-word headline "Hands-on care, from the feet up." (his own phrase), eyebrow naming South Granville and the building, facts line with 20+ years, 4.8/62, direct billing, 6:30 pm and Saturdays, two CTAs, and a proof card with the published first-visit fee.
- **Structure**: hero → trust strip → care (4 groups + top-10 conditions) → first visit (steps, fees, direct billing, ICBC) → team → approach + Stretch of the Day → reviews → FAQ → visit → footer. Single page, 10 sections, 5-item nav.
- **Motion**: Lenis + GSAP ScrollTrigger per the animated-scroll playbook: hero word split, fade-ups, stagger rows for cards, one masked parallax photo (wave mask in the approach section), image-reveal on the mannequin and stretch photos, plumb line draw-in. Everything switches off under prefers-reduced-motion (verified).

## What was built
- Hero: portrait, plumb line, headline, facts, Book + Call, first-visit proof card.
- Trust strip: 4.8 (62 reviews), 20+ years, direct billing, ICBC, late and Saturday hours.
- Care: chiropractic, custom orthotics, licensed acupuncture, registered massage therapy, each with a Book link; top-10 conditions.
- First visit: four-step walkthrough with the mannequin photo, fee table, direct billing insurers and payment, ICBC card.
- Team: Dr. Horowitz, Dr. Koren, Jack Hsu with real photos, credentials and focus tags; RMT note.
- Approach: "Find the source, not just the symptom" with the open-hands portrait (masked parallax), four points, his own quote; Stretch of the Day block.
- Reviews: Google 4.8/62 card and six real quotes, first names only.
- FAQ: eight questions from the old site's pages and the reviews.
- Visit: address, phone, email, hours table with today highlighted, building photo, map embed, Book + Directions.
- Footer with credit; sticky Call / Book bar on mobile.

## Assumptions
- "Over 20 years at Granville and 16th": CMCC 2000 graduate, a reviewer first saw him "about 20 years ago", research notes say 20+ years. Exact opening year not published.
- Fees shown because the old site publishes them; chiropractic only. Orthotics, acupuncture and massage fees are not on the site, so "quoted at your visit".
- The four-step first visit is a plain rewording of the site's "consultation, postural and spinal examination, diagnosis, treatment plan"; the site's "unique 5-step process" is never spelled out anywhere, so it is not claimed.
- "Gentle" comes from the reviews (and the neck-pain page); "honest referrals" from the posture and neck-pain pages, which repeatedly say they refer when another assessment is more appropriate.
- Acupuncture on Wednesdays and Thursdays, per the acupuncture page.
- "The 10 Granville bus stops outside": the 10 route runs along Granville St through South Granville. Confirm the nearest stop.
- Hours are Google's. The old site only says "evening and some weekend appointments".
- Stretch of the Day: the site advertises a free newsletter and YouTube series but no sign-up link or channel URL was captured, so the button is a mailto. The photo is the clinic's own 2010 image from the site; the person is not identified.

## Open questions for the owner
- Is Dr. Dana Koren still practising at Hycroft, and on which days? Any bio or credentials to add?
- Jack Hsu or Parisa Ehsan for acupuncture (or both)? Hours?
- Who are the RMTs? Names, days, and whether massage is still offered at this address.
- Are the fees ($95 / $60 / $80) current? Orthotics and acupuncture pricing to list?
- Is the Jane App link the one he wants on every Book button (it is branded Vancouver Orthotics)?
- Parking: is there a lot or validated parking at the Hycroft building? (Not published anywhere, so the site says nothing.)
- Current insurer list for direct billing (the published list is from 2021).
- The Hypervolt and the "Shop" page: keep or drop?
- Newsletter sign-up URL and YouTube channel link for Stretch of the Day.

## Needs from the owner
- Real photos of: the treatment room, the front desk, the suite entrance, the Hycroft building at better than 388 px, Dr. Koren at better than 321 px, any RMTs, and an adjustment or posture assessment in progress.
- Confirm: team roster and days, fees, direct-billing list, parking, exact year the practice opened.

## Old-site problems verified
Screenshots confirm research.json: a text-only header stacking two doctors' names, the address, phone, email and five social icons before any content; a second row of seven uppercase buttons including "SHOP NOW"; a third row of nine nav items; a three-image strip (two faces and the building) with a chat widget over it; "Welcome to…" SEO paragraphs; copyright 2023; no booking button in the first screen on mobile. On the phone screenshot nothing but the header and button rows fits above the fold.

## QA
Desktop 1440 and iPhone 15 (393 wide) checked with playwright-cli: no horizontal overflow (scrollWidth equals innerWidth, no element past the viewport edge) · no console errors or warnings · no broken images · every local asset exists · external links verified (Jane App, Google Maps link and embed, jsDelivr, Google Fonts, web.soichirosaimon.com all load) · reduced-motion emulation renders fully static with every element visible (`no-motion` set, 0 hidden elements) · `node --check` passes on main.js, motion.js, services.js · map embed renders · today's hours row highlights · mobile menu, sticky bar and footer checked in viewport shots. Full-page capture on the iPhone profile stitches duplicate frames (Playwright + Lenis artifact; section offsets sum to the real 14,456 px height), so mobile was judged section by section.

## Placeholder / generated images
None. Every photo is the clinic's own, from vancouverchiropractic.net.
