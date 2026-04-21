"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle cursor-follower glow for desktop only.
 * Adds a futuristic "pointer light" that follows the mouse with spring damping.
 * Auto-disabled on touch devices and reduced-motion preferences.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        raf = 0;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[5] mix-blend-multiply"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div
        className="w-[420px] h-[420px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,90,138,0.25) 0%, rgba(139,92,246,0.12) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
}
