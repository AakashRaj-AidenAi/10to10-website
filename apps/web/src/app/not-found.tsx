import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-mesh-hero">
      <div className="text-center">
        <div className="font-display text-[8rem] leading-none gradient-text font-bold">
          404
        </div>
        <p className="text-xl text-brand-ink/70">
          Looks like this zone is still under construction.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Back to the playground
        </Link>
      </div>
    </section>
  );
}
