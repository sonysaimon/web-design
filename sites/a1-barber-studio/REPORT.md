# A1 Barber Studio — build report (2026-09-18)

Local preview: http://localhost:8078/ (server started from this folder) · Publish when ready: `./deploy.sh` → https://web.soichirosaimon.com/a1-barber-studio/

## Business facts
| | Value | Source |
|---|---|---|
| Name | A1 Barber Studio (Setmore URL says "a1barbarshop"; company email is a1scissorsltd) | Setmore, Google |
| Category | Barber shop, men's grooming, 4 chairs | Setmore, Google |
| Address | Unit 140, 332 Water St, Vancouver BC V6B 1B6, inside Le Magasin Gastown | Google ("332 Water St #140, Located in: Le Magasin Gastown"); Setmore writes "140/332 Water Street" |
| Phone | (236) 513-1839 | Setmore, Google |
| Email | a1scissorsltd@gmail.com | Setmore |
| Hours | Every day 9:00 am – 8:30 pm | Instagram bio and Google agree |
| Booking | Setmore, https://a1barbarshop.setmore.com/ (per-barber booking available there) | Setmore |
| Ratings | Google 4.9 (1,029) | Google Maps |
| Team | Mike, Rai, Jay Jay, Leo | Setmore |
| Socials | Instagram @a1barberstudi0 (101 posts, 281 followers), TikTok @a1vancity | Setmore, Instagram |

**Conflicts between sources**
- Review count: Setmore's widget shows "4.9 · 1456 reviews"; Google itself shows 1,029. The site uses Google's own count.
- Address format: Setmore "140/332 Water Street, Central Vancouver"; Google "332 Water St #140". Site uses "Unit 140, 332 Water St".
- No conflicts on hours, phone or postal code.

