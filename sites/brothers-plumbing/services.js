/* Brothers Plumbing — service data.
   Edit this file to change what appears on the hubs, the symptom picker, and every service page.
   build.py reads it, so run `python3 build.py` after editing. Keep it valid JSON after the "=".
   Groups: "plumbing" | "drains" | "heating". "photo" is a file in photos/ or null. */
const SERVICES = {
  "groups": {
    "plumbing": { "name": "Plumbing", "page": "plumbing.html", "tag": "Repair & install",
      "lead": "Taps, toilets, water lines, water heaters, sump pumps and the valves that protect your basement. Priced before we start, fixed on the first visit whenever the truck carries the part." },
    "drains":   { "name": "Drains & sewer", "page": "drains-sewer.html", "tag": "Clogs, backups, repairs",
      "lead": "From a slow kitchen sink to a main drain backing up into the basement. Snaking, hydro-jetting, camera inspection, and repair or replacement when the pipe itself has failed." },
    "heating":  { "name": "Heating repair", "page": "services/heating-repair.html", "tag": "Boilers & radiators",
      "lead": "Hot-water boilers and radiators in older Toronto homes. Leaks, cold rads, pressure problems and noisy systems." }
  },
  "services": [
    {
      "slug": "plumbing-repair", "group": "plumbing", "name": "Plumbing repair", "eyebrow": "Repair",
      "short": "Leaks, drips, low pressure, noisy pipes. Diagnosed and fixed in one visit.",
      "photo": "job-under-sink.jpg", "photoAlt": "New supply lines and shut-off valves under a kitchen sink",
      "symptoms": ["Leaking pipe", "Low water pressure"],
      "intro": "Most calls we get are not dramatic: a drip under the sink, a shut-off valve that will not shut off, a pipe that bangs when the washer stops. Small, but they do not fix themselves, and the water bill and the cabinet floor keep score.",
      "how": "A technician looks at the whole run, not just the wet spot, tells you what caused it and gives you a price before touching anything. Our trucks carry valves, supply lines, fittings and the common parts for Toronto houses, so the repair usually happens on the same visit.",
      "expect": "Shoes off or covered, drop sheet down, a clear explanation, and a walkthrough of the work before we leave.",
      "included": ["Diagnosis of the cause, not just the symptom", "Written price before work starts", "Shut-off valves, supply lines and fittings on the truck", "Pressure and leak check after the repair", "Clean-up of the work area"],
      "faqs": [
        ["Do you charge to come out and look?", "We will tell you the trip fee when you book, and it is credited toward the repair if you go ahead with it."],
        ["Can you fix it today?", "Usually. We run 7 days a week and most repairs are completed on the first visit."],
        ["Is the repair guaranteed?", "Yes. Every repair is backed by our workmanship guarantee. Ask the technician for the terms on your invoice."]
      ],
      "related": ["faucet-repair", "toilet-repair", "water-services"]
    },
    {
      "slug": "faucet-repair", "group": "plumbing", "name": "Faucet repair & replacement", "eyebrow": "Repair",
      "short": "Dripping, stiff or leaking taps repaired, or a new faucet installed the same visit.",
      "photo": null, "symptoms": ["Dripping tap"],
      "intro": "A dripping faucet sounds minor until you count it: a steady drip is thousands of litres a year, and a leak at the base rots the cabinet underneath. Cartridges, seats and o-rings wear out on every brand.",
      "how": "We repair what is worth repairing and tell you honestly when a replacement makes more sense. Bring your own faucet or pick from the ones we stock. Either way the price is set before we start.",
      "expect": "Old faucet out, new one in, supply lines and shut-offs checked, and no drips when we leave.",
      "included": ["Cartridge, seat and o-ring replacement", "Kitchen, bathroom, laundry and outdoor taps", "Supply-line and shut-off valve check", "Installation of customer-supplied faucets", "Removal of the old fixture"],
      "faqs": [
        ["Can I supply my own faucet?", "Yes. We install faucets you have bought, and we will tell you if the one you picked will not fit before we start."],
        ["Why does my new faucet have low pressure?", "Usually debris in the aerator or supply lines after other work. We clear it as part of the install."]
      ],
      "related": ["plumbing-repair", "toilet-repair", "renovation-plumbing"]
    },
    {
      "slug": "toilet-repair", "group": "plumbing", "name": "Toilet repair & installation", "eyebrow": "Repair & install",
      "short": "Running, rocking, clogged or cracked. Repaired or replaced, often within hours.",
      "photo": "job-bathroom-reno.jpg", "photoAlt": "Brothers Plumbing technician finishing a bathroom with a new toilet and glass shower",
      "symptoms": ["Toilet running or clogged"],
      "intro": "Toilet work is the thing our customers mention most in their Google reviews: cracked tanks, fill valves that never stop, wax rings that let go, and old 13-litre units that cost a fortune to flush.",
      "how": "Flappers, fill valves and seals are on the truck. If the bowl or tank is cracked we can usually install a new toilet the same day, including the efficient models the City of Toronto encourages.",
      "expect": "The technician will show you what failed and give you a repair price and a replacement price so you can choose.",
      "included": ["Fill valve, flapper and flush valve repair", "Wax ring and flange repair", "New toilet supply and install", "Removal and disposal of the old toilet", "Shut-off valve replacement while we are there"],
      "faqs": [
        ["My toilet keeps running. Is that urgent?", "Not an emergency, but it wastes a lot of water. Book a regular visit and we will have it stopped in one trip."],
        ["Do you install toilets I bought myself?", "Yes, and we will check the rough-in measurement with you before you buy if you call first."]
      ],
      "related": ["drain-snaking", "plumbing-repair", "renovation-plumbing"]
    },
    {
      "slug": "frozen-pipes", "group": "plumbing", "name": "Frozen & burst pipes", "eyebrow": "Emergency",
      "short": "No water in January, or water where it should not be. Thawed, repaired and insulated.",
      "photo": "job-copper-run.jpg", "photoAlt": "New copper water line run along a basement wall",
      "symptoms": ["Frozen pipe / no water"],
      "intro": "Toronto's freeze-thaw winters find every uninsulated pipe in an exterior wall, crawl space or garage. Frozen water expands; copper and old galvanized steel split. The burst usually shows up when it thaws.",
      "how": "If you have no water in one fixture, shut off the main and call. We thaw the line safely, repair any split section, and tell you where the pipe is exposed so it does not happen again.",
      "expect": "Fast response in a cold snap. We prioritize no-water and active-leak calls.",
      "included": ["Safe thawing of frozen lines", "Repair or replacement of split pipe", "Insulation of exposed runs", "Advice on heat tracing where needed", "Water shut-off and restart check"],
      "faqs": [
        ["What should I do first?", "Turn off the main water shut-off, open the affected tap, and call us. Do not use a torch."],
        ["Does insurance cover a burst pipe?", "Often, for the water damage. Keep the split section and our invoice for your claim."]
      ],
      "related": ["plumbing-repair", "water-services", "emergency"]
    },
    {
      "slug": "sump-pumps", "group": "plumbing", "name": "Sump pump installation & repair", "eyebrow": "Install",
      "short": "Pumps, pits, check valves and battery backups for basements that take on water.",
      "photo": "job-basement-dig.jpg", "photoAlt": "Basement floor opened up for new drainage work",
      "symptoms": ["Water in the basement"],
      "intro": "A sump pump is cheap insurance for a west-end basement. When it fails it fails in a storm, which is why we size the pump to the pit, install a proper check valve, and recommend a battery backup for finished basements.",
      "how": "We assess the pit, discharge line and float, replace what is worn, and test the system under load before we leave. New pits and discharge lines are installed where the house never had one.",
      "expect": "A pump that runs when it should, a discharge that drains away from the foundation, and a quiet check valve.",
      "included": ["Pump replacement and sizing", "New pit and discharge installation", "Check valve and float repair", "Battery backup systems", "Annual test and clean-out"],
      "faqs": [
        ["How long does a sump pump last?", "Seven to ten years for a good pump. If yours is older, replace it before the spring rain, not after."],
        ["Is there a City rebate?", "The City of Toronto Basement Flooding Protection Subsidy covers part of the cost of a sump pump and a backwater valve. Ask us and we will walk you through the paperwork."]
      ],
      "related": ["backwater-valves", "waterproofing", "main-drain-backup"]
    },
    {
      "slug": "water-heaters", "group": "plumbing", "name": "Water heaters", "eyebrow": "Repair & install",
      "short": "No hot water, not enough, or a tank that is leaking. Tank and tankless, repaired or replaced.",
      "photo": null, "symptoms": ["No hot water"],
      "intro": "Water heaters give warning before they quit: rusty hot water, rumbling, a damp ring on the floor. A leaking tank cannot be repaired and the next step is a flood, so we treat these calls as urgent.",
      "how": "We repair elements, thermostats and valves where it makes sense, and replace tanks and tankless units when it does not. Gas and electric, owned or rental conversions.",
      "expect": "Hot water back the same day in most cases. We haul away the old tank.",
      "included": ["Diagnosis of no-hot-water and low-volume problems", "Element, thermostat and valve repair", "Tank and tankless replacement", "Expansion tank and pressure checks", "Old tank removal"],
      "faqs": [
        ["Tank or tankless?", "Tankless saves space and energy but costs more up front and needs the right gas and venting. We will tell you what your house can take."],
        ["How old is too old?", "Most tanks last 10 to 12 years. Past that, plan the replacement rather than waiting for the leak."]
      ],
      "related": ["plumbing-repair", "heating-repair", "water-services"]
    },
    {
      "slug": "backwater-valves", "group": "plumbing", "name": "Mainline backwater valves", "eyebrow": "Install",
      "short": "Stops city sewage from backing up into your basement in a storm. City subsidy available.",
      "photo": "job-basement-dig.jpg", "photoAlt": "Concrete basement floor opened for a mainline backwater valve",
      "symptoms": ["Sewer backup"],
      "intro": "In a heavy rain the city sewer can push back up your drain. A mainline backwater valve is a one-way flap in the main drain that closes against the surge. Toronto wants one in older homes badly enough to subsidize it.",
      "how": "We open the floor at the main drain, install the valve in an accessible box, pull the permit and arrange the inspection, then help you apply for the City of Toronto subsidy.",
      "expect": "One to two days of work, a clean patch in the floor, and paperwork done for you.",
      "included": ["Camera inspection to locate the main drain", "Permit and City inspection", "Valve installation with access cover", "Concrete patching", "Subsidy application support"],
      "faqs": [
        ["How much is the City subsidy?", "The Basement Flooding Protection Subsidy Program covers a portion of the installed cost. The amounts change, so ask us for the current figure when you book."],
        ["Does it need maintenance?", "A quick annual check of the flap. We do it as part of a CVPP visit."]
      ],
      "related": ["sump-pumps", "main-drain-backup", "waterproofing"]
    },
    {
      "slug": "lead-pipe-replacement", "group": "plumbing", "name": "Lead pipe replacement", "eyebrow": "Install",
      "short": "Pre-1950s houses still have lead water services. We replace the private side to the main.",
      "photo": null, "symptoms": [],
      "intro": "Many houses in the Junction, Davenport, Parkdale and the Annex were built before 1950 and still have a lead service line bringing water in from the street. The City replaces its side; the private side from the property line to the house is the owner's job.",
      "how": "We locate the service, trench or pull a new copper line to the City connection, and coordinate with Toronto Water for the public side so the whole run is done at once.",
      "expect": "Usually a one-day job. Water is off for a few hours. We restore the lawn or walkway opening.",
      "included": ["Service locate and inspection", "New copper service to the property line", "Coordination with Toronto Water", "Interior main shut-off and meter reconnection", "Site restoration"],
      "faqs": [
        ["How do I know if my service is lead?", "A dull grey pipe coming through the basement wall that scratches to shiny silver is lead. We can confirm in minutes."],
        ["Is there a City program?", "Toronto Water replaces the public side on request and offers a priority program. We will tell you how to register."]
      ],
      "related": ["water-services", "plumbing-repair", "renovation-plumbing"]
    },
    {
      "slug": "water-services", "group": "plumbing", "name": "Water service & line replacement", "eyebrow": "Install",
      "short": "Low pressure, discoloured water, or a leak between the street and the house.",
      "photo": "job-copper-run.jpg", "photoAlt": "New copper main water line in a basement",
      "symptoms": ["Low water pressure"],
      "intro": "Old half-inch galvanized or lead services choke flow and leak underground. If the pressure drops when two taps run, or the lawn is wet in August, the water service is the usual cause.",
      "how": "We upgrade to a three-quarter or one-inch copper service, trench or trenchless depending on the yard, and reconnect at the meter.",
      "expect": "One day of work, a noticeable jump in pressure, and no more mystery wet patches.",
      "included": ["Pressure and flow test", "Trench or trenchless replacement", "City connection coordination", "New main shut-off valve", "Restoration of the opening"],
      "faqs": [
        ["Will my pressure really improve?", "If the service is the bottleneck, yes, dramatically. We test first so you know before you spend."]
      ],
      "related": ["lead-pipe-replacement", "frozen-pipes", "plumbing-repair"]
    },
    {
      "slug": "waterproofing", "group": "plumbing", "name": "Basement waterproofing", "eyebrow": "Install",
      "short": "Interior and exterior waterproofing for foundations that leak, with the drainage to match.",
      "photo": "job-basement-dig.jpg", "photoAlt": "Basement floor dug out for interior drainage and waterproofing",
      "symptoms": ["Water in the basement"],
      "intro": "Water in the basement is a drainage problem first. We fix the plumbing side, weeping tiles, sump, backwater valve, and then the membrane, so the fix lasts.",
      "how": "Interior systems for finished basements where exterior digging is not practical; exterior membranes and new weeping tile where the yard allows. We tell you which one your house actually needs.",
      "expect": "A dry basement and a written plan of what was done, which matters when you sell.",
      "included": ["Source assessment", "Interior drainage and membrane systems", "Exterior excavation and membrane", "Weeping tile replacement", "Sump and backwater valve integration"],
      "faqs": [
        ["Interior or exterior?", "Exterior stops water before the wall; interior manages it after. Exterior is better when you can dig. We quote both where both are possible."]
      ],
      "related": ["sump-pumps", "backwater-valves", "french-drains"]
    },
    {
      "slug": "renovation-plumbing", "group": "plumbing", "name": "Renovation plumbing", "eyebrow": "Install",
      "short": "Bathrooms, kitchens and basement suites roughed in and finished by licensed plumbers.",
      "photo": "job-bathroom-reno.jpg", "photoAlt": "Finished basement bathroom with glass shower and new toilet",
      "symptoms": [],
      "intro": "A renovation is the one time the walls are open. We rough in new bathrooms and kitchens, move stacks, add basement bathrooms and laundry, and finish the fixtures when the tile is done.",
      "how": "We work with your contractor or directly with you, pull the plumbing permit, and schedule rough-in and finish visits around the trades.",
      "expect": "Drawings reviewed up front, inspections passed, and fixtures that work the day you move back in.",
      "included": ["Rough-in for bathrooms, kitchens and laundry", "Stack and drain relocation", "Basement bathroom and ejector installs", "Fixture finishing", "Permits and inspections"],
      "faqs": [
        ["Can you add a bathroom in the basement?", "Yes. If the drain is below the main line we install an ejector pump; the technician will tell you which case you have."]
      ],
      "related": ["toilet-repair", "faucet-repair", "water-heaters"]
    },
    {
      "slug": "commercial-plumbing", "group": "plumbing", "name": "Commercial plumbing", "eyebrow": "Commercial",
      "short": "Restaurants, offices, dental and medical, retail and small industrial. Service accounts welcome.",
      "photo": null, "symptoms": [],
      "intro": "A plumbing problem in a business costs more than the repair. We keep restaurants, clinics, offices and shops across the west end running with fast service calls and scheduled maintenance.",
      "how": "Grease traps, floor drains, washroom fixtures, water heaters, backflow devices and mechanical rooms. Set up a service account and your calls go to the front of the line.",
      "expect": "After-hours scheduling to avoid your open hours, and one invoice per visit.",
      "included": ["Grease trap installation and service", "Washroom and kitchen fixtures", "Drain and sewer maintenance programs", "Water heater and boiler service", "Service accounts with priority response"],
      "faqs": [
        ["Do you work outside business hours?", "Yes. We schedule around your opening hours, 7 days a week."]
      ],
      "related": ["drain-cleaning", "hydro-jetting", "water-heaters"]
    },
    {
      "slug": "drain-cleaning", "group": "drains", "name": "Drain cleaning", "eyebrow": "Drains",
      "short": "Kitchen, bathroom, laundry and floor drains cleared and flowing, same day.",
      "photo": "job-under-sink.jpg", "photoAlt": "Kitchen sink drain and supply lines after service",
      "symptoms": ["Clogged or slow drain", "Sewer smell"],
      "intro": "Kitchen sink repair is the single most common thing our Google reviewers mention. Grease, food, hair and soap build up in old cast-iron and galvanized drains until the sink stops draining or the toilet gurgles.",
      "how": "We clear the drain with the right tool for the pipe, a hand auger, a machine snake or a hydro-jetter, and run water to confirm full flow. If the pipe itself is the problem, a camera shows you why.",
      "expect": "A drain that drains, no mess left behind, and straight advice on whether it will come back.",
      "included": ["Kitchen, bathroom, laundry and floor drains", "Hand and machine augering", "Flow test after clearing", "Camera inspection when a clog repeats", "Advice on what caused it"],
      "faqs": [
        ["Should I use a chemical drain opener first?", "Please do not. It damages old pipes and makes the job unsafe for the technician. Call us instead."],
        ["Why does it keep clogging?", "A repeat clog in the same drain usually means a belly, a root or a broken section. A camera inspection settles it."]
      ],
      "related": ["drain-snaking", "hydro-jetting", "drain-repair"]
    },
    {
      "slug": "drain-snaking", "group": "drains", "name": "Drain snaking", "eyebrow": "Drains",
      "short": "Machine augering for stubborn clogs in sinks, tubs, toilets and main lines.",
      "photo": null, "symptoms": ["Clogged or slow drain"],
      "intro": "Snaking is the workhorse of drain work. A rotating cable with the right head cuts through hair, grease, roots and the things toddlers flush.",
      "how": "We pick the cable and head for the pipe size, run it from the right access point, and test the flow. Toilets are pulled when the clog is past the trap.",
      "expect": "Most residential snaking is done in under an hour.",
      "included": ["Sink, tub, shower and toilet lines", "Main drain from the clean-out", "Root cutting heads for mainlines", "Flow test", "Clean-up"],
      "faqs": [
        ["Can snaking damage my pipes?", "Not when it is done with the right cable and an experienced hand. Very old, brittle pipe is the exception, and we will tell you if that is what you have."]
      ],
      "related": ["drain-cleaning", "hydro-jetting", "main-drain-backup"]
    },
    {
      "slug": "hydro-jetting", "group": "drains", "name": "Hydro-jetting & power flushing", "eyebrow": "Drains",
      "short": "High-pressure water scours grease, scale and roots off the inside of the pipe.",
      "photo": null, "symptoms": ["Sewer smell"],
      "intro": "Snaking punches a hole through a clog; jetting cleans the pipe wall back to full diameter. For restaurant drains, greasy kitchen lines and root-prone sewers it is the difference between a fix and a repeat call.",
      "how": "A jetter nozzle is fed through the clean-out and pulled back under pressure, flushing debris to the sewer. We camera the line afterward to show you the result.",
      "expect": "A pipe that flows like new and a video you can keep.",
      "included": ["Kitchen and grease lines", "Main sewer lines", "Root and scale removal", "Before-and-after camera inspection", "Maintenance schedules for commercial kitchens"],
      "faqs": [
        ["Is jetting safe for old clay pipe?", "At the right pressure, yes. We inspect first and will not jet a pipe that is already collapsing."]
      ],
      "related": ["drain-cleaning", "drain-repair", "commercial-plumbing"]
    },
    {
      "slug": "drain-repair", "group": "drains", "name": "Drain & sewer repair", "eyebrow": "Repair",
      "short": "Cracked, bellied or root-filled drains repaired or replaced, inside or outside the house.",
      "photo": "job-basement-dig.jpg", "photoAlt": "Basement floor excavated to replace a broken drain line",
      "symptoms": ["Sewer backup"],
      "intro": "When a camera shows a broken clay tile, an offset joint or a belly holding water, no amount of snaking will keep it clear. We replace the bad section, under the basement floor or out to the property line.",
      "how": "We locate the break precisely, open only what we need, replace with PVC, and restore the floor or yard. Trenchless lining is an option for some runs.",
      "expect": "A written scope and price before the saw comes out, and a camera check when it is done.",
      "included": ["Camera and locate", "Under-slab drain replacement", "Exterior sewer lateral replacement", "Clean-out installation", "Floor and yard restoration"],
      "faqs": [
        ["Will you have to dig up my whole basement?", "Almost never. We locate the break and open a section. Most repairs are a strip of floor, not the room."],
        ["Is there a discount?", "Ask about our $100 off sewage drain replacement. One per service visit."]
      ],
      "related": ["main-drain-backup", "backwater-valves", "hydro-jetting"]
    },
    {
      "slug": "main-drain-backup", "group": "drains", "name": "Main drain & sewer backups", "eyebrow": "Emergency",
      "short": "Sewage coming up the floor drain. Call now; we prioritize backups.",
      "photo": null, "symptoms": ["Sewer backup", "Water in the basement"],
      "intro": "A main drain backup puts wastewater on your basement floor and is a health hazard the moment it happens. Stop using water in the house and call. These calls go to the front of the line.",
      "how": "We clear the main from the clean-out, camera the line to find the cause, and give you a plan: a one-time clearing, a repair, or a backwater valve so it cannot happen again.",
      "expect": "Fast response, containment advice over the phone, and honest options once the line is open.",
      "included": ["Priority dispatch", "Mainline clearing", "Camera inspection", "Repair and backwater valve options", "Guidance on clean-up and insurance"],
      "faqs": [
        ["What do I do while I wait?", "Stop running water, keep people and pets out of the area, and open a window. We will talk you through it on the phone."]
      ],
      "related": ["backwater-valves", "drain-repair", "emergency"]
    },
    {
      "slug": "french-drains", "group": "drains", "name": "French drains", "eyebrow": "Install",
      "short": "Perforated drains that move groundwater away from the foundation before it gets in.",
      "photo": null, "symptoms": ["Water in the basement"],
      "intro": "Known as a weeping tile, land drain or French drain, it is the same idea: a perforated pipe in gravel that collects water and carries it to a sump or storm connection.",
      "how": "We grade and install exterior French drains along problem walls and interior systems under the slab, tied to a sump pump sized for the flow.",
      "expect": "Soil and grading advice included; the drain is only half the fix.",
      "included": ["Site assessment and grading advice", "Exterior perimeter drains", "Interior under-slab systems", "Sump connection", "Backfill and restoration"],
      "faqs": [
        ["Exterior or interior?", "Exterior if we can dig along the wall; interior when a deck, neighbour or finished space is in the way."]
      ],
      "related": ["waterproofing", "sump-pumps", "drain-repair"]
    },
    {
      "slug": "heating-repair", "group": "heating", "name": "Heating repair", "eyebrow": "Heating",
      "short": "Hot-water boilers and radiators: leaks, cold rads, pressure and noise.",
      "photo": null, "symptoms": ["Cold radiator"],
      "intro": "A lot of west-end houses still heat with a boiler and cast-iron radiators, and they are worth keeping. The usual complaints are one cold rad, a leaking valve, low pressure, or a boiler that bangs.",
      "how": "We bleed and balance, replace radiator valves and pipe sections, fix pressure problems and leaks at the boiler, and tell you plainly when a boiler is at the end of its life.",
      "expect": "Same-day visits in winter for no-heat calls.",
      "included": ["Radiator valve and vent replacement", "Bleeding and balancing", "Boiler leak and pressure repair", "Pipe and fitting replacement", "Radiator removal and reinstallation for renovations"],
      "faqs": [
        ["Do you install new boilers?", "Call us with the model and the house and we will tell you what we can do and what we would refer out."]
      ],
      "related": ["plumbing-repair", "water-heaters", "renovation-plumbing"]
    }
  ],
  "symptoms": [
    { "label": "Clogged or slow drain", "to": "services/drain-cleaning.html" },
    { "label": "Toilet running or clogged", "to": "services/toilet-repair.html" },
    { "label": "Leaking pipe", "to": "services/plumbing-repair.html" },
    { "label": "No hot water", "to": "services/water-heaters.html" },
    { "label": "Water in the basement", "to": "services/sump-pumps.html" },
    { "label": "Sewer backup", "to": "services/main-drain-backup.html" },
    { "label": "Dripping tap", "to": "services/faucet-repair.html" },
    { "label": "Low water pressure", "to": "services/water-services.html" },
    { "label": "Frozen pipe / no water", "to": "services/frozen-pipes.html" },
    { "label": "Sewer smell", "to": "services/hydro-jetting.html" },
    { "label": "Cold radiator", "to": "services/heating-repair.html" },
    { "label": "Something else", "to": "book.html" }
  ],
  "reviews": [
    { "name": "Emilie K.", "when": "Google", "stars": 5, "tech": "Tony", "job": "Emergency call", "text": "Tony arrived at our place within 4 hours of our having called Brothers Plumbing for help. He explained really clearly what gave rise to the issue and gave us some good advice." },
    { "name": "Susan G.", "when": "Google", "stars": 5, "tech": "Jacob & Tony", "job": "Shut-off valves, new toilets", "text": "Thanks to Brothers Plumbing, Jacob and Tony in particular, for their work replacing shut-off valves in the bathrooms and installing new toilets. Professional, informative, and helpful." },
    { "name": "Elle L.", "when": "Google", "stars": 5, "tech": "", "job": "Kitchen sink, Saturday call", "text": "I contacted Brothers on Saturday for an issue with my kitchen sink. A technician called me within a few minutes. I was given an estimate before the visit and had no surprises after." },
    { "name": "Erica H.", "when": "Google", "stars": 5, "tech": "Aman & Johnathan", "job": "Kitchen sink and faucet", "text": "We have used Brothers Plumbing for 23 years and have always had beautiful work from them. Aman and Johnathan came to repair my sink and explained that my kitchen faucet was rusted." },
    { "name": "V. DS", "when": "Google", "stars": 5, "tech": "Jimmy & Aman", "job": "Same-day repair", "text": "They were able to complete the work we needed on the same day as the consultation. They explained pricing, all the work they were going to do, then did a thorough walkthrough with us at the end." },
    { "name": "Mercy J.", "when": "Google", "stars": 5, "tech": "", "job": "Tough drain clog", "text": "They came quickly, on the same morning I called, and cleared a tough drain clog. Super friendly, fast, and professional." },
    { "name": "Onil B.", "when": "Google", "stars": 5, "tech": "Jimmy", "job": "Leak on moving day", "text": "We had a leak in our home the day we took possession. The dispatcher was very kind, and I got a call from Jimmy within 15 minutes asking the relevant details before arriving." },
    { "name": "Erick O.", "when": "Google", "stars": 5, "tech": "", "job": "Kitchen sink backing up", "text": "My kitchen sink was backing up significantly and I was concerned about the complexity of the fix. The technician knew exactly what to do and handled it with ease." }
  ],
  "areas": {
    "West end (home turf)": ["The Junction", "High Park", "Bloor West Village", "Roncesvalles", "Parkdale", "Liberty Village", "Mimico", "Etobicoke"],
    "Central": ["The Annex", "Trinity Bellwoods", "Little Italy", "Kensington Market", "Chinatown", "CityPlace", "Harbourfront", "Yorkville", "Forest Hill", "Midtown", "Rosedale", "Cabbagetown"],
    "East": ["Leaside", "Greektown", "Leslieville", "Distillery District", "Portlands", "The Beaches", "Scarborough"],
    "Beyond the city": ["North York", "Mississauga", "Vaughan & Concord", "Richmond Hill", "Markham", "Toronto Islands"]
  }
};
