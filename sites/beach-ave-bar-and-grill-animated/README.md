# Beach Ave Bar & Grill — animated edition

A second, separate version of the Beach Ave demo site. Same brand, facts, menu and photos as
`~/beach-ave-bar-and-grill-website`, rebuilt with smooth scrolling and scroll animation and
tuned phone-first. The original site is untouched.

## Files
- `index.html`, `menu.html`, `visit.html` — the three pages.
- `styles.css` — design tokens at the top; the "Animated edition" and "Phone" blocks are at the bottom.
- `services.js` — every menu item and price. Edit prices here; the menu page and the home-page
  happy hour board render from it.
- `main.js` — menu tabs, happy hour board, live sunrise/sunset/golden-hour times, the
  "Open now" and "Happy hour on now" chips (all Vancouver time, no network calls).
- `motion.js` — the animation layer (Lenis smooth scroll + GSAP ScrollTrigger from a CDN).
  Delete its `<script>` tag and the site is fully static; it also switches itself off for
  visitors who have "reduce motion" turned on.
- `mask-wave-top.svg`, `mask-wave-bottom.svg` — the wave shapes the brunch and patio photos sit behind.
- `photos/` — the restaurant's own photos (none generated).

## Preview
`python3 -m http.server 8101` in this folder, then open http://localhost:8101/

## Publish
`./deploy.sh` publishes to https://web.soichirosaimon.com/beach-ave-bar-and-grill-animated/
(a separate address; it does not replace the original site).
