/**
 * Premium Bricks & Built lockup
 * Icon: folded geometric B (navy + champagne)
 * Wordmark: refined tracking, gold DEVELOPERS
 */
const NAVY = "#0F2748";
const NAVY_MID = "#1A3A66";
const CHAMPAGNE = "#D4C4A0";
const GOLD = "#B8935A";

function PremiumIcon({ size = 48 }) {
  const h = Math.round(size * 1.05);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 80 84"
      className="shrink-0 block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bb-navy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C3F73" />
          <stop offset="55%" stopColor={NAVY} />
          <stop offset="100%" stopColor="#0A1A33" />
        </linearGradient>
        <linearGradient id="bb-sand" x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#E8DCC0" />
          <stop offset="50%" stopColor={CHAMPAGNE} />
          <stop offset="100%" stopColor="#B8A67A" />
        </linearGradient>
        <filter id="bb-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#0A1A33" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#bb-soft)">
        {/* Back folded plane — navy */}
        <path
          fill="url(#bb-navy)"
          d="M8 6
             L42 6
             C48 6 52 10 52 16
             L52 30
             L40 42
             L52 54
             L52 68
             C52 74 48 78 42 78
             L8 78
             C5 78 4 76 4 74
             L4 10
             C4 7 5 6 8 6 Z"
        />

        {/* Front champagne face — architectural B */}
        <path
          fill="url(#bb-sand)"
          d="M28 14
             L50 14
             C54 14 56 16 56 20
             L56 34
             C56 37 54 39 51 40.5
             L42 46
             L51 51.5
             C54 53 56 55 56 58
             L56 70
             C56 74 54 76 50 76
             L28 76
             C22 76 18 72 18 66
             L18 54
             C18 50 20 47 24 45.5
             C20 44 18 41 18 36
             L18 24
             C18 18 22 14 28 14 Z"
        />

        {/* Upper bowl */}
        <path
          fill="url(#bb-navy)"
          d="M30 24
             L44 24
             C46 24 47 25 47 27
             L47 33
             C47 35 46 36 44 36
             L30 36
             C28 36 27 35 27 33
             L27 27
             C27 25 28 24 30 24 Z"
        />

        {/* Lower bowl */}
        <path
          fill="url(#bb-navy)"
          d="M30 52
             L44 52
             C46 52 47 53 47 55
             L47 65
             C47 67 46 68 44 68
             L30 68
             C28 68 27 67 27 65
             L27 55
             C27 53 28 52 30 52 Z"
        />

        {/* Gold accent edge */}
        <path
          fill="none"
          stroke={GOLD}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
          d="M52 16 L52 30 L40 42 L52 54 L52 68"
        />
      </g>
    </svg>
  );
}

export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";

  return (
    <span
      className={`inline-flex items-center gap-3 sm:gap-3.5 ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
    >
      <PremiumIcon size={Math.round(size * (full ? 1.05 : 1))} />

      <span className="flex flex-col justify-center min-w-0 pt-0.5">
        <span
          className={
            full
              ? "text-[0.95rem] sm:text-[1.05rem] font-extrabold tracking-[0.06em] text-white"
              : "text-[0.78rem] sm:text-[0.88rem] md:text-[0.95rem] font-extrabold tracking-[0.06em]"
          }
          style={{
            fontFamily: "Manrope, system-ui, sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          BRICKS & BUILT
        </span>
        <span
          className="mt-1 text-[0.55rem] sm:text-[0.6rem] font-semibold"
          style={{
            color: GOLD,
            fontFamily: "Manrope, system-ui, sans-serif",
            letterSpacing: "0.38em",
          }}
        >
          DEVELOPERS
        </span>
      </span>
    </span>
  );
}
