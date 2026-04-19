"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { tiers } from "@/content/memberships";
import { cn } from "@/lib/utils";
import { BookButton } from "./book-button";

export function MembershipStrip() {
  return (
    <section className="section bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-hero opacity-40" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
            <Crown className="h-3.5 w-3.5" /> Memberships
          </span>
          <h2 className="heading-lg mt-4">
            Play more.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-primary">
              Pay less.
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Three tiers. One goal: make every visit feel like a treat, not a transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 border",
                tier.highlight
                  ? "bg-gradient-to-br from-brand-primary to-brand-grape border-transparent shadow-glow scale-105"
                  : "glass-dark"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-brand-yellow text-brand-ink font-bold">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
              <p className="text-sm text-white/70 mt-1 min-h-[2.5rem]">{tier.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{tier.price}</span>
                <span className="text-white/60 text-sm">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 shrink-0 text-brand-yellow" />
                    <span className="text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
              <BookButton
                preset="Play Session"
                variant={tier.highlight ? "white" : "ghost"}
                className={cn(
                  "w-full mt-8",
                  !tier.highlight && "!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
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
