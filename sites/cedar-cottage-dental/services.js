/* Cedar Cottage Dental — page data. Edit services, dentists, reviews, FAQ and hours here; main.js renders them.
   Sources: cedarcottagedental.com (About, Our Dentists, Contact pages) and the Google Business Profile (hours, rating, reviews). */
window.CCD = {
  name: 'Cedar Cottage Dental',
  phoneDisplay: '(604) 684-7717',
  phoneTel: '+16046847717',
  email: 'info@cedarcottagedental.com',
  address: '3935 Knight St, Vancouver, BC V5N 3L8',
  maps: 'https://maps.google.com/?q=Cedar+Cottage+Dental,+3935+Knight+St,+Vancouver,+BC+V5N+3L8',
  /* Replace PLACEHOLDER with the clinic's Formspree form id (formspree.io) to make the request form live. */
  formAction: 'https://formspree.io/f/PLACEHOLDER',
  rating: '4.9',
  reviewCount: 48,

  /* Services, grouped the way the clinic's About page lists them. No prices: the clinic quotes after an exam. */
  services: [
    {
      id: 'checkups', name: 'Check-ups and hygiene',
      lead: 'The visits that keep small problems small. Patients of all ages, from first teeth to dentures.',
      items: [
        { name: 'New patient exam', note: 'A full look at your teeth and gums, and a plain-language conversation about where things stand.' },
        { name: 'Cleaning and scaling', note: 'Done gently. Patients mention it in their reviews.' },
        { name: 'Regular check-ups', note: 'On a schedule that fits your mouth, not a one-size-fits-all calendar.' },
        { name: 'Kids and teens', note: 'Families bring the whole household. Several patients started here as children.' },
      ],
    },
    {
      id: 'repairs', name: 'Fillings and repairs',
      lead: 'Conservative treatment first: fix what needs fixing and leave healthy tooth alone.',
      items: [
        { name: 'Fillings', note: 'For cavities, chips and worn edges.' },
        { name: 'Root canal treatment', note: 'To save a tooth that is infected or badly decayed instead of removing it.' },
        { name: 'Crowns', note: 'A full cover for a tooth that is cracked, heavily filled or has had a root canal.' },
        { name: 'Broken tooth repair', note: 'Call the same day you notice it and we will find the earliest opening.' },
      ],
    },
    {
      id: 'surgery', name: 'Extractions and implants',
      lead: 'When a tooth cannot be saved, and what goes in its place.',
      items: [
        { name: 'Extractions', note: 'Including teeth too damaged to restore, with aftercare instructions you can actually follow.' },
        { name: 'Dental implants', note: 'A permanent replacement for a missing tooth, planned and placed here.' },
      ],
    },
    {
      id: 'smile', name: 'Straighter teeth and cosmetic',
      lead: 'Offered by certified providers on the team.',
      items: [
        { name: 'Invisalign', note: 'Clear aligners instead of brackets. Ask whether your case suits them.' },
        { name: 'Botox Cosmetic', note: 'Available at the clinic from certified providers.' },
      ],
    },
  ],

  dentists: [
    {
      name: 'Dr. Tiffany C. Cheung', role: 'Dentist',
      credentials: ['DMD, UBC Faculty of Dentistry', 'Member, Vancouver & District Dental Society for 10 years', 'Continuing education every year'],
      bio: 'Born and raised in Vancouver. Tiffany started in pharmaceutical sciences at UBC, realised dentistry was her calling, and has practised across Vancouver, Richmond, Burnaby and Port Coquitlam, with a stretch in Fort Nelson. Patients describe her hands as gentle and her memory for their lives as uncanny.',
      quote: 'Gentle, conservative and effective treatment.',
    },
    {
      name: 'Dr. Warrick Yu', role: 'Dentist',
      credentials: ['DMD, UBC, 2005', 'Sessional clinical instructor, UBC Faculty of Dentistry', 'Interests in endodontics, oral surgery and implantology'],
      bio: 'Born in Hong Kong, in Vancouver since 1991. Dr. Yu has practised general dentistry since 2005 and teaches the next generation of dentists at UBC. Outside the clinic: family, new restaurants and travel.',
      quote: 'Root canals, surgery and implants are his focus.',
    },
    {
      name: 'Dr. Camellia Chan', role: 'Dentist',
      credentials: ['DMD, UBC', 'Pacific Coast Society for Prosthodontics award for crown and bridge work', 'Associate Fellow, World Clinical Laser Institute', 'Certified Botox Cosmetic and Invisalign provider'],
      bio: 'Raised in Richmond, Camellia completed a BSc in Cell Biology and Genetics at UBC before dentistry. She takes a conservative approach and works at making the visit comfortable, even enjoyable.',
      quote: 'Comfortable, conservative, and up to date.',
    },
  ],

  /* Real Google reviews, trimmed. First names only. */
  reviews: [
    { name: 'Norris', text: 'Dr. Tiffany Cheung has been my dentist for over 10 years. Truly feels like a long-time family friend.', tag: 'Patient for 10+ years' },
    { name: 'Christina', text: 'Dr. Cheung was very gentle throughout the whole process. Her hands were super soft during scaling.', tag: 'Cleaning and scaling' },
    { name: 'Megan', text: 'My family and I have been going to Dr. Cheung for years. She is incredibly experienced, and it shows.', tag: 'Family patient' },
    { name: 'Steve', text: 'I’ve been going to Cedar Cottage Dental since I was a kid. Even when they moved, I stayed.', tag: 'Patient since childhood' },
    { name: 'D M', text: 'Dr. Cheung is gentle and accommodating for me and my kids. I also recently tried Botox done by her.', tag: 'Kids and Botox' },
    { name: 'Gabriel', text: 'Always amazes me how she remembers even the smallest details of our conversations.', tag: 'Long-time patient' },
  ],

  faq: [
    { q: 'Are you taking new patients?', a: 'Yes. Patients of all ages are welcome. Send a request through the form on this page or call (604) 684-7717 and the front desk will find you a first appointment.' },
    { q: 'Do you see children?', a: 'Yes. Cedar Cottage Dental is a family practice, and a number of current patients have been coming since they were kids. Book siblings back to back if that is easier.' },
    { q: 'Can I walk in?', a: 'The clinic runs by appointment, so call first. If you have a toothache or a broken tooth, say so when you call and we will look for the earliest opening.' },
    { q: 'Do you work with dental insurance?', a: 'Bring your plan details to your first visit and the front desk will go over what your plan covers before treatment starts. Ask about direct billing when you book.' },
    { q: 'What happens at a first visit?', a: 'An examination, a conversation about your current oral health, and a treatment plan explained in plain language. You are told the options before anything is decided.' },
    { q: 'Do you offer Invisalign or Botox?', a: 'Yes, both are available from certified providers on the team. Mention it when you book so you are scheduled with the right dentist.' },
    { q: 'How do I get there?', a: 'The clinic is at 3935 Knight Street, on the ground floor at Knight and Kingsway (Kensington Point). It is easy to reach on foot, by bus along Knight Street or Kingsway, or by car.' },
    { q: 'I am nervous about the dentist. Is that a problem?', a: 'No. Reviews use the word gentle more than any other. Tell us when you book and the dentist will go at your pace and explain each step before it happens.' },
  ],

  /* Hours from the Google Business Profile. 24-hour strings; null = closed. */
  hours: [
    ['Monday', '10:00', '18:00'],
    ['Tuesday', '10:00', '18:00'],
    ['Wednesday', null, null],
    ['Thursday', '10:00', '18:00'],
    ['Friday', '10:00', '18:00'],
    ['Saturday', '10:00', '18:00'],
    ['Sunday', null, null],
  ],
};
