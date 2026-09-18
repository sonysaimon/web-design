# Stella Nails & Spa — build report

Local preview: http://localhost:8082/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/stella-nails-salon/

Built 2026-09-18 from the link http://stella-nails-salon.square.site/.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Stella Nails & Spa (Google lists "Stella Nails Salon in Downtown Vancouver"; Instagram "STELLA NAILS & SPA IN DOWNTOWN"; sign reads "Stella Nails") | Instagram, Google, photos |
| Category | Nail salon, plus waxing | Square menu |
| Address | 330 Robson St, Vancouver, BC V6B 2B2 · base of the Eight One Nine building, next to Library Square | Square, Google |
| Phone | (604) 696-9191 | Google, Instagram |
| Email | trangthuydinh12@gmail.com | Square |
| Hours | Mon–Sat 10:00–20:00 · Sun 11:00–19:00 | Square (owner) |
| Booking | Square Appointments: https://stella-nails-salon.square.site/s/appointments (choose technician, "My bookings") | Square, Instagram link |
| Ratings | Google 4.3 (536) · Instagram 2,520 followers, 268 posts · Yelp has two stale, unclaimed listings (3.6 with 9 reviews; 3.2 with 26) | |
| Team | Jessica, Lynda, Gel, Tr, Sun, Trang, Ny, Sel (8 technicians on Square) | Square Staff tab |
| Amenities | Walk-ins accepted, women-owned, wheelchair-accessible entrance, gender-neutral washroom, LGBTQ+ friendly, credit/debit/NFC | Google About |

**Conflicts between sources**
- Hours: Square says Mon–Sat 10–8, Sun 11–7. Yelp's unclaimed listing says 10–7 and closed Sunday. Square is owner-maintained, so the site uses Square.
- Name: three variants across platforms. The site uses "Stella Nails & Spa" from the Instagram name and logo, with "Stella Nails Salon" as the alternate name in structured data.
- Yelp ratings are low and the listings are unclaimed with outdated hours, so Yelp is not shown on the site. The owner may want to claim and merge them.
- Reviews mention "Linda" and "Sil"; Square lists "Lynda" and "Sel". The site uses the Square spellings.

## Sources used
- Square Appointments site: the only "website". It is a booking page with no photos or copy. Full menu (10 categories, 70 services with durations), staff list, hours, email.
- Google Maps (cid 4862898079002559355): rating, review keywords (gel manicure 29, shellac 15), three full reviews with owner replies, About-tab amenities, 13 place photos (3 excluded as belonging to other salons).
- Instagram @stellanailsnspa.robson: bio, 72 post captions (mostly the same signature line: "Vancouver's Favorite Nail Salon · 330 Robson St · Walk-in welcome"), reel captions ("Statement nails only. No basics."), 21 nail-art photos downloaded.
- Yelp: checked, not used.

## Competitors studied
| Competitor | Google | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Robson Nails & Spa | 4.7 (842) | robsonspa.com | Nav is the price list by category; Fresha; Instagram grid; hiring page | Category-first price board |
| NailLasting Salon & Spa | 4.9 (1,064) | naillastingsalonandspa.com | Deals popup (Gel X $75, weekday discounts, stamp card, student discount); kids menu named "Little Princess/Prince" | Hidden promo bar ready for deals; kids category kept as "Little ones" |
| Aspire Nails & Beauty | 4.9 (207) | aspirenailsvancouver.com | Clean hero, Google reviews widget, gallery; no prices | Reviews with platform count |
| The Nails Wall Centre | 4.7 (566) | thenails.ca | Editorial pink/cream look, three service tiles, multi-location, franchise | Nothing directly |
| Formation Beauty Lounge | 4.9 (169) | formationbeauty.ca | Service tiles, Fresha booking and gift cards, hours, map, Instagram feed | Hours and map block |

Table stakes: a Book button to a platform, services by category, a nail-art gallery, Instagram link, hours and map, Google rating.
Opportunities nobody uses: a clear walk-in policy, durations next to prices, the logic of removal pricing, technicians by name, and leading with the salon's own nail-art photography instead of stock.

