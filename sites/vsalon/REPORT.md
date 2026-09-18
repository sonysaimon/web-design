# VSalon — build report

Local preview: http://localhost:8081/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/vsalon/

Built 2026-09-18 from the link https://www.facebook.com/Essevsalon/.

## Business facts
| | Value | Source |
|---|---|---|
| Name | VSalon (Fresha and Facebook write "Vsalon"; storefront sign reads "VSALON By Esse Beauty Corp.") | Google photos, Fresha |
| Category | Hair salon | All |
| Address | 493 SW Marine Dr, Vancouver, BC V5X 0E5 · ground floor, MC2 South Tower · Marpole | Google, Fresha, Facebook |
| Phone | (604) 834-4930 | Facebook, Google, Instagram |
| Email | essevsalon@hotmail.com | Facebook |
| WeChat | Vsalonbeauty | Instagram bio |
| Hours | Every day 11:00–19:00 | Fresha (owner) and Yelp |
| Booking | Fresha: https://www.fresha.com/a/vsalon-vancouver-493-southwest-marine-drive-2risltos | Google "Book online", Instagram link |
| Ratings | Google 4.8 (703) · Fresha 4.9 (500: 475 five-star, 18 four, 5 three, 2 two, 0 one) · Yelp 5.0 (4) · Facebook 100% recommend (9) | |
| Team | Goldie (Director Stylist, 5.0), Andy (Director Stylist, 4.9), Yi Yang 易阳 (Director Stylist, 4.9), David (Stylist, 5.0) | Fresha |
| Social | Instagram @essevsalon (2,123 followers, 363 posts) · Facebook 165 followers | |
| Amenities | English and 中文, refreshments and snacks, free Wi-Fi, women-owned, LGBTQ+ friendly, wheelchair accessible, free street and garage parking, credit/debit/NFC, appointment required | Google About tab, Fresha |

**Conflicts between sources**
- Hours: Google says 10 am–7 pm, Fresha and Yelp say 11 am–7 pm. Fresha is owner-written, so the site says 11–7. Worth confirming; Google may be stale or the salon may open early for bookings.
- Name casing: "VSalon" (Google) vs "Vsalon" (Fresha, Facebook). Site uses VSalon, matching the neon sign's capital V and the letterspaced VSALON lettering.
- David's Fresha level: the venue page lists him as "Stylist" while the other three are "Director Stylist". The Fresha menu still calls his cuts "Director Men's/Women's Haircut by David" at the same price. Site shows "Stylist" for him, and prices as listed.

