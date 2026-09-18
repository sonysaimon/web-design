// HER Nails Lounge service menu. Prices in CAD, as listed on Fresha (Sept 2026).
// To update: edit this file only. Each item: [name, duration, price, description?]
// A price starting with "from" renders as a starting price.
window.HER_SERVICES = [
  {
    id: "manicure", title: "Manicure",
    items: [
      ["Signature Manicure", "50 min – 1 hr", "from $40", "Nail cleaning, cuticle care, shaping, base coat, gel polish, top coat, hand massage and hot towel."],
      ["Russian / E‑file Manicure", "1 hr 10 – 2 hr", "from $55", "A meticulous dry manicure technique focused on detailed cuticle work for an ultra‑clean finish and longer‑lasting gel."],
      ["Builder Gel / BIAB Manicure", "1 hr 10 – 1 hr 30", "$68", "Soft builder gel overlay to strengthen natural nails. Includes cuticle cleaning, cutting and shaping, overlay and gel polish. Best for short, natural nails; not for extensions or refills on extensions."],
      ["Hard Gel Overlay", "1 hr 10 – 1 hr 40", "from $69", "Hard gel overlay on natural nails for extra strength and durability. No extensions. Hard gel cannot be soaked off."],
      ["Spa Manicure", "1 hr 20", "from $75", "Epsom salt soak, cuticle care, shaping, scrub, collagen mask, nourishing massage, hot towel and polish, with dual‑light hand therapy."]
    ]
  },
  {
    id: "pedicure", title: "Pedicure",
    items: [
      ["Express Pedicure", "30 – 45 min", "from $40", "Soak, basic nail care, trim and shape, cuticle work, foot scrub and polish. A fast refresh."],
      ["Signature Pedicure", "45 min – 1 hr 15", "from $50", "Soak, nail care, foot scrub, optional callus removal, moisturizing massage, hot‑rock massage, gel polish and hot towel."],
      ["Deluxe Pedicure · regular polish or no polish", "1 hr 5 – 1 hr 15", "from $65", "Your choice of scented foot bath, scrub, callus removal, a longer moisturizing massage, hot‑rock massage, hot towel and regular polish."],
      ["Deluxe Pedicure · gel polish", "1 hr 5 – 1 hr 15", "from $75", "The Deluxe with gel polish. Removal of your previous gel is included."]
    ]
  },
  {
    id: "gel-x", title: "Gel‑X extension",
    items: [
      ["Gel‑X Extension", "1 hr 15 – 1 hr 45", "from $79", "Cuticle trim, Gel‑X application and gel polish."]
    ]
  },
  {
    id: "gel-extension", title: "Gel extension",
    items: [
      ["Dual Form Gel Extension", "1 hr 35 – 1 hr 50", "from $85", "Extensions built with pre‑shaped moulds and hard gel. Smooth, natural, strong and even."],
      ["Dual Form Gel · Fill", "1 hr 35 – 1 hr 50", "from $75", "Refill for an existing dual‑form set."],
      ["Hard Gel Extension · Full Set", "1 hr 30 – 1 hr 45", "from $80", "Hand‑sculpted hard gel shaped directly on the nail and cured under LED. Strong, long‑lasting, fully customizable."],
      ["Hard Gel Fill", "1 hr 10 – 1 hr 50", "from $69", "Refill for an existing hard gel set."]
    ]
  },
  {
    id: "add-on", title: "Add‑ons",
    items: [
      ["Nail Art / Designs", "20 min – 2 hr", "from $20", "Priced by design. Message us inspo photos on Instagram before you come in so we can reserve the time."],
      ["French", "20 – 30 min", "from $15"],
      ["Cat Eyes", "15 min", "from $15"],
      ["Chrome", "10 min", "from $15"],
      ["Ombre", "25 min – 1 hr", "from $15"],
      ["Multiple colours", "30 min", "from $5"],
      ["Gel Builder / BIAB add‑on", "30 min", "$20", "Soft builder gel on natural nails, paired with a manicure or pedicure. Does not include cuticle cleaning or colour."],
      ["Colour change on extensions", "35 min", "$40"],
      ["Removal", "10 – 30 min", "from $5"],
      ["Nail Fix", "10 – 15 min", "from $5"],
      ["Nail Hardener", "5 min", "$5"],
      ["Paraffin Wax", "15 min", "$16"]
    ]
  },
  {
    id: "kids", title: "For little cuties (under 10)",
    items: [
      ["Manicure with regular polish", "30 min", "$26"],
      ["Manicure with gel polish", "45 min", "$36"],
      ["Pedicure with regular polish", "35 min", "$36"],
      ["Pedicure with gel polish", "45 min", "$46"]
    ]
  },
  {
    id: "lashes", title: "Eyelash extensions",
    items: [
      ["Classic Full Set", "1 hr 30", "$115"],
      ["Classic Fill", "1 hr 30", "$80"],
      ["YY / W Lash Full Set", "1 hr 15", "$120"],
      ["YY / W Full Fill", "1 hr 15", "$85"],
      ["YY / W Lash Half Set", "1 hr 30", "$100"],
      ["YY / W Half Fill", "1 hr", "$70"],
      ["Anime Lash Lift + Tint", "1 hr 10", "$85"],
      ["Anime Fill", "1 hr 30", "$95"],
      ["Korean Lash Lift", "1 hr", "$75"],
      ["Korean Lash Lift + Tint", "1 hr", "$85"],
      ["Design Lash Style", "2 hr", "from $130"],
      ["Quick Lash Fill", "40 min", "from $45"]
    ]
  },
  {
    id: "brows", title: "Brows, waxing & tinting",
    items: [
      ["Brow Lamination", "1 hr", "$85"],
      ["Eyebrow Waxing + Tinting Combo", "30 min", "$45"],
      ["Eyebrow Tinting", "20 min", "$25"],
      ["Eyebrows Waxing", "20 min", "$20"],
      ["Lip Wax", "20 min", "$18"],
      ["Chin Waxing", "15 min", "$18"]
    ]
  }
];
