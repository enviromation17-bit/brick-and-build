/**
 * Header: horizontal BB + “BRICK & BUILT” (readable, clickable)
 * Footer: taller full lockup with DEVELOPERS
 *
 * @param {"mark"|"full"} [variant]
 */
export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";

  // Header lockup — wide, readable at navbar size
  if (!full) {
    const h = size;
    const w = Math.round(size * 3.4);
    return (
      <svg
        viewBox="0 0 280 72"
        width={w}
        height={h}
        className={`block ${className}`}
        role="img"
        aria-label="Brick & Built Developers — Home"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* BB badge */}
        <g fill="currentColor">
          <path d="M8 8h22c10 0 17 5 17 14 0 6-3 11-9 13 8 2 13 8 13 16 0 11-8 17-20 17H8V8zm12 12v12h8c4 0 6-2 6-6s-2-6-6-6h-8zm0 22v14h10c5 0 8-3 8-7s-3-7-8-7H20z" />
          <path d="M52 8h22c10 0 17 5 17 14 0 6-3 11-9 13 8 2 13 8 13 16 0 11-8 17-20 17H52V8zm12 12v12h8c4 0 6-2 6-6s-2-6-6-6h-8zm0 22v14h10c5 0 8-3 8-7s-3-7-8-7H64z" />
        </g>
        {/* Brick underline under BB */}
        <path
          d="M6 62h88"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M10 66h80"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Wordmark — always visible next to mark */}
        <text
          x="108"
          y="34"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="0.06em"
        >
          BRICK &amp; BUILT
        </text>
        <text
          x="108"
          y="54"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.28em"
          opacity="0.85"
        >
          DEVELOPERS
        </text>
      </svg>
    );
  }

  // Footer full mark
  const h = size;
  const w = Math.round(size * 1.2);
  return (
    <svg
      viewBox="0 0 320 300"
      width={w}
      height={h}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M70 28h48c18 0 30 9 30 24 0 10-5 18-14 22 14 4 22 13 22 28 0 19-14 30-36 30H70V28zm22 22v22h18c7 0 11-3 11-10s-4-12-11-12H92zm0 40v26h22c9 0 14-5 14-13s-5-13-14-13H92z" />
        <path d="M168 28h48c18 0 30 9 30 24 0 10-5 18-14 22 14 4 22 13 22 28 0 19-14 30-36 30h-50V28zm22 22v22h18c7 0 11-3 11-10s-4-12-11-12h-18zm0 40v26h22c9 0 14-5 14-13s-5-13-14-13h-22z" />
      </g>
      <path
        d="M40 175c40 20 100 30 160 22 36-5 70-18 100-38"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        fill="currentColor"
        d="M55 190c50 28 120 36 200 12 6 8 8 18 4 28-60 26-145 26-215-4 4-12 6-24 11-36z"
        opacity="0.92"
      />
      <g stroke="#FAF8F3" strokeWidth="1.1" opacity="0.4" fill="none">
        <path d="M70 204h170M65 214h180M75 224h160" />
      </g>
      <g fill="currentColor">
        <rect x="250" y="168" width="8" height="26" />
        <rect x="260" y="158" width="10" height="36" />
        <rect x="272" y="164" width="7" height="30" />
        <rect x="281" y="150" width="12" height="44" />
        <rect x="295" y="160" width="8" height="34" />
      </g>
      <text
        x="160"
        y="268"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        BRICK &amp; BUILT
      </text>
      <text
        x="160"
        y="290"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="0.32em"
        opacity="0.85"
      >
        DEVELOPERS
      </text>
    </svg>
  );
}
