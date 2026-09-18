# A1 Barber Studio — website

Single-page static site for A1 Barber Studio, Unit 140, 332 Water St (Le Magasin), Gastown, Vancouver.
No build step. Serve the folder with any static host.

## Files
- `index.html` — structure and copy. Sections: hero, cuts & prices, barbers, the work, reviews, good to know, visit.
- `styles.css` — all styling; design tokens at the top under `:root`.
- `services.js` — **the price list. Edit this to change prices, durations or notes.** Each row is `[name, duration, price, note]`.
- `main.js` — renders the price list, mobile nav, reveal-on-scroll, gallery lightbox.
- `photos/` — optimized images (max 1800px, JPEG q82). `logo.png` is the A monogram from Setmore.
- `favicon.svg`, `apple-touch-icon.png`, `deploy.sh`, `REPORT.md` (build report with sources and open questions).

## Editing
- Prices: `services.js`, save, refresh.
- Hours, phone, address: search `index.html` for "9:00" / "236" / "332 Water" (they appear in the hero, Good to know, Visit, footer and the JSON-LD block in `<head>`).
- Promo bar: in `index.html`, put text inside `<div class="promo" id="promo" hidden>` and remove `hidden`.
- Barber photos: `photos/team-*.jpg`. The Rai card uses a work shot (`client-cape.jpg`) because Setmore had no portrait for him. Replace when you have one.
- Gallery: `<div class="grid" id="gallery">` in `index.html`; each `<figure>` is one image with a caption.

## Preview
```
cd a1-barber-studio-website
python3 -m http.server 8078
# open http://localhost:8078/
```

## Publish
`./deploy.sh` copies this folder into `~/web-design/sites/a1-barber-studio/`, commits and pushes. GitHub Actions
publishes it at https://web.soichirosaimon.com/a1-barber-studio/ within a couple of minutes.

## Sources
Setmore booking page (services, prices, policy, team bios, photos), Google Business Profile (rating, hours,
address, reviews, photos), Instagram @a1barberstudi0 (photos, hours), September 2026.
