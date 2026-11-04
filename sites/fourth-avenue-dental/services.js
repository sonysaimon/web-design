/* Fourth Avenue Dental Clinic — page data. Edit this file to change services, team, reviews, FAQ or hours; main.js renders it. */
window.FAD = {
  phone: '(604) 736-2505',
  phoneHref: 'tel:+16047362505',
  email: 'appts@4thavenuedental.ca',
  booking: 'https://calendly.com/appts-2',          // "Book Now – Dental" link on the clinic's current site
  bookingHygiene: 'https://calendly.com/nishantgoswami007', // "Book Now – Hygiene" link on the clinic's current site
  maps: 'https://maps.google.com/?q=1905+W+4th+Ave,+Vancouver,+BC+V6J+1M7',

  /* Services, grouped the way a patient thinks about them. Text is tightened from the clinic's own service pages. */
  groups: [
    {
      id: 'everyday',
      name: 'Everyday care',
      lede: 'The visits that keep small problems small.',
      items: [
        { name: 'Check-ups and cleaning', text: 'Most patients come every six months, some every three. Scaling, polishing, fluoride and a full exam, with x-rays when they are needed.' },
        { name: 'Fillings', text: 'Tooth-coloured composite placed in layers, or gold and porcelain inlays made by a technician over two visits.' },
        { name: 'Root canal', text: 'Removes the infection inside a tooth so you can keep it. The procedure relieves the pain of an abscess rather than causing it.' },
        { name: 'Extractions', text: 'Including wisdom teeth. Most are simple; broken or multi-rooted teeth are removed surgically with care.' },
        { name: 'Gum care', text: 'Periodontal cleanings, root planing and scaling, and home-care coaching from the hygiene team to stop gingivitis getting worse.' }
      ]
    },
    {
      id: 'restore',
      name: 'Repair and replace',
      lede: 'For a tooth that is broken, worn or missing.',
      items: [
        { name: 'Crowns', text: 'A porcelain cap for a broken, heavily filled or root-canal-treated tooth. Two appointments, shade-matched to your own teeth.' },
        { name: 'Bridges', text: 'A fixed false tooth anchored to crowns on either side. Restores chewing and stops neighbouring teeth drifting.' },
        { name: 'Dental implants', text: 'A titanium root in the jaw with a porcelain tooth on top. Replaces one tooth, several, or steadies a denture.' },
        { name: 'Gold foil fillings', text: '24-carat gold worked directly into the tooth, a craft the clinic says fewer than 250 practices worldwide still offer.' }
      ]
    },
    {
      id: 'smile',
      name: 'Smile and cosmetic',
      lede: 'Straighter, whiter, or a full plan for the face as a frame.',
      items: [
        { name: 'Invisalign and braces', text: 'Clear aligners changed about every two weeks, planned in 3-D from start to finish. Traditional braces too. Never too late to start.' },
        { name: 'Teeth whitening', text: 'In-office laser whitening in about an hour, or custom take-home trays worn for two weeks. Always after an exam and cleaning.' },
        { name: 'Veneers', text: 'Thin porcelain facings bonded to front teeth to fix chips, gaps and misalignment. Natural, translucent and long lasting.' },
        { name: 'Artistic dentistry', text: 'A complete plan for head and neck aesthetics, including orthodontics, from Dr. Goswami’s scientific background and artistic eye.' },
        { name: 'Botox Cosmetic', text: 'For frown lines, forehead lines and crow’s feet. Ten to fifteen minute sessions; results last up to four months.' }
      ]
    }
  ],

  team: [
    {
      name: 'Dr. Nishant Goswami',
      role: 'Dentist and owner',
      text: 'Dr. Goswami treats the head and face as the frame for your teeth. A new patient exam maps your dental and facial structure first, so the plan you get is built around you rather than a procedure list. Care stays in-house whenever possible, which means fewer referrals and fewer trips.',
      instagram: 'https://www.instagram.com/dr.nishantgoswami007'
    },
    {
      name: 'The hygiene and front-desk team',
      role: 'The people you will see most',
      text: 'Reviews mention the hygienists for being gentle and working around sensitivities, and the front desk for sorting out insurance and payment without fuss.'
    }
  ],

  /* Real Google reviews, trimmed, first names only. */
  reviews: [
    { name: 'Colleen', text: 'They made me feel comfortable, cared for, and never judged me on the condition of my teeth.' },
    { name: 'Don', text: 'A well staffed, modern and clean dental clinic. Modern equipment made x-rays fast.' },
    { name: 'Doireann', text: 'They consistently make me feel safe, comfortable, and well looked after.' },
    { name: 'Dia', text: 'The hygienist and dentist were very gentle and accommodating of my sensitivities.' },
    { name: 'Jimmy', text: 'They made the payment process manageable for us during a stressful time.' }
  ],

  faq: [
    { q: 'Are you taking new patients?', a: 'Yes. Book online, call (604) 736-2505 or email appts@4thavenuedental.ca. Patients come from across Vancouver, the North Shore, Burnaby, New Westminster and Richmond.' },
    { q: 'How does booking work?', a: 'The Book button opens the clinic’s Calendly page, where you pick a time. If you would rather talk to a person, call during opening hours and the front desk will find you a slot.' },
    { q: 'Do you help with insurance and payment?', a: 'Yes. Bring your plan details and the front desk will help with the claim. If a treatment is more than you planned for, ask about payment arrangements before anything starts.' },
    { q: 'What happens at a first visit?', a: 'We take your medical history and give you time to meet your dentist. The exam maps your teeth and facial structure, so you leave with a clear picture of what is needed and what can wait.' },
    { q: 'How often should I come in?', a: 'Most people every six months for a hygiene visit and exam. Some need every three months. We will tell you which, and we will call you when it is time.' },
    { q: 'I knocked out a tooth. What do I do?', a: 'Rinse it, do not scrub it, keep it in your cheek or in milk, and come in straight away. A tooth can often be saved if it is re-implanted quickly. Call us first so we are ready.' },
    { q: 'Is whitening safe for sensitive teeth?', a: 'Whitening is done only after an exam and cleaning. It does not change the colour of existing fillings or crowns, and we will say so if sensitivity or gum disease means it is not the right choice.' },
    { q: 'What about kids?', a: 'Children should be seen by their first birthday or six months after the first tooth. Make brushing fun and let them copy you; we can show them the rest.' }
  ],

  /* From the clinic’s Google listing. Sunday differs from the old website (which says 9 am – 5 pm); confirm with the owner. */
  hours: [
    ['Monday', '8 am – 6 pm'],
    ['Tuesday', '8 am – 6 pm'],
    ['Wednesday', '8 am – 6 pm'],
    ['Thursday', '8 am – 6 pm'],
    ['Friday', '8 am – 8 pm'],
    ['Saturday', '8 am – 6 pm'],
    ['Sunday', 'Closed']
  ],
  /* Same hours as 24h numbers for the "open now" line: [open, close] or null. Index 0 = Sunday. */
  hours24: [null, [8, 18], [8, 18], [8, 18], [8, 18], [8, 20], [8, 18]]
};
