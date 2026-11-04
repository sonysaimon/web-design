# Lotus Dental — build report

Local preview: http://localhost:8103/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/lotus-dental-burnaby/

## Business facts
| | Value | Source |
|---|---|---|
| Name | Lotus Dental (site header: "Dr. Basant A. Rahman Family Dentistry") | lotusdental.ca, Google |
| Category | Dentist, general and family dentistry | lotusdental.ca |
| Address | Unit 610 – 4445 Lougheed Hwy, Burnaby, BC V5C 0E4 | lotusdental.ca, Google |
| Phone / fax | (604) 294-1455 / 604-294-1465 | lotusdental.ca |
| Email | lotusdental@shaw.ca | lotusdental.ca |
| Hours | Mon, Tue, Thu 11 am – 8 pm · Wed 8 am – 2 pm · Fri–Sun closed | Google (identical on lotusdental.ca) |
| Booking | None online. Old site's "Make an appointment" is a 4-field contact form | lotusdental.ca |
| Ratings | Google 4.8 (72) | research.json |
| Dentist | Dr. Basant A. Rahman: BDS Alexandria University 2000; MSc Endodontics Ain Shams University 2012; licensed in Canada 2013; practising in Vancouver since 2014; opened Lotus Dental in Burnaby 2016; former part-time instructor UBC Faculty of Dentistry and Dentachieve; CDSBC and BCDA member; English, French, German, Arabic | lotusdental.ca/meet-the-doctor |
| Team | Sharon, Tala, Noor (reception) | research.json |
| Insurance | "We accept your insurance plans including Ministry of Social Development, BC Healthy Kids Programs, and Canadian Dental Care Plan (CDCP)" | lotusdental.ca |
| Services | Consultation, digital x-rays, cleaning and scaling, whitening, mouthguards, fillings and repairs, sealants, extractions, wisdom teeth, root canal, veneers, bonding, caps and crowns, bridges and implants, dentures, gingivitis / gum inflammation, pediatric, emergency appointments | lotusdental.ca/treatments-services |
| Amenities | Wheelchair accessible, close to public transit, parking, free Wi-Fi, refreshments | lotusdental.ca/treatments-services |
| Location note | "Across the street from Brentwood town centre and brentwood skytrain station" | lotusdental.ca/location |

**Conflicts between sources:** none. Google hours and the site's hours match. The site writes the phone as 1-604-294-1455; shown as (604) 294-1455.

## Sources used
- Current website lotusdental.ca (6 pages crawled: home, meet the doctor, treatments and services, make an appointment, location, about). Portrait and logo downloaded from it at full size.
- Google Business Profile: rating, review count, six review quotes, four owner photos (two of the 4445 Lougheed entrance, the logo, one reception interior).
- Old-site screenshots `shots/lotus.jpg` and `shots/lotus-d.jpg`.

