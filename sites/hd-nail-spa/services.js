// HD Nail Spa service menu. Prices in CAD, exactly as listed on Fresha (Sept 2026).
// To update: edit this file only. Each item: [name, duration, price, note?]
// A price written as "from $56" renders as a starting price.
window.HD_SERVICES = [
  {
    id: "nail-care", title: "Manicure & pedicure",
    intro: "Natural nail care. Add gel polish removal if you're coming in with gel on.",
    items: [
      ["Manicure + regular polish", "30 min", "$26"],
      ["Gel manicure", "45 min", "$41"],
      ["Gel manicure + gel polish removal", "45 min", "$46"],
      ["Pedicure, no polish or regular polish", "45 min", "$41"],
      ["Gel pedicure", "45 min", "$51"],
      ["Gel pedicure + gel polish removal", "45 min", "$56"],
      ["Luxe pedicure + regular or no polish", "1 hr", "$61"],
      ["Luxe pedicure + gel polish", "1 hr 15", "$71"],
      ["Combo mani & pedi + regular polish", "1 hr 15", "$65"],
      ["Combo pedicure gel + manicure regular", "1 hr 15", "$74"],
      ["Combo pedicure regular + manicure gel", "1 hr 30", "$79"],
      ["Combo mani & pedi + gel polish", "1 hr 30", "$87"]
    ]
  },
  {
    id: "biab", title: "BIAB, builder gel",
    intro: "Structure builder gel on your natural nails: strength without extensions. Refill every three to four weeks.",
    items: [
      ["BIAB overlay on natural nails, short to medium", "1 hr 15", "$71"],
      ["BIAB overlay + full cuticle trim", "1 hr 15", "$76"],
      ["BIAB refill, short to medium", "1 hr 15", "$71"],
      ["BIAB refill + full cuticle trim", "1 hr 15", "$76"],
      ["Builder gel add-on, two thin layers", "15 min", "$10"],
      ["BIAB removal add-on", "15 min", "$5"]
    ]
  },
  {
    id: "gel-x", title: "Gel-X extensions",
    intro: "Soak-off soft gel extensions in three lengths.",
    items: [
      ["Gel-X, short to medium", "1 hr 15", "$78"],
      ["Gel-X, longer", "1 hr 15", "$83"],
      ["Gel-X, extra long", "1 hr 15", "$88"],
      ["Gel-X removal add-on", "15 min", "$10"]
    ]
  },
  {
    id: "artificial", title: "Acrylic & hard gel",
    intro: "Sets, fills and overlays, all with gel polish included.",
    items: [
      ["Acrylic set + gel polish", "1 hr 15 – 1 hr 30", "from $66"],
      ["Acrylic fill + gel polish", "1 hr – 1 hr 15", "from $56"],
      ["Acrylic overlay + gel polish", "1 hr", "$61"],
      ["Hard gel set + gel polish", "1 hr 15", "from $71"],
      ["Hard gel fill + gel polish", "1 hr", "from $61"],
      ["Hard gel overlay + gel polish", "1 hr", "$66"],
      ["Acrylic set on toes, with pedicure", "1 hr 30", "$91"],
      ["Acrylic set on toes, without pedicure", "1 hr", "$71"],
      ["Gel polish change on acrylic", "45 min", "$41"],
      ["Extra long nails", "15 min", "from $5"],
      ["Acrylic, Gel-X or hard gel removal only", "30 min", "$21"],
      ["Acrylic, Gel-X or hard gel removal add-on", "15 min", "$10"]
    ]
  },
  {
    id: "art", title: "Nail art",
    intro: "Add to any set. From two accent fingers to a full layered design.",
    items: [
      ["Basic nail art, 2 fingers", "15 min", "$7"],
      ["Basic nail art, 4 fingers", "15 min", "$14"],
      ["Classic straight French tip", "15 min", "from $10"],
      ["Curve French tips", "15 min", "from $15"],
      ["Ombre", "15 min", "from $15"],
      ["Cat eye gel polish", "15 min", "from $15"],
      ["Chrome", "15 min", "$15"],
      ["Sparkle fade", "15 min", "from $10"],
      ["Reflective sparkle gel polish add-on", "5 min", "$5"],
      ["Single design, all 10 nails", "30 min", "from $25"],
      ["Mixed design, each nail different", "30 min", "from $30"],
      ["Layered or advanced design", "1 hr", "from $45"]
    ]
  },
  {
    id: "lash", title: "Lashes",
    intro: "Keratin lash lifts and one-by-one, hybrid and volume extensions.",
    items: [
      ["Keratin lash lift", "1 hr 15", "$80"],
      ["Keratin lash lift + tint", "1 hr 15", "$90"],
      ["Eyelash tint", "30 min", "from $26"],
      ["Classic set, one by one", "1 hr 30", "$100"],
      ["Classic fill", "1 hr", "$60"],
      ["Hybrid set, classic and volume", "1 hr 30", "$120"],
      ["Hybrid fill", "1 hr 15", "$80"],
      ["Half volume set", "1 hr 30", "$130"],
      ["Half volume fill", "1 hr 30", "$85"],
      ["Full volume set", "1 hr 30", "$140"],
      ["Full volume fill", "1 hr 30", "$95"],
      ["Mega volume fill", "1 hr 30", "from $110"],
      ["Lash extension removal only", "30 min", "$26"]
    ]
  },
  {
    id: "waxing", title: "Waxing & tinting",
    intro: "",
    items: [
      ["Eyebrows", "15 min", "$15"],
      ["Upper lip", "15 min", "from $10"],
      ["Chin", "15 min", "from $10"],
      ["Combo eyebrows, lip and chin", "30 min", "from $28"],
      ["Eyebrow tint", "30 min", "from $21"],
      ["Underarms", "30 min", "from $15"],
      ["Half arms", "30 min", "from $36"],
      ["Half legs", "30 min", "$36"],
      ["Full legs", "45 min", "from $51"],
      ["Bikini", "45 min", "from $31"],
      ["Brazilian", "45 min", "from $51"],
      ["Back", "45 min", "from $36"]
    ]
  },
  {
    id: "kids", title: "Little ones, under 10",
    intro: "Shorter, gentler versions for kids.",
    items: [
      ["Little ones manicure", "20 min", "$16"],
      ["Little ones pedicure", "20 min", "$26"],
      ["Little ones gel manicure", "30 min", "from $30"],
      ["Little ones gel pedicure", "30 min", "$41"],
      ["Regular polish on hands", "15 min", "$11"],
      ["Regular polish on toes", "15 min", "$11"],
      ["Gel polish add-on", "10 min", "$15"]
    ]
  }
];
