"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { BookButton } from "./book-button";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacityTitle = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92svh] overflow-hidden pt-28 md:pt-32 pb-20"
    >
      {/* Crisp geometric backdrop — one pink blob, one turquoise, grid, nothing else */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,12,35,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,12,35,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)",
        }}
      />
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-brand-primary/8 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-brand-yellow/15 blur-3xl" />

      <motion.div style={{ opacity: opacityTitle, y }} className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-black/[0.08] px-4 py-1.5 text-xs font-semibold text-brand-ink/70 shadow-[0_1px_2px_rgba(17,12,35,0.04)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            Open 10 AM – 10 PM · 7 days a week
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mt-6"
          >
            Seven zones of play,
            <br />
            <span className="accent">one unforgettable day.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl mx-auto text-base md:text-lg text-brand-ink/65 leading-relaxed"
          >
            Khammam&apos;s all-in-one family playground. Soft play, play school,
            gaming, private theatre, party rooms and more — thoughtfully designed
            under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4 sm:px-0"
          >
            <BookButton>
              Book a visit <ArrowRight className="h-4 w-4" />
            </BookButton>
            <a href="#zones" className="btn-ghost">
              Explore the venue
            </a>
          </motion.div>

          {/* Numbers row — tight, tabular, no giant stat cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 md:mt-24 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0"
          >
            {[
              { n: "7", l: "zones" },
              { n: "2,400", l: "sq ft of play" },
              { n: "10,000+", l: "happy visits / yr" },
              { n: "4.9", l: "on Google" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`text-left md:px-6 md:border-l ${
                  i === 0 ? "md:border-l-0" : "border-black/10"
                }`}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-brand-ink tabular-nums">
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-brand-ink/55 mt-1 font-medium uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Crisp scroll cue */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-ink/50"
        >
          <span className="h-px w-6 bg-brand-ink/30" />
          Scroll
        </motion.div>
      )}
    </section>
  );
}
