# Atlantis Dental Yaletown — Website

Static, dependency-free website for **Atlantis Dental Yaletown** (atlantisdental.ca).
All copy is reproduced verbatim from the previous WordPress site; design is a clean clinical
modern refresh using the existing wave logo, navy `#17213C` and bright blue `#01ADFF`.

## Folder layout

| Path | What it is |
|------|------------|
| `content/*.toml` | **All editable text and settings** (clinic details, hours, team, services, technology, promotions, forms, videos, homepage). Edit these to change the site. See `EDITING-GUIDE.md`. |
| `content/blog/` | New blog posts, one `.toml` file each (template included). |
| `build.py` | Generates the whole site into `dist/` (Python 3.11+, standard library only). |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages automatically on every push to `main`. |
| `src/layout.py` | Header, nav, footer templates (reads clinic details from `content/clinic.toml`). |
| `src/components.py` | Reusable blocks: appointment form, video cards, sidebars, CTA band, video/testimonial IDs. |
| `src/pages/*.py` | One module per page group (home, why, team, services, technology, contact, legal, blog). |
| `blog/_posts.json` | The 78 migrated blog posts (title, date, HTML) exported from the old site. |
| `assets/` | CSS, JS, images (team headshots, brand assets, AI hero images, blog images), patient-form PDFs. |
| `dist/` | **The deployable website** (108 pages). Upload this folder’s contents to any static host. |
| `sites/<name>/` | Standalone static demo sites for other clients, published as-is at `/<name>/` (e.g. `sites/her-nails-lounge/` → https://web.soichirosaimon.com/her-nails-lounge/). Each has its own README. |
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
of `content/clinic.toml` control this:

```toml
site_url = "https://atlantisdental.ca"   # domain used in canonical / Open Graph / sitemap / schema URLs
demo = false                             # true adds noindex,nofollow + robots.txt Disallow (use for previews you don't want indexed)
```

## Before going live — 3 things to do

1. **Connect the form (2 minutes).** Sign up at https://formspree.io, create a form that delivers to
   `yaletown@atlantisdental.ca`, copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`) and paste it
   into `content/clinic.toml` → `[form]` → `endpoint`. Commit. Until then, the form falls back to opening the
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

**Non-technical edits:** follow `EDITING-GUIDE.md` — everything below is done by editing files in `content/` on GitHub; the site republishes itself.

- **Hours, phone, email, address, social links, announcement bar, rating, form endpoint:** `content/clinic.toml`.
- **Team members:** `content/team.toml` + a square photo in `assets/img/team/`.
- **Videos / testimonials:** `content/videos.toml` (YouTube IDs).
- **CDCP announcement bar:** `content/clinic.toml` → `[announcement]`. Visitors can dismiss it; the choice is remembered.
- **New blog post:** add a `.toml` file to `content/blog/` (see the template there). The 78 migrated posts stay in `blog/_posts.json`.
- **Book Now buttons** go to `/contact-us/book-now/` (the same dedicated page the old site used); the Contact page keeps its own General Inquiries form.
- **Google rating shown on the site:** `content/clinic.toml` → `[rating]` (4.9 / 1,000+ as of Sept 2026, from the clinic’s 123Dentist listing).

Run `python3 build.py` after any change.

## Accessibility & performance notes

Semantic landmarks, skip link, keyboard-operable dropdown menus and mobile drawer, visible focus rings,
4.5:1+ text contrast, `prefers-reduced-motion` respected, lazy-loaded images and click-to-play YouTube
embeds (no third-party scripts load until the visitor plays a video). Schema.org `Dentist` and
`BlogPosting` structured data are included.
