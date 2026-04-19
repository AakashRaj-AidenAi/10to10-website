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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all",
            scrolled
              ? "glass shadow-lifted"
              : "bg-white/40 backdrop-blur-md border border-white/50"
          )}
          aria-label="Main"
        >
          <Link href="/" aria-label="10to10 Adventures home" className="active:scale-95 transition">
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-semibold transition-all",
                      active
                        ? "text-brand-primary"
                        : "text-brand-ink/70 hover:text-brand-ink hover:bg-brand-ink/5"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <a href={siteConfig.phoneHref} className="btn-ghost !py-2 !px-4 text-sm active:scale-95">
              <Phone className="h-4 w-4" />
              Call
            </a>
            <BookButton className="!py-2 !px-5 text-sm">Book a Visit</BookButton>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-full hover:bg-brand-ink/5 active:scale-90 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-lifted overflow-hidden"
            >
              <ul className="space-y-1">
                {nav.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-2xl text-base font-semibold transition active:scale-[0.98]",
                          active
                            ? "bg-brand-primary/10 text-brand-primary"
                            : "hover:bg-brand-ink/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <a href={siteConfig.phoneHref} className="btn-ghost text-sm">
                  Call
                </a>
                <BookButton className="text-sm">Book</BookButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
