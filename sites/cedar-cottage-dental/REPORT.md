# Cedar Cottage Dental — build report

Local preview: http://localhost:8102/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/cedar-cottage-dental/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Cedar Cottage Dental | Own site, Google |
| Category | Dental (general, family) | Own site |
| Address | 3935 Knight St, Vancouver, BC V5N 3L8 (Kensington Point, Knight and Kingsway) | Own site, Google |
| Phone | (604) 684-7717 | Own site, Google |
| Email | info@cedarcottagedental.com | Own site |
| Hours | Mon, Tue, Thu, Fri, Sat 10 am–6 pm; Wed and Sun closed | Google (see conflict) |
| Booking | None online; contact form only. Site uses a request form (Formspree placeholder) + phone | Own site |
| Ratings | Google 4.9 (48) | Google |
| Team | Dr. Tiffany C. Cheung, Dr. Warrick Yu, Dr. Camellia Chan | Own site "Our Dentists" (see conflict) |
| Services | Exam and hygiene, fillings/repairs, root canal, crowns, extractions, implants (About page); Invisalign and Botox Cosmetic (Dr. Chan is a certified provider; a review mentions Botox by Dr. Cheung) | Own site, reviews |

**Conflicts between sources:**
- Hours: the old site's footer says Wed 10–12 and **Friday closed**; Google says Wed closed and Fri 10–6. The brief says to use Google, so the site shows Google's hours. Must be confirmed.
- Team: Google lists only Dr. Cheung; the old site lists three dentists. The site shows all three as the owner-written source, flagged below.

## Sources used
- Own site: cedarcottagedental.com (home, About, Our Dentists, Contact) via the crawl file; two photos downloaded from its Squarespace CDN at full size (storefront, reception interior) plus the logo.
- Google Maps: rating, review count, hours, six review quotes (research.json). No owner photos on Google.
- No Instagram or booking platform found.

## Old-site problems verified
From the screenshots and crawl: a "WE ARE OPEN!!" COVID notice from 2020 is still the first thing on the page, with mask/2-metre rules and "not accepting walk-ins"; the only call to action is a Contact Us link; no services list anywhere on the home page (buried in a paragraph on About); hours in the footer contradict Google; italic body paragraphs; the Squarespace template centres everything under a large logo with no booking path. Google listing unclaimed (per research.json).

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Crosstown Dental | 5.0 (602) | crosstowndental.ca | Google rating badge in the hero; request form right under the hero with purpose, preferred day and time; hours table beside it; hours and address in the header | Yes: rating in hero and strip, request form with reason/day/time, hours table and open-now line |
| Kits Point Dental | — | kitspointdental.ca | Real interior photo as the hero; "Since 1988" fact; named new-patient and emergency entries | Yes: real reception photo in the hero, "10+ years" fact from reviews, new-patient section with emergency line. Avoided their stock-photo service tiles |
| Atlantis Dental Yaletown | — | atlantisdental.ca | Sticky "Book online" tab; CDCP (Canadian Dental Care Plan) banner; 0% financing | Partly: sticky mobile Call/Request bar. Avoided "Welcome to…" headline, promo bar over the hero and stock portrait. CDCP acceptance is an open question for the owner |

Table stakes in this market: request-appointment form, services list, new-patient page, team bios with credentials, Google rating, hours and map, emergency line.
Opportunities nobody uses well: a real photo of the clinic's own interior as the hero (Kits Point does; most use stock), review quotes tied to a theme (gentle, 10+ years), an "open now" line, and a quiet non-template look.

## Design decisions
- **Palette** from the reception photo: white quartz desk (`#FAF8F4` page), grey-taupe chevron tile (`#EEEAE3` alternate sections), brass light fittings and cabinet pulls (`#A98634` accent), charcoal signage letters (`#26241F` text). Brick red from the storefront only for the required-field marks.
- **Type**: Marcellus (an inscriptional roman, like the raised serif capitals on their wall and sign) for headlines, Figtree for body and UI.
- **Signature element**: the hero photo sits inside a house-shaped mask drawn from the clinic's own house-and-tooth logo (`mask-cottage.svg`), with the reception's wall sign visible inside the house; the chevron tile wall is echoed as a faint pattern behind the hero.
- **Hero**: "Gentle dentistry, close to home." (gentle is the word every review uses; cottage/home is the brand), eyebrow naming Kensington–Cedar Cottage and Knight and Kingsway, facts line (address, 4.9/48, Saturdays, all ages), Request + Call CTAs, a live "open now / opens at" line, and a captioned Google review card as the proof element.
- **Structure**: dental blueprint, single page, 10 sections. Services are laid out as a treatment menu (group on the left, items with one line each on the right), no icon grids, no prices.
- **Motion**: Lenis + GSAP per animated-scroll.md: hero word split, fade-ups, stagger rows (service items, new-patient columns, dentist cards, reviews), two parallax photos (masked hero, full-bleed storefront band), reduced-motion switch-off.

