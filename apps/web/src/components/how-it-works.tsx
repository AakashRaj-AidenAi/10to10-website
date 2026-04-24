"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Trophy, MessageCircle } from "lucide-react";
import { BookButton } from "./book-button";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Tell us when",
    desc: "WhatsApp your preferred day and time. We confirm in minutes.",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "Show up",
    desc: "Walk in, scan the QR at reception. Everything is ready.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Play freely",
    desc: "Hop between zones for the full session. Staff on hand if you need anything.",
  },
  {
    n: "04",
    icon: Trophy,
    title: "Leave smiling",
    desc: "Collect a small souvenir on the way out. Book the next visit for priority slots.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-white border-y border-black/[0.07]">
      <div className="container">
        <div className="max-w-xl mb-12 md:mb-16">
          <span className="eyebrow">How it works</span>
          <h2 className="heading-lg mt-3">
            From tap to tap dance,<br className="hidden md:inline" />{" "}
            <span className="accent">in four steps.</span>
          </h2>
          <p className="mt-5 text-brand-ink/60 text-sm md:text-base leading-relaxed">
            No phone-tag, no paperwork. Planning a visit takes under two minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="card card-hover p-6 h-full"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="font-display text-[11px] font-bold text-brand-primary tracking-[0.2em]">
                  STEP {s.n}
                </div>
                <div className="w-9 h-9 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <s.icon className="h-4 w-4" strokeWidth={2} />
                </div>
              </div>
              <h3 className="font-display text-base font-bold text-brand-ink">{s.title}</h3>
              <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <BookButton>Plan your first visit</BookButton>
        </div>
      </div>
    </section>
  );
}
