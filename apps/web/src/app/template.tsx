"use client";

import { PageTransition } from "@/components/page-transition";
import type { ReactNode } from "react";

/**
 * Next.js App Router template — re-renders on each route change while the
 * root layout (navbar, footer, scroll progress) stays mounted.
 * This is the only place AnimatePresence can run without remounting siblings.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
