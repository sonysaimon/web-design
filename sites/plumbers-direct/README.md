# Plumbers Direct — website

Static multi-page site for Plumbers Direct (Toronto plumber, 2100 Bloor St W). Built 2026-10-27 as a
demo to pitch the owner. No framework, no build step beyond one Python script.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page. Hand-written. Also the **source of the shared header, footer and `<head>`** for every other page (the blocks between `<!--HEAD-->`, `<!--CHROME-TOP-->` and `<!--CHROME-BOTTOM-->` markers). |
| `build.py` | Generates the inner pages from `index.html`'s chrome + `services.js`: `services.html`, nine `<service>.html` pages, `service-area.html`, `about.html`, `reviews.html`, `contact.html`. Run `python3 build.py` after editing index.html chrome, services.js, or the page copy inside build.py. |
| `services.js` | The nine services: name, problem label, short blurb, includes list, page copy, FAQ, which reviews to show. Edit here; home grid, hero picker and service pages all read it. Keep it valid JSON after `= `. |
| `reviews.js` | Google review quotes (first name + initial, date, job, technician). Edit or add here. |
| `main.js` | Nav toggle, hero problem picker, renders service cards and reviews, scroll reveal, Formspree form submit, footer year. |
| `styles.css` | Design tokens in `:root` at the top, then sections, service-page template, responsive at 1024 / 860 / 560 px. |
| `photos/` | Optimised JPEGs (see "Photos" below). |
| `favicon.svg`, `apple-touch-icon.png` | PD mark. |
| `deploy.sh` | Publishes to `sites/plumbers-direct/` in the sonysaimon/web-design repo → https://web.soichirosaimon.com/plumbers-direct/ |
| `REPORT.md` | Research, decisions, assumptions, QA, what the owner must supply. |

## Edit the common things

- **Phone number**: search for `416-402-7798` and `+14164027798` in `index.html`, `build.py`, `main.js`, `services.js`. Rebuild.
- **Request form**: replace `YOUR_FORM_ID` in `index.html` with the Formspree form ID (one form, used on home and contact). Rebuild.
- **Reviews**: edit `reviews.js`. The home page shows the six IDs listed in `main.js` (`pick`), each service page shows the IDs in its `reviews` field in `services.js`.
- **Service areas**: list in `index.html` (home) and `AREAS` in `build.py` (area page).
- **City subsidy amounts**: `index.html` subsidy section and `services.js` → `sump-pumps-flooding`. Checked against toronto.ca on 2026-10-27 ($6,650 max per property as of May 1, 2026).
- **Nav / footer**: edit in `index.html`, run `python3 build.py`.

## Photos

All from the business's own public sources (Google Maps place photos and the old plumbersdirect.ca).
No AI-generated images. The owner should replace these with higher-resolution originals:

| File | Source | Note |
|---|---|---|
| `hero-van.jpg`, `hero-van-mobile.jpg` | Google Maps place photo (828 px) | **Upscaled 2× with Pillow, slightly soft on retina. Replace with the original photo.** |
| `billboard-drip-leak-clog.jpg` | Google Maps place photo | Pattison transit-shelter ad. Used on About. |
| `job-water-heater.jpg`, `job-shower-valve.jpg`, `job-tub-rough-in.jpg`, `job-shower-install.jpg`, `job-drain-camera.jpg` | Google Maps place photos | Captions on the home page are descriptive guesses from the photo; confirm. |
| `crew-at-work.jpg` | old site about-img (550 px) | Low resolution; replace. |
| `frozen-pipe.jpg` | old site services-img-3 | Possibly stock; replace with a real photo or drop. |
| `logo-original.jpg` | old site wordmark | Not used on the page (wordmark is rebuilt in CSS/text); kept for reference. |

## Preview locally

```
cd ~/plumbers-direct-website && python3 -m http.server 8083
# http://localhost:8083/
```

## Publish

`./deploy.sh` (needs the web-design repo clone and push access). Live about two minutes later at
https://web.soichirosaimon.com/plumbers-direct/
