"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { n: number; suffix?: string; label: string };

const stats: Stat[] = [
  { n: 7, label: "Themed zones" },
  { n: 2400, label: "Sq ft of play" },
  { n: 10000, suffix: "+", label: "Happy visits / yr" },
  { n: 4.9, label: "Google rating" },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
    const isFloat = to % 1 !== 0;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = isFloat ? +(eased * to).toFixed(1) : Math.round(eased * to);
      setV(cur);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {v.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="py-14 md:py-16 bg-white border-y border-black/[0.07]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.07]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="px-5 md:px-8 first:pl-0 last:pr-0"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-brand-ink tabular-nums">
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div className="text-[11px] md:text-xs text-brand-ink/55 mt-2 font-semibold uppercase tracking-widest">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
