# Lotus Dental — demo website

Static single-page site for Lotus Dental (Dr. Basant A. Rahman), Unit 610 – 4445 Lougheed Hwy, Burnaby. No build step.

## Files
- `index.html` — page structure, copy, JSON-LD (`Dentist`), Open Graph tags.
- `styles.css` — design tokens in `:root` at the top (lotus blue, gold, marble), then sections, then responsive rules.
- `services.js` — **everything the page says**: service groups, team, review quotes, FAQ, hours. Edit this file to change what the page says; `main.js` renders it.
- `main.js` — nav, rendering from `services.js`, FAQ accordion, hours with today highlighted, request-form demo handler.
- `motion.js` — smooth scroll and scroll reveals (Lenis + GSAP ScrollTrigger from jsDelivr). Turns itself off for users with reduced motion.
- `mask-petal.svg`, `mask-bud.svg` — CSS mask shapes (lotus petal) for the hero photo and the doctor's portrait.
- `photos/` — optimized JPEGs (max 1800px, q82, progressive). All are the clinic's own: Google Business Profile owner photos (reception, building entrance) and the current lotusdental.ca site (portrait, logo). None are AI-generated or stock.
- `favicon.svg`, `apple-touch-icon.png` — icons (a drawn lotus mark; the touch icon is the real logo).
- `deploy.sh` — publishes to `https://web.soichirosaimon.com/lotus-dental-burnaby/` (sonysaimon/web-design repo).
- `REPORT.md` — build report: sources, assumptions, open questions for the owner.

## Connect the appointment form
The form posts to `https://formspree.io/f/PLACEHOLDER`. Create a free Formspree form that forwards to lotusdental@shaw.ca, paste its id into the `action` in `index.html`, and `main.js` stops showing the demo message automatically.

## Edit hours or services
Open `services.js`. `hours` is an array of `[day, text]`; `services[]` are groups with `items`. Save and reload.

## Swap a photo
Drop the new JPEG in `photos/`, keep the long edge ≤ 1800px, and update the path and width/height in `index.html`.

## Preview locally
```
python3 -m http.server 8103
```
then open http://localhost:8103/

## Publish
```
./deploy.sh
```
