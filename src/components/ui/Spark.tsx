/**
 * The spark: the brand's single recurring mark.
 * A point of rose with a faint ring, where an idea begins.
 */
export function Spark({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      className={["spark", className].filter(Boolean).join(" ")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="spark__ring" cx="12" cy="12" r="10" fill="none" strokeWidth="1" />
      <circle className="spark__core" cx="12" cy="12" r="4" />
    </svg>
  );
}
