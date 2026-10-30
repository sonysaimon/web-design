/* Royal Plumbing — editable content.
   Reviews are real Google reviews (first names / display names as posted), abridged.
   Tags route each quote to a service page: drains, water-heaters, leaks, wet-basements,
   commercial, fixtures, emergency. Keep 'rating' in sync with Google. */

window.ROYAL = {
  phone: "416-537-0038",
  tel: "+14165370038",
  rating: { score: 4.9, count: 771, asOf: "October 2026", url: "https://maps.google.com/?cid=13793783470128330368" },

  team: [
    { name: "Matthew", note: "Named in 80+ Google reviews" },
    { name: "Mark", note: "Named in 50+ Google reviews" },
    { name: "Christian", note: "Named by customers" },
    { name: "Thomas", note: "Named by customers" },
    { name: "Jorge", note: "Named by customers" }
  ],

  reviews: [
    { who: "Nancy Lee", tech: "Matt", tags: ["emergency", "leaks", "fixtures"], home: true,
      text: "I had an emergency Friday at 5. I called three plumbing companies and the only ones that even returned my call was Royal Plumbing. Matt showed up within 30 minutes and got my shower cartridge replaced just before my guests arrived." },
    { who: "Raymond", tech: "Mark", tags: ["emergency", "leaks"], home: true,
      text: "8 a.m. Sunday, main water valve leaking. Four companies went straight to voicemail. Royal picked up, Mark called within five minutes and was at my house within the hour with a free quote. Fair price, covered everything, cleaned up after." },
    { who: "Melanie", tech: "Matthew and Christian", tags: ["leaks", "commercial"], home: true,
      text: "Professional, punctual, and did a fantastic job. They explained the large, complicated job top to bottom and completed everything on time, with no mess left behind." },
    { who: "Maddie", tech: "Matt", tags: ["leaks", "fixtures"], home: true,
      text: "He quickly worked out it wasn't a supply line issue but a gasket leak, then spotted a corroded P-trap before it could turn into a flooding issue. Clearly explained, replaced with PVC so it lasts." },
    { who: "Julianna", tech: "Matthew", tags: ["water-heaters", "emergency"], home: true,
      text: "Came the same day to get our hot water back up and running. Super quick and efficient. So happy with the service." },
    { who: "Lyn", tech: "Mark", tags: ["drains"], home: true,
      text: "An excellent drain snake job, quick and efficient, plus useful advice to prevent it happening again. My go-to plumber and plumbing company." },
    { who: "Jane", tech: "Matthew", tags: ["leaks", "fixtures"],
      text: "Leak under the kitchen sink. Matthew called us back within five minutes and came the same day. Prompt, courteous service and very reasonably priced." },
    { who: "Christine", tech: "Matthew", tags: ["leaks"],
      text: "After renovations I needed new pipes and a faucet installed. Quick, professional, and the pricing was very reasonable compared to other plumbers in the area." },
    { who: "Delila", tech: "the crew", tags: ["water-heaters"],
      text: "My hot water tank sprung a leak. They were polite from the moment I called to the minute they drove off in their van, responded within a very reasonable time and replaced the tank with ease." },
    { who: "Zan", tech: "Matthew", tags: ["drains"],
      text: "Moved into a new place with a really bad kitchen drain blockage. Matthew came in and fixed it quickly and professionally." },
    { who: "Minerva", tech: "Tom", tags: ["drains", "emergency"],
      text: "Our drain backed up at the worst time. I called and they responded so fast. Tom explained what could have gone wrong, and now everything is flowing again." },
    { who: "Mario", tech: "George", tags: ["wet-basements", "leaks"],
      text: "I had a leaking basement and George came right away. He found the root cause and did an amazing job resolving it. I'd strongly recommend him to friends and family." },
    { who: "Arian", tech: "the crew", tags: ["commercial"],
      text: "Upgraded our commercial kitchen with a heavy-duty floor sink and an indirect waste drop for our walk-in cooler. Everything was installed strictly to local health code." },
    { who: "Kate", tech: "Mike", tags: ["fixtures", "emergency"],
      text: "Dinner party, 30 guests, blocked guest bathroom on a weekend evening. Someone answered, Mike called within ten minutes and arrived in 45. He got it running and checked every other fixture. Best experience I've had with a plumbing company." },
    { who: "Ola", tech: "George", tags: ["fixtures", "leaks"],
      text: "The toilet in our condo cracked and leaked. George saved my floors from so much damage, installed a new toilet fast and neat, and was nice to my dog." },
    { who: "Dave", tech: "Matthew", tags: ["fixtures"],
      text: "Easy to communicate with, on time, and fixed our toilet in record time. Reasonably priced. I'd recommend him to anyone." },
    { who: "D.T.", tech: "Matthew", tags: ["leaks"],
      text: "Same-day repair of a leak under our kitchen sink. He called first with recommendations on materials, PVC versus brass, and arrived with everything to finish in one visit." },
    { who: "Lana", tech: "Matt", tags: ["leaks", "fixtures"],
      text: "Fast, efficient, and completely fair in his pricing. Genuinely friendly and easy to have in our home. We fully expect he'll be our plumber for life." }
  ]
};
