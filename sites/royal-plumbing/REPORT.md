# Royal Plumbing Services Ltd. — build report (2026-10-27)

Local preview: http://localhost:8084/ · Publish: `./deploy.sh` → https://web.soichirosaimon.com/royal-plumbing/

Purpose: demo site to pitch the owner (user's choice). Nothing deployed.

## Business facts
| | Value | Source |
|---|---|---|
| Name | Royal Plumbing Services Ltd. (livery: ROYAL · Plumbing · Heating · Cooling) | Google, van photo, old site |
| Category | Plumber; also drains/sewers, water heaters, wet basements, gas, commercial boilers, heating, AC | old site |
| Address | 614 Dufferin St, Toronto, ON M6K 2A9 | Google, old site, BBB |
| Phone | 416-537-0038 (West line). Van also shows an East line 416-463-9000; not used | Google, van |
| Email | none found | |
| Hours | Mon–Sat 7 a.m.–7 p.m., Sunday closed; 24/7 emergency on-call | Google (hours), old site + van (24 hr) |
| Booking | none. Old site's "book online" form is dead ("No Iframes"). Site uses tap-to-call + Formspree placeholder form | old site |
| Ratings | Google 4.9 (771) · BBB A+ Accredited · HomeStars 8.6/10 (58, mixed, not shown) · Birdeye 4.9 (853, unclaimed, not shown) | Google, BBB listing, HomeStars |
| Years | "over 20 years" (old site; copy is old, so likely more) | old site |
| Team | Matthew (Torres), Mark (Bautista/Mayhew/Garcia, several Marks), Christian, Thomas, Jorge Zeballos, Mike | Google + old-site reviews |

**Conflicts between sources**
- BBB lists a second "Royal Plumbing Services Ltd." at 3-113 Annette St, 416-769-8800 (also A+). Probably an older address or second yard; not used. Ask the owner.
- Old site says "$97 sewer clearing" (2019 image, code R97) and "rebates up to $3,400". The City of Toronto subsidy rose to $6,650 on May 1, 2026; the site uses the current City figures. The $97 special is shown as a dashed "to be confirmed" card.
- Old site claims 24/7 but Google hours say Mon–Sat 7–7. Site states both honestly: office hours plus an after-hours on-call line, and tells visitors to ask about after-hours rates.
- One Google review mentions "Royal Plumbing Vaughan"; old site says plumbers are "dispatched from multiple locations". Site says crews are based across Toronto and the GTA without naming a second office.

## Sources used
- Google Maps listing (cid 13793783470128330368): rating, 771 count, hours, 11 owner photos, 131 reviews scraped.
- royalplumbingtoronto.com (PlumberMarketing template, Joomla-era): all 14 pages read for services, guarantee, service areas, old testimonials, offers.
- BBB category listing (A+ Accredited at 614 Dufferin); HomeStars profile (8.6/10, 58 reviews); van photo (livery, two lines, old domain royalplumbers.com, now 404).

## Competitors studied (Toronto, rating × reviews, real sites)
| Competitor | Rating (n) | What they do well | Adopted? |
|---|---|---|---|
| Drain King Plumbers | 4.7 (2,893) | Badge column (Google/HomeStars/BBB), $30 coupon, request form in hero, FAQ | Badge facts in hero, FAQ |
| Priority Plumbing & Drains | 4.8 (1,939) | Van video hero, Book button, lifetime install warranty, beat-any-quote, huge named-tech review wall | Named-tech reviews, concrete guarantee wording |
| New Canadian Drain | 4.7 (1,823) | Licence # and "23 years" in hero, 7 HomeStars award badges, seniors discount, City rebate | Years + facts in hero; rebate card |
| True Service Plumbing | 5.0 (1,258) | Quote form in hero, maintenance plans, area pages | Request form, areas page |
| Premier Plumbing | 4.9 (677) | Best-looking: real tech + van hero, badge row, 4-stat strip, membership | Stat strip, real-photo hero |
| Plumber To Your Door | 4.9 (462) | Family-owned block, 12-month warranty, service cards with photos | Photo service cards |
| Anta Plumbing | 4.7 (467) | Trust icons, cost calculator, rebates page; but three phone numbers | One phone number everywhere |
| Mr. Rooter Toronto (brand) | — | Genuinely local copy (pre-1970 homes, clay laterals, cast iron, 311) | "Toronto know-how" section and per-page Toronto specifics |

Table stakes: phone button + Book/Request in header, real van/tech hero, rating with count, 24/7 line, licensed & insured, a coupon, service cards, named-tech reviews, service-area list, FAQ, City rebate.
Opportunities nobody uses: problem-first routing (the "What's going on?" picker), an honest emergency-pricing line, a "who's coming to your door" block, a light page (competitors run 30–110 scripts; this site has 2).

## Design decisions
- **Palette** from the van livery and logo: royal blue base (#12306B), logo red (#C4202E) reserved for the emergency band and primary buttons, copper (#B5683A, from the copper rough-in photo) for stat numerals and the team rule, cool off-white paper, gold for stars only.
- **Type**: Barlow Condensed 700/800 for headlines (reads like van lettering), Source Sans 3 body (the old site used Source Sans Pro), Barlow for eyebrows/stats.
- **Signature**: the dispatch picker in the hero. Seven symptom chips route to the right service with "what happens next" and a Call button. The brand's "red carpet" line survives as the thin red rule under every heading.
- **Structure**: home + 5 service pages + service areas, following the plumbing playbook blueprint (utility bar, sticky header with phone, hero with proof, trust strip, services, emergency band, guarantee, proof, reviews, offers, area, FAQ, request band, footer, mobile Call/Request bar). Service template: hero → checklist → 4 steps → Toronto specifics + filtered reviews → FAQ → related → request.
- **Copy**: the company's own phrases ("royal treatment", "red carpet service", "free estimates, no trip fee", "dispatched from multiple locations") tightened; review language reused ("plumbers who pick up the phone" comes from four reviews about competitors going to voicemail).
- **Schema**: Plumber + AggregateRating + OfferCatalog + ContactPoint (emergency) on the home page; Service + BreadcrumbList on service pages; FAQPage wherever there is a FAQ.

## What was built
- Home: topbar · header · hero with picker · trust strip · 6 service cards + "also" line · emergency band · guarantee (4) · 5 work photos with captions · team names · 4.9 card + 6 reviews · subsidy + drain-special cards · Toronto know-how · areas + map · 7 FAQs · request form · footer · mobile bar.
- Drains & sewers, Water heaters, Leaks & repipes, Wet basements, Commercial & boilers: service template with page-specific checklists, Toronto paragraphs, photo strip, 3 tagged reviews, 4 FAQs each.
- Service areas: 5 regions with neighbourhoods, map, "not on the list?" card, 3 FAQs.

## Assumptions
- "Over 20 years" kept as the owner's own claim; founding year unknown.
- 24/7 means an on-call plumber after office hours. After-hours pricing unknown, so the site says "ask about after-hours rates".
- Team names come from Google reviews; Matthew (80+ mentions) and Mark (50+) are counted from the 131 reviews scraped. Whether all five are still on staff is unconfirmed.
- Subsidy amounts are the City of Toronto's figures effective May 1, 2026 (80% of cost, up to $6,650: $1,600 per backwater valve ×2, $2,250 sump pump, $300 battery back-up, $400 foundation drain severance, $500 plumbing assessment).
- The $97 drain special is a placeholder card flagged "to be confirmed by the office".
- "Licensed & insured" and "BBB A+ Accredited" are stated; no licence number is shown because none was found.
- Heating and AC are one line in the services grid (user's choice).

## Open questions for the owner
- Founding year, and whether "family-owned" is still accurate.
- Is 416-463-9000 (East) still live? Is 3-113 Annette St a current location?
- Current drain-clearing special price and conditions; after-hours rate policy.
- City of Toronto plumbing contractor licence number for the footer; WSIB and gas licence details.
- Which plumbers are current staff; a crew photo.
- Email address for the request form (Formspree ID needed).

## Needs from the owner
- Real photos of: the crew (group shot), a sharper van/truck photo for the hero, the office front.
- Confirm: hours, 24/7 policy wording, subsidy handling, guarantee terms (length), service area edges.

## QA
Desktop 1440 and iPhone-size 390 checked on all 7 pages after scrolling · no horizontal overflow (scrollWidth = innerWidth) · no console errors · no broken images · every local asset exists · external links: Google Maps cid, BBB category page, Google Fonts, Formspree placeholder · reduced motion respected · one H1 per page · pages 14–33 KB HTML, 2 scripts, photos 4 MB total (largest 1800px).

## Placeholder / generated images
None. All 11 photos are the company's own Google Business Profile uploads; the logo is the old site's header mark cropped.
