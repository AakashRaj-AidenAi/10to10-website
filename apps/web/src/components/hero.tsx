"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { BookButton } from "./book-button";
import { SparkleIcon, StarIcon, HeartIcon } from "./vectors";

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

        </div>
      </motion.div>

      {/* Playful floating decorations — subtle, not emoji-soup */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute top-[18%] left-[6%] text-brand-yellow hidden md:block pointer-events-none"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <SparkleIcon className="h-8 w-8" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute top-[28%] right-[8%] text-brand-primary/40 hidden md:block pointer-events-none"
            animate={{ y: [0, -16, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <StarIcon className="h-10 w-10" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute bottom-[22%] left-[10%] text-brand-turquoise/60 hidden md:block pointer-events-none"
            animate={{ y: [0, 14, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <HeartIcon className="h-7 w-7" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute bottom-[18%] right-[12%] text-brand-yellow hidden md:block pointer-events-none"
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <SparkleIcon className="h-6 w-6" />
          </motion.div>
        </>
      )}

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
