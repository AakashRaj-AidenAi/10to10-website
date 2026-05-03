export const programs = [
  {
    slug: "playgroup",
    name: "Playgroup",
    age: "1.5 – 2.5 yrs",
    duration: "9 AM – 12 PM",
    ratio: "1 : 6",
    desc: "Sensory play, music, story time and gentle separation from parents in a warm, secure environment.",
    color: "from-amber-100 to-amber-50",
    accent: "text-amber-700",
  },
  {
    slug: "nursery",
    name: "Nursery",
    age: "2.5 – 3.5 yrs",
    duration: "9 AM – 12 PM",
    ratio: "1 : 8",
    desc: "Pre-writing, basic phonics, motor skills and structured group play introducing routine and friendship.",
    color: "from-rose-100 to-rose-50",
    accent: "text-rose-700",
  },
  {
    slug: "lkg",
    name: "Lower KG",
    age: "3.5 – 4.5 yrs",
    duration: "9 AM – 12:30 PM",
    ratio: "1 : 10",
    desc: "Reading, writing, numeracy, science exploration and confidence-building through Montessori materials.",
    color: "from-teal-100 to-teal-50",
    accent: "text-teal-700",
  },
  {
    slug: "ukg",
    name: "Upper KG",
    age: "4.5 – 5.5 yrs",
    duration: "9 AM – 12:30 PM",
    ratio: "1 : 10",
    desc: "School-readiness in language, math and science with leadership opportunities and creative expression.",
    color: "from-indigo-100 to-indigo-50",
    accent: "text-indigo-700",
  },
];

export const curriculum = [
  {
    title: "Cognitive",
    desc: "Problem-solving, memory games, pattern recognition, early numeracy.",
  },
  {
    title: "Language",
    desc: "Phonics, story-telling, vocabulary building in English and Telugu.",
  },
  {
    title: "Social",
    desc: "Sharing, turn-taking, group projects and conflict-resolution skills.",
  },
  {
    title: "Motor",
    desc: "Fine motor (threading, lacing) and gross motor (climbing, balancing).",
  },
  {
    title: "Creative",
    desc: "Music, dance, painting, clay-modelling and free expression time.",
  },
  {
    title: "Values",
    desc: "Empathy, gratitude, mindfulness practices, age-appropriate yoga.",
  },
];

export const dailySchedule = [
  { time: "9:00 AM", activity: "Arrival & free play" },
  { time: "9:30 AM", activity: "Circle time & morning ritual" },
  { time: "10:00 AM", activity: "Theme of the day" },
  { time: "10:45 AM", activity: "Snack & hydration" },
  { time: "11:00 AM", activity: "Outdoor / soft-play break" },
  { time: "11:30 AM", activity: "Activity stations" },
  { time: "12:00 PM", activity: "Story time & wind down" },
  { time: "12:30 PM", activity: "Pickup" },
];

export const fees = [
  {
    plan: "Quarterly",
    program: "Playgroup / Nursery",
    price: "₹18,000",
    period: "/ quarter",
    note: "3-month commitment",
    popular: false,
  },
  {
    plan: "Annual",
    program: "Playgroup / Nursery",
    price: "₹62,000",
    period: "/ year",
    note: "Best value · Save ₹10,000",
    popular: true,
  },
  {
    plan: "Annual",
    program: "LKG / UKG",
    price: "₹78,000",
    period: "/ year",
    note: "Includes books, uniform, activities",
    popular: false,
  },
];

export const admissionSteps = [
  {
    n: "01",
    title: "Submit inquiry",
    desc: "Fill the admission form below or WhatsApp us. We respond within 4 hours on weekdays.",
  },
  {
    n: "02",
    title: "Campus visit",
    desc: "Tour the facility, meet our teachers, see the play areas, ask anything. ~45 minutes.",
  },
  {
    n: "03",
    title: "Free trial day",
    desc: "Your child spends a half-day with the class. No pressure, no commitment.",
  },
  {
    n: "04",
    title: "Enrollment",
    desc: "Submit documents, pay the term fee, and welcome to the 10to10 family.",
  },
];

