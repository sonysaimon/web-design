# Aladin Car Wash — build report

Built 2026-11-02 as a **demo to pitch the owner**. Local preview: http://localhost:8090/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/aladin-car-wash/ (not deployed yet; waiting for your go).

## Business facts
| | Value | Source |
|---|---|---|
| Name | Aladin Car Wash (logo and flyers spell it "Aladdin Car Wash & Auto Detailing") | Domain, Google listing, Instagram handle; flyers |
| Category | Tunnel car wash (70% touch-free / 30% soft-touch), self-serve bays and vacuums, hand-wash detailing, polish and ceramic coating, ozone odour removal, weekend pickup | Website, flyers, reviews |
| Address | 6123 Hastings St, Burnaby, BC V5B 1R9 (next to Tim Hortons, Hastings at Kensington) | Website footer, Google, flyers |
| Phone | (778) 680-4803 | All sources |
| Email | aladincarwashburnaby@gmail.com | Website footer |
| Hours | 9:30 am – 7:30 pm every day | Google Business Profile (current) |
| Booking | Calendly "30 Minute Meeting": https://calendly.com/aladincarwashburnaby/30min · membership sign-up Google Form: https://forms.gle/QZ6UthaxKJHQZTnX9 | Website |
| Ratings | Google 4.4 (398) | Google Maps, 2026-11-02 |
| Owner | Shahryar (new ownership roughly since autumn 2025; "One year of Aladdin Carwash" post on Instagram ~Sept 2026) | Google owner post, Instagram, reviews |
| Founded | "Since 1999" | Flyers |
| Instagram | @aladincarwash, 75 posts, 1,836 followers | Instagram |

**Conflicts between sources**
- **Hours**: website footer says Mon–Fri 9:00–8:00, Sat 9:30–8:00, Sun 9:00–8:00; Google says 9:30–7:30 daily. Site uses Google (maintained by the owner more recently). A second Google listing for the self-serve bays ("Self Service Car Wash", same address and phone) says closes 9 pm. Confirm all three with the owner.
- **Monthly plan prices**: website shows Silver $79.99 / Gold $99.99 / Platinum $129.99 "50% off"; the owner's October 2026 price board shows Basic $49.99 / Deluxe $59.99 / Supreme $69.99. Site uses the price board (you chose this). Single-wash prices ($14.99 / $19.99 / $26.99) come only from the price board; the website never published them.
- **Name spelling**: "Aladin" (domain, Google, Instagram) vs "Aladdin" (logo, flyers). Site uses "Aladin" (you chose this).
- **Supreme wash contents**: price board lists hand wash, shine and water repellency, dirt/oil/grease, wheel blast, under-carriage blast, free vacuum. The website's "Supreme Wash" post lists a different set (rust inhibitor, pre-soak, clear-coat, wax final rinse, blow dry). Site uses the price board.

## Sources used
- Existing website https://aladincarwash.com/ (home, about, four service posts) — WordPress/Astra by "Cypress Click"; stock Pexels photos, "This is text element" placeholder, Lorem ipsum on About, a "We lowered our prices" block stuck as a fixed overlay on desktop. Clearly a rebuild case.
- Google Maps listing (rating, hours, owner post, 90 reviews read, 119 photos, 27 by the owner).
- Instagram @aladincarwash (bio, 36 reel captions; all video, so no stills were taken from it).
- Owner flyers on Google: single-wash and membership price board, Supreme wash flyer, ceramic coating / full detailing flyer, Ram 1500 before/after flyer.

## Competitors studied
| Competitor | Rating (n) | Website | What they do well | Adopted? |
|---|---|---|---|---|
| Express Auto Wash Boundary | 4.7 (1,869) | expressautowash.ca | Rating line in hero, tiered packages with per-wash + monthly, rewash policy, named manager | Trust strip, per-wash/monthly toggle, named owner |
| Shine Auto Wash Burnaby | 4.2 (1,743) | shineautowash.ca | Promo bar, "in under 4 minutes", packages, FAQ | FAQ; speed line in copy |
| Royal Oak Self-Service | 4.0 (1,184) | burnabycarwash.ca | Newest-looking site: dark hero, pill CTAs, facility feature list, booking form | Dark canvas, pill buttons, feature checklists |
| The Auto Spa (Metrotown) | 4.7 (518) | metrocarwash.ca | Hand wash + membership 25% off | Nothing (2012-era site) |
| Burnaby Auto Spa | 4.8 (317) | burnabyautospa.com | Detailing packages, coating brands, owner named | Detailing cards with inclusions |
| Competition Clean | 4.9 (253) | competitionclean.com | Services grid, gift cards, online booking | Service cards; avoided their pop-up |
| Supreme Shine | 5.0 (154) | supremeshineautodetailing.ca | Best local detailer site: condensed headline, 2 CTAs, 3-step how-it-works, real quotes, FAQ | Two CTAs, numbered steps (pickup), review cards |
| Mister Car Wash (brand) | — | mistercarwash.com | Membership-first framing | Memberships as a first-class toggle |

