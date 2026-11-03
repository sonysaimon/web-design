# Broadway Locksmith — demo website

Single-page site for Broadway Locksmith Ltd, 335 West Broadway, Vancouver (family owned since 1971).
Built 2 Nov 2026 by Sony Saimon as a demo to pitch to the owner. Static HTML/CSS/JS, no build step.

## Files
- `index.html` — structure, copy, JSON-LD Locksmith schema in `<head>`.
- `styles.css` — design tokens in `:root` (navy, brass, paper), then sections, then responsive rules.
- `services.js` — ALL editable content: business facts, the list of keys cut, the four service pillars, brands, reviews, FAQ. Edit this file to change what the page says.
- `main.js` — renders `services.js` into the page, mobile menu, open/closed status (Vancouver time, counter 9:00–5:30 Mon–Fri, phones from 8:30), FAQ accordion.
- `photos/` — real photos from the shop's Google listing (key wall, workshop, storefront, hardware wall) optimized to ≤1800px JPEG. `photos/products/` — small product shots from the old site's gallery.
- `favicon.svg`, `apple-touch-icon.png` — key mark in navy and brass.
- `deploy.sh` — publishes to https://web.soichirosaimon.com/broadway-locksmith/ (run only when the owner says go).

## Edit the content
Open `services.js`. Each block is plain text: change a key type, a service bullet, a review or an FAQ answer and reload. No prices are shown (the shop quotes by phone).

## Hours note
Reviews say the counter opens at 9:00 even though phones are answered from 8:30. The site says both. Confirm with the owner.

## Preview locally
```
cd ~/broadway-locksmith-website && python3 -m http.server 8080
```
then open http://localhost:8080/

## Publish
`./deploy.sh` pushes the folder to the web-design repo; live a minute or two later.

## Placeholder images
None. All photos are the business's own (Google listing + old website gallery). Replace with higher-resolution originals from the owner when available.
