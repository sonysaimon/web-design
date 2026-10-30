# Priority Plumbing & Drains — build report (2026-10-27)

Local preview: http://localhost:8092/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/priority-plumbing/ (not run; waiting for go)

Purpose (your answer): **demo rebuild to pitch** the owner. Primary action: **Book online** (their ServiceTitan page), Call secondary. Structure: home + 4 service hubs + areas + about + reviews. Look: bold trade brand.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Priority Plumbing & Drains | Google, site |
| Category | Residential service plumber: plumbing, drains & sewer, radiator/boiler heating, basement waterproofing | site nav |
| Address | 1594 Dupont St, Toronto, ON M6P 3S7 (Junction Triangle) | Google, site footer |
| Phone | **(647) 247-2275** used on the demo (Google Business Profile). Site shows (289) 206-1962, a call-tracking number | Google vs site |
| Email | not published | |
| Hours | Google: Open 24 hours. Site: "Monday–Sunday, 7 days a week" + "emergency any hour". Demo says: emergency line 24/7, scheduled service 7 days | Google, site |
| Booking | ServiceTitan online booking (Google "Book online" button): https://book.servicetitan.com/xog76t01mgild6kil2yfcsjg | Google |
| Ratings | Google 4.8 (1,939). Site claims "5.0 based on 5,000 reviews" across Google/Yelp/Facebook | Google, site |
| Founded | 2001, President Austin Tsakopoulos | site About |
| Licences | Plumbing #P17794 · Heating #00749274 | site footer |
| Guarantees | Make it right or you don't pay · lifetime warranty on all installations · beat any written drain/waterproofing/water-service quote from a licensed insured contractor · same-day · 7 days · fully stocked trucks | site |
| Offers | $50 off any plumbing service (one per household, standard pricing) on site; "$99 clear any main drain" painted on trucks and building (not on site) | site, Google photos |
| Awards / press | Top Choice Award ("Voted Toronto's Best" on vans), HomeStars Best of Award 2023, CBC Radio and CityPulse appearances | Google photos, site |
| Team | Greg and Victor lead the field team; technicians named in reviews: Cole Tubigan, Kyle, Tony Saracini, Brian L, Brenden Hutchinson, Aaron Johnston, Ouweis Sassi, Zac/Zachary, Jacob, Jordan, Matt | site reviews |

**Conflicts between sources:** phone (647 on Google vs 289 tracking number on site); hours wording (24 hours vs 7 days a week); review numbers (4.8/1,939 Google vs 5.0/5,000 on site). Demo uses the Google-consistent values.

## Audit of the current site (priorityplumbing.ca, Scorpion build)
Score per playbook rubric: **~59/100** (restructure and re-skin band). Hero 5 · CTAs 6 · Trust 6 · Services 7 · Area/SEO 7 · Navigation 6 · Mobile 6 · Visual 5 · Copy/pricing 6 · Technical 5. Critical-failure flag: phone number differs between site and Google listing.

Top problems in plain language:
1. The best proof (real crew and award photos, 1,900+ Google reviews, licence, lifetime warranty) sits below a generic template hero with a looping video and one button.
2. No Call button in the header and no sticky call/book bar on phones; "Book" is the only visible action.
3. The "$99 clear any main drain" offer painted on every truck is missing from the site, and the $50 coupon has no expiry.
4. Review numbers don't match Google (5.0 / 5,000 vs 4.8 / 1,939), which reads as inflated.
5. Pages are heavy (Cloudflare, hero video, 300 reviews rendered on every page) and sub-pages use stock gloved-hands photos even though the owner has real ones on Google.

## Sources used
- Google Maps listing (rating, count, phone, hours, 34 owner/customer photos, booking link, review themes).
- priorityplumbing.ca: home, About, Plumbing, Drain & Sewer, Our Locations pages and footer (services, guarantees, licences, 300+ named-tech review quotes, press).
- Google Maps search "plumber Toronto" for competitors.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Drain King Plumbers | 4.7 (2,893) | — | Largest review count in the city | Count comparison only |
| New Canadian Drain & Plumbing | 4.7 (1,821) | newcanadiandrain.com | Licence number in the hero, row of 7 HomeStars award badges, review count, seniors discount | Licence + awards in hero/trust strip |
| Mr. Rooter Plumbing of Toronto | franchise | mrrooter.ca/toronto | Phone + Schedule in header, dated offers with terms, residential/commercial split | Dated offer terms (owner to supply dates) |
| Anta Plumbing | 4.7 (467) | antaplumbing.com | Booking form in the hero, HomeStars/BBB/Google badges, "20+ years" | Proof beside the CTAs |
| Plumber To Your Door, Everest, Plumber GTA | 4.8–5.0 (300–460) | various | Small template sites | — |

