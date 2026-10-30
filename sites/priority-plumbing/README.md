# Priority Plumbing & Drains — demo website

Static site, no build tools needed to view. Built 2026-10-27 as a demo rebuild to pitch to the owner.

Preview locally:

    cd ~/priority-plumbing-website && python3 -m http.server 8092
    open http://localhost:8092/

Publish (only when told to): `./deploy.sh` copies the folder into the `sonysaimon/web-design`
repo under `sites/priority-plumbing/` and pushes. Live at https://web.soichirosaimon.com/priority-plumbing/ a couple of minutes later.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero, trust strip, symptom picker, 4 service hubs, emergency band, promise, offers, reviews, areas + map, about teaser, how a visit goes, FAQ, CTA |
| `plumbing.html`, `drains-sewer.html`, `heating.html`, `waterproofing.html` | Service hub pages (problems list, pricing, recent jobs, reviews for that service, FAQ) |
| `areas.html` | Service areas, map, local-knowledge cards |
| `about.html` | Founder story, mission, awards and press, team names |
| `reviews.html` | All quotes with the technician filter |
| `services.js` | **Edit this** for phone, booking link, address, service lists, symptom picker, offers, areas. Every page reads it. |
| `reviews.js` | **Edit this** to add or remove review quotes (name, technician first name, service tag, quote) |
| `main.js` | Behaviour: menu, symptom picker, service grid, review filter, reveal animation |
| `styles.css` | Design tokens at the top (`:root`), then components |
| `fonts/` | Self-hosted Big Shoulders Display + IBM Plex Sans (woff2) |
| `photos/` | Optimised photos (max 1800 px, JPEG q82). All real, from the business's Google listing |
| `tools/build.py` | Generates the HTML pages from shared header/footer + page content. Run `python3 tools/build.py` after editing it. Do not edit the `.html` files by hand or the next build overwrites them. |
| `deploy.sh` | Publishes to GitHub Pages (see above) |
| `REPORT.md` | Research, audit of the current site, decisions, assumptions, open questions |

## Changing common things

- **Phone or booking link**: `services.js` → `business`, then `tools/build.py` (constants at the top) and rebuild. Both must match.
- **Offers**: `services.js` → `offers`. Add a date or terms when the owner confirms them.
- **Service list**: `services.js` → `services[].items` (name, two-line description) and `faq`.
- **Reviews**: `reviews.js`. The technician chips are generated from the `tech` field.
- **Photos**: drop a JPEG into `photos/` (resize to 1800 px long edge first) and reference it in `services.js` or `tools/build.py`.
- **Logo**: the header uses a typographic logotype. Replace `.logo` in `tools/build.py` with the real logo SVG when the owner supplies it.

## Placeholders to replace

- Header logotype (typographic stand-in for the real Priority Plumbing logo).
- Offer terms ("$99 clear any main drain", "$50 off") are taken from the trucks and the current site; confirm current conditions and add an expiry date.
- No AI-generated images were used. Every photo is the owner's own from Google Maps.
