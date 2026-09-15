# How to update the Atlantis Dental website (step-by-step)

You do **not** need any software. Everything is edited in a web browser on GitHub, and the website
rebuilds and publishes itself about one minute after you save.

Repository: **https://github.com/sonysaimon/web-design** · Live site: the domain configured in GitHub Pages

---

## 1. The 60-second version

1. Open the repository on GitHub and sign in.
2. Open the `content` folder and click the file you want to change (see the map below).
3. Click the **pencil icon** (top-right of the file, "Edit this file").
4. Change the text between the quotes. Don't remove the quotes or the words before `=`.
5. Scroll down, click **Commit changes…**, add a short note (e.g. "Update Friday hours"), click **Commit changes**.
6. Wait about 1 minute. Refresh the website. Done.

If the website did not change after 2–3 minutes, see "Something went wrong" at the end.

---

## 2. Which file do I edit?

| I want to change… | Open this file |
|---|---|
| Phone, email, address, **opening hours**, emergency line | `content/clinic.toml` |
| The blue announcement bar at the top (CDCP message, or turn it off) | `content/clinic.toml` → `[announcement]` |
| Google rating shown on the homepage (or hide it) | `content/clinic.toml` → `[rating]` |
| Appointment form destination (Formspree) or the "How did you hear about us?" list | `content/clinic.toml` → `[form]` |
| Links to Cambie / Roundhouse, Facebook, Instagram, Yelp, Google Maps | `content/clinic.toml` → `[links]` |
| Dentists' bios, staff names/roles/photos, languages spoken | `content/team.toml` |
| Homepage headline, intro text, service cards, promo boxes | `content/home.toml` |
| Service pages: Restorations, Cosmetic, Preventative, Sedation + the six cards on /our-services/ | `content/services.toml` |
| Technology page (iTero, X-rays, VELscope…) | `content/technology.toml` |
| Promotions page | `content/promotions.toml` |
| Patient forms (PDF list) | `content/forms.toml` + upload the PDF to `assets/forms/` |
| Videos and patient testimonials (YouTube) | `content/videos.toml` |
| **Add a blog post** | create a new file in `content/blog/` (see section 5) |
| Team photo / new image | upload to `assets/img/team/` or `assets/img/blog/` (see section 6) |

Pages **not** in the content folder (Invisalign, Patient Financing, Why Us, CDCP, Emergency,
123Dentist, Contact, Privacy, Terms) are edited in `src/pages/*.py`. The text is plain and readable
there too, but ask your web person if you are unsure — a missing quote mark in those files can stop
the build.

---

## 3. Editing rules (read once)

- Text always sits **between double quotes**: `phone = "(604) 899-0775"`. Keep the quotes.
- Long text uses **triple quotes** on their own lines:
  ```
  bio = """
  First paragraph.

  Second paragraph.
  """
  ```
  Leave one **blank line** between paragraphs. Start a line with `- ` to make a bullet point.
- Lines starting with `#` are comments/instructions and do not appear on the website.
- `true` / `false` switches have **no quotes**: `enabled = true`.
- Special characters: write `&amp;` for **&** in titles, and use `&nbsp;` for a non-breaking space if needed.
- You can add a link inside text like this: `<a href="/contact-us/book-now/">book an appointment</a>`
- Don't rename the words before `=` (like `phone`, `title`, `bio`). The website looks for those exact names.

---

## 4. Common tasks, step by step

### Change opening hours
1. Open `content/clinic.toml` → pencil icon.
2. Find the `[[hours]]` blocks. Change the `time = "…"` value, e.g. `time = "9:00 am – 6:00 pm"`.
   For a closed day write `time = "Closed"`.
3. Commit changes. The footer, sidebars and contact pages all update together.

### Change the phone number or email
1. `content/clinic.toml` → edit `phone = "…"` and `phone_tel = "+1604…"` (digits only, for tap-to-call), or `email = "…"`.
2. Commit.

### Turn the top announcement bar off (or change its message)
1. `content/clinic.toml` → `[announcement]` → set `enabled = false` to hide it, or edit `message`, `link_text`, `link_url`.
2. Commit.

### Hide or update the Google rating
1. `content/clinic.toml` → `[rating]` → `show = false` hides it, or update `score` and `count`.
2. Commit.

### Add a new team member
1. Upload their square photo (ideally 500×500 px, JPG) to `assets/img/team/` — see section 6.
2. Open `content/team.toml` → pencil icon.
3. Copy an existing block and change it:
   ```
   [[staff]]
   name = "Jordan"
   role = "Hygienist"
   photo = "Jordan-RDH.jpg"
   ```
   For a dentist, copy a `[[dentists]]` block instead (it has `bio` and `video`).
4. Commit. Order on the page = order in the file.

### Remove a team member
Delete their whole block (from `[[staff]]` down to their `photo = …` line). Commit.

