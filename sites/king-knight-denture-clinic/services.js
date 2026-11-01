/* King & Knight Denture Clinic: services and the "What brings you in?" chooser.
   Edit text here; index.html renders it. Source: the clinic's own services page (2026).
   No prices: the clinic did not publish them. */

window.KK_SERVICES = [
  {
    id: "full",
    group: "Full dentures",
    name: "Full dentures, BPS Premium",
    lead: "Henry is certified by Ivoclar to provide BPS dentures.",
    points: [
      "Ivoclar teeth for wear and stain resistance and a natural look",
      "Injected acrylic for a better fit and strength",
      "Gothic arch tracing and face bow transfer for an accurate, smooth bite",
      "Free adjustments and free cleaning for 5 years"
    ]
  },
  {
    id: "semcd",
    group: "Full dentures",
    name: "Lower suction denture (SEMCD)",
    lead: "A lower denture that holds with suction, like an upper does.",
    points: [
      "No surgery, implants or adhesives",
      "Works for about 4 out of 5 patients",
      "Henry trained in the technique under Dr. Jiro Abe"
    ],
    link: { href: "semcd.html", text: "How suction dentures work" }
  },
  {
    id: "digital",
    group: "Full dentures",
    name: "Pala digital dentures",
    lead: "Dentures designed in 3D software for a precise fit in less time.",
    points: [
      "Only one patient visit needed, to take the impression",
      "Optional try-in prototype before the final set, at no extra charge"
    ]
  },
  {
    id: "partial",
    group: "Partial dentures",
    name: "Partial dentures",
    lead: "As many options as possible, so you get a partial that suits your mouth and your budget.",
    points: [
      "Cast partials (chrome cobalt): the proven standard for most patients",
      "Acrylic partials: transitional, budget-friendly, can be made in as little as 1 day",
      "Flexible partials: the whole partial flexes, so it's easy to put in and take out"
    ]
  },
  {
    id: "implant",
    group: "Implants",
    name: "Dentures over implants",
    lead: "The strongest hold for people missing all their teeth, recommended for all lower full dentures.",
    points: [
      "Referral to an oral surgeon for the implants",
      "Usually 2 implants in the lower jaw is enough, so you don't pay for more",
      "Better chewing, fewer sore spots, no palate on the upper"
    ]
  },
  {
    id: "reline",
    group: "Relines & repairs",
    name: "Relines and rebases",
    lead: "Gums shrink over time and dentures loosen. A reline refits the denture you already have.",
    points: [
      "Done in one day: impressions at 10:00 am, ready at 4:00 pm (by appointment)",
      "Recommended every 2 years",
      "Temporary soft relines after extractions or for sore gums"
    ]
  },
  {
    id: "repair",
    group: "Relines & repairs",
    name: "Repairs and additions",
    lead: "Broken denture? Most repairs are done while you wait.",
    points: [
      "Cracked or broken acrylic and metal dentures",
      "Replacement of broken teeth",
      "Adding a tooth to your denture when a natural tooth is lost"
    ]
  }
];

/* Chooser: each need points at one service id and gives a plain next step. */
window.KK_NEEDS = [
  { label: "I need my first dentures", service: "full",
    next: "Book a consultation. You choose the colour, size and position of your teeth, and approve the look before anything is finished." },
  { label: "My lower denture keeps lifting", service: "semcd",
    next: "Ask about the lower suction denture (SEMCD). It needs no surgery, implants or adhesive." },
  { label: "My dentures feel loose", service: "reline",
    next: "A reline refits your own denture in one day. Call to book a morning slot: in at 10:00, ready at 4:00." },
  { label: "My denture is broken", service: "repair",
    next: "Call first so we're ready for you. Most repairs are done while you wait." },
  { label: "I'm missing a few teeth", service: "partial",
    next: "Come in to compare cast, acrylic and flexible partials side by side." },
  { label: "I'm asking for a parent", service: "full",
    next: "Plenty of patients come in with a son, daughter or grandchild. Call to book, and come in together." }
];
