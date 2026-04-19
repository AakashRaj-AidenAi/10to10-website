"use client";

import { motion } from "framer-motion";

/**
 * Logo Concept v4 — "Infinity Mark"
 *
 * A purely typographic logo: 10 [∞] 10, where the infinity symbol is a
 * custom SVG lemniscate in a pink → turquoise gradient. Reads instantly as
 * "10 to 10, non-stop, always open".
 *
 * Ultra-minimal, timeless, print-ready. Sits in the same category as
 * Linear, Braun, Mailchimp — modern typographic marks.
 */
export function LogoV4({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const num = size === "lg" ? "2.25rem" : size === "sm" ? "1.35rem" : "1.65rem";
  const inf = size === "lg" ? 38 : size === "sm" ? 22 : 28;
  const tag = size === "lg" ? "0.65rem" : "0.55rem";
  const gap = size === "lg" ? "0.5rem" : "0.35rem";

  return (
    <div className="flex items-center gap-3 select-none leading-none" style={{ color: "inherit" }}>
      {/* The mark: 10 ∞ 10 */}
      <div className="flex items-center" style={{ gap }}>
        <span
          className="font-display font-bold tracking-[-0.03em]"
          style={{ fontSize: num, lineHeight: 1 }}
        >
          10
        </span>

        {/* Animated infinity lemniscate */}
        <motion.svg
          width={inf}
          height={inf * 0.5}
          viewBox="0 0 40 20"
          fill="none"
          animate={{ rotate: [0, 0] }}
        >
          <defs>
            <linearGradient id="inf-grad" x1="0" y1="10" x2="40" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff5a8a" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#00d4c8" />
            </linearGradient>
          </defs>
          {/* Lemniscate — one continuous path */}
          <motion.path
            d="M 6 10 C 6 3, 16 3, 20 10 C 24 17, 34 17, 34 10 C 34 3, 24 3, 20 10 C 16 17, 6 17, 6 10 Z"
            stroke="url(#inf-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </motion.svg>

        <span
          className="font-display font-bold tracking-[-0.03em]"
          style={{ fontSize: num, lineHeight: 1 }}
        >
          10
        </span>
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
