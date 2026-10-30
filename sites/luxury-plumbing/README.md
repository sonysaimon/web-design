# Luxury Plumbing — website

Demo site for Luxury Plumbing of Downtown Toronto (230 Mavety St, The Junction). Static HTML, no build step except `build.py` for the inner pages.

## Files
- `index.html` — home page. Service cards, review cards and the footer service list are generated between the `<!-- services:start -->`, `<!-- reviews:start -->` and `<!-- footer-services:start -->` markers; everything else is hand-written.
- `services.js` — the offer data: six services (name, problem line, photo, what's included, FAQs, which reviews to show) and the review quotes. **Edit this file, then run `python3 build.py`.**
- `build.py` — regenerates `services/*.html`, `emergency.html` and the generated blocks in `index.html` from `services.js`.
- `styles.css` — design tokens at the top (`:root`), then sections, then responsive rules.
- `main.js` — mobile nav, scroll reveal, symptom chips, form submit, footer year.
- `photos/` — the 8 real photos from the Google Business Profile, each in three sizes (`name.jpg` full, `name-card.jpg` 4:3, `name-thumb.jpg` 3:2), plus `walk-in-shower-ticket.jpg` (hero) and `og.jpg` (social preview).
- `favicon.svg`, `apple-touch-icon.png` — pipe-elbow mark in brass.
- `deploy.sh` — publishes to https://web.soichirosaimon.com/luxury-plumbing/ (do not run until approved).
- `REPORT.md` — research, decisions, assumptions and open questions.

## Preview
```
cd ~/luxury-plumbing-website && python3 -m http.server 8082
```
Then open http://localhost:8082/.

## Things to change before this goes live
1. **Phone number.** Google shows (647) 560-2948, the old site shows 647-360-2546. The site uses the Google number everywhere (search `560-2948` and `+16475602948`). Confirm with the owner.
2. **Form.** `index.html` form action is `https://formspree.io/f/YOUR_FORM_ID`. Create a Formspree form that sends to plumbingcontractservices@gmail.com and paste the ID. Until then the Send button shows a message pointing to the phone.
3. **Pricing promise.** "$150 visit, credited toward the repair" and "same rate nights and weekends" are proposed wording; the old site only says "$150 show up fee". Owner must confirm or edit (`index.html` price card, `build.py` price card, FAQ, schema).
4. **Licence number.** Footer says "Licensed & insured plumbers, Ontario" with no number. Add the Ontario plumbing licence number and the named licence holder to the footer and the About section.
5. **Names.** Reviews mention John and Jimmy; the About copy repeats that. Confirm they are current staff.
6. **Service area list** is a reasonable guess around The Junction. Edit the list in `index.html` (`#areas` and the footer) and the `areaServed` block in the JSON-LD.
7. **Photo captions** describe what is visible in each photo; the owner can replace them with neighbourhood and job details.
8. **Canonical and OG URLs** point at web.soichirosaimon.com/luxury-plumbing/. Change them if the site moves to luxuryplumbing.shop.

## Generated images
None. Every photo is a real photo from the business's Google profile.
