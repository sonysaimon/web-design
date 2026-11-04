# Broadway Family Dental Centre — demo website

Static single-page site for Broadway Family Dental Centre, 383 E Broadway, Vancouver (Dr. Peter Lam). No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Dentist`), Open Graph tags, the appointment request form.
- `styles.css` — design tokens in `:root` at the top (palette from the clinic's own waiting room), then sections, then responsive rules.
- `services.js` — **all editable content**: service groups, insurers, team bios, reviews, FAQ, hours. `main.js` renders it. No prices by design.
- `main.js` — nav, rendering from `services.js`, FAQ, hours-table "today" highlight, form submit state.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-soft.svg`, `mask-pebble.svg` — CSS mask shapes for the hero photo and the kids-section photo.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All five are crops of the one real photo of the clinic's reception area from the clinic's own website. None are stock or AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons (cobalt tile with the herringbone chevrons).
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/broadway-family-dental/` (sonysaimon/web-design repo). Not run yet.
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Edit content
Open `services.js`. Each service group has a `group`, a one-line `note` and an `items` list. Reviews are `{ name, text }`. Hours are `[day, text]` pairs; use `'Closed'` for closed days. Save and reload.

## Make the form work
Replace `https://formspree.io/f/PLACEHOLDER` in `index.html` (and `services.js`) with the clinic's Formspree form id. Submissions go to whatever email that form is set to.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path and width/height in `index.html`.

## Preview locally
```
python3 -m http.server 8101
```
then open http://localhost:8101/

## Publish
```
./deploy.sh
```
