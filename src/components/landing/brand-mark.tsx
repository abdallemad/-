import { cn } from "cn";

/** Small rug glyph used as the logo mark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-10 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M9 3v4M14 3v4M19 3v4M24 3v4M29 3v4M9 33v4M14 33v4M19 33v4M24 33v4M29 33v4"
        stroke="#D9A441"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="5" y="6" width="30" height="28" rx="3" fill="#8C1F33" />
      <rect x="9" y="10" width="22" height="20" rx="1" fill="none" stroke="#D9A441" strokeWidth="1.5" />
      <path d="M20 13 27 20 20 27 13 20Z" fill="#D9A441" />
      <path d="M20 17 23 20 20 23 17 20Z" fill="#8C1F33" />
    </svg>
  );
}
