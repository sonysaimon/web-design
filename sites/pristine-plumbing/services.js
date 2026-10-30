/* Pristine Plumbing & Drainage Ltd. — single data source.
   Edited here → run `python3 build.py` to regenerate the service pages and service-areas page.
   The same data drives the "What's going on?" picker on the home page.
   Keep this file as `window.PP = {JSON}` — build.py strips the prefix and parses the JSON. */
window.PP = {
  "business": {
    "name": "Pristine Plumbing & Drainage Ltd.",
    "short": "Pristine Plumbing",
    "phone": "778-980-1883",
    "phoneE164": "+17789801883",
    "address": "9133 Capella Dr, Burnaby, BC V3J 7K4",
    "street": "9133 Capella Dr",
    "city": "Burnaby",
    "postal": "V3J 7K4",
    "founded": 2015,
    "hours": "Open 24 hours, 7 days",
    "google": { "rating": "5.0", "count": 260, "url": "https://maps.google.com/?cid=11749574300528626761" },
    "homestars": { "rating": "10", "count": 348, "url": "https://homestars.com/companies/2874255-pristine-plumbing-drainage" },
    "bbb": { "grade": "A+", "url": "https://www.bbb.org/ca/bc/burnaby/profile/plumber/pristine-plumbing-drainage-ltd-0037-1284277" },
    "instagram": "https://www.instagram.com/pristineplumbinganddrainage/",
    "facebook": "https://www.facebook.com/pristineplumbinganddrainage",
    "formspree": "https://formspree.io/f/REPLACE_ME"
  },

  "groups": [
    { "id": "drainage", "label": "Drains & drainage", "blurb": "Blocked lines, roots, sumps and the perimeter system that keeps your basement dry." },
    { "id": "plumbing", "label": "Plumbing", "blurb": "The repairs, fixtures and hot water work we do every day, for homes and whole buildings." },
    { "id": "specialty", "label": "Specialty", "blurb": "Pipe replacement, camera inspections and leak protection." }
  ],

  "services": [
    {
      "slug": "drain-cleaning",
      "group": "drainage",
      "eyebrow": "Drains & sewers",
      "name": "Drain cleaning & sewer lines",
      "card": "Clogged sinks, tubs and toilets, slow lines, and the sewer main out to the street. Snaked, jetted or replaced.",
      "h1": "Blocked drain cleared today, not next week",
      "sub": "Kitchen sinks, tubs, toilets, laundry lines and sanitary sewer mains across Burnaby and the Lower Mainland.",
      "photo": "photos/roots-in-pipe.jpg",
      "photoAlt": "Tree roots pulled from a blocked sewer line",
      "gallery": [
        ["photos/ig-sewer-replaced.jpg", "Root-infested sanitary sewer line, replaced"],
        ["photos/clay-pipe-roots.jpg", "Clay tile sewer pipe cracked open by roots"],
        ["photos/before-after-drain.jpg", "A sump before and after a hydro flush"]
      ],
      "body": [
        "Grease and soap build up on kitchen lines. Hair and soap stop showers and tubs. Toilets take things they were never meant to take. Whatever the cause, we clear it with the right tool for the job: a snake first, pressure-assisted jetting when the line needs a proper clean, and a camera to confirm it's actually clear.",
        "Older homes in Burnaby, New Westminster and East Vancouver often still have clay tile sewer lines. Roots find the joints, tiles crack and the line develops dips that hold waste. We snake and inspect those lines, and when a section has failed we map its exact location and depth with the camera so the repair or replacement is as small and as quick as it can be.",
        "You get a price before we start, a technician who explains what the camera is showing, and a clean work area when we leave."
      ],
      "included": ["Snaking of sinks, tubs, toilets, floor and laundry drains", "Pressure-assisted hydro jetting for grease and scale", "Camera inspection to confirm the line is clear", "Sanitary sewer main snaking and root removal", "Sewer line repair or replacement, mapped by camera first", "City permits and inspections handled for excavation work"],
      "faq": [
        ["Will you just upsell me to hydro jetting?", "No. If a snake clears it, that's what we do. One customer's review puts it well: Jeremy kept snaking until it resolved instead of jumping to a pricier flush."],
        ["How do I know the line is actually clear?", "We run the camera after clearing and show you the picture. You'll see the pipe wall, any roots or cracks, and where the line runs."],
        ["My sewer backs up every spring. Why?", "Usually roots in a clay tile line. Roots grow back, so the fix is either a regular snaking schedule or replacing the failed section. We'll show you both options with prices."],
        ["Do you handle the city side?", "We obtain City permits for any sewer excavation and pass the inspections. A New Westminster job last year included the plumbing permit, tree protection permit and excavation."]
      ],
      "reviews": ["danya", "linda"],
      "related": ["perimeter-drainage", "camera-inspections", "emergency-plumbing"]
    },
    {
      "slug": "perimeter-drainage",
      "group": "drainage",
      "eyebrow": "Perimeter drainage & sumps",
      "name": "Perimeter drainage & sump systems",
      "card": "The drain tile around your foundation and the sump it feeds. Camera inspection, flushing, repair and full two-pipe replacements.",
      "h1": "Keep the rain out of your basement",
      "sub": "Camera inspections, hydro flushing, sump clean-outs and full perimeter drainage replacements, with City permits, in Burnaby, Coquitlam, New Westminster and Vancouver.",
      "photo": "photos/ig-perimeter-pvc.jpg",
      "photoAlt": "New 4-inch perforated PVC perimeter drain beside a foundation",
      "gallery": [
        ["photos/ig-sump-roots.jpg", "Andrew with the roots pulled from one storm sump"],
        ["photos/perimeter-drain-install.jpg", "New two-pipe perimeter system tied into a sump"],
        ["photos/ig-vacuum-truck.jpg", "Vacuum-truck excavation to reach a tight section"]
      ],
      "body": [
        "Every house with a basement or crawlspace has a perimeter drainage system: the pipe that runs around the footing, catches the roof water from the rain leaders and the ground water around the foundation, and carries it to the City storm connection. When it plugs with sediment, pine needles or roots, the water finds its way inside. That's the flooded basement, the efflorescence on the wall, the musty smell.",
        "Systems that have never been cleaned are the ones that fail. We camera the whole run, show you what's in it, and clean it out with hydro flushing and snaking. For most homes that's every two to three years. If a section has collapsed or the original clay tile is past saving, we repair it or replace the system with a proper two-pipe design: one line for roof water, one for ground water, both tied to a new sump and out to the City storm main.",
        "We use a vacuum truck when a dig is next to a tree or a driveway you'd rather keep, obtain the City permits, pass the inspections and backfill with a stone slinger so your yard goes back together."
      ],
      "included": ["Full camera inspection of the perimeter system with a report", "Hydro flushing and snaking of drain tile and outlet lines", "Sump chamber clean-out, risers and new lids", "Repair of broken or collapsed sections", "Two-pipe perimeter drainage replacement with new sump", "New-construction perimeter drainage installation", "Vacuum-truck excavation and slinger backfill", "City permits and inspections"],
      "faq": [
        ["How often should perimeter drains be cleaned?", "Every two to three years depending on the age and material of the system and how many trees are nearby. If it has never been done, book an inspection before the fall rains."],
        ["Can you tell if my system is failing before it floods?", "Yes. A camera inspection shows sediment levels, root intrusion, cracks and dips. You'll get the footage and a plain-language recommendation."],
        ["Do I need a permit for perimeter drain replacement?", "Yes, and we take care of it. Every system we install is permitted and inspected by the City."],
        ["Will you wreck my garden?", "We plan the dig around what you care about. For tight spots and tree roots we bring in a vacuum truck, which digs with suction instead of a bucket."]
      ],
      "reviews": ["jay", "boundless"],
      "related": ["drain-cleaning", "camera-inspections", "water-service-and-repipes"]
    },
    {
      "slug": "emergency-plumbing",
      "group": "drainage",
      "eyebrow": "Emergency · 24/7",
      "name": "Emergency plumbing, 24/7",
      "card": "Burst pipes, floods, sewer backups and no hot water. We answer around the clock and aim for same-day on every emergency.",
      "h1": "Water where it shouldn't be? We're on our way",
      "sub": "Around-the-clock emergency plumbers for homes, businesses and strata across Burnaby and the Lower Mainland.",
      "photo": "photos/parkade-after-flush.jpg",
      "photoAlt": "Water running from a parkade drain line after an emergency flush",
      "gallery": [
        ["photos/ig-garage-flood.jpg", "Working in the rain to stop a garage from flooding"],
        ["photos/sink-leak.jpg", "Leaking kitchen drain traced and repaired"],
        ["photos/ig-sun-rain-snow.jpg", "Sun, rain or snow, the vans roll"]
      ],
      "body": [
        "A pipe lets go at 2 a.m., the basement is filling on a long weekend, the toilet in a daycare won't flush before the kids arrive. Our phone is answered day and night, and we aim to attend every emergency call the same day.",
        "While a van is on its way we'll talk you through what to do right now: where your main shut-off is, how to kill power to a flooded area, what to move. That ten minutes on the phone often saves the most damage.",
        "We pledge not to overcharge when you're in a jam. Emergency work is priced upfront like everything else we do, and we keep those rates reasonable because that's how you end up with 260 five-star reviews."
      ],
      "included": ["24/7 phone answered by the team, not a call centre", "Same-day target on every emergency call", "Phone guidance to limit damage before we arrive", "Burst and frozen pipe repair", "Basement, parkade and sewer backup clearing", "Hot water tank failures and leaks", "Priority 24-hour service for strata and corporate accounts"],
      "faq": [
        ["Do you charge extra at night or on weekends?", "We pledge not to overcharge for emergency work. You get the price before we start, whatever the hour."],
        ["How fast can you get here?", "We aim for same-day on every emergency call and often faster; one Burnaby customer had a technician at the door within the hour for a failed hot water tank."],
        ["What should I do before you arrive?", "Shut the main water valve (usually where the water line enters the house, near the meter or hot water tank), turn off power to any flooded area, and move what you can. Call us and we'll walk you through it."],
        ["Do you take strata emergencies?", "Yes. Strata and property management accounts get 24-hour priority service, including flooded parkades, gardens and in-suite emergencies."]
      ],
      "reviews": ["susan", "warrior"],
      "related": ["drain-cleaning", "hot-water-tanks", "strata"]
    },
    {
      "slug": "plumbing-repairs",
      "group": "plumbing",
      "eyebrow": "Repairs & fixtures",
      "name": "Plumbing repairs & fixtures",
      "card": "Leaks, faucets, toilets, garburators, hose bibs, shut-off valves and pressure-reducing valves. Fixed properly, left tidy.",
      "h1": "Small jobs done right, the first time",
      "sub": "Everyday plumbing repairs and fixture replacements in Burnaby, New Westminster, Coquitlam and Vancouver homes.",
      "photo": "photos/kitchen-sink-faucet.jpg",
      "photoAlt": "New kitchen faucet and sink installed",
      "gallery": [
        ["photos/garburator-under-sink.jpg", "Garburator replacement under a kitchen sink"],
        ["photos/ig-hose-bib.jpg", "New exterior hose bib, no more drip"],
        ["photos/vanity-sink.jpg", "Vanity and sink installation"]
      ],
      "body": [
        "Most of our days are the jobs that keep a house working: a faucet that won't stop dripping, a toilet that runs, a garburator that hums and quits, a hose bib that leaks every spring, a shut-off valve that doesn't shut off anymore. We carry the common parts on the van so most repairs are finished in one visit.",
        "We'll tell you honestly when a repair is the right call and when a replacement will save you money. If something's an easy fix you can do yourself, we'll say so. Reviews mention that honesty more than anything else.",
        "Every service call includes a free home plumbing inspection. While we're there we look over your shut-offs, supply lines, water heater and visible pipework and tell you what's fine and what to keep an eye on."
      ],
      "included": ["Leaky pipework and supply line repair", "Faucet repair and replacement", "Toilet repair and replacement", "Kitchen and bathroom sink installations", "Garburator repair and replacement", "Exterior hose bib repair and replacement", "Shut-off valve replacement", "Pressure-reducing valve testing and replacement", "Bathroom renovation plumbing"],
      "faq": [
        ["Do you give a price before you start?", "Always. The technician diagnoses the problem, gives you the price, and only starts when you say go."],
        ["Can you fix it in one visit?", "Usually. Our vans carry the common faucets, valves, supply lines and toilet parts. Special-order fixtures take a second visit."],
        ["What's the free home plumbing inspection?", "On every service call we look over your visible plumbing, shut-offs and water heater and tell you about anything that could become a problem. No charge, no pressure."],
        ["Do you install fixtures I bought myself?", "Yes. Bring the faucet, toilet or sink you've chosen and we'll install it properly."]
      ],
      "reviews": ["judy", "frederick"],
      "related": ["hot-water-tanks", "emergency-plumbing", "moen-flo"]
    },
    {
      "slug": "hot-water-tanks",
      "group": "plumbing",
      "eyebrow": "Hot water",
      "name": "Hot water tank repair & replacement",
      "card": "Repairs when they make sense, replacements installed to code with drip pan, expansion tank and seismic strapping.",
      "h1": "Hot water back, installed to code",
      "sub": "Hot water tank repairs, replacements and upgrades across Burnaby, the Tri-Cities, Vancouver and Bowen Island.",
      "photo": "photos/ig-bowen-tank.jpg",
      "photoAlt": "Old and new hot water tanks side by side on a Bowen Island job",
      "gallery": [
        ["photos/ig-daniel-andrew-tank.jpg", "Daniel and Andrew updating a tank during a basement renovation"],
        ["photos/ig-hot-water-tank.jpg", "On the ferry to a Bowen Island tank replacement"],
        ["photos/tech-under-sink.jpg", "Finishing touches under a sink"]
      ],
      "body": [
        "A tank that leaks, rumbles or runs cold is costing you money before it fails for good. We troubleshoot first: burners, elements, thermostats, drain valves and relief valves can all be repaired, and we'll tell you when a repair is worth it and when the tank is at the end of its life.",
        "When it's time to replace, we install to current code: drip pan, thermal expansion tank, seismic strapping and correct piping for the temperature and pressure relief valve. If space allows we can step you up to a larger tank. The old tank goes with us.",
        "Burnaby, the Tri-Cities and Vancouver are our daily routes, and yes, we take the ferry to Bowen Island."
      ],
      "included": ["Diagnosis and repair of gas and electric tanks", "Tank replacement with removal of the old unit", "Drip pan, expansion tank and seismic strapping", "Relief valve piping brought to code", "Upsizing where space permits", "Shut-off and supply line replacement"],
      "faq": [
        ["Repair or replace?", "If the tank itself is leaking, replace. If it's a valve, element, thermostat or burner, repair is usually worthwhile. We'll quote both when both are options."],
        ["How long does a replacement take?", "Most straight swaps are done the same day, often in a few hours."],
        ["Do you install tankless?", "Ask us about your home. Our everyday work is tank repair and replacement; we'll tell you honestly whether tankless makes sense for your layout."],
        ["Will the install pass inspection?", "Yes. Pan, expansion tank, strapping and relief piping are all done to code on every install."]
      ],
      "reviews": ["warrior", "dylan"],
      "related": ["plumbing-repairs", "emergency-plumbing", "moen-flo"]
    },
    {
      "slug": "water-service-and-repipes",
      "group": "specialty",
      "eyebrow": "Water lines & repipes",
      "name": "Water service lines & Poly-B repipes",
      "card": "Trenchless water service replacement and whole-house repipes of grey Poly-B pipe, with asbestos testing and dust control.",
      "h1": "New water lines without tearing up your home",
      "sub": "Trenchless water service replacement and Poly-B repipes for 1970s to 1990s homes across the Lower Mainland.",
      "photo": "photos/ig-polyb-pex.jpg",
      "photoAlt": "Trench for a new 1-inch PEX water service replacing Poly-B",
      "gallery": [
        ["photos/trenchless-waterline.jpg", "Trenchless water service replacement: two small holes, no torn-up lawn"],
        ["photos/ig-water-service-roots.jpg", "Precision repair around tree roots that broke the service line"],
        ["photos/ig-newwest-water-service.jpg", "New Westminster water service, permits to backfill"]
      ],
      "body": [
        "The water service is the underground pipe that brings drinking water from the City main to your house. When it breaks you see a soggy patch in the lawn, water in the yard or a water bill that suddenly doubled. We can usually replace it without digging up the lawn or driveway: two small holes, one at each end, and a new line pulled through.",
        "Inside the house, grey Poly-B pipe was installed in thousands of Lower Mainland homes from the late 1970s to the 1990s. It fails from the inside, usually 10 to 15 years after installation, and many insurers now surcharge or refuse homes that still have it. Check under your sinks, above the hot water tank or in the utility room: grey plastic pipe is Poly-B.",
        "A repipe starts with a walkthrough and an upfront quote with costs and timeline. Where we need to open walls or ceilings, materials are tested for asbestos first and remediated if needed to keep your family and our crew safe. We cut drywall with vacuum-attached cutters to keep dust off your belongings, remove the old pipe and install new."
      ],
      "included": ["Trenchless water service replacement", "Water service repair around roots and obstructions", "Upsizing undersized services (for example 1/2\" Poly-B to 1\" PEX)", "Whole-house Poly-B repipes", "Asbestos testing before any wall opening", "Dust-controlled drywall cutting", "Pressure testing and pressure-reducing valves", "City permits and inspections"],
      "faq": [
        ["How do I know if I have Poly-B?", "Look under sinks, above the hot water tank and in the utility room for grey plastic pipe, often with copper or plastic crimp fittings. We'll confirm on a visit."],
        ["Will my insurance care?", "Many insurers charge higher premiums or decline coverage for homes with Poly-B. A repipe quote is worth having before your renewal."],
        ["How much of my home gets opened up?", "As little as possible. We plan access points before starting, test for asbestos, and use vacuum-attached cutters so the dust stays out of your furniture."],
        ["Is trenchless always possible?", "Most of the time. Where it isn't, we excavate as little as possible, sometimes with a vacuum truck to protect trees and concrete, and tell you before we start."]
      ],
      "reviews": ["dylan", "boundless"],
      "related": ["perimeter-drainage", "plumbing-repairs", "camera-inspections"]
    },
    {
      "slug": "camera-inspections",
      "group": "specialty",
      "eyebrow": "Camera inspections",
      "name": "Video camera inspections",
      "card": "See inside your drains and perimeter system before you buy a house or spend on a repair. Footage and a plain-language report.",
      "h1": "See what's going on underground",
      "sub": "Video inspections of sewer lines, perimeter drains and sumps for homeowners, buyers and strata councils across the Lower Mainland.",
      "photo": "photos/camera-inspection-manhole.jpg",
      "photoAlt": "Technician feeding an inspection camera into a sump",
      "gallery": [
        ["photos/ig-daniel-camera.jpg", "Daniel running a camera inspection in a summer shower"],
        ["photos/ig-grounding-rod.jpg", "Camera find: an electrical grounding rod drilled through a sewer line"],
        ["photos/camera-reel.jpg", "The inspection reel ready to go"]
      ],
      "body": [
        "Guessing is expensive. A camera inspection shows exactly what's happening in a line: roots, cracks, dips that hold water, sediment, offset joints, or in one Surrey home an electrical grounding rod drilled straight through the sewer. It also locates the problem, so any dig is a small one in the right place.",
        "We inspect sanitary sewer lines, perimeter drainage systems and sumps. You get the footage, a clear explanation of what you're looking at and a written recommendation, which is why buyers, sellers and strata councils use us before decisions get made.",
        "If the inspection turns up work that needs doing, you'll get a price for it; if it turns up nothing, you'll have peace of mind and a baseline for next time."
      ],
      "included": ["Sewer line camera inspection with locating", "Perimeter drainage system inspection", "Sump and storm line inspection", "Pre-purchase inspections for home buyers", "Strata building drainage assessments", "Footage and a plain-language written report"],
      "faq": [
        ["Should I get one before buying a house?", "Yes, especially for homes built before the 1980s. A failed sewer or perimeter system can cost more than most other inspection findings put together."],
        ["Do I get the video?", "Yes, along with a written summary of what we found and what we recommend."],
        ["Can you find where the pipe runs?", "Yes. The camera head is located from the surface so we can mark the line's path and depth."],
        ["Is an inspection included with drain cleaning?", "We camera after clearing to confirm the line is clear. A full recorded inspection with report is its own service."]
      ],
      "reviews": ["angel", "linda"],
      "related": ["perimeter-drainage", "drain-cleaning", "strata"]
    },
    {
      "slug": "moen-flo",
      "group": "specialty",
      "eyebrow": "Leak protection",
      "name": "Moen Flo smart water monitor",
      "card": "Certified installation of the Moen Flo shut-off and leak detectors. Daily health tests and automatic shut-off when something's wrong.",
      "h1": "Shut the water off before the damage starts",
      "sub": "Certified Moen Flo Smart Water Monitor and Shutoff installation across Burnaby and the Lower Mainland.",
      "photo": "photos/ig-shower-head.jpg",
      "photoAlt": "A running shower head",
      "gallery": [
        ["photos/daniel-teale-van.jpg", "The Pristine team"],
        ["photos/tech-sump-smile.jpg", "Technician at a drainage sump"],
        ["photos/ig-rescue.jpg", "Pristine to the rescue"]
      ],
      "body": [
        "The cheapest water damage is the kind that never happens. The Moen Flo Smart Water Monitor and Shutoff sits on your main water line, runs a daily health test of your home's plumbing and shuts the water off automatically when it sees a burst or a leak that shouldn't be there. Pair it with Moen's smart leak detectors under sinks and behind appliances for fixture-level protection.",
        "From the Flo app you can run a test, watch your water use, and turn the water off from anywhere, which is reassuring when you're away for a week or managing a rental.",
        "We're certified installers. Installation takes a few hours and we'll set the app up with you before we leave."
      ],
      "included": ["Moen Flo Smart Water Monitor and Shutoff installation", "Smart leak detector placement at fixtures and appliances", "App setup and walkthrough", "Main shut-off valve replacement if yours is seized", "Annual check as part of your free home plumbing inspection"],
      "faq": [
        ["What does the Flo actually do?", "It monitors pressure, flow and temperature on your main line, runs a daily health test and closes the valve automatically if it detects a burst or an abnormal leak."],
        ["Does it work when the internet is down?", "Shut-off on a detected burst works locally; the app features need a connection."],
        ["Is this good for a rental or vacation home?", "Ideal. You can see use and shut the water remotely, and insurers often look favourably on monitored shut-off devices."],
        ["Who installs it?", "A Pristine technician certified on the Moen Flo. We also check your main shut-off while we're there."]
      ],
      "reviews": ["mario", "nicola"],
      "related": ["plumbing-repairs", "hot-water-tanks", "water-service-and-repipes"]
    },
    {
      "slug": "strata",
      "group": "plumbing",
      "eyebrow": "Strata & property management",
      "name": "Strata & property management plumbing",
      "card": "In-suite work, unit inspections, parkade floods and building drainage, with 24-hour priority service for corporate accounts.",
      "h1": "One plumbing partner for the whole building",
      "sub": "Strata councils and property managers across the Lower Mainland call us for in-suite repairs, building drainage and 24-hour emergencies.",
      "photo": "photos/strata-excavator.jpg",
      "photoAlt": "Excavator at a strata townhouse drainage repair",
      "gallery": [
        ["photos/parkade-during-flush.jpg", "Hydro flushing a parkade drainage line"],
        ["photos/strata-roots-tech.jpg", "Roots removed from a strata drainage system"],
        ["photos/strata-trench-tech.jpg", "Trench work at a townhouse complex"]
      ],
      "body": [
        "Managing a building means plumbing problems arrive in bulk: a leak in one suite that shows up in the one below, a parkade drain that backs up every November, garden drains that flood the walkway. We work for strata corporations and property management companies across the Lower Mainland, from four-unit townhouses to large complexes.",
        "Corporate accounts get 24-hour priority emergency service and a team that already knows your building. We document every visit with photos and a written report so council and owners see exactly what was found and what was done.",
        "Our strata work is reviewed on HomeStars and Google, including a four-unit townhouse where we assessed and replaced failed sump pumps and drainage, and we're happy to put you in touch with a council we work with."
      ],
      "included": ["In-suite fixture repairs, installs and replacements", "Unit maintenance inspections", "24-hour priority emergency service for accounts", "Flooding in basements, underground parkades, gardens and lawns", "Building drainage camera inspections and hydro flushing", "Drainage system repair and installation", "Photo-documented reports for council"],
      "faq": [
        ["Do you take on new strata accounts?", "Yes. Call or send a request with the building address and what you're dealing with, and we'll set up a site visit."],
        ["How fast do you respond to a building emergency?", "Accounts get 24-hour priority. A parkade flood or a suite leak is attended the same day."],
        ["Can you invoice the strata and the owner separately?", "Yes. We're used to splitting in-suite and common-property work on the paperwork."],
        ["Do you provide reports for council?", "Every visit is documented with photos and a written summary suitable for council minutes and insurance."]
      ],
      "reviews": ["lily", "nicola"],
      "related": ["emergency-plumbing", "camera-inspections", "perimeter-drainage"]
    }
  ],

  "picker": [
    { "label": "Water in the basement", "urgency": "call", "advice": "Shut off power to the wet area and call us now. We'll talk you through the main shut-off while a van heads over. Then we'll find out whether it's the perimeter drains, a sewer backup or a burst line.", "service": "emergency-plumbing", "also": "perimeter-drainage" },
    { "label": "Drain gurgles or backs up", "urgency": "sameday", "advice": "Gurgling means a partial blockage, usually roots or grease. We snake it, camera it, and show you the line. Don't pour chemicals down it.", "service": "drain-cleaning" },
    { "label": "Toilet or sink is clogged", "urgency": "sameday", "advice": "Stop running water into it. One visit usually clears it with a snake; we confirm with the camera and check the other fixtures while we're there.", "service": "drain-cleaning", "also": "plumbing-repairs" },
    { "label": "No hot water", "urgency": "sameday", "advice": "If the tank is leaking, turn off its water supply and call now. If it's just cold, it's often a valve, element or thermostat we can repair the same day.", "service": "hot-water-tanks" },
    { "label": "Leak or drip", "urgency": "book", "advice": "A drip at a faucet or hose bib can wait a day or two; a leak inside a wall or ceiling can't. Either way, send us a photo with your request and we'll come with the right parts.", "service": "plumbing-repairs", "also": "emergency-plumbing" },
    { "label": "Grey plastic pipes (Poly-B)", "urgency": "book", "advice": "Poly-B fails from the inside and insurers are getting strict. Book a walkthrough for an upfront repipe quote with timeline.", "service": "water-service-and-repipes" },
    { "label": "Soggy lawn or high water bill", "urgency": "sameday", "advice": "That's the classic sign of a broken underground water service. We locate it and can usually replace it trenchless, with two small holes.", "service": "water-service-and-repipes" },
    { "label": "Buying a house or want a check-up", "urgency": "book", "advice": "Book a camera inspection of the sewer and perimeter drains. You'll get the footage and a written report before you decide.", "service": "camera-inspections" },
    { "label": "I manage a strata or building", "urgency": "book", "advice": "Tell us the building and what's happening. Accounts get 24-hour priority and photo-documented reports for council.", "service": "strata" }
  ],

  "reviews": {
    "judy":      { "name": "Judy H.", "when": "October 2026", "tech": "Andrew", "service": "Leak under an upstairs shower", "text": "Andrew was wonderful and efficient! He fixed one problem with a leak under our upstairs shower and helped me diagnose another that was an easy fix we could do ourselves. I appreciate that honesty in a contractor!" },
    "danya":     { "name": "Danya R.", "when": "July 2026", "tech": "Jeremy", "service": "Kitchen drain blockage", "text": "Jeremy was relentless in snaking until it resolved. We had a similar issue in the past with a different company and were very quickly upgraded to hydro flushing, a much more expensive service. Have never been more excited to wash dishes!" },
    "mario":     { "name": "Mario D.", "when": "April 2026", "tech": "", "service": "Plumbing repair", "text": "What stood out most was their honesty and transparency. There were no hidden fees or unnecessary upselling, just straightforward advice and fair pricing. They left the area spotless when they were done." },
    "susan":     { "name": "Susan K.", "when": "May 2026", "tech": "Jeremy", "service": "Clogged kitchen sink, same day", "text": "My daughters live near SFU Burnaby and their kitchen sink was completely clogged. They provided same-day service and fixed everything quickly. The customer service on the phone was also amazing." },
    "lily":      { "name": "Lily C.", "when": "September 2026", "tech": "Daniel", "service": "Daycare toilet clog", "text": "We had a toilet clog issue within the daycare facility and Daniel was the one that came for the service. He is professional, knowledgeable, and friendly. He fixed the problem so we could continue with our daily routines." },
    "linda":     { "name": "Linda Y.", "when": "December 2025", "tech": "Jeremy", "service": "Three fixes in one visit", "text": "Fixed all of our issues in one visit: clogged kitchen sink, leaky toilet and slow draining bathroom sink. He showed us pictures of the clog and broken parts. Pricing was communicated upfront before the work was done." },
    "jay":       { "name": "Jay S.", "when": "2025", "tech": "Daniel", "service": "Drainage sump, two dead pumps", "text": "Daniel came out to do an assessment of our drainage sump and then scheduled a return to do the necessary repairs, both sump pumps were dead, all within the same week. Knowledgeable, thorough and straightforward with his diagnosis." },
    "boundless": { "name": "A. B.", "when": "January 2026", "tech": "Daniel", "service": "Job requiring City permits", "text": "Daniel responded quickly to my inquiry, a job that required city permits, which he handled completely. Other plumbers hadn't even responded. His quote was fair and he stuck to it with no surprises." },
    "warrior":   { "name": "Repeat customer, 10+ years", "when": "May 2026", "tech": "", "service": "Hot water line, foundation leak, drainage", "text": "I have been calling on this company for over a decade. I had to replace a primary hot water line and they went with a cheaper route, saving me thousands. You need folks who remain calm when water is spraying everywhere." },
    "frederick": { "name": "Frederick M.", "when": "October 2026", "tech": "Andrew", "service": "Toilet repair, leak detection, garburator", "text": "Technician Andrew was punctual, professional and courteous. Pricing was reasonable and transparent." },
    "dylan":     { "name": "Dylan H.", "when": "April 2026", "tech": "", "service": "Main water line under the foundation", "text": "We've had them help with projects as small as a faucet and toilet replacement to as large as upgrading our main house water line, which required significant work to get access under our foundation. Would highly recommend them!" },
    "angel":     { "name": "Angel C.", "when": "2025", "tech": "", "service": "Ceiling leak with asbestos concerns", "text": "They called WorkSafeBC to figure out whether they could do this job safely. My favourite part is their full report: a walkthrough of upstairs and downstairs with photos, so we knew exactly what was going on." },
    "nicola":    { "name": "Nicola K.", "when": "2025", "tech": "Andrew", "service": "Two condo jobs", "text": "Daniel and his team are fantastic, responsive and communicative. Andrew did both of my jobs: friendly, efficient, respectful of my space. Work and equipment very fairly priced, all options clearly explained." }
  },

  "work": [
    { "photo": "photos/ig-root-snake.jpg", "title": "Root snake out of a storm sump", "place": "Burnaby", "service": "perimeter-drainage", "text": "A massive root mass was plugging a storm sump. Pulled, flushed, camera-checked." },
    { "photo": "photos/ig-polyb-pex.jpg", "title": "Half-inch Poly-B to 1-inch PEX", "place": "Burnaby", "service": "water-service-and-repipes", "text": "Broken water service replaced and upsized. Vacuum truck used to protect the tree and avoid breaking concrete. Passed City inspection." },
    { "photo": "photos/ig-sewer-replaced.jpg", "title": "Root-infested sewer line replaced", "place": "Vancouver", "service": "drain-cleaning", "text": "Multiple breaks and root intrusions had flooded the property. Excavated with a vacuum truck to save the yard, replaced, inspected, backfilled with a stone slinger." },
    { "photo": "photos/ig-sump-chamber.jpg", "title": "New sump chamber after a September backup", "place": "Lower Mainland", "service": "perimeter-drainage", "text": "First heavy rain of the season backed the system up. Added a sump chamber and updated the outlet line." },
    { "photo": "photos/ig-hot-water-tank.jpg", "title": "Hot water tank, brought to code", "place": "Bowen Island", "service": "hot-water-tanks", "text": "Replacement with drip pan, thermal expansion tank, earthquake strapping and correct relief-valve piping." },
    { "photo": "photos/ig-grounding-rod.jpg", "title": "The grounding rod in the sewer", "place": "Surrey", "service": "camera-inspections", "text": "Sewage backing up inside. The camera found an electrical grounding rod drilled straight through the line. Cleared, located and marked for repair." }
  ],

  "team": [
    { "name": "Daniel", "role": "Owner and lead plumber", "photo": "photos/daniel-hardhat.jpg", "note": "Started Pristine in 2015. Handles the permits, the quotes and a lot of the digging." },
    { "name": "Andrew", "role": "Plumbing technician", "photo": "photos/andrew-drain-tile-roots.jpg", "note": "Named in more reviews than anyone. Drain tile, fixtures and the honest second opinion." },
    { "name": "Jeremy", "role": "Plumbing technician", "photo": "", "note": "Relentless with a drain snake. Leaves the job site cleaner than he found it." }
  ],

  "areas": [
    { "name": "Burnaby", "home": true, "note": "Home base on Capella Drive. Burnaby Heights, Capitol Hill and the Lougheed corridor have plenty of 1950s and 60s homes with original clay-tile perimeter drains, and the SFU/UniverCity towers keep our strata crew busy." },
    { "name": "New Westminster", "note": "Queen's Park, Sapperton and the West End: some of the oldest housing stock in the region. Water service replacements here often need plumbing and tree-protection permits, which we handle." },
    { "name": "Coquitlam", "note": "Many 1970s to 1990s homes built with Poly-B supply pipe. We do a lot of repipe walkthroughs and water service upgrades here." },
    { "name": "Port Moody", "note": "Heavy tree cover means perimeter systems full of pine needles and sediment. We cleaned one out on a job that had never been inspected." },
    { "name": "Vancouver", "note": "East Vancouver's combined storm and sanitary outlet lines are prone to root blockages that flood basements. Snake, camera, done." },
    { "name": "Surrey", "note": "Sewer backups, water service breaks and the occasional grounding rod through a sewer line." },
    { "name": "Port Coquitlam & Delta", "note": "Regular routes for drain cleaning, hot water tanks and strata work." },
    { "name": "Bowen Island", "note": "Yes, we take the ferry. Hot water tank replacements and plumbing repairs for island homes." }
  ],

  "faq": [
    ["Do you charge more at night, on weekends or holidays?", "We pledge not to overcharge when you're in a jam. Emergency work is priced upfront like everything else, and our phone is answered 24/7."],
    ["How quickly can someone come?", "We aim for same-day on every emergency call and we book regular visits around your schedule, seven days a week."],
    ["Do I get a price before you start?", "Always. The technician diagnoses, gives you the price, and starts only when you say go. Our reviews mention that more than anything else."],
    ["What's the free home plumbing inspection?", "Every service call includes a look over your visible plumbing, shut-offs and water heater. We tell you what's fine and what to watch, with no pressure to do anything about it."],
    ["Do you handle permits?", "Yes. Perimeter drainage, sewer and water service work is permitted and inspected by the City, and we take care of the paperwork and the inspections."],
    ["Are you licensed and insured?", "Yes. Our technicians are fully qualified journeyman plumbers, including Red Seal, and the company is licensed and insured. We've held a BBB A+ rating with no complaints and were named a HomeStars Best of the Best winner in 2025."]
  ]
};
