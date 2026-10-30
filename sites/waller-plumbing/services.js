/* Waller Plumbing — content data.
   Edit here, then run `python3 build.py` to regenerate the service pages and the
   cards on index.html. Keep the JSON shape: build.py parses each `const X = [...]`.
   Prices are deliberately absent (plumbing in BC is quoted on site). */

const BUSINESS = {
  "name": "Waller Plumbing",
  "legal": "Waller Plumbing Ltd.",
  "owner": "Adam",
  "phone": "778 898 6189",
  "tel": "+17788986189",
  "email": "adam@wallerplumbing.ca",
  "street": "17649 96 Avenue",
  "city": "Surrey",
  "region": "BC",
  "postal": "V4N 4A9",
  "licence": "TSBC LGA0208910",
  "rating": "5.0",
  "reviewCount": 16,
  "mapsUrl": "https://maps.google.com/?cid=12090313008131342369",
  "reviewUrl": "https://maps.google.com/?cid=12090313008131342369"
};

const SERVICES = [
  {
    "slug": "hot-water-tanks",
    "group": "water",
    "name": "Hot water tanks & tankless",
    "short": "Water heaters",
    "eyebrow": "Repair · replace · install",
    "problem": "No hot water, a leaking tank, or a heater past its 10th birthday. Gas and electric tanks, tankless on-demand units.",
    "h1": "Hot water back today",
    "sub": "Repair, replace and install gas and electric hot water tanks and tankless units across Surrey, the Tri-Cities and the Fraser Valley. Same-day in most cases.",
    "photo": "hero-tankless",
    "alt": "Tankless water heater installed by Waller Plumbing with copper lines, a blue expansion tank and yellow gas line",
    "body": [
      "Most hot water tanks last 8 to 12 years. Around then they lose efficiency, run out of hot water faster and start to leak, usually from the bottom seam and usually at night. If your tank is in that window, a leak is a matter of when.",
      "Call or text with the make and model (or a photo of the rating plate) and Adam will tell you straight whether a repair makes sense. Thermocouples, gas valves and regulators, elements and thermostats on electric tanks, and pressure relief valves are all same-visit repairs. If the tank itself is gone, we can usually have a new one in the same day: we carry standard sizes and can source most models.",
      "Thinking about tankless? An on-demand unit frees up floor space and never runs out, but it needs a correctly sized gas line and venting. As a licensed gas contractor we do the whole job: gas, water, venting and the Technical Safety BC permit."
    ],
    "included": [
      "Diagnosis and an upfront price before any work",
      "Gas or electric tank replacement, including haul-away of the old tank",
      "Tankless (on-demand) installation with properly sized gas line and venting",
      "Expansion tanks, pressure relief valves, thermocouples, gas valves, elements",
      "Flush and anode inspection to extend the life of a younger tank",
      "Gas permit through Technical Safety BC where required"
    ],
    "faq": [
      ["How long does a hot water tank replacement take?", "Usually two to three hours once we're on site. If you call in the morning you'll normally have hot water again by the evening."],
      ["Should I repair or replace?", "Under 8 years old with a single failed part: repair. Over 10 years, leaking from the tank body, or rusty water: replace. In between we'll give you both prices and let you decide."],
      ["Do I need a permit for a new gas water heater in BC?", "Yes, gas work in BC needs a licensed gas contractor and a Technical Safety BC permit. Waller Plumbing holds licence LGA0208910 and files the permit for you."],
      ["Are there rebates for a new water heater?", "FortisBC runs rebate programs for qualifying high-efficiency gas water heaters, and the unit must be installed by a licensed gas contractor to qualify. Ask us what's current when you call."]
    ],
    "reviews": ["frank", "mario", "lopez"],
    "related": ["emergency-plumber", "leaks-and-repairs", "furnace-and-gas"]
  },
  {
    "slug": "emergency-plumber",
    "group": "emergency",
    "name": "Emergency plumber, 24/7",
    "short": "Emergency",
    "eyebrow": "Nights · weekends · holidays",
    "problem": "Burst pipe, flooding, sewage backup or no water at all. Call any hour; Adam picks up and talks you through it while on the way.",
    "h1": "Plumbing emergency? Call now.",
    "sub": "24-hour emergency plumber for Surrey, Langley, the Tri-Cities and the Fraser Valley. One number, answered day and night.",
    "photo": "tech-mechanical-room",
    "alt": "Waller Plumbing technician working in a mechanical room",
    "body": [
      "Some plumbing can wait until morning. A burst pipe, a flooding basement, sewage coming up a drain or a house with no water cannot. Call 778 898 6189 at any hour. You'll talk to a plumber, not a call centre, and he'll tell you what to shut off while he drives.",
      "We work evenings, weekends and holidays and try to resolve the problem the same visit. If a part has to wait for a supplier, we'll make the house safe, stop the water and come back first thing.",
      "Homes, strata units, rental properties, storefronts, restaurants and offices. Landlords across the Lower Mainland use us because we answer and we show up."
    ],
    "included": [
      "Burst, frozen or leaking pipes",
      "Overflowing or blocked toilets and drains",
      "Sewage backup and flooded basements",
      "Leaking or failed hot water tanks",
      "No water, low pressure, failed main shut-off valves",
      "Gas smells and gas line problems (leave the building first, then call FortisBC at 1-800-663-9911 and us)"
    ],
    "faq": [
      ["How fast can you get here?", "It depends where you are and the time of day. Recent emergency calls in Surrey and the Tri-Cities were on site within two hours; we'll give you an honest ETA when you call."],
      ["Is there a surcharge at night or on weekends?", "We give you the price before we start, whatever the hour. No fee just to show up and look."],
      ["What should I do while I wait?", "Shut off the water at the main valve (usually where the line enters the house, near the water meter or hot water tank). For a hot water tank leak, also turn its gas valve to Pilot or switch off its breaker. Move anything valuable off the floor."],
      ["Do you handle commercial emergencies?", "Yes. Restaurants, offices, strata buildings and rental properties."]
    ],
    "reviews": ["lindsey", "heidi", "mike"],
    "related": ["hot-water-tanks", "leaks-and-repairs", "water-main-replacement"]
  },
  {
    "slug": "leaks-and-repairs",
    "group": "emergency",
    "name": "Leaks, toilets & everyday repairs",
    "short": "Leaks & repairs",
    "eyebrow": "Repair",
    "problem": "A leak under the kitchen sink, a toilet that runs or won't flush, a dripping faucet, a tub pump that quit. Fixed properly, mess cleaned up.",
    "h1": "Small leaks, fixed right the first time",
    "sub": "Kitchen and bathroom plumbing repairs across Surrey and the Fraser Valley: leaks, toilets, faucets, sinks, tubs and shut-off valves.",
    "photo": "job-shower",
    "alt": "Rain shower and hand shower installed on white tile by Waller Plumbing",
    "body": [
      "Most calls aren't disasters. They're the leak under the kitchen sink you can't trace, the toilet that runs all night, the shower that won't hold temperature. We find the actual cause, fix it with proper parts, and leave the cabinet dry and the floor clean.",
      "We also install: new toilets, faucets, kitchen sinks and disposers, shower valves and rain heads, and shut-off valves that actually shut off.",
      "Upfront pricing before any work begins, and a 12-month guarantee on what we fix."
    ],
    "included": [
      "Leak detection and repair under sinks, behind walls and in ceilings",
      "Toilet repair and replacement, including wax seals and flanges",
      "Faucet, shower valve and cartridge repair or replacement",
      "Kitchen sink, garburator and dishwasher hook-ups",
      "Tub and shower fixture installation",
      "Main and fixture shut-off valve replacement"
    ],
    "faq": [
      ["Can you fix it the same day?", "Usually. Common toilet, faucet and under-sink parts are on the truck."],
      ["Do you charge to come and look?", "No separate trip fee to assess. You get a price for the repair before we start."],
      ["Do you do bathroom renovations?", "We do the plumbing side: moving supply and drain lines, setting fixtures, shower valves and tubs. Bring us in before the tile goes on."]
    ],
    "reviews": ["jasmeen", "kate", "annie"],
    "related": ["emergency-plumber", "hot-water-tanks", "sump-pumps"]
  },
  {
    "slug": "sewer-line-repair",
    "group": "drains",
    "name": "Sewer line repair & camera inspection",
    "short": "Sewer lines",
    "eyebrow": "Repair · replace",
    "problem": "Gurgling toilets, a sewage smell in the basement, slow drains everywhere at once. Camera inspection finds roots, breaks and bellies before you dig.",
    "h1": "Sewer problems, found on camera and fixed",
    "sub": "Sewer line inspection, root clearing, spot repair and full replacement for homes and businesses in Surrey, Langley and the Fraser Valley.",
    "photo": "job-camera-dig",
    "alt": "Waller Plumbing technician running an inspection camera into an excavated sewer line",
    "body": [
      "A sewer line usually warns you first: a rotten-egg smell that wasn't there last week, a toilet that bubbles when the washer drains, water standing in the floor drain. Leave it and the next step is wastewater coming back into the house.",
      "We scope the line with a camera so you can see the problem yourself: tree roots, a cracked clay or Orangeburg pipe, a belly holding water, grease. Then we tell you what it needs. Often that's clearing the roots and cleaning the line. Sometimes it's a spot repair at one joint. Only when the pipe is truly done do we recommend replacing the run.",
      "Older homes in Surrey, Langley, Maple Ridge and Mission still have clay and asbestos-cement sewer laterals that tree roots love. If yours has backed up once, a camera inspection is cheap insurance."
    ],
    "included": [
      "Camera inspection with a recording you can keep",
      "Root cutting and drain cleaning",
      "Spot repair of broken joints and sections",
      "Full sewer lateral replacement, excavation and backfill",
      "Backwater valve installation to protect the basement",
      "Routine maintenance programs for rental and commercial properties"
    ],
    "faq": [
      ["How do I know it's the sewer and not just a clog?", "If more than one fixture is slow or gurgling, or the lowest drain in the house backs up when you run water upstairs, it's the main line."],
      ["Will you have to dig up the yard?", "Not always. Roots and clogs are cleared from inside the pipe. We only excavate when the camera shows a break or collapse, and then only the section that needs it."],
      ["Who owns the sewer lateral?", "In most Lower Mainland municipalities the homeowner is responsible for the line from the house to the property line. We'll show you on the camera where the problem is."]
    ],
    "reviews": ["heidi", "lopez", "tina"],
    "related": ["wet-basement-and-drain-tile", "sump-pumps", "emergency-plumber"]
  },
  {
    "slug": "wet-basement-and-drain-tile",
    "group": "drains",
    "name": "Wet basements & drain tile",
    "short": "Wet basement",
    "eyebrow": "Drainage",
    "problem": "Water in the basement every big rain, damp walls, a musty smell. Usually failed perimeter drain tile. We find where and fix that section.",
    "h1": "Dry the basement for good",
    "sub": "Perimeter drain tile inspection, flushing and repair for Surrey, Langley, the Tri-Cities and the Fraser Valley.",
    "photo": "job-trench",
    "alt": "Excavated trench along a house foundation for perimeter drain tile repair",
    "body": [
      "Water in a Lower Mainland basement is almost always a drainage problem, not a plumbing one. The perimeter drain tile around your footing is supposed to carry rain away from the foundation. After 25 to 40 years it silts up, gets crushed by roots, or simply breaks, and the water finds the path of least resistance: your basement wall.",
      "We start with a camera and a flush of the drain tile from the cleanouts, so you know exactly which section has failed instead of digging up the whole house. Most repairs are one wall or one corner. We excavate, replace the tile with modern perforated pipe and filter cloth, add cleanouts, and backfill with drain rock.",
      "If the lot can't drain by gravity, we'll pair it with a properly sized sump pump and battery backup."
    ],
    "included": [
      "Camera inspection and high-pressure flushing of existing drain tile",
      "Locating the failed section so you only dig what's broken",
      "Excavation and replacement of perimeter drain tile",
      "Cleanouts, drain rock and filter cloth to current standards",
      "Storm line and downspout connections",
      "Sump pit and pump where gravity drainage isn't possible"
    ],
    "faq": [
      ["How do I know it's drain tile and not a leaking pipe?", "If it only happens during or after heavy rain and shows up at the base of an outside wall, it's drainage. A plumbing leak runs whether or not it's raining."],
      ["Do you have to dig up the whole perimeter?", "Rarely. The camera tells us which run has failed. Full replacements are usually only on homes from the 1960s and earlier with clay tile."],
      ["Is drain tile work disruptive?", "A section repair is typically one to three days. We protect plants and hardscape where we can and backfill and grade when done."]
    ],
    "reviews": ["heidi", "mike", "louise"],
    "related": ["sump-pumps", "sewer-line-repair", "water-main-replacement"]
  },
  {
    "slug": "sump-pumps",
    "group": "drains",
    "name": "Sump pump repair & replacement",
    "short": "Sump pumps",
    "eyebrow": "Repair · replace · backup",
    "problem": "A pump that runs constantly, never runs, or quit in the last storm. We replace pumps, floats and check valves and add battery backup.",
    "h1": "A sump pump that works when it rains",
    "sub": "Sump pump diagnosis, replacement and battery backup systems across Surrey and the Fraser Valley.",
    "photo": "stock-sump",
    "alt": "Sump pit with a submersible pump and discharge line",
    "body": [
      "A sump pump only matters on the one night it fails. The common failures are simple: a stuck float, a tired check valve letting water run back, a pump sized for a smaller lot, or a pit that was never designed properly in the first place.",
      "We test the system end to end, from the pit to the discharge outside, and recommend what it actually needs. Often that's a new pump and check valve. Where power outages line up with storms (most of the Fraser Valley), we add a battery backup pump so the basement stays dry when the grid doesn't.",
      "We'll also tell you when the pump is a symptom and the real issue is the drain tile feeding it."
    ],
    "included": [
      "Pump, float switch and check valve replacement",
      "Correctly sized primary pumps for your lot and water table",
      "Battery backup pumps and high-water alarms",
      "Discharge line repair and rerouting",
      "Pit redesign where the original layout keeps clogging",
      "Annual test and clean for rental and strata properties"
    ],
    "faq": [
      ["How long does a sump pump last?", "7 to 10 years for a quality submersible pump. If yours is older and you rely on it, replace it before the rainy season."],
      ["Do I need a battery backup?", "If your basement is finished or your power goes out during storms, yes. A backup pump covers the hours that matter most."],
      ["Why does my pump run all the time?", "Either the check valve is letting water cycle back into the pit, the float is set too low, or the pit genuinely receives that much water. We'll tell you which."]
    ],
    "reviews": ["heidi", "thomas", "tina"],
    "related": ["wet-basement-and-drain-tile", "sewer-line-repair", "emergency-plumber"]
  },
  {
    "slug": "water-main-replacement",
    "group": "water",
    "name": "Water main replacement & leaks",
    "short": "Water mains",
    "eyebrow": "Repair · replace",
    "problem": "A wet patch in the lawn that never dries, a water bill that jumped, low pressure everywhere. The main line from the street is leaking.",
    "h1": "Water main leaks, found and replaced",
    "sub": "Underground water service leak detection and replacement for Surrey, Langley, Maple Ridge, Mission and Abbotsford.",
    "photo": "job-water-main",
    "alt": "New black poly water service line laid in an open trench",
    "body": [
      "The water main is the line from the city shut-off at the property line to your house. When it leaks you usually don't see water: you see a soggy strip of lawn, hear water running when nothing is on, or get a water bill that doubled. Older galvanized and copper services in Surrey and the Fraser Valley fail from the outside in.",
      "We confirm the leak with a meter test and acoustic listening before anyone digs. Then we replace the service with new poly (PE) line, a new main shut-off valve inside, and a proper pressure-reducing valve if your street pressure is high. Most residential mains are done in a day, and we coordinate the city-side shut-off and inspection.",
      "If your main shut-off valve is seized or weeping, replace it before you need it in an emergency."
    ],
    "included": [
      "Leak confirmation with meter and acoustic testing",
      "Full water service replacement from property line to house",
      "New main shut-off and pressure-reducing valve",
      "Trenchless or open-cut depending on the run and landscaping",
      "Coordination with the municipality for shut-off and inspection",
      "Backfill and grading"
    ],
    "faq": [
      ["How do I know if my water main is leaking?", "Turn off everything in the house and watch the water meter. If it still moves, water is going somewhere between the meter and the house."],
      ["How long does a water main replacement take?", "Typically one day for a standard residential service. We shut your water off in the morning and have it back on by evening."],
      ["Will it destroy my yard?", "We dig the narrowest trench we can and use directional boring under driveways and mature landscaping where it makes sense."]
    ],
    "reviews": ["mike", "lindsey", "louise"],
    "related": ["emergency-plumber", "leaks-and-repairs", "wet-basement-and-drain-tile"]
  },
  {
    "slug": "furnace-and-gas",
    "group": "gas",
    "name": "Furnace repair & gas fitting",
    "short": "Furnace & gas",
    "eyebrow": "Licensed gas contractor",
    "problem": "No heat, a furnace that short-cycles, a new gas range or BBQ line. Licensed gas work with a Technical Safety BC permit.",
    "h1": "Heat and gas, done by licence",
    "sub": "Furnace repair and gas line installation across Surrey, the Tri-Cities and the Fraser Valley. Technical Safety BC licensed gas contractor LGA0208910.",
    "photo": "adam-furnace",
    "alt": "Adam of Waller Plumbing standing beside a furnace and hot water tank in a mechanical room",
    "body": [
      "Plumbing and gas go together in a BC home: the hot water tank, the furnace and the range all run off the same gas line, and all of it has to be done by a licensed gas contractor with a Technical Safety BC permit. Waller Plumbing is licensed for both, so one call covers the job.",
      "Furnace calls: no heat, short cycling, a pilot or igniter that won't hold, a blower that's loud, or a thermostat that doesn't match what the furnace is doing. We diagnose and repair residential and light commercial furnaces and tell you honestly when a 20-year-old unit isn't worth another repair.",
      "Gas fitting: new lines for ranges, dryers, BBQs, fire tables and patio heaters, gas line relocation during renovations, and leak testing."
    ],
    "included": [
      "Furnace diagnosis and repair (igniters, thermocouples, gas valves, blower motors, boards)",
      "Annual furnace service and safety check",
      "Gas line installation for ranges, dryers, BBQs, fire tables and heaters",
      "Gas line relocation and sizing for renovations",
      "Gas leak testing and repair",
      "Technical Safety BC permits filed for you"
    ],
    "faq": [
      ["I smell gas. What do I do?", "Leave the building, don't flip switches, and call FortisBC's emergency line at 1-800-663-9911 from outside. Then call us to repair whatever they find."],
      ["Do you install new furnaces?", "We repair furnaces and handle the gas side of replacements. For a full HVAC replacement with ducting we'll refer you honestly rather than overreach."],
      ["Do you pull permits?", "Yes. All gas work gets a Technical Safety BC permit under licence LGA0208910."]
    ],
    "reviews": ["ray", "frank", "louise"],
    "related": ["hot-water-tanks", "emergency-plumber", "leaks-and-repairs"]
  },
  {
    "slug": "septic-tank-service",
    "group": "gas",
    "name": "Septic tank service",
    "short": "Septic",
    "eyebrow": "Inspect · pump · repair",
    "problem": "Slow drains, a smell near the tank, soggy ground over the field. Inspection, pumping coordination and repairs for acreage and rural homes.",
    "h1": "Septic systems, kept out of mind",
    "sub": "Septic tank inspection, maintenance and repair for rural properties in Langley, Maple Ridge, Mission, Abbotsford and east Surrey.",
    "photo": "stock-storm-line",
    "alt": "Drain line repair in a trench beside a foundation",
    "body": [
      "Plenty of homes east of 176 Street, up the Fraser Valley and across the river are on septic. A septic system is low maintenance, not no maintenance: the tank needs pumping every three to five years and the baffles, filter and distribution box need a look at the same time.",
      "Call us when a drain is slow and you're on septic, when there's a smell near the tank or field, when the ground over the field is wet in dry weather, or when you're buying a rural property and want it inspected before you sign.",
      "We inspect, repair tanks, lids, baffles and lines, coordinate pumping, and fix the plumbing on the house side that often causes the problem in the first place."
    ],
    "included": [
      "Septic inspection and condition report",
      "Baffle, effluent filter and lid repair or replacement",
      "Distribution box and line repair",
      "Pumping coordination on a schedule",
      "House-side drain and venting fixes",
      "Pre-purchase inspections for rural homes"
    ],
    "faq": [
      ["How often should a septic tank be pumped?", "Every 3 to 5 years for a typical household, more often with a garburator or a large family."],
      ["What should never go down the drain on septic?", "Grease, wipes (even 'flushable'), harsh drain cleaners and large volumes of bleach. They kill the bacteria the system relies on."],
      ["Can you fix a failed drain field?", "We handle the tank, lines and house side. A full field replacement needs a registered onsite wastewater practitioner; we'll point you to one we trust."]
    ],
    "reviews": ["tina", "louise", "steven"],
    "related": ["sewer-line-repair", "wet-basement-and-drain-tile", "sump-pumps"]
  }
];

