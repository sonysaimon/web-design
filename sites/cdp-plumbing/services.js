// CDP Plumbing of Toronto — editable content data.
// Edit text here; main.js renders it. Keep the shape of each object.
// Paths are relative to the site root (index.html). Service pages prefix "../".

window.CDP = {
  phone: "(647) 558-2622",
  tel: "+16475582622",

  // Hero "What's going on?" picker. urgency: now | today | sched
  triage: [
    { id: "drain", label: "Clogged or slow drain", urgency: "today", tag: "Same day",
      text: "Hair, grease or wipes, usually. We clear the whole line, not just the clog, and camera-check it if it keeps coming back.",
      link: "services/drain-cleaning.html", linkText: "Drain cleaning" },
    { id: "sewer", label: "Sewer backup / basement water", urgency: "now", tag: "Emergency, 24/7",
      text: "Tree roots, a cracked clay main or a storm overwhelming an old line. We contain it, clear the main, then show you the camera footage.",
      link: "services/sewer-backup.html", linkText: "Sewer backups" },
    { id: "leak", label: "Leak or burst pipe", urgency: "now", tag: "Emergency, 24/7",
      text: "Close the main shut-off (we'll walk you through it on the phone). Then a permanent fix on copper, PEX, cast iron or galvanized.",
      link: "services/leaks-and-pipe-repair.html", linkText: "Leaks & pipe repair" },
    { id: "hot", label: "No hot water", urgency: "today", tag: "Same day",
      text: "Tank or tankless. We repair when it's worth it and replace when it isn't, and tell you which before any work starts.",
      link: "services/water-heaters.html", linkText: "Water heaters" },
    { id: "pressure", label: "Low water pressure", urgency: "sched", tag: "Scheduled visit",
      text: "Often corrosion inside old galvanized pipe, as Kemar found on a recent job. We replace the bad section and the pressure comes back.",
      link: "services/leaks-and-pipe-repair.html", linkText: "Pipe replacement" },
    { id: "toilet", label: "Toilet running or won't flush", urgency: "today", tag: "Same day",
      text: "Repair or same-day replacement. Flooring protected, everything tested before we leave.",
      link: "services/bathroom-and-kitchen.html", linkText: "Toilets & fixtures" }
  ],

  // "What we fix" cards. The last one is the emergency card.
  services: [
    { title: "Drain cleaning", slug: "drain-cleaning", photo: "photos/shower-drain.jpg",
      desc: "Kitchen, bathroom, laundry, floor and main drains. Snaking, hydro-jetting and camera inspection." },
    { title: "Sewer backup & main line", slug: "sewer-backup", photo: "photos/sewer-line-excavation.jpg",
      desc: "Backups, roots, collapsed clay pipe, backwater valves. Cleared the same day, repaired properly." },
    { title: "Leaks & pipe repair", slug: "leaks-and-pipe-repair", photo: "photos/pex-manifold.jpg",
      desc: "Burst and leaking pipes, low pressure, repiping old galvanized with copper or PEX." },
    { title: "Water heaters", slug: "water-heaters", photo: "photos/backflow-valve.jpg",
      desc: "Tank and tankless repair, replacement and installation. Honest advice on which." },
    { title: "Bathroom & kitchen", slug: "bathroom-and-kitchen", photo: "photos/tiled-shower.jpg",
      desc: "Toilets, faucets, vanities, shower drains, dishwashers and full renovation rough-ins." },
    { emergency: true, title: "24/7 emergency", anchor: "#emergency",
      desc: "Burst pipes, flooding, sewage. A person answers at any hour and the rate doesn't change." }
  ],

  // Recent work cards (real photos from CDP's Google listing). wide: true spans two columns.
  work: [
    { photo: "photos/sewer-line-excavation.jpg", w: 1200, h: 710, wide: true, title: "Sewer line dug out and replaced", cap: "Cracked main under the basement floor, new pipe tied in and tested" },
    { photo: "photos/basement-trench.jpg", w: 665, h: 762, title: "Basement drain re-run", cap: "Trench cut through the slab to fix a drain that kept backing up" },
    { photo: "photos/old-pipes-removed.jpg", w: 1200, h: 710, title: "Old galvanized pipe out", cap: "Decades of corrosion, the cause of low pressure in the whole house" },
    { photo: "photos/pex-manifold.jpg", w: 1200, h: 710, title: "New PEX manifold in", cap: "Clean, labelled lines to every fixture after the repipe" },
    { photo: "photos/backflow-valve.jpg", w: 1200, h: 710, title: "Backflow preventer install", cap: "Copper backflow assembly on a commercial water service" },
    { photo: "photos/shower-drain.jpg", w: 1200, h: 710, wide: true, title: "Linear shower drain", cap: "Set and levelled before tile in a walk-in shower renovation" },
    { photo: "photos/garage-pipes.jpg", w: 1200, h: 710, title: "Underground garage standpipes", cap: "Commercial work in a condo parking level" },
    { photo: "photos/old-valve.jpg", w: 1200, h: 710, title: "Seized valve replaced", cap: "Old shut-off chipped out of the concrete and swapped for new" },
    { photo: "photos/cast-iron-stack.jpg", w: 671, h: 789, title: "Cast iron stack", cap: "Original stack in a century home, assessed before replacement" },
    { photo: "photos/copper-pex-roughin.jpg", w: 1200, h: 710, title: "Bathroom rough-in", cap: "Copper and PEX supply lines for a renovation" }
  ],

  // Reviews from Google, first names, month posted, job and technician where mentioned.
  reviews: [
    { name: "Vishav", when: "May 2026", job: "Low water pressure · Kemar", text: "After dealing with low water pressure for months, Kemar arrived on time, carefully inspected the issue and found corrosion inside an older pipe. Once the damaged section was replaced the improvement was immediate." },
    { name: "Ayden", when: "December 2025", job: "Toilet replacement", text: "Great pricing and service from their whole staff! I needed a new toilet and they came and got it done for me on the same day. They waived the inspection fee as well." },
    { name: "Ahmed", when: "February 2026", job: "Burst pipe · emergency", text: "CDP Plumbing was here within the same hour for a burst pipe repair and finished it quick. Highly recommend!" },
    { name: "Luis", when: "May 2026", job: "Bathroom sink leak", text: "Honest price, no hidden fees! Amazing work done on my bathroom sink. The pipe was leaking, they came fast and fixed it." },
    { name: "Lisha", when: "January 2026", job: "Toilet replacement", text: "Toilet replacement done cleanly with no damage to flooring. Everything was tested before they left." },
    { name: "Sarim", when: "December 2025", job: "Toilet install · Alex", text: "Great pricing and service from their staff. Alex did a great job on my new toilet installation!" }
  ]
};
