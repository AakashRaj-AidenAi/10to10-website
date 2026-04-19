import {
  Palette,
  Music,
  Brain,
  Heart,
  Trophy,
  Sparkles,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  Utensils,
  Bus,
  Check,
  Sun,
} from "lucide-react";
import { BookButton } from "@/components/book-button";

export const metadata = {
  title: "Summer Camp 2026",
  description:
    "Two months of non-stop learning, creativity, and play at 10to10 Adventures' Summer Camp in Khammam. Ages 3–12. Limited seats.",
};

const activities = [
  {
    icon: Palette,
    title: "Art & Craft",
    desc: "Painting, clay, origami, recycling crafts, and themed art projects that unlock creative confidence.",
    color: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: Music,
    title: "Dance & Music",
    desc: "Freestyle, hip-hop basics, rhythm games, and a final showcase for parents at the closing ceremony.",
    color: "bg-brand-grape/10 text-brand-grape",
  },
  {
    icon: Brain,
    title: "Brain Games",
    desc: "Puzzles, memory challenges, chess intro, Rubik's cube, coding basics and logic puzzles.",
    color: "bg-brand-turquoise/10 text-brand-turquoise",
  },
  {
    icon: Heart,
    title: "Yoga & Meditation",
    desc: "Kid-friendly yoga, breathing techniques, mindfulness and story-based meditation sessions.",
    color: "bg-brand-mint/20 text-brand-turquoise",
  },
  {
    icon: Trophy,
    title: "Sports & Games",
    desc: "Indoor sports, relay races, obstacle courses, team games and daily free-play in the soft-play arena.",
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: Sparkles,
    title: "Special Days",
    desc: "Theme days — pyjama party, superhero day, cultural day, water day, movie day and a grand finale.",
    color: "bg-brand-yellow/20 text-brand-orange",
  },
];

const schedule = [
  { time: "09:00 – 09:30", activity: "Welcome circle & warm-up", tag: "Morning" },
  { time: "09:30 – 10:30", activity: "Activity Block 1 — Art / Dance / Brain", tag: "Creative" },
  { time: "10:30 – 11:00", activity: "Healthy snack break", tag: "Break" },
  { time: "11:00 – 12:00", activity: "Activity Block 2 — Yoga / Games / Music", tag: "Active" },
  { time: "12:00 – 12:30", activity: "Free play in soft-play arena", tag: "Play" },
  { time: "12:30 – 13:00", activity: "Story time & wrap-up", tag: "Wind-down" },
];

const ageGroups = [
  {
    name: "Little Explorers",
    age: "3 – 5 yrs",
    desc: "Sensory play, basic craft, music & movement, gentle yoga and loads of free play.",
    color: "from-brand-yellow/30 to-brand-orange/10",
    ring: "border-brand-orange/30",
  },
  {
    name: "Young Adventurers",
    age: "6 – 9 yrs",
    desc: "Structured art, dance, brain games, team sports, coding intro and themed workshops.",
    color: "from-brand-primary/20 to-brand-grape/10",
    ring: "border-brand-primary/30",
    highlight: true,
  },
  {
    name: "Teen Creators",
    age: "10 – 12 yrs",
    desc: "Advanced craft, chess, cube solving, gaming challenges, photography basics and leadership games.",
    color: "from-brand-turquoise/25 to-brand-grape/10",
    ring: "border-brand-turquoise/30",
  },
];

const pricing = [
  {
    name: "Weekly Pass",
    price: "₹2,499",
    period: "/ week",
    popular: false,
    perks: ["5 days of fun", "All activities", "Daily snacks", "Certificate"],
  },
  {
    name: "Monthly Pass",
    price: "₹8,999",
    period: "/ month",
    popular: true,
    perks: [
      "20 days of fun",
      "All activities + special days",
      "Daily snacks & one hot meal",
      "Camp kit (t-shirt, cap, bag)",
      "Certificate + photo album",
      "Free trial session",
    ],
  },
  {
    name: "Full Camp",
    price: "₹15,999",
    period: "/ 2 months",
    popular: false,
    perks: [
      "40 days of non-stop joy",
      "All monthly perks",
      "2 field trips",
      "Premium camp kit",
      "Grand finale performance",
      "10% sibling discount",
    ],
  },
];

