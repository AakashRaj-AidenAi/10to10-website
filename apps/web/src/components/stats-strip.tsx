"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { n: number; suffix?: string; label: string; color: string };

const stats: Stat[] = [
  { n: 7, label: "Themed zones", color: "text-brand-primary" },
  { n: 2400, label: "Sq ft of play", color: "text-brand-turquoise" },
  { n: 10000, suffix: "+", label: "Happy visits / yr", color: "text-brand-yellow" },
  { n: 4.9, label: "Google rating", color: "text-brand-orange" },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
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
    <section className="py-16 md:py-20 bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark opacity-40" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`font-display text-5xl md:text-6xl font-bold ${s.color}`}>
                <CountUp to={s.n} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 mt-2 font-semibold uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
