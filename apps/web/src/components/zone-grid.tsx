"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { zones, type Accent } from "@/content/zones";
import { cn } from "@/lib/utils";
import { TiltCard } from "./tilt-card";

const accentClasses: Record<Accent, { bar: string; chip: string; glow: string }> = {
  primary:   { bar: "bg-brand-primary",   chip: "bg-brand-primary/10 text-brand-primary",     glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(44,56,115,0.25)]" },
  turquoise: { bar: "bg-brand-turquoise", chip: "bg-brand-turquoise/15 text-brand-turquoise", glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(0,212,200,0.3)]" },
  yellow:    { bar: "bg-brand-yellow",    chip: "bg-brand-yellow/30 text-amber-700",          glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(255,217,61,0.4)]" },
  grape:     { bar: "bg-brand-grape",     chip: "bg-brand-grape/15 text-brand-grape",         glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(139,92,246,0.3)]" },
  orange:    { bar: "bg-brand-orange",    chip: "bg-brand-orange/15 text-brand-orange",       glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(255,138,61,0.3)]" },
  mint:      { bar: "bg-brand-mint",      chip: "bg-brand-mint/30 text-emerald-700",          glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(124,226,181,0.35)]" },
  sky:       { bar: "bg-brand-sky",       chip: "bg-brand-sky/30 text-sky-700",               glow: "group-hover:shadow-[0_8px_30px_-6px_rgba(124,197,255,0.35)]" },
};

export function ZoneGrid() {
  return (
    <section id="zones" className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Seven zones · One venue</span>
            <h2 className="heading-lg mt-3">
              A whole playground,<br className="hidden md:inline" />
              <span className="accent">designed around play.</span>
            </h2>
          </div>
          <p className="text-brand-ink/60 max-w-sm text-sm md:text-base leading-relaxed">
            Every zone is built for a different kind of joy — from toddlers
            taking their first leap to teens racing on PS5.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {zones.map((zone, i) => {
            const a = accentClasses[zone.accent];
            return (
              <motion.div
                key={zone.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <TiltCard intensity={6} className="h-full">
                  <Link
                    href={`/zones/${zone.slug}`}
                    className={cn(
                      "group card relative block h-full p-6 overflow-hidden transition",
                      a.glow
                    )}
                  >
                    {/* colored top accent bar */}
                    <span className={cn("absolute top-0 inset-x-0 h-1", a.bar)} />

                    <div
                      className="flex items-start justify-between mb-5 mt-1"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <span className="text-3xl inline-block transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                        {zone.icon}
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-brand-ink/40 group-hover:bg-brand-ink group-hover:border-brand-ink group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <span className={cn("inline-block text-[11px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1", a.chip)}>
                      {zone.ages}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-3 text-brand-ink">
                      {zone.name}
                    </h3>
                    <p className="mt-1 text-sm text-brand-primary font-medium">
                      {zone.tagline}
                    </p>
                    <p className="mt-3 text-sm text-brand-ink/65 leading-relaxed">
                      {zone.description}
                    </p>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
