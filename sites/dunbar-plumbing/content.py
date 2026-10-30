# Dunbar Plumbing Ltd. — all site content lives here. Edit this file, then run: python3 build.py
# Facts marked CONFIRM should be checked with the owner before launch (see README.md).

BUSINESS = {
    "name": "Dunbar Plumbing Ltd.",
    "short": "Dunbar Plumbing",
    "phone_display": "(604) 312-2686",
    "phone_e164": "+16043122686",
    "email": "Dunbarplumbing1@gmail.com",
    "tagline": "Fast, professional service to Vancouver's West Side",
    "founded": 2002,                      # BBB: business started 1 Dec 2002
    "hours_short": "Mon–Fri 8:30 a.m.–5 p.m.",
    "hours_days": "Monday to Friday",
    "hours_time": "8:30 a.m. to 5 p.m.",
    "base_area": "Dunbar",
    "region": "Vancouver's West Side",
    "google_rating": "5.0",
    "google_count": 32,
    "google_url": "https://maps.google.com/?cid=10252052289307243156",
    "bbb_url": "https://www.bbb.org/ca/bc/vancouver/profile/plumber/dunbar-plumbing-0037-1199598",
    "bbb_since": 2023,
    "yelp_url": "https://www.yelp.ca/biz/dunbar-plumbing-vancouver",
    "yelp_rating": "5.0",
    "yelp_count": 2,
    "formspree": "https://formspree.io/f/FORM_ID",   # replace FORM_ID with the real Formspree form id
    "owner": "Ken MacDonald",             # CONFIRM spelling and preferred name (reviews say Kenny / Ken)
    "second": "Dexter",                   # CONFIRM (reviews: Ken's son)
}

# Published site root (used for canonical, OG and schema URLs). Change when the site moves to dunbarplumbingltd.com.
BASE_URL = "https://web.soichirosaimon.com/dunbar-plumbing"

NAV = [
    ("services.html", "Services"),
    ("service-areas.html", "Areas we serve"),
    ("index.html#reviews", "Reviews"),
    ("index.html#about", "About"),
]

# Symptom chips in the hero: label → page
SYMPTOMS = [
    ("Slow or blocked drain", "services/plugged-drains.html"),
    ("Something is leaking", "services/leaks-and-repairs.html"),
    ("Toilet trouble", "services/toilets.html"),
    ("No hot water", "services/water-heaters.html"),
    ("Dripping tap", "services/faucets-and-fixtures.html"),
    ("Garburator jammed", "services/garburators.html"),
    ("Planning a bathroom reno", "services/bathroom-renovations.html"),
]

# Van-band lettering (the signature strip under the hero). Caps, bullet-separated like the truck side.
VAN_BAND = ["Plumbing", "Drains", "Repairs", "Renovations", "Installations", "Same-day hot water tanks"]

TRUST = [
    ("5.0", "Google rating, 32 reviews"),
    ("A+", "BBB accredited business"),
    ("2002", "Serving the West Side since"),
    ("Licensed", "bonded and insured"),
    ("WorkSafeBC", "approved, certified tradesmen"),
]

GROUPS = [
    ("fix", "Fix it", "Something is dripping, blocked or not working."),
    ("replace", "Replace it", "Worn-out fixtures and pipes, done properly."),
    ("renovate", "Renovate", "The plumbing side of a new bathroom."),
]

