# HD Nail Spa — website

Single-page static site for HD Nail Spa, 1932 West Broadway, Kitsilano, Vancouver.
No build step. Open `index.html` or serve the folder with any static host.

## Files

- `index.html` — page structure and copy, plus `NailSalon` structured data in `<head>`
- `styles.css` — all styling (design tokens at the top under `:root`)
- `services.js` — the service menu. **Edit this file to change prices, durations or names.**
- `main.js` — menu rendering, mobile nav, sticky category chips, gallery lightbox, reveal animations, promo bar
- `photos/` — optimized images (max 1800px, JPEG q82, progressive)
- `favicon.svg`, `apple-touch-icon.png` — an arch with "HD"
- `deploy.sh` — publishes to web.soichirosaimon.com/hd-nail-spa/
- `REPORT.md` — build report: sources, assumptions, open questions

## Updating prices

Open `services.js`. Each category has an `items` array of `[name, duration, price, note]`.
`"$41"` renders as a fixed price; `"from $56"` renders as a starting price. Notes are optional.
Save and refresh; nothing else changes.

## Updating photos

Drop a JPEG into `photos/` and reference it in `index.html`. Keep images under ~1800px on the long edge.
Gallery items live in the `<div class="masonry">` block; each `<figure>` has an `<img>` and a `<figcaption>`.
The hero arch photo is `.arch img` (its focal point is set with `object-position` in `styles.css`); the two
tucked photos are `.tuck-a` and `.tuck-b`. The salon photos are in `.salon-strip` at the bottom of Visit.

All photos are the salon's own, from their Instagram, Fresha listing and Google Business Profile.
No AI-generated images were used.

## Team

The technician names are in the `<ul class="by-list">` in the Team section. Add or remove `<li>` items to match Fresha.

## Announcement bar

A hidden promo bar sits at the top of `index.html` (`<div class="promo" id="promo" hidden>`).
Put text inside its `<p>` and remove `hidden`.

## Booking and contact

Every "Book" button opens the Fresha booking page. "Choose your technician" opens Fresha's professional picker.
Gift cards link to Fresha's gift card page. Phone, Instagram and address are in the Visit section and footer.
Hours: Monday to Saturday 10:00 am – 7:00 pm, Sunday and holidays 10:00 am – 5:00 pm.

## Local preview

```
cd hd-nail-spa-website
python3 -m http.server 8083
# open http://localhost:8083/
```

## Publish

```
./deploy.sh
```
Copies the folder into `sites/hd-nail-spa/` in the sonysaimon/web-design repo and pushes.
Live at https://web.soichirosaimon.com/hd-nail-spa/ a minute or two later.

## Sources

- Fresha venue page (menu with durations and prices, 17 technicians, hours, about text, 284 reviews at 4.9, gift cards)
- Google Business Profile (4.8 with 787 reviews, phone, amenities, photos)
- Instagram @hdnails1932 (bio, per-technician highlights, 33 nail-art photos)
- Existing site hdnails1932.com (postal code, hours wording)
