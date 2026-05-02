"use client";

import { motion } from "framer-motion";

/**
 * Logo Concept v4 — "Infinity Mark" (refined)
 *
 * 10 [∞] 10 — the two 10s are color-matched to the infinity gradient
 * endpoints (left = pink, right = turquoise) creating a continuous color
 * story across the entire mark. Numbers use Fredoka for personality
 * while staying typographic.
 */
export function LogoV4({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const num = size === "lg" ? "2.4rem" : size === "sm" ? "1.4rem" : "1.75rem";
  const inf = size === "lg" ? 42 : size === "sm" ? 24 : 32;
  const tag = size === "lg" ? "0.65rem" : "0.55rem";
  const gap = size === "lg" ? "0.45rem" : "0.3rem";

  return (
    <div className="flex items-center gap-3 select-none leading-none" style={{ color: "inherit" }}>
      {/* The mark: 10 ∞ 10 */}
      <div className="flex items-center" style={{ gap }}>
        {/* Left "10" — deep indigo, premium */}
        <motion.span
          className="font-bold tabular-nums tracking-[-0.04em] text-brand-primary"
          style={{
            fontSize: num,
            lineHeight: 1,
            fontFamily: "var(--font-playful)",
            textShadow: "0 2px 12px rgba(44,56,115,0.2)",
          }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          10
        </motion.span>

        {/* Animated infinity lemniscate with subtle breathing */}
        <motion.svg
          width={inf}
          height={inf * 0.5}
          viewBox="0 0 40 20"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <defs>
            <linearGradient id="inf-grad" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2c3873" />
              <stop offset="50%" stopColor="#1e6c8a" />
              <stop offset="100%" stopColor="#00d4c8" />
            </linearGradient>
            <filter id="inf-glow">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M 6 10 C 6 3, 16 3, 20 10 C 24 17, 34 17, 34 10 C 34 3, 24 3, 20 10 C 16 17, 6 17, 6 10 Z"
            stroke="url(#inf-grad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#inf-glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.svg>

        {/* Right "10" — turquoise, mirrors the left */}
        <motion.span
          className="font-bold tabular-nums tracking-[-0.04em] text-brand-turquoise"
          style={{
            fontSize: num,
            lineHeight: 1,
            fontFamily: "var(--font-playful)",
            textShadow: "0 2px 12px rgba(0,212,200,0.25)",
          }}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          10
        </motion.span>
      </div>

      {/* Tiny tagline pillar */}
      <div
        className="hidden sm:flex flex-col justify-center pl-3 border-l border-current/20"
        style={{ opacity: 0.55 }}
      >
        <span className="font-semibold uppercase tracking-[0.18em]" style={{ fontSize: tag, lineHeight: 1.3 }}>
          Adventures
        </span>
        <span className="font-semibold uppercase tracking-[0.18em]" style={{ fontSize: tag, lineHeight: 1.3 }}>
          Khammam
        </span>
      </div>
    </div>
  );
}
