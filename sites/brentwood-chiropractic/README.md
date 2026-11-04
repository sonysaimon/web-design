# Brentwood Chiropractic & Sports Rehab Centre — demo website

Static single-page site for Brentwood Chiropractic & Sports Rehab Centre, #101 – 1160 Douglas Road, Burnaby. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Chiropractor`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top, then sections, then responsive rules.
- `services.js` — **all the data**: care groups and fees, conditions, the course-of-care steps, team bios, founder, timeline, reviews, FAQ, hours. Edit this file to change what the page says; `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, FAQ, hours with today highlighted.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `pitch.svg` — the line drawing of a pitch used behind the lineage section (a nod to Dr. Joe Csabai's soccer career); `mask-pebble.svg` — its CSS mask shape.
- `photos/` — `insurers-direct-billing.jpg` (the insurer logo sheet from the clinic's own site), `bcca-logo.png` and `cca-logo.png` (association logos from the clinic's own site), `og.jpg` (typographic share card). None are AI-generated; there are no stock photos.
- `favicon.svg`, `apple-touch-icon.png` — icons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/brentwood-chiropractic/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Edit fees
Open `services.js`. Each entry in `services[].items` has a `name`, optional `time` and `note`, and a `fee` string shown as-is. Save and reload.

## Add a photo
Drop a JPEG in `photos/` (long edge ≤ 1800px, quality 82). The hero card (`.first-visit` in `index.html`) and the lineage band (`.masked-frame`) are the two places designed to take a real clinic or team photo; replace `pitch.svg` in the masked frame with the photo and it will drift behind the mask on scroll.

## Preview locally
```
python3 -m http.server 8107
```
then open http://localhost:8107/

## Publish
```
./deploy.sh
```
