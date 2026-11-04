# Central Park Chiropractic & Massage — demo website

Static single-page site for Central Park Chiropractic & Massage, 3977 Kingsway, Burnaby. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Chiropractor`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top, then sections, then responsive rules.
- `services.js` — **all the words that change**: the five care groups, conditions, insurers, fee tables, team bios, review quotes, FAQ, hours. Edit this file; `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, FAQ accordion, today's hours highlight.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `gaitmap.svg` — the illustrated GaitScan pressure map in the hero and behind the "How Dr. Kaila works" band. Generated, not a patient's scan.
- `photos/` — empty. The clinic's old site has only stock photos, so this build is photo-light on purpose. Drop real JPEGs here (max 1800px, q82) when the owner supplies them.
- `favicon.svg`, `apple-touch-icon.png` — icons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/central-park-chiropractic/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Edit fees or hours
Open `services.js`. `fees[].rows` are `[label, amount]` pairs; `hours` is `[day, text]`. Save and reload.

## Swap in a real photo
Put the JPEG in `photos/`, then replace the `.scan` figure in `index.html` with a `<div class="scan-frame" data-parallax><img ...></div>` pointing at it, or add a photo to the team cards.

## Preview locally
```
python3 -m http.server 8108
```
then open http://localhost:8108/

## Publish
```
./deploy.sh
```
