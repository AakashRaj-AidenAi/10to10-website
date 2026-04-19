export type PartyPackage = {
  slug: string;
  name: string;
  price: string;
  guests: string;
  duration: string;
  tagline: string;
  highlight?: boolean;
  includes: string[];
};

export const packages: PartyPackage[] = [
  {
    slug: "mini",
    name: "Mini Celebration",
    price: "₹7,999",
    guests: "Up to 15 kids",
    duration: "2 hours",
    tagline: "Cosy, joyful, and totally stress-free.",
    includes: [
      "Decorated party room",
      "1 hour soft-play access",
      "Party host for entertainment",
      "Basic theme decoration",
      "Invitation cards (digital)",
      "Birthday music playlist",
    ],
  },
  {
    slug: "classic",
    name: "Classic Birthday Bash",
    price: "₹12,999",
    guests: "Up to 25 kids",
    duration: "3 hours",
    tagline: "Our most-loved package. Balanced, generous, perfect.",
    highlight: true,
    includes: [
      "Everything in Mini, plus:",
      "Premium theme decoration of your choice",
      "2 hours soft-play + gaming access",
      "Party host with games & activities",
      "Snack platter for kids (chips, cookies, juice)",
      "Cake cutting ceremony setup",
      "Dedicated photo corner",
      "Balloon arch at entry",
    ],
  },
  {
    slug: "grand",
    name: "Grand Celebration",
    price: "₹19,999",
    guests: "Up to 40 kids",
    duration: "4 hours",
    tagline: "Go all out. Make the day unforgettable.",
    includes: [
      "Everything in Classic, plus:",
      "Full-venue access (all 7 zones)",
      "Private theatre screening (45 min)",
      "Hot meal for kids + parent refreshments",
      "Custom cake (up to 2 kg)",
      "Goodie bags for every child",
      "Face painter (1 hour)",
      "Professional photographer (1 hour)",
      "Custom party playlist",
    ],
  },
];

export const themes = [
  { name: "Unicorn Magic", icon: "🦄", color: "from-pink-300 to-purple-300" },
  { name: "Superhero Squad", icon: "🦸", color: "from-blue-400 to-red-400" },
  { name: "Jungle Safari", icon: "🦁", color: "from-green-300 to-yellow-400" },
  { name: "Space Explorer", icon: "🚀", color: "from-indigo-400 to-purple-500" },
  { name: "Under the Sea", icon: "🐠", color: "from-cyan-300 to-blue-400" },
  { name: "Princess Palace", icon: "👑", color: "from-pink-400 to-rose-300" },
  { name: "Dino World", icon: "🦖", color: "from-emerald-400 to-lime-400" },
  { name: "Pick your own", icon: "✨", color: "from-brand-yellow to-brand-orange" },
];

export const steps = [
  {
    n: "01",
    title: "Pick a package & date",
    desc: "Tell us your preferred date, guest count, and package. We'll confirm availability within hours.",
  },
  {
    n: "02",
    title: "Choose your theme",
    desc: "Pick from our 8 themes or tell us your own — we'll match decor, playlist, and photo corner.",
  },
  {
    n: "03",
    title: "Pay 30% deposit",
    desc: "Secure the date with a ₹2,000 (or 30%) refundable deposit. Balance payable on event day.",
  },
  {
    n: "04",
    title: "Send the invites",
    desc: "We design a custom digital invitation card for you to share on WhatsApp within 24 hours.",
  },
  {
    n: "05",
    title: "Show up & celebrate",
    desc: "Arrive 30 min early to meet your party host. We handle setup, cleanup, and everything in between.",
  },
];

export const addons = [
  { name: "Extra cake (per kg)", price: "₹1,200", icon: "🎂" },
  { name: "Goodie bags (per child)", price: "₹199", icon: "🎁" },
  { name: "Extra theatre hour", price: "₹2,499", icon: "🎬" },
  { name: "Magician (45 min)", price: "₹3,999", icon: "🎩" },
  { name: "Professional photographer (2 hr)", price: "₹4,999", icon: "📸" },
  { name: "Bounce house rental", price: "₹2,999", icon: "🎪" },
  { name: "Face painter (1 hr)", price: "₹1,799", icon: "🎨" },
  { name: "Custom cake topper", price: "₹499", icon: "🧁" },
];

export const partyFaqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2 weeks ahead for weekends and holidays. Weekday slots can usually be confirmed within 48 hours. Peak months (Nov–Feb) fill up fast.",
  },
  {
    q: "Can I customise the theme and decor?",
    a: "Absolutely. Our 8 themes are starting points — share your vision, mood board, or a Pinterest link and we'll tailor the decor to match. Fully custom themes may have a small surcharge.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations more than 7 days before the event get a full deposit refund. Between 3–7 days, 50% refund. Less than 72 hours, the deposit is non-refundable but we'll happily reschedule within 90 days at no extra cost.",
  },
  {
    q: "Can you handle dietary restrictions?",
    a: "Yes. We offer vegetarian, Jain, eggless, and gluten-free options. Please inform us of any allergies or restrictions at least 48 hours before the event.",
  },
  {
    q: "Can parents stay during the party?",
    a: "Of course — we encourage it! Parents get their own seating area with complimentary tea/coffee in Classic and Grand packages.",
  },
  {
    q: "Do you provide the cake or do we bring our own?",
    a: "Both options work. Classic and Grand packages include a custom cake. You're welcome to bring your own (no cake cutting fee) or add extra cake as an add-on.",
  },
  {
    q: "What is the earliest and latest start time?",
    a: "Parties can start any time between 10 AM and 8 PM, Monday to Sunday. Evening slots are most popular — book early.",
  },
];

export const partyTestimonials = [
  {
    quote:
      "We had our daughter's 5th birthday here and I can't stop raving about it. The decor was exactly as I'd pinned, the host was incredible with the kids, and I actually got to enjoy the party instead of running it. Worth every rupee.",
    name: "Sneha P.",
    role: "Mom of 5-year-old",
    package: "Grand Celebration",
  },
  {
    quote:
      "Booked the Classic package for my twin boys' 7th birthday. 24 kids, zero stress, incredible food, and the private theatre show was the highlight. The staff treated us like family.",
    name: "Rakesh A.",
    role: "Dad of twins",
    package: "Classic Birthday Bash",
  },
  {
    quote:
      "First birthday party I've hosted where I didn't cry from exhaustion at the end. The team at 10to10 handled every tiny detail. Goodie bags, cake cutting, photos — all done. Booking them again next year.",
    name: "Divya K.",
    role: "Mom of 3-year-old",
    package: "Mini Celebration",
  },
];
