# ADP Toronto Plumbing — website

Demo site for ADP Toronto Plumbing (Absolute Draining & Plumbing), 51 Homewood Ave #1, Toronto. Built 2026-10-27.
Static HTML/CSS/JS, no framework, no build step beyond one Python script.

## Files

| File | What it is |
|---|---|
| `site-data.json` | Business facts (name, phone, address, rating), the six featured services, the "also" list, the Toronto subsidy amounts used by the calculator, and the service-area groups. Edit here first. |
| `src/index.html` | Home page content (fragment). |
| `src/service-areas.html` | Service-area page content. |
| `src/services/*.html` | One fragment per service page. Each starts with a JSON block (title, description, schema). |
| `build.py` | Wraps every fragment in the shared shell (head, utility bar, header, nav, footer, mobile bar) and writes the final pages. Run `python3 build.py` after any edit to `src/` or `site-data.json`. |
| `index.html`, `service-areas.html`, `services/*.html` | Generated output. Do not edit by hand. |
| `styles.css` | Design tokens at the top (`:root`), then components, then responsive rules. |
| `main.js` | Menu, rebate calculator, scroll reveal, form handling, footer year. |
| `photos/` | Optimised images (see below). |
| `favicon.svg`, `apple-touch-icon.png` | Icons. |
| `deploy.sh` | Publishes to `web.soichirosaimon.com/adp-toronto-plumbing/`. |
| `REPORT.md` | Build report: sources, decisions, assumptions, what the owner must supply. |

## Editing

- **Phone, address, rating, review count**: `site-data.json`, then `python3 build.py`.
- **Subsidy amounts** (calculator + home FAQ + backwater page): the calculator reads `site-data.json` → `rebates` and `rebate_cap`. The prose on `src/index.html` (FAQ) and `src/services/backwater-valve-sump-pump.html` repeats the numbers; update those by hand.
- **Add a service page**: add an entry to `services` in `site-data.json` (slug, name, short, eyebrow, blurb, img or svg) and create `src/services/<slug>.html` by copying an existing one. Menu, home grid and footer update automatically.
- **Form**: replace `https://formspree.io/f/YOUR_FORM_ID` in `src/index.html` with a real Formspree endpoint. Until then the form shows a "demo site" message instead of sending.
- **Licence number**: footer line in `build.py` (`footer()`), replace `[to be confirmed by ADP]`.

## Photos

Real photos (from the current site and the Google listing):
- `job-backwater-valve.jpg` (670×270, low-res), `job-sump-pump.jpg` (670×421, low-res), `job-drain-excavation.jpg` (250×167, very low-res), `job-sump-pit.jpg` (1600×1200), `office-homewood.jpg` (1600×1200), `logo.png` (278×114, low-res).

**Replace with real photos** when the owner supplies them (all should be 1800 px on the long edge):
- Hero: currently no photo (the calculator card carries the hero). A crew-and-trucks photo would go left of the headline or behind it.
- Service cards for water main, drain cleaning, emergency and waterproofing use hand-drawn SVG diagrams (`build.py` → `PICT`). Swap any for a photo by setting `img` in `site-data.json`.
- `job-drain-excavation.jpg` is 250 px wide; replace first.
- Logo: ask for the vector file.

No AI-generated images are used (Higgsfield had no credits on build day).

## Preview and publish

```
python3 build.py
python3 -m http.server 8094      # http://localhost:8094/
./deploy.sh                      # publishes to https://web.soichirosaimon.com/adp-toronto-plumbing/
```
