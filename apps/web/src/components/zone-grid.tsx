"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { zones, type Accent } from "@/content/zones";
import { cn } from "@/lib/utils";

const accentMap: Record<Accent, { bg: string; ring: string; text: string; shadow: string }> = {
  primary:   { bg: "from-brand-primary/20 to-brand-primary/0",   ring: "hover:border-brand-primary/50",   text: "text-brand-primary",   shadow: "hover:shadow-glow" },
  turquoise: { bg: "from-brand-turquoise/25 to-brand-turquoise/0", ring: "hover:border-brand-turquoise/50", text: "text-brand-turquoise", shadow: "hover:shadow-glow-turq" },
  yellow:    { bg: "from-brand-yellow/30 to-brand-yellow/0",     ring: "hover:border-brand-yellow/60",    text: "text-brand-orange",    shadow: "hover:shadow-glow-yellow" },
  grape:     { bg: "from-brand-grape/20 to-brand-grape/0",       ring: "hover:border-brand-grape/50",     text: "text-brand-grape",     shadow: "hover:shadow-glow-grape" },
  orange:    { bg: "from-brand-orange/25 to-brand-orange/0",     ring: "hover:border-brand-orange/50",    text: "text-brand-orange",    shadow: "hover:shadow-glow-yellow" },
  mint:      { bg: "from-brand-mint/30 to-brand-mint/0",         ring: "hover:border-brand-mint/60",      text: "text-brand-turquoise", shadow: "hover:shadow-glow-turq" },
  sky:       { bg: "from-brand-sky/30 to-brand-sky/0",           ring: "hover:border-brand-sky/60",       text: "text-brand-turquoise", shadow: "hover:shadow-glow-turq" },
};

function ZoneCard({ zone, i }: { zone: typeof zones[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const a = accentMap[zone.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.06, type: "spring" }}
      style={{ perspective: 1000 }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
        <Link
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          href={`/zones/${zone.slug}`}
          className={cn(
            "group relative block h-full rounded-[2rem] border-2 border-brand-ink/5 bg-white p-7 shadow-pop transition-all duration-300 overflow-hidden",
            a.ring,
            a.shadow
          )}
        >
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500", a.bg)} />
          <div className="absolute inset-0 bg-confetti bg-[length:120px_120px] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-start justify-between mb-6">
              <motion.span
                className="text-5xl inline-block"
                whileHover={{ rotate: [-10, 10, -10, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))" }}
              >
                {zone.icon}
              </motion.span>
              <span className={cn(
                "inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-ink/5 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 group-hover:rotate-45"
              )}>
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className={cn("inline-flex chip bg-white/80 font-bold", a.text)}>
              {zone.ages}
            </div>
            <h3 className="font-display text-2xl font-bold mt-3">{zone.name}</h3>
            <p className={cn("mt-1 text-sm font-semibold", a.text)}>
              {zone.tagline}
            </p>
            <p className="mt-4 text-sm text-brand-ink/70 leading-relaxed">
              {zone.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {zone.highlights.map((h) => (
                <span key={h} className="chip bg-white/70 text-brand-ink/75 border border-brand-ink/5">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function ZoneGrid() {
  return (
    <section id="zones" className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-brand-primary" /> Seven zones. One roof.
            </span>
            <h2 className="heading-lg mt-4">
              A whole <span className="gradient-text">universe of play</span>,<br />
              curated for your family
            </h2>
          </div>
          <p className="text-brand-ink/70 max-w-md font-medium">
            Every zone is designed for a different kind of joy — from toddlers taking
            their first confident leap to teens racing on PS5. Tap any zone to dive in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, i) => (
            <ZoneCard key={zone.slug} zone={zone} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
