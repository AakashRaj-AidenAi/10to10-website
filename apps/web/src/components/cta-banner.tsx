"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { BookButton } from "./book-button";

export function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand-ink p-10 md:p-14 text-white"
        >
          {/* Subtle accent glow, not rainbow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-primary/15 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-primary">
                Birthday parties & private events
              </span>
              <h2 className="heading-lg mt-4">
                Birthdays they&apos;ll<br />
                <span className="text-brand-primary">remember forever.</span>
              </h2>
              <p className="mt-5 text-white/70 max-w-lg leading-relaxed">
                Theming, decor, hosts, cake, private theatre — we handle every detail.
                Packages from ₹7,999 for up to 15 guests.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3">
              <BookButton preset="Birthday Party" variant="white">
                Plan a party <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
