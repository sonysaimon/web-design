/* Central Park Chiropractic & Massage — page data. Edit text, fees, team, reviews, FAQ and hours
   here; main.js renders it. Fees are from the clinic's own "Fees & Billing" page (old site) and
   must be re-confirmed with the owner before publishing. */
window.CPC = {
  name: 'Central Park Chiropractic & Massage',
  phoneDisplay: '(604) 439-1230',
  phoneTel: '+16044391230',
  fax: '604-439-9426',
  email: 'centralparkhealth@telus.net',
  booking: 'https://centralparkchiro.mrxsolutions.com/onlinebooking/',
  address: '3977 Kingsway, Burnaby, BC V5H 1Y7',
  maps: 'https://www.google.com/maps/search/?api=1&query=Central+Park+Chiropractic+%26+Massage+3977+Kingsway+Burnaby+BC',
  rating: '4.8',
  reviewCount: 33,

  /* Care, grouped the way the clinic lists it. Techniques come from the old site's home page. */
  services: [
    {
      id: 'chiropractic', name: 'Chiropractic', who: 'Dr. Rupi Kaila, DC',
      lede: 'A thorough exam first, then a plan built for you: precise adjustments, soft-tissue work and the exercises that keep the problem from coming back.',
      items: ['Diversified and Activator adjustments', 'Active Release Technique (ART)', 'Flexion-distraction and cervical distraction', 'Drop-table and extremity adjustments', 'Trigger point and myofascial release', 'Active rehab and corrective exercise', 'Maintenance and wellness visits'],
      fee: ['Initial visit $110', 'Follow-up $75'],
    },
    {
      id: 'massage', name: 'Registered Massage Therapy', who: 'Four RMTs, 30 to 90 minutes',
      lede: 'Deep tissue, Swedish, myofascial release, trigger point work and stretching, chosen for what your body needs that day. Often paired with an adjustment.',
      items: ['Neck, shoulder and low-back tension', 'Recovery after a car accident or sports injury', 'Pre- and post-natal massage', 'Headaches and stress-related tightness', 'Sessions in English, Portuguese or Mandarin'],
      fee: ['30 min $90 · 45 min $110', '60 min $135 · 90 min $220'],
    },
    {
      id: 'shockwave', name: 'Shockwave Therapy', who: 'Radial ESWT',
      lede: 'Non-surgical treatment for stubborn tendon, heel and joint pain. Pulses of energy break down scar tissue and calcium deposits and get blood moving so the tissue can heal.',
      items: ['Plantar fasciitis and heel spurs', 'Achilles and patellar (jumper’s knee) tendinopathy', 'Tennis and golfer’s elbow', 'Calcific rotator cuff tendinitis', 'Hamstring injuries and stress fractures'],
      fee: ['Initial visit $120', 'Follow-up $100 per area'],
    },
    {
      id: 'orthotics', name: 'Custom Orthotics & Gait Scan', who: 'TOG GaitScan + 3D laser cast',
      lede: 'You walk across a pressure plate; thousands of sensors map how your foot loads. A 3D scan then casts orthotics or orthopaedic shoes made for your feet.',
      items: ['Heel, arch and forefoot pain', 'Flat feet, over-pronation and bunions', 'Knee, hip and low-back pain that starts at the feet', 'Orthopaedic shoes fitted with orthotics'],
      fee: ['Orthotics $400', 'Exam and casting $100'],
    },
    {
      id: 'compression', name: 'Compression Stockings', who: 'Sigvaris gradient hosiery',
      lede: 'Measured and fitted in the clinic. Firmest at the ankle, lighter up the leg, so blood moves the right way.',
      items: ['Tired, aching or swollen legs', 'Standing or sitting all day', 'Varicose veins and venous insufficiency', 'Pregnancy and long-haul travel'],
      fee: ['Priced by garment'],
    },
  ],

  /* Conditions, in the clinic's own words, grouped for scanning. */
  conditions: [
    { group: 'Accidents and work', items: ['Auto injuries and whiplash (ICBC)', 'Work injuries (WCB)', 'Muscle and ligament strains', 'Scar tissue'] },
    { group: 'Back and neck', items: ['Low back pain and sciatica', 'Herniated and degenerative discs', 'Neck pain and stiffness', 'Headaches and migraines', 'Facet syndrome'] },
    { group: 'Shoulder, arm and hand', items: ['Frozen shoulder and tendinitis', 'Shoulder calcifications', 'Tennis and golfer’s elbow', 'Carpal tunnel syndrome'] },
    { group: 'Hip, knee and foot', items: ['Hip bursitis', 'Knee pain and jumper’s knee', 'Achilles tendonitis', 'Heel spurs and plantar fasciitis', 'Bunions and arch pain'] },
  ],

  /* Direct billing: union of the two insurer lists on the old site. */
  insurers: ['Pacific Blue Cross', 'Manulife', 'Sun Life', 'Green Shield', 'Desjardins', 'Medavie', 'Empire Life', 'Industrial Alliance', 'SSQ', 'Co-operators', 'Global Benefits', 'Johnson Inc.', 'Chambers of Commerce', 'Crown', 'Maximum Benefit', 'Standard Life', 'DVA', 'RCMP'],

  /* Fees, from the old site's Fees & Billing page. Chiropractic and shockwave: no GST. RMT includes GST. */
  fees: [
    { group: 'Chiropractic', note: 'No GST. No referral needed.', rows: [['Initial visit', '$110'], ['Follow-up visit', '$75'], ['Initial visit, Premium Assistance', '$87'], ['Follow-up, Premium Assistance', '$52'], ['ICBC claim', 'No charge'], ['WCB claim', 'No charge'], ['DVA and RCMP', 'No charge']] },
    { group: 'Registered massage therapy', note: 'Includes GST. No referral needed.', rows: [['30 minutes', '$90'], ['45 minutes', '$110'], ['60 minutes', '$135'], ['90 minutes', '$220'], ['ICBC claim, 45 minutes', 'No charge'], ['Premium Assistance 30 / 45 / 60', '$67 / $87 / $112']] },
    { group: 'Shockwave therapy', note: 'Each extra area in the same visit is $50.', rows: [['Initial visit', '$120'], ['Follow-up visit, one area', '$100']] },
    { group: 'Custom orthotics', note: 'No tax. Ask for an estimate to send your insurer for pre-approval.', rows: [['Orthotics', '$400'], ['Biomechanical exam, casting and consultation', '$100'], ['Orthopaedic shoes with orthotics', 'from $650']] },
  ],

  team: [
    { name: 'Dr. Rupi Kaila', creds: 'BSc, MSc, DC', role: 'Chiropractor and clinic director', langs: '',
      bio: 'Grew up in Burnaby. Doctor of Chiropractic from the University of Western States, 1998, graduating summa cum laude; BSc from Simon Fraser University; Master of Science in Nutrition and Functional Medicine. Past director of the B.C. Chiropractic Association. Trained in orthotic casting with The Orthotic Group. Twenty-five years of treating sciatica, whiplash, sports injuries, disc herniations, scoliosis and pregnancy-related pain.' },
    { name: 'Christina Nguyen', creds: 'RMT', role: 'Registered massage therapist', langs: '',
      bio: 'West Coast College of Massage Therapy graduate and a powerlifter. Deep tissue, trigger point release, PNF stretching, joint mobilization and Swedish massage, with a plan written for each patient.' },
    { name: 'Bianca Costa', creds: 'RMT', role: 'Registered massage therapist', langs: 'English, Portuguese',
      bio: 'Vancouver Career College graduate. Swedish, myofascial release, trigger point therapy, joint mobilization and gentle stretching, with a particular interest in fascia work.' },
    { name: 'Yelim Lee', creds: 'RMT', role: 'Registered massage therapist', langs: '',
      bio: 'Vancouver Career College, 2018. Postural balance work, pre- and post-natal care and rehab-focused treatment, with further training in pregnancy massage and Neurokinetic Therapy.' },
    { name: 'Ziping Cui', creds: 'RMT', role: 'Registered massage therapist', langs: 'English, Mandarin',
      bio: 'Vancouver College of Massage Therapy graduate, training since 2019. Deep soft-tissue and therapeutic massage for neck and shoulder tension, low-back pain, whiplash and sports injuries, plus home exercises so you can manage on your own.' },
    { name: 'Dr. Rod Santos', creds: 'ND', role: 'Naturopathic physician', langs: '',
      bio: 'Naturopathic primary care with a focus on cardiovascular disease, pain and weight management. Board certifications in acupuncture, prolotherapy, PRP and related therapies.' },
  ],

  reviews: [
    { name: 'Gowtham', text: 'Rarely have I had to book follow-up appointments because she perfectly diagnoses the issue.', tag: 'Chiropractic' },
    { name: 'Jacob', text: 'She treated me for low back pain and sciatica and helped me return to work. Shockwave therapy for my ankle.', tag: 'Sciatica, shockwave' },
    { name: 'Michelle', text: 'Over four years of neck and shoulder treatment. Dr. Kaila is fantastic. Amy is quick to respond to emails.', tag: 'Neck and shoulder' },
    { name: 'Kalpana', text: 'The combination of chiropractic adjustments and massage therapy really helped reduce my pain and improve my mobility.', tag: 'Chiropractic and massage' },
    { name: 'Aria', text: 'Took the time to listen, explain everything clearly and create a treatment plan that fits my needs.', tag: 'First visit' },
    { name: 'Holly', text: 'Dr. Rupi is so honest and very knowledgeable. I just go back for maintenance now.', tag: 'Maintenance care' },
  ],

  faq: [
    { q: 'Do I need a doctor’s referral?', a: 'No. Chiropractic and registered massage therapy never need a referral in BC, and neither do ICBC or WCB visits. Book online or call and come in.' },
    { q: 'I was in a car accident. What does ICBC cover?', a: 'Chiropractic visits for injuries from a motor vehicle accident are covered by ICBC at no charge to you, and 45-minute massage sessions are covered too. Bring your claim number. If your lawyer or ICBC needs a medical-legal report, we provide one on request.' },
    { q: 'What if I was hurt at work?', a: 'WCB covers chiropractic visits for work injuries free of charge to you, with no referral. Call as soon as the injury happens so the exam is on record early.' },
    { q: 'Can you bill my extended health plan directly?', a: 'Usually. We direct bill Pacific Blue Cross, Manulife, Sun Life, Green Shield, Desjardins, Medavie and most other plans that allow it. Bring your plan details to your first visit; you pay any portion the plan does not cover.' },
    { q: 'What happens at the first visit?', a: 'Dr. Kaila takes your history, examines how you move and explains what she finds in plain language before any treatment. You leave with a plan and, usually, a few exercises to start at home. Plan on about 45 minutes.' },
    { q: 'How many shockwave sessions will I need?', a: 'Normally five, about a week apart. Each session is a few minutes per area and can be briefly uncomfortable; soreness for a day or two afterwards is normal. Tell us about recent cortisone injections, blood thinners, a pacemaker, pregnancy or diabetes before we start.' },
    { q: 'How long do orthotics take to get used to?', a: 'About a week. Wear them one to two hours the first day and add an hour each day until you are in them all day. We check the fit, and shoes and orthotics can be submitted to your insurer for pre-approval first.' },
    { q: 'How can I pay?', a: 'Cash, Visa, Mastercard and Interac. Receipts are issued for every visit so you can claim what we could not bill directly.' },
  ],

  /* Hours from the clinic's Google listing. The old site shows three different sets; the owner should confirm. */
  hours: [
    ['Monday', '9:00 am – 6:00 pm'],
    ['Tuesday', '9:00 am – 6:00 pm'],
    ['Wednesday', '9:00 am – 6:00 pm'],
    ['Thursday', '9:00 am – 6:30 pm'],
    ['Friday', '9:00 am – 5:00 pm'],
    ['Saturday', '9:00 am – 5:00 pm'],
    ['Sunday', 'Closed'],
  ],
};
