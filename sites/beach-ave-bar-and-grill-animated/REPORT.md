# Beach Ave Bar & Grill (animated edition) — build report

Local preview: http://localhost:8101/ · Publish: `./deploy.sh` →
https://web.soichirosaimon.com/beach-ave-bar-and-grill-animated/ (not deployed)

Built 2026-11-21 as a second, separate site. The original
(`~/beach-ave-bar-and-grill-website`, live at /beach-ave-bar-and-grill/) was not changed.

## Brief (user's answers)
- Use the same information as the first site: no new research was done. Facts, menu, prices,
  reviews and photos are those gathered 2026-10-15 (see the original REPORT.md for sources,
  conflicts and competitor notes).
- Animated. Keep the brand (colours, type, logo); new ideas welcome if they don't change it.
- Same 3 pages (home, menu, visit). Must look really good on a phone.

## What changed versus the first site
**Motion (Lenis + GSAP ScrollTrigger, one easing curve, everything plays once)**
- Smooth scrolling on desktop; native touch scrolling on phones.
- Hero headline rises in word by word; hero photo drifts as you scroll.
- Sections ease in as you reach them; card rows arrive one after another.
- Brunch and patio photos sit behind wave-shaped masks and drift behind them.
- Trust-strip numbers count up; the sunset-gradient line draws itself on menu/visit pages.
- Menu categories ease in each time you switch tab.
- Switches off entirely for "reduce motion" users, and if the CDN scripts fail to load.

**New ideas, inside the brand**
- Sunset band: full-width patio photo with a live sun-arc card: the sun travels along the arc
  to where it is right now, with tonight's sunrise, golden hour and sunset times.
- Live chips: "Open now · until 10pm" and "Sunset 4:24pm" in the hero; "On right now / Back
  Monday at 3pm" on happy hour. All computed in Vancouver time.
- Teal ticker strip (burgers, brunch, craft beer…) with the checker motif from their liners.

**Phone**
- Hits and reviews become swipeable rows that snap card by card.
- Hero fits one screen above the Call / Menu / Directions bar on 360–393px phones; both
  buttons side by side; one-line header.
- Full-width buttons, tighter spacing, smaller map, square masked photos.

## Assumptions
- All facts are as of 2026-10-15 (4.5★ / 694 Google reviews, April 2026 menu prices, hours).
  Not re-verified for this build.
- Golden hour is shown as one hour before sunset.
- Open/happy-hour chips use the regular hours; holidays are not handled.
- Assumptions from the first report (parking/transit, FAQ answers, "10 taps") carry over.

## QA (Playwright, 2026-11-21)
Home, menu and visit at 1440px, iPhone 15 (393px) and 360px: no horizontal overflow, no
console errors, no broken images, nothing left hidden after scrolling down and back up.
Reduced-motion run renders fully static with everything visible. Screenshots reviewed by eye
on phone and desktop. Not tested on a physical phone.

## Needs from the owner
Same as the first site: a golden-hour patio wide shot, and confirmation of parking and FAQ answers.
