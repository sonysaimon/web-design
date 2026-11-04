# Vancouver Chiropractic Services — demo website

Static single-page site for Vancouver Chiropractic Services (Dr. Michael Horowitz & Associates), Suite 114, 3195 Granville St, Vancouver. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Chiropractor`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top, then sections, then responsive rules.
- `services.js` — **all editable content**: hours, services, conditions, fees, insurers, team, reviews, FAQ. `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, today's hours highlight.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr), plus the hero plumb line draw-in. Switches itself off for users with reduced motion.
- `mask-pebble.svg`, `mask-wave.svg` — CSS mask shapes for the two parallax photos.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All are the clinic's own photos from vancouverchiropractic.net; none are stock or AI-generated.
- `favicon.svg`, `apple-touch-icon.png` — icons (plumb line mark).
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/vancouver-chiropractic-services/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, assumptions, open questions for the owner, QA.

## Edit fees, hours or text
Open `services.js`. `fees[]`, `hours[]`, `insurers[]`, `faq[]` and `reviews[]` are plain arrays. Save and reload.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path (and width/height) in `services.js` or `index.html`.

## Preview locally
```
python3 -m http.server 8110
```
then open http://localhost:8110/

## Publish
```
./deploy.sh
```
