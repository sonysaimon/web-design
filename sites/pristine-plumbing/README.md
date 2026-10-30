# Pristine Plumbing & Drainage Ltd. — demo website

Static multi-page site for the Burnaby plumber whose current site is greatervancouverplumbing.ca.
Preview locally, review, then publish with `./deploy.sh` to https://web.soichirosaimon.com/pristine-plumbing/.

## Files
| File | What it is |
|---|---|
| `services.js` | **The only content file.** Business facts, 9 services (copy, included list, FAQ, gallery, related), the symptom picker, reviews, recent work, team, areas, home FAQ. Keep it as `window.PP = {…}` JSON. |
| `build.py` | Regenerates the 9 service pages and `service-areas.html` from `services.js` plus the header/footer in `index.html`. Run `python3 build.py` after any edit. |
| `index.html` | Home page. Header and footer live here between `HEADER:START/END` and `FOOTER:START/END` markers and are copied into every generated page. |
| `styles.css` | Design tokens at the top (`:root`), then sections, then responsive rules. |
| `main.js` | Mobile menu, services grid, symptom picker, work cards, review quotes, team, FAQ, form handling. |
| `photos/` | Optimized JPEGs (max 1800px, q82). All are the company's own photos from their site, Google listing and Instagram. |
| `favicon.svg`, `apple-touch-icon.png` | Purple tile with the 24/7 shield. |
| `deploy.sh` | Publishes to the web-design repo under `sites/pristine-plumbing/`. |
| `REPORT.md` | Research, audit, design decisions, assumptions, open questions. |

## Editing
- **Phone, address, ratings:** `services.js` → `business`. Also update the JSON-LD in `index.html` `<head>` and the header/footer markup (the phone appears as text there).
- **A service's copy or FAQ:** `services.js` → `services[]`, then `python3 build.py`.
- **Add a review:** `services.js` → `reviews` (key it), then reference the key in `index.html` (`data-ids` on `#quotes`) or a service's `reviews` array.
- **Recent work cards:** `services.js` → `work[]` (photo, title, place, service slug, one line).
- **Service areas:** `services.js` → `areas[]`; the footer list in `index.html` is static, keep it in sync.
- **Form:** replace `REPLACE_ME` in `index.html` (form action) and `services.js` with the real Formspree ID. Until then the form shows the thank-you message without sending (demo mode). File upload needs a Formspree plan that allows it; remove the `photo` field otherwise.

## Preview
```
cd ~/pristine-plumbing-website && python3 -m http.server 8098
```
Then open http://localhost:8098/.

## Publish
`./deploy.sh` (asks nothing; pushes to sonysaimon/web-design). Live about two minutes later.

## Things the owner must confirm before this goes live
- Phone **778-980-1883** is used everywhere (the old site shows 778-654-6814, likely a Web.com tracking number).
- Licence number: not published anywhere, so the footer says "Fully qualified journeyman plumbers · Red Seal · Licensed & insured" without a number. Add it when known.
- Team: Daniel (owner) and Andrew have photos from the old site; **Jeremy** has no confirmed photo and is shown as a styled name. Confirm names, roles, and that Teale is fine being named and pictured.
- "Same upfront pricing nights, weekends and holidays" is our wording of their "we pledge not to overcharge for emergencies" line. Confirm.
- "Four vans" comes from the crew photo; a review says three. Confirm fleet size.
- Review dates are approximate (Google shows "3 months ago" style).
- Moen Flo page uses general photos because the only Moen images on the old site are manufacturer marketing graphics.
- No AI-generated images anywhere.
