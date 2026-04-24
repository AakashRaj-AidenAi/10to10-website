"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav } from "@/content/nav";
import { siteConfig, cn } from "@/lib/utils";
import { LogoV4 as Logo } from "./logo-v4";
import { BookButton } from "./book-button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#fdfbf7]/85 backdrop-blur-xl border-b border-black/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-[72px]" aria-label="Main">
          <Link href="/" aria-label="10to10 Adventures home" className="active:scale-95 transition">
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      active ? "text-brand-ink" : "text-brand-ink/60 hover:text-brand-ink"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-primary rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink/70 hover:text-brand-ink transition"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <BookButton className="!px-5">Book a visit</BookButton>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-black/5 active:scale-90 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 mb-4 bg-white border border-black/[0.08] rounded-2xl p-3 overflow-hidden shadow-[0_10px_30px_-10px_rgba(17,12,35,0.12)]"
            >
              <ul>
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-xl text-sm font-medium transition",
                          active
                            ? "text-brand-primary bg-brand-primary/[0.08]"
                            : "text-brand-ink/80 hover:bg-black/[0.03]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-black/[0.07] mt-2 pt-3 grid grid-cols-2 gap-2">
                <a href={siteConfig.phoneHref} className="btn-ghost text-sm">
                  Call
                </a>
                <BookButton className="text-sm">Book a visit</BookButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
