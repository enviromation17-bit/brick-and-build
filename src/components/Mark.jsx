/**
 * Bricks & Built Developers mark
 * variant "mark" = header (horizontal)
 * variant "full" = footer (stacked)
 */
export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";

  if (!full) {
    const h = size;
    const w = Math.round(size * 3.55);
    return (
      <svg
        viewBox="0 0 300 72"
        width={w}
        height={h}
        className={`block ${className}`}
        role="img"
        aria-label="Bricks & Built Developers — Home"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Refined BB — classic serif-style bowls */}
        <g fill="currentColor">
          <path d="M6 6c2.2 0 4 .2 6 .2h18.5c6.8 0 12.2 1.6 15.8 4.6 3.4 2.8 5.2 6.8 5.2 11.6 0 4.6-1.6 8.4-4.8 11-2.2 1.8-5 3-8.2 3.6 4.2 1 7.6 2.8 10 5.4 2.8 3.2 4.2 7.4 4.2 12.2 0 5.6-2 10.2-5.8 13.6-3.8 3.4-9.4 5.2-16.6 5.2H12c-2 0-4 .2-6 .2V6zm16.5 12.5v14.5h10.2c3.6 0 6.2-.6 7.8-2 1.4-1.2 2.2-3 2.2-5.2 0-2.4-.8-4.2-2.4-5.2-1.6-1.2-4.2-2.1-7.8-2.1h-10zm0 25v16.5h12.2c4 0 7-.8 8.8-2.4 1.8-1.4 2.6-3.6 2.6-6.2 0-2.6-1-4.6-2.8-6-1.8-1.4-4.8-2-8.8-2h-12z" />
          <path d="M58 6c2.2 0 4 .2 6 .2h18.5c6.8 0 12.2 1.6 15.8 4.6 3.4 2.8 5.2 6.8 5.2 11.6 0 4.6-1.6 8.4-4.8 11-2.2 1.8-5 3-8.2 3.6 4.2 1 7.6 2.8 10 5.4 2.8 3.2 4.2 7.4 4.2 12.2 0 5.6-2 10.2-5.8 13.6-3.8 3.4-9.4 5.2-16.6 5.2H64c-2 0-4 .2-6 .2V6zm16.5 12.5v14.5h10.2c3.6 0 6.2-.6 7.8-2 1.4-1.2 2.2-3 2.2-5.2 0-2.4-.8-4.2-2.4-5.2-1.6-1.2-4.2-2.1-7.8-2.1h-10zm0 25v16.5h12.2c4 0 7-.8 8.8-2.4 1.8-1.4 2.6-3.6 2.6-6.2 0-2.6-1-4.6-2.8-6-1.8-1.4-4.8-2-8.8-2h-12z" />
        </g>
        {/* Subtle brick line under BB */}
        <path d="M8 64h100" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M12 67.5h92" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

        <text
          x="118"
          y="32"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          BRICKS &amp; BUILT
        </text>
        <text
          x="118"
          y="52"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', Times, serif"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="0.32em"
          opacity="0.88"
        >
          DEVELOPERS
        </text>
      </svg>
    );
  }

  const h = size;
  const w = Math.round(size * 1.25);
  return (
    <svg
      viewBox="0 0 340 310"
      width={w}
      height={h}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M55 24c3 0 5.5.3 8 .3h42c14 0 25 3.2 32.5 9.4 7 5.8 10.5 14 10.5 24 0 9.5-3.2 17.2-9.8 22.5-4.5 3.6-10.2 6-16.8 7.2 8.6 2 15.5 5.8 20.5 11 5.8 6.5 8.6 15.2 8.6 25 0 11.5-4.2 21-12 28-7.8 7-19.2 10.6-34 10.6H63c-2.5 0-5 .3-8 .3V24zm28 26v30h22c7.5 0 12.8-1.3 16-3.8 2.8-2.4 4.4-6 4.4-10.5 0-4.8-1.6-8.4-4.8-10.6-3.2-2.4-8.5-4.1-16-4.1H83zm0 52v34h26c8.5 0 14.5-1.6 18-4.8 3.6-3 5.4-7.4 5.4-12.6 0-5.2-2-9.4-5.6-12.2-3.6-2.8-9.6-4.4-18-4.4H83z" />
        <path d="M172 24c3 0 5.5.3 8 .3h42c14 0 25 3.2 32.5 9.4 7 5.8 10.5 14 10.5 24 0 9.5-3.2 17.2-9.8 22.5-4.5 3.6-10.2 6-16.8 7.2 8.6 2 15.5 5.8 20.5 11 5.8 6.5 8.6 15.2 8.6 25 0 11.5-4.2 21-12 28-7.8 7-19.2 10.6-34 10.6h-52c-2.5 0-5 .3-8 .3V24zm28 26v30h22c7.5 0 12.8-1.3 16-3.8 2.8-2.4 4.4-6 4.4-10.5 0-4.8-1.6-8.4-4.8-10.6-3.2-2.4-8.5-4.1-16-4.1h-22zm0 52v34h26c8.5 0 14.5-1.6 18-4.8 3.6-3 5.4-7.4 5.4-12.6 0-5.2-2-9.4-5.6-12.2-3.6-2.8-9.6-4.4-18-4.4h-26z" />
      </g>
      <path
        d="M36 182c48 22 115 34 180 24 40-6 78-20 110-42"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        fill="currentColor"
        d="M50 196c55 30 130 38 210 14 6 8 8 18 4 28-65 28-155 28-230-4 4-14 7-26 16-38z"
        opacity="0.92"
      />
      <g stroke="#FAF8F3" strokeWidth="1.1" opacity="0.4" fill="none">
        <path d="M68 210h185M62 220h195M72 230h175" />
      </g>
      <g fill="currentColor">
        <rect x="262" y="172" width="9" height="28" />
        <rect x="273" y="160" width="11" height="40" />
        <rect x="286" y="166" width="8" height="34" />
        <rect x="296" y="152" width="13" height="48" />
        <rect x="311" y="162" width="9" height="38" />
      </g>
      <text
        x="170"
        y="276"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        BRICKS &amp; BUILT
      </text>
      <text
        x="170"
        y="298"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', Times, serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.34em"
        opacity="0.88"
      >
        DEVELOPERS
      </text>
    </svg>
  );
}
