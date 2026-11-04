# Broadway Family Dental Centre — build report

Local preview: http://localhost:8101/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/broadway-family-dental/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Broadway Family Dental Centre | Own site, Google |
| Category | General and family dentistry | Own site |
| Address | 383 E Broadway, Vancouver, BC V5T 1W6 (Mount Pleasant, one block east of Main St) | Own site, Google |
| Phone | (604) 283-2216 | Own site, Google |
| Email | bfdcentre@gmail.com | Own site (footer) |
| Hours | Mon closed · Tue–Wed 10–6 · Thu–Sat 9–5 · Sun closed | Google Business Profile (see conflict) |
| Booking | None online. Old site has a contact form. Demo uses an in-page request form (Formspree placeholder) + phone | Own site |
| Ratings | Google 5.0 (216) | Google |
| Team | Dr. Peter Lam, DDS (U of T 2007, with honours; Maxwell Rockman Award for radiology; 10+ years at a non-profit children's clinic). Jane, reception/assistant | Own site "Our Team"; reviews for Jane |
| Insurance | Most carriers billed directly: Pacific Blue Cross, Manulife, Sun Life, Canada Life, Green Shield, Desjardins. Participating provider with Student Care Network and My Student Plan | Own site "Our Services" and "Make an Appointment" |
| Parking | Free street parking nearby; metered on the block from 10 am at $1/hour | Own site footer |
| Services | Check-ups, cleaning, sealants, fluoride, whitening, pediatric, digital X-rays, white fillings, inlays/onlays, gum disease treatment and maintenance, root canals and endodontic surgery, Invisalign, implants, wisdom teeth, crowns/bridges, dentures, emergencies | Own site "Our Services" |

**Conflicts between sources:** the old site shows two different schedules. Its footer (every page) says Mon closed / Fri 9–5; its "Make an Appointment" and "Contact" pages say Mon by appointment / Fri closed. Google says Mon closed / Fri 9–5, and that is what the demo shows. Confirm with the owner. The old "Our Team" page says "over 14 years" serving Vancouver (written around 2021); the demo says "since 2007", the DDS year, which is safe either way.

## Old-site problems (verified against the crawl and screenshots)
- 2000s template, tiny logo, "Welcome to Broadway Family Dental Centre" heading, about 200 words on the home page: confirmed.
- Stock photo slider (model in dental chair, stock child with tooth model) plus one real reception photo: confirmed; stock not reused.
- No online booking; "Make an appointment" is a page that tells you to call or use the contact form: confirmed.
- No reviews shown, no team photos, no Google rating anywhere: confirmed.
- Cramped on phone: confirmed (phone screenshot shows a cropped stock photo and a two-line heading).
- Also found: a COVID-19 page still in the main nav, and two conflicting hours schedules.

## Sources used
- Old website: http://www.broadwayfamilydentalcentre.ca/ (home, COVID-19, Our Team, Our Services, Make an Appointment, Contact Us) via the crawl file.
- Google Maps: rating, review count, six review quotes, hours (research.json).
- Photos: the old site's slider. Of its three images, two are stock (a model in a dental chair, a stock child with a tooth model, file named `lessard-slider3`, a template asset) and were not used. One, `reception_edit`, is a real 2048×1536 phone photo of the clinic's reception and waiting area; its full-size original was downloaded and is the only photo on the demo, used as five crops.
- No Google owner photos exist for this clinic.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Crosstown Dental (Chinatown) | 5.0 (602) | crosstowndental.ca | Google rating + count right in the hero; appointment request form with purpose / preferred day / preferred time; hours and address in the header; "New patients" and "Reviews" as top-level nav | Yes: rating in hero proof card and trust strip; request form with the same fields; New patients + Reviews in nav |
| Kits Point Dental (Kitsilano) | — | kitspointdental.ca | Real photo of their own reception as the hero; "Since 1988" as a trust point; emergency, implants and Invisalign as named entry points | Yes: real reception photo hero; "Since 2007"; emergency card in New patients |
| Atlantis Dental (Yaletown) | — | atlantisdental.ca | Fixed "Book online" tab; hours in footer | Partly: sticky Call/Request bar on mobile. Rejected their stock-model hero, "Welcome to…" H1 and promo banner over the hero |

Table stakes in this market: phone in the header, request-appointment CTA, services by group, new-patient and insurance info, hours and map, Google rating shown.
Opportunities nobody uses well: a real photo of the actual clinic (Kits Point is the only one), a children-specific section, naming the receptionist, and showing actual review quotes instead of a widget. The demo does all four.

## Design decisions
- **Palette from the waiting-room photo**: chalk walls (`#F6F4EF`), pale blue wall above reception (`#E3EDF5`), oak herringbone (`#C9A273`), walnut desk (`#4B3B2F`), the cobalt panel behind the desk (`#1F4FB8`) as the single action colour. Nothing is "dental blue" by default; it is the blue in their room.
- **Signature element**: the herringbone wall, redrawn as a CSS/SVG pattern. It sits behind the hero photo on the right half, as the small hatch mark in every eyebrow, and in the favicon chevrons. The hero photo is masked in a soft pebble shape with parallax, per the animated-scroll playbook.
- **Type**: Fraunces (soft optical serif) for headlines, Figtree for body. Warm and credible for a family practice; nothing like the Aladin reference's grotesque.
- **Structure** (dental blueprint, 11 sections): hero → trust strip → services by group → children → new patients → team → approach band (big parallax) → reviews → FAQ → request form → visit → footer. Children got its own section because it is the clinic's unusual strength (ten years at a non-profit kids' clinic; multiple reviews about kids).
- **Motion**: Lenis + GSAP ScrollTrigger from `animated-scroll.md`: word-split H1, fade-ups, stagger rows (services, new patients, team, reviews), two masked parallax photos (hero, kids) and one full-bleed parallax band. Off under `prefers-reduced-motion`.
- **No prices**, per the brief. Copy is their own wording tightened ("painless", "explains options", "patient with children", "direct billing", parking line) plus review language.