## What was built
1. Hero: house-masked reception photo, headline, facts, two CTAs, open-now line, review proof card.
2. Trust strip: 4.9/48, all ages, Saturdays, UBC-trained, by appointment.
3. Services: four groups (check-ups and hygiene; fillings and repairs; extractions and implants; straighter teeth and cosmetic) with 12 items.
4. New patients: what to bring, what happens, insurance/pain/hours, with CTAs.
5. Dentists: three cards, names only, credentials and bios from their own page.
6. Approach band: storefront photo with parallax, the four commitments from their About page.
7. Reviews: rating card linking to Google and six real quotes with first names and a theme.
8. FAQ: eight questions from their pages and reviews.
9. Request an appointment: form (name, phone, email, preferred day, preferred time, reason, message) plus phone/email card.
10. Visit: address, hours table with today highlighted, transit note, map embed, directions.
Footer with "Site by Sony Saimon" credit; sticky Call / Request bar on mobile.

## Assumptions
- Google hours used over the old site's footer (brief says so); the footer is likely stale.
- All three dentists on the old site still practise there.
- Invisalign and Botox are still offered (Dr. Chan is listed as a certified provider; a review mentions Botox by Dr. Cheung).
- "What to bring" list (insurance details, medications, previous X-rays) is standard practice, not from their site.
- Insurance wording avoids claiming direct billing ("ask about direct billing when you book"); emergencies are "we look for the earliest opening", not a same-day promise.
- Transit note ("buses run along Knight Street and Kingsway") is from their own line "accessible by walk, transit, or car" plus the location; no parking claim is made.
- "Patient for 10+ years" and the UBC facts come from reviews and bios; no founding year is claimed anywhere on the site.
- No prices, per the dental rule.

## Open questions for the owner
- Which hours are right: Google (Wed closed, Fri open) or the old site (Wed 10–12, Fri closed)?
- Are Dr. Yu and Dr. Chan still with the practice? Any hygienists or front-desk staff to name?
- Do you offer direct billing to insurers? Do you accept the Canadian Dental Care Plan (CDCP)?
- Is Invisalign still offered, and by whom? Botox: which dentists provide it?
- Do you want an online booking link (Jane App etc.) instead of the request form? Who should receive form requests (email)?
- Parking: is there patient parking at Kensington Point, or street parking only?
- Any languages spoken besides English (common in this neighbourhood and worth stating)?
- Should the old COVID notice be retired entirely, or is there any current policy to show?

## Needs from the owner
- Real photos of: Dr. Cheung (and the other dentists), the treatment rooms, the team at the front desk. The site currently has only two usable photos (reception and storefront) and no portraits.
- Confirm: hours, team, insurance/direct billing, Invisalign/Botox, Formspree id or booking link, logo file (SVG) if one exists.

## QA
Desktop 1440 and iPhone 15 (390) checked after scrolling · scrollWidth = innerWidth on mobile (393x393 and 390x390) · no console errors · no broken images · every local asset exists · external links verified (CDNs 200, fonts 200, Google Maps redirect 302, own site 200; the web.soichirosaimon.com path 404s until deployed; the Formspree placeholder returns 405 on GET as expected) · reduced-motion emulation renders the whole page static with every element visible · `node --check` passes on services.js, main.js, motion.js · mobile menu overlay, map embed and sticky bar checked in viewport shots.
Note: full-page captures of the iPhone 15 device emulation (3x) exceed Chromium's 16384px texture limit and come out tiled; the 390px 1x capture and viewport section shots were used instead.

## Placeholder / generated images
None. Both photos are the clinic's own, from cedarcottagedental.com.
