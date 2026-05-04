"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BookButton } from "./book-button";
import { SparkleIcon, StarIcon, HeartIcon, UnderlineSquiggle } from "./vectors";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // intersection — pause expensive animations once hero scrolls out
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.05,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // scroll-driven parallax (3 depth layers)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yFar = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yNear = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scaleTitle = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // mouse-tracked 3D tilt for hero content card
  const disable3D = reduce || isMobile;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 22,
  });

  useEffect(() => {
    if (disable3D || !inView) return;
    let raf = 0;
    let nx = 0,
      ny = 0;
    const onMove = (e: MouseEvent) => {
      nx = e.clientX / window.innerWidth - 0.5;
      ny = e.clientY / window.innerHeight - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        mx.set(nx);
        my.set(ny);
        raf = 0;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [disable3D, inView, mx, my]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92svh] overflow-hidden pt-28 md:pt-32 pb-24 md:pb-28"
      style={{ perspective: 1500 }}
    >
      {/* Far depth: subtle grid, slowest parallax */}
      <motion.div
        aria-hidden
        style={{ y: yFar }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,12,35,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,12,35,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Mid depth: colored blobs */}
      <motion.div
        aria-hidden
        style={{ y: yMid }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-brand-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-brand-yellow/30 blur-3xl" />
        <div className="absolute top-[40%] -left-40 w-[360px] h-[360px] rounded-full bg-brand-turquoise/20 blur-3xl" />
      </motion.div>

      {/* Near depth: floating decorative SVG vectors */}
      {!reduce && inView && (
        <motion.div
          aria-hidden
          style={{ y: yNear }}
          className="absolute inset-0 pointer-events-none hidden md:block"
        >
          <motion.div
            className="absolute top-[18%] left-[6%] text-brand-yellow"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "translateZ(80px)" }}
          >
            <SparkleIcon className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="absolute top-[28%] right-[8%] text-brand-primary"
            animate={{ y: [0, -16, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transform: "translateZ(60px)" }}
          >
            <StarIcon className="h-10 w-10" />
          </motion.div>
          <motion.div
            className="absolute bottom-[22%] left-[10%] text-brand-turquoise"
            animate={{ y: [0, 14, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ transform: "translateZ(70px)" }}
          >
            <HeartIcon className="h-7 w-7" />
          </motion.div>
          <motion.div
            className="absolute bottom-[18%] right-[12%] text-brand-yellow"
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transform: "translateZ(90px)" }}
          >
            <SparkleIcon className="h-6 w-6" />
          </motion.div>
        </motion.div>
      )}

      {/* HERO CONTENT — with 3D tilt wrapper */}
      <motion.div
        style={{
          opacity: opacityTitle,
          scale: scaleTitle,
          rotateX: disable3D ? 0 : rx,
          rotateY: disable3D ? 0 : ry,
          transformStyle: "preserve-3d",
        }}
        className="container relative z-10"
      >
        <div
          className="max-w-4xl mx-auto text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-black/[0.08] px-4 py-1.5 text-xs font-semibold text-brand-ink/70 shadow-[0_1px_2px_rgba(17,12,35,0.04)]"
            style={{ transform: "translateZ(40px)" }}
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
            style={{ transform: "translateZ(80px)" }}
          >
            Seven zones of{" "}
            <span className="relative inline-block">
              <span className="text-brand-turquoise italic">play</span>
              <UnderlineSquiggle className="absolute -bottom-1 left-0 w-full h-2 text-brand-yellow" />
            </span>
            ,
            <br />
            <span className="accent">one unforgettable day.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl mx-auto text-base md:text-lg text-brand-ink/65 leading-relaxed"
            style={{ transform: "translateZ(50px)" }}
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
            style={{ transform: "translateZ(60px)" }}
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
