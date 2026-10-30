# Pristine Plumbing & Drainage Ltd. — build report (2026-10-30)

Local preview: http://localhost:8098/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/pristine-plumbing/
Current site: https://greatervancouverplumbing.ca/ (Web.com template)

## Business facts
| | Value | Source |
|---|---|---|
| Name | Pristine Plumbing & Drainage Ltd. | Site, Google, BBB |
| Category | Plumber / drainage contractor; residential, commercial, strata | Site |
| Address | 9133 Capella Dr, Burnaby, BC V3J 7K4 | Google, BBB (site footer says only "Burnaby, BC"; HomeStars and Facebook say New Westminster) |
| Phone | **778-980-1883** (used) | Google Business Profile, BBB, van wrap, Instagram posts |
| Phone on old site | 778-654-6814 (not used) | greatervancouverplumbing.ca only, likely Web.com call tracking |
| Email | none public | |
| Hours | Open 24 hours, 7 days | Google, site |
| Founded | 19 Aug 2015 (11 years) | BBB |
| Owners | Daniel Dunsford (Director), Teale Dunsford (Executive Assistant) | BBB |
| Ratings | Google 5.0 (260) · HomeStars 10/10 (~348), Best of the Best 2025, Best of Award 2021 · BBB A+, 0 complaints, not accredited | Google Maps, HomeStars search, Instagram, BBB |
| Team | Daniel, Andrew, Jeremy (Michael in older HomeStars reviews) | Google reviews, old-site photo filenames |
| Fleet | 4 purple wrapped vans in the crew photo | Old site photo |
| Booking | None; phone + request form | Site |
| Payment | Visa, Mastercard, Amex, debit, cash | Site contact page |
| Social | instagram.com/pristineplumbinganddrainage (150 posts, 396 followers), facebook.com/pristineplumbinganddrainage | Site |

**Conflicts between sources:** phone (above, resolved to 778-980-1883 because owner-written sources agree); city (Burnaby vs New Westminster, resolved to Burnaby from the street address); fleet size (photo shows 4 vans, a 2026 review says "three work vans"); Instagram bio link pristineplumbing.ca redirects to greatervancouverplumbing.ca.

## Audit of the current site (plumbing playbook, Part 5)
Hero 4 · CTAs 4 · Trust 3 · Services 5 · Area/SEO 2 · Navigation 4 · Mobile 4 · Visual 4 · Copy 4 · Technical 4 → **38/100, rebuild tier**.
Critical: phone number differs from the Google Business Profile. Top problems: keyword H1 ("Plumber in GREATER Vancouver, BC") and "Plumber V3J 7K4" title; cookie banner over the hero on phones; no rating with count, no quoted reviews, no licence; one sentence of service area and no schema; 10-item nav with dropdown and a footer without address or areas; no sticky call bar; the one concrete offer (free home plumbing inspection) buried on the About page; generic Web.com copy. What it had going for it: real crew/van/job photos and a genuinely detailed drainage page, both reused here.

## Sources used
- greatervancouverplumbing.ca: all 11 pages fetched; 60+ photos downloaded from `/__static/`.
- Google Maps listing (cid 11749574300528626761): rating, count, hours, address, 20 reviews, 3 owner photos.
- Instagram @pristineplumbinganddrainage: 36 recent posts, captions and images (job stories, phone, areas, awards, hiring post naming Red Seal).
- BBB profile: founding date, principals, rating, address.
- HomeStars via search snippets (profile blocks fetchers): 10/10, ~348 reviews, named techs.
- Facebook (title only; page blocks fetchers), Yelp blocked, OrgBook JS-only.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Mario Plumbing & Heating, Burnaby | 5.0 (217) | marioplumbing.ca | Real job-photo hero, "Emergency? We answer 24/7", 200+ reviews badge, before/after job cards paired with reviews, FAQ on price/speed/permits, fixed call link, Red Seal/WorkSafeBC badges | Job cards with captions, FAQ answering cost/speed/permits, fixed mobile call |
| Milani, Burnaby | 4.9 (12,831) | milani.ca | Licence image in footer, offers/rebates/membership pages, 12 service areas, 70-years banner | Service-areas page, footer credentials |
| Marvel Plumbing & Drainage, Burnaby | 4.9 (2,730) | marvelplumbdrain.com | Utility bar with 24/7 phone, coupons page, named-owner testimonials | Utility bar with emergency line |
| Drips & Drains, Vancouver | 4.9 (579) | dripsanddrains.ca | Postal-code + photo-upload request form, BBB A+ / FortisBC badges | Postal code and photo on the form |
| Impetus Plumbing & Heating, Richmond/Vancouver | 5.0 (401) | impetusplumbingheating.com | Technical Safety BC licence number shown, Google widget with count, rebates, warranty page | Rating with count in hero |

Table stakes in this market: 24/7 line in a utility bar; Google rating with count; licensed/insured + Red Seal badges; ~8–12 city list; request form; one page per service.
Opportunities nobody uses: the crew by name; drainage expertise explained (perimeter systems, sumps, permits, vacuum truck); a free-inspection offer; Instagram job stories as proof; a symptom picker in the hero; local notes per city instead of swapped city names.

