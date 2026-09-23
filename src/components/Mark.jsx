export default function Mark({ className = "", size = 40 }) {
  return (
    <svg
      viewBox="0 0 280 160"
      width={Math.round(size * 2.2)}
      height={size}
      className={`block ${className}`}
      role="img"
      aria-label="Brick & Built Developers"
    >
      {/* Branches + leaves — gold accent when class allows, else currentColor */}
      <g stroke="none">
        {/* Left branch */}
        <path d="M140 52 C120 40 105 28 95 18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M140 52 C125 42 118 30 112 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Right branch */}
        <path d="M140 52 C160 40 175 28 185 18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M140 52 C155 42 162 30 168 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Gold leaves — use #C9A227 to match site gold */}
        <ellipse cx="90" cy="22" rx="11" ry="6" fill="#C9A227" transform="rotate(-35 90 22)" />
        <ellipse cx="102" cy="16" rx="10" ry="5.5" fill="#C9A227" transform="rotate(-20 102 16)" />
        <ellipse cx="108" cy="28" rx="9" ry="5" fill="#C9A227" transform="rotate(-50 108 28)" />
        <ellipse cx="118" cy="24" rx="8" ry="4.5" fill="#C9A227" transform="rotate(-15 118 24)" />
        <ellipse cx="122" cy="38" rx="8" ry="4.5" fill="#C9A227" transform="rotate(-40 122 38)" />
        <ellipse cx="190" cy="22" rx="11" ry="6" fill="#C9A227" transform="rotate(35 190 22)" />
        <ellipse cx="178" cy="16" rx="10" ry="5.5" fill="#C9A227" transform="rotate(20 178 16)" />
        <ellipse cx="172" cy="28" rx="9" ry="5" fill="#C9A227" transform="rotate(50 172 28)" />
        <ellipse cx="162" cy="24" rx="8" ry="4.5" fill="#C9A227" transform="rotate(15 162 24)" />
        <ellipse cx="158" cy="38" rx="8" ry="4.5" fill="#C9A227" transform="rotate(40 158 38)" />
      </g>
      {/* House silhouette */}
      <path
        fill="currentColor"
        d="M140 48 L95 88 L95 128 Q95 138 110 138 L170 138 Q185 138 185 128 L185 88 Z"
      />
      {/* Window — 4 panes (inverse via background; use paper color holes approximated as rects matching header) */}
      <g fill="#FAF8F3">
        <rect x="128" y="98" width="9" height="9" rx="1" />
        <rect x="143" y="98" width="9" height="9" rx="1" />
        <rect x="128" y="112" width="9" height="9" rx="1" />
        <rect x="143" y="112" width="9" height="9" rx="1" />
      </g>
      {/* Wordmark */}
      <text
        x="140"
        y="152"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="1.5"
      >
        BRICK &amp; BUILT
      </text>
    </svg>
  );
}
