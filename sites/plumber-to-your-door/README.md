# Plumber To Your Door — demo website

Static, multi-page demo site for Plumber To Your Door (Toronto plumber, 509 Bloor St W). Built 2026-10-27 as a redesign proposal. No build tools beyond Python 3.

## Files

| File | What it is |
|---|---|
| `content.py` | **All the words and data**: business facts, nav, services (8), projects, reviews, crew, service areas, FAQ. Edit this. |
| `build.py` | Generates every HTML page from `content.py`. Run `python3 build.py` after any edit. |
| `index.html`, `services/*.html`, `service-area.html`, `reviews.html`, `about.html`, `book.html` | Generated pages. Don't hand-edit; change `content.py` or `build.py` and rebuild. |
| `styles.css` | Design tokens at the top (`:root`), then components, sections, responsive rules. |
| `main.js` | Mobile nav, hero symptom picker, scroll reveal. No dependencies. |
| `photos/` | The business's own photos from plumbertoyourdoor.ca, resized (max 1800 px, JPEG q82). `card-*.jpg` are 4:3 crops for service cards. Logo PNGs included. |
| `fonts/` | Self-hosted Big Shoulders Display (variable), IBM Plex Sans (variable), IBM Plex Mono 500. |
| `favicon.svg`, `apple-touch-icon.png` | The open-door mark from the logo. |
| `deploy.sh` | Publishes to web.soichirosaimon.com/plumber-to-your-door/ via the web-design repo. |
| `REPORT.md` | Research, sources, decisions, QA results, what the owner must supply. |

## Common edits

- **Phone, hours, licence, address**: `BUSINESS` in `content.py`.
- **Services**: `SERVICES` list. Each entry has `title`, `h1`, `card` (blurb), `intro`, `fixes` (list), `aside`, `faq`, `review` (key into `REVIEWS`), `related` (slugs), `photo` + `caption`, `card_photo`.
- **Hero symptom picker**: `SYMPTOMS`.
- **Reviews**: `REVIEWS` dict, `HOME_REVIEWS` picks the six on the home page.
- **Booking form**: replace `REPLACE_WITH_FORMSPREE_ID` in `BUSINESS["form_action"]` with a real Formspree form ID (or point it at the owner's own form handler).
- **Colours / type**: `:root` in `styles.css`.

Then: `python3 build.py`.

## Preview

```
cd ~/plumber-to-your-door-website
python3 -m http.server 8085
# open http://localhost:8085/
```

## Publish

`./deploy.sh` copies the folder into `sonysaimon/web-design` under `sites/plumber-to-your-door/` and pushes. Live a couple of minutes later at https://web.soichirosaimon.com/plumber-to-your-door/

## Photos to replace

All photos are the business's own, pulled from their current site. `commercial-garage.jpg` is low resolution (1134×580) and should be replaced with a sharper shot. No AI-generated images were used.