## Sources used
- Facebook page and About: identity, phone, email, dead website domain.
- Google Maps place (cid 6432627217477141150): rating, 64 place photos, About-tab amenities, hours, booking link, review keywords ("hair bleaching", "head massage", "welcoming atmosphere").
- Fresha venue page: full menu with durations and prices per category chip, team with ratings, About text, review breakdown, six reviews, three venue photos.
- Instagram @essevsalon: bio, 48 captions for voice (many are reshares of Goldie's @gol.inspired.space), highlights ("We Are Hiring", "Work+Fun", "Our Work", "How to book").
- Yelp: rating and hours.
- essevsalon.com: registered until July 2027 but returns a 404 on a parked server. No working website exists, so the build went ahead.

## Competitors studied
| Competitor | Google | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Kerrisdale Hair Bar | 4.9 (1,246) | kerrisdalehairbar.com | Photo-led "Works", owner portrait. No prices, no online booking. | Photo-led sections |
| Axis Hair Salon | 4.8 (1,125) | axishairsalons.com | Google reviews widget with count, story since 1989, membership promo | Ratings with counts |
| Salon Haze | 4.7 (653) | salonhaze.com | Signature services named in nav (Balayage, Head Spa, Korean Men's Perm), press quote | Named the perm techniques and signature colour work in copy |
| Luxor Hair Salon | 4.6 (599) | luxorhairsalon.com | Closest comparable: Japanese/Korean stylists with levels and Instagram handles, full price list, Fresha | Stylist levels, price list by category |
| Poppy Hair Salon | 4.7 (410) | poppyhairsalonvancouver.ca | Four-word hero, FAQ, product brands | FAQ ("Good to know") |
| Hive Hair Spa (Marpole) | 4.3 (203) · Fresha 4.9 (3,846) | hivehairspa.com | "Book by team" with designer levels, policy page, price ranges, hiring page | Book-by-stylist section, hiring link |
| The Grove Salon | 4.8 (337) | thegrovesalon.ca | "Find my stylist" match form, eco badge, two-location booking | Stylist descriptions to help choose |

Table stakes in this market: sticky Book button to a platform, services by category, stylists by name with level, interior and work photos, hours/address/map, Instagram link, review counts.
Opportunities nobody uses: a transparent price list with durations (only Luxor and Hive partly), bilingual English/中文, colour work as the hero instead of an interior, booking rules and parking/SkyTrain notes.

## Design decisions
- **Palette from the room**: graphite for the bare concrete wall, warm white for the neon V with a faint cool halo, oak and walnut from the curved wooden slat wall, bone and sand for daylight sections. Dark is used only where the room is actually dark (hero, visit, footer).
- **Type**: Syncopate for the wordmark and eyebrows, because the storefront's VSALON lettering is wide and letterspaced; Bricolage Grotesque for headlines; Figtree for body with PingFang/Hiragino/YaHei fallbacks for Chinese.
- **Signature**: the neon V, drawn as an inline SVG with a layered glow and a slow neon flicker (disabled under reduced motion). The wooden slat wall becomes a faint vertical-line texture behind the stylist cards.
- **Hero**: three overlapping colour results (blue bob, tangerine waves, lilac balayage) instead of one interior photo, because colour variety is what the salon is known for. Headline "Colour that moves. Cuts that stay effortless." is built from their own captions ("Soft layers, effortless movement", "Colour revived, waves alive").
- **Structure**: single page. Hero → proof strip → The salon → Services & prices (sticky category chips, durations) → Stylists (book by name) → Our work (masonry, lightbox) → Reviews → Good to know → Visit → footer. Hidden promo bar included.
- **Copy voice**: short declarative fragments, bilingual touches, no exclamation marks. Goldie's "Luxury lies in restraint" quoted on her card.

## What was built
- Nav: wordmark with V, six section links, Book button, mobile menu with call link.
- Hero: glowing V, headline, subline with English · 中文, Book on Fresha + call, three-card photo stack, ratings strip.
- The salon: room description from Fresha's About text tightened, six amenities, three interior photos.
- Services & prices: 22 services in four categories from `services.js`, with durations; consultation-priced items labelled "Consultation"; Redo shown as Free.
- Stylists: four cards with level, Fresha rating and a one-line description; "Choose your stylist" opens Fresha's professional picker.
- Our work: 20 colour and cut photos with captions and lightbox; link to Instagram.
- Reviews: six real quotes (five Fresha, one Google) naming the stylist and service; ratings for Google, Fresha, Yelp.
- Good to know: six answers on booking, colour pricing, redo, stylist choice, parking and transit, payment and WeChat.
- Visit: hours, contact, address, directions, storefront photo, embedded map.
- Footer: tagline, social and Fresha links, "We're hiring" (to Instagram), site credit.

## Assumptions
- Fresha lists nine colour, perm and treatment services at "from CA$1" or "CA$1". This is a placeholder, not a price. The site shows "Consultation" for these. If the owner wants numbers shown, edit `services.js`.
- "Redo · free" on Fresha is presented as "Redo appointments are listed at no charge"; conditions (time window, same stylist) are unknown.
- Hours 11–7 daily, per Fresha, not Google's 10–7.
- Stylist descriptions were written from reviews and Goldie's Instagram captions; they are not official bios.
- "Every cut is a Director cut" headline comes from Fresha naming every haircut "Director … Haircut by …" at the same price for all four stylists.
- Location description "ground floor of MC2 South Tower, at Cambie and Marine" comes from Google's "Located in" field and the address; "across from Marine Drive station" from the map (station is at Cambie and SW Marine).
- "Free parking garage" and "free street parking" are Google's amenity flags; exact garage entrance not verified.
- No gift cards: Fresha's gift card page says none are available, so no gift-card link was added.
- Stylist cards all link to the same Fresha "choose professional" page; Fresha exposes no per-stylist deep link.
- The salon's Instagram highlights include "We Are Hiring"; the footer's hiring link goes to Instagram since no careers page exists.

## Open questions for the owner
- Confirm hours (10 or 11 am open) and whether they open on public holidays.
- Publish starting prices for colour, balayage, perms and scalp treatment, or keep "Consultation".
- Redo policy details.
- Is Goldie's @gol.inspired.space handle to be linked from her card?
- Preferred spelling: VSalon or Vsalon.
- Is the "Esse Beauty Corp" legal name wanted in the footer?

## Needs from the owner
- Real photos of: the four stylists (cards are text-only by design, but portraits would help), a clean wide shot of the wooden wave wall in daylight, a current storefront shot without the sandwich board.
- Confirm: email still monitored (Facebook shows essevsalon@hotmail.com), WeChat handle.

## QA
Desktop 1440 and iPhone 15 checked with Playwright and in Chrome. No horizontal overflow (scrollWidth = innerWidth on both). No console errors. No broken images. All 32 local assets present. External links verified (fonts, Fresha ×4, Google Maps, Instagram, Facebook, credit). Yelp blocks curl (403) but opens in a browser. Reduced motion disables reveals, neon flicker and card transitions. Keyboard: skip link, visible focus rings, lightbox with Esc and arrow keys.

Note for future builds: port 8078 was already serving another project (a1-barber-studio-website), which produced a wrong first screenshot. The server now runs on 8081.

## Placeholder / generated images
None. All 34 photos are the salon's own (Google Business Profile and Fresha).
