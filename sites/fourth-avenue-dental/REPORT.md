# Fourth Avenue Dental Clinic — build report

Built 2026-11-02 as a **demo to pitch the owner**. Local preview: http://localhost:8105/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/fourth-avenue-dental/ (not deployed; waiting for your go).

## Business facts
| | Value | Source |
|---|---|---|
| Name | Fourth Avenue Dental Clinic | Website, Google |
| Category | General and cosmetic dentistry (implants, crowns, bridges, Invisalign and braces, check-ups, root canal, extractions, fillings incl. gold foil, veneers, whitening, Botox Cosmetic, "artistic dentistry") | Website service pages |
| Address | 1905 W 4th Ave, Vancouver, BC V6J 1M7 (Kitsilano) | Website, Google, business card photo |
| Phone | (604) 736-2505 | All sources |
| Email | appts@4thavenuedental.ca | Website contact page |
| Hours | Mon–Thu 8–6, Fri 8–8, Sat 8–6, Sun closed | Google Business Profile |
| Booking | Calendly: "Book Now – Dental" → https://calendly.com/appts-2 ; "Book Now – Hygiene" → https://calendly.com/nishantgoswami007 (both show "Nishant Goswami — 15 Minute Meeting") | Website header links, checked live |
| Ratings | Google 4.1 (147) | research.json, 2026-11-02 |
| Owner | Dr. Nishant Goswami ("owned and operated by") | Website home and About |
| Years | "over 15 years" in Kitsilano | Website |
| Socials | Instagram @dr.nishantgoswami007, Facebook /4thavedental | Website footer links (both return 200) |

**Conflicts between sources**
- **Sunday hours**: website contact page says Sunday 9 am – 5 pm; Google says closed. Site uses Google. Confirm.
- **Who owns / practises**: website says Dr. Nishant Goswami; Google owner photos still show the old "Dr John cares!" logo and a business card for Dr. John Christensen. The site names only Dr. Goswami and does not use the portrait photo (g_12), which is probably Dr. Christensen. Confirm whether Dr. Christensen still practises there.
- **Booking**: both Calendly pages are a generic "15 Minute Meeting" on Dr. Goswami's personal calendar, not a dental scheduler. The brief says every Book button goes to the existing booking link, so they do; see open questions.

## Sources used
- Existing website https://www.4thavenuedental.ca/ (home, about, contact, new patients, FAQ, reviews, both book-now pages, 13 service pages) — Webware.ai template.
- Google Business Profile: rating, hours, 5 review quotes (from research.json), 9 owner photos.
- Old-site screenshots (phone and desktop) and crawl text supplied in the brief.

## Old-site problems (verified)
- Stock hero ("Quality · Dentistry Services for over 15 years" with a stock model pointing at her teeth) and a red "Email Now" button; on mobile the phone number is text, not a tap-to-call link.
- Seven-item nav plus a Services dropdown of 13 pages; long paragraphs, SEO-stuffed titles ("Root Canal New Westminster BC").
- Calendly links are only reachable from "Book Now" in the header, and land on a 15-minute meeting, not an appointment type.
- No hours on the home page, no Google rating, the home page uses a stock team photo while the real team photo sits unused on Google.
- Every service page repeats the same "easily accessible from West Vancouver, North Vancouver…" boilerplate.

## Competitors studied
| Competitor | Website | What they do well | Adopted? |
|---|---|---|---|
| Atlantis Dental Yaletown | atlantisdental.ca | Persistent "Book online" tab; email and phone in the top bar | Book button fixed in the nav and in the mobile sticky bar. Avoided their "Welcome to…" headline, promo bar and stock model. |
| Kits Point Dental (Kitsilano) | kitspointdental.ca | Real interior as hero, serif headline, "Kitsilano Dentist" framing, "since 1988" fact | Real reception photo in the hero, serif display face, neighbourhood eyebrow, years fact. Avoided their chat pop-up that covers the hero on mobile. |
| Crosstown Dental | crosstowndental.ca | Hours, address and phone in the header; Google 5.0 / 602 badge under the hero CTAs; request form with purpose / preferred day; hours table | Rating card on the first screen, "open now" line, hours table with today highlighted. |

Table stakes in this market: real photo hero, Book + Call, Google rating, new-patient block, services list, hours, map. Opportunities nobody uses: the "open now / opens at" line, early-and-late hours as a headline fact, the gold foil craft as a story, plain-language service copy.

