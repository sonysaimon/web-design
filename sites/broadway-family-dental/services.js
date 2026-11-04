/* Broadway Family Dental Centre — page data. Edit services, team, reviews, FAQ and hours here;
   main.js renders them. Facts come from broadwayfamilydentalcentre.ca and the clinic's Google
   Business Profile (Nov 2026). No prices are shown on purpose. */
window.BFD = {
  name: 'Broadway Family Dental Centre',
  phoneDisplay: '(604) 283-2216',
  phoneTel: '+16042832216',
  email: 'bfdcentre@gmail.com',
  address: '383 E Broadway, Vancouver, BC V5T 1W6',
  maps: 'https://maps.google.com/?q=383+E+Broadway,+Vancouver,+BC+V5T+1W6',
  form: 'https://formspree.io/f/PLACEHOLDER', // replace with the clinic's Formspree form id
  rating: '5.0',
  reviewCount: 216,

  /* Services grouped the way the clinic lists them, lightly re-ordered for a first-time patient. */
  services: [
    {
      group: 'Check-ups and hygiene',
      note: 'The visits most people book.',
      items: ['Regular check-ups', 'Routine cleaning', 'Digital X-rays', 'Fluoride treatment', 'Dental sealants', 'Oral hygiene coaching', 'Teeth whitening'],
    },
    {
      group: 'Children',
      note: 'Dr. Lam spent ten years at a non-profit kids’ clinic.',
      items: ['Pediatric dentistry', 'First visits and check-ups', 'Sealants and fluoride', 'Gentle fillings'],
    },
    {
      group: 'Fillings and repairs',
      note: 'Tooth-coloured, never silver.',
      items: ['Composite (white) fillings', 'Inlays and onlays', 'Crowns and bridges', 'Dentures'],
    },
    {
      group: 'Gum care',
      note: 'Catching gum disease early keeps teeth.',
      items: ['Gingivitis treatment', 'Periodontitis treatment', 'Periodontal maintenance'],
    },
    {
      group: 'Root canals',
      note: 'Done in-house, with a clear explanation first.',
      items: ['Endodontic diagnosis', 'Root canal therapy', 'Endodontic surgery'],
    },
    {
      group: 'Straightening',
      note: 'Clear aligners for teens and adults.',
      items: ['Invisalign® clear aligners'],
    },
    {
      group: 'Implants and surgery',
      note: 'Missing or troublesome teeth.',
      items: ['Dental implants', 'Wisdom teeth removal', 'Extractions'],
    },
    {
      group: 'Emergencies',
      note: 'Call first. We will fit you in as soon as we can.',
      items: ['Toothache and swelling', 'Chipped or broken teeth', 'Lost fillings or crowns'],
    },
  ],

  /* Insurance carriers the clinic names on its site. */
  insurers: ['Pacific Blue Cross', 'Manulife', 'Sun Life', 'Canada Life', 'Green Shield', 'Desjardins'],
  studentPlans: [
    { name: 'Student Care Network', url: 'https://www.studentcare.ca/' },
    { name: 'My Student Plan', url: 'https://www.mystudentplan.ca/' },
  ],

  team: [
    {
      name: 'Dr. Peter Lam',
      role: 'General dentist',
      creds: 'DDS, University of Toronto, 2007 (with honours)',
      bio: 'Born and raised in Vancouver, Dr. Lam graduated with honours from the University of Toronto and received the Maxwell Rockman Award for excellence in radiology. He spent more than ten years at a non-profit community dental clinic for kids, sits in several continuing-education study groups, and keeps current on implants and Invisalign. He is a dad himself, which patients say shows.',
    },
    {
      name: 'Jane',
      role: 'Front desk and dental assistant',
      creds: '',
      bio: 'Jane is the first voice you hear and the one who keeps the clinic running: appointments, insurance claims, reminder texts, and a calm word for anyone who is nervous. Reviews mention her by name almost as often as Dr. Lam.',
    },
  ],

  reviews: [
    { name: 'Charlyn', text: 'Dr. Peter Lam was so patient, he tells you what he needs to do before proceeding. All painless.' },
    { name: 'Keeping', text: 'Our family has been with Dr Lam since 2012. He is especially patient with children.' },
    { name: 'Marie', text: 'Dr. Peter Lam has restored my faith in dentistry. Detail oriented, kind, efficient.' },
    { name: 'Tyson', text: 'He always explains my dental health in a way that allows me to make informed decisions.' },
    { name: 'Inyeob', text: 'Two young boys have been seeing Dr. Lam for over a decade. Dr. Lam is also a dad himself.' },
    { name: 'Stephanie', text: 'We started my Invisalign treatment and I’m really happy with how it’s going.' },
  ],

  faq: [
    { q: 'Do you bill my insurance directly?', a: 'Yes. We accept most insurance carriers and send the claim for you, including Pacific Blue Cross, Manulife, Sun Life, Canada Life, Green Shield and Desjardins. Bring your insurance card to every visit. If your plan has a co-payment, it is collected at the end of the appointment.' },
    { q: 'I’m a student. Is my plan covered?', a: 'We are a participating provider with Student Care Network (studentcare.ca) and My Student Plan (mystudentplan.ca). If you are on another student plan, we will still submit the claim and help you get the most from your benefits.' },
    { q: 'Do you see dental emergencies?', a: 'Yes. Call (604) 283-2216 and tell us what is going on. Toothaches, swelling, chipped teeth and lost fillings are fitted in as soon as we can.' },
    { q: 'Do you take new patients, and what should I bring?', a: 'We do. Bring your insurance card and a list of any medications. If you can, fill in the new-patient form ahead of time and email it to bfdcentre@gmail.com so your first visit starts on time.' },
    { q: 'Is Dr. Lam good with kids?', a: 'It is what families come for. Dr. Lam spent more than ten years at a non-profit community dental clinic for children, and several families in our reviews have brought their kids here since 2012. There is a toy shelf in the waiting room for a reason.' },
    { q: 'Do you offer Invisalign?', a: 'Yes. Dr. Lam provides Invisalign clear aligners for teens and adults. Book a consultation and he will tell you honestly whether it is the right fit.' },
    { q: 'Is there parking?', a: 'There is plenty of free street parking nearby. Metered street parking on the block is available from 10 am at $1 an hour.' },
    { q: 'What payment do you accept?', a: 'Most major credit cards and cash, on top of direct insurance billing. Ask Jane at the front desk about anything plan-specific.' },
  ],

  /* From the Google Business Profile. The old website shows two different Monday/Friday schedules; confirm with the owner. */
  hours: [
    ['Monday', 'Closed'],
    ['Tuesday', '10 am – 6 pm'],
    ['Wednesday', '10 am – 6 pm'],
    ['Thursday', '9 am – 5 pm'],
    ['Friday', '9 am – 5 pm'],
    ['Saturday', '9 am – 5 pm'],
    ['Sunday', 'Closed'],
  ],
};
