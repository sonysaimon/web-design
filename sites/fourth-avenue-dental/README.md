# Fourth Avenue Dental Clinic — demo website

Static single-page site for Fourth Avenue Dental Clinic, 1905 W 4th Ave, Kitsilano, Vancouver. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Dentist`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top, then sections, then responsive rules.
- `services.js` — **all editable content**: services by group, team, review quotes, FAQ, hours, booking and contact links. `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, "open now" line, hours highlight, FAQ.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-heart.svg` — CSS mask shape (the heart from the clinic's logo) for the hero and lounge photos.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All are the clinic's own photos (its website and Google Business Profile); none are stock or AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons.
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/fourth-avenue-dental/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, conflicts, assumptions, open questions for the owner.

## Edit content
Open `services.js`. Services live in `groups[].items`, quotes in `reviews`, questions in `faq`, hours in `hours` (display) and `hours24` (for the "open now" line). Save and reload.

## Change the booking link
`booking` and `bookingHygiene` in `services.js` document the links; the buttons themselves are in `index.html` (search for `calendly.com`).

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path (and width/height) in `index.html`.

## Preview locally
```
python3 -m http.server 8105
```
then open http://localhost:8105/

## Publish
```
./deploy.sh
```
