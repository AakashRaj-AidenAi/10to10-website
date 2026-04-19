"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // disable in dev mode — native scroll is snappier while iterating
    if (process.env.NODE_ENV === "development") return;
    // respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // skip on touch (mobile) — native scroll is better there
    if (typeof window !== "undefined" && "ontouchstart" in window) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // smooth anchor-link scrolling with navbar offset
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#'], a[href*='/#']") as HTMLAnchorElement | null;
      if (!link) return;
      const hash = link.hash;
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -90, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
