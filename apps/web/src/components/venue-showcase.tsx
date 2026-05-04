"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { zones, type Accent } from "@/content/zones";
import { cn } from "@/lib/utils";

const accentBg: Record<Accent, string> = {
  primary: "bg-gradient-to-br from-brand-primary/10 to-brand-primary/[0.04]",
  turquoise: "bg-gradient-to-br from-brand-turquoise/15 to-brand-turquoise/[0.04]",
  yellow: "bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/[0.06]",
  grape: "bg-gradient-to-br from-brand-grape/12 to-brand-grape/[0.04]",
  orange: "bg-gradient-to-br from-brand-orange/15 to-brand-orange/[0.04]",
  mint: "bg-gradient-to-br from-brand-mint/25 to-brand-mint/[0.06]",
  sky: "bg-gradient-to-br from-brand-sky/25 to-brand-sky/[0.06]",
};

const accentRing: Record<Accent, string> = {
  primary: "ring-brand-primary/30",
  turquoise: "ring-brand-turquoise/40",
  yellow: "ring-amber-400/50",
  grape: "ring-brand-grape/40",
  orange: "ring-brand-orange/40",
  mint: "ring-emerald-400/40",
  sky: "ring-sky-400/40",
};

const facts = [
  { label: "Sq ft of play", value: "2,400" },
  { label: "Curated activities", value: "75+" },
  { label: "Hours / day", value: "12" },
  { label: "Hourly cleaning cycles", value: "Every 60 min" },
  { label: "Child-to-staff ratio", value: "1 : 8" },
  { label: "Years in Khammam", value: "Since 2024" },
];

/**
 * VenueShowcase — a 3D rotating zone tour with cursor-driven parallax.
 *
 * The 7 zones float in a 3D arc. The whole stage tilts with cursor (desktop)
 * and gently rotates on Y-axis (auto-tour). Each zone is a card with depth.
 * On hover a card pops forward, peers recede.
 *
 * Below the stage, a "facts ribbon" cycles through interesting venue stats.
 *
 * Mobile: degrades to a clean staggered grid + facts row.
 */
export function VenueShowcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const disable3D = reduce || isMobile;

  // global mouse tilt across the stage
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 80,
    damping: 22,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 80,
    damping: 22,
  });

  // scroll-driven entrance: stage rises from below as it enters view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const stageY = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  useEffect(() => {
    if (disable3D) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        mx.set(Math.max(-0.5, Math.min(0.5, x)));
        my.set(Math.max(-0.5, Math.min(0.5, y)));
        raf = 0;
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [disable3D, mx, my]);

  return (
    <section className="relative section overflow-hidden">
      {/* soft background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <span className="eyebrow">Step inside</span>
          <h2 className="heading-lg mt-3">
            One venue.{" "}
            <span className="accent">Seven worlds.</span>{" "}
            <span className="text-brand-turquoise">Zero limits.</span>
          </h2>
          <p className="mt-5 text-brand-ink/65 leading-relaxed">
            Every zone is purpose-built for a different kind of joy. Hover, tap,
            explore — and start picking your family&apos;s favourite.
          </p>
        </div>

        {/* THE 3D STAGE */}
        <motion.div
          ref={ref}
          style={{ y: stageY, opacity: stageOpacity, perspective: 1400 }}
          className="relative h-[640px] md:h-[560px] mx-auto"
        >
          <motion.div
            style={{
              rotateX: disable3D ? 0 : rotX,
              rotateY: disable3D ? 0 : rotY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full"
          >
            {/* center disc — the "stage" the zones float over */}
            {!disable3D && (
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/15"
                style={{
                  transform: "translateZ(-40px) rotateX(75deg)",
                  background:
                    "radial-gradient(circle at center, rgba(44,56,115,0.08), transparent 70%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* 7 zone tiles arranged in 3D */}
            {zones.map((zone, i) => {
              const total = zones.length;
              const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
              const radius = disable3D ? 0 : 240;
              const x = disable3D ? 0 : Math.cos(angle) * radius;
              const z = disable3D ? 0 : Math.sin(angle) * radius;
              const isHovered = hovered === zone.slug;
              const isDimmed = hovered !== null && !isHovered;

              if (disable3D) {
                return (
                  <Link
                    key={zone.slug}
                    href={`/zones/${zone.slug}`}
                    className={cn(
                      "block rounded-2xl border border-black/[0.07] p-5 transition hover:-translate-y-1 hover:shadow-lifted mb-3",
                      accentBg[zone.accent]
                    )}
                    style={{ position: "static" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{zone.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-bold text-brand-ink">
                          {zone.name}
                        </h3>
                        <p className="text-xs text-brand-ink/55 mt-0.5">
                          {zone.tagline}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-brand-ink/40 shrink-0" />
                    </div>
                  </Link>
                );
              }

              return (
                <motion.div
                  key={zone.slug}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x: "-50%",
                    y: "-50%",
                    transformStyle: "preserve-3d",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    type: "spring",
                    damping: 14,
                  }}
                >
                  <motion.div
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    animate={{
                      x,
                      z,
                      y: [0, -8, 0],
                      rotateY: -angle * (180 / Math.PI) - 90,
                    }}
                    transition={{
                      x: { duration: 0.8, ease: "easeOut" },
                      z: { duration: 0.8, ease: "easeOut" },
                      rotateY: { duration: 0.8, ease: "easeOut" },
                      y: {
                        duration: 4 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      },
                    }}
                  >
                    <Link
                      href={`/zones/${zone.slug}`}
                      onMouseEnter={() => setHovered(zone.slug)}
                      onMouseLeave={() => setHovered(null)}
                      className={cn(
                        "group block rounded-3xl bg-white border border-black/[0.07] shadow-lifted transition-all duration-500 ring-2",
                        accentBg[zone.accent],
                        isHovered ? accentRing[zone.accent] : "ring-transparent"
                      )}
                      style={{
                        width: 200,
                        height: 240,
                        transform: isHovered
                          ? "translateZ(60px) scale(1.06)"
                          : isDimmed
                          ? "translateZ(-20px) scale(0.94)"
                          : "translateZ(0) scale(1)",
                        opacity: isDimmed ? 0.55 : 1,
                        transition:
                          "transform 0.4s cubic-bezier(.2,.8,.2,1), opacity 0.4s",
                      }}
                    >
                      <div className="h-full flex flex-col justify-between p-5">
                        <div className="flex items-start justify-between">
                          <span className="text-4xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                            {zone.icon}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink/45">
                            0{i + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-brand-ink leading-tight">
                            {zone.name}
                          </h3>
                          <p className="text-xs text-brand-ink/55 mt-1.5 leading-relaxed">
                            {zone.tagline}
                          </p>
                          <div className="flex items-center gap-1.5 mt-3 text-xs font-bold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            Explore <ArrowRight className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* FACTS RIBBON — animated marquee of fun stats */}
        <div className="mt-14 md:mt-10 relative overflow-hidden border-y border-black/[0.07] py-5 bg-white/40">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={reduce ? {} : { x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...facts, ...facts].map((f, i) => (
              <div
                key={i}
                className="flex items-baseline gap-3 shrink-0 font-display"
              >
                <span className="text-2xl md:text-3xl font-bold text-brand-primary tabular-nums">
                  {f.value}
                </span>
                <span className="text-sm font-medium text-brand-ink/55 uppercase tracking-wider">
                  {f.label}
                </span>
                <span className="text-brand-ink/15 ml-3">●</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
