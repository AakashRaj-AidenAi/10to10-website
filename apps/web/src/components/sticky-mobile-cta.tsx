"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { useBooking } from "./booking-modal";

/**
 * Floating mobile-only CTA that appears after the user scrolls past the hero.
 * Provides one-tap access to Book and Call without scrolling back to the navbar.
 */
export function StickyMobileCta() {
  const { open } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pointer-events-none"
        >
          <div className="pointer-events-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-ink/10 shadow-[0_10px_40px_-10px_rgba(26,16,51,0.3)] p-2.5 flex gap-2 max-w-md mx-auto">
            <a
              href={siteConfig.phoneHref}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-ink/5 hover:bg-brand-ink/10 active:scale-95 transition py-3 text-sm font-bold text-brand-ink"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <button
              type="button"
              onClick={() => open()}
              className="flex-[2] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primary-deep text-white py-3 text-sm font-bold shadow-glow active:scale-95 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Book a Visit
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
