/* Brentwood Chiropractic & Sports Rehab Centre — page data.
   Edit fees, people, reviews, FAQ and hours here; main.js renders them.
   Fees are as listed on the clinic's own online booking page (Cliniko), read 2 Nov 2026. */
window.BCSRC = {
  name: 'Brentwood Chiropractic & Sports Rehab Centre',
  phoneDisplay: '(604) 299-7199',
  phoneTel: '+16042997199',
  booking: 'https://brentwood-chiropractic-sports-rehab-centre.cliniko.com/bookings',
  maps: 'https://maps.google.com/?q=Brentwood+Chiropractic+%26+Sports+Rehab+Centre,+1160+Douglas+Rd,+Burnaby,+BC',
  address: ['#101 – 1160 Douglas Road', 'Burnaby, BC V5C 4Z6'],

  /* Care, grouped. "fee" strings are shown as-is. */
  services: [
    {
      id: 'chiropractic', group: 'Chiropractic', who: 'Dr. Chris Csabai, BSc, DC', cta: 'Book chiropractic',
      blurb: 'Adjustments to joints, soft tissue release and strengthening exercises, in whatever mix your problem needs. The aim is fewer visits over time, not a standing appointment.',
      items: [
        { name: 'First visit', time: '30 – 60 min', fee: '$145', note: 'History, full exam, treatment the same day' },
        { name: 'First visit, two or more body regions', time: '60 min', fee: '$160' },
        { name: 'Follow-up visit', time: '10 – 15 min', fee: '$85' },
        { name: 'Follow-up, extra time or extra region', time: '15 – 25 min', fee: '$85' },
        { name: 'Returning after a year, or a new complaint', time: '20 – 30 min', fee: '$115' },
      ],
      foot: 'Billed directly to most extended health plans.',
    },
    {
      id: 'massage', group: 'Massage therapy', who: 'Robyn Thompson, RMT', cta: 'Book massage',
      blurb: 'Registered massage therapy for sports injuries, stress and chronic fatigue, tension headaches and migraines, car-accident recovery, desk-work strain and prenatal care.',
      items: [
        { name: '30 minutes', fee: '$80' },
        { name: '45 minutes', fee: '$105' },
        { name: '60 minutes', fee: '$125' },
        { name: '75 minutes', fee: '$155' },
        { name: '90 minutes', fee: '$185' },
        { name: '120 minutes', fee: '$235' },
      ],
      foot: 'Paid at the visit; you get an official receipt for your insurer.',
    },
    {
      id: 'orthotics', group: 'Custom orthotics', who: 'Fitted by Dr. Chris', cta: 'Call about orthotics', tel: true,
      blurb: 'For fallen arches, foot and lower-leg pain, and the summer-footwear problems Dr. Chris sees every year. Bring the shoes you wear most; call first so Maria can check your coverage.',
      items: [
        { name: 'Custom foot orthotics', fee: '$550' },
        { name: 'Orthotics pick-up and fitting', fee: 'Included' },
      ],
      foot: 'Call before booking: some plans need a prescription or a gait report.',
    },
    {
      id: 'claims', group: 'ICBC and work injuries', who: 'Approved claims', cta: 'Call about a claim', tel: true,
      blurb: 'After a car accident, an approved ICBC claim covers your chiropractic visits here. Bring your claim number. If the accident was more than 12 weeks ago, call first so we can get pre-approval.',
      items: [
        { name: 'ICBC first visit', fee: '$0' },
        { name: 'ICBC follow-up, one injured region', fee: '$0' },
        { name: 'ICBC follow-up, two or more regions', fee: '$10' },
        { name: 'WorkSafeBC claim', fee: 'Call first' },
      ],
      foot: 'WorkSafeBC billing rules changed in 2025; call and we will tell you what is possible.',
    },
  ],

  conditions: [
    'Low back pain and stiffness', 'Neck pain', 'Sciatica', 'Sports injuries', 'Work-related injuries', 'Joint and muscle pain',
    'Tension headaches and migraines', 'Foot, arch and lower-leg pain', 'Car-accident injuries', 'Yard-work and desk-work strain',
  ],

  /* A real sequence: this is what a course of care here looks like, in order. */
  steps: [
    { title: 'A proper history and exam', text: 'Your first visit runs 30 to 60 minutes: what hurts, what has hurt before, then orthopaedic, muscle and nerve testing. You leave with a diagnosis, not a guess.' },
    { title: 'Muscles first, then the adjustment', text: 'Dr. Chris loosens the tissue around a joint before he adjusts it. Patients who have been elsewhere notice the difference on day one.' },
    { title: 'The whole body, not just the sore spot', text: 'A sore knee can start at the foot; a stiff neck can start at the desk. Treatment follows the cause, and you are told what it is.' },
    { title: 'Stretches and exercises you do at home', text: 'Every plan comes with the few things to do between visits, and the ones to avoid for now so they do not irritate the problem.' },
    { title: 'Told when you are done', text: 'When you are well, you are discharged. Come back if something new happens, or for a tune-up before the season starts.' },
  ],

  team: [
    {
      name: 'Dr. Chris Csabai', creds: 'BSc, DC', role: 'Chiropractor and clinical director',
      bio: 'A local Vancouverite: BSc at UBC in 1997, then a Doctor of Chiropractic at the Southern California University of Health Sciences, graduating summa cum laude. In practice since 2002, he has worked numerous sporting events on performance and recovery, and treats everyone from national and select youth athletes to people who just overdid the pressure washing.',
    },
    {
      name: 'Robyn Thompson', creds: 'RMT', role: 'Registered massage therapist',
      bio: 'Practising exclusively in health and fitness settings since 2002, with a focus on sports rehabilitation, stress and chronic-fatigue recovery, ergonomics retraining, tension headaches and migraines, motor-vehicle injuries and prenatal care. A past IDFA athletics competitor; she tailors every plan to the person and teaches the home care that keeps it working.',
      link: { href: 'http://robynthompsonrmt.com/', label: 'Robyn’s treatment guidelines' },
    },
    {
      name: 'Maria', creds: '', role: 'Front desk',
      bio: 'Books your visits, sorts out direct billing and ICBC paperwork, and will find you a time that works when the online calendar does not show one.',
    },
  ],

  founder: {
    name: 'Dr. Joe Csabai', creds: 'MSc, DC', years: 'Founder · in practice 45 years · retired at 80',
    text: 'Graduated from the Chiropractic Institute of New York in 1967 and became a pioneer of sports chiropractic in Vancouver: a professor of physical education, a FIFA-certified professional soccer coach who had played in Hungary and Spain, and the chiropractor to CFL, NHL and Olympic athletes, and in Italy to AC Milan players and marathoners. He believed each patient deserved to be cared for like an athlete, and practised that until his last day in the clinic.',
    quote: 'Each patient deserves to be cared for like an athlete.',
  },

  timeline: [
    { year: '1967', text: 'Dr. Joe Csabai graduates in New York and begins 45 years of practice in Vancouver, treating pro athletes and neighbours alike.' },
    { year: '2002', text: 'Dr. Chris Csabai, UBC and SCUHS graduate, joins his father. The Brentwood Chiropractic & Sports Rehab Centre takes shape on Halifax Street.' },
    { year: '2014', text: 'Direct billing to extended health plans and online booking, so most patients pay nothing at the desk.' },
    { year: '2018', text: 'The Halifax Street building is redeveloped; the clinic moves two blocks to a ground-floor space at 1160 Douglas Road, with free parking out front.' },
    { year: 'Today', text: 'Families on their second and third generation of Csabai care, and 4.9 stars on Google.' },
  ],

  rating: { score: '4.9', count: 39 },
  reviews: [
    { name: 'Winston', note: 'Chiropractic', text: 'Most chiropractor visits would just be a 5-min bone-cracking session, but with Chris he takes the time to loosen up the muscles.' },
    { name: 'Jessica', note: 'Chiropractic', text: 'He is the first and the only one who told me not to go back to see him when I get well.' },
    { name: 'Bel', note: '40-year patient', text: 'My family and I have been patients with Doctors Csabai for about 40 years.' },
    { name: 'Andy', note: 'Chiropractic', text: 'He takes a more full body approach rather than focusing just on joints and bones.' },
    { name: 'Robyn', note: 'Chiropractic', text: 'Dr. Chris is the fourth chiropractor I have visited. After being treated by him, I will not be switching again.' },
    { name: 'Caroline', note: 'Assessment and treatment', text: 'Assessment and treatment are just absolutely excellent. I cannot recommend him enough.' },
  ],

  faq: [
    { q: 'What happens on a first visit?', a: 'Plan on 30 to 60 minutes and arrive 5 to 10 minutes early for the paperwork. Dr. Chris takes a full history of the current problem and anything similar before it, then does a physical exam with orthopaedic, muscle and nerve testing. He explains the diagnosis and the plan, shows you the home stretches or exercises, and in almost every case treats you the same day.' },
    { q: 'Do you bill my extended health plan directly?', a: 'Yes, for chiropractic visits, at no charge, since 2014. The clinic bills most major insurers (Canada Life, Manulife, Sun Life, Desjardins, iA, Johnson, ClaimSecure, GroupHealth and more). Massage therapy is paid at the visit and you receive an official receipt to submit yourself. If you do not see your insurer in the list, call and ask.' },
    { q: 'I was in a car accident. What does it cost?', a: 'With an approved ICBC claim, the first visit and single-region follow-ups cost you nothing; follow-ups for two or more injured regions are $10. Bring your claim number. If the accident was more than 12 weeks ago, call before booking so the clinic can get pre-approval and your visits stay covered.' },
    { q: 'Will I have to keep coming forever?', a: 'No. The approach here is adjustments plus soft-tissue work plus strengthening, so that you need fewer visits over time. When you are well you are told so and discharged. Several reviews mention it because it is unusual.' },
    { q: 'How do I book massage with Robyn?', a: 'Through the same online booking page, choosing a massage length from 30 to 120 minutes, or by phone. Massage is paid in full at the visit, with a receipt for your insurer. Please read Robyn’s treatment guidelines before your first appointment.' },
    { q: 'Do you make custom orthotics?', a: 'Yes. Custom foot orthotics are $550, fitted by Dr. Chris. Call the office before booking: Maria will check what your plan needs for coverage and tell you which shoes to bring.' },
    { q: 'What if I need to cancel?', a: 'Give at least 24 hours’ notice. Appointments cancelled with less than 24 hours are charged the full visit fee.' },
    { q: 'Where do I park, and which bus?', a: 'Free street parking in front of the building on both sides of Douglas Road, and behind the building. By transit, take the bus along Gilmore Avenue (it connects Gilmore SkyTrain and Hastings), get off at William Street and walk two residential blocks west. The clinic is ground level, across from the Steamworks taproom at Douglas and William.' },
  ],

  hours: [
    ['Monday', '9:00 am – 6:00 pm'], ['Tuesday', '9:00 am – 6:00 pm'], ['Wednesday', '9:00 am – 6:00 pm'],
    ['Thursday', '9:00 am – 6:00 pm'], ['Friday', '9:00 am – 6:00 pm'], ['Saturday', 'Closed'], ['Sunday', 'Closed'],
  ],
};
