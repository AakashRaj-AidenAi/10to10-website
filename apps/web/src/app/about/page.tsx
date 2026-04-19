import { Heart, Users, Shield, Sparkles } from "lucide-react";
import { BookButton } from "@/components/book-button";

export const metadata = {
  title: "About Us",
  description:
    "10to10 Adventures — Khammam's favourite family playground. Our story, our values, and the team behind the fun.",
};

const values = [
  {
    icon: Heart,
    title: "Joy first",
    desc: "Every decision we make starts with the question: will this make a kid smile? If the answer is yes, it's in.",
  },
  {
    icon: Shield,
    title: "Safety, always",
    desc: "Trained staff, sanitised equipment, padded everything, and eyes on every corner. Your child is in good hands.",
  },
  {
    icon: Users,
    title: "Family feels",
    desc: "We're not a factory — we know kids by name. Parents are friends. Staff stick around for years.",
  },
  {
    icon: Sparkles,
    title: "Wonder fuel",
    desc: "We believe play is learning, celebration is memory, and the best childhood is the one kids remember forever.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="absolute inset-0 bg-confetti bg-[length:160px_160px] opacity-25" />
        <div className="container relative max-w-3xl">
          <span className="inline-flex items-center gap-2 chip bg-white/80 backdrop-blur border-2 border-brand-primary/20 font-bold text-brand-primary">
            <Heart className="h-3.5 w-3.5" /> Our story
          </span>
          <h1 className="heading-xl mt-5">
            We built <span className="gradient-text">the playground</span> we wished we had.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 leading-relaxed">
            10to10 Adventures started with a simple idea: every kid in Khammam
            deserves a place that&apos;s safe, vibrant, and genuinely fun — and every
            parent deserves a break without the guilt.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose prose-lg text-brand-ink/75 leading-relaxed space-y-5 text-lg">
            <p>
              Khammam has a lot to love, but for years, parents had to choose between
              cramped play zones, pricey chain outlets, or long drives to Hyderabad
              for a decent birthday venue. We knew our city deserved better.
            </p>
            <p>
              So we built 10to10 Adventures — seven distinct zones under one roof,
              designed around a single question: what would make a child&apos;s eyes
              light up the moment they walk in? The answer turned into a 2,400 sq ft
              soft-play arena, a Montessori-inspired play school, a gaming lounge,
              a private theatre, a themed party room, a snack bar, and a curated
              toy stall.
            </p>
            <p>
              We&apos;re a small team — just 23 of us — but every one of us takes this
              personally. Our play-school teachers know each child&apos;s favourite book.
              Our party hosts remember the kids who came last year and greet them
              by name. Our cleaning crew sanitises the ball pit three times a day.
              This isn&apos;t a franchise formula. It&apos;s our home town, and these are our
              kids.
            </p>
            <p>
              If you have a child in Khammam, we want to know you. Come say hi.
              The first visit is on us.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-white/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> What we believe
            </span>
            <h2 className="heading-lg mt-4">
              Four things we <span className="gradient-text">never compromise</span> on
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white border-2 border-brand-ink/5 p-7 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lifted transition"
              >
                <div className="inline-flex w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mt-5">{v.title}</h3>
                <p className="text-sm text-brand-ink/70 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { n: "7", l: "Zones under one roof" },
              { n: "2,400", l: "Sq ft of play" },
              { n: "23", l: "Team members" },
              { n: "10,000+", l: "Happy visits a year" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-3xl bg-white border-2 border-brand-ink/5 p-6 text-center shadow-lifted"
              >
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text">
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-brand-ink/60 mt-2 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-brand-primary-deep to-brand-grape p-10 md:p-16 text-white text-center shadow-glow">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="heading-lg">
                Come meet us. <span className="text-brand-yellow">First visit&apos;s on us.</span>
              </h2>
              <p className="mt-4 text-white/85">
                Book a free trial session and see why Khammam families keep coming back.
              </p>
              <div className="mt-8">
                <BookButton preset="Play Session" variant="white">
                  Book my free visit
                </BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
