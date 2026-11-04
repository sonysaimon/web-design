# Cedar Cottage Dental — demo website

Static single-page site for Cedar Cottage Dental, 3935 Knight St, Vancouver (Knight and Kingsway). No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Dentist`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top (quartz, stone, brass, ink), then sections, then responsive rules.
- `services.js` — **all editable content**: service groups and items, the three dentists with credentials and bios, review quotes, FAQ, hours, phone, email, the Formspree form id. Edit this file to change what the page says; `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, hours table with today highlighted, the "open now" line in the hero, request-form demo handling.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-cottage.svg` — the house-shaped CSS mask for the hero photo (drawn from the clinic's own house-and-tooth logo).
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). Both are the clinic's own photos from cedarcottagedental.com; none are AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons drawn from the logo.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/cedar-cottage-dental/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Make the request form live
Create a form at formspree.io, then put its id in `services.js` (`formAction: 'https://formspree.io/f/XXXX'`). Until then the form runs in demo mode and shows a note instead of sending.

## Change hours, services or dentists
Open `services.js`. Hours are `['Day', 'HH:MM', 'HH:MM']` in 24-hour time, or `null, null` for closed. Services are grouped; each item is a name plus one line. Save and reload.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge at or under 1800px, and update the path, width and height in `index.html`.

## Preview locally
```
python3 -m http.server 8102
```
then open http://localhost:8102/

## Publish
```
./deploy.sh
```
