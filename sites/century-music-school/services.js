/* Vancouver Century Music School — all editable content.
   Prices are exactly as published on centurymusic.ca (payment page, CAD, card fee included).
   Teacher bios, student results, testimonials and policies are copied from centurymusic.ca. */

window.CMS = {
  business: {
    name: "Vancouver Century Music School",
    phone: "778-723-9999",
    phoneTel: "+17787239999",
    address: "1730 Kingsway, Vancouver, BC V5N 2S3",
    trialUrl: "https://www.centurymusic.ca/store/p9/25%25_OFF_One-Month_Trial_Class_for_New_Customers_Only_%E2%80%93_Limited_Time_Promotion%21.html",
    paymentUrl: "https://www.centurymusic.ca/payment.html",
    englishUrl: "https://www.centurymusic.ca/store/p15/IELTS%2FCELPIP%2FTOEFL_Complete_28hr_Course___3%25_card_processing_fee.html",
    facebook: "https://www.facebook.com/centurymusicvan",
    instagram: "https://www.instagram.com/centurymusicschoolvancouver",
    wechat: "linahan711",
    rating: "4.9",
    reviewCount: "28",
    mapsDir: "https://www.google.com/maps/dir/?api=1&destination=Vancouver+Century+Music+School,+1730+Kingsway,+Vancouver,+BC+V5N+2S3"
  },

  /* Programs. image = file in photos/ (null = text tile). */
  lessons: [
    { id: "piano", title: "Piano", age: "Age 4 and up", lead: "Classical, contemporary, pop, jazz and Royal Conservatory repertoire, with strong reading and performance skills from the first year.",
      points: ["Faber and Faber, Piano Adventures and RCM curriculum", "Beginners: reading notes, rhythm, scales, basic chords", "Intermediate and advanced: RCM grades, exams, recitals", "Styles from classical to jazz, blues and rock", "Adults and seniors welcome"], image: "photos/banner-piano.jpg", alt: "Piano lessons" },
    { id: "violin", title: "Violin & Suzuki violin", age: "Age 5 and up", lead: "Private violin for beginners through advanced students, preparing for performances, exams and auditions while developing proper technique and musical expression.",
      points: ["Suzuki method, traditional method and RCM books", "Violin rental is required before the first lesson", "Builds creativity, coordination, attention span and self-discipline", "Certified Suzuki teacher on faculty"], image: "photos/banner-violin.jpg", alt: "Violin lessons" },
    { id: "guitar", title: "Guitar & Ukulele", age: "Age 6 and up", lead: "Acoustic, electric, fingerstyle, rock, blues and classical guitar, plus ukulele, for children, teens and adults.",
      points: ["Scales, chords, tuning, arpeggios and rhythm", "Famous classical, rock and pop songs along the way", "Guitar technique, reading music, improvisation, music theory, ear training", "Ages 5–8 usually start on ukulele"], image: "photos/banner-guitar.jpg", alt: "Guitar lessons" },
    { id: "voice", title: "Voice", age: "Age 5 and up", lead: "Private singing lessons that build breath, range and confidence, for recitals, choirs and school auditions.",
      points: ["Technique, breathing and pitch", "Repertoire you actually want to sing", "Performance preparation", "Pairs well with piano or theory"], image: "photos/piano-detail.jpg", alt: "Voice lessons" },
    { id: "rcm", title: "RCM Program", age: "All levels", lead: "Royal Conservatory of Music exam preparation with RCM-certified teachers, with the opportunity to earn high-school credits.",
      points: ["Preparation for every RCM practical and theory level", "Students regularly earn First Class Honours and Distinction", "Top provincial marks, festival and competition finalists", "Exam fees and exam-room rental are extra"], image: "photos/students-medals.jpg", alt: "Students holding RCM medals and trophies" },
    { id: "theory", title: "Music Theory", age: "All ages", lead: "RCM theory from Rudiments to ARCT, taught alongside an instrument or on its own.",
      points: ["Rudiments: levels 1–8", "Harmony: levels 9, 10 and ARCT", "History: levels 9, 10 and ARCT", "High-school credits available through RCM exam results"], image: "photos/banner-theory.jpg", alt: "Music theory class" },
    { id: "composition", title: "Music Composition", age: "All ages", lead: "Turn the melodies in your head into finished compositions and songs, in classical and contemporary styles.",
      points: ["Songwriting and improvisation", "Melody, harmony, rhythm and timbre", "Musical form, orchestration and arrangement", "Pieces ready to present to an audience"], image: "photos/recital-piano.jpg", alt: "A student performing at a grand piano" },
    { id: "groups", title: "Group Classes & Ensembles", age: "Intermediate and up", lead: "Form your own small group, or join an ensemble and play duets: piano and violin, two violins, guitar and violin, guitar and piano.",
      points: ["Small group (3–4 students, 45 min): $35 per student", "Semi-private (2 students, 45 min): $40 per student", "Ensembles for students in private lessons or at intermediate level", "Learn to play together, take roles, share parts and accompany"], image: "photos/banner-ensembles.jpg", alt: "Ensemble class" },
    { id: "english", title: "English: IELTS, CELPIP, TOEFL", age: "Exam preparation", lead: "A 28-hour online exam course with a BC-registered English teacher, plus one-to-one VIP preparation. Taught in English and 中文.",
      points: ["Speaking, reading, graph analysis, essay writing, listening", "Weekly vocabulary lists and a final mock exam", "Minimum 3 students per course", "Details on the English course page"], image: null, tile: "IELTS · CELPIP · TOEFL", alt: "", link: "english.html" }
  ],

  trial: {
    price: "$158",
    note: "New students only · one per family · 120 minutes of private lessons · appointment required · non-refundable · 48 hours' notice to cancel or reschedule once · expires after 2 months without a booking · lessons at least once a week",
    options: [
      { name: "One-Month Trial", who: "Young beginners, age 9 and under", what: "Four weekly 30-minute private lessons" },
      { name: "Introductory Package", who: "Age 9 to adults", what: "Three weekly private lessons: 45, 45 and 30 minutes" },
      { name: "Intensive Trial", who: "Older or experienced students, or two young beginners together", what: "Two weekly 60-minute private lessons (one or two students)" }
    ],
    after: "After paying, leave a note on the payment page, or text or email us the trial package you chose and the student's name. Lesson dates and times are confirmed by text and email. You can also contact us before buying to check availability."
  },

  tuition: [
    { pack: "10 × 30-minute private lessons", price: "$438" },
    { pack: "20 × 30-minute private lessons", price: "$803", save: "$70 off" },
    { pack: "10 × 45-minute private lessons", price: "$597" },
    { pack: "20 × 45-minute private lessons", price: "$1,123", save: "$70 off" },
    { pack: "10 × 60-minute private lessons", price: "$793" },
    { pack: "20 × 60-minute private lessons (1–2 students)", price: "$1,403", save: "$70 off" },
    { pack: "Small group class, 3–4 students, 45 minutes", price: "$35", unit: "per student" },
    { pack: "Semi-private class, 2 students, 45 minutes", price: "$40", unit: "per student" },
    { pack: "IELTS / CELPIP / TOEFL complete 28-hour course", price: "$757" }
  ],
  tuitionNotes: ["Prices include the 3% online card fee; pay by Interac e-Transfer and save 3%.", "No annual registration fee. Same rates for every level; the 20-lesson packages are discounted.", "Lessons are booked once or twice a week, continuously. Choose any instrument or theory.", "Exam fees, exam-room rental (one regular lesson), books, materials and recital fees are not included.", "Weekday, evening and Saturday lesson times."],

  /* Faculty, in the order of centurymusic.ca/about-us. photo = file in photos/teachers/. */
  teachers: [
    { slug: "jenny-hwang", name: "Jenny Hwang", cred: "MA, BEd, BMus", teaches: "Piano, violin, music theory", photo: "jenny-hwang.jpg",
      bio: ["Jenny is a passionate music educator with over ten years of experience teaching piano, violin, and ensemble music. Born and raised in South Korea and Canada, Jenny began her musical journey at the age of seven through piano and violin studies which eventually led her to pursue music studies at UBC and the University of Toronto. As a music education specialist, Jenny views music as an interdisciplinary art form where students can acquire musical skills and applied skills relevant to everyday life.", "Her curiosity and love for music have also led her to explore various musical disciplines, including orchestral and band conducting, singing, and composition. Outside of teaching, she is an avid musician who actively seeks opportunities to perform with community ensembles in Vancouver and Toronto, including the New West Symphony Orchestra and Counterpoint Orchestra."] },
    { slug: "asya-sinecen", name: "Asya Sinecen", cred: "BMus", teaches: "Piano, music theory", photo: "asya-sinecen.jpg",
      bio: ["Asya began studying piano at the age of 8 and pursued her musical education at a fine arts high school in Turkey. She participated in choirs and orchestras as a violinist and singer throughout her high school and university years, performing in numerous concerts and festivals. During this time, she also gave many piano performances, showcasing her skills as a pianist. She further refined her piano studies for four years at Western University under Tina Yanchus.", "Asya teaches all levels of piano students, combining structured technique with fun and engaging lessons. Her teaching focuses on building confidence, developing musical expression, and fostering a joyful, lifelong love for piano, whether students are preparing for RCM exams or exploring music for personal growth."] },
    { slug: "ivy-lu", name: "Ivy Lu", cred: "MMus, MA, BMus", teaches: "Piano, voice, violin", photo: "ivy-lu.jpg",
      bio: ["Ivy is a classically trained musician with a Bachelor of Music from Western University and a Master of Arts from Berklee College of Music. Later, she furthered her studies at The Juilliard School in pedagogical approaches, further developing her artistic vision. She is a member of BCRMTA (B.C. Registered Music Teachers' Association) and CFMTA (Canadian Federation of Music Teachers' Associations), specializing in violin, piano, composition, production, and live performance. She was mentored by Tatiana Tyuleneva, Gwen Beamish, and Tina Yanchus from The Juilliard School, a professor and sixth-generation successor in the Beethoven–Liszt piano lineage.", "As a Steinway Young Artist, Royal Conservatory of Music certified advanced teacher, and member of the Canadian Federation of Musicians (CFM), she emphasizes technical mastery, stylistic understanding, and artistic confidence. Her students consistently achieve top results in RCM examinations and competitions.", "Ivy has received multiple awards for excellence in solo and chamber performance and has collaborated with Warner Chappell Music, Live Nation, and the Vancouver Metropolitan Orchestra."] },
    { slug: "nely-perez", name: "Nely Perez", cred: "MMus, MEd", teaches: "Piano, music theory", photo: "nely-perez.jpg",
      bio: ["Nely has more than 15 years of experience teaching piano students from 4 to 70 years old. She earned her Master's degrees from the University of La Rioja (Spain) and a Master of Music Education from the Conservatory of Music in Oviedo (Spain). She is familiar with the RCM repertoire at all levels, and is strongly involved in creating videos for her students.", "The main idea of teaching for her is discipline disguised as fun, where the teacher connects with and knows the student to achieve the perfect environment for learning. Joy and play are essential elements of successful learning at any age, and she makes certain that students learn without undue stress and anxiety: playing and enjoying songs that the students choose, and songs chosen to work on particular weaknesses. This is the key to achieving the best results."] },
    { slug: "parisa-moghadam", name: "Parisa Moghadam", cred: "MMus, MEd", teaches: "Piano, music theory", photo: "parisa-moghadam.jpg",
      bio: ["Parisa is a pianist with a decade of experience teaching piano and music theory. She holds degrees in Piano Performance and Piano Teaching from the Tehran Conservatory of Music. Parisa has an extensive performance background, having played piano in numerous concerts, and she has also contributed as a soprano chorister in a renowned choral group. She is well-versed in a variety of musical literature, including technical books, and has substantial experience with the ABRSM exam syllabuses, theories, and repertoires.", "Parisa excels in guiding students of diverse ages and skill levels, helping them achieve their musical aspirations through personalized instruction and a thorough understanding of music theory. She is dedicated to creating an enjoyable and enriching learning atmosphere in her classes, and her passion for music education is evident in her commitment to fostering a lifelong love for piano in her students."] },
    { slug: "adrianne-marcano", name: "Adrianne Marcano", cred: "BMus", teaches: "Piano, violin, music theory", photo: "adrianne-marcano.jpg",
      bio: ["Adri Marcano has been teaching music for more than 6 years. Her musical career started in Spain at the young age of 3. Adri is well-versed in the positive impact music can have on a person; she shares her love for both piano and violin with her students through her dynamic and professional teaching approach, being aware that everyone has a different learning style.", "She has participated in diverse orchestras in BC such as the VYSO, BCMEA, and UBC SO. She holds a bachelor's degree in Music from the University of British Columbia. Whether it is preparing for the RCM exams or learning music for pleasure, Adri works in a way that is tailored for the student, ensuring that every student reaches their true potential."] },
    { slug: "chris-kim", name: "Chris Kim", cred: "MMus, BMus", teaches: "Violin, piano", photo: "chris-kim.jpg",
      bio: ["A graduate of the Vancouver Academy of Music, Chris Sho Mang Kim started his music studies at the age of 9 in Korea. In Canada, he received his bachelor's of music degree studying under Robert Rozek on a full scholarship at the Vancouver Academy of Music. He has been concertmaster and principal in the Stradivari Ensemble and the Vancouver Academy Symphony Orchestra, and is currently an associate member of the Ottawa Symphony Orchestra. As a soloist, he has played works by Mendelssohn, Vivaldi, Bach and others with orchestras.", "He has attended music camps and festivals in Europe on full scholarships, where he studied with Rudolf Koelman, the last student of Jascha Heifetz. Sho Mang studied under Yehonatan Berick at the University of Ottawa, where he obtained his master's degree. His goal is to help students become familiar with music; he gives clear instructions on what to prepare and practise to improve their skills and technique."] },
    { slug: "christopher-giles", name: "Christopher Giles", cred: "BFA", teaches: "Composition, classical and electric guitar, ukulele", photo: "christopher-giles.jpg",
      bio: ["Originally from Ottawa, Ontario, Chris is a Canadian guitarist and composer. Chris has studied formal classical performance with Canada's Royal Conservatory of Music. As a performer and composer, his study of the guitar also includes more than a decade of experience teaching students.", "In addition to performance, Chris's passion for music inspired him to study Recording Arts and subsequently composition at Simon Fraser University where, during his studies, he was awarded the \"R. Murray Schafer Soundscape Award\" and has had instrumental and electronic works performed as part of Ascension, hosted by SFU's School of Contemporary Arts, as well as pieces for dance in Voirelia's 2019 production, Dracula's Garden. Now based in Vancouver, Chris teaches both pop and classical music to aspiring musicians of all ages and backgrounds, helping them unlock their musical potential and achieve their goals."] },
    { slug: "jafnel-flores", name: "Jafnel Flores", cred: "BMus", teaches: "Guitar", photo: "jafnel-flores.jpg",
      bio: ["Jafnel is an up-and-coming jazz guitarist making his way into the scene. He is a versatile musician with backgrounds in multiple genres, from jazz and rock to gospel and R&B. Jafnel earned a Bachelor's degree from Capilano University in Jazz Performance and Composition. His influences include Ron Samworth, Bill Coon, Joe Pass, Grant Green, and Lenny Breau.", "Jafnel has gained practical experience playing gigs throughout Vancouver. This hands-on experience has honed his skills and reinforced his reputation as a dedicated team player with a passion for music. Beyond his academic achievements and playing ability, he is a committed collaborative spirit who works well with anyone in any situation."] },
    { slug: "daywuy-mejias", name: "Daywuy Mejias", cred: "Pianist · Music therapist · CBT · BI · Psychotherapist", teaches: "Piano", photo: "daywuy-mejias.jpg",
      bio: ["Daywuy has been teaching piano for more than 20 years. She graduated as a pianist at the early age of 16 from the Royal Conservatory of Music in Venezuela and worked between Venezuela and Spain. She believes that every person deserves the chance to learn music to enhance and promote their social, cognitive and emotional skills. Aside from her Bachelor's Degree in Arts, she has completed several specializations in Child Psychology and Neurodiversity, and is a Cognitive Behavioural Therapist, Behavioural Interventionist and Psychotherapist. Daywuy has complemented her teaching with other certifications such as the RCM Canada.", "Daywuy is well-versed in the positive impact music can have on a person; she shares her love for piano with her students through her dynamic and professional teaching approach, being aware that everyone has a different learning style. Whether it is preparing for the RCM exams or learning piano for pleasure, Daywuy works in a way that is tailored for the student, ensuring that every student reaches their true potential."] },
    { slug: "nina-vu", name: "Nina Vu", cred: "MMus, BMus", teaches: "Piano, music theory", photo: "nina-vu.jpg",
      bio: ["Nina holds degrees in piano performance from both the University of British Columbia (BM) and the University of Toronto (MM). As a UBC alumna, Nina has earned numerous accolades, including the Stanley Chuck Cheun Leung Scholarship, the Kimmy Y C Tong Scholarship, and the Mildred Johnson Scholarship in Music, a distinction she has received twice. During her University of Toronto tenure, she was honoured with the University of Toronto Fellowship for 2021–22, the Dina and Hosie Austin Graduate Piano Fellowship for two consecutive years, and the Faculty of Music Graduate Student Research and Presentation Grant in 2023.", "Nina's achievements extend beyond academia. In the 2022–23 season, Nina won the 20–30 Age Category and the Gala Trophy at the 10th Pacific International Youth Festival, first prize at the Golden Classical International Competition, and second prizes at the 7th North West International Piano Ensemble Competition (Senior Division) and the Vancouver Westcoast Music Society Bursary Competition. Her musical journey has been enriched by appearances at the Académie Orford Musique in Quebec and the Amalfi Coast Music and Arts Festival in Italy."] },
    { slug: "lina-han", name: "Lina Han", cred: "MMus, BMus", teaches: "Violin, introductory piano", photo: "lina-han.jpg",
      bio: ["Lina has been an orchestral violinist since a young age, regularly performing in BC orchestras such as the Vancouver Island Symphony, Prince George Symphony, Kamloops Symphony and the Fraser Valley Symphony. She has also performed at Vancouver's Rogers Arena. She holds a Bachelor's and Master's degree in Violin Performance from the University of British Columbia and studied under Canadian soloist Jasper Wood, Juno award winner Andrew Dawes and Eugenia Choi (Juilliard).", "She is a Certified Suzuki violin teacher (Hartford, Connecticut), a registered RCM violin teacher and a member of the Suzuki Association of the Americas. Most of her students receive first class honours in their RCM violin exams. She is fluent in both English and Mandarin Chinese and teaches all levels of violin."] },
    { slug: "arianne-m", name: "Arianne M", cred: "BA", teaches: "English: IELTS, TOEFL, CELPIP", photo: "arianne-m.jpg", english: true,
      bio: ["Arianne is a passionate and avid English teacher with a love for teaching and spreading the joy of learning English. Arianne is a BC Board of Education registered English teacher. She has worked in a variety of fields including music through play, early childhood instruction, and learning for students with ADHD. She has also worked in recording and accompaniment for orchestra and band ensembles in performance settings.", "Not only does Arianne believe that education enhances the mind, but she strives to encourage creativity and positivity in all her students so that they will be excited to take their exams. She has 6+ years of experience teaching IELTS and TOEFL."] }
  ],

  /* RCM exam results, as listed on the school's home page. */
  results: [
    ["Terrence Zhang", "Music Theory level 7", "Distinction 98"],
    ["Zachary Gao", "Music Theory level 5", "Distinction 100"],
    ["Sunny Tang", "Music Theory level 6", "Distinction 98"],
    ["Jacob Castro", "Piano level 9", "Honours"],
    ["Serena Cheng", "Piano level 8", "First Class Honours 88"],
    ["Olessya Ng", "Piano level 6", "First Class Honours 88"],
    ["Alyson", "Piano level 5", "First Class Honours 84"],
    ["Iris Zhu", "Piano level 3", "Honours"],
    ["Panshul Jaiman", "Piano level 3", "Honours"],
    ["Rianna T Chu", "Violin level 8", "Honours"],
    ["Angelina Zhang", "Violin level 6", "First Class Honours 83"],
    ["Nazanin Sadoughian", "Violin level 6", "Distinction 95"],
    ["Ayaka Iwai", "Violin level 6", "First Class Honours 83"],
    ["Callie Tan", "Violin level 4", "Distinction 98"],
    ["Agrima Jaiman", "Violin level 3", "Honours"]
  ],

  reviews: [
    { name: "Preeti", source: "Google", when: "6 months ago", text: "My two children have been taking piano and violin lessons here for over five years. My son is now in RCM level 10 piano and scored first class with distinction in his exams. Their teacher, Ms. Adrianne, is extremely dedicated." },
    { name: "Lan", source: "Google", when: "5 months ago", text: "My daughter is neurodiverse, and she absolutely loves her piano teacher, Chris." },
    { name: "Oni M", source: "centurymusic.ca", text: "Wow! Surprisingly wonderful and new school. The service here is excellent, extremely friendly reception and the teachers all have professional training but good with kids. My son really enjoys his piano class, which was a surprise for me. Recommend to anybody enrolling kids for the first time but also to those serious about pursuing music, the quality here is unbelievable for the price!" },
    { name: "Bill", source: "Google", when: "a while ago", text: "They have extremely flexible hours and we were easily able to fit my lessons around my work schedule." },
    { name: "William Lane", source: "centurymusic.ca", text: "I've now been coming here for over a year and a half. I strongly believe that taking piano lessons here was one of the better decisions I've made over the years. In such a short time, my abilities have soared! I now can confidently play many classical pieces and I truly enjoy the sound I'm able to generate." },
    { name: "Alana", source: "Google", when: "7 months ago", text: "The teacher is encouraging and makes lessons enjoyable, which really helps build confidence. It's clear they care about both skill and the student." },
    { name: "Lily", source: "Google", when: "6 months ago", text: "My child enjoyed the violin lessons! Teacher Chris Kim was fantastic. Best music lessons in Vancouver." },
    { name: "Fei W", source: "centurymusic.ca", text: "Reasonable price with experienced instructors. It's definitely the best choice if you are a new starter." },
    { name: "Al", source: "Google", when: "7 months ago", text: "Our two kids have been coming for about a year, one on piano and one on ukulele. Their skills and their love for the instruments have grown a lot." },
    { name: "Iris Jiang", source: "centurymusic.ca", text: "My kids enjoyed the music lessons here. The teachers are really nice and patient. They have also done a great job in Covid-19 protocols which makes us feel safe. We have been coming here for over a year." },
    { name: "Mark C", source: "centurymusic.ca", text: "My daughter is learning piano there, the teacher is really good and I would recommend it." }
  ],

  /* FAQ, grouped. Answers come from the payment, piano, violin, guitar and policy pages. */
  faq: [
    { g: "Booking and payment", q: "How do I register or book a class?", a: "On the payment page, buy the trial class (new students) or a 30-, 45- or 60-minute package. After paying, tell us which class you'd like and the student's name so we can book faster. Interac e-Transfer is also accepted. Once payment is received, we confirm the lesson time." },
    { g: "Booking and payment", q: "What are the payment methods?", a: "Pay online on the website, or by Interac e-Transfer, which saves the 3% card-processing fee. Larger packages get the biggest discounts." },
    { g: "Booking and payment", q: "Is there an age requirement?", a: "Piano students may start as young as 4, up to adults and seniors. For all other music, arts and language classes we recommend age 5 and above." },
    { g: "Booking and payment", q: "Can my child switch to another class?", a: "For 1:1 classes, yes. Let us know one week in advance which class you'd like to try or switch to. The new class must be the same duration." },
    { g: "Booking and payment", q: "Does a parent or guardian have to stay?", a: "No. You may drop off and pick up when the class is finished, sit in to watch, or wait outside the classroom." },
    { g: "Booking and payment", q: "What if the student can't come to a class?", a: "See the rescheduling policy: 24 hours' notice for a make-up within two weeks (in person or on Zoom), 48 hours' notice to postpone to after the term, and emergency requests before 10 am on a weekday. Missed classes without notice are charged with no make-up." },
    { g: "Piano", q: "What's the recommended age to start piano?", a: "The recommended age is 5. It's never too late, though: we have students as young as 4 and as mature as 60." },
    { g: "Piano", q: "Do we need to buy a piano right away?", a: "No. To begin, rent or buy a keyboard. It must have full-size keys and be touch-sensitive (play hard for a loud sound, softly for a soft one). Get at least 60 keys so you don't outgrow it too quickly; a regular piano has 88." },
    { g: "Piano", q: "Are there group piano classes?", a: "Yes. With \"form your own group class\" you can find one other student for a semi-private class of two, or three to four students, depending on current registration." },
    { g: "Violin", q: "What's the recommended age to start violin?", a: "The recommended age is 5. It's never too late to start learning and enjoying violin: Albert Einstein started at six." },
    { g: "Violin", q: "Where should a beginner start?", a: "Rent a violin from a music store such as Tom Lee or Long & McQuade. Violins come in sizes for different ages and the store will measure you. Don't forget a shoulder rest." },
    { g: "Guitar", q: "Do you teach children guitar?", a: "Yes. Children younger than 7 tend to struggle with the guitar, so for ages 5–8 we recommend starting on the ukulele, which shares the guitar's strings. Young guitarists should start on an acoustic guitar with nylon strings, easier on the fingers." },
    { g: "Guitar", q: "Where can I get a guitar?", a: "Guitars come in different sizes and budgets. For young beginners, go to a music store with a wide selection and ask a sales consultant to help you choose the right size." },
    { g: "Guitar", q: "I've always dreamed of playing a particular song. Can you help?", a: "Sure. We'll work with you on your favourite songs and styles." },
    { g: "Lessons", q: "Do you prepare students for RCM exams?", a: "Yes. Our teachers are RCM-certified and students regularly earn First Class Honours and Distinction, including top provincial marks. RCM exam results can also count toward high-school credits." },
    { g: "Lessons", q: "Do you teach online?", a: "Yes. Make-up lessons can be taken on Zoom, and the English exam course is taught online. Ask us about online options for your instrument." },
    { g: "Lessons", q: "Where do we park?", a: "Free residential street parking around the school. Buses 19, 25 and 20 stop in front, and Nanaimo SkyTrain is a six-minute drive." }
  ]
};