### Change a service description
1. `content/services.toml` → find the `[[pages]]` block with the matching `path` (e.g. `/our-services/cosmetic-dentistry/`).
2. Edit `intro` or the text of a `[[pages.sections]]`. To add a new section, copy a `[[pages.sections]]` block (heading + text).
3. Commit.

### Change a promotion
`content/promotions.toml` → edit or delete a `[[programs]]` block → commit.
Homepage promo boxes are in `content/home.toml` → `[[promo_cards]]`.

### Add or replace a video
`content/videos.toml` → each video needs `title` and `id`. The **id** is the part after `v=` in the YouTube link
(`https://www.youtube.com/watch?v=gUdLKFOw4cs` → `id = "gUdLKFOw4cs"`). Commit.

### Add a patient form (PDF)
1. Upload the PDF to `assets/forms/` (section 6).
2. `content/forms.toml` → add a block:
   ```
   [[forms]]
   title = "Consent Form"
   file = "consent-form.pdf"
   ```
3. Commit.

### Connect the appointment form (one time)
1. Create a free account at https://formspree.io and make a form that delivers to yaletown@atlantisdental.ca.
2. Copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. `content/clinic.toml` → `[form]` → `endpoint = "https://formspree.io/f/abcdwxyz"`. Commit.
4. Test: submit the form on the website; the email should arrive within a minute.

---

## 5. Add a blog post

1. Go to the `content/blog/` folder on GitHub.
2. Click **Add file → Create new file**.
3. Name it like `2026-10-01-fall-checkup.toml` (**must end in `.toml`**).
4. Paste this and fill it in:
   ```
   title = "Fall check-up reminder"
   date = "Oct 1, 2026"
   slug = "fall-checkup-reminder"
   image = ""

   body = """
   First paragraph.

   Second paragraph.

   - A bullet point
   - Another bullet point
   """
   ```
   - `date` format is `Mon D, YYYY` (Jan 5, 2027).
   - `slug` becomes the web address: `/blog/fall-checkup-reminder/`. Lowercase, hyphens, no spaces.
   - `image` is optional. Upload a picture to `assets/img/blog/` first, then write `image = "/assets/img/blog/your-file.jpg"`.
5. Commit. The post appears at the top of the blog automatically (newest date first).

A ready-to-copy template is in that folder: `_TEMPLATE-new-post.toml.txt`.

---

## 6. Upload a photo or PDF

1. Open the target folder on GitHub (`assets/img/team/`, `assets/img/blog/` or `assets/forms/`).
2. Click **Add file → Upload files**, drag the file in, click **Commit changes**.
3. Use the exact file name (including `.jpg` / `.pdf`, case-sensitive) in the content file.
   Tip: avoid spaces in file names — use `Dr-Jane-Smith.jpg`.
4. Team photos: square, about 500×500 px. Blog photos: about 1200 px wide. Keep files under 1 MB.

---

## 7. Undo a mistake

Every change is saved in history.
1. On the repository page click **"N commits"** (top of the file list) or go to `…/commits/main`.
2. Find your change, click the **`<>`** button ("Browse the repository at this point in the history").
3. Open the file you broke, click the pencil, copy its (old, good) contents, then edit the current file and paste them back. Commit.

Or simply open the file, click the pencil, fix the typo, and commit again.

---

## 8. Something went wrong

**The website did not update.**
- Click the **Actions** tab at the top of the repository. The newest run should have a green check ✔.
- A red ✖ means the build failed — almost always a missing quote or a stray character in a `.toml` file.
  Click the run → click **build** → read the red line; it names the file and line number. Fix it and commit again.
- Wait 1–2 minutes after a green ✔ and hard-refresh the browser (Ctrl/Cmd + Shift + R).

**The page shows the change but the layout looks odd.**
- Check you did not delete a `"""` closing line or a `[[...]]` header.
- Make sure blank lines separate paragraphs.

**I need a change that is not in the content folder** (a new page, a design change, a new section):
contact your web developer. All design and structure live in `src/`, `assets/css/main.css`, `assets/js/main.js`.

---

## 9. For the web developer

- Build locally: `python3 build.py` → `dist/`. Preview: `python3 -m http.server 8080 -d dist`.
- Publishing: `.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` to GitHub Pages.
  Repository **Settings → Pages → Source** must be **GitHub Actions**.
- Custom domain: the `CNAME` file at the repo root is copied into the build. Change it and the Pages
  custom-domain setting together when moving to the client's domain.
- `content/clinic.toml` → `site_url` controls canonical/Open Graph/sitemap URLs; `demo = true` adds noindex.
- Old WordPress URLs are redirected via `dist/_redirects` (Netlify/Cloudflare) or `dist/.htaccess` (Apache);
  GitHub Pages ignores both, so redirects only take effect on a host that supports them.
