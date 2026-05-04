"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

/**
 * Scroll-driven parallax wrapper.
 *
 * Wrap a section in <Parallax> and child elements in <ParallaxLayer speed=0.8>
 * to translate them at different rates as the section scrolls through view.
 *
 * speed semantics:
 *   1.0  → moves with scroll (no parallax)
 *   0.8  → moves slower (background)
 *   1.2  → moves faster (foreground)
 *   negative → moves opposite (rare, premium)
 *
 * Auto-disabled on reduced-motion.
 */
export function ParallaxLayer({
  children,
  speed = 1,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // distance to translate based on speed: speed=0.8 → -20% offset, speed=1.2 → +20%
  const range = (speed - 1) * 200;
  const y = useTransform(scrollYProgress, [0, 1], [`${-range}px`, `${range}px`]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduce ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
