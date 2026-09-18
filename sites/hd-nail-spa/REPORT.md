# HD Nail Spa — build report

Local preview: http://localhost:8083/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/hd-nail-spa/

Built 2026-09-18 from the Google Maps and Fresha links.

## Business facts
| | Value | Source |
|---|---|---|
| Name | HD Nail Spa (own site, Instagram, logo). Google lists "HD Nails Spa Kitsilano"; Fresha "HD Nails West Broadway". | All |
| Category | Nail spa, plus lashes and waxing | Fresha menu |
| Address | 1932 West Broadway, Vancouver, BC V6J 1Z2 · Kitsilano, between Cypress and Maple | Own site, Instagram, Fresha |
| Phone | (604) 731-4599 | Google, Instagram, own site |
| Hours | Mon–Sat 10:00–19:00 · Sun and holidays 10:00–17:00 | Fresha, own site, Google |
| Booking | Fresha: https://www.fresha.com/a/hd-nails-west-broadway-vancouver-1932-west-broadway-ijennnn0 (instant confirmation, pay by app, choose technician) | Google "Book online", Instagram link |
| Gift cards | Fresha gift-card page | Fresha |
| Ratings | Google 4.8 (787) · Fresha 4.9 (284, "Best in Class": 269 five-star, 11 four, 1 three, 2 two, 1 one) · Instagram 6,541 followers, 940 posts | |
| Team | Tina, Grace, Quinnie, Jessica, Tiffany, Chloe, Vie, Lily, Ruby, Tiana, Irene, Rachel, Ann, Linh, Kelly, Ivy, Jay (17 on Fresha). Google reviews also mention Nancy and Victor; Instagram highlights include Mia. | Fresha booking |
| Amenities | Free rear parking, massage chairs, Wi-Fi, women-owned, LGBTQ+ friendly | Instagram bio, Google reviews and About |

**Conflicts between sources**
- Postal code: own site and Instagram say V6J 1Z2; Google says V6J 2B1. The site uses the owner's V6J 1Z2.
- Name: three variants. The site uses "HD Nail Spa" with the other two as alternate names in structured data.
- Team: Fresha lists 17; reviews name Nancy and Victor and Instagram has a "ByMia" highlight, none of whom are bookable on Fresha today. The site lists the Fresha 17.

## Existing website
hdnails1932.com exists: a 2021 nail-salon template with stock photography (stock feet, stock hands, stock lash and wax images), an "Our gallery" section whose images do not load, generic copy, no prices on the home page, and Fresha booking links. It is responsive but not what the preference calls decent and modern, mainly because none of the photos are theirs and the gallery is broken, so the build went ahead. The owner already owns that domain; the new site could replace it there.