const GROUPS = [
  ["water", "Water heaters & water lines", "Hot water tanks, tankless units, water mains"],
  ["emergency", "Emergencies & repairs", "Any hour. Leaks, toilets, burst pipes"],
  ["drains", "Drains, sewers & wet basements", "Camera inspection, drain tile, sump pumps"],
  ["gas", "Gas, heating & septic", "Licensed gas contractor, furnaces, rural properties"]
];

const REVIEWS = {
  "jasmeen": {"name": "Jasmeen T.", "when": "2025", "service": "Washroom leak", "text": "We had a leakage in the washroom and he was able to help immediately. On time, professional, and fixed the problem quickly. Adam managed to squeeze me in his schedule on short notice and explained everything clearly."},
  "louise": {"name": "Louise W.", "when": "2025", "service": "Repeat customer", "text": "We've had Adam come in many times for different jobs and he has always been super friendly and courteous. Very knowledgeable. He does an awesome job every time."},
  "frank": {"name": "Frank G.", "when": "2025", "service": "Hot water tank install", "text": "Adam did an excellent job installing my new hot water tank. He was fast and on time when he said he was going to be here."},
  "lopez": {"name": "The Lopez family", "when": "2022", "service": "Leaking hot water tank", "text": "I had a leaking hot water tank that couldn't wait. Adam showed up right away, diagnosed the problem and provided a solution. Afterwards some debris clogged the kitchen faucet; I called him back and he came the next day to clean the line at no additional charge."},
  "lindsey": {"name": "Lindsey W.", "when": "2021", "service": "Saturday-night kitchen sink", "text": "Waller Plumbing was the only 24/7 company that answered their phone and didn't ask for $400 just to show up before even assessing the job. When he turned the main water off, he double-checked that it was actually off rather than assuming. Affordable rates are a bonus."},
  "heidi": {"name": "Heidi K.", "when": "2023", "service": "Sunday drainage call", "text": "Adam and Brandon came on a Sunday, less than two hours after my call. They fixed the problem easily and made recommendations for a better design in our sewage sump pump so it wouldn't happen again."},
  "mario": {"name": "Mario", "when": "2024", "service": "Tank flooded overnight", "text": "My hot water tank flooded in the middle of the night. Adam came out, shut down the water, and came back first thing in the morning with a brand new tank. Very considerate and knowledgeable. 10/10."},
  "ray": {"name": "Ray D.", "when": "2022", "service": "Water heater gas regulator", "text": "Showed up on time, diagnosed the problem, replaced the hot water gas regulator. One hour in and out, including draining the tank. Super happy with his service and work."},
  "tina": {"name": "Tina U.", "when": "2024", "service": "Tanks, kitchen & bath", "text": "On time, efficient and does a great job for a great price. Waller Plumbing has helped my neighbours and me with everything from hot water tanks to kitchen and bathroom plumbing."},
  "mike": {"name": "Mike B.", "when": "2025", "service": "Burst water main", "text": "My water main burst on a Sunday and they came out to shut off the water. Next day they came back and replaced my water main. Very professional."},
  "annie": {"name": "Annie R.", "when": "2022", "service": "Toilet repair", "text": "Don't hesitate to hire this team. Professionalism at its best. Very knowledgeable, kind and respectful. Who refuses a tip in this day and age!"},
  "kate": {"name": "Kate W.", "when": "2019", "service": "Kitchen sink leak", "text": "There was a leak under my kitchen sink and I couldn't figure out where it was coming from. Very friendly and reassuring on the call, then he worked hard and late to fix the problem. I've already recommended this company to friends."},
  "thomas": {"name": "Thomas K.", "when": "2020", "service": "Tub pump and controller", "text": "Fixed the pump and controller on the tub. Great service. Wish we had found him years ago."},
  "steven": {"name": "Steven R.", "when": "2025", "service": "", "text": "Knowledge and quality work!"},
  "mikek": {"name": "Mike, kitchen contractor", "when": "2023", "service": "Trade referrals", "text": "Adam is the best. He has saved me more times than I can count."}
};

