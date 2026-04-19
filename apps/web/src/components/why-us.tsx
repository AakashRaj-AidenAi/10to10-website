"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, Users2, Wifi, Coffee } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sanitised every hour",
    desc: "Every play surface, ball pit and game controller wiped down on the hour. Always.",
    color: "bg-brand-turquoise/10 text-brand-turquoise",
  },
  {
    icon: HeartHandshake,
    title: "Trained, friendly staff",
    desc: "Our team isn't just trained in safety — they actually love kids. You'll feel it the moment you walk in.",
    color: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: Users2,
    title: "Small, supervised batches",
    desc: "1 staff member for every 8 kids. Nobody slips through the cracks. Nobody feels lost.",
    color: "bg-brand-grape/10 text-brand-grape",
  },
  {
    icon: Sparkles,
    title: "Always something new",
    desc: "New themes, new games, new events every month. Boredom is not allowed on the premises.",
    color: "bg-brand-yellow/20 text-brand-orange",
  },
  {
    icon: Coffee,
    title: "Parent lounge",
    desc: "Comfortable seating, free chai/coffee, and Wi-Fi. Drop the kids, breathe, recharge.",
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: Wifi,
    title: "Free everything",
    desc: "Free Wi-Fi, free water, free invitation cards, free trial sessions. We don't nickel-and-dime.",
    color: "bg-brand-mint/20 text-brand-turquoise",
  },
];

export function WhyUs() {
  return (
    <section className="section relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-primary" /> Why families pick us
          </span>
          <h2 className="heading-lg mt-4">
            Six reasons parents <span className="gradient-text">come back</span>
          </h2>
          <p className="mt-4 text-brand-ink/65 font-medium">
            Anyone can build a play area. We obsess over the details that turn a one-time visit into a weekly habit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl bg-white border-2 border-brand-ink/5 p-7 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-lifted transition"
            >
              <div className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center ${r.color}`}>
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold mt-5">{r.title}</h3>
              <p className="text-sm text-brand-ink/70 mt-2 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
