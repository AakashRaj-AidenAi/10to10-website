"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { zones } from "@/content/zones";

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
          {zones.map((zone, i) => (
            <motion.div
              key={zone.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/zones/${zone.slug}`}
                className="group card card-hover block h-full p-6"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{zone.icon}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-brand-ink/40 group-hover:bg-brand-ink group-hover:border-brand-ink group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-ink/45">
                  {zone.ages}
                </div>
                <h3 className="font-display text-xl font-bold mt-1.5 text-brand-ink">
                  {zone.name}
                </h3>
                <p className="mt-1 text-sm text-brand-primary font-medium">
                  {zone.tagline}
                </p>
                <p className="mt-3 text-sm text-brand-ink/65 leading-relaxed">
                  {zone.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