const faqs = [
  {
    q: "What are the camp dates?",
    a: "April 1 – May 31, 2026. Monday to Friday, 9 AM to 1 PM. Weekends off. You can join weekly, monthly, or for the full 2 months.",
  },
  {
    q: "Is food provided?",
    a: "Yes. All passes include a healthy snack break. The Monthly and Full Camp passes also include one hot meal daily. Please inform us of any allergies during enrollment.",
  },
  {
    q: "Is there transportation?",
    a: "Pick-up and drop-off can be arranged within a 5 km radius of Khammam for an additional fee of ₹999/month. Please confirm availability when booking.",
  },
  {
    q: "Can my child join mid-week?",
    a: "Absolutely! We prorate the weekly fee so your child can join any day. Reach out on WhatsApp and we'll get you sorted in minutes.",
  },
  {
    q: "Is a trial session available?",
    a: "Yes — we offer a free 2-hour trial session for Monthly and Full Camp enrollments so your child can meet the team before committing.",
  },
  {
    q: "How many kids per batch?",
    a: "We cap each age group at 20 kids with a 1:8 staff-to-child ratio, so every child gets personal attention and stays safe.",
  },
  {
    q: "What should my child bring?",
    a: "Just a water bottle, a change of clothes, and a spare pair of socks. We provide all art supplies, games, mats, and the camp kit.",
  },
  {
    q: "Are there any hidden fees?",
    a: "None. The listed price includes everything except optional transportation. Field trip costs are covered in the Full Camp pass.",
  },
];

const included = [
  { icon: Utensils, label: "Snacks & meals" },
  { icon: ShieldCheck, label: "Trained staff" },
  { icon: Users, label: "1:8 ratio" },
  { icon: Bus, label: "Pickup (optional)" },
];

