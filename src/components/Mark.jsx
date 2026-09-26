/**
 * Bricks & Built Developers mark — geometric B (navy + sand)
 * Matches brand lockup: icon + BRICKS & BUILT / DEVELOPERS
 * Text uses currentColor so header adapts (white on hero, navy on scroll).
 */
const NAVY = "#152A54";
const SAND = "#C9B896";
const GOLD = "#B8935A";

function GeometricB({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* Outer navy folded plane */}
      <path
        fill={NAVY}
        d="M8 4 L52 4 L52 28 L40 40 L52 52 L52 76 L8 76 L8 52 L20 40 L8 28 Z"
      />
      {/* Inner sand B counter / face */}
      <path
        fill={SAND}
        d="M28 14 L48 14 L48 30 L36 40 L48 50 L48 66 L28 66
           C22 66 18 62 18 56 L18 48 C18 44 20 42 24 40
           C20 38 18 35 18 30 L18 24 C18 18 22 14 28 14 Z
           M30 22 L30 34 L38 34 L38 22 Z
           M30 46 L30 58 L38 58 L38 46 Z"
      />
      {/* Cleaner geometric B: two blocks */}
      <path
        fill={NAVY}
        d="M6 6h38c2 0 4 2 4 4v22c0 2-1 3-2 4l-10 8 10 8c1 1 2 2 2 4v22c0 2-2 4-4 4H6c-2 0-4-2-4-4V10c0-2 2-4 4-4z"
        opacity="0"
      />
      {/* Refined mark from concept: left navy slab + right sand wedge with B cut */}
      <path
        fill={NAVY}
        d="M4 8 L36 8 L48 20 L48 36 L34 48 L48 60 L48 76 L4 76 Z"
      />
      <path
        fill={SAND}
        d="M28 18 L46 18 L46 34 L34 44 L46 54 L46 70 L28 70
           C20 70 16 64 16 56 L16 50 C16 46 18 43 22 42
           C18 40 16 37 16 32 L16 26 C16 20 20 18 28 18 Z"
      />
      {/* B bowls cut in sand (navy shows through via overlay holes simulated) */}
      <path
        fill={NAVY}
        d="M30 26h10v10H30z M30 50h10v12H30z"
        opacity="0.92"
      />
    </g>
  );
}

/** Cleaner single-path geometric B matching the provided concept */
function IconB({ size = 48 }) {
  const s = size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 72"
      className="shrink-0 block"
      aria-hidden="true"
    >
      {/* Navy structure */}
      <path
        fill={NAVY}
        d="M2 4h34l14 12v16L36 44l14 12v16H2V4z"
      />
      {/* Sand face */}
      <path
        fill={SAND}
        d="M22 12h26v18L34 40l14 10v18H22c-8 0-12-5-12-12V50c0-4 2-7 6-8-4-1-6-4-6-9V24c0-7 4-12 12-12z"
      />
      {/* Inner B counters */}
      <rect x="28" y="20" width="12" height="12" rx="1" fill={NAVY} />
      <rect x="28" y="46" width="12" height="14" rx="1" fill={NAVY} />
    </svg>
  );
}

export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";

  if (!full) {
    // Header / nav — horizontal lockup
    return (
      <span
        className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}
        role="img"
        aria-label="Bricks & Built Developers — Home"
      >
        <IconB size={Math.round(size * 0.95)} />
        <span className="flex flex-col leading-none min-w-0">
          <span
            className="font-extrabold tracking-[0.04em] text-[0.72rem] sm:text-[0.82rem] md:text-[0.9rem]"
            style={{ fontFamily: "Manrope, system-ui, sans-serif" }}
          >
            BRICKS & BUILT
          </span>
          <span
            className="mt-0.5 font-bold tracking-[0.32em] text-[0.52rem] sm:text-[0.58rem]"
            style={{ color: GOLD, fontFamily: "Manrope, system-ui, sans-serif" }}
          >
            DEVELOPERS
          </span>
        </span>
      </span>
    );
  }

  // Footer — stacked
  return (
    <span
      className={`inline-flex flex-col items-start gap-2 ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
    >
      <span className="inline-flex items-center gap-3">
        <IconB size={Math.round(size * 0.85)} />
        <span className="flex flex-col leading-none">
          <span
            className="font-extrabold tracking-[0.04em] text-[0.85rem] sm:text-[0.95rem] text-white"
            style={{ fontFamily: "Manrope, system-ui, sans-serif" }}
          >
            BRICKS & BUILT
          </span>
          <span
            className="mt-1 font-bold tracking-[0.32em] text-[0.58rem]"
            style={{ color: GOLD, fontFamily: "Manrope, system-ui, sans-serif" }}
          >
            DEVELOPERS
          </span>
        </span>
      </span>
    </span>
  );
}
