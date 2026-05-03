import { Check, X, Crown, Sparkles } from "lucide-react";
import { MembershipStrip } from "@/components/membership-strip";
import { BookButton } from "@/components/book-button";
import { sessionPricing } from "@/content/memberships";

export const metadata = {
  title: "Memberships — Kids Play Area Khammam | 10to10 Adventures",
  description:
    "Silver, Gold, Platinum kids play area memberships in Khammam. Save 30–50% on play sessions, priority booking, free monthly visits, exclusive perks.",
  keywords: [
    "play area membership Khammam",
    "kids play pass Khammam",
    "10to10 membership",
    "kids entertainment subscription Khammam",
  ],
  alternates: { canonical: "/memberships" },
};

const compare = [
  { feature: "Play area discount", silver: "30%", gold: "40%", platinum: "50%" },
  { feature: "Gaming zone discount", silver: "30%", gold: "40%", platinum: "50%" },
  { feature: "Summer camp discount", silver: "20%", gold: "25%", platinum: "30%" },
  { feature: "Birthday party discount", silver: "10%", gold: "15%", platinum: "20%" },
  { feature: "Free play visits", silver: "—", gold: "1 / month", platinum: "2 / month" },
  { feature: "Free theatre bookings", silver: "—", gold: "—", platinum: "1 / quarter" },
  { feature: "Priority booking", silver: false, gold: true, platinum: true },
  { feature: "Early-bird offers", silver: false, gold: false, platinum: true },
  { feature: "Member-only events", silver: true, gold: true, platinum: true },
  { feature: "Free guest passes", silver: "—", gold: "2 / year", platinum: "6 / year" },
];

const faqs = [
  {
    q: "How do I sign up for a membership?",
    a: "Tap any 'Choose plan' button or send us a WhatsApp message with your preferred tier. We'll activate your membership within 30 minutes. Payment via UPI, card, or cash at the venue.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Silver (monthly) can be cancelled anytime with no penalty. Gold (quarterly) and Platinum (annual) can be cancelled within 7 days for a full refund; after that, prorated refunds apply.",
  },
  {
    q: "Can I upgrade mid-plan?",
    a: "Absolutely. Upgrade any time — we credit your remaining balance toward the new tier. Downgrades take effect at the next renewal.",
  },
  {
    q: "Is membership transferable?",
    a: "Memberships are tied to one primary member, but you can add up to 3 family members to a plan for a 10% surcharge each. Perks apply to every linked member.",
  },
  {
    q: "Do perks include the party room?",
    a: "Yes — members get 10–20% off all birthday party packages based on tier. Contact us for bulk or frequent-party discounts.",
  },
  {
    q: "What counts as a 'free play visit'?",
    a: "One full play session (1 hour soft-play + 15-min theatre + games + snack pack) per eligible month. Unused visits don't roll over.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />
        <div className="container relative text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 chip bg-white/80 backdrop-blur border-2 border-brand-primary/20 font-bold text-brand-primary">
            <Crown className="h-3.5 w-3.5" /> Memberships & passes
          </span>
          <h1 className="heading-xl mt-5">
            Pick your <span className="gradient-text">play plan</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 leading-relaxed">
            From single-session drop-ins to annual all-access passes — we&apos;ve got a
            plan for every family. Switch or cancel any time.
          </p>
        </div>
      </section>

      {/* SINGLE SESSION PASSES */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Drop-in pricing
            </span>
            <h2 className="heading-lg mt-4">Single session passes</h2>
            <p className="mt-3 text-brand-ink/60 max-w-xl mx-auto">
              No commitment, just fun. All passes include 1-hour play, 15-min
              theatre, games, and a snack pack.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {sessionPricing.map((p) => (
              <div
                key={p.label}
                className="rounded-3xl border-2 border-brand-ink/5 bg-white p-8 shadow-lifted text-center hover:-translate-y-1 hover:border-brand-primary/20 transition"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-brand-ink/50">
                  {p.label}
                </div>
                <div className="font-display text-5xl font-bold mt-3 gradient-text">
                  {p.price}
                </div>
                <div className="text-sm text-brand-ink/60 mt-2">{p.note}</div>
                <BookButton preset="Play Session" className="w-full mt-6">
                  Book now
                </BookButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER CARDS */}
      <MembershipStrip />

      {/* COMPARISON TABLE */}
      <section className="section">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Compare every perk
            </span>
            <h2 className="heading-lg mt-4">
              Every perk, <span className="gradient-text">side by side</span>
            </h2>
          </div>

          <div className="rounded-3xl border-2 border-brand-ink/5 bg-white shadow-lifted overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-brand-ink/5">
                    <th className="p-4 md:p-5 font-semibold text-brand-ink/60">
                      Perk
                    </th>
                    <th className="p-4 md:p-5 font-display font-bold text-brand-ink/80 text-center">
                      Silver
                    </th>
                    <th className="p-4 md:p-5 font-display font-bold text-brand-primary text-center bg-brand-primary/5">
                      Gold
                    </th>
                    <th className="p-4 md:p-5 font-display font-bold text-brand-grape text-center">
                      Platinum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 ? "bg-brand-cloud/50" : ""}
                    >
                      <td className="p-4 md:p-5 font-medium">{row.feature}</td>
                      <td className="p-4 md:p-5 text-center text-brand-ink/70">
                        <CellValue v={row.silver} />
                      </td>
                      <td className="p-4 md:p-5 text-center bg-brand-primary/5 text-brand-primary font-semibold">
                        <CellValue v={row.gold} />
                      </td>
                      <td className="p-4 md:p-5 text-center text-brand-grape font-semibold">
                        <CellValue v={row.platinum} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-brand-ink/55 text-sm mt-6">
            Multi-member families get an additional 10% off. All memberships auto-renew but can be cancelled any time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white/50">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Common questions
            </span>
            <h2 className="heading-lg mt-4">Before you pick a plan</h2>
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-brand-primary-deep to-brand-grape p-10 md:p-16 text-white text-center shadow-glow">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <div className="text-5xl mb-4">
                <Sparkles className="inline h-12 w-12 text-brand-yellow" />
              </div>
              <h2 className="heading-lg">
                Lock in the <span className="text-brand-yellow">best rates</span> today
              </h2>
              <p className="mt-4 text-white/85">
                Prices go up in April. Sign up before then and we lock your rate
                for the full term.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <BookButton preset="Play Session" variant="white">
                  Start my membership
                </BookButton>
                <a href="tel:+919256787788" className="btn-ghost bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
                  Have questions? Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CellValue({ v }: { v: string | boolean }) {
  if (v === true)
    return <Check className="inline h-5 w-5 text-brand-turquoise" />;
  if (v === false)
    return <X className="inline h-5 w-5 text-brand-ink/25" />;
  return <>{v}</>;
}