export default function SummerCampPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="absolute inset-0 bg-confetti bg-[length:160px_160px] opacity-30" />

        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 chip bg-white/80 backdrop-blur border-2 border-brand-primary/20 font-bold text-brand-primary">
              <Sun className="h-3.5 w-3.5" />
              Summer Camp 2026
            </span>
            <h1 className="heading-xl mt-5">
              Where summer turns into{" "}
              <span className="gradient-text">unforgettable</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-ink/75 leading-relaxed max-w-2xl">
              Two months of art, dance, games, yoga, brain challenges and pure
              joy — for kids aged 3 to 12. Small batches, trained mentors, and
              a day your child will beg to repeat tomorrow.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BookButton preset="Summer Camp" className="text-base">
                Reserve a Spot
              </BookButton>
              <a href="#schedule" className="btn-ghost text-base">
                See the daily schedule
              </a>
            </div>

            {/* Quick facts row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Calendar, label: "Apr 1 – May 31", sub: "2026" },
                { icon: Clock, label: "9 AM – 1 PM", sub: "Mon – Fri" },
                { icon: Users, label: "Ages 3 – 12", sub: "3 batches" },
                { icon: ShieldCheck, label: "Limited seats", sub: "Book early" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl bg-white/80 backdrop-blur border-2 border-white p-4 shadow-lifted"
                >
                  <f.icon className="h-5 w-5 text-brand-primary mb-2" />
                  <div className="font-bold text-sm">{f.label}</div>
                  <div className="text-xs text-brand-ink/55 mt-0.5">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> What's inside
            </span>
            <h2 className="heading-lg mt-4">
              Six activity tracks. <span className="gradient-text">Zero boring days.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl border-2 border-brand-ink/5 bg-white p-7 hover:-translate-y-1 hover:shadow-lifted transition"
              >
                <div className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center ${a.color}`}>
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mt-5">{a.title}</h3>
                <p className="text-sm text-brand-ink/70 mt-2 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGE GROUPS */}
      <section className="section bg-white/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Age-based batches
            </span>
            <h2 className="heading-lg mt-4">
              A camp that grows with your child
            </h2>
            <p className="mt-4 text-brand-ink/65">
              Every age group gets its own curriculum, mentor, and pace — because
              a 4-year-old and a 10-year-old need very different kinds of fun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((g) => (
              <div
                key={g.name}
                className={`relative rounded-3xl border-2 p-8 bg-gradient-to-br ${g.color} ${g.ring} ${
                  g.highlight ? "md:scale-105 shadow-glow" : ""
                }`}
              >
                {g.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-primary text-white font-bold">
                    Most popular
                  </span>
                )}
                <div className="text-xs font-bold uppercase tracking-wider text-brand-ink/55">
                  {g.age}
                </div>
                <h3 className="font-display text-2xl font-bold mt-2">{g.name}</h3>
                <p className="text-sm text-brand-ink/75 mt-3 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section id="schedule" className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <span className="eyebrow">A day at camp</span>
              <h2 className="heading-lg mt-4">
                Four hours of <span className="gradient-text">pure magic</span>
              </h2>
              <p className="mt-5 text-brand-ink/70 leading-relaxed">
                Our day is carefully balanced between structured learning and
                free play, so kids stay engaged without ever feeling rushed.
                Parents drop off at 9 AM and pick up at 1 PM — stress-free.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {included.map((i) => (
                  <div
                    key={i.label}
                    className="flex items-center gap-3 rounded-2xl bg-white border-2 border-brand-ink/5 p-3"
                  >
                    <i.icon className="h-5 w-5 text-brand-primary shrink-0" />
                    <span className="text-sm font-semibold">{i.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ol className="relative border-l-2 border-dashed border-brand-primary/30 ml-4 space-y-5">
                {schedule.map((s, i) => (
                  <li key={s.time} className="relative pl-6">
                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-primary ring-4 ring-white" />
                    <div className="rounded-2xl bg-white border-2 border-brand-ink/5 p-5 hover:border-brand-primary/30 transition">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs font-bold text-brand-primary">
                          {s.time}
                        </div>
                        <span className="chip bg-brand-ink/5 text-brand-ink/60">
                          {s.tag}
                        </span>
                      </div>
                      <div className="font-semibold mt-1">{s.activity}</div>
                    </div>
                    {i === 0 && (
                      <span className="hidden lg:block absolute -left-20 top-3 text-xs font-bold text-brand-primary">
                        START
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark opacity-50" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Pricing
            </span>
            <h2 className="heading-lg mt-4">
              Pick a pass.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-primary">
                Pack the sunscreen.
              </span>
            </h2>
            <p className="mt-4 text-white/70">
              All passes include every activity, daily snacks, trained mentors,
              and access to the full 10to10 Adventures playground.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border ${
                  p.popular
                    ? "bg-gradient-to-br from-brand-primary to-brand-grape border-transparent shadow-glow md:scale-105"
                    : "glass-dark"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-yellow text-brand-ink font-bold">
                    Best value
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">
                    {p.price}
                  </span>
                  <span className="text-white/60 text-sm">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-sm">
                      <Check className="h-5 w-5 shrink-0 text-brand-yellow" />
                      <span className="text-white/85">{perk}</span>
                    </li>
                  ))}
                </ul>
                <BookButton
                  preset="Summer Camp"
                  variant={p.popular ? "white" : "ghost"}
                  className="w-full mt-8"
                >
                  Reserve {p.name}
                </BookButton>
              </div>
            ))}
          </div>

          <p className="text-center text-white/50 text-sm mt-8">
            Sibling discount: 10% off the second child. Membership discount: Silver
            20% · Gold 30% · Platinum 40%.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Parent questions
            </span>
            <h2 className="heading-lg mt-4">Everything parents ask us</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border-2 border-brand-ink/5 hover:border-brand-primary/20 transition overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold">
                  <span>{f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-brand-ink/5 flex items-center justify-center text-xl group-open:rotate-45 transition shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-brand-ink/70 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-brand-primary-deep to-brand-grape p-10 md:p-16 text-white text-center shadow-glow">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <div className="text-5xl mb-4">☀️</div>
              <h2 className="heading-lg">
                Limited seats. Filling fast.
              </h2>
              <p className="mt-4 text-white/85">
                Last year's camp sold out 3 weeks before the start date. Reserve
                your child's spot today with a ₹500 deposit — fully refundable
                until March 15.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <BookButton preset="Summer Camp" variant="white">
                  Reserve with ₹500
                </BookButton>
                <a href="tel:+919256787788" className="btn-ghost bg-white/10 !text-white !border-white/30">
                  Talk to us first
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