## What was built
- Hero: eyebrow "Mount Pleasant · 383 East Broadway", 6-word H1, facts line (DDS, since 2007, 5.0 from 216 reviews, direct billing, Saturdays), Request + Call CTAs, masked parallax reception photo, proof card with a real review.
- Trust strip: 5.0 ★ 216 reviews · Since 2007 · Direct billing · Saturdays · Kids welcome.
- Services: 8 groups (check-ups, children, fillings, gum care, root canals, Invisalign, implants/surgery, emergencies), rendered from `services.js`.
- Children: toy-shelf crop in a pebble mask, Dr. Lam's kids-clinic background, four points, CTA.
- New patients: what to bring, insurance and payment (six insurer chips + student plans), emergency card with phone and hours.
- Team: Dr. Peter Lam (credentials, award, bio) and Jane, names only, no photos.
- Approach band: full-bleed parallax of the waiting room, five points (explained first, painless, digital X-rays, reminder texts, clean rooms with HEPA/UV-C).
- Reviews: Google 5.0 (216) card + six real quotes, first names.
- FAQ: 8 questions (insurance, student plans, emergencies, new patients, kids, Invisalign, parking, payment).
- Request an appointment: Formspree placeholder form (name, phone, email, preferred day, preferred time, reason, notes) + phone.
- Visit: address, phone, email, hours table with today highlighted, parking and transit, Google map embed, front-desk photo.
- Footer with "Site by Sony Saimon". Sticky Call / Request bar on mobile.

## Assumptions
- Hours follow Google (Mon closed, Fri 9–5), not the old site's appointment page.
- "Since 2007" = DDS graduation year; the old site only says "over 14 years" serving Vancouver.
- "Dad himself" and "reminder texts" come from reviews and are presented as such.
- The emergency wording ("call and we will fit you in as soon as we can") is inferred from "Dental Emergency" being a listed service and the old site's FAQ heading "Do you accept emergencies?" (the answer text was not published).
- HEPA air purifiers with UV-C and the enclosed aerosol room are from the COVID-19 page and assumed still in place.
- Transit line (99 B-Line and 9 at Main & Broadway; 3 and 8 on Main) is from the address, not from the clinic.
- The new-patient form exists on the old site as a download; the demo tells patients to email it rather than linking a file we do not have.
- Insurance names are written in their current brand form (Sun Life, Canada Life, Green Shield).

## Open questions for the owner
- Friday and Monday hours: which schedule is right?
- Is Dr. Lam the only dentist? Any hygienist to name?
- Jane's exact title.
- Does the clinic want online booking (Jane App, etc.) instead of a request form? If so every Book button changes to that link.
- Does the clinic still see new patients and emergencies the same day?
- Keep the gmail address public, or use a domain email?

## Needs from the owner
- Real photos of: Dr. Lam, Jane, a treatment room, the exterior/signage (not Street View), kids in the chair with consent. Right now the whole site runs on one photo of reception.
- The new-patient PDF form to link.
- A Formspree (or other) form id to receive requests, or a booking link.
- Confirm: hours, insurer list, student plans, that "painless" and "direct billing" can be claimed in marketing.

## QA
Desktop 1440 and iPhone 15 (393) checked with playwright-cli · scrollWidth = innerWidth on mobile (393 = 393) · no console errors or page errors · no broken images · every local asset exists · external links return 200 (Google Maps, studentcare.ca, mystudentplan.ca, web.soichirosaimon.com, jsDelivr CDN, Google Fonts) · reduced-motion emulation: `no-motion` class set, Lenis not started, 0 hidden elements · `node --check` passes on main.js, motion.js, services.js · mobile menu, sticky bar, FAQ accordion, hours "today" badge and map embed verified in viewport shots. Fixes made during QA: the brand name wrapped to two lines on phones (tightened); the Google Fonts URL was malformed (Fraunces SOFT axis) and fell back to Georgia (fixed, fonts confirmed loaded).

## Placeholder / generated images
None. All five images in `photos/` are crops of the clinic's own reception photo. No stock, no AI.