Table stakes in this market: tiers with prices, membership offer, hours/address/phone up top, Google rating line, real tunnel photos, Book/Call CTAs, FAQ.
Opportunities nobody uses: before/after as a captioned proof card, ozone odour removal as a priced product, weekend pickup, buy-3-get-1 as a visible hook, the owner's name and story, Tim Hortons next door.

## Design decisions
- **Palette** from the tunnel itself: blue-black page (#060B16), navy surfaces, electric blue (#2F7CFF) from the tunnel lights, and brush pink (#FF4FA0) used only on the Supreme tier and the eyebrow stripe. The brand's own blue logo fits on it.
- **Type**: Bricolage Grotesque 800 for headlines (wide, punchy, not the usual grotesque), Instrument Sans for body with tabular numerals for prices.
- **Signature**: the tunnel-arch mask on the hero photo (and once more on the owner photo), with the photo drifting behind it on scroll; a four-bar blue/pink stripe before every eyebrow that echoes the brush colours.
- **Interactive on the first screen**: hold-to-compare Before/After card (Ram 1500 interior, cut from the owner's own flyer).
- **Motion**: Lenis + GSAP ScrollTrigger per the Westeck playbook: hero words stagger in on load, fade-ups, staggered card rows, parallax on the arch, the pickup band and the pebble photo. Static for reduced-motion users.
- **Structure**: single page. Nav → hero → trust strip → washes (per-wash/monthly toggle) → detailing + ozone table → weekend pickup band → self-serve bays → recent work → owner → reviews → FAQ → visit → footer. Sticky Call/Book bar on mobile.

## What was built
- Hero: their own line "Your car deserves the royal treatment.", facts line, Book a detail (Calendly) + Call, arch tunnel photo, before/after card.
- Trust strip: 4.4★ 398 reviews · since 1999 · buy 3 get 1 · 70% touch-free · 7 days.
- Washes: Basic / Deluxe / Supreme with inclusions from the price board; toggle to monthly unlimited; Join links to their Google Form.
- Detailing: Full detail, Hand wash and wax, Polish and ceramic coating, Pet hair and odour, each with a Book button; ozone price table ($39.99 / $59.99 / $79.99–$99.99).
- Weekend pickup: 4 steps with a parallax photo band.
- Self-serve bays: feature list.
- Recent work: 5 captioned photos from their Google profile.
- Owner: Shahryar, short story, one 8-word quote from his Google post, Instagram link.
- Reviews: Google 4.4 (398) card + 6 short real quotes (first names, service).
- FAQ: 7 questions (booking, buy-3, paint safety, memberships, detail time, pet hair, parking/payment).
- Visit: address, phone, email, Instagram, hours table with today highlighted, Google map embed, directions.
- JSON-LD `AutoWash` with offers, geo, hours and rating. OG tags. Favicon.

## Assumptions
- Hours from Google (9:30–7:30 daily) over the website footer.
- Buy 3 get 1 free applies to all tiers and works with a stamp card at the counter (flyer says only "buy 3 washes get 1 free wash").
- "Most popular" on Deluxe (the website marked its middle plan as popular).
- Supreme single-wash price is the same for sedan/SUV/truck/van (from the Supreme flyer); assumed Basic/Deluxe too.
- Detailing inclusions (clay, leather conditioning, carnauba, decontamination) are typical of the services the owner's reviews and flyers describe; not an itemised menu from the owner.
- Weekend pickup covers Burnaby; the website post only says "your location".
- Self-serve bay details (foam brush, wax cycle, coin and card, mat clips) come from reviews and typical bay setups; counts of bays/vacuums are unknown and not stated.
- Owner story: "took it over a year ago" from the Instagram anniversary post and reviews citing "new owner"; "walks every car with you first", "recommends the cheaper option", "finishes the spot free" are all from specific reviews.
- Recent-work captions describe what the photo shows (car model, exterior/interior), not a claimed service.
- Tim Hortons next door and "Hastings at Kensington": flyers and the map.
- Payment by card or cash: assumed.

## Open questions for the owner
- Correct hours for the tunnel, detailing and the self-serve bays (three different answers today).
- Which membership prices are current, $49.99/$59.99/$69.99 or $79.99/$99.99/$129.99, and whether any "50% off" promo still runs.
- Is Calendly the booking tool he wants, or should "Book a detail" call or text instead?
- Does buy-3-get-1 apply to memberships and all tiers?
- Typical full-detail price range he is happy to publish (reviews mention roughly $100–$441).
- Is weekend pickup still offered, and how far out?
- Preferred spelling, Aladin or Aladdin.

## Needs from the owner
- A landscape photo of the storefront from Hastings St and one of him with a car (the owner section currently uses a foam close-up).
- Confirmation of the hours and prices above.
- His own before/after pairs shot in the same position (the current card uses his flyer crops).

## QA
Desktop 1440 and iPhone-size 390 checked · scrollWidth equals viewport on both (no horizontal overflow) · 0 console errors · 0 broken images · every local asset exists · external links return 200 · reduced-motion emulation renders fully static with Lenis off · monthly toggle, before/after hold, mobile menu, map embed and FAQ all exercised in Playwright.

## Placeholder / generated images
None. Every photo is the business's own, from its Google Business Profile.
