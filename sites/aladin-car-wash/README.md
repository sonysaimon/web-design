# Aladin Car Wash — demo website

Static single-page site for Aladin Car Wash, 6123 Hastings St, Burnaby. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`AutoWash`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top, then sections, then responsive rules.
- `services.js` — **all prices and offer text** (wash tiers, memberships, detailing cards, ozone prices, recent-work captions, reviews, FAQ, hours). Edit this file to change what the page says; `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, per-wash / monthly toggle, before/after card, hours highlight.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-arch.svg`, `mask-pebble.svg` — CSS mask shapes for the hero photo and the owner photo.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All are the business's own photos from its Google Business Profile; none are AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/aladin-car-wash/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Edit prices
Open `services.js`. `washes[].single` and `washes[].monthly` are numbers; `ozone[].price` and `detailing[].price` are strings. Save and reload.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path (and width/height) in `services.js` or `index.html`.

## Preview locally
```
python3 -m http.server 8081
```
then open http://localhost:8081/

## Publish
```
./deploy.sh
```
