# Vancouver Century Music School — build report

Local preview: http://localhost:53058/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/century-music-school/

Built 2 Nov 2026 as a demo site to pitch to the owner. Static (no scroll animation), by the user's choice.
Updated the same evening at the user's request so that every piece of information on centurymusic.ca is on the new site, including the instructor bios and the Chinese version.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Vancouver Century Music School | centurymusic.ca, Google |
| Category | Music school (private piano, violin, guitar/ukulele, voice, theory, composition, groups) | own site |
| Address | 1730 Kingsway, Vancouver, BC V5N 2S3 (Kensington–Cedar Cottage) | own site, Google |
| Phone | 778-723-9999 (text, WhatsApp, WeChat on the same number) | own site |
| Email | Hidden behind Cloudflare protection on their site; not published on the demo | own site |
| Hours | Mon 3–7 pm · Tue–Fri 3–7:30 pm · Sat 8:30 am–6 pm · Sun closed; lessons by appointment, front desk remote | Google; own site |
| Booking | Weebly store page for the $158 first-month trial, then text/email | own site |
| Ratings | Google 4.9 (28) | Google Maps |
| Team | 13 teachers: 12 music teachers and 1 English teacher, with photos and full bios | about-us page |
| Awards | Best of Vancouver 2023 (Distinguished Teaching), Three Best Rated 2019–2025, RCM Teachers of Distinction 2025 | home and about-us badges |
| Social | facebook.com/centurymusicvan · instagram centurymusicschoolvancouver · WeChat linahan711 · WhatsApp/WeChat QR codes | 中文 page, home |
| Languages | English, 中文 (their site has a Chinese version) | own site |

**Conflicts between sources (the owner should settle these):**
- Group class rates: more-music-classes page says $29 (3–4 students) / $34 (semi-private); the reschedule/policy page says $35 / $40. The site uses $35 / $40.
- Trial expiry: the store item says 2 months without a booking; the policy page says 1 month. Both shown on the policies page.
- Hours: Google says Mon 3–7, Tue–Fri 3–7:30, Sat 8:30–6; the old "music.html" landing page says Mon–Fri 3:30–8, Sat 9–7. The site uses Google's, labelled "by appointment".
- English small-group course: store price $757; the Chinese page says $560. The site uses $757 on both language versions. The VIP 1:1 price ($1,026 for 18 hours) comes only from the Chinese page.
- The trial store page is titled "25% OFF" but is priced at a flat $158; the site uses $158 without a percentage claim.
- The home page shows a "Google 5.0" badge while Google shows 4.9; the badge was left out.

## Sources used
- Own site, every page: home, about-us (13 bios + headshots), payment (prices + FAQ), reschedule (full policy), piano / violin / guitar / more-music-classes pages (descriptions + FAQs), contact, music.html landing page, 中文 page (English course, remote-learning FAQ, contacts), store items (trial, packages, IELTS course), and all 45 blog posts (Sept–Nov 2026 and March 2019).
- Google Maps: rating, 28 reviews, hours, 4 photos (storefront dusk/day, lesson, piano keys).
- Their own banners (piano, violin, guitar, ensembles, theory) and RCM / BCRMTA badges, reused as asked.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Horizon School of Music | 5.0 (148) | horizonschoolofmusic.ca | Photo hero, one "Get started" action, team page | Yes: one primary action, real hero |
| Cadenza Music & Art Academy | 4.9 (68) | cadenzacademy.ca | Teachers, testimonials, group classes | Yes: teacher credentials, reviews |
| Pleasant Mountain Music | 5.0 (52) | pleasantmountainmusic.ca | Pricing in nav, Register Now, Google reviews block | Yes: full prices, reviews with Google link |
| Mastery School of Music | 4.4 (50) | msmvan.com | "Schedule your first lesson" + Call, FAQ | Yes: Book a trial + Text, FAQ |
| Jean Lyons School of Music | 5.0 (34) | jeanlyonsmusic.com | Faculty, tuition page | Yes |
| Colourstrings | 5.0 (45) | colourstrings.ca | Dated, cluttered | No |

Table stakes in this market: instruments with starting ages, teachers with credentials, a trial/first-lesson CTA, reviews, location and transit, FAQ.
Opportunities nobody uses: full published prices (Century already does), high-school credits through RCM, text/WhatsApp/WeChat contact, Chinese language, a real lit-storefront hero.

