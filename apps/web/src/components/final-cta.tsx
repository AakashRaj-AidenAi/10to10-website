"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { BookButton } from "./book-button";
import { siteConfig } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white shadow-glow"
          style={{
            background:
              "linear-gradient(135deg, #ff5a8a 0%, #ff2e6a 35%, #8b5cf6 100%)",
          }}
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-yellow/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-brand-turquoise/25 blur-3xl" />
          <div className="absolute inset-0 bg-confetti bg-[length:160px_160px] opacity-15" />

          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 chip bg-white/15 backdrop-blur border border-white/20 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
              First visit on us
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Ready to make some{" "}
              <span className="text-brand-yellow">noise?</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
              Book a free trial session and let your kid loose. We bet you&apos;ll
              be back next weekend — and the weekend after that.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <BookButton variant="white" className="text-base">
                Claim my free visit <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 px-7 py-3.5 font-bold text-white hover:bg-white/20 transition active:scale-95"
              >
                Or call {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
