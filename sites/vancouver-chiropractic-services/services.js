/* Vancouver Chiropractic Services — page data. Edit text here; main.js renders it.
   Facts come from vancouverchiropractic.net (fees, direct-billing list, bios) and the
   clinic's Google Business Profile (hours, rating, review quotes). */
window.VCS = {
  name: 'Vancouver Chiropractic Services',
  phoneDisplay: '(604) 733-7744',
  phoneTel: '+16047337744',
  email: 'info@vancouverchiropractic.net',
  booking: 'https://vancouverorthotics.janeapp.com/',
  maps: 'https://maps.google.com/?q=3195+Granville+St+%23114,+Vancouver,+BC+V6H+3K2',

  /* Hours from Google. The clinic also says "evening and some weekend appointments". */
  hours: [
    ['Monday', '12 – 6 pm'],
    ['Tuesday', '10 am – 6 pm'],
    ['Wednesday', '10 am – 6:30 pm'],
    ['Thursday', '11 am – 6:30 pm'],
    ['Friday', '8 am – 3 pm'],
    ['Saturday', '9 am – 2:30 pm'],
    ['Sunday', 'Closed'],
  ],

  /* Care offered at Hycroft, grouped the way the clinic describes it. */
  services: [
    {
      id: 'chiropractic', name: 'Chiropractic',
      lead: 'Consultation, posture and spine exam, diagnosis and a treatment plan. Hands-on and drug-free.',
      items: ['Gentle spinal adjustments', 'Soft-tissue work and trigger points', 'Posture and workstation advice', 'Stretches and exercises to take home', 'Hypervolt percussion therapy for soft-tissue injuries'],
      who: 'Dr. Michael Horowitz · Dr. Dana Koren',
    },
    {
      id: 'orthotics', name: 'Custom orthotics',
      lead: 'Foot, knee and back pain often start at the ground. Vancouver Orthotics shares the same suite.',
      items: ['Foot and gait assessment', 'Custom orthotic inserts, prescribed and fitted here', 'Footwear advice', 'Often covered by extended health plans'],
      who: 'Dr. Michael Horowitz',
    },
    {
      id: 'acupuncture', name: 'Licensed acupuncture',
      lead: 'Musculoskeletal support for feet, knees and back. Wednesdays and Thursdays.',
      items: ['Knee pain and arthritis', 'Low back pain and sciatica', 'Muscle tension and stress', 'Direct billing where your plan allows'],
      who: 'Jack Hsu, R.Ac.',
    },
    {
      id: 'massage', name: 'Registered massage therapy',
      lead: 'RMT care that works alongside your adjustments.',
      items: ['Trigger point and activation therapy', 'Sports and occupational strain', 'Direct billing to most plans'],
      who: 'Registered massage therapists',
    },
  ],

  /* The clinic's own "Top 10 symptoms we treat" list. */
  conditions: ['Lower back pain', 'Neck pain', 'Headaches and migraines', 'Pinched nerves', 'Sciatica', 'Bulging or herniated discs', 'Whiplash after a car accident (ICBC)', 'SI joint pain', 'Scoliosis', 'Foot, heel and knee pain'],

  /* Fees as published on vancouverchiropractic.net. */
  fees: [
    { name: 'New patient visit', time: '30 min', price: '$95', note: 'Consultation, posture and spinal exam, diagnosis and plan' },
    { name: 'Follow-up visit', time: '15 min', price: '$60', note: '' },
    { name: 'Re-examination', time: '30 min', price: '$80', note: 'Returning after more than a year' },
  ],

  insurers: ['Pacific Blue Cross', 'Canada Life', 'Sun Life', 'Manulife', 'Green Shield', 'Desjardins', 'ClaimSecure', 'Equitable Life', 'Johnson Group'],

  team: [
    {
      name: 'Dr. Michael Horowitz', role: 'Chiropractor (DC) · owner', photo: 'photos/team-horowitz.jpg', w: 426, h: 640,
      alt: 'Dr. Michael Horowitz, chiropractor, in a dark jacket, smiling',
      bio: 'Canadian Memorial Chiropractic College, 2000. Biology and kinesiology at York University, with a focus on fitness assessment and exercise counselling. Has run Hycroft Chiropractic and Vancouver Orthotics at Granville and 16th for over 20 years, and still answers patient emails himself.',
      tags: ['Spine and posture', 'Custom orthotics', 'ICBC claims'],
    },
    {
      name: 'Dr. Dana Koren', role: 'Chiropractor (DC)', photo: 'photos/team-koren.jpg', w: 236, h: 237,
      alt: 'Dr. Dana Koren, chiropractor, smiling',
      bio: 'Works alongside Dr. Horowitz on assessment, treatment planning and follow-up care, so there is a second chiropractor who knows your file.',
      tags: ['Chiropractic', 'Neck and back pain'],
    },
    {
      name: 'Jack Hsu', role: 'Licensed acupuncturist', photo: 'photos/team-hsu.jpg', w: 481, h: 481,
      alt: 'Jack Hsu, licensed acupuncturist, in a dark shirt',
      bio: 'Acupuncture for musculoskeletal pain, with a focus on knees, feet and the lower back. At Hycroft on Wednesdays and Thursdays. Book online.',
      tags: ['Knee pain', 'Back pain', 'Wed and Thu'],
    },
  ],

  /* Real Google reviews, trimmed, first names only. */
  reviews: [
    { name: 'Marta', text: 'I first saw Dr. Michael about 20 years ago after a serious car accident. The care brought me back to my pain-free self.', tag: 'Car accident recovery' },
    { name: 'Loretta', text: 'Dr. Michael Horowitz has given me my mobility back. If I could give a 10 star rating I would.', tag: 'Mobility' },
    { name: 'Francini', text: 'The adjustments are gentle, and a great tool to manage my lower back pain and headaches. Direct billing is possible.', tag: 'Low back pain and headaches' },
    { name: 'Janet', text: 'Appointment times are flexible. I had not seen a chiropractor in 30 years, but then I found him.', tag: 'Flexible times' },
    { name: 'Parviz', text: 'Dr. Michael fitted me for a new orthotic to help me with my foot pain. He goes above and beyond.', tag: 'Custom orthotics' },
    { name: 'D.', text: 'When I messaged his clinic over a year later for footwear recommendations, he personally responded.', tag: 'Follow-up' },
  ],

  faq: [
    { q: 'Do I need a referral?', a: 'No. Chiropractors are primary-contact practitioners in BC, so you can book directly online or by phone.' },
    { q: 'Can you bill my extended health plan directly?', a: 'Usually, yes. Pacific Blue Cross, Canada Life, Sun Life, Manulife, Green Shield, Desjardins, ClaimSecure, Equitable Life and Johnson Group all allow direct billing for chiropractic visits. Bring your policy or ID and group number. If your plan does not allow it, we give you the paperwork to claim back.' },
    { q: 'What does a first visit cost and involve?', a: 'A new patient visit is 30 minutes and $95. It covers a consultation, a posture and spinal examination, a diagnosis and a treatment plan. Follow-ups are 15 minutes and $60.' },
    { q: 'I was in a car accident. Can you treat me under ICBC?', a: 'Yes. We work with ICBC soft-tissue injury claims, including whiplash and neck and back pain after a collision. Call us with your claim number and we will explain what is covered.' },
    { q: 'Are the adjustments rough?', a: 'Patients describe them as gentle. Treatment is matched to you, and if a different kind of care or further medical assessment looks more appropriate, we say so and refer.' },
    { q: 'Do you have evening or weekend appointments?', a: 'Yes. Wednesdays and Thursdays run to 6:30 pm, and we are open Saturdays from 9 am to 2:30 pm. Fridays start at 8 am.' },
    { q: 'How do custom orthotics fit in?', a: 'Vancouver Orthotics is run by Dr. Horowitz in the same suite. If your foot mechanics are feeding a knee, hip or back problem, you can be assessed and fitted here, and most extended health plans cover custom orthotics.' },
    { q: 'How do I pay?', a: 'Cash, debit, Visa and Mastercard. We do not take Amex.' },
  ],
};
