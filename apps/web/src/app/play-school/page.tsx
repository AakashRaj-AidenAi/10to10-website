import type { Metadata } from "next";
import {
  programs,
  curriculum,
  dailySchedule,
  fees,
  admissionSteps,
  whyUs,
  playSchoolFaqs,
  parentStories,
} from "@/content/playschool";
import { AdmissionForm } from "@/components/admission-form";
import { BookButton } from "@/components/book-button";
import { Star, Check, ArrowRight, Clock, Users, Calendar } from "lucide-react";
import {
  BlocksIcon,
  PencilIcon,
  PaletteIcon,
  YogaIcon,
  HeartIcon,
  BookIcon,
  ShieldIcon,
  UsersIcon,
  SparkleIcon,
  UnderlineSquiggle,
} from "@/components/vectors";
import { siteConfig } from "@/lib/utils";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Play School Khammam — Montessori Preschool | Admissions Open 2026",
  description:
    "10to10 Adventures Play School in Khammam — Montessori-inspired preschool for ages 1.5 to 5.5. Trained teachers, 1:8 ratio, daily reports, free trial day. Admissions open for 2026.",
  keywords: [
    "play school Khammam",
    "preschool Khammam",
    "Montessori Khammam",
    "best play school Khammam",
    "kindergarten Khammam admission 2026",
    "nursery Khammam",
  ],
  openGraph: {
    title: "Play School Khammam — Admissions Open 2026 | 10to10 Adventures",
    description:
      "Montessori-inspired preschool in Khammam. 1:8 ratio, trained teachers, daily reports, free trial day.",
    type: "website",
  },
  alternates: { canonical: "/play-school" },
};

const curriculumIcons = [
  { Icon: BlocksIcon, color: "bg-amber-100 text-amber-700" },
  { Icon: BookIcon, color: "bg-rose-100 text-rose-700" },
  { Icon: UsersIcon, color: "bg-teal-100 text-teal-700" },
  { Icon: YogaIcon, color: "bg-indigo-100 text-indigo-700" },
  { Icon: PaletteIcon, color: "bg-purple-100 text-purple-700" },
  { Icon: HeartIcon, color: "bg-pink-100 text-pink-700" },
];

const preschoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "10to10 Adventures Play School",
  description:
    "Montessori-inspired play school in Khammam offering Playgroup, Nursery, LKG, and UKG programs for children aged 1.5 to 5.5 years.",
  url: `${siteConfig.url}/play-school`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mamatha College Road, Above Just Bake",
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  hasCredential: "Montessori-certified educators",
  educationalLevel: "Preschool",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: playSchoolFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PlaySchoolPage() {
  return (
    <>
      <Script id="ld-preschool" type="application/ld+json">
        {JSON.stringify(preschoolJsonLd)}
      </Script>
      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>

      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none" />

        <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-black/[0.08] px-4 py-1.5 text-xs font-semibold text-brand-ink/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-brand-primary" />
              </span>
              Admissions open for 2026 · 12 seats remaining
            </span>
            <h1 className="heading-xl mt-5">
              Where little learners{" "}
              <span className="relative inline-block">
                <span className="accent">find their spark</span>
                <UnderlineSquiggle className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow" />
              </span>
              .
            </h1>
            <p className="mt-6 text-base md:text-lg text-brand-ink/65 leading-relaxed max-w-xl">
              A Montessori-inspired play school in the heart of Khammam.
              Trained teachers, a 1:8 ratio, daily reports to your phone, and
              an open-door policy that means you can drop in any time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#admission" className="btn-primary">
                Inquire about admission <ArrowRight className="h-4 w-4" />
              </a>
              <BookButton preset="Play School" variant="ghost">
                Book a campus visit
              </BookButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-brand-ink/50">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-primary" />
                1:8 child–teacher ratio
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-brand-primary" />
                CCTV + biometric entry
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-brand-primary" />
                Montessori-certified teachers
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-brand-primary/15 via-brand-yellow/15 to-brand-turquoise/15 border border-black/[0.07] grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-2 p-2 opacity-90">
                {/* placeholder for real photo - illustrated mosaic */}
                <div className="col-span-2 row-span-2 rounded-2xl bg-brand-primary/15 grid place-items-center">
                  <BlocksIcon className="h-16 w-16 text-brand-primary" />
                </div>
                <div className="rounded-2xl bg-brand-yellow/30 grid place-items-center">
                  <SparkleIcon className="h-8 w-8 text-amber-700" />
                </div>
                <div className="rounded-2xl bg-brand-turquoise/20 grid place-items-center">
                  <PaletteIcon className="h-8 w-8 text-brand-turquoise" />
                </div>
                <div className="rounded-2xl bg-rose-100 grid place-items-center">
                  <HeartIcon className="h-8 w-8 text-rose-600" />
                </div>
                <div className="col-span-2 rounded-2xl bg-indigo-100 grid place-items-center">
                  <BookIcon className="h-10 w-10 text-indigo-700" />
                </div>
                <div className="rounded-2xl bg-purple-100 grid place-items-center">
                  <YogaIcon className="h-8 w-8 text-purple-700" />
                </div>
                <div className="col-span-2 rounded-2xl bg-teal-100 grid place-items-center">
                  <UsersIcon className="h-10 w-10 text-teal-700" />
                </div>
                <div className="rounded-2xl bg-amber-100 grid place-items-center">
                  <PencilIcon className="h-8 w-8 text-amber-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Our programs</span>
            <h2 className="heading-lg mt-3">
              A program for every <span className="accent">tiny milestone.</span>
            </h2>
            <p className="mt-4 text-brand-ink/60 leading-relaxed">
              Four progressive stages from confident toddler to school-ready learner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((p) => (
              <div key={p.slug} className="card card-hover p-6">
                <div className={`text-xs font-bold uppercase tracking-widest ${p.accent}`}>
                  {p.age}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-ink mt-1">
                  {p.name}
                </h3>
                <p className="text-sm text-brand-ink/65 mt-3 leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-5 border-t border-black/[0.07] grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-brand-ink/45 font-medium">Timing</div>
                    <div className="font-semibold text-brand-ink mt-0.5">{p.duration}</div>
                  </div>
                  <div>
                    <div className="text-brand-ink/45 font-medium">Ratio</div>
                    <div className="font-semibold text-brand-ink mt-0.5">{p.ratio}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section bg-white border-y border-black/[0.07]">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Curriculum</span>
            <h2 className="heading-lg mt-3">
              Six pillars of <span className="accent">whole-child development.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculum.map((c, i) => {
              const { Icon, color } = curriculumIcons[i];
              return (
                <div key={c.title} className="card card-hover p-6">
                  <div className={`inline-flex w-11 h-11 rounded-xl items-center justify-center ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-ink mt-5">
                    {c.title}
                  </h3>
                  <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A DAY AT 10TO10 */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">A day at 10to10</span>
            <h2 className="heading-lg mt-3">
              Structure with <span className="accent">space to play.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {dailySchedule.map((s, i) => (
              <div key={i} className="card p-5 flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary grid place-items-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    {s.time}
                  </div>
                  <div className="font-medium text-brand-ink mt-1 text-sm">{s.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="section bg-white border-y border-black/[0.07]">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Fees & schedule</span>
            <h2 className="heading-lg mt-3">
              Transparent pricing, <span className="accent">zero surprises.</span>
            </h2>
            <p className="mt-4 text-brand-ink/60 leading-relaxed">
              All fees include curriculum materials, daily snack, uniform, and access
              to all 7 zones during play hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            {fees.map((f, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-7 transition ${
                  f.popular
                    ? "bg-brand-ink text-white border border-brand-primary/40 ring-1 ring-brand-primary/30"
                    : "card"
                }`}
              >
                {f.popular && (
                  <span className="absolute -top-2.5 left-6 chip bg-brand-primary text-white !text-[11px]">
                    Best value
                  </span>
                )}
                <div className={`text-xs font-bold uppercase tracking-widest ${f.popular ? "text-brand-primary" : "text-brand-ink/45"}`}>
                  {f.plan}
                </div>
                <div className={`font-display text-base mt-1 ${f.popular ? "text-white/80" : "text-brand-ink/70"}`}>
                  {f.program}
                </div>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className={`font-display text-4xl font-bold tabular-nums ${f.popular ? "text-white" : "text-brand-ink"}`}>
                    {f.price}
                  </span>
                  <span className={`text-sm ${f.popular ? "text-white/55" : "text-brand-ink/50"}`}>
                    {f.period}
                  </span>
                </div>
                <p className={`text-xs mt-3 ${f.popular ? "text-white/65" : "text-brand-ink/55"}`}>
                  {f.note}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-ink/50">
            Sibling discount: 10% off second child. Annual fees can be paid in two installments.
          </p>
        </div>
      </section>

      {/* ADMISSION STEPS */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Admission process</span>
            <h2 className="heading-lg mt-3">
              From inquiry to enrollment <span className="accent">in 4 steps.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {admissionSteps.map((s) => (
              <div key={s.n} className="card card-hover p-6 h-full">
                <div className="font-display text-3xl font-bold text-brand-primary tabular-nums">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-ink mt-3">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-white border-y border-black/[0.07]">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Why parents choose us</span>
            <h2 className="heading-lg mt-3">
              Built for <span className="accent">trust.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((r) => (
              <div key={r.title} className="card card-hover p-6">
                <div className="inline-flex w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary items-center justify-center">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-ink mt-5">
                  {r.title}
                </h3>
                <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT STORIES */}
      <section className="section">
        <div className="container">
          <div className="max-w-xl mb-12">
            <span className="eyebrow">Parent stories</span>
            <h2 className="heading-lg mt-3">
              Trusted by Khammam <span className="accent">families.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {parentStories.map((s) => (
              <blockquote key={s.name} className="card p-7">
                <div className="flex gap-0.5 text-brand-primary mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-brand-ink/85 leading-relaxed text-[15px]">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-5 border-t border-black/[0.07]">
                  <div className="font-semibold text-sm text-brand-ink">{s.name}</div>
                  <div className="text-xs text-brand-ink/50 mt-0.5">{s.program}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + ADMISSION FORM SIDE BY SIDE */}
      <section id="admission" className="section bg-white border-y border-black/[0.07] scroll-mt-24">
        <div className="container grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <span className="eyebrow">Common questions</span>
            <h2 className="heading-lg mt-3">
              Before you <span className="accent">enroll.</span>
            </h2>
            <div className="mt-8 space-y-2.5">
              {playSchoolFaqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl bg-brand-cloud border border-black/[0.07] hover:border-black/15 transition overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-sm text-brand-ink">
                    <span>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-white border border-black/10 flex items-center justify-center text-lg group-open:rotate-45 transition shrink-0 text-brand-ink/60">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-brand-ink/65 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <AdmissionForm />
              <div className="mt-4 text-center text-xs text-brand-ink/55">
                Prefer to talk?{" "}
                <a href={siteConfig.phoneHref} className="text-brand-primary font-semibold hover:underline">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-3xl bg-brand-ink p-10 md:p-14 text-white text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-primary/15 blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <span className="eyebrow text-brand-primary">First trial day on us</span>
              <h2 className="heading-lg mt-4">
                The best way to know is to <span className="text-brand-primary">visit.</span>
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Bring your child for a free trial day. Watch them play, meet our
                teachers, ask everything. No commitment, no pressure.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#admission" className="btn-primary">
                  Inquire now <Calendar className="h-4 w-4" />
                </a>
                <BookButton preset="Play School" variant="ghost" className="!bg-white/5 !text-white !border-white/20 hover:!bg-white/10 hover:!border-white/30">
                  WhatsApp us instead
                </BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
