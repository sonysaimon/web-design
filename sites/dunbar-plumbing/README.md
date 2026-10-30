# Dunbar Plumbing Ltd. — website

Static site for Dunbar Plumbing Ltd., Vancouver West Side. Built 2026-10-30. Owner-approved real site; see **Before launch** below for the facts the owner must confirm.

## Files

| File | What it is |
|---|---|
| `content.py` | Every fact, service, review, FAQ and neighbourhood on the site. **Edit this**, then rebuild. |
| `build.py` | Renders all pages from `content.py`. Run `python3 build.py` (needs Pillow for image sizes). |
| `index.html` | Home. Generated. |
| `services.html` | Services hub. Generated. |
| `services/*.html` | One page per service (8). Generated. |
| `service-areas.html`, `contact.html`, `privacy.html` | Generated. |
| `styles.css` | Design tokens at the top (`:root`), then sections, then responsive rules. |
| `main.js` | Mobile menu, scroll reveal, request form submit, after-hours note, copyright year. |
| `photos/` | `crew-trucks.jpg` (hero, the only real photo), `crew-trucks-mobile.jpg` (right-hand crop), `crew-detail.jpg` (about section), `og.jpg` (social preview). |
| `fonts/` | Archivo Black and Archivo (variable), self-hosted. |
| `favicon.svg`, `apple-touch-icon.png` | Icons. |
| `deploy.sh` | Publishes to https://web.soichirosaimon.com/dunbar-plumbing/ via the sonysaimon/web-design repo. |
| `REPORT.md` | Build report: sources, conflicts, competitor notes, decisions, assumptions. |
| `RESEARCH.md` | Raw research notes. |

Do not edit the generated HTML by hand; it is overwritten on the next build.

## Editing

- Phone, email, hours, founder names, Formspree ID: `BUSINESS` at the top of `content.py`.
- Services: `SERVICES` list. Each entry has a slug, group (`fix` / `replace` / `renovate`), title, symptom line, lead, two intro paragraphs, included list, a West Side note, FAQ, two review keys and related slugs.
- Reviews: `REVIEWS` dict (name, source, year, text, job label). `HOME_REVIEWS` picks the six on the home page.
- Neighbourhoods: `AREAS`. FAQ: `FAQ_HOME`. Hero chips: `SYMPTOMS`. Van band lettering: `VAN_BAND`.
- Published URL for canonical/OG/schema: `BASE_URL`. Change it to `https://www.dunbarplumbingltd.com` when the site moves to the real domain.

Then: `python3 build.py`.

## Local preview

```
cd ~/dunbar-plumbing-website && python3 -m http.server 8096
```
Open http://localhost:8096/.

## Publish

`./deploy.sh` pushes the folder to `sites/dunbar-plumbing/` in the web-design repo. Live a minute or two later at https://web.soichirosaimon.com/dunbar-plumbing/.

## Before launch (owner to confirm)

1. **Formspree.** Create a form at formspree.io that delivers to Dunbarplumbing1@gmail.com and replace `FORM_ID` in `content.py`. Until then the form shows "not connected" and points to the phone.
2. **Names.** "Ken MacDonald" (BBB lists Kenneth Stewart MacDonald, reviews say Kenny/Ken) and "Dexter, his son" come from public reviews. Confirm spelling, roles and that they want to be named.
3. **Hours and the same-day promise.** Mon–Fri 8:30–5 is from Google. The site says "call before noon on a weekday and we are usually there the same day" and "messages outside hours are returned first thing". Confirm both.
4. **Text messages.** The site offers "Text us" (SMS to 604-312-2686). Confirm the number receives texts.
5. **Pricing lines.** "No travel time charges" is their own claim. "You will know what the work costs before we start" and "no hidden fees" come from reviews. Confirm wording.
6. **Credentials.** "Licensed, bonded and insured", "certified tradesmen" and "WorkSafeBC approved" are from their own site. Add a City of Vancouver business licence number and, if they do gas work, the Technical Safety BC licence number to the footer (`footer()` in `build.py`).
7. **Gas and heating.** The water heater page says gas work is done by a licensed gas fitter and mentions tankless. The old van says "heating". Confirm what they actually offer; remove tankless or add a heating page accordingly.
8. **Permits** (bathroom renovations FAQ): "Where a permit is required for the plumbing work, yes." Confirm.
9. **Commercial / multi-family** line in About: from a 2019 review. Confirm.
10. **Address.** No street address is shown (BBB has a PO Box at 4326 Dunbar St; Yellow Pages has 3327 W 14th Ave). Add one to `plumber_schema()` and the footer if the owner wants it.
11. **Photos.** The hero is the only real photo (2010-era, upscaled). Ask for: a new crew-and-trucks photo, a portrait of Ken and Dexter, 6–8 job photos (one per service page), a truck in a Dunbar street. Drop them in `photos/` and reference them in `build.py`.
12. **Domain.** Point dunbarplumbingltd.com at the new site and set `BASE_URL`. Keep the old dunbarplumbing.ca redirecting too.

## Placeholder or generated images

None. Every image is the business's own photo (one source photo, cropped three ways).
