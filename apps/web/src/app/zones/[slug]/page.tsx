import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { zones } from "@/content/zones";
import { siteConfig } from "@/lib/utils";
import { BookButton } from "@/components/book-button";



export function generateStaticParams() {
  return zones.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((z) => z.slug === slug);
  if (!zone) return {};
  return {
    title: zone.name,
    description: zone.description,
  };
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zone = zones.find((z) => z.slug === slug);
  if (!zone) notFound();

  return (
    <article className="relative">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-mesh-hero -z-10" />
      <div className="container pt-32 pb-20">
        <Link
          href="/#zones"
          className="inline-flex items-center gap-2 text-sm text-brand-ink/60 hover:text-brand-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> All zones
        </Link>

        <div className="max-w-3xl">
          <div className="text-6xl mb-6">{zone.icon}</div>
          <span className="chip bg-brand-primary/10 text-brand-primary font-bold">
            {zone.ages}
          </span>
          <h1 className="heading-xl mt-4">{zone.name}</h1>
          <p className="mt-4 text-xl text-brand-primary font-semibold">
            {zone.tagline}
          </p>
          <p className="mt-6 text-lg text-brand-ink/70 leading-relaxed">
            {zone.description}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 shadow-lifted">
            <h2 className="font-display text-2xl font-bold mb-6">What&apos;s inside</h2>
            <ul className="space-y-3">
              {zone.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <Check className="h-5 w-5 text-brand-primary shrink-0" />
                  <span className="text-brand-ink/80">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-brand-primary via-brand-primary-deep to-brand-grape text-white shadow-glow">
            <h2 className="font-display text-2xl font-bold">Ready to visit?</h2>
            <p className="mt-2 text-white/85">
              Book a slot on WhatsApp or give us a call. We&apos;ll save you a spot and a warm welcome.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <BookButton preset={zone.name} variant="white">Book a Visit</BookButton>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 py-3 font-bold hover:bg-white/10 transition"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