const HOME_REVIEWS = ["lindsey", "mario", "heidi", "lopez", "frank", "mikek"];

const AREAS = [
  ["Surrey & Langley", ["Surrey", "Fraser Heights", "Port Kells", "Cloverdale", "Langley", "Delta"]],
  ["Tri-Cities", ["Coquitlam", "Port Coquitlam", "Port Moody"]],
  ["Fraser Valley", ["Maple Ridge", "Pitt Meadows", "Mission", "Abbotsford"]],
  ["Metro Vancouver", ["Burnaby", "New Westminster", "Richmond", "Vancouver"]]
];

const FAQ = [
  ["Are you really open 24 hours?", "Yes. The same number, 778 898 6189, rings Adam day and night, seven days a week. Nights and weekends are when most hot water tanks and water mains decide to go."],
  ["How does pricing work?", "You get a price before any work starts, and that's the price you pay. No separate charge just to come out and look."],
  ["Are you licensed for gas?", "Yes. Waller Plumbing is a Technical Safety BC licensed gas contractor, licence LGA0208910, so hot water tanks, furnaces and gas lines are done with the proper permit."],
  ["Is your work guaranteed?", "Our plumbing work carries a 12-month workmanship guarantee from the date of the job. Keep your invoice; if the same problem comes back, so do we."],
  ["Which areas do you cover?", "Surrey, Langley and Delta; the Tri-Cities; Maple Ridge, Pitt Meadows, Mission and Abbotsford; and Burnaby, New Westminster, Richmond and Vancouver. If you're nearby and not listed, call anyway."],
  ["How can I pay?", "Interac e-Transfer, Visa, Mastercard and American Express."]
];

if (typeof module !== 'undefined') module.exports = { BUSINESS, SERVICES, GROUPS, REVIEWS, HOME_REVIEWS, AREAS, FAQ };
