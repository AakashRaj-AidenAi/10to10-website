export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`relative h-12 md:h-20 ${flip ? "rotate-180" : ""}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C320,80 640,0 960,32 C1200,56 1320,40 1440,16 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
