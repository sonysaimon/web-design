/* Lotus Dental — everything the page says. Edit here; main.js renders it. */
window.LOTUS = {
  phone: '(604) 294-1455',
  phoneHref: 'tel:+16042941455',
  email: 'lotusdental@shaw.ca',
  address: 'Unit 610 – 4445 Lougheed Hwy, Burnaby, BC V5C 0E4',
  mapsHref: 'https://maps.google.com/?q=4445+Lougheed+Hwy+Unit+610,+Burnaby,+BC+V5C+0E4',

  /* Service groups, from the clinic's own Treatments & Services page. No prices: dental does not publish them. */
  services: [
    {
      id: 'checkups',
      name: 'Check-ups and cleaning',
      lead: 'Due for a visit?',
      blurb: 'A consultation, digital x-rays and a cleaning and scaling with the hygienist. Gum inflammation and gingivitis are treated early, before they cost you a tooth.',
      items: ['Dental consultation', 'Digital x-rays', 'Cleaning and scaling', 'Gingivitis and gum inflammation treatment', 'Sealants', 'Mouthguards'],
    },
    {
      id: 'repair',
      name: 'Fillings, crowns and replacements',
      lead: 'Chipped, cracked or missing?',
      blurb: 'Repairs that match the tooth, caps and crowns for the ones that need more, and bridges, implants or dentures when a tooth is gone.',
      items: ['Fillings and repairs', 'Caps and crowns', 'Bridges and implants', 'Dentures', 'Tooth extraction', 'Wisdom tooth extraction'],
    },
    {
      id: 'rootcanal',
      name: 'Root canal treatment',
      lead: 'A tooth that aches or throbs?',
      blurb: 'Done here, by a dentist with a master’s degree in endodontics, not referred across town. Most patients say the hardest part was deciding to call.',
      items: ['Diagnosis with digital x-rays', 'Root canal treatment under local anaesthetic', 'Filling or crown to protect the tooth afterwards'],
      signature: true,
    },
    {
      id: 'cosmetic',
      name: 'Whitening, veneers and bonding',
      lead: 'Want to like your smile more?',
      blurb: 'Whitening for colour, bonding for small chips and gaps, veneers when you want a bigger change. Dr. Rahman will tell you which one is actually worth it for your teeth.',
      items: ['Teeth whitening', 'Teeth bonding', 'Veneers'],
    },
    {
      id: 'kids',
      name: 'Children’s dentistry',
      lead: 'First visit, or a nervous one?',
      blurb: 'Pediatric dentistry for the whole family, with sealants to protect new molars. BC Healthy Kids and the Canadian Dental Care Plan are accepted.',
      items: ['Pediatric dentistry', 'Sealants', 'Mouthguards for sports', 'BC Healthy Kids Program accepted'],
    },
    {
      id: 'emergency',
      name: 'Emergency appointments',
      lead: 'In pain right now?',
      blurb: 'Call. Patients in pain are seen the same day whenever the schedule allows, including evenings until 8 on Monday, Tuesday and Thursday.',
      items: ['Toothache and swelling', 'Broken or knocked-out teeth', 'Lost fillings and crowns', 'Same-day when possible'],
      emergency: true,
    },
  ],

  team: [
    { name: 'Dr. Basant A. Rahman', role: 'Dentist and owner', note: 'BDS, Alexandria University · MSc Endodontics, Ain Shams University · Licensed in Canada since 2013' },
    { name: 'Sharon', role: 'Team' },
    { name: 'Tala', role: 'Team' },
    { name: 'Noor', role: 'Reception' },
  ],

  /* Real Google reviews, trimmed, first names only. */
  reviews: [
    { name: 'M A', text: 'Unlike some dentists who recommend unnecessary procedures, Dr. Rahman only does what is genuinely needed.' },
    { name: 'Sara', text: 'Dr Basant is very honest with the interventions needed and will never recommend any unnecessary treatment.' },
    { name: 'Hadeel', text: 'She saw me in the same day because I was in pain. Clean and modern clinic, very welcoming staff.' },
    { name: 'Zeynep', text: 'Everything went so smooth, I almost did not feel any pain at all.' },
    { name: 'Rowan', text: 'I never had to wait more than 5 min. No pain while taking the anesthesia needle.' },
    { name: 'Cory', text: 'It’s been a long time between my dental work. They are very understanding, compassionate, and fantastic.' },
  ],

  faq: [
    { q: 'Are you taking new patients?', a: 'Yes. New patients and emergencies are welcome. Send the request form on this page or call (604) 294-1455 and Noor at reception will find you a time.' },
    { q: 'I’m in pain. Can I be seen today?', a: 'Call the clinic as early as you can. Same-day emergency appointments are given whenever the schedule allows, and the clinic is open until 8 pm on Monday, Tuesday and Thursday for people who cannot leave work.' },
    { q: 'Do you accept my insurance, or the Canadian Dental Care Plan?', a: 'The clinic accepts your insurance plan, including the Ministry of Social Development, the BC Healthy Kids Program and the Canadian Dental Care Plan (CDCP). Bring your card or plan details to the first visit.' },
    { q: 'Do you do root canals here, or refer them out?', a: 'Here. Dr. Rahman holds a master’s degree in endodontics, the specialty of root canal treatment, and has worked as an endodontist as well as a general dentist. You stay with the dentist you know.' },
    { q: 'I’m nervous about the dentist. Will it hurt?', a: 'Tell the team when you book. Reviews mention the anaesthetic going in without pain and the clinic being patient with people who have stayed away for years. Nothing is done without explaining it first.' },
    { q: 'Do you see children?', a: 'Yes. Pediatric dentistry, sealants and sports mouthguards, and the BC Healthy Kids Program is accepted.' },
    { q: 'Which languages are spoken?', a: 'Dr. Rahman speaks English, French, German and Arabic fluently.' },
    { q: 'How do I get there, and is there parking?', a: 'Unit 610 at 4445 Lougheed Hwy, directly across the street from Brentwood Town Centre and Brentwood SkyTrain station. There is parking at the building and the office is wheelchair accessible.' },
  ],

  /* From Google, matches the clinic’s own site. Monday first. */
  hours: [
    ['Monday', '11 am – 8 pm'],
    ['Tuesday', '11 am – 8 pm'],
    ['Wednesday', '8 am – 2 pm'],
    ['Thursday', '11 am – 8 pm'],
    ['Friday', 'Closed'],
    ['Saturday', 'Closed'],
    ['Sunday', 'Closed'],
  ],
};
