"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  Navigation,
  Languages,
  Timer,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/utils";

type DayHour = { day: string; open: number; close: number };
const hoursTable: DayHour[] = [
  { day: "Monday", open: 10, close: 22 },
  { day: "Tuesday", open: 10, close: 22 },
  { day: "Wednesday", open: 10, close: 22 },
  { day: "Thursday", open: 10, close: 22 },
  { day: "Friday", open: 10, close: 23 },
  { day: "Saturday", open: 9, close: 23 },
  { day: "Sunday", open: 9, close: 23 },
];

// JS Date.getDay(): 0 = Sunday → our table starts Monday, so map:
const dayNameForJsDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function fmtHour(h: number) {
  if (h === 0) return "12 AM";
  if (h === 12) return "12 PM";
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

const subjects = [
  "General inquiry",
  "Birthday party",
  "Play school admission",
  "Summer camp",
  "Membership",
  "Corporate / school visit",
  "Feedback",
];

const contactFaqs = [
  {
    q: "How fast do you reply?",
    a: "On WhatsApp during business hours we typically respond in under 5 minutes. Email replies within a few hours. Phone calls are answered live.",
  },
  {
    q: "Can I just walk in without booking?",
    a: "Absolutely — drop-ins are always welcome. Booking ahead just guarantees your slot during peak hours and weekends.",
  },
  {
    q: "Do you take group / school bookings?",
    a: "Yes. We host school field trips, birthday parties, and corporate family days. Drop us a message with your group size and we'll send a custom quote.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General inquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // compute "open now" status on the client only
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const i = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(i);
  }, []);

  const status = useMemo(() => {
    if (!now) return null;
    const todayName = dayNameForJsDay[now.getDay()];
    const today = hoursTable.find((h) => h.day === todayName);
    if (!today) return null;
    const hr = now.getHours() + now.getMinutes() / 60;
    const isOpen = hr >= today.open && hr < today.close;
    return {
      isOpen,
      todayName,
      closes: fmtHour(today.close),
      opens: fmtHour(today.open),
    };
  }, [now]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSubmitting(true);
    const { submitLead } = await import("@/lib/lead");
    await submitLead("Contact Page", {
      name: form.name,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    });
    setSubmitting(false);
    setSent(true);
  };

  const directions =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("10to10 Adventures, Mamatha College Road, Khammam");

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero" />

        <div className="container relative max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 chip bg-white/80 backdrop-blur border-2 border-brand-primary/20 font-bold text-brand-primary">
              <MessageCircle className="h-3.5 w-3.5" /> Get in touch
            </span>
            {status && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`inline-flex items-center gap-2 chip border-2 font-bold ${
                  status.isOpen
                    ? "bg-brand-mint/30 text-brand-turquoise border-brand-turquoise/30"
                    : "bg-white/80 text-brand-ink/65 border-brand-ink/15"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    status.isOpen ? "bg-brand-turquoise animate-pulse" : "bg-brand-ink/30"
                  }`}
                />
                {status.isOpen ? `Open now · closes ${status.closes}` : `Closed · opens ${status.opens}`}
              </motion.span>
            )}
          </div>

          <h1 className="heading-xl mt-5">
            Come say <span className="gradient-text">hi</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 leading-relaxed max-w-2xl">
            Drop by, call, WhatsApp, or email — whichever works for you. We
            usually reply within minutes during business hours.
          </p>

          {/* Quick channel cards */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <ChannelCard
              href={`${siteConfig.whatsapp}?text=Hi%2010to10!`}
              icon={MessageCircle}
              label="WhatsApp"
              sub="Fastest reply"
              accent="bg-brand-mint/40 text-brand-turquoise"
              external
            />
            <ChannelCard
              href={siteConfig.phoneHref}
              icon={Phone}
              label="Call us"
              sub={siteConfig.phone}
              accent="bg-brand-primary/15 text-brand-primary"
            />
            <ChannelCard
              href={`mailto:${siteConfig.email}`}
              icon={Mail}
              label="Email"
              sub="Replies in hours"
              accent="bg-brand-grape/15 text-brand-grape"
            />
            <ChannelCard
              href={directions}
              icon={Navigation}
              label="Directions"
              sub="Open in Maps"
              accent="bg-brand-yellow/30 text-brand-orange"
              external
            />
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="pb-20">
        <div className="container grid lg:grid-cols-5 gap-6">
          {/* LEFT — info + hours */}
          <div className="lg:col-span-2 space-y-6 lg:order-1 order-2">
            <div className="rounded-3xl bg-white border-2 border-brand-ink/5 p-6 md:p-8 shadow-lifted space-y-5">
              <h3 className="font-display text-lg font-bold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-primary" />
                Visit us
              </h3>
              <InfoRow icon={MapPin} label="Address">
                {siteConfig.address}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={siteConfig.phoneHref} className="hover:text-brand-primary">
                  {siteConfig.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-primary break-all"
                >
                  {siteConfig.email}
                </a>
              </InfoRow>
              <InfoRow icon={Instagram} label="Instagram">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-primary"
                >
                  @10to10play
                </a>
              </InfoRow>
            </div>

            {/* HOURS — today highlighted */}
            <div className="rounded-3xl bg-white border-2 border-brand-ink/5 p-6 md:p-8 shadow-lifted">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-brand-primary" />
                  Opening hours
                </h3>
                {status && (
                  <span
                    className={`text-xs font-bold ${
                      status.isOpen ? "text-brand-turquoise" : "text-brand-ink/50"
                    }`}
                  >
                    {status.isOpen ? "Open" : "Closed"}
                  </span>
                )}
              </div>
              <ul className="space-y-1 text-sm">
                {hoursTable.map((h) => {
                  const isToday = status?.todayName === h.day;
                  return (
                    <li
                      key={h.day}
                      className={`flex justify-between items-center px-3 py-2 rounded-xl transition ${
                        isToday
                          ? "bg-brand-primary/10 font-bold text-brand-primary"
                          : "hover:bg-brand-ink/5"
                      }`}
                    >
                      <span>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 chip bg-brand-primary text-white !text-[10px] !py-0 !px-1.5">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={isToday ? "" : "text-brand-ink/65"}>
                        {fmtHour(h.open)} – {fmtHour(h.close)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="text-xs text-brand-ink/50 mt-4 px-3">
                Holiday hours may vary — call ahead on festivals.
              </p>
            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-3 gap-2">
              <MiniStat icon={Timer} value="<5 min" label="Avg. reply" />
              <MiniStat icon={Languages} value="EN · TE · HI" label="Spoken" />
              <MiniStat icon={Sparkles} value="7 days" label="Always open" />
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lg:col-span-3 lg:order-2 order-1">
            <div className="rounded-3xl bg-white border-2 border-brand-ink/5 p-6 md:p-10 shadow-lifted">
              {!sent ? (
                <form onSubmit={submit}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        Send us a <span className="gradient-text">message</span>
                      </h2>
                      <p className="text-brand-ink/60 mt-1 text-sm">
                        Replies on WhatsApp within minutes during business hours.
                      </p>
                    </div>
                    <span className="chip bg-brand-mint/30 text-brand-turquoise font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Free
                    </span>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" required>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input"
                        placeholder="Priya Kumar"
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Phone (WhatsApp)" required>
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="What is this about?">
                      <div className="flex flex-wrap gap-2">
                        {subjects.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setForm({ ...form, subject: s })}
                            className={`chip border-2 transition active:scale-95 ${
                              form.subject === s
                                ? "bg-brand-primary text-white border-brand-primary"
                                : "bg-white text-brand-ink/70 border-brand-ink/10 hover:border-brand-primary/40"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Your message" required>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="input resize-none"
                        placeholder="Tell us what you need — date, group size, anything we should know..."
                      />
                      <div className="text-xs text-brand-ink/45 mt-1.5 text-right">
                        {form.message.length} chars
                      </div>
                    </Field>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full mt-4 text-base disabled:cursor-wait"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Opening WhatsApp…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                  <p className="text-xs text-brand-ink/50 text-center mt-3">
                    By sending you agree to be contacted on the number above. We never spam.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="mx-auto w-20 h-20 rounded-full bg-brand-mint/30 flex items-center justify-center mb-5"
                  >
                    <CheckCircle2 className="h-12 w-12 text-brand-turquoise" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">
                    Message sent! 🎉
                  </h3>
                  <p className="text-brand-ink/65 mt-3 max-w-sm mx-auto">
                    We opened WhatsApp with your message — hit send and we'll
                    reply shortly.
                  </p>
                  <div className="flex gap-3 justify-center mt-8 flex-wrap">
                    <button
                      type="button"
                      className="btn-ghost"
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          phone: "",
                          subject: "General inquiry",
                          message: "",
                        });
                      }}
                    >
                      Send another
                    </button>
                    <a href={siteConfig.phoneHref} className="btn-primary">
                      Or call us
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mini FAQ under the form */}
            <div className="mt-6 space-y-2">
              {contactFaqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white border-2 border-brand-ink/5 hover:border-brand-primary/20 transition overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-semibold text-sm">
                    <span>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-brand-ink/5 flex items-center justify-center text-lg group-open:rotate-45 transition shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-brand-ink/65 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="container mt-8">
          <div className="relative rounded-3xl overflow-hidden shadow-lifted border-2 border-brand-ink/5 h-[400px] md:h-[500px] bg-brand-ink/5">
            <iframe
              title="10to10 Adventures location"
              className="w-full h-full"
              src="https://www.google.com/maps?q=Mamatha+College+Road+Khammam&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 btn-primary !py-2.5 !px-5 text-sm shadow-lifted"
            >
              <Navigation className="h-4 w-4" />
              Get directions
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ChannelCard({
  href,
  icon: Icon,
  label,
  sub,
  accent,
  external,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  accent: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative rounded-3xl bg-white border-2 border-brand-ink/5 p-5 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-lifted transition active:scale-[0.98]"
    >
      <div className={`inline-flex w-11 h-11 rounded-2xl items-center justify-center ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4">
        <div className="font-display font-bold">{label}</div>
        <div className="text-xs text-brand-ink/55 mt-0.5">{sub}</div>
      </div>
      <ArrowRight className="absolute top-5 right-5 h-4 w-4 text-brand-ink/30 group-hover:text-brand-primary group-hover:translate-x-0.5 transition" />
    </a>
  );
}

function MiniStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-white border-2 border-brand-ink/5 p-3 text-center">
      <Icon className="h-4 w-4 text-brand-primary mx-auto" />
      <div className="font-bold text-xs mt-1.5">{value}</div>
      <div className="text-[10px] text-brand-ink/55 uppercase tracking-wider mt-0.5">
        {label}
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-11 h-11 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider font-bold text-brand-ink/50">
          {label}
        </div>
        <div className="font-medium mt-1 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-ink/55">
        {label}
        {required && <span className="text-brand-primary ml-0.5">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
