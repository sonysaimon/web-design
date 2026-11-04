/* Sasamat Dental — page data. Edit this file to change services, team, reviews, FAQ and hours; main.js renders it.
   Sources: sasamatdental.ca (services, Dr. Xie bio), Google Business Profile (hours, rating, reviews, team names). */
window.SASAMAT = {
  phone: '(604) 224-3288',
  phoneHref: 'tel:+16042243288',
  emergency: '(778) 709-8886',
  emergencyHref: 'tel:+17787098886',
  email: 'thedentist@telus.net',
  address: '3780 W 10th Ave, Vancouver, BC V6R 2G4',
  mapsUrl: 'https://maps.google.com/?q=Sasamat+Dental,+3780+W+10th+Ave,+Vancouver,+BC+V6R+2G4',
  rating: '4.6',
  reviewCount: 194,

  /* Services, grouped the way a patient asks for them. No prices (dental). */
  groups: [
    {
      id: 'everyday',
      name: 'Everyday care',
      lead: 'Check-ups, cleanings and the repairs that keep a mouth healthy for decades.',
      items: [
        ['Check-ups and cleanings', 'A gentle hygiene visit with Wendy, an exam, and a plain explanation of anything we find.'],
        ['Tooth-coloured fillings', 'Composite fillings matched to the tooth, so a repaired molar looks like the one next to it.'],
        ['Crowns and bridges', 'For a cracked, heavily filled or missing tooth. Options and costs explained before anything starts.'],
        ['Complete and partial dentures', 'Fitted and adjusted here at the clinic.'],
        ['Root canal treatment', 'Done in-house by Dr. Xie, with the options explained before anything starts.'],
      ],
    },
    {
      id: 'ortho',
      name: 'Straightening',
      lead: 'Braces and Invisalign for teens and adults, planned and adjusted at this clinic.',
      items: [
        ['Braces', 'Traditional brackets, adjusted here by Dr. Xie rather than at a referral office across town.'],
        ['Invisalign', 'Clear, removable aligners for people who would rather nobody noticed.'],
        ['Honest options', 'Reviews mention it most: two options laid out, with the pros and cons of each, before you choose.'],
      ],
    },
    {
      id: 'surgery',
      name: 'Surgery in-house',
      lead: 'Extractions and grafting done by Dr. Xie at West 10th, so you are not sent somewhere new for the hard part.',
      items: [
        ['Wisdom teeth removal', 'Assessed and removed here by Dr. Xie, with aftercare explained before you leave.'],
        ['Bone grafting', 'Rebuilding bone before an implant or after an extraction, done at the clinic.'],
        ['Tooth extractions', 'When a tooth cannot be saved, it is removed gently and the next step is planned with you.'],
      ],
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic',
      lead: 'For the people who like their teeth healthy and want them brighter too.',
      items: [
        ['Zoom teeth whitening', 'Philips Zoom in-office whitening, the system on the shelf in our reception.'],
        ['Porcelain veneers', 'Thin porcelain fronts for chipped, worn or discoloured front teeth.'],
        ['Botox cosmetics', 'Offered by Dr. Xie alongside dental care.'],
      ],
    },
  ],

  team: [
    {
      name: 'Dr. Bin (Sean) Xie',
      role: 'Dentist · Braces, surgery, root canals',
      langs: 'English · Mandarin',
      photo: 'photos/dr-xie.jpg', w: 302, h: 438,
      bio: 'Graduated from Harbin Medical University in 1995 and has practised as a registered general dentist in Vancouver since 2014. Keeps up with new techniques and brings them into the clinic: root canal treatment, wisdom teeth extraction, bone grafting, braces, Botox cosmetics and Zoom whitening. Off duty he runs, skis, swims and cycles.',
    },
    {
      name: 'Dr. Shimae Soheilipour',
      role: 'Dentist',
      langs: '',
      photo: '', initials: 'SS',
      bio: 'Patients describe her as thorough and knowledgeable, and the kind of dentist who explains what she is doing while she does it.',
    },
    {
      name: 'Dr. Shuwen',
      role: 'Dentist',
      langs: 'English · Mandarin',
      photo: '', initials: 'S',
      bio: 'Part of the team that lets the clinic stay open seven days a week and see patients in Mandarin as well as English.',
    },
    {
      name: 'Wendy',
      role: 'Dental hygienist',
      langs: 'English · Mandarin',
      photo: '', initials: 'W',
      bio: 'The gentle cleaning that patients keep coming back for. Several reviews name her.',
    },
  ],

  reviews: [
    { name: 'Fereshteh', text: 'The office is incredibly clean and modern. Dr. Shimae Soheilipour is thorough, knowledgeable.' },
    { name: 'Doris', text: 'Dr. Xie offered two options for braces, thoroughly explaining the pros and cons.' },
    { name: 'Eric', text: 'I just had my bone grafting surgery done today. Dr. Xie is incredibly professional and skilled.' },
    { name: 'Stephy', text: "I've been a patient there for over seven years. Dr. Xie is particularly fantastic!" },
    { name: 'Demuremo', text: 'Sasamat Dental has very modern, updated equipment and a great setup.' },
    { name: 'Woody', text: 'Everything was explained clearly and I felt very well taken care of.' },
  ],

  faq: [
    ['Are you really open on Sundays?', 'Yes. We are open seven days a week: 10 am to 6 pm Monday to Saturday, and 10 am to 5 pm on Sunday. Weekend and evening-leaning hours are the reason many of our patients chose us.'],
    ['Do you speak Mandarin? 你们说中文吗？', 'Yes. Dr. Xie and Dr. Shuwen are Mandarin-speaking dentists, and Wendy, our hygienist, speaks Mandarin too. You can book, ask questions and be treated in Mandarin or English.'],
    ['Are you taking new patients?', 'Yes. Request an appointment with the form on this page or call (604) 224-3288. For a first visit, bring your ID, any insurance plan details and a list of medications you take.'],
    ['Do you do braces and Invisalign yourselves?', 'Yes. Dr. Xie plans and adjusts both braces and Invisalign at this clinic. At your consultation he will lay out the options with the pros and cons of each.'],
    ['Do you do wisdom teeth and surgery in-house?', 'Yes. Wisdom teeth removal, extractions and bone grafting are done by Dr. Xie here on West 10th, so you stay with the dentist you know.'],
    ['What if I have a dental emergency?', 'Call the clinic at (604) 224-3288 during opening hours. Outside those hours use the emergency line, (778) 709-8886.'],
    ['Do you accept dental insurance?', 'Bring your plan details to your appointment and the front desk will go through what your plan covers before treatment begins. Call ahead if you want it checked first.'],
    ['Where are you?', '3780 West 10th Avenue in Point Grey, Vancouver, at street level with the door right on West 10th. Open the map below for directions.'],
  ],

  hours: [
    ['Monday', '10 am – 6 pm'],
    ['Tuesday', '10 am – 6 pm'],
    ['Wednesday', '10 am – 6 pm'],
    ['Thursday', '10 am – 6 pm'],
    ['Friday', '10 am – 6 pm'],
    ['Saturday', '10 am – 6 pm'],
    ['Sunday', '10 am – 5 pm'],
  ],
};
