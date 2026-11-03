/* Broadway Locksmith — offer data.
   Edit this file to change what the site lists. No prices are shown: the shop
   quotes by phone or at the counter. Keep names short; they render as tags and cards. */

window.BROADWAY = {
  business: {
    name: "Broadway Locksmith Ltd",
    phone: "604-874-1040",
    phoneAlt: "604-879-8720",
    emergency: "604-889-2634",
    email: "broadwaylocksmith@gmail.com",
    address: "335 West Broadway, Vancouver, BC V5Y 1P8",
    since: 1971,
    rating: "4.6",
    reviewCount: "451",
    mapsQuery: "Broadway Locksmith Ltd, 335 W Broadway, Vancouver, BC V5Y 1P8"
  },

  /* The key wall: every kind of key the shop cuts. Rendered as pegboard tags. */
  keys: [
    { name: "House & apartment keys", note: "Residential blanks of every era" },
    { name: "Old & hard-to-find blanks", note: "Our specialty since 1971" },
    { name: "Car keys & transponder chips", note: "Cut and programmed in-store" },
    { name: "Remote & flip keys", note: "Lock/unlock remotes programmed" },
    { name: "Motorcycle keys", note: "Including keys cut from a code" },
    { name: "Boat & marine keys", note: "Blanks ordered in if we don't stock them" },
    { name: "Bike lock keys", note: "Yes, even the German ones" },
    { name: "E-bike battery keys", note: "Lost-key replacements" },
    { name: "Mailbox & cabinet keys", note: "Mailbox, desk, filing cabinet" },
    { name: "Padlock keys", note: "Standard and high-security" },
    { name: "High-security keys", note: "Medeco, Mul-T-Lock, registered systems" },
    { name: "Master key systems", note: "Designed for apartments and offices" },
    { name: "Safe keys", note: "For the safes we sell and most others" },
    { name: "Broken-key copies", note: "Snapped in half? We can usually read it" }
  ],

  /* Four service pillars. image = file in photos/products/ (or null). */
  services: [
    {
      id: "locks",
      title: "Locks & doors",
      lead: "Sales, service, repair and installation of every kind of lock, for homes and buildings around Vancouver.",
      items: [
        "Deadbolts, knobs and lever locks",
        "Rekeying (keep your lock, change the key)",
        "Keyless pushbutton locks",
        "Registered high-security locks",
        "Padlocks and mailbox locks",
        "Door closers, astragal plates, lock protectors"
      ],
      image: "photos/products/deadbolt.jpg",
      alt: "Brass deadbolt lock set"
    },
    {
      id: "car",
      title: "Car keys",
      lead: "Lost keys, spare keys and lockouts, usually for a lot less than the dealership.",
      items: [
        "Lost-key replacement for most makes",
        "Transponder chips and remotes programmed",
        "Keys cut from a broken original",
        "Car unlocking",
        "Lock cylinder repair and replacement",
        "Motorcycle and boat keys too"
      ],
      image: "photos/products/knob-lock.jpg",
      alt: "Brass knob lock set"
    },
    {
      id: "commercial",
      title: "Commercial & strata",
      lead: "Keying that makes sense for an office, a store or a whole apartment building.",
      items: [
        "Custom master key systems",
        "VFD-approved commercial lockboxes, installed",
        "High-security restricted keyways",
        "Key cabinets in many sizes",
        "Commercial door hardware and closers",
        "Fast mobile service, bonded and licensed technicians"
      ],
      image: "photos/products/pushbutton-lock.jpg",
      alt: "Keyless pushbutton lock"
    },
    {
      id: "safes",
      title: "Safes",
      lead: "A large selection of burglary and fire safes for home and business, in stock on West Broadway.",
      items: [
        "Fire safes for documents and media",
        "Burglary-rated safes",
        "Home safes and hotel-style safes",
        "Key cabinets and lockboxes",
        "Delivery and installation available",
        "Safe keys and combination help"
      ],
      image: "photos/products/disc-padlock.jpg",
      alt: "Stainless disc padlock"
    }
  ],

  brands: ["Medeco", "Mul-T-Lock", "Schlage", "Weiser", "Kaba / Unican", "Abus"],

  /* Real Google reviews, lightly trimmed. First names only. */
  reviews: [
    { name: "Patrick", when: "3 months ago", text: "I have come in here needing the weirdest, oldest, most obscure blanks, and they always have them." },
    { name: "Jack", when: "2 months ago", text: "Brand new car key blank cut, transponder chip and remote programmed. All at a reasonable price compared to the dealership." },
    { name: "Allison", when: "5 months ago", text: "We needed a boat key cut; they didn't have the blank, so ordered it in and called us. They also cut a bike lock key from Germany that we could not find anywhere else." },
    { name: "Charles", when: "6 months ago", text: "They managed to make a copy of my car key that was broken in half. Worked perfectly from the first try." },
    { name: "Kern", when: "9 months ago", text: "Great service and honest. Had a lock re-keyed instead of buying a new set and it saved me money." },
    { name: "Ethan", when: "8 months ago", text: "An impressive range of keys and locks. Nine times out of ten, they'll have exactly what you need." }
  ],

  faq: [
    { q: "Do I need an appointment?", a: "No. Walk in any weekday. Phones are answered from 8:30 am and the counter is open 9:00 am to 5:30 pm, Monday to Friday." },
    { q: "Can you copy a key that's broken, bent or worn?", a: "Usually, yes. Bring both halves if it snapped. We can often cut a fresh key from the pieces or from the lock itself." },
    { q: "Do you program car keys and remotes?", a: "Yes. Transponder chips, remotes and flip keys for most makes, cut and programmed in-store, typically for much less than a dealership." },
    { q: "Do you come to me?", a: "Yes. We offer fast mobile service for lock changes, rekeying, lockouts and commercial work. Call and we'll give you a time." },
    { q: "Where do I park?", a: "There is free customer parking at the back of the building. We're also right beside the Broadway–City Hall Canada Line station." },
    { q: "What if I'm locked out after hours?", a: "Call the after-hours emergency line at 604-889-2634." }
  ]
};
