# Atlantis Dental Yaletown — Website

Static, dependency-free website for **Atlantis Dental Yaletown** (atlantisdental.ca).
All copy is reproduced verbatim from the previous WordPress site; design is a clean clinical
modern refresh using the existing wave logo, navy `#17213C` and bright blue `#01ADFF`.

## Folder layout

| Path | What it is |
|------|------------|
| `build.py` | Generates the whole site into `dist/` (Python 3, standard library only). |
| `src/layout.py` | Header, nav, footer, contact details, hours, social links, form endpoint. **Edit clinic details here.** |
| `src/components.py` | Reusable blocks: appointment form, video cards, sidebars, CTA band, video/testimonial IDs. |
| `src/pages/*.py` | One module per page group (home, why, team, services, technology, contact, legal, blog). |
| `blog/_posts.json` | The 78 migrated blog posts (title, date, HTML) exported from the old site. |
| `assets/` | CSS, JS, images (team headshots, brand assets, AI hero images, blog images), patient-form PDFs. |
| `dist/` | **The deployable website** (108 pages). Upload this folder’s contents to any static host. |
| `preview/` | Screenshots used during design review. |
| `CONTENT-INVENTORY.md` | Everything captured from the old site, for reference. |

## Build & preview

```bash
python3 build.py                      # writes dist/ (107 pages + sitemap, robots, redirects)
python3 -m http.server 8080 -d dist   # then open http://localhost:8080/
```

## Demo vs. live mode

The build is configured for the client’s real domain (`atlantisdental.ca`) and is indexable — this is the
handover version. It is temporarily previewed at https://web.soichirosaimon.com. Two settings at the top
of `src/layout.py` control this:

```python
SITE_URL = "https://atlantisdental.ca"   # domain used in canonical / Open Graph / sitemap / schema URLs
DEMO = False                             # True adds noindex,nofollow + robots.txt Disallow (use for previews you don't want indexed)
```

## Before going live — 3 things to do

1. **Connect the form (2 minutes).** Sign up at https://formspree.io, create a form that delivers to
   `yaletown@atlantisdental.ca`, copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`) and paste it
   into `FORMSPREE = "..."` in `src/layout.py`. Rebuild. Until then, the form falls back to opening the
   visitor’s email app pre-filled with their request, so no enquiry is lost. Enable reCAPTCHA in Formspree’s
   settings to match the old site’s spam protection.
2. **Redirects.** `dist/_redirects` (Netlify/Cloudflare Pages) and `dist/.htaccess` (Apache/cPanel) map every
   old blog URL (`/post-slug/`) to `/blog/post-slug/` and a few renamed pages, preserving search rankings.
   Use whichever your host supports.
3. **Photos.** Six AI-generated placeholder images live in `assets/img/` (`hero-patient.jpg`,
   `clinic-reception.jpg`, `dentist-itero.jpg`, `invisalign-aligner.jpg`, `sedation-comfort.jpg`,
   `family-seawall.jpg`). Replace them with real clinic photography of the same names (3:2 or 16:9,
   ~1600 px wide) whenever you have it. Courtney’s headshot uses the original “coming soon” placeholder.

## Hosting

Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a cPanel `public_html`.
Point the host at `dist/`. The site is pure HTML/CSS/JS — no PHP, database or build tooling required
on the server. Canonical URLs, Open Graph tags and the sitemap assume the domain `atlantisdental.ca`
(change `SITE_URL` in `src/layout.py` if that changes).

## Editing content

- **Hours, phone, email, address, social links:** `src/layout.py` (used everywhere automatically).
- **Team members:** `src/pages/team.py` (`DENTISTS` and `STAFF` lists) + a square photo in `assets/img/team/`.
- **Videos / testimonials:** `src/components.py` (`VIDEOS`, `TESTIMONIALS` — YouTube IDs).
- **CDCP announcement bar:** `header_html()` in `src/layout.py`. Visitors can dismiss it; the choice is remembered.
- **New blog post:** add an object to `blog/_posts.json` (`title`, `date` like `Sep 15, 2026`, `slug`, `html`)
  and drop any images in `assets/img/blog/` named `<first-40-chars-of-slug>__<filename>`.
- **Book Now buttons** go to `/contact-us/book-now/` (the same dedicated page the old site used); the Contact page keeps its own General Inquiries form.
- **Google rating shown on the site:** `RATING` / `RATING_COUNT` in `src/layout.py` (4.9 / 1,000+ as of Sept 2026,
  from the clinic’s 123Dentist listing).

Run `python3 build.py` after any change.

## Accessibility & performance notes

Semantic landmarks, skip link, keyboard-operable dropdown menus and mobile drawer, visible focus rings,
4.5:1+ text contrast, `prefers-reduced-motion` respected, lazy-loaded images and click-to-play YouTube
embeds (no third-party scripts load until the visitor plays a video). Schema.org `Dentist` and
`BlogPosting` structured data are included.
