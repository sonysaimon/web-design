# Royal Plumbing Services Ltd. — website

Static, multi-page demo site for Royal Plumbing (614 Dufferin St, Toronto). No build step, no framework.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero with the "What's going on?" picker, trust strip, services, emergency band, guarantee, work photos, team, reviews, offers/rebate, Toronto know-how, areas + map, FAQ, request form, footer. |
| `drains-and-sewers.html`, `water-heaters.html`, `leaks-and-repipes.html`, `wet-basements.html`, `commercial.html` | Service pages, all on the same template: hero → what we do → 4 steps → Toronto specifics + reviews → FAQ → related → request form. |
| `service-areas.html` | Full area list by region, map, "not on the list?" card. |
| `styles.css` | Design tokens in `:root` at the top (colours, fonts), then components, then responsive rules at the bottom. |
| `data.js` | **Editable content**: phone number, Google rating + count, team names, and the review quotes (with tags that route them to service pages). |
| `main.js` | Behaviour: mobile menu, dispatch picker text, reviews/team rendering, reveal animation, form guard, footer year. |
| `photos/` | 11 real photos from the company's Google Business Profile plus the logo. All JPEG q82, max 1800px. |
| `favicon.svg`, `apple-touch-icon.png` | Icons. |
| `deploy.sh` | Publishes to `web.soichirosaimon.com/royal-plumbing/` via the web-design repo. |
| `REPORT.md` | Build report: sources, decisions, assumptions, what the owner needs to confirm. |

## Editing

- **Phone, rating, reviews, team**: `data.js`. The rating/count also appears as plain text in the hero, trust strip, footer and JSON-LD of each page, so search for `771` when the count changes.
- **Dispatch picker text** (hero chips): `ROUTES` at the top of `main.js`.
- **Subsidy amounts**: City of Toronto figures as of May 1, 2026 ($6,650 max). Search for `6,650` and `1,600` across the HTML if the City changes them.
- **Drain special ($97)**: placeholder card on the home page (dashed border). Confirm the price with the office or delete the card.
- **Request form**: replace `YOUR_FORM_ID` in every page's form `action` with a real Formspree form ID. Until then the form shows a "call us" message instead of submitting.
- **Hours**: topbar, footer, FAQ and JSON-LD all say Mon–Sat 7–7, Sunday closed, 24/7 emergency line.

The seven HTML pages were generated from one Python template; the header, footer and request band are identical across pages. Edit them with a find-and-replace across `*.html`.

## Local preview

```
cd ~/royal-plumbing-website && python3 -m http.server 8084
```
Then open http://localhost:8084/

## Publish

```
./deploy.sh
```
Live a minute or two later at https://web.soichirosaimon.com/royal-plumbing/

## Photos

All photos are the company's own Google Business Profile uploads. No stock or AI images are used. The owner should supply a crew portrait for the team block and a sharper van photo for the hero if available.