SERVICES = [
    {
        "slug": "plugged-drains",
        "group": "fix",
        "title": "Plugged and slow drains",
        "short": "Drains",
        "symptom": "Sink gurgles, tub drains slowly, water backs up.",
        "lead": "Kitchen sinks, tubs, showers, laundry and floor drains cleared, usually the same day you call.",
        "intro": [
            "A slow drain rarely fixes itself. Grease, hair and soap build up until one morning the sink is full. We snake the line, clear the blockage and run water to make sure it is actually gone, not just moved further down.",
            "West Side houses add their own wrinkles: cast-iron stacks from the 1920s, clay drain tile outside, and decades of kitchen renovations that left odd joints behind. We have cleared drains in these houses for over twenty years and carry the right cable and cutters on the truck.",
        ],
        "included": [
            "Kitchen, bathroom and laundry sink drains",
            "Tub, shower and floor drains",
            "Toilet and main line blockages",
            "Garburator and dishwasher drain lines",
            "Clean-up of the work area before we leave",
        ],
        "local": "Many Dunbar, Point Grey and Kitsilano houses still drain through original cast iron and clay tile. If a line keeps blocking, we will tell you honestly whether it needs clearing again or a section replaced.",
        "faq": [
            ("How quickly can you clear a blocked drain?", "Call before noon on a weekday and we can usually be there the same day. Our hours are Monday to Friday, 8:30 a.m. to 5 p.m."),
            ("Do you charge extra for driving out?", "No. We are based on the West Side and there are no travel time charges."),
            ("Should I use a chemical drain cleaner first?", "We would rather you did not. Caustic cleaners can damage old pipes and make the job harder and less safe. Run hot water, and give us a call."),
        ],
        "reviews": ["louise", "chris"],
        "related": ["garburators", "toilets", "pipe-replacement"],
    },
    {
        "slug": "leaks-and-repairs",
        "group": "fix",
        "title": "Leaks and pipe repairs",
        "short": "Leaks",
        "symptom": "A drip under the sink, a damp ceiling, a pinhole in a copper line.",
        "lead": "Find the leak, fix it properly, and leave the house the way we found it.",
        "intro": [
            "Leaks show up as a stain on a ceiling, a cupboard that smells damp, or a water bill that jumped. We trace the source, open only what needs opening and repair the pipe, joint or valve that failed.",
            "Older West Side homes often mix original galvanized steel with later copper and plastic. Those transitions are where leaks like to start. We carry fittings for all three so the repair happens on the first visit.",
        ],
        "included": [
            "Dripping and burst pipe repairs",
            "Leaking shut-off valves and supply lines",
            "Shower, tub and tap leaks behind the wall",
            "Leaking drain and waste connections",
            "Advice on whether a section should be replaced instead",
        ],
        "local": "If water is pouring out right now, close the main shut-off (usually in the basement where the water line enters, or at the front of the house) and then call us.",
        "faq": [
            ("Can you find a leak without tearing out the wall?", "Usually. We start with the fixture and the fittings closest to the damp area and open the wall only when there is no other way."),
            ("Do you repair old galvanized pipe?", "Yes, and we will tell you plainly when a repair is the right call and when the section is too far gone and should be replaced."),
            ("What if it is after hours?", "Shut off the water, then call or text us. We return messages first thing in the morning."),
        ],
        "reviews": ["marilyn", "brian"],
        "related": ["pipe-replacement", "faucets-and-fixtures", "water-heaters"],
    },
    {
        "slug": "toilets",
        "group": "fix",
        "title": "Toilet repairs and replacement",
        "short": "Toilets",
        "symptom": "Running, rocking, slow to flush or leaking at the base.",
        "lead": "Repairs the same day where we can; a new toilet installed when the old one has had its time.",
        "intro": [
            "A toilet that runs between flushes can waste hundreds of litres a day. Most of the time it is a flapper, fill valve or flush valve, and we carry the parts to fix it on the spot.",
            "When a toilet is cracked, leaking at the floor or simply thirty years old, we supply and install a new one, reseal the flange and make sure it sits solid.",
        ],
        "included": [
            "Running, weak-flush and non-flushing toilets",
            "Wax seal and flange repairs",
            "Supply line and shut-off valve replacement",
            "Supply and installation of new toilets",
            "Removal and disposal of the old unit",
        ],
        "local": "Plenty of houses on the West Side still have 1990s toilets. A modern unit uses a fraction of the water and flushes better, and we can install it in a single visit.",
        "faq": [
            ("Can you bring a new toilet with you?", "Yes. Tell us roughly what you have and what you want when you call, and we will arrive with a suitable unit on the truck."),
            ("My toilet is blocked. Is that a toilet job or a drain job?", "Either way we handle it. If the blockage is past the toilet we clear the line."),
        ],
        "reviews": ["debbie", "ross"],
        "related": ["plugged-drains", "faucets-and-fixtures", "bathroom-renovations"],
    },
    {
        "slug": "garburators",
        "group": "fix",
        "title": "Garburators",
        "short": "Garburators",
        "symptom": "Humming, jammed, leaking underneath, or you want it gone.",
        "lead": "Repaired, replaced, or removed and replumbed if you have switched to the green bin.",
        "intro": [
            "Garburators fail in predictable ways: a jam, a seized motor, or a leak from the body. We free jams, replace worn units and make sure the dishwasher drain and trap are connected properly afterwards.",
            "Since the city's green bin program, many homeowners no longer want a garburator at all. We remove it, install a new tailpiece and trap, and tidy the wiring so the cabinet is safe and clean.",
        ],
        "included": [
            "Jam and reset repairs",
            "Replacement units supplied and installed",
            "Removal and re-piping of the sink drain",
            "Dishwasher drain reconnection",
            "Safe capping of the electrical connection",
        ],
        "local": "A twenty-year-old garburator under a Kitsilano kitchen sink is usually not worth repairing. We will say so, and give you the choice.",
        "faq": [
            ("Can you remove a garburator instead of replacing it?", "Yes. It is a common request on the West Side now that food scraps go in the green bin."),
            ("Do you supply the new unit?", "Yes, we can bring a replacement with us. Tell us the brand or horsepower of the old one if you know it."),
        ],
        "reviews": ["shirley", "johnchao"],
        "related": ["plugged-drains", "faucets-and-fixtures", "leaks-and-repairs"],
    },
    {
        "slug": "faucets-and-fixtures",
        "group": "replace",
        "title": "Faucets, taps and fixtures",
        "short": "Faucets",
        "symptom": "Dripping tap, stiff handle, a shower that will not hold its temperature.",
        "lead": "Kitchen and bathroom faucets, laundry taps, shower valves and outdoor hose bibs, repaired or replaced.",
        "intro": [
            "A dripping tap is the most common call we get. Some are a cartridge or washer away from fixed; others are worn through and better replaced. We carry common cartridges and can bring a new faucet to fit your sink.",
            "We also replace the taps people forget about: the laundry taps that have not turned in years, the hose bib that split in a cold snap, and the shower valve that scalds when someone flushes.",
        ],
        "included": [
            "Kitchen and bathroom faucet repair and replacement",
            "Laundry taps and washing machine shut-offs",
            "Shower and tub valves, including pressure-balanced valves",
            "Frost-free outdoor hose bibs",
            "Installation of fixtures you have already bought",
        ],
        "local": "Original 1920s laundry taps are still turning in a lot of Dunbar basements. When they finally give up, we replace them with proper quarter-turn valves so the washer can be shut off easily.",
        "faq": [
            ("Can I buy my own faucet and have you install it?", "Of course. Have it on site and we will fit it. We are happy to recommend brands that hold up."),
            ("Do you fix shower valves inside the wall?", "Yes. Most can be rebuilt or replaced through the existing opening without new tile."),
        ],
        "reviews": ["debbie", "brian"],
        "related": ["leaks-and-repairs", "toilets", "bathroom-renovations"],
    },
    {
        "slug": "water-heaters",
        "group": "replace",
        "title": "Hot water tanks and tankless",
        "short": "Hot water",
        "symptom": "No hot water, lukewarm showers, or a puddle around the tank.",
        "lead": "Same-day hot water tank replacement where we can, and tankless systems for homes that want endless hot water.",
        "intro": [
            "When a tank goes it usually goes all at once. Call us in the morning and in most cases we can have a new tank installed the same day, with the old one hauled away.",
            "If you are renovating or simply tired of running out, a tankless water heater frees up floor space and heats only what you use. We will talk you through whether it makes sense for your house and your gas line.",
        ],
        "included": [
            "Gas and electric hot water tank replacement",
            "Tankless water heater installation",
            "Leaking tank and relief valve repairs",
            "Expansion tanks and shut-off valves",
            "Removal and disposal of the old tank",
        ],
        "local": "Most West Side basements were built around a 40- or 50-gallon tank. Measure the space and the vent before you call and we can confirm the right replacement on the phone.",
        "faq": [
            ("Can you replace a hot water tank the same day?", "In most cases, yes, if you call in the morning on a weekday. We carry standard tanks and can pick up what we need on the way."),
            ("Is tankless worth it in an older house?", "Often, but not always. It depends on your gas supply, venting and how much hot water the household uses. We will give you a straight answer."),
            ("Do you handle the gas connection?", "Yes. Gas work is done by a licensed gas fitter and inspected as required."),
        ],
        "reviews": ["bob", "david"],
        "related": ["leaks-and-repairs", "pipe-replacement", "bathroom-renovations"],
    },
    {
        "slug": "pipe-replacement",
        "group": "replace",
        "title": "Pipe replacement and repiping",
        "short": "Repiping",
        "symptom": "Rusty water, low pressure, repeated leaks, or a collapsed waste line.",
        "lead": "Galvanized supply lines, old waste pipes and failing drains replaced with as little disruption as possible.",
        "intro": [
            "Galvanized steel pipe from the 1920s to 1950s rusts from the inside until pressure drops and water runs brown. Replacing it with copper or PEX fixes both for good. We plan the run to use existing openings wherever we can.",
            "Waste and drain pipes fail differently: a cracked cast-iron stack or a collapsed line under the basement floor. We find the problem and look for the solution that avoids unnecessary demolition, which in one Dunbar house meant rerouting around the slab instead of cutting through it.",
        ],
        "included": [
            "Whole-house and partial repiping in copper or PEX",
            "Replacement of galvanized and polybutylene supply lines",
            "Waste stack and drain line replacement",
            "New shut-off valves at every fixture",
            "Patching coordinated with your drywaller or contractor",
        ],
        "local": "If your house was built before 1960 and still has original supply pipe, a repipe is the single biggest plumbing upgrade you can make. We can look at it during any service call and tell you what you have.",
        "faq": [
            ("How long does a repipe take?", "A typical two-bathroom house takes a few days of plumbing work, and the water is only off for part of each day. We give you a schedule before we start."),
            ("Will you have to open a lot of walls?", "Some, but far fewer than people expect. We use the basement, closets and existing chases wherever possible."),
        ],
        "reviews": ["ray", "bernard"],
        "related": ["leaks-and-repairs", "water-heaters", "plugged-drains"],
    },
    {
        "slug": "bathroom-renovations",
        "group": "renovate",
        "title": "Bathroom renovations",
        "short": "Bathrooms",
        "symptom": "A new layout, a tub-to-shower conversion, or every fixture replaced at once.",
        "lead": "The plumbing side of your bathroom renovation: rough-in, moves, new fixtures and the final connections.",
        "intro": [
            "A bathroom renovation is where plumbing decisions get made for the next thirty years. We rough in the new layout, move drains and supply lines where the plan calls for it, and come back for the finish once the tile is done.",
            "We work alongside your contractor and tile setter, or directly with you on a fixtures-only refresh. Either way you get one plumber who knows the house from the first visit to the last.",
        ],
        "included": [
            "Rough-in plumbing for new layouts and tub-to-shower conversions",
            "Relocating drains, vents and supply lines",
            "Installation of tubs, showers, toilets, vanities and faucets",
            "Pressure-balanced shower valves",
            "Final connections and testing",
        ],
        "local": "Renovating a bathroom in a 1920s house is the right moment to replace the old galvanized and cast iron behind the wall. We will tell you what we find once it is open, with no pressure.",
        "faq": [
            ("Do you do the whole renovation or just the plumbing?", "The plumbing. We are happy to work with the contractor you choose, and we can suggest trades we have worked with on the West Side."),
            ("Do you pull permits?", "Where a permit is required for the plumbing work, yes."),
        ],
        "reviews": ["alex", "bob"],
        "related": ["faucets-and-fixtures", "toilets", "pipe-replacement"],
    },
]

