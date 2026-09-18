# VSalon — website

Single-page static site for VSalon, 493 SW Marine Drive (MC2 South Tower), Marpole, Vancouver.
No build step. Open `index.html` or serve the folder with any static host.

## Files

- `index.html` — page structure and copy, plus the `HairSalon` structured data in `<head>`
- `styles.css` — all styling (design tokens at the top under `:root`)
- `services.js` — the service menu. **Edit this file to change prices, durations or names.**
- `main.js` — menu rendering, mobile nav, sticky category highlighting, gallery lightbox, reveal animations, promo bar
- `photos/` — optimized images (max 1800px, JPEG q82, progressive)
- `favicon.svg`, `apple-touch-icon.png` — the V monogram
- `deploy.sh` — publishes to web.soichirosaimon.com/vsalon/
- `REPORT.md` — build report: sources, assumptions, open questions

## Updating prices

Open `services.js`. Each category has an `items` array of `[name, duration, price, note]`.

- `"$89"` renders as a fixed price.
- `"from $1,200"` renders as a starting price.
- `"consult"` renders as **Consultation**. Fresha lists these services at "from CA$1", which is the salon's placeholder for pricing at consultation. Replace with a real number when the salon publishes one.
- `"free"` renders as **Free**.

Notes are optional. Save and refresh; nothing else changes.

## Updating photos

Drop a JPEG into `photos/` and reference it in `index.html`. Keep images under ~1800px on the long edge.
Gallery items live in the `<div class="masonry">` block; each `<figure>` has an `<img>` and a `<figcaption>`.
The three hero cards are `.card-a`, `.card-b`, `.card-c` in the hero section.

All photos are the salon's own, taken from their Google Business Profile and Fresha listing. No AI-generated images were used.

## Announcement bar

There is a hidden promo bar at the top of `index.html` (`<div class="promo" id="promo" hidden>`).
Put text inside its `<p>` and remove `hidden`; it will show above the nav.

## Booking and contact

Every "Book" button opens the Fresha booking page. "Choose your stylist" opens Fresha's professional picker.
Phone, email, Instagram and WeChat handle are in the Visit section and footer.
Hours are stated as "Every day, 11:00 am – 7:00 pm" in the Visit section and in the structured data.

## Local preview

```
cd vsalon-website
python3 -m http.server 8081
# open http://localhost:8081/
```

## Publish

```
./deploy.sh
```
Copies the folder into `sites/vsalon/` in the sonysaimon/web-design repo and pushes. Live at
https://web.soichirosaimon.com/vsalon/ a minute or two later.

## Sources

- Google Business Profile (photos, hours, amenities, 703 reviews at 4.8)
- Fresha venue page (menu, team, 500 reviews at 4.9, about text)
- Instagram @essevsalon (bio, captions, voice)
- Facebook page (contact, email)
- Yelp (5.0, 4 reviews)
