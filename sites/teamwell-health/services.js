/* TeamWell Health — all editable content lives here. main.js renders it.
   Sources: teamwell.ca (Team and Contact pages, old appointment form), Google Business Profile (rating, reviews). */
window.TEAMWELL = {
  phone: '(604) 603-8558',
  phoneHref: 'tel:+16046038558',
  email: 'burnaby@teamwell.ca',
  fax: '1-866-489-5539',
  address: ['#402 – 3999 Henning Drive', 'Burnaby, BC V5C 6P9'],
  mapsUrl: 'https://maps.google.com/?q=3999+Henning+Dr+%23402,+Burnaby,+BC+V5C+6P9',
  rating: '4.9',
  reviewCount: 36,

  /* Hours: Google lists none and the old site lists none. Fill in as [day, 'h:mm am – h:mm pm'] rows,
     e.g. ['Monday', '9:00 am – 6:00 pm']. While empty, the page shows "Call for hours". */
  hours: [],
  hoursNote: 'Reviews mention after-work appointments. Call for this week\'s times.',

  /* "Not sure who to see?" chooser. `reason` is dropped into the request form. */
  concerns: [
    { id: 'back', label: 'Back, neck or shoulder pain', service: 'Chiropractic', who: 'Dr. Eric Jang, DC or Dr. Brenton Cheng, DC',
      text: 'Hands-on assessment, manual adjustment and soft-tissue work. If more than one discipline would help, you hear it on day one.', reason: 'Back, neck or shoulder pain' },
    { id: 'crash', label: 'I was in a car accident', service: 'Chiropractic · ICBC claim', who: 'Dr. Brenton Cheng, DC or Dr. Eric Jang, DC',
      text: 'Whiplash and crash injuries are a regular part of the clinic. Bring your ICBC claim number; Dr. Brenton has years of experience with car-accident patients.', reason: 'Car accident (ICBC claim)' },
    { id: 'nd', label: 'Energy, digestion, sleep or stress', service: 'Naturopathic medicine', who: 'Dr. Karen Jang, ND',
      text: 'A longer first visit that looks at the whole picture: history, habits, testing where it helps, and a plan built on preventative care and natural therapies.', reason: 'Naturopathic visit' },
    { id: 'feet', label: 'Foot, knee or hip pain when I walk', service: 'Custom foot orthotics', who: 'Chiropractic team',
      text: 'Your feet are scanned in the clinic and the orthotics are made to the scan. Often paired with an adjustment plan for the joints above.', reason: 'Custom foot orthotics' },
    { id: 'head', label: 'Headaches or tension', service: 'Chiropractic or acupuncture', who: 'Chiropractic team · acupuncture',
      text: 'Neck and upper-back restriction is a common driver. The team can combine adjustment with acupuncture when that fits.', reason: 'Headaches or tension' },
    { id: 'first', label: 'Never seen a chiro or ND before', service: 'Start with a conversation', who: 'Any practitioner',
      text: '“If you\'ve never been to a chiropractor or a naturopath, this is the perfect place for your first visit.” — Annie, Google review. Everything is explained before it happens.', reason: 'First-time visit' },
  ],

  services: [
    { id: 'chiropractic', name: 'Chiropractic', who: 'Dr. Eric Jang, DC · Dr. Brenton Cheng, DC',
      blurb: 'Manual adjustments and mobilization for the spine and joints, with soft-tissue machines for the muscle around them. Thorough first assessments; a plan you understand before treatment starts.',
      items: ['Back, neck and shoulder pain', 'Headaches that start in the neck', 'Car-accident and whiplash rehab (ICBC)', 'Sports and golf injuries', 'Monthly maintenance visits'],
      photo: { src: 'photos/room-two.jpg', w: 1600, h: 1067, alt: 'A TeamWell treatment room: adjusting table, anatomy charts and a window onto trees' } },
    { id: 'naturopathic', name: 'Naturopathic medicine', who: 'Dr. Karen Jang, ND',
      blurb: 'Health as physical and mental well-being, reached through preventative care, education and natural therapies. Patients come to Dr. Karen when they have not found answers elsewhere.',
      items: ['Full history and whole-body assessment', 'Preventative and lifestyle care', 'Natural therapies, explained', 'Works alongside your chiropractic plan'] },
    { id: 'acupuncture', name: 'Acupuncture', who: 'In the same suite',
      blurb: 'Fine needles at specific points to ease pain and tension. Booked on its own or as part of a chiropractic or naturopathic plan.',
      items: ['Pain and muscle tension', 'Stress and sleep', 'Combined with adjustment when it fits'] },
    { id: 'orthotics', name: 'Custom foot orthotics', who: 'Chiropractic team',
      blurb: 'Feet are scanned in the clinic, not traced on paper, and the orthotics are built to that scan. Good for heel and arch pain, and for knees and hips that complain after a long day on your feet.',
      items: ['In-clinic foot scan', 'Made to your feet, not a stock size', 'Often covered by extended-health plans'],
      photo: { src: 'photos/orthotics-scanner.jpg', w: 1600, h: 1144, alt: 'The orthotics station: foot scanner, pressure plate, laptop showing a foot scan and finished insoles' } },
  ],

  team: [
    { name: 'Dr. Karen Jang', cred: 'ND · Naturopathic doctor',
      bio: 'Dr. Karen believes health is a state of physical and mental well-being that can be reached with preventative care, education and natural therapies. She is also a clinic supervisor at CCNM Boucher Campus, where she oversees naturopathic interns in their clinical year. Off duty: family, tennis, and running the trails around Vancouver.',
      photo: { src: 'photos/dr-karen-jang.jpg', w: 1011, h: 1200, alt: 'Dr. Karen Jang, naturopathic doctor at TeamWell Health' } },
    { name: 'Dr. Eric Jang', cred: 'DC · Chiropractor',
      bio: 'Dr. Eric\'s philosophy of care is simple: act in the best interest of the patient, and make sure every health professional involved in that care is on the same page. Patients describe him as thorough and easy to book around work. Away from the clinic he plays tennis, helps coach his son\'s hockey team and spends time with his family.' },
    { name: 'Dr. Brenton Cheng', cred: 'DC · Chiropractor',
      bio: 'Dr. Brenton previously practised in Washington State and Oregon and is experienced with car-accident injuries and golf athletes. An avid volleyball player and long-distance runner, born and raised in Vancouver, and a die-hard Canucks fan.' },
  ],

  reviews: [
    { name: 'Ads', text: 'Definitely the best that North Burnaby has to offer. A mix of manual re-alignment techniques as well as some massage technique machines.', tag: 'Chiropractic' },
    { name: 'Madinah', text: 'Dr. Eric is fantastic, very thorough. Monthly visits keep me in check.', tag: 'Dr. Eric · maintenance' },
    { name: 'Darren', text: 'Was rear ended really hard and injured my neck. The results were amazing and rehabilitation went smooth.', tag: 'Car-accident rehab' },
    { name: 'Katherine', text: 'Dr. Karen is also a great naturopathic doctor that has helped me, my friends, and family find answers.', tag: 'Dr. Karen · naturopathic' },
    { name: 'Elsie', text: 'Dr. Jang is always flexible in scheduling, making it easy for me to book appointments after work.', tag: 'Scheduling' },
    { name: 'Annie', text: 'If you\'ve never been to a chiropractor or a naturopath, this is the perfect place for your first visit.', tag: 'First visit' },
  ],

  faq: [
    { q: 'How do I find the clinic the first time?', a: '3999 Henning Drive is an office building just off Lougheed Highway near Gilmore Avenue, a short walk from Gilmore SkyTrain station. Take the elevator to the fourth floor; TeamWell is suite 402. If you are unsure, call (604) 603-8558 from the lobby and the front desk will talk you in.' },
    { q: 'Do I need a referral?', a: 'No. Chiropractors and naturopathic doctors in BC are primary-contact practitioners, so you can book directly. If you are claiming through ICBC or an extended-health plan, check whether that plan wants a doctor\'s note.' },
    { q: 'I was in a car accident. What happens?', a: 'Tell us when you book and bring your ICBC claim number and the date of the crash. ICBC pre-approves a set number of chiropractic visits after a collision, so most patients start treatment right away. Dr. Brenton and Dr. Eric both treat crash injuries, and reviews from rear-end collisions describe a smooth recovery.' },
    { q: 'Can I come in after work?', a: 'Patients regularly book evening slots after work; the old appointment form even offered a “morning / evening / flexible” choice. Hours change, so call or send the request form with the time you can make.' },
    { q: 'What happens at a first visit?', a: 'A conversation first: what hurts, when it started, what you have tried. Then a physical assessment and a plain-language explanation of what is going on and what the plan is. Treatment usually begins the same day if it is appropriate. Wear something you can move in.' },
    { q: 'What does a naturopathic doctor do?', a: 'Dr. Karen takes a longer first appointment to look at the whole picture: history, sleep, diet, stress, and testing where it helps. The plan leans on preventative care, education and natural therapies, and it runs alongside, not instead of, your medical doctor and your chiropractic care.' },
    { q: 'How do custom orthotics work?', a: 'Your feet are scanned in the clinic and the orthotics are manufactured to that scan. They take a couple of weeks to arrive, and many extended-health plans cover part or all of the cost. Ask the front desk for a quote and what your plan needs.' },
    { q: 'Does my extended-health plan cover this?', a: 'Most BC plans include chiropractic, naturopathic and acupuncture visits, with a yearly limit. Bring your plan details to your first visit and the front desk will tell you what applies and how to claim.' },
  ],
};
