"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote:
      "My daughter begs to come back every weekend. The staff know her name, the place is spotless, and she genuinely learns while she plays.",
    name: "Priya R.",
    role: "Parent of 4-year-old",
  },
  {
    quote:
      "Hosted my son's 6th birthday in the party room with the theatre add-on. 22 kids, zero stress, all memories. Best decision ever.",
    name: "Karthik M.",
    role: "Dad & repeat customer",
  },
  {
    quote:
      "The play school is Montessori done right — open-door, warm, thoughtful. Teachers actually care about each kid individually.",
    name: "Sushma V.",
    role: "Mom of twins",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-brand-cloud">
      <div className="container">
        <div className="text-center mb-14">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-primary" /> Loved by families
          </span>
          <h2 className="heading-lg mt-4">
            Don&apos;t take our word for it.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl bg-white p-8 shadow-lifted border-2 border-brand-ink/5 hover:border-brand-primary/20 hover:-translate-y-1 transition"
            >
              <Quote className="h-8 w-8 text-brand-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 text-brand-yellow mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-brand-ink/80 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 pt-6 border-t border-brand-ink/5">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-brand-ink/50 mt-0.5">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