## Old-site problems, verified
Jimdo Creator template (the About page is literally Jimdo's "This site was created with Jimdo Creator!" boilerplate). Home page: logo on a stock mountain photo, a yellow band, "Welcome to Dr. Basant A. Rahman Family Dentistry", a mission quote and the address. No services on the home page, no hours above the fold, no team, no reviews, no booking (the appointment page is a name/phone/email/message form), no map, no mention of same-day emergencies or CDCP where anyone would see it, the "10 years" fact nowhere. Mobile: hamburger, logo, mountains, yellow band, then text; the first tap-to-call is far below the fold. Cookie banner for Google Analytics.

## Competitors studied
| Competitor | Website | What they do well | Adopted? |
|---|---|---|---|
| Crosstown Dental (Vancouver) | crosstowndental.ca | Google rating badge in the hero; request form with purpose, preferred day and time right under the hero, hours beside it; services in four grouped columns; FAQ accordion; sticky "Request Appointment" | Yes: proof card and rating in the hero, request form with reason / preferred day / preferred time, grouped services, FAQ |
| Kits Point Dental (Vancouver) | kitspointdental.ca | Services framed as the patient's question ("Are you in pain?", "Missing a tooth?"); "New patients always welcome" form at the bottom; CDCP named; alternating photo/text bands | Yes: each service card opens with the patient's question; CDCP in hero, new-patients section and FAQ |
| Atlantis Dental (Yaletown) | atlantisdental.ca | Phone and email in the top bar; mobile sticky "Book online" bar | Yes: phone in the header, sticky Call / Request bar on mobile. Not adopted: promo bar over the hero, stock smile photo, "Welcome to" headline |

Table stakes in this market: hero with one call to action, request-appointment form, services by group, new-patient and insurance info, team bios, Google reviews, FAQ, hours and map, mobile sticky bar.
Opportunities nobody uses: naming the dentist's actual specialty (endodontics) as a reason to choose the clinic; evening hours as a headline fact; a real photo of the clinic instead of stock smiles; honest "only what you need" positioning, which is what Lotus's reviews already say.

## Design decisions
- **Palette** from the clinic's own logo and reception: lotus blue `#266092` (sampled from the logo background), deep blue `#143D62` / ink `#0E2A44` for bands, gold `#C9A43E` / `#E3C56A` (the logo's gold), marble off-white `#F6F4EF` from the reception counter. White page, blue bands for the two sections that matter most (root canal, request form).
- **Type**: Marcellus for the wordmark and eyebrows (the logo's letterspaced Roman caps), Newsreader for headlines and quotes, Source Sans 3 for body and UI.
- **Signature element**: the lotus petal. The hero photo sits inside a petal-shaped mask and drifts behind it on scroll; the doctor's portrait sits in a bud-shaped mask; every eyebrow carries a short gold rule like the line under the lotus in the logo. Nothing else is decorated.
- **Hero**: "Only the dentistry you need." is the most repeated idea in the clinic's reviews (honest, no unnecessary treatment). The photo is the clinic's own reception (tooth lamp, orchids, marble). The proof card is a real review about being seen the same day.
- **Structure** follows the dental blueprint: hero → trust strip → services by group → root canal (the clinic's unusual asset: a general dentist with a master's in endodontics) → new patients → doctor and team → approach (from review themes) → reviews → FAQ → request form → entrance band → visit → footer.
- **Motion**: Lenis + GSAP ScrollTrigger per the animated-scroll playbook: word-split H1, fade-ups, stagger rows on cards, two masked parallax photos, one full-bleed parallax band (the building entrance), all off under `prefers-reduced-motion`.

## What was built
1. Hero: eyebrow naming Brentwood, 5-word headline, facts line (since 2016, 4.8 / 72, until 8 pm, same-day, CDCP), Request + Call buttons, petal-masked reception photo, review proof card.
2. Trust strip: 4.8★ 72 reviews · since 2016 · until 8 pm · same day · 4 languages.
3. Services: six grouped cards from the Treatments page, each opening with the patient's question; root canal and emergency cards marked.
4. Root canal: why it is done in-house, three plain steps, the doctor's credentials as cards.
5. New patients: what to bring, insurance and plans (CDCP, Healthy Kids, Ministry), in pain today, the office amenities.
6. Doctor and team: full bio from the old site, the "our promise" quote in her words, team names, real portrait in a bud mask.
7. How the clinic works: three themes distilled from the reviews.
8. Reviews: Google 4.8 (72) card linking to Maps, six real quotes.
9. FAQ: eight questions from the site, reviews and the market.
10. Request an appointment: Formspree placeholder form (name, phone, email, preferred day, preferred time, reason, message) with the phone as the faster route.
11. Entrance band: parallax photo of the 4445 Lougheed glass-canopy entrance with a caption.
12. Visit: address, phone, email, fax, hours with today highlighted, parking / transit note, Google map embed.
13. Footer with the real logo and "Site by Sony Saimon".

## Assumptions
- "Since 2016 / ten years in Brentwood": the Meet the Doctor page says she began the practice at Lotus Dental in 2016, and the business card in the owner's reception photo carries a "10 years" badge. 2016 → 2026 is ten years.
- "Same-day emergency appointments whenever the schedule allows": the site says "Emergency and New Patients Welcome" and a review describes being seen the same day; phrased as a possibility, not a promise.
- "Your insurance plan accepted" repeats the site's wording. Direct billing is not claimed anywhere because the site does not say it.
- "Unit 610 → sixth floor, take the elevator": inferred from the unit number.
- "What to bring" is standard new-patient advice (insurance card, medication list, previous x-rays), not from the site.
- The three root-canal steps are a general description of the procedure, not the clinic's own protocol.
- Noor is named as the person who calls back because research lists her as reception.
- "Parking at the building" generalises the site's one-word "Parking." amenity.
- No prices (dental). No online booking link exists, so Book = in-page request form with the phone as the second action everywhere.
- Hours table highlights today from the visitor's device clock.

## Open questions for the owner
- Roles for Sharon and Tala (hygienist? dental assistant?). Shown as "Team" for now.
- Does the clinic direct-bill insurance? If yes, it should be in the hero facts line.
- Is same-day emergency care a standing offer, and is there an after-hours number?
- Confirm the practice start year (2016) and the "10 years" badge.
- Is the "Dr. Basant A. Rahman Family Dentistry" name still wanted alongside "Lotus Dental"?
- Parking details: visitor stalls in the building, paid or free, time limit?
- Any services on the old list no longer offered (dentures, implants placed in-house or referred)?
- Preferred form destination (lotusdental@shaw.ca?) for the Formspree connection.
- Should the site offer Arabic, French or German text?

## Needs from the owner
- Real photos of: the treatment rooms, the front desk with the team, Dr. Rahman with a patient, the exterior sign for Unit 610, a wider daytime shot of the reception. The reception photo in use is a night-time phone photo, usable but dim.
- Confirm: everything in "Open questions".
- A Formspree (or other) form id so the request form delivers.

## QA
Desktop 1440 and iPhone 15 checked (full-page desktop, section-by-section mobile; mobile full-page capture is unreliable with smooth scroll, so viewport shots were used) · scrollWidth 393 = innerWidth 393 · no console errors or page errors · no broken images · every local asset exists · external links return 200 (jsDelivr scripts, Google Fonts CSS, Maps links and embed, web.soichirosaimon.com; the two `preconnect` hosts answer 404 at their root, which is expected) · `prefers-reduced-motion: reduce` emulated: motion.js steps aside (`no-motion` class, no Lenis), zero hidden elements · `node --check` on services.js, main.js, motion.js · mobile menu opens and closes · hours highlight today.

## Placeholder / generated images
None. Every image is the clinic's own (Google Business Profile owner photos and lotusdental.ca). The entrance photo was shot by the building, not the clinic, but is on the clinic's own Google listing.
