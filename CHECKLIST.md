# Pre-demo and handover checklist — Atlantis Dental Yaletown website

Preview: https://web.soichirosaimon.com/  ·  Source: `~/atlantis-dental-website`  ·  Deployable: `dist/`

---

## A. Before showing the client (demo)

### Content accuracy — confirm with what the clinic currently publishes
- [ ] Phone (604) 899-0775, email yaletown@atlantisdental.ca, address 1278 Pacific Boulevard, V6Z 2V1
- [ ] Hours: Mon–Thu 8 am–8 pm, Fri–Sun 9 am–5 pm (footer, contact page, sidebars)
- [ ] Emergency line 604-805-2500, 7 AM–1 AM (utility bar, emergency page, drawer)
- [ ] Team page: 4 dentists (Karkanis, Habibian, Phan, Louie) + 12 staff, roles and spelling; Courtney still shows the "coming soon" photo
- [ ] Google rating "4.9 · 1,000+ reviews" is current (source: 123Dentist listing). Update `RATING` / `RATING_COUNT` in `src/layout.py` or remove if the clinic prefers
- [ ] Promotions page: CDSBC wording still applies; the four "current programs" (CDCP, 0% financing, in-office whitening, Roundhouse whitening kit) are still running
- [ ] Roundhouse promo ("take-home whitening kit just by booking") is still valid — it was on the old site as a banner
- [ ] CDCP page: "orthodontic services … in 2025" is old copy from the original site; ask the clinic whether to update
- [ ] Invisalign page: I replaced the old site's literal "[insert practice name]" with "Atlantis Dental Yaletown" — flag this as a fix you made
- [ ] Cambie and Roundhouse links open the correct sister sites

### Imagery — be upfront about what is placeholder
- [ ] The six AI-generated photos (hero patient, reception, dentist with scanner, aligner, sedation, family on seawall) are clearly presented as placeholders to be replaced with real clinic photos
- [ ] No AI image shows text, logos, or anything that could be mistaken for a real person at the clinic
- [ ] Team headshots, service icons, banners, logo are the clinic's own assets (taken from their current site)

### Functional walkthrough on the live preview
- [ ] Homepage loads fast on phone data (test on your actual phone, not just simulator)
- [ ] Every top-nav dropdown opens; every submenu link lands on the right page
- [ ] Mobile hamburger menu opens, sub-menus expand, close button works
- [ ] Book Now (header, mobile bar, CTA bands) → /contact-us/book-now/
- [ ] Appointment form: validation messages appear; submitting opens the visitor's email app (Formspree not yet connected — say so in the demo)
- [ ] Phone numbers are tap-to-call on mobile
- [ ] Testimonial carousel scrolls; a YouTube video plays when clicked
- [ ] Media page: all 9 videos + 8 testimonials play
- [ ] Why Us: Matterport 3D office tour loads (needs a real browser, was blank in headless tests)
- [ ] Contact page Google Map loads and pin is on 1278 Pacific Blvd
- [ ] Patient Forms: all 5 PDFs open; Press: both 2011 PDFs open
- [ ] Blog: index paginates 1→7; open 2–3 posts incl. one with a video and one from 2011 with images
- [ ] CDCP top bar: "Learn More" → CDCP page, "Already covered? Book Now" → Book Now, X dismisses and stays dismissed on reload
- [ ] 404: type a wrong URL → branded 404 page
- [ ] Try in Safari (iPhone), Chrome, and one desktop browser other than yours

### Presentation prep
- [ ] Have the old atlantisdental.ca open in another tab for side-by-side
- [ ] Have `preview/` screenshots ready in case of Wi-Fi trouble
- [ ] Prepare the "what changes on handover" list (section B) so they know what you still need from them
- [ ] Decide your pricing for: site + optional photo shoot + Formspree setup + hosting/migration

---

## B. Before handing over (after they buy)

### Things only the clinic can provide
- [ ] Real photography to replace the 6 AI images (same file names, 1600px wide, 3:2 or 16:9) — see README
- [ ] Courtney's headshot (400×400) or remove her from the team page
- [ ] Formspree account owned by the clinic (or their email for it); paste endpoint into `FORMSPREE` in `src/layout.py`; turn on reCAPTCHA in Formspree
- [ ] Confirm which reviews/rating number to display, or remove the number
- [ ] Confirm current promotions and CDCP wording
- [ ] Hosting access (cPanel/Netlify/Cloudflare) and DNS control for atlantisdental.ca

### Technical handover steps
- [ ] `SITE_URL` = "https://atlantisdental.ca" and `DEMO = False` in `src/layout.py` (already set) → `python3 build.py`
- [ ] Deploy `dist/` contents to the root of their host
- [ ] Install redirects: `_redirects` (Netlify/Cloudflare Pages) **or** `.htaccess` (Apache/cPanel) — 89 old-URL redirects, incl. all 78 blog posts
- [ ] Confirm HTTPS works on atlantisdental.ca and www redirects to non-www (or vice versa)
- [ ] Submit `https://atlantisdental.ca/sitemap.xml` in Google Search Console; request re-crawl of homepage
- [ ] Test the live form end-to-end: submit → email arrives at yaletown@atlantisdental.ca
- [ ] Verify old links still work: pick 3 old blog URLs (e.g. /rid-toothache-fast/) → redirect to /blog/…
- [ ] Take down the preview on web.soichirosaimon.com (or leave it as portfolio but set `DEMO = True` and redeploy there so it isn't indexed as a duplicate)

### Deliverables to hand over
- [ ] The full `~/atlantis-dental-website` folder (source + `dist/`), zipped or as a private GitHub repo
- [ ] `README.md` (how to edit hours, team, videos, blog; how to rebuild)
- [ ] `CONTENT-INVENTORY.md` (everything captured from the old site)
- [ ] Formspree login (if you created it) and any hosting credentials
- [ ] A note listing the intentional changes vs. the old site: Book Now page, CDCP top bar instead of popup, "[insert practice name]" fix, migrated blog URLs

### Legal / ownership
- [ ] Confirm the clinic owns the rights to reuse their old copy, logo and headshots on the new site (they do — it's their content — but note it in the contract)
- [ ] AI-generated images: state clearly they are placeholders and not to be used as depictions of real staff/patients
- [ ] Privacy Policy and Terms are the clinic's/123Dentist's own text — they should confirm these are still their current versions