## Sources used
- Fresha venue page: all ten menu categories with durations and prices (each chip clicked), team with ratings, About text, review breakdown, six reviews, three venue photos, gift-card page.
- Google Maps (cid 3171477925401291183): rating, three full reviews, review keywords (gel nails 22, colour selection 16, massage chairs 8, talented staff 19), About amenities, 11 place photos (4 excluded as other salons' marketing images).
- Instagram @hdnails1932: bio, highlights (one per technician), 36 recent posts, 33 photos downloaded, captions ("When life gives you lemons, put them on your nails", "Fall nails: warmer tones, richer details").
- Existing site hdnails1932.com: postal code, "Sun & Holiday" hours wording.

## Competitors studied
| Competitor | Google | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Sassy Nails (W 4th) | 4.7 (444) | sassynails.ca | Editorial serif hero, stat strip, signature-service tiles, Instagram feed, Google reviews | At-a-glance strip |
| Nailed it Beauty Spa | 4.8 (792) | naileditbeautyspa.com | Award poster, 10-day guarantee policy, gift certificates, groups and events | Gift cards surfaced in three places |
| BEIGE Nails & Spa | 4.9 (209) | beigenails.ca | First-visit code, offers, category tiles, testimonials, group bookings, Fresha | Hidden promo bar ready for offers |
| Magnifique Nail Spa (W Broadway) | 4.7 (191) | magnifiquenailspa.ca | Serif and script pairing, storefront photography, category tiles | Script accent, but from HD's own neon sign |
| HapBee Nails (W Broadway) | 4.8 (248) | hapbeenails.com | Playful, thin | Nothing |
| Canvas Hair + Nail | 4.8 (642) | canvassalon.ca | Product shop, gift card | Nothing |
Sugar Nails, Point Grey Nail & Spa, Demure and Line Spa have no website of their own (Instagram, DashBooking or Fresha only).

Table stakes: Book to platform, category tiles, gallery, Instagram link, hours and map, Google rating.
Opportunities nobody uses: a full price list with durations on the home page, technicians by name (HD has 17, each with an Instagram highlight), the removal add-on logic, parking, and the salon's own nail photography at hero scale.

## Design decisions
- **Palette from their world**: milk and cream from the white walls and marble behind the logo, a sheer pink from the nude gel base in nearly every photo, gold from the butterfly logo and the warm neon in the arched niche. Gold is the only accent.
- **Type**: Gloock for headlines; Sacramento, a monoline script like the neon tube sign, for one accent phrase per headline and the wordmark; Albert Sans for body; tabular figures in the price list.
- **Signature**: the arch. Their interior has an arched niche with the neon "HD Nail Spa" sign, so the hero photo is masked into an arch with a soft gold glow, the map repeats the arch, and team names are set as "by Tiffany" tags mirroring their Instagram highlights.
- **Structure**: single page. Hero → at-a-glance strip → Services & prices (8 categories, sticky chips, durations, from-prices) → Nail art (24 photos, lightbox) → Team (17 names, choose technician) → Reviews (6 quotes, 2 ratings) → Good to know → Visit (hours, map, three salon photos) → footer. Hidden promo bar included.
- **Copy voice**: calm and exact, from their About ("make every client feel special", "relax") and reviews ("meticulous", "attention to detail"), no emoji.

## What was built
- Nav: HD wordmark with script, five section links, Book, mobile menu with call link.
- Hero: "Beautiful nails, done properly." with two CTAs; arch photo of the neon sign with two nail photos tucked at its base; at-a-glance strip (Google 4.8, Fresha 4.9 Best in Class, 17 technicians, free parking).
- Services & prices: 76 services in 8 categories from `services.js` (Fresha's Featured chip dropped as duplicates; Artificial Nails renamed "Acrylic & hard gel"; Lash Lift and Eyelash Extension merged into "Lashes"; Hair Removal renamed "Waxing & tinting"), every item with its duration and price.
- Nail art: 24 of their photos with captions and a lightbox, link to Instagram.
- Team: 17 "by" tags, "Choose your technician" to Fresha's professional picker.
- Reviews: six real quotes (three Google, two Fresha, one Google summary quote), ratings for Google and Fresha.
- Good to know: parking, booking, removal pricing, gift cards, kids, lashes and waxing.
- Visit: hours with the Sunday and holiday split, contact, address, directions, Book and Gift cards, arch-shaped map, three salon photos.
- Footer: tagline, links including gift cards, credit.

## Assumptions
- "Free parking behind the salon, enter from the lane" comes from the Instagram bio ("Free rear parking"); the lane detail is inferred from the building and should be confirmed.
- "Massage chairs" comes from Google review keywords, not an official listing.
- "Between Cypress and Maple" is read from the map; "look for the arched window" is a guess from the interior photo and may need changing to describe the actual storefront.
- Category names were simplified for customers; every item, duration and price is exactly as Fresha lists it.
- Removal pricing in Good to know is derived from the menu (removal-only $21, add-on $10, BIAB add-on $5, gel-included versions $5 more).
- The 17 technicians are Fresha's current bookable list; Nancy, Victor and Mia are not shown.
- No email is published anywhere, so none is shown.

## Open questions for the owner
- Preferred name and whether to point the existing domain hdnails1932.com at this site.
- Confirm parking instructions and a one-line description of the storefront.
- Whether Nancy, Victor or Mia should be added to the team list.
- Any current offers for the announcement bar.
- Fix the postal code on Google (V6J 2B1 vs V6J 1Z2).

## Needs from the owner
- Real photos of: the storefront from Broadway, the team, the pedicure chairs.
- Confirm: holiday hours, the Little Ones age limit, whether lash and nail services can be booked back to back.

## QA
Desktop 1440 and iPhone 15 checked with Playwright and in Chrome. No horizontal overflow (scrollWidth = innerWidth). No console errors. No broken images. All local assets present. External links verified: Fresha (venue, booking, technician picker, reviews, gift cards), Google Maps, Instagram, credit. Reduced motion disables reveals and hover transitions. Keyboard: skip link, visible gold focus rings, lightbox with Esc and arrow keys.

## Placeholder / generated images
None. All 36 photos are the salon's own (Instagram, Fresha, Google Business Profile).
