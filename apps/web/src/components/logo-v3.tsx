"use client";

import { motion } from "framer-motion";

/**
 * Logo Concept v3 — "Stacked Blocks Playground"
 *
 * Two physical alphabet/number blocks (one pink "10", one turquoise "10")
 * connected by a tiny "to" tag, evoking children's wooden building blocks.
 *
 * - Each block has a 3D depth shadow on the bottom-right (toy-like)
 * - Slight rotation gives a "just placed by a kid" feel
 * - Hover: blocks bounce/wiggle independently
 * - Tiny star sticker on the first block
 * - Wordmark sits to the right
 */
export function LogoV3({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const block = size === "lg" ? 30 : size === "sm" ? 22 : 26;
  const text = size === "lg" ? "1.55rem" : size === "sm" ? "1.05rem" : "1.3rem";
  const blockText = size === "lg" ? "0.9rem" : size === "sm" ? "0.65rem" : "0.78rem";

  return (
    <div className="flex items-center gap-2.5 font-display font-semibold select-none leading-none tracking-tight">
      {/* TWO BLOCKS + tiny "to" */}
      <motion.div
        className="relative shrink-0 flex items-center"
        style={{ height: block + 4 }}
        whileHover="hover"
      >
        {/* Block 1 — Pink */}
        <motion.div
          className="relative"
          style={{ width: block, height: block }}
          variants={{
            hover: { rotate: [-3, 3, -3, 0], y: [0, -3, 0], transition: { duration: 0.5 } },
          }}
          initial={{ rotate: -4 }}
          animate={{ rotate: -4 }}
        >
          {/* depth shadow */}
          <div
            className="absolute bg-brand-primary-deep rounded-md"
            style={{
              inset: 0,
              transform: "translate(2px, 2px)",
            }}
          />
          {/* main face */}
          <div
            className="absolute inset-0 bg-brand-primary rounded-md flex items-center justify-center border-2 border-white/30"
            style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.15)", fontFamily: "var(--font-playful)" }}
          >
            <span
              className="text-white font-bold tabular-nums"
              style={{ fontSize: blockText, lineHeight: 1, transform: "translateY(0.5px)" }}
            >
              10
            </span>
          </div>
          {/* tiny star sticker */}
          <motion.span
            className="absolute -top-1 -right-1 text-brand-yellow"
            style={{
              fontSize: block * 0.35,
              lineHeight: 1,
              filter: "drop-shadow(0 1px 1.5px rgba(0,0,0,0.25))",
            }}
            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ★
          </motion.span>
        </motion.div>

        {/* tiny "to" connector */}
        <span
          className="font-semibold text-brand-grape mx-[3px]"
          style={{ fontSize: block * 0.42, lineHeight: 1, fontFamily: "var(--font-playful)" }}
        >
          to
        </span>

        {/* Block 2 — Turquoise */}
        <motion.div
          className="relative"
          style={{ width: block, height: block }}
          variants={{
            hover: { rotate: [4, -4, 4, 0], y: [0, -3, 0], transition: { duration: 0.5, delay: 0.1 } },
          }}
          initial={{ rotate: 5 }}
          animate={{ rotate: 5 }}
        >
          {/* depth shadow */}
          <div
            className="absolute rounded-md"
            style={{
              inset: 0,
              backgroundColor: "#00a89e",
              transform: "translate(2px, 2px)",
            }}
          />
          {/* main face */}
          <div
            className="absolute inset-0 bg-brand-turquoise rounded-md flex items-center justify-center border-2 border-white/30"
            style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.15)", fontFamily: "var(--font-playful)" }}
          >
            <span
              className="text-white font-bold tabular-nums"
              style={{ fontSize: blockText, lineHeight: 1, transform: "translateY(0.5px)" }}
            >
              10
            </span>
          </div>
          {/* tiny dot decoration */}
          <span
            className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-brand-yellow"
            style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
          />
        </motion.div>
      </motion.div>

      {/* WORDMARK */}
      <div
        className="flex items-baseline tracking-tight"
        style={{ fontSize: text, lineHeight: 1, color: "inherit" }}
      >
        <span>Adventures</span>
      </div>
    </div>
  );
}
