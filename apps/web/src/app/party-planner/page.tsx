import {
  Cake,
  Sparkles,
  Clock,
  Users,
  Calendar,
  Check,
  Star,
  PartyPopper,
} from "lucide-react";
import { BookButton } from "@/components/book-button";
import {
  packages,
  themes,
  steps,
  addons,
  partyFaqs,
  partyTestimonials,
} from "@/content/parties";

export const metadata = {
  title: "Birthday Parties & Celebrations",
  description:
    "Throw the birthday party your kid will never forget. Themed packages, private venue, full-service hosts, custom cakes and memorable magic — all at 10to10 Adventures, Khammam.",
};

export default function PartyPlannerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="absolute inset-0 bg-confetti bg-[length:160px_160px] opacity-30" />
        {/* Floating balloons */}
        <div className="absolute top-20 left-[8%] text-5xl md:text-7xl animate-float" style={{ filter: "drop-shadow(0 12px 24px rgba(255,90,138,0.35))" }}>
          🎈
        </div>
        <div
          className="absolute top-32 right-[12%] text-4xl md:text-6xl animate-float-slow"
          style={{ filter: "drop-shadow(0 12px 24px rgba(0,212,200,0.35))", animationDelay: "1s" }}
        >
          🎈
        </div>
        <div
          className="absolute bottom-16 right-[8%] text-4xl md:text-5xl animate-float"
          style={{ animationDelay: "2s" }}
        >
          🎉
        </div>

        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 chip bg-white/80 backdrop-blur border-2 border-brand-primary/20 font-bold text-brand-primary">
              <Cake className="h-3.5 w-3.5" />
              Birthday parties & private events
            </span>
            <h1 className="heading-xl mt-5">
              Throw the party they'll{" "}
              <span className="gradient-text">never forget</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-ink/75 leading-relaxed max-w-2xl">
              Private venue, themed decor, cake, hosts, games, photography — we
              handle every tiny detail so you can actually enjoy your kid's big
              day. Packages from ₹7,999.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BookButton preset="Birthday Party" className="text-base">
                Plan my party <PartyPopper className="h-4 w-4" />
              </BookButton>
              <a href="#packages" className="btn-ghost text-base">
                See packages
              </a>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Users, label: "Up to 40 kids", sub: "or more on request" },
                { icon: Clock, label: "2 – 4 hours", sub: "per package" },
                { icon: Sparkles, label: "8+ themes", sub: "fully customisable" },
                { icon: Calendar, label: "7 days / week", sub: "10 AM – 8 PM start" },
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

      {/* PACKAGES */}
      <section id="packages" className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Party packages
            </span>
            <h2 className="heading-lg mt-4">
              Three ways to <span className="gradient-text">celebrate big</span>
            </h2>
            <p className="mt-4 text-brand-ink/65">
              All packages include private venue, party host, decor, and full setup
              & cleanup. Pick the one that fits your headcount and vibe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className={`relative rounded-3xl p-8 border-2 transition hover:-translate-y-1 ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-brand-primary to-brand-grape border-transparent shadow-glow md:scale-105 text-white"
                    : "bg-white border-brand-ink/5 hover:border-brand-primary/20 shadow-lifted"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-yellow text-brand-ink font-bold">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                <p className={`text-sm mt-1 min-h-[2.5rem] ${pkg.highlight ? "text-white/80" : "text-brand-ink/60"}`}>
                  {pkg.tagline}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{pkg.price}</span>
                </div>
                <div className={`mt-2 flex items-center gap-3 text-xs font-semibold ${pkg.highlight ? "text-white/75" : "text-brand-ink/55"}`}>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {pkg.guests}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {pkg.duration}
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-brand-yellow" : "text-brand-turquoise"}`} />
                      <span className={pkg.highlight ? "text-white/90" : "text-brand-ink/75"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <BookButton
                  preset="Birthday Party"
                  variant={pkg.highlight ? "white" : "primary"}
                  className="w-full mt-8"
                >
                  Pick {pkg.name}
                </BookButton>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-ink/55 text-sm mt-8">
            Member discount: Silver 10% · Gold 15% · Platinum 20% off all party packages.
          </p>
        </div>
      </section>

      {/* THEMES */}
      <section className="section bg-white/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Choose your theme
            </span>
            <h2 className="heading-lg mt-4">
              Pick a vibe. <span className="gradient-text">We'll set the scene.</span>
            </h2>
            <p className="mt-4 text-brand-ink/65">
              Decor, playlist, activities and photo corner — all styled around your
              chosen theme. Have something else in mind? We'll build a custom one
              for you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl bg-gradient-to-br ${t.color} p-6 aspect-square flex flex-col items-center justify-center text-center border-2 border-white shadow-lifted hover:-translate-y-1 hover:scale-[1.02] transition cursor-pointer`}
              >
                <div className="text-5xl md:text-6xl mb-3" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
                  {t.icon}
                </div>
                <div className="font-display font-bold text-sm md:text-base text-brand-ink">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> How it works
            </span>
            <h2 className="heading-lg mt-4">
              From idea to party in <span className="gradient-text">5 simple steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-5 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-3xl bg-white border-2 border-brand-ink/5 p-6 h-full hover:border-brand-primary/30 hover:-translate-y-1 transition">
                  <div className="font-display text-4xl font-bold gradient-text">
                    {s.n}
                  </div>
                  <h3 className="font-display text-lg font-bold mt-3">{s.title}</h3>
                  <p className="text-sm text-brand-ink/65 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 text-brand-primary/40 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section bg-brand-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-dark opacity-50" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
              <Sparkles className="h-3.5 w-3.5" /> Level it up
            </span>
            <h2 className="heading-lg mt-4">
              À la carte <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-primary">add-ons</span>
            </h2>
            <p className="mt-4 text-white/70">
              Mix and match any of these to elevate your package. All add-ons can
              be booked up to 48 hours before the event.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((a) => (
              <div
                key={a.name}
                className="glass-dark rounded-2xl p-5 hover:border-brand-yellow/50 transition"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <div className="font-semibold text-sm">{a.name}</div>
                <div className="text-brand-yellow font-display font-bold text-lg mt-1">
                  {a.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Parent stories
            </span>
            <h2 className="heading-lg mt-4">
              Parties that became <span className="gradient-text">family legends</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partyTestimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl bg-white border-2 border-brand-ink/5 p-8 shadow-lifted hover:border-brand-primary/20 transition"
              >
                <div className="flex gap-1 text-brand-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-brand-ink/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-brand-ink/5">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-brand-ink/50 mt-0.5">{t.role}</div>
                  <div className="text-xs font-semibold text-brand-primary mt-1">
                    Booked: {t.package}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white/50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Party questions
            </span>
            <h2 className="heading-lg mt-4">Everything parents ask</h2>
          </div>

          <div className="space-y-3">
            {partyFaqs.map((f, i) => (
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
            <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-brand-turquoise/20 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <div className="text-5xl mb-4">🎂</div>
              <h2 className="heading-lg">
                Let's make their day{" "}
                <span className="text-brand-yellow">magical</span>.
              </h2>
              <p className="mt-4 text-white/85">
                Tell us the date and we'll confirm availability in minutes. ₹2,000
                deposit reserves the slot — fully refundable up to 7 days before.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <BookButton preset="Birthday Party" variant="white">
                  Reserve my date
                </BookButton>
                <a href="tel:+919256787788" className="btn-ghost bg-white/10 !text-white !border-white/30">
                  Call us instead
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
