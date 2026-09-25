/**
 * Bricks & Built Developers mark
 * variant "mark" = header (horizontal)
 * variant "full" = footer (stacked)
 * Gold accent matches site #B8935A
 */
const GOLD = "#B8935A";

export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";

  if (!full) {
    const h = size;
    const w = Math.round(size * 3.7);
    return (
      <svg
        viewBox="0 0 320 76"
        width={w}
        height={h}
        className={`block ${className}`}
        role="img"
        aria-label="Bricks & Built Developers — Home"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bold architectural BB */}
        <g fill="currentColor">
          {/* B1 */}
          <path d="M4 4h28c8.5 0 14.8 2 19 5.8 4 3.6 6.2 8.6 6.2 14.4 0 5.4-1.8 9.8-5.4 12.8-2.6 2.2-5.8 3.6-9.6 4.2 5 1.2 9 3.4 11.8 6.6 3.4 3.8 5.2 9 5.2 15 0 6.8-2.4 12.4-7 16.4-4.6 4-11.2 6-19.6 6H4V4zm18 14v16h11.5c4.2 0 7.2-.8 9-2.4 1.6-1.4 2.5-3.4 2.5-5.8 0-2.6-1-4.6-2.8-5.8-1.8-1.2-4.8-2-9.2-2H22zm0 28v20h13.5c4.8 0 8.2-1 10.4-2.8 2.2-1.8 3.2-4.4 3.2-7.4 0-3-1.2-5.4-3.4-7-2.2-1.6-5.6-2.4-10.2-2.4H22z" />
          {/* B2 */}
          <path d="M68 4h28c8.5 0 14.8 2 19 5.8 4 3.6 6.2 8.6 6.2 14.4 0 5.4-1.8 9.8-5.4 12.8-2.6 2.2-5.8 3.6-9.6 4.2 5 1.2 9 3.4 11.8 6.6 3.4 3.8 5.2 9 5.2 15 0 6.8-2.4 12.4-7 16.4-4.6 4-11.2 6-19.6 6H68V4zm18 14v16h11.5c4.2 0 7.2-.8 9-2.4 1.6-1.4 2.5-3.4 2.5-5.8 0-2.6-1-4.6-2.8-5.8-1.8-1.2-4.8-2-9.2-2H86zm0 28v20h13.5c4.8 0 8.2-1 10.4-2.8 2.2-1.8 3.2-4.4 3.2-7.4 0-3-1.2-5.4-3.4-7-2.2-1.6-5.6-2.4-10.2-2.4H86z" />
        </g>

        {/* Gold brick / foundation line under BB */}
        <path d="M6 68h118" stroke={GOLD} strokeWidth="3.2" strokeLinecap="round" />
        <path d="M10 72h110" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />

        {/* Wordmark — stronger hierarchy */}
        <text
          x="136"
          y="34"
          fill="currentColor"
          fontFamily="Manrope, system-ui, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="0.06em"
        >
          BRICKS &amp; BUILT
        </text>
        <text
          x="136"
          y="54"
          fill={GOLD}
          fontFamily="Manrope, system-ui, sans-serif"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.36em"
        >
          DEVELOPERS
        </text>
      </svg>
    );
  }

  const h = size;
  const w = Math.round(size * 1.35);
  return (
    <svg
      viewBox="0 0 360 320"
      width={w}
      height={h}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stacked BB — bold */}
      <g fill="currentColor">
        <path d="M48 18h46c14.5 0 25.2 3.4 32.8 9.8 7.2 6 11 14.4 11 24.2 0 9.2-3.4 16.6-10 21.8-4.6 3.6-10.4 6-17.2 7.2 8.4 2 15.2 5.6 20.2 10.8 5.8 6.2 8.8 14.6 8.8 24.2 0 11.2-4.2 20.4-12.4 27-8.2 6.6-20 10-34.8 10H48V18zm32 28v32h24c8 0 13.6-1.4 17-4.2 3-2.6 4.6-6.4 4.6-11 0-5-1.8-8.8-5.2-11.2-3.4-2.4-9-3.6-16.4-3.6H80zm0 54v36h28c9 0 15.2-1.6 19-5 3.6-3.2 5.6-7.8 5.6-13.2 0-5.4-2.2-9.8-6.2-12.6-4-2.8-10.2-4.2-18.4-4.2H80z" />
        <path d="M178 18h46c14.5 0 25.2 3.4 32.8 9.8 7.2 6 11 14.4 11 24.2 0 9.2-3.4 16.6-10 21.8-4.6 3.6-10.4 6-17.2 7.2 8.4 2 15.2 5.6 20.2 10.8 5.8 6.2 8.8 14.6 8.8 24.2 0 11.2-4.2 20.4-12.4 27-8.2 6.6-20 10-34.8 10h-54V18zm32 28v32h24c8 0 13.6-1.4 17-4.2 3-2.6 4.6-6.4 4.6-11 0-5-1.8-8.8-5.2-11.2-3.4-2.4-9-3.6-16.4-3.6h-24zm0 54v36h28c9 0 15.2-1.6 19-5 3.6-3.2 5.6-7.8 5.6-13.2 0-5.4-2.2-9.8-6.2-12.6-4-2.8-10.2-4.2-18.4-4.2h-28z" />
      </g>

      {/* Gold foundation + subtle skyline */}
      <path
        d="M40 188c52 24 122 36 190 24 42-7 82-22 116-46"
        stroke={GOLD}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        fill="currentColor"
        d="M52 202c58 32 138 40 222 14 6 8 8 18 4 28-68 30-162 30-240-4 4-14 8-26 14-38z"
        opacity="0.9"
      />
      <g fill={GOLD} opacity="0.95">
        <rect x="268" y="176" width="10" height="30" />
        <rect x="280" y="164" width="12" height="42" />
        <rect x="294" y="170" width="9" height="36" />
        <rect x="305" y="156" width="14" height="50" />
        <rect x="321" y="166" width="10" height="40" />
      </g>

      <text
        x="180"
        y="278"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="26"
        fontWeight="800"
        letterSpacing="0.07em"
      >
        BRICKS &amp; BUILT
      </text>
      <text
        x="180"
        y="302"
        textAnchor="middle"
        fill={GOLD}
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="0.38em"
      >
        DEVELOPERS
      </text>
    </svg>
  );
}