# Real reviews. key → (name, source, when, text, service or page it supports)
REVIEWS = {
    "chris": ("Chris Y.", "Google", "2026", "Called at 9 am and Dexter was here to fix my kitchen sink clog by 10 am. His courtesy, efficiency, professionalism and very reasonable rate only confirmed I'd made the right choice. If you reside on this side of the city you should call Dunbar Plumbing first.", "Kitchen sink clog"),
    "debbie": ("Debbie M.", "Google", "2026", "I've hired Dunbar Plumbing to replace my 1920's laundry faucets and a 1990's toilet, fix a leak and unclog a slow drain. They communicate very well, arrive promptly, do an impeccable job, clean up, and are delightful to deal with. Dependable every time.", "Laundry taps, toilet, leak, drain"),
    "ray": ("Ray C.", "Google", "2020", "Absolutely terrific in replacing the waste water pipe in our 100 year-old house. Having located the collapsed old pipe, they found a creative solution that negated the necessity of digging up the thick concrete slab. They had a clear plan, executed it on time and on budget.", "Waste pipe replacement"),
    "kam": ("Kam K.", "Yelp", "2026", "Kenny and Dexter always arrive right on time, diagnose the issue quickly, and get straight to work without trying to upsell on unnecessary parts. The final price was completely reasonable with no hidden fees or travel surcharges.", "Plumbing and heating"),
    "bob": ("Bob B.", "Yelp", "2026", "We have used Dunbar Plumbing for decades and have always been very pleased with their service, pricing and ability to come when the situation is urgent. Repiping, tankless hot water, clogged drains snaked out, and faucets and toilets installed over the years.", "Repiping, tankless, drains"),
    "bernard": ("Bernard L.", "Google", "2026", "I've used Dunbar Plumbing for a few years now. Timely, fair price and good with problem solving old Vancouver plumbing.", "Old-house plumbing"),
    "louise": ("Louise T.", "Google", "2026", "Dexter cleared my slow emptying drain yesterday. Dunbar Plumbing has been taking care of plumbing problems in my home for many years. They always respond quickly to a request for service.", "Slow drain"),
    "marilyn": ("Marilyn M.", "Google", "2026", "Dexter fixed our leaky pipe. He was extremely courteous, skilled and efficient. He repaired the problem quickly.", "Leaky pipe"),
    "brian": ("Brian W.", "Google", "2026", "I had several issues with a leaky shower and taps for our sink. Dexter was a delight to deal with and handled the work quickly and efficiently.", "Shower leak and taps"),
    "ross": ("Ross G.", "Google", "2026", "Very good service to fix toilet, and Dexter was great.", "Toilet repair"),
    "shirley": ("Shirley K.", "Google", "2026", "Dexter removed the 20-year-old worn-out garburator and replaced it with new piping and secured the wiring in an electric box so that it is safe. Very professional and did an excellent job.", "Garburator removal"),
    "johnchao": ("John C.", "Google", "2022", "Phoned after my garburator seized. Ben showed up the same day, flushed my lines and fixed both issues without need for any parts or replacements. Dunbar Plumbing will be my go-to team from now on.", "Garburator and dishwasher drain"),
    "david": ("David T.", "Google", "2025", "We have used Dunbar Plumbing for several years whenever we have had any issues in our house. They are quick to respond, and come when they say they will. They charge a fair price and do a great job.", "Ongoing service"),
    "alex": ("Alexander K.", "Google", "2024", "Whether your home is 100 years old or brand new, this is your crew. Communication was via text and the response was done in a timely manner. Very knowledgeable on all aspects of plumbing.", "Repeat customer"),
    "jeff": ("Jeff W.", "Google", "2019", "Many times I can't even tell they've been in the house to complete complex jobs. Kenny is a total pro and his son Dexter is just a great addition to the business. Rates are fair and response time is fast.", "Complex jobs"),
    "michelle": ("Michelle L.", "Google", "2019", "I have been using Dunbar Plumbing for at least 15 years for our home as well as our commercial and multi-family buildings in Kitsilano. Their work is excellent and well priced. They are reliable even at some very inconvenient times.", "Home and multi-family buildings"),
}

