# TeamWell Health — build report

Local preview: http://localhost:8109/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/teamwell-health/

## Business facts
| | Value | Source |
|---|---|---|
| Name | TeamWell Health (styled "Teamwell Health" on the old site) | logo, Google |
| Category | Chiropractic + naturopathic clinic (also acupuncture, custom foot orthotics) | old site appointment form, Google reviews |
| Address | #402 – 3999 Henning Drive, Burnaby, BC V5C 6P9 | Google (old site prints V5C-6P9; same code, see conflicts) |
| Phone | (604) 603-8558 | Google and old site |
| Fax | 1-866-489-5539 | old site |
| Email | burnaby@teamwell.ca | old site |
| Hours | **None published anywhere.** Site shows "Call for hours". | Google lists no hours; old site lists none |
| Booking | No online booking. Old site had a request form (name, email, phone, morning/evening/flexible, therapy, therapist). Demo uses a Formspree placeholder form with the same intent. | old site |
| Ratings | Google 4.9 (36) | Google |
| Team | Dr. Eric Jang DC, Dr. Brenton Cheng DC, Dr. Karen Jang ND | old site Team page |

**Conflicts between sources:** research.json lists the postal code as V5C 6P7; the old site prints V5C-6P9 on every page and the Google map pin resolves to V5C 6P9, so the site uses 6P9. research.json names only Dr. Eric and "Dr. Karen"; the old site's Team page adds Dr. Brenton Cheng, DC (also on the appointment form), so he is included. research.json does not mention custom foot orthotics; the old form offers them and the owner's Google photos show an orthotics scanning station, so they are included.

## Sources used
- Old website teamwell.ca: home ("Under Construction" + contact form), /about/ (Team bios, 229 words), /contact/, /home/ (theme demo), /blog/ (lorem ipsum placeholders, ignored). Dr. Karen's headshot and the logo were downloaded from it. All other images on it are stock (Pexels) and were not used.
- Google Business Profile: rating, review count, six review quotes, review themes, six owner photos (two treatment rooms, an adjustment in progress, the reception desk, the orthotics station, the logo).
- Old-site screenshots `shots/teamwell.jpg` and `shots/teamwell-d.jpg`: confirmed the live homepage is an "Under Construction" page with a form on both phone and desktop.

## Competitors studied
| Competitor | Website | What they do well | Adopted? |
|---|---|---|---|
| Metrotown Family Chiropractic | metrotownchiropractic.com | Stats strip under the hero, conditions grid with real clinic photos, step-by-step new-patient process, ICBC / direct-billing pages, mobile sticky bar with Call / Book / Text, Google reviews with names | Yes: trust strip, 3-step first visit, ICBC content, sticky Call/Book bar, named reviews |
| Baseline Health and Wellness | baselinewellness.ca | Jane App booking everywhere, direct billing block, service cards with photos, rates page | Partly: booking CTA everywhere (as a request form, since TeamWell has no platform); no rates (none published) |
| Couve Health | couvehealth.com | ICBC as a top-level item, hours per clinic, request-appointment block beside the map | Partly: ICBC in the chooser, services and FAQ; request form beside the visit block |

Table stakes in this market: book button in the header, services with photos, ICBC and extended-health info, Google reviews, hours and map, a new-patient section.
Opportunities nobody uses: a "not sure who to see?" router for a multi-discipline clinic; the clinic's own rooms instead of stock; a plain-words first-visit walkthrough; hero copy from the owner's own philosophy.

## Design decisions
- **Palette** from the logo: navy #1D242E and green #22AD4A (buttons use #168A3A so white text passes contrast). Slate blue #3F5F7E from the treatment tables for a secondary tone. White and a cool off-white, matching the clinic's white walls and grey floors. Nothing cream, nothing serif.
- **Type**: Sora (geometric, echoes the logo's extended caps) for headlines, Figtree for body.
- **Signature element**: the chevron from the logo's stacked arrows. It is the eyebrow mark, the list bullet, the peaked mask on the hero photo and the pointed mask on the team photo, and the favicon.
- **Hero thesis**: "Everyone on the same page." is Dr. Eric's own philosophy line from the Team page and describes the clinic's actual model (chiro + ND + acupuncture + orthotics in one suite). The eyebrow names Brentwood and the suite number because reviews say first-timers struggle to find it.
- **Interactive element**: "Tell us what's going on" chooser routes a concern to the right discipline and practitioner, and pre-fills the request form's reason.
- **Structure**: the dental/chiro blueprint, single page: hero → trust strip → chooser → services ledger → new patients → team → approach band → reviews → FAQ → request form → visit → footer.
- **Motion**: Lenis + GSAP per the playbook (hero word split, fade-ups, stagger rows, two masked parallax photos, one parallax band, off for reduced motion).

## What was built
1. Hero: eyebrow, 5-word headline, facts line (4.9 / 36 reviews, after-work, no referral), two CTAs, note on ICBC and extended health; owner's adjustment photo in a chevron-peaked parallax frame with a proof card (4.9 ★ + Madinah's quote).
2. Trust strip: 4.9 ★ 36 reviews · 3 doctors · 4 disciplines · ICBC · after work.
3. Start here: six-concern chooser → service, practitioner, blurb, "Request this appointment".
4. Services ledger: chiropractic (room photo), naturopathic medicine, acupuncture, custom foot orthotics (orthotics station photo).
5. New patients: three steps, "bring with you", "finding suite 402", hours (Call for hours).
6. Team: Dr. Karen's real headshot in a pointed parallax frame; three practitioners with credentials and bios from the Team page.
7. Approach band: parallax treatment-room photo, "One plan, not three opinions", Dr. Eric's quote.
8. Reviews: Google 4.9 (36) card + six real quotes, first names, tagged by service.
9. FAQ: eight questions from reviews and the old form.
10. Request an appointment: Formspree placeholder form (name, phone, email, preferred time, practitioner, reason) with local demo confirmation.
11. Visit: address, phone, email, fax, hours row ("Call for hours"), Gilmore Station note, Google map embed, directions.
12. Footer with "Site by Sony Saimon"; mobile sticky Call / Request bar.

