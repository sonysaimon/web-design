# Sasamat Dental — demo website

Static single-page site for Sasamat Dental, 3780 W 10th Ave, Point Grey, Vancouver. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Dentist`), Open Graph tags, the appointment request form.
- `styles.css` — design tokens in `:root` at the top (palette from the clinic's own reception: white, birch, brass, sage, deep pine), then sections, then responsive rules.
- `services.js` — **all editable content**: service groups, team, Google review quotes, FAQ, hours, phone numbers. `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, the seven-day "week strip" with today ringed, hours table, FAQ accordion, demo form handling.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-facet.svg`, `mask-facet-2.svg` — the angled-corner photo masks (from the faceted reception desk).
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). `hero-reception.jpg`, `band-reception.jpg` and `desk-shelves.jpg` are three crops of the clinic's own Google Business Profile photo; `dr-xie.jpg` is from sasamatdental.ca. None are stock or AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/sasamat-dental/` (sonysaimon/web-design repo). Do not run until the owner has approved.
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Connect the appointment form
Create a form at https://formspree.io, then replace `PLACEHOLDER` in the `action` of `#request-form` in `index.html` with the form ID. Until then the form shows a "not connected" message instead of submitting.

## Edit hours, services or reviews
Open `services.js`. Hours are `[day, text]` pairs; write `'Closed'` for a closed day and the week strip dims that cell automatically.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge at or under 1800px, and update the path and width/height in `index.html` or `services.js`.

## Preview locally
```
python3 -m http.server 8104
```
then open http://localhost:8104/

## Publish
```
./deploy.sh
```
