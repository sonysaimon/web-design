// VSalon service menu. Prices in CAD, exactly as listed on Fresha (Sept 2026).
// To update: edit this file only. Each item: [name, duration, price, note?]
//   "$89"          fixed price
//   "from $1,200"  starting price
//   "consult"      Fresha lists this service at "from CA$1", which is the salon's
//                  placeholder for pricing at consultation. Renders as "Consultation".
//   "free"         renders as "Free"
window.VSALON_SERVICES = [
  {
    id: "cut", title: "Cut & style", zh: "剪发造型",
    intro: "Every haircut is with a Director-level stylist and includes a wash and finish.",
    items: [
      ["Director women's haircut", "1 hr", "$89", "With David, Goldie, Andy or Yi Yang"],
      ["Director men's haircut", "45 min", "$69", "With David, Goldie, Andy or Yi Yang"],
      ["Bang cut", "20 min", "$40"],
      ["Short hair wash + style", "30 min", "$48"],
      ["Long hair wash + style", "40 min", "$60"],
      ["Hair extensions 接发", "6 hr", "from $1,200"]
    ]
  },
  {
    id: "colour", title: "Colour", zh: "染发",
    intro: "Balayage, vivids, toners and root work are quoted at your consultation, because length, history and the colour you want change the work.",
    items: [
      ["Hair colour 染发", "3 hr", "consult"],
      ["Custom bleaching / balayage", "5 hr", "consult"],
      ["Toner 发色填充", "1 hr", "consult"],
      ["Root touch-up 补发根", "2 hr 30", "consult"],
      ["Redo", "1 hr", "free", "If something isn't right, come back"]
    ]
  },
  {
    id: "perm", title: "Perm", zh: "烫发",
    intro: "Korean and Japanese perm techniques: digital, straight, down-perms and textured men's perms that never look permed.",
    items: [
      ["Men's short hair perm + haircut 男士短发烫剪", "3 hr", "consult"],
      ["Straight perm 直烫发 · 热烫", "4 hr", "consult"],
      ["Digital perm 数码烫发", "4 hr", "consult"],
      ["Down-perm with haircut 服帖烫", "1 hr", "$149"],
      ["Keratin sleek hair treatment 角蛋白顺滑护理", "2 hr", "consult"]
    ]
  },
  {
    id: "treatment", title: "Treatment", zh: "护理",
    intro: "Repair after colour or bleach, deep hydration, and scalp care with salon-only product lines.",
    items: [
      ["Scalp treatment spa 头皮护理", "45 min", "consult"],
      ["After perm / colour serum 染烫后修复护理", "1 hr", "$90"],
      ["Bleached hair treatment 漂后修复护理", "1 hr", "$160"],
      ["Caviar treatment 鱼子酱护理", "1 hr", "$160", "One tube"],
      ["Oil treatment 法国精油护理", "2 hr 30", "$160"],
      ["3-step hydration treatment 三步补水护理", "2 hr", "$210"]
    ]
  }
];
