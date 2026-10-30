# John The Plumber Toronto — demo website

Static demo site for the Toronto branch of John The Plumber (984 Caledonia Rd, North York).
Built 2026-10-27 from the plumbing website playbook. No build tools, no framework, no tracking.

## Files

| File | What it is |
|---|---|
| `build.py` | **Source of truth for content.** All facts (phone, address, offers), the six services, the six district write-ups, reviews, FAQs and every page template live here. Run `python3 build.py` after editing to regenerate the HTML. |
| `index.html` | Home page (generated). |
| `book.html` | Booking request page with the form (generated). |
| `service-area.html` | Map plus six districts with local copy (generated). |
| `services/*.html` | One page per service (generated). |
| `services.js` | Data for the hero "What's going on?" router (generated). |
| `styles.css` | Design tokens at the top (`:root`), then components, then responsive rules. Hand-edited. |
| `main.js` | Mobile nav, symptom router, form handling, reveal animation, dynamic year. Hand-edited. |
| `fonts/` | Barlow and Barlow Condensed, self-hosted WOFF2 (5 files, 77 KB total). |
| `photos/` | Optimised photos. All are the business's own (Google listing and johntheplumber.ca). No AI images. |
| `favicon.svg`, `apple-touch-icon.png` | Icons. |
| `deploy.sh` | Publishes to web.soichirosaimon.com/john-the-plumber-toronto/ (run only when told). |

You can edit the generated HTML directly for a quick fix, but the next `python3 build.py` overwrites it, so put lasting changes in `build.py`.

## Common edits

- **Phone, address, hours, rating:** `BIZ` dict at the top of `build.py`.
- **Offers:** `BIZ["offer_first"]` and the Offers section in `build_home()`.
- **Services:** `SERVICES` list. Each entry has its card copy, the hero-router proof card (`job`, `where`, `what`, `first`, `timing`), the page body, FAQs and related services.
- **Districts:** `DISTRICTS` list.
- **Reviews:** `REVIEWS` list. `<mark>` tags highlight technician names.
- **Form destination:** `BIZ["formspree"]`. Replace `YOUR_FORM_ID` with a real Formspree ID, or point the Book buttons at the company's Jobber / jtphub booking widget.
- **Licence number:** `BIZ["licence_line"]` (currently a placeholder the owner must supply).

## Preview

```
cd ~/john-the-plumber-toronto-website && python3 -m http.server 8081
open http://localhost:8081/
```

## Publish

`./deploy.sh` copies the folder into the `sonysaimon/web-design` repo under `sites/john-the-plumber-toronto/` and pushes. Live a couple of minutes later at https://web.soichirosaimon.com/john-the-plumber-toronto/.

## Placeholders to replace before this goes near the client

- Licence number in the footer.
- Formspree ID (or the real booking widget).
- Confirm the phone number: Google shows (647) 697-0446, the company's own York-branch line is 416-304-6851.
- Confirm the Peace of Mind Plan ($17/month) is offered at the Toronto branch.
- Confirm the City of Toronto subsidy amounts on the sump pump / backwater valve page against toronto.ca.
