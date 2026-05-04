"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Lightweight CSS-only confetti burst for form-success celebrations.
 * No external libs. Each piece is a colored shape that fans out + falls.
 */
const colors = ["#2c3873", "#00d4c8", "#ffd93d", "#ff8a3d", "#8b5cf6"];

export function ConfettiBurst({ count = 26 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        color: colors[i % colors.length],
        angle: (i / count) * Math.PI * 2,
        distance: 60 + Math.random() * 80,
        rotate: Math.random() * 360,
        size: 4 + Math.random() * 6,
        shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "triangle",
        delay: Math.random() * 0.1,
      })),
    [count]
  );

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-1/2 top-1/2">
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            className="absolute"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.shape !== "triangle" ? p.color : "transparent",
              borderRadius: p.shape === "circle" ? "50%" : 2,
              ...(p.shape === "triangle" && {
                width: 0,
                height: 0,
                borderLeft: `${p.size / 2}px solid transparent`,
                borderRight: `${p.size / 2}px solid transparent`,
                borderBottom: `${p.size}px solid ${p.color}`,
              }),
            }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: Math.cos(p.angle) * p.distance,
              y: Math.sin(p.angle) * p.distance + 60,
              opacity: [1, 1, 0],
              rotate: p.rotate,
            }}
            transition={{
              duration: 1.2,
              delay: p.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>
    </div>
  );
}