## Assumptions
- Hours: none published anywhere, so the site says "Call for hours" and repeats the phone number. The review theme "after-work appointments" is shown as "evening appointments".
- Who is in the hero photo is not stated by Google; the caption calls it "an adjustment in one of the treatment rooms" and does not name the practitioner.
- Conditions listed under chiropractic (back/neck/shoulder, neck-driven headaches, sports and golf injuries) are general chiropractic scope plus what reviews and Dr. Brenton's bio mention; nothing more specific was claimed.
- Acupuncture is offered (old form) but nobody is named as the acupuncturist; the site says "in the same suite".
- Custom orthotics: described from the Google photo of the scanning station (scanner, pressure plate, insoles). "A couple of weeks to arrive" and "often covered by extended-health plans" are industry norms, not the clinic's statements.
- ICBC: "ICBC pre-approves a set number of chiropractic visits after a collision" is the BC-wide rule; the clinic's own ICBC process is not published.
- "No referral needed" is the BC rule for chiropractors and NDs.
- Gilmore SkyTrain is a short walk: confirmed on the map embed (the station is one block from the pin).
- Postal code V5C 6P9 (old site) over V5C 6P7 (research.json).
- JSON-LD uses `MedicalClinic` because schema.org has no `Chiropractor` type; disciplines are in `medicalSpecialty` and the three doctors in `employee`.
- The chooser's advice ("if it needs two of us, you'll hear that on day one") is drawn from Dr. Eric's philosophy line, not from a stated clinic policy.

## Open questions for the owner
- Opening hours, by day. Evening hours on which days?
- Does the clinic bill extended-health plans directly? (Not claimed on the site; competitors all advertise it.)
- Who provides acupuncture, and is Dr. Brenton still practising at the clinic (he is on the old site and form)?
- Parking: is there visitor parking at 3999 Henning Drive? (Not mentioned; left out.)
- Confirm who is in the adjustment photo so the caption can name them.
- Do they want online booking (Jane App etc.)? Every Book button would then go there instead of the form.
- Which email should the request form reach (burnaby@teamwell.ca assumed)?
- Any services beyond the four (e.g. massage, IMS, food-sensitivity testing suggested by the placeholder blog titles)?
- Confirm the postal code (V5C 6P9 vs 6P7).

## Needs from the owner
- Real photos of: Dr. Eric and Dr. Brenton (headshots or at work), the building entrance / lobby signage (for the "finding suite 402" box), the reception with staff.
- Confirm: hours, direct billing, acupuncture provider, parking, services list, Formspree/booking destination.

## QA
Desktop 1440 and iPhone 390 full-page captures read slice by slice · scrollWidth = innerWidth on mobile (390 = 390) · no console errors · no broken images · every local asset exists · every external link returns 200 (Formspree placeholder returns 405 to a GET, as expected; the web.soichirosaimon.com/teamwell-health/ OG URLs are 404 until deployed) · reduced-motion emulation: Lenis off, no hidden elements, hero words unsplit · mobile menu, chooser → form prefill, demo form submission and Google map embed verified in viewport shots · `node --check` passes on all three JS files · JSON-LD parses.

Fixes made during QA: review quote mark overlapping text (padding), Dr. Karen's photo cropped at the top (frame now top-aligned with a smaller parallax), white gap under the dark footer on mobile (footer now carries the sticky-bar padding).

## Placeholder / generated images
None. Every image is the clinic's own (Google Business Profile owner photos, Dr. Karen's headshot and the logo from teamwell.ca).
