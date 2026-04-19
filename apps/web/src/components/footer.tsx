import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { zones } from "@/content/zones";
import { LogoV4 as Logo } from "./logo-v4";

export function Footer() {
  return (
    <footer className="relative mt-20 bg-brand-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-mesh-hero opacity-30 pointer-events-none" />
      <div className="container relative py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-white">
              <Logo size="lg" />
            </div>
            <p className="mt-4 max-w-sm text-white/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-white/80 hover:text-brand-yellow transition"
            >
              <Instagram className="h-4 w-4" /> @10to10play
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">
              Zones
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link href={`/zones/${z.slug}`} className="hover:text-white transition">
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-primary shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex gap-2 hover:text-white">
                  <Phone className="h-4 w-4 mt-0.5 text-brand-primary shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex gap-2 hover:text-white break-all">
                  <Mail className="h-4 w-4 mt-0.5 text-brand-primary shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} 10to10 Adventures. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/refund" className="hover:text-white">Refund Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
