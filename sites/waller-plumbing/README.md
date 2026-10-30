# Waller Plumbing — demo website

Static multi-page site for Waller Plumbing Ltd. (Surrey, BC). Built 2026-10-30 as a demo to pitch to the owner, Adam.

## Files
| File | What it is |
|---|---|
| `services.js` | **All content**: business facts, the 9 services (copy, included list, FAQ, related, reviews), review quotes, service areas, home FAQ. Edit this first. |
| `build.py` | Generates header/footer, service cards, reviews, areas, FAQ and JSON-LD into `index.html`, and writes `services/<slug>.html` + `service-areas.html`. Run `python3 build.py` after editing `services.js` or the markers in `index.html`. |
| `index.html` | Home page. Hand-written sections (hero, tank-age checker, emergency band, recent work, what to expect, about, contact form) plus `<!-- name:start/end -->` markers that build.py fills. |
| `styles.css` | Tokens in `:root` at the top (colours, type, radii), then components, then responsive rules. |
| `main.js` | Live status line, tank-age checker, mobile drawer, scroll reveal, form submit, year. |
| `photos/` | Optimised JPEGs (max 1800px, q82). See "Photos" below. |
| `favicon.svg`, `apple-touch-icon.png` | Water-drop mark in the logo blue. |
| `deploy.sh` | Publishes to `sites/waller-plumbing/` in the `sonysaimon/web-design` repo → https://web.soichirosaimon.com/waller-plumbing/ |
| `REPORT.md`, `RESEARCH.md` | Build report and raw research notes. |

## Common edits
- **Phone / email / address**: `BUSINESS` in `services.js`, then `python3 build.py`. The hero, emergency band and contact section in `index.html` also contain the number as text; search for `778 898 6189`.
- **Add or change a service**: add an object to `SERVICES` (copy an existing one), give it a `photo` that exists in `photos/`, run the build. Nav drawer, footer and cards update automatically.
- **Reviews**: `REVIEWS` holds the quotes; `HOME_REVIEWS` picks the six shown on the home page; each service lists three in `reviews`.
- **Form**: `index.html` posts to `https://formspree.io/f/REPLACE_ME`. Create a Formspree form for adam@wallerplumbing.ca and replace the ID.
- **Review count**: `BUSINESS.rating` / `reviewCount` feed the schema; the visible "16 reviews" text appears in `index.html` and `build.py` (facts row).

## Photos
All are real Waller photos, no AI placeholders.
- From their Google listing (2023): `hero-tankless.jpg`, `job-shower.jpg`, `job-water-main.jpg`, `job-tank-filter.jpg`.
- From their Facebook-era website uploads (2019, low resolution): `adam-furnace.jpg`, `tech-mechanical-room.jpg`, `bathroom-tub.jpg`, `bathroom-freestanding.jpg`, `job-tank-1/2/3.jpg`, `job-excavator.jpg`, `job-trench.jpg`, `job-camera-dig.jpg`, `furnace-open.jpg`.
- Stock images that were on the old site, used only as service-card thumbnails: `stock-sump.jpg` (sump pumps), `stock-storm-line.jpg` (septic). **Replace with real photos.**
- The 280–370px Facebook photos (`job-excavator`, `job-trench`, `job-camera-dig`, `job-tank-*`) are soft at card size. Ask Adam for originals.

## Local preview
```
python3 -m http.server 8097
open http://localhost:8097/
```

## Publish
`./deploy.sh` (needs push access to sonysaimon/web-design). Live a minute or two later at https://web.soichirosaimon.com/waller-plumbing/.
