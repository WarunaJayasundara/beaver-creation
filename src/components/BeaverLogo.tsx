"use client";

import clsx from "clsx";

/**
 * Beaver + B integrated logo — minimalist beaver head with letter B.
 * Uses currentColor so it inherits accent (e.g. primary teal).
 */
export function BeaverLogo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("shrink-0", className)}
      aria-hidden
    >
      {/* Head */}
      <ellipse cx="24" cy="18" rx="12" ry="10" fill="currentColor" />
      {/* Ears */}
      <circle cx="14" cy="12" r="2.5" fill="currentColor" />
      <circle cx="34" cy="12" r="2.5" fill="currentColor" />
      {/* Snout */}
      <path
        d="M20 18.5c0-1.5 1.2-2.8 4-2.8s4 1.3 4 2.8v3h-8v-3z"
        fill="currentColor"
      />
      {/* Teeth */}
      <rect x="20.5" y="22" width="2.5" height="3" rx="0.4" fill="currentColor" />
      <rect x="25" y="22" width="2.5" height="3" rx="0.4" fill="currentColor" />
      {/* Letter B (integrated) */}
      <path
        fillRule="evenodd"
        d="M16 28h2.5c1.4 0 2.5 1.1 2.5 2.5v1c0 1.4-1.1 2.5-2.5 2.5H16V28zm0 6h2.5c1.4 0 2.5-1.1 2.5-2.5v-1c0-1.4-1.1-2.5-2.5-2.5H16V34z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        d="M28 28c1.4 0 2.5 1.1 2.5 2.5v1c0 1.4-1.1 2.5-2.5 2.5H26V28h2zm0 6c1.4 0 2.5-1.1 2.5-2.5v-1c0-1.4-1.1-2.5-2.5-2.5H26V34h2z"
        fill="currentColor"
      />
      <rect x="18" y="28" width="2" height="8" fill="currentColor" />
    </svg>
  );
}
