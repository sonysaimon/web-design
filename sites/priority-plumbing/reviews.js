/* Real customer quotes shown on priorityplumbing.ca (Google reviews), lightly trimmed.
   Fields: name, tech (first name of the technician mentioned, or null), service (plumbing | drains | heating | waterproofing | emergency | general), quote. */
window.PP_REVIEWS = [
  { name: 'Janice Goldstein Smith', tech: 'Kyle', service: 'drains', quote: 'He went above and beyond trying to clear the clogged sewer pipe to avoid excavation. The work was well done and the clean up was excellent!' },
  { name: 'Cory Atkins', tech: null, service: 'drains', quote: 'What in a worst-case scenario could’ve been a $3,000 job, he unclogged my kitchen pipe stack at a fraction of the cost.' },
  { name: 'David Moscoe', tech: 'Brian', service: 'drains', quote: 'I was pleased that Brian was able to complete the work, just by using a snake.' },
  { name: 'Dyan', tech: 'Cole', service: 'drains', quote: 'Cole did a good job snaking our bathtub. He explained the different prices, and was clean and polite.' },
  { name: 'Kurt Barrington', tech: 'Brenden', service: 'drains', quote: 'Brenden came to fix some sewer smell in our bathroom and resolved the toilet issue.' },
  { name: 'Liam Strathdee', tech: 'Ouweis', service: 'drains', quote: 'Ouweis was very professional and replaced our kitchen sink drains in a timely manner.' },
  { name: 'Dana Hanson', tech: null, service: 'drains', quote: 'Diagnosed our main drain issues and presented us with the options to complete the job.' },
  { name: 'Anthony', tech: null, service: 'drains', quote: 'They were able to resolve our clogged kitchen drain within a day of us calling for service.' },
  { name: 'Shayn Sawchuk', tech: null, service: 'drains', quote: 'He performed a very messy drain repair and left our house cleaner than when he started. No surprises and you get what you pay for.' },
  { name: 'Diana Burns', tech: 'Jacob', service: 'drains', quote: 'Jacob did an excellent job getting the blockage cleaned out.' },

  { name: 'William Boland', tech: 'Tony', service: 'plumbing', quote: 'Tony the magician was able to fix our rapid leaking pipe with precision and efficiency.' },
  { name: 'Robert Tu', tech: 'Brian', service: 'plumbing', quote: 'Excellent service from Brian, who helped us replace a leaky bathtub cartridge.' },
  { name: 'Lionel Carter', tech: 'Ouweis', service: 'plumbing', quote: 'Ouweis Sassi provided great service today upgrading my end-of-life sump pump and adding a backup.' },
  { name: 'Claudia Davila', tech: 'Kyle', service: 'plumbing', quote: 'His 15 years of experience was evident as he saved me from replacing my toilet unnecessarily.' },
  { name: 'Peter Y.', tech: null, service: 'plumbing', quote: 'He was extremely friendly and professional and the new toilet installation took less than an hour.' },
  { name: 'Desha Blackwood', tech: 'Jordan', service: 'plumbing', quote: 'He replaced our toilet quickly and even cleaned up after himself.' },
  { name: 'Lito Evite', tech: 'Brian', service: 'plumbing', quote: 'Brian did a great job fixing our kitchen sink drain and putting in shut off valves for hot/cold water.' },
  { name: 'Dolly G', tech: 'Brenden', service: 'plumbing', quote: 'Brenden from Priority did a great job in replacing the kitchen faucet and fixing the water pressure.' },
  { name: 'Andrew Yip', tech: 'Brenden', service: 'plumbing', quote: 'Brenden was able to fix my threaded Moen tub diverter.' },
  { name: 'Jane Harvey', tech: null, service: 'plumbing', quote: 'He was able to diagnose and find the source of water dripping in our bathroom’s wall and ceiling. He also checked our other faucets for safety, which was beyond the scope of service.' },
  { name: 'Rozanne Reszel', tech: 'Zac', service: 'plumbing', quote: 'Zac was professional, patient with my questions, and re-installed the relevant cupboards and the dishwasher. Ask for Zac!' },
  { name: 'Amanda Carvery', tech: 'Jordan', service: 'plumbing', quote: 'Jordan was amazing as he handled our bathroom leak with detailed care and attention.' },
  { name: 'Bessie T', tech: 'Tony', service: 'plumbing', quote: 'Very professional and did an excellent job with our plumbing for our new bathroom.' },
  { name: 'Maggie Tammik', tech: 'Cole', service: 'plumbing', quote: 'Very kind and had a careful eye, caught a leaking pipe that was unrelated to the origin of our call.' },
  { name: 'Gilbert Sonn', tech: 'Cole', service: 'plumbing', quote: 'Cole explained what the underlying issue was, provided options and the up-front pricing for all the options. No mess to deal with after his departure.' },
  { name: 'Francesca Memè', tech: null, service: 'plumbing', quote: 'He did an excellent job installing the bidet.' },

  { name: 'Niki Tassioulis', tech: 'Aaron', service: 'heating', quote: 'Aaron went through all the lines and found the issue. He also found a carbon monoxide leak, so thankful! We’ve used this company multiple times and it’s always 10/10.' },
  { name: 'Brooke Duval', tech: 'Tony', service: 'heating', quote: 'Tony did my annual system check today and gave me lots of excellent tips to ensure everything is running smoothly.' },

  { name: 'Shannon McCauley', tech: 'Cole', service: 'waterproofing', quote: 'Cole did a great job fixing our sinks, and doing a full flood prevention overview for our house.' },
  { name: 'Cathy MacNeil', tech: 'Aaron', service: 'waterproofing', quote: 'Aaron came back several times free of charge to make sure the battery was properly charged and the system is working perfectly.' },

  { name: 'Barbara Kowalski', tech: null, service: 'emergency', quote: 'Quick and friendly service even in an emergency on a Sunday.' },
  { name: 'Evan Schneider', tech: 'Jacob', service: 'emergency', quote: 'Jacob was courteous, efficient and did a great job on a weekend repair.' },
  { name: 'Ryan Maltz', tech: null, service: 'emergency', quote: 'Showed up in under an hour and was honest and did good work. Would highly recommend.' },
  { name: 'Karen H.', tech: null, service: 'emergency', quote: 'Their dispatch prioritized my emergency repair despite them being fully booked.' },

  { name: 'Tina Seemann', tech: 'Matt', service: 'general', quote: 'Matt explained everything clearly and, best of all, did not push but allowed me to decide what job I wanted done today, according to what my budget would allow.' },
  { name: 'Jen Brain', tech: null, service: 'general', quote: 'Excellent communication by the entire team. I knew who was coming and when through email, text, and phone calls.' },
  { name: 'Natasha Teoli', tech: null, service: 'general', quote: 'Excellent, proactive communication, total transparency with pricing, options provided, quality work, and zero pressure.' },
  { name: 'Cindi Rowan', tech: 'Kyle', service: 'general', quote: 'Kyle has been my plumber on almost every call, and it’s so nice to have someone who knows my house and goals. I wouldn’t go anywhere else.' },
  { name: 'Steve Soloman', tech: 'Greg', service: 'general', quote: 'Can’t say enough about Priority Plumbing’s excellent team, led by Greg and Victor.' },
  { name: 'Denis Lafontaine', tech: 'Tony', service: 'general', quote: 'Big job, minimal disruption to our day-to-day, excellent work.' },
  { name: 'Javi Fenoy', tech: null, service: 'general', quote: 'While not cheap, their service is impeccable and top-tier.' },
  { name: 'Ivan Lee', tech: 'Kyle', service: 'general', quote: 'Kyle took time to answer questions and explained the repair before and after with a walk-through inspection.' }
];
