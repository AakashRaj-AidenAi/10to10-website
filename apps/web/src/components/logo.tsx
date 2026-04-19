"use client";

import { motion } from "framer-motion";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const badge = size === "lg" ? 52 : size === "sm" ? 36 : 44;
  const text = size === "lg" ? "1.6rem" : size === "sm" ? "1.05rem" : "1.3rem";
  const inner = size === "lg" ? "1.25rem" : size === "sm" ? "0.82rem" : "1.02rem";

  return (
    <div className="flex items-center gap-1.5 font-display font-bold select-none leading-none">
      {/* Badge */}
      <motion.div
        className="relative shrink-0"
        style={{ width: badge, height: badge }}
        whileHover={{ rotate: [0, -6, 6, -6, 0], transition: { duration: 0.6 } }}
      >
        {/* rotating conic ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ff5a8a, #ffd93d, #00d4c8, #8b5cf6, #ff5a8a)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        {/* inner white bubble */}
        <div className="absolute inset-[3px] rounded-full bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]" />
        {/* "10" perfectly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-bold text-brand-ink tabular-nums translate-y-[1px]"
            style={{ fontSize: inner, lineHeight: 1 }}
          >
            10
          </span>
        </div>
        {/* sparkle — positioned on the ring edge */}
        <motion.span
          className="absolute top-0 right-0 text-brand-yellow"
          style={{
            fontSize: badge * 0.3,
            lineHeight: 1,
            transform: `translate(25%, -25%)`,
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
      </motion.div>

      {/* Wordmark — aligned to badge center via flex items-center on parent */}
      <div
        className="flex items-center tracking-tight"
        style={{ fontSize: text, lineHeight: 1 }}
      >
        <span>to</span>
        <span className="text-brand-primary">10</span>
        <motion.span
          className="text-brand-turquoise inline-block ml-[1px]"
          style={{ transformOrigin: "center bottom" }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          .
        </motion.span>
      </div>
    </div>
  );
}
