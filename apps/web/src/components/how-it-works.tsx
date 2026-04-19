"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Trophy, MessageCircle } from "lucide-react";
import { BookButton } from "./book-button";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Tell us when",
    desc: "WhatsApp us your preferred day and time. We confirm in minutes.",
  },
  {
    n: "02",
    icon: CalendarCheck,
    title: "Show up",
    desc: "Walk in, scan the QR at reception. We'll have everything ready.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Play freely",
    desc: "Hop between zones for the full session. Take photos, make friends, eat snacks.",
  },
  {
    n: "04",
    icon: Trophy,
    title: "Leave smiling",
    desc: "Collect a small souvenir on the way out. Then book again next weekend.",
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-white/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-confetti bg-[length:200px_200px] opacity-20" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-primary" /> Your visit, simplified
          </span>
          <h2 className="heading-lg mt-4">
            From tap to <span className="gradient-text">tap dance</span> in 4 steps
          </h2>
          <p className="mt-4 text-brand-ink/65 font-medium">
            We&apos;ve made it stupid-simple to plan a visit. No phone-tag, no forms, no friction.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="rounded-3xl bg-white border-2 border-brand-ink/5 p-7 h-full hover:border-brand-primary/30 hover:-translate-y-1 hover:shadow-lifted transition">
                <div className="flex items-center justify-between mb-5">
                  <div className="font-display text-3xl font-bold gradient-text">
                    {s.n}
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-brand-ink/65 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 text-brand-primary/40 text-2xl z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <BookButton className="text-base">Book my first visit</BookButton>
        </div>
      </div>
    </section>
  );
}
