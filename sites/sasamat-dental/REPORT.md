# Sasamat Dental — build report

Local preview: http://localhost:8104/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/sasamat-dental/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Sasamat Dental (谢斌牙医诊所 on their WeChat card) | Old site, Google photo |
| Category | Dental clinic (general, orthodontic, surgical, cosmetic) | Old site |
| Address | 3780 W 10th Ave, Vancouver, BC V6R 2G4 | Google, old site |
| Phone | (604) 224-3288 · emergency (778) 709-8886 | Google, old site |
| Email | thedentist@telus.net | Old site |
| Hours | Mon–Sat 10 am – 6 pm, Sun 10 am – 5 pm | Google (see conflict) |
| Booking | None online; phone and in-page request form | Old site has no booking |
| Ratings | Google 4.6 (194) | Google |
| Team | Dr. Bin (Sean) Xie (Harbin Medical University 1995, registered general dentist in Vancouver since 2014; braces, bone grafting, root canals, wisdom teeth, Botox, Zoom), Dr. Shimae Soheilipour, Dr. Shuwen, Wendy (hygienist) | Old site (Dr. Xie bio), Google reviews (other names) |

**Conflicts between sources:**
- Hours: Google says Mon–Sat 10–6, Sun 10–5. The old site says Mon–Sat 9:00–6:30, Sun 9:00–5:00. The brief says Google wins; the site uses Google. Owner must confirm.
- Years: the old site shows "19 Years experience" next to template filler numbers ("82880 Lovely shortcodes"), so it was not trusted. The site only says Dr. Xie has practised in Vancouver since 2014 (his own bio).

## Sources used
- Old website sasamatdental.ca: services list, Dr. Xie bio, emergency line, email, WeChat mention.
- Google Business Profile (via research.json): hours, rating, review count, six review quotes, team names, review themes.
- Google owner photos: one real interior photo (reception). The second interior image was a Sinclair Dental 3D render, not a photo, and was not used. The third was a WeChat QR card, not used.
- Old-site images: the Dr. Xie portrait was kept; the three service images and hero smile are stock and were not used.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Crosstown Dental | 5.0 (602) | crosstowndental.ca | Google rating badge in the hero, request form with purpose / preferred day / time sitting next to the hours, "one-stop shop" in-house block, FAQ, hours in footer | Yes: rating card, form fields, in-house block, FAQ, 7-day hours everywhere |
| Kits Point Dental | — | kitspointdental.ca | Real interior photos throughout, "Since 1988", new-patient and emergency cards, neighbourhood in the H1 | Yes: real photo only, neighbourhood eyebrow, new-patient and emergency content; no stock |
| Atlantis Dental Yaletown | — | atlantisdental.ca | 7-day hours listed in the footer, floating Book button, dentist profile with credentials | Yes: sticky Book/Call bar on mobile, credentials on Dr. Xie's card; no pop-up promo bar |

Table stakes in this market: phone in the header, a request/book action in the nav, hours visible, services grouped, a dentist bio, Google reviews, a map.
Opportunities nobody uses: none of the three say "open Sunday" up front; none are bilingual; none show the whole week at a glance. Sasamat's site leads with all three.

## Design decisions
- **Palette** from the clinic's own reception photo: warm white walls, pale birch ceiling (`--birch`), brass chair frames (`--brass`, used for stars, rules and the "today" ring), sage glass shelves (`--paper-2` alternate sections), and a deep pine green (`--pine`) for headings, the primary button and dark sections. No blue, no cream-and-terracotta.
- **Type**: Young Serif (single-weight, warm, rounded) for headlines, Figtree for body and UI, system CJK fonts for the Chinese lines.
- **Signature element**: the *week strip*, seven cells all lit because the clinic is open every day, with today ringed in brass; it appears in the hero and the visit block. The structural device encodes the one true thing that sets this clinic apart.
- **Second motif**: the faceted corner of the reception desk, reused as the SVG mask on the hero photo and the FAQ photo (parallax drifts behind the fixed mask).
- **Structure**: hero → trust strip → services in four groups → new patients + request form → team → "how we work" band → reviews → FAQ → visit → footer. Single page, 10 sections.
- **Motion**: Lenis + GSAP per the animated-scroll playbook: word-split H1, fade-ups, stagger rows on service groups, team and reviews, masked parallax on two photos, 240px parallax on the band, all off for reduced motion.
- **Copy**: no "Welcome to", no prices, bilingual touches (中文 · English, 你们说中文吗, 中文服务) because the Mandarin-speaking team is a real differentiator in Point Grey.

