/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {number} [props.size]
 * @param {"mark"|"full"} [props.variant]  mark = BB icon only (header); full = icon + wordmark (footer)
 */
export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";
  const h = size;
  const w = full ? Math.round(size * 1.15) : Math.round(size * 1.35);
  const viewBox = full ? "0 0 400 360" : "0 0 400 280";

  return (
    <svg
      viewBox={viewBox}
      width={w}
      height={h}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="M95 40c38-4 70 6 84 36 8 16 7 36-5 50 19 11 31 30 26 54-6 42-40 64-86 64H52V42c16-2 30-2 43-2zm-12 68h26c19 0 30-10 30-23 0-14-11-21-28-21H83v44zm0 100h30c21 0 35-11 37-28 3-18-11-32-32-32H83v60z" />
        <path d="M215 40c38-4 70 6 84 36 8 16 7 36-5 50 19 11 31 30 26 54-6 42-40 64-86 64h-62V42c16-2 30-2 43-2zm-12 68h26c19 0 30-10 30-23 0-14-11-21-28-21h-28v44zm0 100h30c21 0 35-11 37-28 3-18-11-32-32-32h-35v60z" />
      </g>
      <path
        d="M200 55c8 40 6 85-8 125 22-18 38-42 48-70 4-12 6-28 4-42-12 8-28 12-44-13z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M28 210c55 28 125 42 195 32 48-7 95-24 135-52"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 224c58 30 130 42 200 28 40-8 78-22 112-42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        fill="currentColor"
        d="M55 232c65 38 155 48 250 18 8 10 10 22 6 34-78 34-185 34-265-6 5-16 8-30 9-46z"
        opacity="0.95"
      />
      <g stroke="#FAF8F3" strokeWidth="1.2" opacity="0.45" fill="none">
        <path d="M72 248h210M65 260h225M78 272h200" />
        <path d="M100 244v32M125 246v30M150 244v34M175 246v32M200 244v34M225 246v30M250 244v32" />
      </g>
      <g fill="currentColor">
        <rect x="300" y="205" width="10" height="32" rx="0.5" />
        <rect x="312" y="190" width="12" height="47" rx="0.5" />
        <rect x="326" y="198" width="9" height="39" rx="0.5" />
        <rect x="337" y="182" width="14" height="55" rx="0.5" />
        <rect x="353" y="192" width="10" height="45" rx="0.5" />
        <rect x="365" y="200" width="8" height="37" rx="0.5" />
      </g>
      {full && (
        <>
          <text
            x="200"
            y="320"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Georgia, 'Times New Roman', Times, serif"
            fontSize="28"
            fontWeight="600"
            letterSpacing="3"
          >
            BRICKS &amp; BUILT
          </text>
          <text
            x="200"
            y="348"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Georgia, 'Times New Roman', Times, serif"
            fontSize="14"
            letterSpacing="7"
          >
            DEVELOPERS
          </text>
        </>
      )}
    </svg>
  );
}
