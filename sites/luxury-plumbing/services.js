/* Luxury Plumbing — offer data. Edit text here; the home page cards and the
   service pages (regenerate with `python3 build.py`) both read from it.
   Keep the array valid JSON (double quotes, no trailing commas). */
const SERVICES = [
  {
    "slug": "drain-cleaning",
    "ticket": "Kitchen drain, cleared and re-trapped",
    "group": "repair",
    "name": "Drain cleaning",
    "short": "Drain cleaning",
    "problem": "Slow sink, backed-up tub, gurgling floor drain or a main line that keeps clogging.",
    "photo": "under-sink-ptrap",
    "alt": "New white P-trap and drain assembly installed under a kitchen sink",
    "lead": "We clear kitchen, bathroom and main drains with the right tool for the clog, test the flow, and leave the cabinet cleaner than we found it.",
    "includes": [
      "Kitchen, bathroom and laundry drains",
      "Main sewer line augering and camera inspection",
      "Floor drains and basement backups",
      "Replacing corroded traps and tailpieces while we are there"
    ],
    "faqs": [
      ["How fast can you come for a clogged drain?", "We run 24 hours. Call and we will give you a real arrival window, usually the same day."],
      ["Will you snake it or replace it?", "We clear it first. If the pipe itself is the problem, you get a flat quote for the fix before any extra work."]
    ],
    "reviews": ["sira", "podcast"]
  },
  {
    "slug": "toilet-repair",
    "ticket": "Toilet reset on a new flange",
    "group": "repair",
    "name": "Toilet repair & replacement",
    "short": "Toilet repair",
    "problem": "Running all night, rocking on the floor, leaking at the base or refusing to flush.",
    "photo": "tub-brass-fixtures",
    "alt": "Renovated bathroom with a new toilet, bathtub and brass fixtures",
    "lead": "Most toilet problems are a fill valve, flapper, wax seal or supply line. We carry the parts, fix it in one visit, and tell you honestly when a replacement makes more sense.",
    "includes": [
      "Running, weak-flush and phantom-flush fixes",
      "Wax ring and flange repair for leaks at the base",
      "Supply line and shut-off valve replacement",
      "New toilet supply and install, old one hauled away"
    ],
    "faqs": [
      ["My toilet is leaking at the base. Is that an emergency?", "Stop using it and call. A base leak soaks the subfloor fast, so we treat it as same-day work."],
      ["Do I need to buy the toilet myself?", "Either way. We can supply one or install the model you chose."]
    ],
    "reviews": ["daniel", "jafar"]
  },
  {
    "slug": "shower-bath-installation",
    "ticket": "Walk-in shower, full plumbing",
    "group": "install",
    "name": "Shower & bath installation",
    "short": "Shower & bath install",
    "problem": "A walk-in shower, a new tub, a valve that only does scalding or cold.",
    "photo": "walk-in-shower",
    "alt": "Finished walk-in shower with large-format grey tile, glass panel and a lit niche",
    "lead": "Rough-in, valves, drains and finish fixtures for showers and tubs. We work with your tiler and contractor, or handle the plumbing side of a full bathroom on our own.",
    "includes": [
      "Shower valve and trim replacement, including pressure-balance and thermostatic",
      "Walk-in shower and tub rough-in and drains",
      "Tub, faucet and hand-shower installation",
      "Brass, black and chrome fixture packages installed and sealed"
    ],
    "faqs": [
      ["Can you replace just the shower valve without opening the wall?", "Often yes, from the front using the existing opening and a remodel plate. We will tell you on site."],
      ["Do you do the tiling too?", "No. We do the plumbing and coordinate with your tiler so nothing waits on us."]
    ],
    "reviews": ["afyona", "samuel"]
  },
  {
    "slug": "water-heaters",
    "ticket": "Two tankless heaters, one basement",
    "group": "install",
    "name": "Water heater installation",
    "short": "Water heaters",
    "problem": "No hot water, a tank past its years, or a switch to tankless.",
    "photo": "tech-tankless-heaters",
    "alt": "Plumber standing beside two newly installed wall-mounted tankless water heaters in a basement",
    "lead": "Tank and tankless replacements, done to code with proper venting and gas connections, so the first hot shower is the same evening.",
    "includes": [
      "Tank water heater replacement, same day when stocked",
      "Tankless (on-demand) installation and conversions",
      "Relief valves, expansion tanks and shut-offs",
      "Old unit disconnected and removed"
    ],
    "faqs": [
      ["Tank or tankless?", "Tankless saves space and runs endless hot water; a tank costs less up front. We will price both for your house."],
      ["Do you handle the gas line?", "Yes, our licensed technicians handle the gas connection as part of the install."]
    ],
    "reviews": ["lina"]
  },
  {
    "slug": "garbage-disposals",
    "ticket": "Disposal in, drain re-plumbed",
    "group": "install",
    "name": "Garbage disposal install & repair",
    "short": "Garbage disposals",
    "problem": "Humming but not turning, leaking underneath, or a first-time install.",
    "photo": "under-sink-supply",
    "alt": "Under-sink drain and supply lines after a clean installation",
    "lead": "We install and repair garbage disposals, re-plumb the drain so it does not back up into the dishwasher, and reset or replace units that have seized.",
    "includes": [
      "New disposal installation with dishwasher connection",
      "Jammed, humming and leaking unit repair",
      "Drain re-plumb to stop backups",
      "Switch and cord check on the plumbing side"
    ],
    "faqs": [
      ["It hums but will not spin. Is it dead?", "Usually not. It is often a jam or a tripped reset. If the motor is gone, we quote a replacement on the spot."]
    ],
    "reviews": ["nathan", "king"]
  },
  {
    "slug": "commercial-plumbing",
    "ticket": "Commercial hand sink, wall mount",
    "group": "commercial",
    "name": "Commercial plumbing",
    "short": "Commercial",
    "problem": "Restaurants, shops, offices and small buildings that cannot afford a closed washroom.",
    "photo": "commercial-sink",
    "alt": "Stainless steel commercial hand sink with wall-mounted faucet on a white tiled wall",
    "lead": "Repairs, fixture installs and maintenance for businesses across Toronto, scheduled around your hours so you stay open.",
    "includes": [
      "Hand sinks, mop sinks and washroom fixtures",
      "Drain and grease-related backups",
      "Water heater and shut-off replacements",
      "After-hours and 24/7 emergency response"
    ],
    "faqs": [
      ["Can you come outside business hours?", "Yes. We schedule commercial work early, late or overnight when that keeps your doors open."]
    ],
    "reviews": ["davidlg"]
  }
];

