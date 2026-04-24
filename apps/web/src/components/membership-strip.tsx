"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { tiers } from "@/content/memberships";
import { cn } from "@/lib/utils";
import { BookButton } from "./book-button";

export function MembershipStrip() {
  return (
    <section className="section bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-brand-turquoise/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-xl mb-12 md:mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
            Memberships
          </div>
          <h2 className="heading-lg mt-3">
            Save more the <span className="text-brand-primary">more you visit.</span>
          </h2>
          <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed">
            Three tiers designed for every kind of family — from occasional visitors
            to the ones who treat us like a second home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={cn(
                "relative rounded-2xl p-7 transition",
                tier.highlight
                  ? "bg-white/[0.05] border border-brand-primary/40 ring-1 ring-brand-primary/20"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-2.5 left-6 chip bg-brand-primary text-white font-semibold !text-[11px]">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <p className="text-sm text-white/55 mt-1 min-h-[2.5rem]">{tier.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold tabular-nums">{tier.price}</span>
                <span className="text-white/45 text-sm">{tier.period}</span>
              </div>
              <div className="h-px bg-white/10 my-6" />
              <ul className="space-y-3">
                {tier.perks.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-brand-primary mt-0.5" strokeWidth={2.5} />
                    <span className="text-white/80">{p}</span>
                  </li>
                ))}
              </ul>
              <BookButton
                preset="Play Session"
                variant={tier.highlight ? "primary" : "ghost"}
                className={cn(
                  "w-full mt-7",
                  !tier.highlight && "!bg-white/5 !text-white !border-white/15 hover:!bg-white/10 hover:!border-white/25"
                )}
              >
                Choose {tier.name}
              </BookButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
