"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * 3D mouse-tracked tilt card.
 *
 * - Tracks cursor position over the card and tilts on X/Y axes
 * - CSS-only 3D (perspective on parent, rotate3d on child)
 * - Spring-damped, never jittery
 * - Auto-disabled on touch devices, mobile widths, and reduced-motion
 * - Drop shadow shifts opposite to rotation for "lit from above" feel
 */
export function TiltCard({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });

  // shadow follows tilt — appears as if card is lit from above
  const shadowX = useTransform(rx, [-intensity, intensity], [12, -12]);
  const shadowY = useTransform(ry, [-intensity, intensity], [-8, 8]);
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([x, y]) =>
      `${x}px ${(y as number) + 14}px 36px -12px rgba(17,12,35,0.18), 0 1px 2px rgba(17,12,35,0.05)`
  );

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;
    const check = () => setEnabled(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [reduce]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: enabled ? rx : 0,
          rotateY: enabled ? ry : 0,
          transformStyle: "preserve-3d",
          boxShadow: enabled ? boxShadow : undefined,
        }}
        className="h-full rounded-2xl"
      >
        {children}
      </motion.div>
    </div>
  );
}