Table stakes in this market: phone + book in header, 24/7 line, licence number, rating badge, award badges, service grid, GTA area list.
Opportunities nobody uses: real crew photos in the hero, reviews filtered by technician name, the truck offer shown on the site with terms, a light static page.

## Design decisions
- **Palette** from the trucks, the building and the logo: truck blue #1273D6, logo navy #0B2A55, decal red #D7242B (primary button), cool white #F5F8FC, pipe grey #5A6B80, hi-vis yellow #FFC72C used only for stars and the offer stamps.
- **Type**: Big Shoulders Display 800/900 for headings (condensed signage weight, like the van lettering) + IBM Plex Sans for body. Self-hosted woff2, 252 KB total.
- **Signature**: "Who's coming to your door", the review wall filtered by technician first name (chips with counts). Second motif: the skewed red decal tag used for section eyebrows, echoing the logo slant.
- **Hero**: real photo of two technicians with the Top Choice Award, headline "Fixed right. Or you don't pay." (their own guarantee), three fact lines, Book + Call, proof card.
- **Structure**: home + Plumbing + Drains & Sewer + Heating + Waterproofing + Areas + About + Reviews. Offers live on the home page. Nav is 6 items; About is reachable from home and footer.
- **No stock photos, no icon grids, no pop-ups.** Every image is the owner's own from Google.

## What was built
- Home: utility bar (24h line, licences), header with phone + Book, split hero with proof card, 6-cell trust strip, symptom picker ("What's going on?") that routes to the right crew and CTA, four service-hub cards with real photos, red 24/7 emergency band, "Guarantees, not adjectives" promise grid with the parts-inventory photo, two coupon-style offers, reviews with technician filter + Google rating card, service area lists + embedded map, about teaser with crew photo and technician names, 4-step "How a visit goes", 6-question FAQ, blue CTA band, full footer, mobile sticky Call/Book bar.
- Service hubs ×4: page hero with real photo, 6–8 "problems we see every week" cards, 3-card "How we price it", 4-photo recent-jobs gallery, reviews filtered to that service, 3 FAQs, CTA band.
- Areas: HQ photo, Toronto (19) and GTA (7) lists, map, six local-knowledge cards (pre-war clay drains, post-war galvanized, flooding streets, condos, winter, GTA).
- About: founder story, mission, three hiring traits, awards and press, photo gallery, team names.
- Reviews: rating card with Google review themes and counts, all 42 quotes with the technician filter.
- JSON-LD `Plumber` schema with address, geo, 24/7 hours, AggregateRating 4.8/1939, hasMap.

## Assumptions
- Phone shown is the Google listing number (647) 247-2275, not the site's 289 tracking number.
- "Emergency line 24 hours" (Google) plus "scheduled service 7 days, same rate on weekends" (site). "Same rate nights and weekends" is inferred from the site's "7 days a week" and reviews mentioning weekend/Sunday service; confirm.
- "$99 clear any main drain" is shown as an offer because it is painted on the trucks and the building; terms unknown, labelled "confirm with your technician".
- "Text on the way" step is based on reviews ("I knew who was coming and when through email, text, and phone calls").
- Backwater-valve subsidy wording is generic ("a City of Toronto subsidy may apply"); no dollar amount stated.
- Technician names come from public reviews; some may no longer be on staff.
- Google review themes and counts (polite staff 93, thoroughness 90, …) are from the Google Maps review summary on 2026-10-27.

## Open questions for the owner
- Which phone number should the site show, and is the 289 number a tracking line to keep?
- Confirm the $99 main-drain offer conditions and the $50-off expiry.
- Is the weekend/night rate truly the same as weekday? Any dispatch or diagnostic fee?
- Current list of technicians and the two team leads (Greg, Victor).
- Logo file (SVG) and any newer award badges (2024/2025 HomeStars?).
- Service Plans / membership details and the "Make a Payment" link, both on the current site, not in the demo.

## Needs from the owner
- Logo SVG; a landscape crew-and-truck photo for the hero (current one is a portrait crop); photos of a backwater valve, water heater and boiler install.
- Confirm hours, offers, licence numbers, and whether Mississauga should be a separate page as on the current site.

## QA
Desktop 1440 and iPhone 15 (393 px) captured for every page after scrolling. `scrollWidth === innerWidth` on all pages, no elements wider than the viewport, no broken images, fonts load (6 faces), no console errors or page errors. Booking link and Google Maps link verified live (200). All local assets exist. `node --check` passes on main.js, services.js, reviews.js. Reduced-motion disables reveal animation and the utility-bar pulse.

## Placeholder / generated images
None. All 20 photos are the owner's own, downloaded from the Google Business Profile and optimised. The header logotype is typographic (replace with the real logo).
