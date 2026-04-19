"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[90] origin-left"
      style={{
        scaleX: width,
        background:
          "linear-gradient(90deg, #ff5a8a 0%, #ffd93d 50%, #00d4c8 100%)",
      }}
    />
  );
}