HOME_REVIEWS = ["chris", "debbie", "ray", "kam", "bob", "bernard"]

AREAS = [
    ("Dunbar–Southlands", "Home base. 1920s to 1950s houses with original cast iron, clay drain tile and galvanized supply lines. We are usually a few blocks away."),
    ("West Point Grey", "Character houses and view homes with long drain runs. Slow drains and hose bibs that split in cold snaps are the common calls."),
    ("Kitsilano", "Converted character houses, suites and small multi-family buildings. We have looked after Kits homes and rental buildings for over twenty years."),
    ("Kerrisdale", "Larger older homes with finished basements, where a small leak can do a lot of damage. Repiping and hot water tanks are frequent jobs here."),
    ("Arbutus Ridge and Shaughnessy", "Big houses, big bathrooms and plenty of renovation work. We handle the plumbing side alongside your contractor."),
    ("UBC and the University Endowment Lands", "A mix of 1950s houses and newer builds. Fixture replacements and water heater swaps make up most of our calls."),
]
NEARBY = "We also take calls from South Cambie, Oakridge, Marpole and Fairview when we can fit them in. If you are not sure, call and ask."

STEPS = [
    ("Call or send a request", "Tell us what is going on. If you can, text a photo of the problem to the same number."),
    ("We give you a time window", "Weekday calls before noon can usually be fitted in the same day. We confirm by phone or text."),
    ("The plumber arrives, stocked", "Ken or Dexter arrives in the window with a fully stocked truck, so most jobs finish on the first visit."),
    ("Fixed, tested and cleaned up", "We test the repair, clean the work area and explain what we did. No travel time charges on the bill."),
]

