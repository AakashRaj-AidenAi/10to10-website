import type { SVGProps } from "react";

/**
 * Custom illustrated SVG icon set for 10to10 Adventures.
 *
 * Style rules:
 * - Single-stroke, rounded line caps
 * - Two-color limit per icon: indigo primary + accent color
 * - 24×24 viewBox, scales to any size via className
 * - Filled where the silhouette helps recognition (kids, cake), stroked otherwise
 *
 * Usage: <BlockIcon className="h-6 w-6 text-brand-primary" />
 */

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BlocksIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" />
      <rect x="8" y="3" width="8" height="8" rx="1.5" stroke="currentColor" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 21l4-1 12-12-3-3L4 17l-1 4z" stroke="currentColor" />
      <path d="M14 6l3 3" stroke="currentColor" />
      <path d="M5 19l1-3" stroke="currentColor" />
    </svg>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M5 9h14a3 3 0 013 3v3a3 3 0 01-3 3c-1.5 0-2-1-3-1.5s-2-.5-4-.5-3 0-4 .5S6.5 18 5 18a3 3 0 01-3-3v-3a3 3 0 013-3z"
        stroke="currentColor"
      />
      <line x1="7" y1="13" x2="9" y2="13" stroke="currentColor" />
      <line x1="8" y1="12" x2="8" y2="14" stroke="currentColor" />
      <circle cx="16" cy="12.5" r="0.8" fill="currentColor" />
      <circle cx="17.5" cy="14" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function FilmIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
      <path d="M3 9h18M3 15h18M7 4v16M17 4v16" stroke="currentColor" />
    </svg>
  );
}

export function CakeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 21h18v-7a3 3 0 00-3-3H6a3 3 0 00-3 3v7z" stroke="currentColor" />
      <path d="M3 17c1 0 1.5-1 3-1s2 1 3 1 1.5-1 3-1 2 1 3 1 1.5-1 3-1 2 1 3 1" stroke="currentColor" />
      <path d="M12 4v3" stroke="currentColor" />
      <path d="M12 4c-.5-.5-.5-1 0-2 .5 1 .5 1.5 0 2z" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

export function PopcornIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 9l1.5 12h9L18 9" stroke="currentColor" />
      <path
        d="M5 9a2 2 0 011-3.7A2.5 2.5 0 019 4a2.5 2.5 0 013 0 2.5 2.5 0 013 0 2.5 2.5 0 013 1.3A2 2 0 0119 9H5z"
        stroke="currentColor"
      />
      <path d="M9 12v6M12 12v6M15 12v6" stroke="currentColor" />
    </svg>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="9" width="18" height="12" rx="1.5" stroke="currentColor" />
      <path d="M3 13h18M12 9v12" stroke="currentColor" />
      <path
        d="M8 9c-2 0-3-1-3-2.5S6 4 7.5 4 12 7 12 9c0-2 3-5 4.5-5S20 5 20 6.5 19 9 17 9"
        stroke="currentColor"
      />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"
        stroke="currentColor"
      />
      <circle cx="19" cy="4" r="1" fill="currentColor" />
      <circle cx="5" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 21s-7-4.5-9-9a4.5 4.5 0 018-3 4.5 4.5 0 018 3c-2 4.5-7 9-7 9z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M3 4.5A1.5 1.5 0 014.5 3H10a3 3 0 013 3v15a2 2 0 00-2-2H4.5A1.5 1.5 0 013 17.5v-13z"
        stroke="currentColor"
      />
      <path
        d="M21 4.5A1.5 1.5 0 0019.5 3H14a3 3 0 00-3 3v15a2 2 0 012-2h6.5a1.5 1.5 0 001.5-1.5v-13z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2.5-1.5H18a3 3 0 003-3 9 9 0 00-9-9z"
        stroke="currentColor"
      />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="9" cy="6.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function YogaIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="5" r="2" stroke="currentColor" />
      <path d="M12 7v6" stroke="currentColor" />
      <path d="M5 14c2-1 5-1 7-1s5 0 7 1" stroke="currentColor" />
      <path d="M9 13l-3 8M15 13l3 8" stroke="currentColor" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" />
      <path d="M3 21c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" />
      <path d="M15 16c2 0 6 1 6 4" stroke="currentColor" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path
        d="M12 3l2.6 5.6 6.4.6-4.8 4.4 1.4 6.4L12 17l-5.6 3 1.4-6.4L3 9.2l6.4-.6L12 3z"
        stroke="currentColor"
      />
    </svg>
  );
}

/**
 * Decorative blob — for hero / section backgrounds.
 * Pass `className="text-brand-primary/10"` for subtle tint.
 */
export function BlobShape(props: IconProps) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M44 -76C58 -64 72 -52 78 -37C85 -22 84 -3 80 16C75 35 68 53 55 64C42 75 23 78 4 73C-15 67 -33 53 -47 38C-61 22 -71 5 -72 -13C-73 -31 -64 -50 -49 -62C-34 -75 -14 -82 4 -84C23 -85 30 -87 44 -76Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/**
 * Hand-drawn underline accent — useful under headings.
 */
export function UnderlineSquiggle(props: IconProps) {
  return (
    <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 7c20-6 40-6 60 0s40 6 60 0 40-6 60 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
