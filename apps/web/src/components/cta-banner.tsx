"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cake } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { BookButton } from "./book-button";

export function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-brand-primary-deep to-brand-grape p-10 md:p-16 text-white shadow-glow"
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 chip bg-white/15 backdrop-blur">
                <Cake className="h-3.5 w-3.5" /> Birthday parties & private events
              </div>
              <h2 className="heading-lg mt-4">
                Throw the birthday party they&apos;ll remember forever.
              </h2>
              <p className="mt-4 text-white/80 max-w-xl">
                Theming, decor, hosts, cake, a private theatre show — we handle every
                detail so you can actually enjoy your kid&apos;s big day. Packages start at
                just ₹7,999 for up to 15 guests.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-3">
              <BookButton preset="Birthday Party" variant="white">
                Plan my party <ArrowRight className="h-4 w-4" />
              </BookButton>
              <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/20 transition">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
