# Beach Ave Bar & Grill — website

Demo site for Beach Ave Bar & Grill (#1–1012 Beach Ave, Vancouver), built 2026-10-15 to
replace their thin Squarespace page. Three pages, static, no build step.

## Files
- `index.html` — home: hero with live "tonight's sunset" card, trust strip, signature dishes,
  happy hour board, brunch, story, gallery, reviews, visit teaser.
- `menu.html` — full tabbed menus (Food / Brunch / Drinks / Happy Hour), rendered from
  `services.js`. Deep links work: `menu.html#brunch`, `#drinks`, `#happyhour`.
- `visit.html` — hours, map, getting here (seawall/bike/parking/transit), FAQ.
- `services.js` — **all menu items and prices live here.** Edit this file to change the menu;
  both the menu page and the home happy hour board update automatically. Prices copied from
  the October 2026 printed menus.
- `styles.css` — design tokens at the top of the file (colours from their logo).
- `main.js` — sunset time calculation (no network calls), menu rendering, scroll reveals.
- `photos/` — optimized photos taken from beachavebarandgrill.com (their own photography).

## Local preview
```
python3 -m http.server 8095
```
then open http://localhost:8095/

## Publish
`./deploy.sh` pushes to web.soichirosaimon.com/beach-ave-bar-and-grill/ — do not run
until Sony says go.

## For the owner / to improve later
- All photos are the restaurant's own, pulled from their current site. A real sunset/patio
  wide shot would make the hero even stronger (current hero is their food spread).
- "Getting here" parking/transit details are based on the location (Aquatic Centre lot,
  Beach Ave bike lane, #23 bus, False Creek Ferries) — have the owner confirm.
- FAQ answers for groups/kids/takeout are inferred from Google reviews and their listing —
  confirm with the owner.
- No online ordering/delivery links were confirmed; add DoorDash/UberEats links if they
  have them.
- Review quotes are real Google reviews (first names only).

## Weather edition (this folder only, added 2026-11-25)

This folder is a copy of `~/beach-ave-bar-and-grill-website` with one addition: live weather.

- **Hero chip** under the two buttons: "Vancouver now 11° · light rain →". It starts as a plain
  "Vancouver weather forecast" link and fills in when the reading arrives; tapping it opens the
  Environment Canada forecast.
- **Sunset card**: a "Right now in Vancouver" block with the current reading and today's outlook.
- Data: Environment and Climate Change Canada, Vancouver city page (`api.weather.gc.ca`,
  item `bc-74`). The reading is taken at Vancouver International Airport, so the label says
  "Vancouver", not "Sunset Beach". Credit line is in the sunset card.
- Code: `initWeather` in `main.js`, "Live weather" block in `styles.css`, `#wx-chip` and
  `#wx-now` in `index.html`. One request per visit, saved for 10 minutes. If the service is
  down the chip stays a link and the card block stays hidden.
- Preview: `python3 -m http.server 8102`. `deploy.sh` would publish to
  `web.soichirosaimon.com/beach-ave-bar-and-grill-mark-2/` (not run).