## Design decisions
- **Palette** from the trucks: royal purple #5b3a9b (vans, polos, wordmark), coral #f0564f (the 24/7 Emergency Response shield on the vans) for every Call action and the emergency band, pale lilac tints, ink purple #2a1f55 for the utility bar, request section and footer, gold only for stars. No competitor uses purple.
- **Type**: Rubik 700/800 for headings (chunky, slightly rounded like the PRISTINE wordmark), Nunito Sans for body. Sentence case.
- **Signature**: the sunburst from the van wrap, drawn in CSS as pale conic rays behind the hero photo (slow 3-minute rotation, off under reduced motion) and inside the name-only team card; the shield badge redrawn in SVG for the emergency line, band and favicon.
- **Hero**: eyebrow with city, "Fixed fast. Left pristine." (their name is the promise), facts line (Red Seal, price before work, free inspection, since 2015), Call (coral) + Request a visit, crew-and-vans photo with a 5.0/260 proof card, and the "What's going on?" symptom picker (9 chips → urgency label, advice, service links).
- **Structure** follows the playbook homepage blueprint: utility bar, sticky header (6 items + phone + Request), hero, trust strip (6 facts), services grouped Drains & drainage / Plumbing / Specialty (9 cards), coral emergency band, 4-step how-it-works, 6 recent jobs from Instagram with captions, reviews (3 platforms + 6 quotes naming techs + recurring-theme chips), service areas with map and list, team (Daniel and Andrew with photos, Jeremy as styled name), FAQ with FAQPage schema, request form (name, phone, postal code, what's going on, optional photo, emergency checkbox, consent), footer with NAP, hours, credentials, services, areas, social, credit. Fixed Call + Request bar on phones.
- **Pages**: index + 9 service pages (playbook service-page template: breadcrumb, eyebrow, H1, Call/Request, body, what's included, CTA band, gallery, credentials, 2 relevant reviews, FAQ with schema, related services, closing band) + service-areas with local notes per city. All generated from `services.js` by `build.py`.
- **Copy** in their voice: "The Pristine Touch", boot covers on, "we pledge not to overcharge when you're in a jam", "every service call comes with a free home plumbing inspection", "Sun, rain, or snow", Instagram job stories reworded. No "Welcome to", no keyword repetition, no invented specials or financing.
- **Schema**: Plumber with address, geo, 24h hours, areaServed, aggregateRating, sameAs; FAQPage on home and every service page; Service + BreadcrumbList on service pages.

## What was built
Home: utility bar · header · hero with picker · trust strip · 9 service cards in 3 groups · emergency band · four steps · recent work (6) · reviews (3 platforms, 6 quotes, themes) · areas with map · team (3) + owners photo · FAQ (6) · request form · footer · mobile bar.
Service pages (9): drain-cleaning, perimeter-drainage, emergency-plumbing, plumbing-repairs, hot-water-tanks, water-service-and-repipes, camera-inspections, moen-flo, strata.
service-areas.html: 8 areas with genuinely local notes, map, local-notes card.

## Assumptions
- 778-980-1883 is the right number (van, Google, BBB, Instagram agree).
- Burnaby is the base (street address is in Burnaby, Capella Dr near SFU).
- "Same upfront pricing nights, weekends and holidays" paraphrases their emergency pledge.
- Review dates converted from Google's relative dates; reviewer names shortened to first name + initial.
- Jeremy exists on the current team (named in 2026 reviews) but has no identified photo.
- Teale is named as running the office (BBB lists Executive Assistant; the owner photo shows Daniel and Teale).
- Service grouping, picker advice, "what's included" lists and FAQ answers are written from the old site's text, Instagram captions and reviews, not confirmed by the owner.
- The old site's Moen Flo marketing graphics were not reused; that page uses general crew photos.

## Open questions for the owner
- Licence number (Technical Safety BC / municipal) for the footer.
- Confirm which phone number; cancel the Web.com tracking line if so.
- Fleet size and current team names/roles; photo of Jeremy.
- Any real specials, membership or financing to add (none claimed).
- Which cities to add or drop; is Bowen Island regular or occasional?
- Formspree (or other) destination for the request form; who answers it.

## Needs from the owner
- Real photos of: Jeremy; a recent whole-team photo; a Moen Flo install they did.
- Confirm: emergency pricing wording, free-inspection offer still current, HomeStars award years.

## QA
Desktop 1440 and iPhone 15 (393px) checked on index, drain-cleaning, perimeter-drainage, service-areas · no horizontal overflow · no console errors · no broken images · every local asset exists · external links listed and verified by fetch (Google cid, BBB, Instagram, Facebook; HomeStars URL from search results) · hidden-attribute bugs on the mobile menu, picker answer and nav dropdown found via screenshots and fixed · demo form submit shows the thank-you without sending (no endpoint yet) · reduced motion respected · skip link, visible focus, lazy images with dimensions.

## Placeholder / generated images
None. Every image is the company's own (old site, Google listing, Instagram). Favicon and touch icon are drawn from the brand shield.