WHY = [
    ("No travel time charges", "We are based on the West Side and always in the neighbourhood, so you are never billed for the drive."),
    ("The same two plumbers, every time", "Ken started the company in 2002 and his son Dexter works alongside him. You get a name, not a dispatcher."),
    ("Old houses are our specialty", "Twenty-plus years inside Dunbar, Kits and Point Grey homes means we know what is behind the wall before we open it."),
]

FAQ_HOME = [
    ("How fast can you get here?", "Call before noon on a weekday and we can usually be there the same day. Our hours are Monday to Friday, 8:30 a.m. to 5 p.m. Outside those hours, leave a message or text and we call back first thing."),
    ("Do you charge for travel time?", "No. We are based in Dunbar and serve the West Side only, so there are no travel time charges on your bill."),
    ("Are you licensed and insured?", "Yes. Dunbar Plumbing Ltd. is licensed, bonded and insured, our plumbers are certified tradesmen, and we are WorkSafeBC approved. We have been a BBB Accredited Business with an A+ rating since 2023."),
    ("Which neighbourhoods do you serve?", "Dunbar, Southlands, West Point Grey, Kitsilano, Kerrisdale, Arbutus Ridge, Shaughnessy and the UBC area. See the areas page for details."),
    ("How do you charge?", "You will know what the work costs before we start. There are no travel time charges, no hidden fees and no after-hours premiums because we do not work after hours. Payment is settled when the job is done."),
    ("Do you work on older houses?", "That is most of what we do. Many of our customers live in homes built between 1910 and 1960, and we carry the fittings those houses need."),
    ("Do you do commercial or multi-family work?", "Yes, for small commercial spaces and multi-family buildings on the West Side, particularly in Kitsilano."),
]

NEIGHBOURHOOD_OPTIONS = ["Dunbar–Southlands", "West Point Grey", "Kitsilano", "Kerrisdale", "Arbutus Ridge / Shaughnessy", "UBC / UEL", "Somewhere else on the West Side"]
