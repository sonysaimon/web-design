/* Aladin Car Wash — offer data. Edit prices and text here; the page renders from this file.
   Prices are from the owner's October 2026 price board (Google Business Profile photos). */
window.ALADIN = {
  phoneDisplay: '(778) 680-4803',
  phoneTel: '+17786804803',
  email: 'aladincarwashburnaby@gmail.com',
  calendly: 'https://calendly.com/aladincarwashburnaby/30min',
  membershipForm: 'https://forms.gle/QZ6UthaxKJHQZTnX9',
  instagram: 'https://www.instagram.com/aladincarwash/',
  maps: 'https://maps.google.com/?q=6123+Hastings+St,+Burnaby,+BC+V5B+1R9',

  washes: [
    {
      id: 'basic', name: 'Basic', single: 14.99, monthly: 49.99,
      blurb: 'In, through, dry, gone. The everyday rinse.',
      includes: ['High-pressure body blast', 'Soft-touch wash', 'Dry agent', 'Final rinse', 'Blow dry'],
    },
    {
      id: 'deluxe', name: 'Deluxe', single: 19.99, monthly: 59.99, tag: 'Most popular',
      blurb: 'Adds wheels, rust inhibitor and clear-coat protection.',
      includes: ['Extra detergent application', 'High-pressure body blast', 'Rust inhibitor', 'Soft-touch wash', 'Wheel blast', 'Clear-coat protection', 'Final rinse', 'Blow dry'],
    },
    {
      id: 'supreme', name: 'Supreme', single: 26.99, monthly: 69.99, tag: 'Hand wash', accent: true,
      blurb: 'Hand-washed by the crew. Same price for sedan, SUV, truck or van.',
      includes: ['Hand wash', 'Brighter shine and water repellency', 'Removes dirt, oil and grease', 'Wheel blast', 'Under-carriage blast', 'Free vacuum'],
    },
  ],

  detailing: [
    {
      name: 'Full detail', photo: 'photos/interior-audi.jpg', w: 1600, h: 2133,
      alt: 'Detailed Audi interior with clean black leather seats and floor',
      price: 'Priced by vehicle and condition',
      blurb: 'Interior and exterior, every surface. Steam, extraction, leather conditioning, exterior polish. Engine bay on request.',
      includes: ['Deep interior clean and extraction', 'Stain and spot removal', 'Leather and trim conditioning', 'Exterior wash, clay and polish'],
    },
    {
      name: 'Hand wash and wax', photo: 'photos/handwash-foam.jpg', w: 940, h: 788,
      alt: 'Gloved hand washing a black car with thick white foam',
      price: 'From the Supreme wash',
      blurb: 'A proper two-bucket hand wash, then a wax that beads rain for weeks. The upgrade most people ask for after their first visit.',
      includes: ['Hand wash and dry', 'Wheels and tires dressed', 'Carnauba or spray wax', 'Windows inside and out'],
    },
    {
      name: 'Polish and ceramic coating', photo: 'photos/water-beading.jpg', w: 1600, h: 1068,
      alt: 'Water beading on freshly coated orange paint',
      price: 'Quote in person',
      blurb: 'Machine polish to lift swirls and light scratches, then a ceramic coat for gloss, depth and months of easy washing.',
      includes: ['Paint decontamination', 'Machine polish', 'Ceramic coating', 'UV and oxidation resistance'],
    },
    {
      name: 'Pet hair and odour', photo: 'photos/extraction.jpg', w: 1600, h: 1060,
      alt: 'Hot water extractor pulling dirt from a car carpet',
      price: 'Ozone from $39.99',
      blurb: 'Dog hair out of every seam, then ozone treatment that breaks the smell down instead of masking it. Smoke, pets, food, damp.',
      includes: ['Full vacuum and brush-out', 'Shampoo and extraction', 'Ozone odour treatment', 'Vent and AC duct sanitising'],
    },
  ],

  ozone: [
    { name: 'Light odour', time: '15 min', price: '$39.99' },
    { name: 'Food or pet odour', time: '20 to 30 min', price: '$59.99' },
    { name: 'Smoke, mould or heavy odour', time: '40 to 60 min', price: '$79.99 to $99.99' },
  ],

  work: [
    { photo: 'photos/work-audi-sq7.jpg', w: 1440, h: 1080, car: 'Audi SQ7', note: 'Exterior, at the exit', alt: 'Black Audi SQ7 gleaming outside the wash bay' },
    { photo: 'photos/interior-mats.jpg', w: 940, h: 788, car: 'Rubber mats', note: 'Deep clean and dressed', alt: 'Spotless black rubber floor mats in a red car' },
    { photo: 'photos/work-honda-hrv.jpg', w: 1576, h: 2100, car: 'Honda HR-V', note: 'Hand wash, doors open to dry', alt: 'White Honda HR-V with doors open after a hand wash' },
    { photo: 'photos/work-hyundai-autumn.jpg', w: 1576, h: 2100, car: 'Hyundai Elantra', note: 'Wash and dry, October light', alt: 'Black Hyundai Elantra under the canopy in autumn' },
    { photo: 'photos/work-lexus-nx.jpg', w: 1576, h: 2100, car: 'Lexus NX', note: 'Exterior detail', alt: 'Silver Lexus NX in the bay' },
  ],

  reviews: [
    { name: 'Liss', service: 'Full detail, Honda CR-V', text: 'Interior and exterior, including the engine, all fabric, and truly all surfaces. Blown away.' },
    { name: 'Sada', service: 'Interior, dog hair', text: 'Lots of stubborn dog hair that I couldn’t get out myself. Customer service was 11/10!' },
    { name: 'Ramin', service: 'Tunnel wash', text: 'Even after the automatic wash, they did extra spot cleaning for free.' },
    { name: 'Scott', service: 'Detailing', text: 'Fast, super service, less expensive than any other detail service I’d used.' },
    { name: 'Gordon', service: '20 years in Burnaby', text: 'Aladin is the only place I trust to detail my car. Kind, fast, professional.' },
    { name: 'Francis', service: 'Self-serve bays', text: 'Pressure washer, brushes, soap, glass cleaner, all you need. Nice and slow and thorough machine.' },
  ],

  faq: [
    { q: 'Do I need to book?', a: 'Not for a wash. Pull in off Hastings any time we are open and pick a wash at the entrance. Detailing is by appointment because it takes the crew one to five hours per car: book a 30-minute drop-off slot online or call.' },
    { q: 'How does buy 3 get 1 free work?', a: 'Every three washes you pay for earns the fourth one free. Ask for your card at the counter and we stamp it each visit. It applies to all three wash tiers.' },
    { q: 'Is the tunnel safe for my paint?', a: 'The tunnel is about 70 percent touch-free pressure and 30 percent soft-touch foam. Deluxe and Supreme add clear-coat protection. If you want zero contact, book a hand wash.' },
    { q: 'What does a monthly membership include?', a: 'Unlimited washes of that tier, all month, from $49.99. Sign up at the counter or through the form linked under the wash prices. Cancel any time.' },
    { q: 'How long does a detail take?', a: 'A hand wash and interior clean is around an hour to ninety minutes. A full detail is half a day. Tim Hortons is next door, or we can pick the car up on weekends.' },
    { q: 'Can you get dog hair and smells out?', a: 'Yes. Hair comes out with a full brush-out and extraction; smell is handled with an ozone treatment, priced by how heavy it is. Heavy smoke or mould takes up to an hour.' },
    { q: 'Where do I park and pay?', a: '6123 Hastings Street, next to Tim Hortons, between Kensington and Holdom. Pay at the wash entrance by card or cash; self-serve bays and vacuums are coin and card.' },
  ],

  hours: [
    ['Monday', '9:30 am – 7:30 pm'], ['Tuesday', '9:30 am – 7:30 pm'], ['Wednesday', '9:30 am – 7:30 pm'],
    ['Thursday', '9:30 am – 7:30 pm'], ['Friday', '9:30 am – 7:30 pm'], ['Saturday', '9:30 am – 7:30 pm'], ['Sunday', '9:30 am – 7:30 pm'],
  ],
};