export const whyUs = [
  {
    title: "Montessori-certified teachers",
    desc: "Every educator holds a Montessori or early-childhood certification with 3+ years of experience.",
  },
  {
    title: "1:8 child-teacher ratio",
    desc: "We deliberately stay below the industry standard so every child is genuinely seen.",
  },
  {
    title: "Daily reports app",
    desc: "Photos, meals, mood and milestones delivered to your phone before pickup every day.",
  },
  {
    title: "CCTV + biometric entry",
    desc: "Full premises monitoring and authorised-pickup biometrics. Parents can view anytime.",
  },
  {
    title: "Open-door policy",
    desc: "Visit unannounced any time. We have nothing to hide and everything to show.",
  },
  {
    title: "Sanitised hourly",
    desc: "Toys, surfaces and bathrooms cleaned every hour during operating hours.",
  },
];

export const playSchoolFaqs = [
  {
    q: "What is the minimum age for admission?",
    a: "We accept children from 18 months for Playgroup. They should ideally be walking confidently and able to spend ~3 hours away from a parent.",
  },
  {
    q: "What are the school timings?",
    a: "Playgroup and Nursery: 9 AM – 12 PM. LKG and UKG: 9 AM – 12:30 PM. We're open Monday to Friday. Saturday is reserved for parent-engagement events.",
  },
  {
    q: "Do you provide transport?",
    a: "Currently no. We're located on Mamatha College Road which is central enough that most families do their own pickup. We're happy to coordinate carpools.",
  },
  {
    q: "What about food and snacks?",
    a: "We provide a fresh, nutritionist-approved snack mid-morning. Lunch is parent-packed. We strictly enforce a no-junk-food policy and accommodate allergies.",
  },
  {
    q: "What happens if my child is sick?",
    a: "Please keep them home if they have fever, cough or diarrhea. We send a sick child home immediately to protect everyone. Make-up days for prolonged illness are case-by-case.",
  },
  {
    q: "What is the vacation calendar?",
    a: "Term 1: June – Sept · Term 2: Oct – Dec · Term 3: Jan – March. Standard Indian holidays plus a 2-week summer break in April.",
  },
  {
    q: "What is the fee refund policy?",
    a: "Full refund within 7 days of enrollment if your child has not attended a single session. After attendance begins, fees are non-refundable but transferable to a sibling.",
  },
  {
    q: "How often are parent-teacher meetings?",
    a: "Quarterly formal PTMs plus an open-door policy any time. We also host monthly themed parent workshops on topics like screen time, nutrition, sleep.",
  },
  {
    q: "Is there a uniform?",
    a: "Yes — comfortable, weather-appropriate, included in the annual fee. We avoid restrictive clothing that hampers free movement.",
  },
  {
    q: "Can I observe a class before deciding?",
    a: "Absolutely. We offer a free trial day where your child joins a real class. Many parents also stay on a back-bench to observe directly.",
  },
];

export const parentStories = [
  {
    quote:
      "We toured 4 play schools in Khammam before choosing 10to10. The 1:8 ratio made the difference — our daughter actually gets attention, not crowd-control.",
    name: "Vasudha & Karthik",
    program: "Nursery, enrolled 2025",
  },
  {
    quote:
      "The daily reports are a game-changer. We see exactly what our son ate, when he napped, what he learned. No more 'how was school today?' interrogations at dinner.",
    name: "Sneha P.",
    program: "Playgroup, enrolled 2026",
  },
  {
    quote:
      "What sold us was the open-door policy. We dropped in unannounced twice — both times the place was clean, calm and the kids were genuinely engaged. That's rare.",
    name: "Rajesh M.",
    program: "LKG, enrolled 2025",
  },
];
