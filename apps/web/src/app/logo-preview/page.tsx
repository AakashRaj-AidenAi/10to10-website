import { Logo } from "@/components/logo";
import { LogoV2 } from "@/components/logo-v2";
import { LogoV3 } from "@/components/logo-v3";
import { LogoV4 } from "@/components/logo-v4";

export const metadata = {
  title: "Logo Preview",
  robots: { index: false },
};

const concepts = [
  {
    n: "01",
    name: "Conic Ring Bubble",
    tagline: "Abstract jewelry-like badge.",
    component: Logo,
    highlight: false,
    pros: ["Vibrant multi-color ring", "Animated rotation", "Playful, distinctive"],
    cons: ["Doesn't explain the name"],
  },
  {
    n: "02",
    name: "Smiley Clock",
    tagline: "Hands point to 10 and 10. Tells the story.",
    component: LogoV2,
    highlight: false,
    pros: ["Explains the brand name", "Clean favicon silhouette", "Universal symbol"],
    cons: ["Detail-heavy at small sizes"],
  },
  {
    n: "03",
    name: "Stacked Blocks",
    tagline: "Tactile, toy-like, lovable.",
    component: LogoV3,
    highlight: true,
    pros: ["Strongest 'kids brand' read", "Franchise scaling metaphor", "Handmade feel"],
    cons: ["Busier at very small sizes"],
  },
  {
    n: "04",
    name: "Infinity Mark",
    tagline: "10 ∞ 10 — typographic, editorial, timeless.",
    component: LogoV4,
    highlight: false,
    pros: ["Most professional", "Print & monochrome ready", "Ages the best"],
    cons: ["Needs tagline to read as kids brand"],
  },
];

export default function LogoPreviewPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container max-w-6xl">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
            Internal preview
          </div>
          <h1 className="heading-lg mt-3">
            Logo <span className="gradient-text">concepts.</span>
          </h1>
          <p className="mt-4 text-brand-ink/65">
            Four directions for the 10to10 Adventures brand mark. Pick a winner — every
            concept is production-ready and documented in the project memory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {concepts.map((c) => {
            const C = c.component;
            return (
              <div
                key={c.n}
                className={`rounded-2xl bg-white border p-8 transition hover:-translate-y-0.5 ${
                  c.highlight ? "border-brand-primary/30 ring-1 ring-brand-primary/20" : "border-brand-ink/8"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-ink/45">
                    Concept {c.n}
                  </div>
                  {c.highlight && (
                    <span className="chip bg-brand-primary/10 text-brand-primary font-semibold !text-[11px]">
                      Currently live
                    </span>
                  )}
                </div>
                <h2 className="font-display text-xl font-bold">{c.name}</h2>
                <p className="text-sm text-brand-ink/55 mt-1 mb-6">{c.tagline}</p>

                <div className="space-y-5 py-6 border-y border-dashed border-brand-ink/10">
                  <div className="flex items-end gap-6 flex-wrap">
                    <C size="sm" />
                    <C size="md" />
                    <C size="lg" />
                  </div>
                  <div className="bg-brand-ink text-white p-5 rounded-xl flex items-center gap-6 flex-wrap">
                    <C size="md" />
                  </div>
                </div>

                <div className="mt-6 grid gap-1.5">
                  {c.pros.map((p) => (
                    <div key={p} className="text-xs text-brand-ink/70 flex gap-2">
                      <span className="text-brand-turquoise">✓</span> {p}
                    </div>
                  ))}
                  {c.cons.map((p) => (
                    <div key={p} className="text-xs text-brand-ink/50 flex gap-2">
                      <span className="text-brand-ink/30">—</span> {p}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-ink text-white p-8">
          <h3 className="font-display text-base font-bold mb-3">How to switch the live logo</h3>
          <p className="text-sm text-white/60 mb-4">
            Change the import in{" "}
            <code className="px-1.5 py-0.5 bg-white/10 rounded text-white/80 text-xs">components/navbar.tsx</code> and{" "}
            <code className="px-1.5 py-0.5 bg-white/10 rounded text-white/80 text-xs">components/footer.tsx</code>:
          </p>
          <pre className="bg-black/40 border border-white/10 text-white/85 p-4 rounded-xl text-xs overflow-x-auto font-mono">
{`// v1 — Conic Ring Bubble
import { Logo } from "./logo";

// v2 — Smiley Clock
import { LogoV2 as Logo } from "./logo-v2";

// v3 — Stacked Blocks  (currently live)
import { LogoV3 as Logo } from "./logo-v3";

// v4 — Infinity Mark
import { LogoV4 as Logo } from "./logo-v4";`}
          </pre>
          <p className="text-xs text-white/40 mt-4">
            Full design notes for all four concepts saved in{" "}
            <code>memory/logo_concept_v1.md</code> through <code>v4.md</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
