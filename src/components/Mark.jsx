/**
 * Bricks & Built — geometric B lockup (navy + sand)
 * Header: icon + wordmark (text uses currentColor for light/dark header)
 * Footer: same lockup with white wordmark
 */
const NAVY = "#152A54";
const SAND = "#C9B896";
const GOLD = "#B8935A";

function IconB({ size = 44 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.12)}
      viewBox="0 0 64 72"
      className="shrink-0 block"
      aria-hidden="true"
    >
      {/* Navy folded plane / left structure */}
      <path
        fill={NAVY}
        d="M4 6h32l16 14v18L38 50l14 12v14H4V6z"
      />
      {/* Sand geometric face */}
      <path
        fill={SAND}
        d="M24 14h28v20L36 46l16 12v16H24c-9 0-14-6-14-14v-8c0-4 2-7 7-9-5-2-7-5-7-10V26c0-8 5-12 14-12z"
      />
      {/* B counters */}
      <rect x="30" y="22" width="13" height="12" rx="1.5" fill={NAVY} />
      <rect x="30" y="50" width="13" height="14" rx="1.5" fill={NAVY} />
    </svg>
  );
}

export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";
  const titleClass = full
    ? "font-extrabold tracking-[0.04em] text-[0.88rem] sm:text-[0.98rem] text-white"
    : "font-extrabold tracking-[0.04em] text-[0.72rem] sm:text-[0.82rem] md:text-[0.9rem]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
    >
      <IconB size={Math.round(size * (full ? 0.9 : 0.95))} />
      <span className="flex flex-col leading-none min-w-0">
        <span
          className={titleClass}
          style={{ fontFamily: "Manrope, system-ui, sans-serif" }}
        >
          BRICKS & BUILT
        </span>
        <span
          className="mt-0.5 sm:mt-1 font-bold tracking-[0.32em] text-[0.52rem] sm:text-[0.58rem]"
          style={{ color: GOLD, fontFamily: "Manrope, system-ui, sans-serif" }}
        >
          DEVELOPERS.
        </span>
      </span>
    </span>
  );
}
