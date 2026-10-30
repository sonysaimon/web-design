/* Priority Plumbing & Drains — editable business data.
   Edit this file to change the phone number, booking link, services, symptoms, areas or offers.
   Every page reads from window.PP. */
window.PP = {
  business: {
    name: 'Priority Plumbing & Drains',
    phone: '(647) 247-2275',
    tel: '+16472472275',
    book: 'https://book.servicetitan.com/xog76t01mgild6kil2yfcsjg',
    address: '1594 Dupont St, Toronto, ON M6P 3S7',
    maps: 'https://maps.google.com/?cid=3485196140299663483',
    rating: '4.8',
    reviewCount: '1,939',
    since: 2001,
    plumbingLicence: 'P17794',
    heatingLicence: '00749274'
  },

  /* Service hubs. `items` are the problems/jobs listed on each hub page and in the home grid. */
  services: [
    {
      id: 'plumbing',
      title: 'Plumbing',
      page: 'plumbing.html',
      photo: 'photos/tech-shower-valve.jpg',
      alt: 'Priority Plumbing technician replacing a shower valve in a marble-tiled bathroom',
      blurb: 'Everything inside the house that carries water: leaks, toilets, taps, water heaters, sump pumps and shut-offs.',
      items: [
        ['Leaks & pipe repair', 'Dripping ceilings, wet walls, pinholes in copper. We find the source first, then fix it once.'],
        ['Toilets', 'Running, rocking, leaking at the base, or a new one installed in under an hour.'],
        ['Faucets & fixtures', 'Kitchen and bath taps, tub diverters, shower valves, bidets. Any brand, parts on the truck.'],
        ['Water heaters', 'Tank, tankless and heat-pump units. Repair when it makes sense, replace when it doesn’t.'],
        ['Sump pumps & battery backup', 'Pump upgrades and backups that keep running when the power goes out in a storm.'],
        ['Shut-off valves & water service', 'Main shut-offs that actually shut off, pressure problems, and new water service lines.'],
        ['Emergency plumbing', 'Burst pipes and flooding, any hour. Same rate nights and weekends.'],
        ['Commercial plumbing', 'Small commercial and multi-unit buildings on the same upfront-pricing terms.']
      ],
      faq: [
        ['Do you charge extra at night or on weekends?', 'No. Our rate is the same seven days a week, and we are reachable 24 hours for emergencies.'],
        ['Can you give a price over the phone?', 'We give you a firm price at your door, before any work starts, with options at different price points. No hourly surprises.'],
        ['What if the repair fails later?', 'Every installation carries our lifetime warranty, and if you are not satisfied with our workmanship we make it right or you don’t pay.']
      ]
    },
    {
      id: 'drains',
      title: 'Drains & Sewer',
      page: 'drains-sewer.html',
      photo: 'photos/basement-stack.jpg',
      alt: 'Cast-iron drain stack and new ABS piping in a Toronto basement',
      blurb: 'Clogs, backups, smells and the sewer line under your lawn. Cleared, inspected on camera, and repaired without guesswork.',
      items: [
        ['Drain cleaning', 'Kitchen stacks, tubs, floor drains and main drains. Most clears are done in one visit.'],
        ['Camera inspection', 'A camera down the line shows exactly why it backed up, so you fix the cause, not the symptom.'],
        ['Drain repair', 'Cracked clay, collapsed sections and bellied pipe repaired from inside the house where possible.'],
        ['Sewer line replacement', 'Full replacement from the house to the city connection when the line is past saving.'],
        ['Trenchless sewer', 'Lining and pipe-bursting options that save your lawn, driveway and walkway.'],
        ['Backwater valve', 'Stops city sewage from backing into your basement during storms. A City of Toronto subsidy may apply.'],
        ['Hydro-jetting', 'High-pressure water scours grease and scale that a snake only pokes through.'],
        ['Root removal', 'Tree roots cut out and the entry point sealed so they don’t come back next spring.']
      ],
      faq: [
        ['What does it cost to clear a main drain?', 'Our trucks and our building both say it: ask about the $99 main drain clearing. Your technician confirms the price before starting and tells you if your line needs more than a clear.'],
        ['Why do you recommend a camera inspection?', 'Because a clog that comes back every few months usually means a broken pipe or roots. Seeing it on camera is cheaper than clearing it four times a year.'],
        ['Will you have to dig up my yard?', 'Not always. We quote trenchless options when the pipe qualifies, and we beat any written drain quote from a licensed, insured contractor.']
      ]
    },
    {
      id: 'heating',
      title: 'Heating',
      page: 'heating.html',
      photo: 'photos/tech-radiator.jpg',
      alt: 'Technician bleeding and servicing a hot-water radiator in a Toronto home',
      blurb: 'Boilers and hot-water radiators, the heating most pre-war Toronto houses still run on. Licensed heating technicians, not just plumbers.',
      items: [
        ['Radiator repair', 'Cold radiators, knocking pipes, leaking valves and air locks sorted room by room.'],
        ['Boiler repair', 'No heat, no hot water, error codes and short cycling diagnosed and fixed the same day where parts allow.'],
        ['Boiler maintenance', 'An annual check before the first cold snap, with a safety inspection of venting and combustion.'],
        ['Boiler installation', 'High-efficiency replacements sized to your house, with a lifetime warranty on our installation.'],
        ['No-heat emergencies', 'A house with no heat in January is an emergency. Call any hour.'],
        ['Hot water & combi systems', 'Combination boilers and indirect tanks for homes that want heat and hot water from one unit.']
      ],
      faq: [
        ['Are you licensed for heating work?', 'Yes. Priority holds heating licence #00749274 in addition to plumbing licence #P17794.'],
        ['My radiators are cold upstairs but hot downstairs. Why?', 'Usually trapped air or a circulation problem, both quick fixes. Your technician checks the whole loop, not just the cold one.'],
        ['Do you service boilers you didn’t install?', 'Yes, any make. If a repair no longer makes sense we say so and quote a replacement with options.']
      ]
    },
    {
      id: 'waterproofing',
      title: 'Basement Waterproofing',
      page: 'waterproofing.html',
      photo: 'photos/sewer-excavation.jpg',
      alt: 'Mini excavator digging beside a Toronto house for exterior waterproofing and sewer work',
      blurb: 'Water in the basement after every storm has a cause. We find it, fix it from the right side of the wall, and back it with our best-value guarantee.',
      items: [
        ['Interior waterproofing', 'Membrane, weeping tile and sump systems installed from inside when digging outside is not practical.'],
        ['Exterior waterproofing', 'Excavation to the footing, new membrane and drainage so water never reaches the foundation wall.'],
        ['Backwater valve', 'The single best protection against sewer backup in Toronto. Often subsidized by the City.'],
        ['Sump pump & backup', 'Pumps sized for your water table with battery backup for when the storm takes the power out.'],
        ['Flood-prevention assessment', 'A technician walks the house and shows you where water gets in and what to fix first.'],
        ['Foundation crack repair', 'Injection repair for leaking cracks in poured-concrete foundations.']
      ],
      faq: [
        ['Interior or exterior: which do I need?', 'It depends on where the water enters and what is in the way outside. We quote the option that solves your problem, not the most expensive one.'],
        ['Is there a City of Toronto subsidy?', 'The City runs a Basement Flooding Protection Subsidy Program for backwater valves, sump pumps and related work. We tell you if your job qualifies and what paperwork you need.'],
        ['Do you guarantee waterproofing work?', 'We beat any written waterproofing quote from a licensed, insured contractor, and our installations carry a lifetime warranty.']
      ]
    }
  ],

  /* Symptom picker on the home page. `service` matches a hub id above. */
  symptoms: [
    { label: 'Drain is backed up', service: 'drains', fix: 'Drain cleaning', note: 'Most clears are done in one visit. A camera inspection shows why it happened.' },
    { label: 'Water where it shouldn’t be', service: 'plumbing', fix: 'Leak detection and pipe repair', note: 'We find the source before we open anything up.' },
    { label: 'Toilet running or clogged', service: 'plumbing', fix: 'Toilet repair or replacement', note: 'Parts on the truck. A new toilet usually takes under an hour.' },
    { label: 'No hot water', service: 'plumbing', fix: 'Water heater repair or replacement', note: 'Tank, tankless or heat-pump, we service all three.' },
    { label: 'Sewer smell or gurgling', service: 'drains', fix: 'Camera inspection', note: 'Gurgling means air is going the wrong way. The camera tells us where.' },
    { label: 'Water in the basement', service: 'waterproofing', fix: 'Flood-prevention assessment', note: 'A backwater valve or sump upgrade may qualify for a City subsidy.' },
    { label: 'Radiators cold or boiler down', service: 'heating', fix: 'Boiler and radiator repair', note: 'Licensed heating technicians, same rate on weekends.' },
    { label: 'Sump pump not running', service: 'plumbing', fix: 'Sump pump and battery backup', note: 'Replaced and backed up before the next storm.' }
  ],

  offers: [
    { headline: '$99', title: 'Clear any main drain', terms: 'The price on our trucks and our building. Confirm current conditions with your technician when you book.' },
    { headline: '$50 off', title: 'Any plumbing service', terms: 'Cannot be combined with other offers. Valid on standard pricing. One use per household.' }
  ],

  areas: {
    toronto: ['Annex', 'Bloor West Village', 'High Park', 'Junction Triangle', 'Roncesvalles', 'Liberty Village', 'Leslieville', 'The Beaches', 'Danforth', 'East York', 'Leaside', 'Rosedale', 'Forest Hill', 'North York', 'York', 'Etobicoke', 'Markland Wood', 'Don Mills', 'Scarborough'],
    gta: ['Mississauga', 'Brampton', 'Vaughan', 'Thornhill', 'Maple', 'Concord', 'Oakville']
  }
};
