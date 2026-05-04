"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { n: number; suffix?: string; label: string; color: string };

const stats: Stat[] = [
  { n: 7, label: "Themed zones", color: "text-brand-primary" },
  { n: 2400, label: "Sq ft of play", color: "text-brand-turquoise" },
  { n: 10000, suffix: "+", label: "Happy visits / yr", color: "text-amber-600" },
  { n: 4.9, label: "Google rating", color: "text-brand-grape" },
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
      {v.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="py-14 md:py-16 bg-white border-y border-black/[0.07] relative overflow-hidden">
      {/* Playful colored dots scattered behind */}
      <span className="absolute top-6 left-[12%] h-2 w-2 rounded-full bg-brand-primary/40" aria-hidden />
      <span className="absolute bottom-8 left-[28%] h-2.5 w-2.5 rounded-full bg-brand-yellow" aria-hidden />
      <span className="absolute top-10 right-[18%] h-3 w-3 rounded-full bg-brand-turquoise/40" aria-hidden />
      <span className="absolute bottom-6 right-[8%] h-2 w-2 rounded-full bg-brand-grape/50" aria-hidden />

      <div className="container relative">
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
              <div className={`font-display text-3xl md:text-5xl font-bold tabular-nums ${s.color}`}>
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
