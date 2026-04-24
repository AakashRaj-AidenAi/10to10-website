"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookButton } from "./book-button";
import { siteConfig } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-12 md:p-20 text-center"
        >
          {/* subtle corner accents */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-brand-turquoise/8 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <span className="eyebrow">First visit complimentary</span>
            <h2 className="heading-lg mt-4">
              Come meet us.<br />
              <span className="accent">The first one&apos;s on us.</span>
            </h2>
            <p className="mt-5 text-brand-ink/65 max-w-lg mx-auto leading-relaxed">
              Book a free trial session — a relaxed visit so you can see the venue,
              meet the team, and decide if we&apos;re a fit.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <BookButton>
                Claim my free visit <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a href={siteConfig.phoneHref} className="btn-ghost">
                Or call {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
