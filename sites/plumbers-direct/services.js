// Plumbers Direct — service data. Edit here; the home grid, the hero picker and the
// service pages (via build.py) all read from this one list. Keep it valid JSON after the "=".
const PD_SERVICES = [
  {
    "slug": "faucet-toilet-repair",
    "name": "Faucet & toilet repair",
    "problem": "Dripping taps & running toilets",
    "sym": "DRIP",
    "short": "A dripping tap or a toilet that keeps running wastes water you pay for. We repair or replace any make and model.",
    "includes": ["Sinks & faucets", "Bathtubs & showers", "Toilets, bidets & urinals", "Clogged toilets", "Frost-free hose bibs", "Low water pressure", "Repair or replace, all makes & models"],
    "page_lede": "Fixed the same day, usually in under an hour on site. We carry common cartridges, fill valves and flappers on the van.",
    "body": [
      "A tap that drips once a second wastes thousands of litres a year, and a toilet that runs between flushes can double a household's water bill without anyone noticing. Both are quick fixes when a plumber carries the right parts.",
      "We repair cartridges, seats, washers and fill valves, reseal bases, replace flappers and float mechanisms, and swap fixtures when repair no longer makes sense. If a part is out of production we will tell you before we start and quote the replacement in writing.",
      "Low water pressure at one fixture is usually a blocked aerator or a failing cartridge. Low pressure everywhere is a different problem, and we will check your main valve and supply before recommending anything."
    ],
    "faq": [
      ["Do you charge extra to come at night?", "No. The number is the same 24 hours a day and reviews from customers called at 11 p.m. on a Sunday mention no after-hours surcharge."],
      ["Can you fix my brand of faucet?", "Yes. We repair and replace all makes and models, including older cartridge types."],
      ["Should I repair or replace an old toilet?", "If the bowl or tank is cracked, or the toilet is pre-1996 and uses 13 litres per flush, replacement pays for itself. We will give you both prices."]
    ],
    "reviews": ["manuel", "julie", "kaliopi"]
  },
  {
    "slug": "drain-cleaning",
    "name": "Drain cleaning & replacement",
    "problem": "Clogged & slow drains",
    "sym": "CLOG",
    "short": "Kitchen, bathroom, laundry and main drains: snaking, camera inspection, root removal and replacement when the pipe has failed.",
    "includes": ["Drain cleaning & snaking", "Garbage disposals / garburators", "Camera inspections", "Tree root removal", "Drain replacement", "Grease and soap scum removal", "Pipe locating"],
    "page_lede": "Snaked the same day. If the camera shows a broken pipe, you get the footage and a written price before anything is dug.",
    "body": [
      "Most clogs are grease, hair, soap scum or coffee grounds and clear with a proper auger. We clear the line, run water to confirm flow, and tell you what caused it so it does not come back next month.",
      "If a drain backs up again and again, or more than one fixture is slow, the problem is further down the line. A camera inspection shows exactly what is there: a belly in the pipe, a tree root, a collapsed clay section. You see the footage with us.",
      "When a section has failed we replace only what needs replacing, pull the permit where the City requires one, and restore the floor or yard. Drain replacement work is covered by our one-year warranty like everything else."
    ],
    "faq": [
      ["How fast can you clear a drain?", "Usually the same day. Reviews mention a plumber at the door within an hour for emergencies."],
      ["Do I need a camera inspection?", "Not for a first-time clog. We recommend it when a drain backs up repeatedly, after a sewer back-up, or before you buy a house with older clay drains."],
      ["Will chemical drain cleaner work?", "It can soften a grease clog but it damages older pipes and does nothing for roots or collapsed sections. If you have already used it, tell us before we open the line."]
    ],
    "reviews": ["nancy", "pm", "owen"]
  },
  {
    "slug": "leaking-frozen-pipes",
    "name": "Leaking & frozen pipes",
    "problem": "Leaking, burst & frozen pipes",
    "sym": "LEAK",
    "short": "Burst pipes, pinhole leaks, no water in a cold snap. We thaw, repair and insulate so it does not happen twice.",
    "includes": ["Leaking or burst pipes", "Frozen pipe thawing", "Low or no water pressure", "Pipe repair & replacement", "Insulating pipes prone to freezing", "Frost-free hose bib installation", "Shut-off valve replacement"],
    "page_lede": "A burst pipe can release 400 litres in an hour. Shut off the main if you can find it, then call. We come straight out.",
    "body": [
      "If you can see water, find your main shut-off valve first. It is usually on the front wall of the basement near the water meter. Turn it clockwise until it stops, then call us. Knowing where that valve is before you need it is the best five minutes a homeowner can spend.",
      "Toronto winters freeze pipes in uninsulated exterior walls, garages and crawl spaces. We thaw them with a professional pipe-thawing machine rather than a torch, check for splits as the line warms up, and insulate or reroute the section so you are not calling again next February.",
      "Pinhole leaks in older copper and corroded galvanized lines are the slow kind. We replace the failed section, and if a whole run is at end of life we will say so and quote the replacement separately."
    ],
    "faq": [
      ["My pipes are frozen. What do I do first?", "Turn off the main water supply if you can reach it, open the affected tap so pressure can escape, and call. Do not use an open flame on a pipe."],
      ["How do I stop pipes freezing?", "Insulate exposed runs, keep cabinet doors under exterior-wall sinks open in deep cold, shut off and drain outdoor taps in fall, or have a frost-free hose bib installed."],
      ["Is a small leak urgent?", "A drip into a ceiling or wall is. Water travels, and the drywall damage costs more than the plumbing. Call the same day."]
    ],
    "reviews": ["ed", "william", "lesia"]
  },
  {
    "slug": "sump-pumps-flooding",
    "name": "Sump pumps & flooding",
    "problem": "Sump pumps & basement flooding",
    "sym": "FLOOD",
    "short": "Sump pump repair and installation, battery back-up, backwater valves and the flood-protection devices the City of Toronto subsidises.",
    "includes": ["Sump pump repair & replacement", "New sump pump installation", "Battery back-up systems", "Sanitary backwater valve installation", "Backflow prevention", "Flood protection devices", "Flood prevention and waterproofing"],
    "page_lede": "The City of Toronto's Basement Flooding Protection Subsidy pays up to $6,650 per property toward a backwater valve, sump pump and related work installed by a licensed plumber. We do the installation and the paperwork that goes with it.",
    "body": [
      "The sump pump is the last line of defence between a heavy rain and a wet basement. If it fails you find out at the worst moment. We repair and replace pumps, add battery back-ups for power outages, and test the float and discharge so the system runs when the storm comes.",
      "A sanitary backwater valve stops the City sewer from backing up into your basement when the system is overloaded. Toronto subsidises its installation because it works. We install the valve, pull the permit, and give you the invoice and licence details the subsidy application needs.",
      "If water is already coming in, call us first. We have been the first call after sewer back-ups for homeowners across the west end, and we will find the cause before anyone starts tearing out drywall."
    ],
    "faq": [
      ["How much is the City subsidy?", "As of May 1, 2026 the City of Toronto Basement Flooding Protection Subsidy Program offers up to $6,650 per property: up to 80% of the invoiced cost, to a maximum of $1,600 per backwater valve (two devices), $2,250 for a sump pump with battery back-up, plus pipe severance and capping and a home plumbing assessment. Eligibility and amounts are set by the City; see toronto.ca for the current terms."],
      ["Does the work have to be done by a licensed plumber?", "Yes. The subsidy requires a licensed plumber and a permit. Our licence number is P26432."],
      ["How often should a sump pump be replaced?", "Most pumps last 7 to 10 years. If yours is older than that or runs constantly, have it checked before spring."]
    ],
    "reviews": ["jazzy", "anna", "lisa"]
  },
  {
    "slug": "water-main-repairs",
    "name": "Water main repairs",
    "problem": "Water main & supply line",
    "sym": "MAIN",
    "short": "Lead and polybutylene replacement, emergency main breaks, water meters, and the upgrades the City mandates.",
    "includes": ["Water pipe replacement", "Lead pipe replacement", "Emergency water main breaks", "Polybutylene (Poly-B) replacement", "Water meter repair & replacement", "City-mandated water main upgrades", "Low water pressure assessment"],
    "page_lede": "Your water main is the one pipe everything depends on. Many pre-1950s Toronto homes still have a lead or undersized service; we replace it from the property line in.",
    "body": [
      "The water service runs from the City's main at the street to your meter. In older High Park, Junction, Roncesvalles and Bloor West homes that line is often lead or half-inch galvanized, which means low pressure and, in the case of lead, a health concern the City actively encourages owners to fix.",
      "We replace the private side of the service with new copper, coordinate with the City for the public side where needed, and handle the permit and inspection. Most replacements are finished in a day.",
      "Polybutylene supply piping (grey plastic, common in 1980s and 90s construction) fails without warning. If your home has it, we can replace it room by room or all at once."
    ],
    "faq": [
      ["How do I know if my water service is lead?", "Look at the pipe where it enters the basement before the meter. Lead is dull grey, soft enough to scratch with a key, and has no threads. We can confirm in a minute on site."],
      ["Will the City pay for part of it?", "The City of Toronto has had lead-pipe replacement programs for the public side of the service. We will tell you what applies at the time of your job."],
      ["How long is the water off?", "Usually a few hours on the day of the replacement."]
    ],
    "reviews": ["indira", "claudine", "christina"]
  },
  {
    "slug": "emergency-plumber",
    "name": "24-hour emergency plumbing",
    "problem": "Right now, any hour",
    "sym": "NOW",
    "short": "Burst pipe, flooded basement, overflowing toilet. The same number works at 4 a.m., on Christmas Day and on a Sunday night.",
    "includes": ["Burst and frozen pipes", "Flooded basements", "Overflowing toilets", "Sewer back-ups", "Water heater failures", "Sump pump failures", "No water"],
    "page_lede": "Call 416-402-7798. Joyce picks up, gets the details, and dispatches the nearest plumber. Customers have written about being called back within five minutes.",
    "body": [
      "An emergency is anything that will cost you more by morning: water you cannot stop, sewage coming up a floor drain, a tank leaking onto the basement floor. We have run a 24-hour line since 2000 and we answer it.",
      "While you wait: turn off the main water valve for leaks and bursts, turn off the power to a flooded area at the breaker if it is safe to reach, and keep people out of sewage water. For an overflowing toilet, turn the small valve behind it clockwise.",
      "You get a plumber with the right tools, a clear price before work begins, and a job done with care. One customer described calling on Christmas Day and having someone out within two hours. Another called at 11 p.m. on a Sunday and was not charged an after-hours surcharge."
    ],
    "faq": [
      ["What counts as a plumbing emergency?", "Any active leak you cannot stop, a burst or frozen pipe, sewage backing up, a basement taking on water, or no water to the house."],
      ["How fast will someone come?", "It depends on where you are and what is already dispatched. Reviews mention arrival within the hour, within two hours, and a 7:30 a.m. text saying ten minutes away. Joyce will give you an honest time when you call."],
      ["Is there an emergency surcharge?", "Customers have written that they were not charged an after-hours surcharge. Ask when you call and you will get a straight answer."]
    ],
    "reviews": ["carol", "joyce_s", "paul"]
  },
  {
    "slug": "hot-water-tanks",
    "name": "Hot water heater tanks",
    "problem": "No hot water & leaking tanks",
    "sym": "COLD",
    "short": "Tank repair and replacement. A leaking or failing tank wastes energy all year and can flood the basement when it lets go.",
    "includes": ["Hot water tank repair", "Tank replacement & installation", "Leaking tanks", "Water too hot or too cold", "Strange colour or odour", "Noisy water heaters", "Electric water heaters"],
    "page_lede": "Hot water tank repairs are one of our specialties. We will tell you plainly whether it is a $200 part or a new tank.",
    "body": [
      "Water heaters give warning before they fail: rumbling as sediment builds up, rusty water, a pilot that will not stay lit, water that swings from scalding to cold. Caught early these are repairs. A tank that is leaking from the body is not; it needs replacing before it empties onto your floor.",
      "We supply and install gas and electric tanks, replace thermostats, elements, valves and anode rods, and haul the old unit away. Installation includes new connections, a drip pan where there is room, and a check of the venting.",
      "If you rent your tank, we can still service it and we will tell you if a replacement is the rental company's responsibility."
    ],
    "faq": [
      ["How long does a water heater last?", "Eight to twelve years for a standard tank. If yours is older and showing rust at the base, plan the replacement rather than waiting for the leak."],
      ["Can you install a tankless unit?", "Ask when you call. We will quote the option that fits your home and gas supply."],
      ["Why is my hot water brown?", "Usually sediment or a corroding tank. Flushing fixes the first; the second means the tank is near the end."]
    ],
    "reviews": ["ron", "catherine", "robert"]
  },
  {
    "slug": "sewer-lines",
    "name": "Sanitary sewer lines",
    "problem": "Sewer back-ups & slow basement drains",
    "sym": "BACKUP",
    "short": "Basement drain backed up, gurgling toilets, sewage smell outside: the sewer line is telling you something. Camera first, then fix.",
    "includes": ["Sewer back-up response", "Camera inspection & pipe locating", "Sewer cleaning and root removal", "Sewer line repair", "Sewer line replacement", "Clean-out installation", "Backwater valve installation"],
    "page_lede": "We have traced back-ups to tree roots, a neighbour's construction and collapsed clay tile. Finding the real cause is the whole job.",
    "body": [
      "Watch for the signs: a slow-draining tub or sink, foul odours in the basement or yard, dirty water coming up into a tub, trouble flushing, a long wait for the toilet to refill, gurgling from drains. Any one of them means call. Two means call today.",
      "We run a camera down the line and locate the problem to the metre. Roots are cut out and the line cleaned; a broken section is dug and replaced; a line that has failed along its length is replaced or relined. You see the footage before and after.",
      "After a back-up we recommend a sanitary backwater valve, which the City of Toronto subsidises. It is the one thing that stops it happening again."
    ],
    "faq": [
      ["Who is responsible, me or the City?", "The private side of the sewer, from the house to the property line, is the owner's. The City maintains the public main. A camera inspection shows where the problem is."],
      ["Will you dig up my yard?", "Only the section that has failed, and we tell you exactly where before we start."],
      ["Can I claim this on insurance?", "Many policies cover sewer back-up if you have the rider. We provide the camera footage and a written report for the claim."]
    ],
    "reviews": ["monica", "france", "chroma"]
  },
  {
    "slug": "water-quality",
    "name": "Water quality",
    "problem": "Hard water & filtration",
    "sym": "TASTE",
    "short": "Softeners, NSF-certified filtration systems and water testing for mineral build-up, poor lathering and taste.",
    "includes": ["Water softeners", "NSF-certified water systems & filters", "Water testing", "Under-sink and whole-home filters", "Filter replacement"],
    "page_lede": "Hard water leaves scale on fixtures, shortens appliance life and makes soap useless. A softener or filter fixes it at the source.",
    "body": [
      "Toronto's municipal water is moderately hard. Over years that means white scale on faucets and kettles, cloudy glassware, and heating elements that fail early. A softener installed at the main treats the whole house.",
      "For taste, odour or specific concerns we install NSF-certified point-of-use and whole-home filtration systems, and we can test your water first so you buy the right system rather than the biggest one.",
      "We have installed complicated filtration setups for homeowners who needed them and told others that a simple under-sink filter would do. We quote what fits."
    ],
    "faq": [
      ["Do I need a softener in Toronto?", "Not everyone does. If you see scale build-up, dry skin after showers or shortened appliance life, it is worth a conversation."],
      ["How often do filters need changing?", "Depends on the system: six to twelve months for most cartridges. We note it on the invoice."],
      ["Is Toronto tap water safe?", "Yes. Filtration is about taste, hardness and specific household preferences, not safety."]
    ],
    "reviews": ["terry", "gary", "neal"]
  }
];
if (typeof window !== "undefined") window.PD_SERVICES = PD_SERVICES;