## Sources used
- Setmore booking page: services, durations, prices, booking and cancellation policy, About text, team bios, team photos, logo, social links.
- Google Maps (cid 8474878097298580342): rating, count, hours table, address, "Located in", owner post, review quotes, place photos.
- Instagram @a1barberstudi0: bio hours, 12 loaded posts (mostly reels reposted from barber Rai, @rai.rzzz), captions.
- Google Ads copy seen in Maps results: "Fresh Vibes, Killer Fades", "Fresh Fade, No Cap" (used for the hero's tone).

## Competitors studied
| Competitor | Google | Website | What they do well | Adopted? |
|---|---|---|---|---|
| New Shanghai Barbershop, Chinatown | 5.0 (856) | shanghaibarbershop.ca | Heritage story since 1963, press logos, Reviews page, "Appointments recommended, walk-ins welcome when time allows", careers form | Story block ("The room"), reviews section, clear hero headline with place name |
| VAN FADE Barbershop Downtown | 4.9 (441) | vanfade.ca | Segmented services, gallery, socials incl. TikTok; no prices, no reviews, no team | Gallery + TikTok link; A1 goes further with prices and reviews |
| Victory Barber & Brand, Cordova St | award-winning | victorygastown.com | Strong tagline ("Keep Gastown Handsome"), owner story, Instagram feed; Fresha booking; no prices/ratings | Short, punchy headline in the shop's own voice |
| Farzad's Barber Shop, Yaletown | press-heavy | farzadsbarbershop.com | Only local site showing prices; press wall; strict card-on-file policy; two-chair scarcity | Prices on the page; plain-language policy in "Good to know" |
| Barber & Co, Yaletown + Main | brand | barberandco.com | Product line, gift shop, Squire per-location booking; no team, no reviews | Nothing (A1 sells no products) |
| JD's Barbershop, Abbott St | small count | jdsbarbershop.com | Shopify store is currently **unavailable** (dead site) | Opportunity: A1's site will be the only working one on Water/Abbott |
| Fellow Barber (NY/LA/SF brand) | — | fellowbarber.com | Press quotes, gift cards, how-to content | Nothing directly; noted "location over bios" pattern, rejected because A1's reviews name barbers constantly |

Table stakes in this market: Book button in header and repeated; services list; gallery; hours + address + map; Instagram; team bios.
Opportunities nobody uses: prices on the homepage (only Farzad's), Google rating with count on the page, cancellation and arrival policy in plain sight, bookable individual barbers. A1 has all four ready, so the site leads with them.
Visual gap: every local competitor is dark, vintage or gold-on-black. A1's room is bright white with oak floors. The site is the only bright, modern one in the set.

## Design decisions
- Palette from the room: plaster #F7F5F0, oak #C49A6C, chair black #141414, chrome grey. No accent colour beyond oak.
- Type: Archivo at 125% width, weight 800, for headlines (blunt, modern shop-sign feel); Archivo regular for body; IBM Plex Mono for prices, durations and labels (precision register from Mike's bio).
- Signature device: "the fade", a black-to-transparent gradient band under the hero and a dark-to-clear gradient over the top of the hero photo. Nothing else decorative.
- Structure (single page, barber blueprint): hero → cuts & prices with per-row Book → barbers with photos, bios and Book-with links → the work (gallery + room) → reviews (dark band) → good to know (FAQ from their policy) → visit with map → footer.
- Copy in their voice, tightened: "Killer fades. Honest prices." from their ad line and the price/value theme in reviews; bios from Setmore, lightly edited; About text reworked into "The room".

## What was built
- Sticky nav with Book now; mobile menu.
- Hero with headline, lede, Book/Call, proof chips (4.9 × 1,029, from $25, 4 barbers), chair-by-the-window photo.
- Cuts & prices: 7 services from `services.js` with duration, price and Book, plus a "Not sure which one?" panel.
- Barbers: Mike, Rai, Jay Jay, Leo with photos, specialties, bios, Book-with links.
- The work: 9-image gallery with lightbox, Instagram and TikTok links; "The room" block with two interior photos.
- Reviews: six real quotes naming barbers, rating link to Google.
- Good to know: six Q&As from their policy, location and services.
- Visit: hours, phone, email, socials, address, directions, embedded map, Book now.
- Footer with credit; promo bar present but hidden; favicon; touch icon; JSON-LD BarberShop schema; OG tags.

## Assumptions
- Barber photo mapping (Mike = b&w portrait, Rai = studio shot, Jay Jay = barber in red beanie, Leo = beanie profile) follows the order of the four avatar images in Setmore's DOM. **Verify with the owner.** Rai's image is a work shot, not a portrait.
- "Four minutes on foot from Waterfront Station" is from map distance (~350 m).
- "Walk in" wording in the hero assumes walk-ins are accepted (Google reviews mention stopping by; Setmore does not say). Remove if not.
- The "Haircut" description ("fade or taper, blended and lined up") and other one-line service notes are written from the service names and review themes; Setmore's "Details" text could not be read by automation.
- Setmore does not offer gift cards or products for this shop, so none are shown.

## Open questions for the owner
- Are walk-ins accepted, and is there a same-day policy?
- Can each barber be booked by name from a direct Setmore link? (The site links to the main booking page for all four.)
- Payment methods, parking, any student or kids pricing?
- Confirm the shop name spelling everywhere: "A1 Barber Studio" (site) vs "A1 Barbershop" (Google Ads).

## Needs from the owner
- A portrait of Rai; higher-resolution portraits for all four.
- Storefront/entrance photo (how to find unit 140 inside Le Magasin).
- 6–10 more finished-cut photos in the shop.
- Confirmation of the barber-to-photo mapping above.

## QA
Desktop 1440 and iPhone 15 (393) viewports checked with Playwright and in Chrome · no horizontal overflow (393×393) · no console errors · no broken images · all local assets present · external links verified (Setmore, Instagram, TikTok, Google Maps cid) · lazy images, alt text, focus styles, reduced motion respected · map embed confirmed loading in Chrome.

## Placeholder / generated images
None. All photos are the shop's own (Setmore avatars, Instagram posts, Google place photos). Two Google photos that belonged to other shops were excluded.
