# Stella Nails & Spa — website

Single-page static site for Stella Nails & Spa, 330 Robson St, downtown Vancouver.
No build step. Open `index.html` or serve the folder with any static host.

## Files

- `index.html` — page structure and copy, plus `NailSalon` structured data in `<head>`
- `styles.css` — all styling (design tokens at the top under `:root`)
- `services.js` — the price list. **Edit this file to change prices, durations or names.**
- `main.js` — price board rendering, mobile nav, sticky category chips, gallery lightbox, reveal animations, promo bar
- `photos/` — optimized images (max 1800px, JPEG q82, progressive)
- `favicon.svg`, `apple-touch-icon.png` — the black Stella disc
- `deploy.sh` — publishes to web.soichirosaimon.com/stella-nails-salon/
- `REPORT.md` — build report: sources, assumptions, open questions

## Updating prices

Open `services.js`. Each category has an `items` array of `[name, duration, price, note]`.
`"$42"` renders as a fixed price; `"from $60"` renders as a starting price. Notes are optional
and appear under the name. Save and refresh; nothing else changes.

## Updating photos

Drop a JPEG into `photos/` and reference it in `index.html`. Keep images under ~1800px on the long edge.
Gallery items live in the `<div class="masonry">` block; each `<figure>` has an `<img>` and a `<figcaption>`.
The five hero cards are `.hc-1` to `.hc-5`. The four salon photos are in `.salon-strip` at the bottom of Visit.

All photos are the salon's own, from their Instagram and Google Business Profile. No AI-generated images were used.

## Announcement bar

A hidden promo bar sits at the top of `index.html` (`<div class="promo" id="promo" hidden>`).
Put text inside its `<p>` and remove `hidden`. It shows in red above the nav.

## Booking and contact

Every "Book" button opens the Square Appointments page, which lets clients choose a technician.
Phone, email, Instagram and address are in the Visit section and footer.
Hours: Monday to Saturday 10:00 am – 8:00 pm, Sunday 11:00 am – 7:00 pm, in the Visit section and the structured data.

## Local preview

```
cd stella-nails-salon-website
python3 -m http.server 8082
# open http://localhost:8082/
```

## Publish

```
./deploy.sh
```
Copies the folder into `sites/stella-nails-salon/` in the sonysaimon/web-design repo and pushes.
Live at https://web.soichirosaimon.com/stella-nails-salon/ a minute or two later.

## Sources

- Square Appointments page (full price list with durations, staff list, hours, email)
- Google Business Profile (rating and 536 reviews, phone, amenities, photos)
- Instagram @stellanailsnspa.robson (bio, captions, 21 nail-art photos)
