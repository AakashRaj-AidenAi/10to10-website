"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, Users2, Wifi, Coffee } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sanitised every hour",
    desc: "Every play surface, ball pit and game controller wiped down on the hour.",
  },
  {
    icon: HeartHandshake,
    title: "Trained, friendly staff",
    desc: "Every team member is trained in child safety, first aid and engagement.",
  },
  {
    icon: Users2,
    title: "1:8 supervision ratio",
    desc: "One staff member for every eight children — no child goes unseen.",
  },
  {
    icon: Sparkles,
    title: "Fresh programming monthly",
    desc: "New themes, games and events every month so repeat visits stay novel.",
  },
  {
    icon: Coffee,
    title: "Parent lounge",
    desc: "Comfortable seating, complimentary tea and Wi-Fi — breathe and recharge.",
  },
  {
    icon: Wifi,
    title: "No hidden costs",
    desc: "Wi-Fi, water, invitation cards and trial sessions included with every membership.",
  },
];

export function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-xl mb-12 md:mb-16">
          <span className="eyebrow">Why families choose us</span>
          <h2 className="heading-lg mt-3">
            Built around <span className="accent">what matters.</span>
          </h2>
          <p className="mt-5 text-brand-ink/60 text-sm md:text-base leading-relaxed">
            A safe, well-run, thoughtfully-staffed venue that parents trust and children love.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="card card-hover p-6"
            >
              <div className="inline-flex w-10 h-10 rounded-xl items-center justify-center bg-brand-primary/10 text-brand-primary">
                <r.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold mt-5 text-brand-ink">{r.title}</h3>
              <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
