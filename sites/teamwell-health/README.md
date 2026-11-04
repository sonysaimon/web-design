# TeamWell Health — demo website

Static single-page site for TeamWell Health, #402 – 3999 Henning Drive, Burnaby (chiropractic, naturopathic medicine, acupuncture, custom orthotics). No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`MedicalClinic`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top (logo navy and green, slate blue from the treatment tables), then sections, then responsive rules.
- `services.js` — **all editable content**: contact details, hours, the "not sure who to see?" chooser, services, team bios, reviews, FAQ. `main.js` renders it.
- `main.js` — nav, chooser, rendering, FAQ, hours, request form.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-peak.svg`, `mask-point.svg` — CSS mask shapes (the chevron from the logo) for the hero photo and the team photo.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All are the clinic's own photos: five from its Google Business Profile, Dr. Karen's headshot and the logo from teamwell.ca. None are stock or AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons drawn from the logo's stacked chevrons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/teamwell-health/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, assumptions, open questions for the owner.

## Hours
Google and the old site list no hours, so the page shows "Call for hours". To add them, fill `hours` in `services.js`:
```js
hours: [['Monday', '9:00 am – 6:00 pm'], ['Tuesday', '9:00 am – 6:00 pm'], ...],
```
The table highlights today automatically.

## Request form
`index.html` posts to `https://formspree.io/f/PLACEHOLDER`. Create a free Formspree form that forwards to burnaby@teamwell.ca and replace `PLACEHOLDER` with its id. Until then the form shows a local "Request sent" message and sends nothing (demo mode).

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path (and width/height) in `services.js` or `index.html`.

## Preview locally
```
python3 -m http.server 8109
```
then open http://localhost:8109/

## Publish
```
./deploy.sh
```
