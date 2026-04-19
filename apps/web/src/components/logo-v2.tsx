"use client";

import { motion } from "framer-motion";

/**
 * Logo Concept v2 — "Smiley Clock"
 *
 * A round clock face whose two hands point to 10 and 10 (10:50).
 * - Eyes: two playful dots above the smile
 * - Smile: curved arc
 * - Hour hand: short, points to 10 (top-left)
 * - Minute hand: long, points to 10 (left, slightly up — 10:50 position)
 * - Hands tick subtly on a long loop
 * - Tick marks at 12, 3, 6, 9
 * - Brand-colored: turquoise face, pink hands, yellow center pin
 */
export function LogoV2({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const px = size === "lg" ? 56 : size === "sm" ? 38 : 46;
  const text = size === "lg" ? "1.6rem" : size === "sm" ? "1.05rem" : "1.3rem";

  return (
    <div className="flex items-center gap-2 font-display font-bold select-none leading-none">
      {/* CLOCK BADGE */}
      <motion.div
        className="relative shrink-0"
        style={{ width: px, height: px }}
        whileHover={{ rotate: [0, -4, 4, -4, 0], transition: { duration: 0.5 } }}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          style={{ filter: "drop-shadow(0 4px 10px rgba(255,90,138,0.25))" }}
        >
          {/* outer ring — gradient stroke */}
          <defs>
            <linearGradient id="clock-ring" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#ff5a8a" />
              <stop offset="50%" stopColor="#ffd93d" />
              <stop offset="100%" stopColor="#00d4c8" />
            </linearGradient>
            <radialGradient id="clock-face" cx="50%" cy="40%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fff9f2" />
            </radialGradient>
          </defs>

          {/* face with gradient ring */}
          <circle cx="50" cy="50" r="46" fill="url(#clock-face)" stroke="url(#clock-ring)" strokeWidth="6" />

          {/* hour tick marks at 12, 3, 6, 9 */}
          <circle cx="50" cy="12" r="2.5" fill="#1a1033" />
          <circle cx="88" cy="50" r="2.5" fill="#1a1033" />
          <circle cx="50" cy="88" r="2.5" fill="#1a1033" />
          <circle cx="12" cy="50" r="2.5" fill="#1a1033" />

          {/* The "10" position marker — slightly larger pink dot */}
          <circle cx="22" cy="22" r="3" fill="#ff5a8a" />

          {/* SMILEY FACE inside the clock */}
          {/* eyes */}
          <ellipse cx="38" cy="42" rx="3" ry="4" fill="#1a1033" />
          <ellipse cx="62" cy="42" rx="3" ry="4" fill="#1a1033" />
          {/* smile */}
          <path
            d="M 36 58 Q 50 70 64 58"
            stroke="#1a1033"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* rosy cheeks */}
          <circle cx="32" cy="56" r="3" fill="#ff5a8a" opacity="0.5" />
          <circle cx="68" cy="56" r="3" fill="#ff5a8a" opacity="0.5" />
        </svg>

        {/* CLOCK HANDS — animated, in their own group */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: [0, 2, -1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* hour hand — short, pointing to 10 (upper-left) */}
            <line
              x1="50"
              y1="50"
              x2="32"
              y2="32"
              stroke="#ff5a8a"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* minute hand — long, pointing to 10 (left, slightly up — 50 minute mark) */}
            <line
              x1="50"
              y1="50"
              x2="18"
              y2="38"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* center pin */}
            <circle cx="50" cy="50" r="4" fill="#ffd93d" stroke="#1a1033" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* tiny sparkle */}
        <motion.span
          className="absolute -top-0.5 -right-0.5 text-brand-yellow"
          style={{ fontSize: px * 0.22, lineHeight: 1, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
      </motion.div>

      {/* WORDMARK — inherits text color from parent */}
      <div className="flex items-center tracking-tight text-brand-ink" style={{ fontSize: text, lineHeight: 1, color: "inherit" }}>
        <span>10</span>
        <span className="text-brand-primary mx-[1px]">to</span>
        <span>10</span>
      </div>
    </div>
  );
}
