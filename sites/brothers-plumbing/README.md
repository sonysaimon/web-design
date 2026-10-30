# Brothers Plumbing — demo website

Static multi-page site for Brothers Plumbing, 130 Osler St, Toronto (west end plumber since 1969).
Built 2026-10-27 as a demo to pitch the owner. Not deployed.

## Preview
    cd ~/brothers-plumbing-website && python3 -m http.server 8093
Open http://localhost:8093/

## Publish
    ./deploy.sh
Copies the folder into the `sonysaimon/web-design` repo under `sites/brothers-plumbing/` and pushes.
Live at https://web.soichirosaimon.com/brothers-plumbing/ a minute or two later.

## Files
| File | What it is |
|---|---|
| `services.js` | **The data.** Service groups, 19 services (copy, included list, FAQs, related, photo), symptom chips, reviews, service areas. Edit this, then run `python3 build.py`. |
| `build.py` | Assembles every page from `src/` + `services.js`. Writes the 7 top-level pages and `services/<slug>.html`. |
| `src/partials/` | `head.html` (meta, fonts, Plumber schema), `header.html` (top bar, nav, phone, mobile nav), `footer.html` (NAP, licence line, links, mobile bar). |
| `src/pages/` | Content for index, plumbing, drains-sewer, emergency, about, service-areas, book. Each starts with a `<!--meta {...} -->` block (title, description, path, cur). |
| `src/service-template.html` | Template for the 19 service pages. |
| `styles.css` | Tokens in `:root` at the top, then components, then responsive rules. |
| `main.js` | Mobile nav, symptom-chip prefill, form submit, reveal, footer year. |
| `photos/` | Five real job photos from the company's Google profile, resized to max 1800 px. |
| `favicon.svg`, `apple-touch-icon.png` | Icons. |
| `REPORT.md` | Research, audit of the old site, decisions, open questions. |

Never edit `index.html`, the hub pages or `services/*.html` directly; `build.py` overwrites them.

## Things to change before this goes live
1. **Form**: `src/pages/index.html` and `src/pages/book.html` post to `https://formspree.io/f/YOUR_FORM_ID`. Create a Formspree form (free) and replace the ID in both files, or swap in the owner's booking tool.
2. **Phone**: the site uses 647-247-2230 ("call or text", from the old site). Google lists (416) 656-6717 and the old contact page lists 416-656-8160. Confirm the one number with the owner and search-replace `647-247-2230` and `+16472472230`.
3. **Licence number**: footer says `[number to add]`. Get the Ontario plumbing licence number and the named licence holder.
4. **Hours**: site says open 7 days 7 am–7 pm with the emergency line answered 24/7. The old site said 7–7; Google says "Open 24 hours". Confirm.
5. **Founded**: 1969 is used everywhere (old homepage + logo badge). The old About page said 1977. Confirm.
6. **Offers**: $50 off any service and $100 off sewer drain replacement are from the old site with no expiry. Confirm terms, add an expiry date.
7. **CVPP**: the Customer Value Protection Plan fee is not public. Add it to the offer card if the owner wants it shown.
8. **Review count**: 4.4 from 299 Google reviews as of 2026-10-27 (in `src/pages/index.html`, `about.html`, `src/partials/head.html` schema). Update when it changes.

## Photo placeholders (replace with real photos)
These dashed boxes are intentional and labelled on the page:
- Home, About section: **crew photo** (`.placeholder.about-photo` in `src/pages/index.html`).
- About page hero: **crew or founder photo** (`src/pages/about.html`).
- Service pages without a photo (`"photo": null` in `services.js`): faucet repair, water heaters, lead pipe replacement, commercial plumbing, drain snaking, hydro-jetting, main drain backup, French drains, heating repair. Add a file to `photos/` and set `"photo"` and `"photoAlt"`.
No AI-generated images were used (Higgsfield account had no credits); every photo on the site is the company's own.

## Editing copy
- Headline, facts line, work-order card, trust strip, FAQ: `src/pages/index.html`.
- Service copy, what's included, FAQs: `services.js`.
- Reviews: `services.js` → `reviews` (first 6 show on the home page, first 8 on About, first 2 on each service page).
- Areas: `services.js` → `areas` (home page list) and `src/pages/service-areas.html` (cards with local notes).