## Design decisions
- **Palette** from the clinic's own rooms and logo: porcelain page (#F5F4F0), espresso ink (#231B18, the reception wall), powder blue alternate sections (#EAEEEF, the reception desk), 24-carat gold accent (#B4862C / #D9B65C, the logo's gold and the gold foil story). The logo's red is deliberately not used (red reads as alarm in dentistry).
- **Type**: Young Serif for headlines (warm, rounded, a little old-fashioned, matches a 15-year neighbourhood clinic) with Hanken Grotesk for body and UI.
- **Signature**: the heart from their own logo as a CSS mask on the hero photo and again on the lounge photo, with the photo drifting behind it on scroll; a gold hairline before every eyebrow. Plus a live "Open now until 6 pm / Closed now, opens tomorrow at 8 am" line in the hero proof card and the visit block.
- **Motion**: Lenis + GSAP ScrollTrigger per the Westeck playbook: hero words stagger in on load, fade-ups, staggered card rows, parallax on the two heart masks and the team band. Fully static for reduced-motion users (verified).
- **Structure**: single page. Nav → hero → trust strip → services (3 groups, 14 items) → new patients → team → team photo band → approach + gold foil → reviews → FAQ → visit → footer. Sticky Call / Book bar on mobile.

## What was built
- Hero: "Gentle dentistry on West 4th.", facts line (owner, 8 am six days, Fridays to 8, 15+ years, insurance help, payment talk), Book online (Calendly) + Call, heart-masked reception photo, proof card with open-now line and Google 4.1 (147).
- Trust strip: 15+ years · 8 am start · Fridays to 8 pm · Insurance help · In-house care.
- Services: Everyday care / Repair and replace / Smile and cosmetic, each item in one or two plain sentences from their pages; Book a dental visit + Book a hygiene visit (the two Calendly links).
- New patients: before you come, at the appointment, paying for care, tooth pain or accident (knocked-out tooth advice from their FAQ), plus the real "New Patients Welcome" window photo.
- Team: Dr. Nishant Goswami (dentist and owner, holistic approach from their site, Instagram link) and the hygiene / front-desk team (from reviews); full-width team photo band from Google.
- Approach: "Map first. Then plan." with four checks and the 24-carat gold foil feature (claims attributed to the clinic), heart-masked lounge photo.
- Reviews: Google 4.1 (147) card + the 5 real quotes supplied, first names only.
- FAQ: 8 questions from their FAQ page, new-patient page and reviews.
- Visit: address, phone, email, Instagram, Facebook, open-now line, hours table with today highlighted, transit/parking note, Google map embed, Book + Directions.
- JSON-LD `Dentist` with address, phone, hours, rating, sameAs. OG tags with absolute URLs. Favicon and touch icon drawn from the logo heart.

## Assumptions
- Hours from Google over the website (Sunday closed).
- "Help with insurance claims" and "payment arrangements" come from review themes (Jimmy: "made the payment process manageable"), not from a written policy on their site. Direct billing is not claimed.
- "15+ years" is their own phrase ("over 15 years"); no founding year is stated anywhere, so none is shown.
- The gold foil paragraph ("fewer than 250 practices", "hosts a gold foil study club") is their site's claim and is worded as such ("by the clinic's own count").
- "In-house care, fewer referrals" paraphrases their artistic-dentistry page ("care is provided in-house whenever possible").
- Cross street "at Cypress" from the 1900-block numbering of W 4th; transit/parking line is generic ("buses along West 4th", "side streets around Cypress").
- The team photo from Google is assumed current; one person in it is likely Dr. Christensen.
- The "15 Minute Meeting" Calendly is assumed to be how they want to be booked, because their own site links to it.
- No dental credentials (DDS/DMD, school) are shown because the site states none.
- The "no charge for first x-rays and exam" line from one review is not used.

## Open questions for the owner
- Is Calendly the booking path you want, or should "Book online" open a request form / a proper scheduler? The current Calendly offers only a 15-minute meeting.
- Sunday: open 9–5 (website) or closed (Google)?
- Does Dr. John Christensen still practise at the clinic? Should the team section name hygienists?
- Do you direct-bill insurance, or help with claims only?
- Is the gold foil study club still hosted at the clinic, and are gold foil fillings still offered under your ownership?
- Still offering Botox Cosmetic and traditional braces?
- Parking advice for patients (street, lot, validated)?
- A line on emergency same-day visits, if you offer them.

## Needs from the owner
- Real photos of: Dr. Goswami (none exist on the site or Google), a treatment room, the storefront from West 4th, a current team photo.
- Confirm: hours, Calendly booking, insurance/direct billing wording, gold foil claims, who is on the team.
- Credentials for Dr. Goswami (degree, school, years practising) if he wants them shown.

## QA
Desktop 1440 and iPhone 15 (393) checked · scrollWidth equals innerWidth on both · 0 console errors · 0 broken images · every local asset exists · external links (Calendly ×2, Instagram, Facebook, Google Maps, fonts, jsDelivr ×4, web.soichirosaimon.com) return 200 · `node --check` passes on all three JS files · reduced-motion emulation: Lenis off, `no-motion` class set, 0 hidden or transformed elements, page fully static · mobile menu, FAQ, hours highlight, open-now line and map embed exercised in Playwright.

## Placeholder / generated images
None. `reception.jpg` is from the clinic's own website; `team.jpg`, `window.jpg` and `lounge.jpg` (a crop of their 360° interior) are the owner's photos from the Google Business Profile. The old site's stock photos were not used.
