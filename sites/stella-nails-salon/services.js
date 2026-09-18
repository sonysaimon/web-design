// Stella Nails & Spa price list. Prices in CAD, exactly as listed on Square Appointments (Sept 2026).
// To update: edit this file only. Each item: [name, duration, price, note?]
// A price written as "from $60" renders as a starting price.
window.STELLA_SERVICES = [
  {
    id: "mani-pedi", title: "Manicure & pedicure",
    intro: "Gel services include removal of your old gel. Combos save you time and a little money.",
    items: [
      ["Regular manicure", "30 min", "$26"],
      ["Gel manicure", "45 min", "$42", "Gel removal included"],
      ["Regular pedicure", "40 min", "$45"],
      ["Gel pedicure", "50 min", "$55", "Gel removal included"],
      ["Deluxe pedicure, regular polish", "1 hr", "$65"],
      ["Deluxe pedicure, gel polish", "1 hr 15", "$80"],
      ["Combo manicure & pedicure, regular polish", "1 hr 10", "$65"],
      ["Combo manicure & pedicure, gel polish", "1 hr 30", "$92"],
      ["Polish change", "30 min", "$35", "Gel removal included"],
      ["Gel polish removal only", "20 min", "$15"],
      ["Gel polish removal with another service", "10 min", "$5"]
    ]
  },
  {
    id: "gel-x", title: "Gel X",
    intro: "Soft gel extensions, full cover, no drilling. Gel polish included.",
    items: [
      ["Gel X, gel polish included", "1 hr", "$75"],
      ["Gel X removal only", "30 min", "$20"],
      ["Gel X removal with another service", "20 min", "$15"]
    ]
  },
  {
    id: "acrylic", title: "Acrylic powder",
    intro: "Full sets by length. Fills keep them fresh every two to three weeks.",
    items: [
      ["Full set acrylic, short or medium", "1 hr 15", "$68"],
      ["Full set acrylic, long", "1 hr 30", "$78"],
      ["Acrylic overlay, no extension", "1 hr", "$60"],
      ["Fill acrylic, long", "1 hr 15", "$70"],
      ["Polish change only", "40 min", "$40"],
      ["Nail fix, per nail", "10 min", "$5"],
      ["Acrylic removal only", "30 min", "$20"],
      ["Acrylic removal with another service", "20 min", "$15"]
    ]
  },
  {
    id: "dip", title: "Dipping powder (SNS)",
    intro: "Lightweight, strong, and odour-free. On natural nails or with extensions.",
    items: [
      ["Full set dipping powder, natural nails", "1 hr", "$55"],
      ["Full set dipping powder, extensions, short or medium", "1 hr 15", "$65"],
      ["Full set dipping powder, extensions, long", "1 hr 30", "$75"],
      ["Dipping removal with dipping service", "15 min", "$5"],
      ["Dipping removal with another service", "15 min", "$10"],
      ["Dipping removal only", "25 min", "$15"]
    ]
  },
  {
    id: "biab", title: "Hard gel / BIAB",
    intro: "Builder gel to strengthen and grow your natural nails, or a hard gel set with length.",
    items: [
      ["New set hard gel / BIAB, short or medium", "1 hr 15", "$70"],
      ["New set hard gel / BIAB, long", "1 hr 45", "$80"],
      ["Fill hard gel / BIAB, short or medium", "1 hr", "$60"],
      ["Fill hard gel / BIAB, long", "1 hr 30", "$70"],
      ["Hard gel / BIAB removal only", "30 min", "$20"],
      ["Hard gel / BIAB removal with another service", "20 min", "$15"]
    ]
  },
  {
    id: "art", title: "Nail art",
    intro: "Add to any service. Prices are for ten nails unless it says per nail.",
    items: [
      ["French tips, natural nails", "20 min", "$10"],
      ["French tips, extensions", "30 min", "$15"],
      ["Double French tips, extensions", "40 min", "$30"],
      ["Gel ombre, natural nails", "30 min", "$20"],
      ["Gel ombre, extensions", "30 min", "$20"],
      ["Fading, natural nails", "10 min", "$10"],
      ["Fading, extensions", "15 min", "$15"],
      ["Chrome powder, natural nails", "10 min", "$10"],
      ["Chrome powder, extensions", "15 min", "$15"],
      ["Cat eye polish, natural nails", "10 min", "$10"],
      ["Cat eye polish, extensions", "15 min", "$15"],
      ["Marble", "30 min", "$20"],
      ["4 to 5 colours", "5 min", "$5"],
      ["3D flower, per nail", "10 min", "$10"],
      ["Charms, per nail", "5 min", "$5"],
      ["Stickers, per nail", "5 min", "$5"]
    ]
  },
  {
    id: "kids", title: "Little ones (under 10)",
    intro: "Shorter, gentler versions for kids.",
    items: [
      ["Little ones manicure", "25 min", "$25"],
      ["Little ones gel manicure", "30 min", "$30"],
      ["Little ones pedicure", "30 min", "$30"],
      ["Little ones gel pedicure", "35 min", "$40"]
    ]
  },
  {
    id: "waxing", title: "Waxing",
    intro: "",
    items: [
      ["Eyebrow", "15 min", "$15"],
      ["Lip", "10 min", "$10"],
      ["Chin", "10 min", "$10"],
      ["Full face", "30 min", "$40"],
      ["Under arm", "20 min", "$20"],
      ["Half arm", "30 min", "$25"],
      ["Full arm", "45 min", "$40"],
      ["Half leg", "30 min", "$35"],
      ["Chest", "1 hr", "$50"],
      ["Back", "1 hr", "$55"]
    ]
  }
];
