# HER Nails Lounge — website

Single-page static site for HER Nails Lounge, 1367 Richards St, Yaletown, Vancouver.
No build step. Open `index.html` or serve the folder with any static host.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling (design tokens at the top under `:root`)
- `services.js` — the service menu. **Edit this file to change prices, durations, names or descriptions.**
- `main.js` — menu rendering, mobile nav, category highlighting, gallery lightbox, reveal animations
- `photos/` — optimized images (max 1800px, JPEG q82)
- `favicon.svg`, `apple-touch-icon.png`

## Updating prices

Open `services.js`. Each category has an `items` array of `[name, duration, price, description]`.
A price written as `"from $40"` renders as a starting price. Plain `"$68"` renders as a fixed price.
Descriptions are optional. Save the file and refresh; nothing else needs to change.

## Updating photos

Drop a new JPEG into `photos/` and reference it in `index.html`. Keep images under ~1800px on the long edge.
Gallery items live in the `<div class="masonry">` block; each `<figure>` has an `<img>` and a `<figcaption>`.

## Booking and contact

All "Book" buttons open the Fresha booking page. Phone, email, Instagram and address are in the Visit section
and the footer. Hours are stated as "Every day, 10:00 am – 7:00 pm" in the Visit section and in the
structured data block in `<head>`.

## Local preview

```
cd her-nails-lounge-website
python3 -m http.server 8077
# open http://localhost:8077/
```

## Sources

Content and photos were gathered from the salon's Instagram (@hernailslounge), their Fresha listing
(menu, hours, team, reviews) and their Google Business Profile, September 2026.

## Editing and publishing later

1. Edit the files in this folder (`~/her-nails-lounge-website`). Prices live in `services.js`,
   copy in `index.html`, colours and fonts at the top of `styles.css`.
2. Preview locally (see above) and check the page in a narrow window for mobile.
3. Run `./deploy.sh`. It copies this folder into `~/web-design/sites/her-nails-lounge/`,
   commits, and pushes to `sonysaimon/web-design`. GitHub Actions rebuilds and the site is live
   at https://web.soichirosaimon.com/her-nails-lounge/ within a couple of minutes.

You can also ask Claude Code to make the change and run `./deploy.sh` for you.