const REVIEWS = {
  "sira":    { "name": "Sira", "text": "John did such a good job on my drain cleaning, I will never go to any other plumber.", "service": "Drain cleaning", "source": "Google" },
  "afyona":  { "name": "Afyona", "text": "These plumbers are the GOATs. Loved the shower installation done for me.", "service": "Shower installation", "source": "Google" },
  "daniel":  { "name": "Daniel", "text": "Best toilet repair, quick and easy work.", "service": "Toilet repair", "source": "Google" },
  "nathan":  { "name": "Nathan", "text": "Garbage disposal installation was great. Thank you Jimmy from Luxury Plumbing, you guys are very professional at what you do.", "service": "Garbage disposal install", "source": "Google" },
  "jafar":   { "name": "Jafar", "text": "Worth it to go to Luxury Plumbing. Best toilet repair prices in the Toronto area.", "service": "Toilet repair", "source": "Google" },
  "lina":    { "name": "Lina", "text": "Saved my plumbing and my money. Thank you Luxury!", "service": "Water heater & shower install", "source": "Google" },
  "podcast": { "name": "The Business Game Podcast", "text": "Drain cleaning was great, thank you so much. A five-star review is for sure deserved.", "service": "Drain cleaning", "source": "Google" },
  "samuel":  { "name": "Samuel", "text": "Great work on the shower install.", "service": "Shower installation", "source": "Google" },
  "king":    { "name": "King", "text": "Garbage disposal install was fire.", "service": "Garbage disposal install", "source": "Google" },
  "brooklyn":{ "name": "Brooklyn", "text": "Amazing and professional business. 100% recommend!", "service": "", "source": "Google" },
  "davidlg": { "name": "David", "text": "Professional from start to finish: clear pricing, excellent workmanship, and dependable service for our business.", "service": "Commercial", "source": "luxuryplumbing.shop" },
  "joey":    { "name": "Joey", "text": "Arrived promptly, worked cleanly, and fixed everything perfectly. Highly recommended.", "service": "Repair", "source": "luxuryplumbing.shop" }
};

const HOME_REVIEWS = ["sira", "afyona", "nathan", "jafar", "lina", "davidlg"];

if (typeof window !== "undefined") { window.SERVICES = SERVICES; window.REVIEWS = REVIEWS; window.HOME_REVIEWS = HOME_REVIEWS; }