## Design decisions
- Palette: conservatory green (#1F5A3C / #143D29) from their logo, ivory (#F7F3EA) and cream (#EEE7D8) from the sign and paper, gold (#C8A24A) from the RCM badge, sage (#6F8577) for secondary text.
- Type: Cormorant Garamond for headings (the conservatory register), Source Sans 3 for body and UI, letterspaced small caps for eyebrows.
- Signature: the five-line musical staff as the only motif, drawn as a rule beside each section eyebrow. Lessons and tuition are laid out like a recital programme (instrument, age, duration, price). No other decoration.
- Structure: single page, because it is one location with one offer. Section names in a parent's words: Lessons, Trial & tuition, Teachers, Reviews, Visit, Questions.
- Generic-default check: not cream-and-terracotta, not dark-and-acid; every colour traces to their own material.

## What was built
Pages: `index.html` (home), `teachers.html`, `policies.html`, `english.html`, `blog.html` + 45 posts in `blog/`, `zh.html` (中文).

Home page:
- Header with short nav and a filled "Book a trial" button; mobile sticky bar with Book a trial / Text us.
- Hero: eyebrow (Kensington · Vancouver · RCM-certified teachers), four-word headline, facts (4.9 from 28 reviews, $158 trial, no registration fee), two CTAs, storefront-at-dusk photo with a live open/closed card and an RCM result quote.
- Trust strip: RCM certified + Teachers of Distinction 2025, BCRMTA/CFMTA, Best of Vancouver 2023 + Three Best Rated 2019–2025, published prices.
- What we offer: the seven points from their home page.
- Lessons: nine programme cards (piano, violin, guitar & ukulele, voice, RCM program, music theory, composition, groups & ensembles, English exam prep) with starting age and curriculum points.
- Trial & tuition: the three $158 trial options with the store's terms and after-payment steps, the full package table (6 packages, group and semi-private rates, English course), notes on fees, Pay-online button.
- Students' success: the RCM results list (15 students) from their home page, the medals photo, trophy.
- Photo band: lesson photo with a caption about acoustic pianos in every room.
- Teachers: all 13 with headshots linking to full bios on teachers.html; five badges.
- Reviews: 4.9 from 28; 6 Google quotes plus the 5 testimonials from their site (Mark C, Fei W, Oni M, William Lane, Iris Jiang).
- Visit: daytime storefront, WhatsApp/WeChat QR codes, address, transit and parking, phone/text, WeChat ID, email note, Facebook/Instagram, hours, service area, languages, payment, directions, map.
- FAQ: 17 questions in groups (booking & payment, piano, violin, guitar, lessons) from their payment, piano, violin and guitar pages.
- News: the four latest articles, linking to the blog.

Sub-pages:
- Teachers: every bio verbatim (typos fixed), photo, credentials, instruments; Arianne (English) set apart.
- Policies: the complete reschedule page (options, agreement, booking, trial terms, make-ups, refunds, expiry, scheduling, fees, facility rules, holidays, group rates) plus the payment-page FAQ, with a table of contents.
- English course: 28-hour group course ($757), VIP 1:1 ($1,026), weekly syllabus, Mon/Wed/Fri 6:30–8:30 pm schedule, how Zoom classes work, teacher.
- Blog: all 45 posts, dated, with older/newer links; run-in headings in the Weebly export were restored; the three 2019 post images kept.
- 中文: full Chinese home page (hero, offer, 9 programs, trial + tuition, RCM results, 13 teachers, English course with the school's own Chinese copy, remote-learning FAQ, 6 reviews, contact with WeChat ID and QR codes, FAQ).
- Footer with address, phone and "Site by Sony Saimon". JSON-LD MusicSchool in the head.

## Assumptions
- Voice lessons start at age 5 (their payment FAQ recommends 5+ for everything except piano).
- Opening hours come from Google; the demo labels them "by appointment".
- "Every room has an acoustic piano" is inferred from their photos; owner to confirm.
- The trial is presented at $158 flat, without the "25% off" wording from the store title.
- The email address is Cloudflare-protected on their site, so it is not printed; the site says "on request by text" and links their contact page.
- Chinese copy for lessons, tuition, reviews and FAQ is my translation; the English-course block and remote-learning FAQ are the school's own Chinese text.
- The group rates and course price conflicts were resolved toward the policy page and the store (see above).
- Teacher credentials are copied as listed on their about-us page.

## Open questions for the owner
- "Voted Best Music Lessons in Vancouver": the badges on their site are Best of Vancouver 2023 (Distinguished Teaching) and Three Best Rated 2019–2025; both are shown. Confirm they are still current.
- Which group rates and trial expiry are current (see conflicts).
- Is the English course still running, and at which price?
- Are the Google hours accurate, and does Saturday really open at 8:30 am?
- Should the Chinese page also carry the blog and policies in Chinese?
- Should the email address be published?

## Needs from the owner
- Real photos of: lesson rooms, a few teachers, a recital. The lesson banners are their stock-style images, reused as asked.
- Confirm: voice starting age, hours, award, email.

## QA
Desktop 1440 and iPhone (390 wide) checked on every page type (home, teachers, policies, English course, blog index, two posts, 中文) after scrolling the full page · no horizontal overflow · no console errors · no broken images · every local link and asset resolves (45 posts, 13 headshots, badges) · external links (trial store, payment, contact, course, Facebook, Instagram) respond · 9 lessons, 13 teacher cards, 13 bios, 15 results, 11 reviews, 17 FAQ items, 9 tuition rows, 45 posts rendered · mobile menu works on English and Chinese pages · reduced motion respected. The map embed renders grey in headless Playwright; it is a standard public Google Maps embed and loads in a normal browser.

## Placeholder / generated images
None. All photos are the school's own (Google photos, their banners, their badges). The five lesson banners and the theory-class image are their stock-style banners, flagged in README as replaceable with real photos.
