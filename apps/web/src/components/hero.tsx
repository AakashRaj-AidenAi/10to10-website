"use client";

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BookButton } from "./book-button";

export function Hero() {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const disable3D = reduce || isMobile;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const scaleTitle = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // mouse-tracked subtle tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (disable3D || !inView) return;
    let raf = 0;
    let nx = 0, ny = 0;
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
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20"
      style={{ perspective: 1500 }}
    >
      {/* base mesh + confetti */}
      <div className="absolute inset-0 bg-mesh-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#fff9f2_80%)]" />
      <div className="absolute inset-0 bg-confetti bg-[length:140px_140px] opacity-40" />

      {/* DEPTH LAYER 1 — floating orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none">
        {!reduce && inView && (
          <>
            <motion.div
              className="absolute top-[12%] left-[6%] w-32 h-32 rounded-full bg-gradient-to-br from-brand-yellow to-brand-orange blur-2xl opacity-80"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[20%] right-[8%] w-44 h-44 rounded-full bg-gradient-to-br from-brand-turquoise to-brand-sky blur-3xl opacity-70"
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[10%] left-[20%] w-52 h-52 rounded-full bg-gradient-to-br from-brand-grape to-brand-primary blur-3xl opacity-60"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </motion.div>

      {/* DEPTH LAYER 2 — emoji playground */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none">
        {!reduce && inView && !isMobile && (
          <>
            <motion.div
              className="absolute top-[8%] left-[14%] text-6xl"
              animate={{ y: [0, -15, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 10px 20px rgba(255,90,138,0.35))" }}
            >
              🎈
            </motion.div>
            <motion.div
              className="absolute top-[16%] right-[18%] text-5xl"
              animate={{ y: [0, -22, 0], rotate: [4, -4, 4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,212,200,0.4))" }}
            >
              🎈
            </motion.div>
            <motion.div
              className="absolute bottom-[22%] right-[10%] text-5xl"
              animate={{ y: [0, -18, 0], rotate: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 10px 20px rgba(139,92,246,0.4))" }}
            >
              🚀
            </motion.div>
            <motion.div
              className="absolute top-[28%] left-[8%] text-4xl text-brand-yellow"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ⭐
            </motion.div>
            <motion.div
              className="absolute bottom-[30%] left-[12%] text-3xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-[38%] right-[6%] text-5xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🌈
            </motion.div>
          </>
        )}
      </motion.div>

      {/* HERO CONTENT */}
      <motion.div
        style={{
          rotateX: disable3D ? 0 : rx,
          rotateY: disable3D ? 0 : ry,
          scale: scaleTitle,
          opacity: opacityTitle,
          transformStyle: "preserve-3d",
        }}
        className="container relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center" style={{ transformStyle: "preserve-3d" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-xs font-bold tracking-wide uppercase shadow-lifted"
            style={{ transform: "translateZ(60px)" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-primary animate-pulse2" />
            Khammam&apos;s happiest hangout
            <span className="flex -space-x-0.5 text-brand-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
            className="heading-xl mt-6"
            style={{ transform: "translateZ(90px)" }}
          >
            <span className="inline-block">Non-stop</span>{" "}
            <motion.span
              className="inline-block text-brand-primary"
              animate={reduce ? {} : { rotate: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              play.
            </motion.span>
            <br />
            <span className="gradient-text bg-[length:200%_200%] animate-gradient-x">
              Endless
            </span>{" "}
            <motion.span
              className="inline-block text-brand-turquoise"
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              fun.
            </motion.span>
            <br />
            <span className="gradient-sun">For everyone!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-brand-ink/75 leading-relaxed font-medium"
            style={{ transform: "translateZ(50px)" }}
          >
            Seven wild, wonderful zones packed into one magical playground —
            soft play, play school, gaming, private theatre, parties and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
            style={{ transform: "translateZ(70px)" }}
          >
            <BookButton className="text-base w-full sm:w-auto">
              Book a Visit <ArrowRight className="h-4 w-4" />
            </BookButton>
            <a href="#zones" className="btn-ghost text-base w-full sm:w-auto">
              Explore Zones
            </a>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            style={{ y: y3, transform: "translateZ(30px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { n: "7", l: "Zones", c: "primary" },
              { n: "2,400", l: "Sq ft play", c: "turquoise" },
              { n: "75+", l: "Activities", c: "yellow" },
              { n: "∞", l: "Joy level", c: "grape" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                whileHover={{ y: -6, rotate: i % 2 ? 2 : -2, scale: 1.03 }}
                className="glass rounded-3xl p-5 border-2"
                style={{
                  borderColor:
                    s.c === "primary" ? "#ff5a8a33" :
                    s.c === "turquoise" ? "#00d4c833" :
                    s.c === "yellow" ? "#ffd93d55" : "#8b5cf633",
                }}
              >
                <div className={`font-display text-3xl md:text-4xl font-bold ${
                  s.c === "primary" ? "text-brand-primary" :
                  s.c === "turquoise" ? "text-brand-turquoise" :
                  s.c === "yellow" ? "text-brand-orange" : "text-brand-grape"
                }`}>
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-brand-ink/60 mt-1 font-semibold">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-brand-ink/50 font-bold tracking-widest uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll to play</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}