## What was built
- Hero: "Open seven days a week." with Point Grey eyebrow, facts line (in-house surgery, Mandarin, 4.6 from 194), Request + Call buttons, week strip, masked parallax reception photo.
- Trust strip: rating, 7 days with hours, 中文 · English, in-house, emergency line.
- Services: four groups (Everyday care, Straightening, Surgery in-house, Cosmetic), 14 items, no prices.
- New patients: what happens, what to bring, tooth pain now, 中文服务; request form (name, phone, email, preferred day/time, reason, notes) with Formspree placeholder and demo fallback message.
- Team: Dr. Xie with photo and bio, Dr. Soheilipour, Dr. Shuwen, Wendy with monograms.
- How we work: dark parallax band, four points taken from review themes.
- Reviews: 4.6 / 194 card linking to Google, six real quotes, first names only.
- FAQ: eight questions from reviews and the old site, with the second reception crop beside them.
- Visit: address, both phones, email, WeChat note, week strip, hours table with today, Google map embed, directions.
- Footer with "Site by Sony Saimon"; sticky Call / Request bar on mobile.

## Assumptions
- "Check-ups and cleanings" is listed although the old site does not spell it out; the clinic has a hygienist (Wendy) and reviews praise the cleanings.
- Dr. Shuwen is listed as Mandarin-speaking: the research says "Mandarin-speaking dentists" (plural) and Dr. Xie is one; Dr. Shuwen is the likely second. Dr. Soheilipour is not shown as Mandarin-speaking.
- Dr. Shuwen appears with no surname because none was found; Wendy appears as "Dental hygienist" without RDH credentials.
- The hero and band use crops of the single real interior photo (© Owlook Media watermark cropped out); the owner presumably commissioned it, since it is on their Google profile.
- Hours follow Google, not the old site.
- "Bone grafting" and "Tooth extractions" are listed from Dr. Xie's bio and a review (Eric); no implant placement is claimed.
- The form is a Formspree placeholder; until an ID is set it shows a "not connected, call us" message instead of submitting.
- The clinic's Chinese name 谢斌牙医诊所 comes from their WeChat card and is used in the hero caption and footer.

## Open questions for the owner
- Are the Google hours (10–6 / Sun 10–5) correct, or the old site's (9–6:30 / Sun 9–5)?
- Do you direct-bill insurance? (The site only says "bring your plan details"; nothing stronger was claimed.)
- Dr. Shuwen's full name and credentials; whether Dr. Soheilipour speaks any language besides English.
- Which dentists do Invisalign and whitening, or is it all Dr. Xie?
- Is Botox still offered? Do you place implants as well as graft for them?
- Parking and transit directions for patients (nothing was claimed).
- Do you want the WeChat QR code on the site? It exists but was left off on purpose.
- Who should receive appointment requests (email for the Formspree form)?

## Needs from the owner
- Real photos of: the treatment rooms, the team (Dr. Soheilipour, Dr. Shuwen, Wendy, front desk), the storefront on West 10th, Dr. Xie in the clinic. The current hero photo is only 980px wide after cropping; a full-resolution copy from the photographer would be sharper on retina screens.
- Confirm: hours, insurance/direct billing wording, team names and credentials, the Chinese clinic name, Formspree recipient.

## QA
Desktop 1440 and iPhone 15 checked (full-page and section-by-section) · no horizontal overflow (scrollWidth 393 = innerWidth 393; the only elements wider than the viewport are parallax images inside overflow-hidden frames) · no console errors or page errors · no broken images · all local assets exist · external links verified (CDN scripts, fonts, Google Maps, sasamatdental.ca, web.soichirosaimon.com all 200; the Formspree placeholder and the not-yet-deployed OG URLs are expected to fail) · reduced motion emulated: Lenis off, 40/40 animated elements visible and untransformed · `node --check` passes on services.js, main.js, motion.js · mobile menu opens and closes · map embed renders · today highlighted in the hours table and week strip.

## Placeholder / generated images
None. Every image is the clinic's own (Google Business Profile photo, old-site portrait).