## Design decisions
- **Palette from their world**: ivory from the white fur backdrop in every nail photo, ink from the black sign and logo disc, cherry red from the red OPEN light and red sign lettering, a blush ground for the team section. Cobalt from "a little touch of blue" appears only as the focus ring.
- **Type**: Fraunces (soft, slightly wonky serif) echoes the serif logo without a stiff Didone; DM Sans for body; DM Mono for prices and durations, because the salon's own price board is a dense numeric list and mono numerals line up like one.
- **Signature**: a red round sticker with "OPEN 7 DAYS · WALK-INS WELCOME · TIL 8 PM" on a slowly rotating ring, pinned to the hero photo cluster. It comes from the red OPEN light and the "Walk-in welcome" line on every caption. It stops under reduced motion.
- **Hero**: five nail-art photos as loose polaroids, because the work is the thesis. Headline "Statement nails. Walk right in." is built from their reel caption and the walk-in line.
- **Structure**: single page. Hero → at-a-glance strip → Prices (sticky chips, dotted leaders, durations) → Nail art (masonry, lightbox) → Team (eight names as tags, book by name) → Reviews → Good to know → Visit (hours, map, storefront, four salon photos) → footer. Hidden promo bar included.
- **Copy voice**: short, warm, no emoji; their own phrases kept ("Statement nails only. No basics.", "Walk-in welcome").

## What was built
- Nav: Stella disc logo, five section links, Book button, mobile menu with call link.
- Hero: headline, subline, Book online + call, five-photo cluster with the rotating sticker, at-a-glance strip (Google 4.3, 8 technicians, 7 days, Instagram).
- Prices: 70 services in 8 categories from `services.js` (Square's ten categories merged: the two acrylic categories into one, and the three Gel X/removal groupings kept as listed), each with duration and price; notes for removal-included items.
- Nail art: 20 photos with captions and lightbox; link to Instagram.
- Team: eight technician names as tags, one review quote about Lynda, "Choose your technician" to Square.
- Reviews: five real quotes from Google (three named, two from Google's review summary), ratings for Google and Instagram.
- Good to know: booking, removal pricing, kids, timing, getting there, payment and accessibility.
- Visit: hours split by day, contact, address, directions, Book + My bookings, storefront photo, embedded map, four salon photos.
- Footer: tagline, links, credit.

## Assumptions
- "Walk-ins welcome" comes from Google's "Accepts walk-ins" flag and the Instagram caption; busy times may still need a booking.
- Square's "Fill Acrylic Powder" and "Full Set Acrylic Powder" categories are merged into one "Acrylic powder" category on the site; every item and price is unchanged.
- "Gel removal included" notes are taken from Square's service names ("Included Gel Removal").
- The technician names are Square's display names, some abbreviated ("Tr", "Ny", "Gel"); the owner may want full names.
- Location description (Eight One Nine building, Library Square, five minutes from Vancouver City Centre and Stadium–Chinatown stations) is from Google's "Located in" field and the map.
- The email on Square (a personal Gmail) is shown because it is the only published email.
- No gift cards were found on Square, so none are linked.
- The Instagram follower count (2,520) is shown as social proof because Google is the only review platform with a current listing.

## Open questions for the owner
- Confirm the salon's preferred name and whether "& Spa" should appear.
- Full names for technicians, and whether any specialise (art, pedicures, acrylic).
- Any current promotions for the announcement bar (Instagram has a "Promotion" highlight).
- Whether to claim and update the Yelp listings.
- A business email rather than the personal Gmail, if preferred.

## Needs from the owner
- Real photos of: the team, a clean daytime storefront, the interior without clients.
- Confirm: Sunday hours (11–7), walk-in policy at peak times, kids' age limit.

## QA
Desktop 1440 and iPhone 15 checked with Playwright and in Chrome. No horizontal overflow (scrollWidth = innerWidth). No console errors. No broken images. All local assets present. External links verified: Square, Instagram, Google Maps, fonts, credit. Reduced motion disables reveals, the sticker rotation and hover transitions. Keyboard: skip link, visible cobalt focus rings, lightbox with Esc and arrow keys.

## Placeholder / generated images
None. All 30 photos are the salon's own (Instagram and Google Business Profile).
