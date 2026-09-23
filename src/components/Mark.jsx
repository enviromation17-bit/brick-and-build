export default function Mark({ className = "", size = 40 }) {
  return (
    <svg
      viewBox="0 0 200 150"
      width={Math.round(size * 1.8)}
      height={size}
      className={`block ${className}`}
      role="img"
      aria-label="Brick & Built Developers"
    >
      {/* Gold leaves */}
      <g fill="#C9A227">
        <ellipse cx="52" cy="28" rx="14" ry="7" transform="rotate(-40 52 28)" />
        <ellipse cx="68" cy="18" rx="13" ry="6.5" transform="rotate(-25 68 18)" />
        <ellipse cx="78" cy="32" rx="11" ry="6" transform="rotate(-55 78 32)" />
        <ellipse cx="88" cy="22" rx="10" ry="5.5" transform="rotate(-15 88 22)" />
        <ellipse cx="92" cy="42" rx="10" ry="5.5" transform="rotate(-45 92 42)" />
        <ellipse cx="148" cy="28" rx="14" ry="7" transform="rotate(40 148 28)" />
        <ellipse cx="132" cy="18" rx="13" ry="6.5" transform="rotate(25 132 18)" />
        <ellipse cx="122" cy="32" rx="11" ry="6" transform="rotate(55 122 32)" />
        <ellipse cx="112" cy="22" rx="10" ry="5.5" transform="rotate(15 112 22)" />
        <ellipse cx="108" cy="42" rx="10" ry="5.5" transform="rotate(45 108 42)" />
      </g>
      {/* Branches */}
      <g stroke="currentColor" strokeWidth="2.8" fill="none" strokeLinecap="round">
        <path d="M100 58 C85 48 70 35 58 22" />
        <path d="M100 58 C88 46 80 34 74 24" />
        <path d="M100 58 C115 48 130 35 142 22" />
        <path d="M100 58 C112 46 120 34 126 24" />
      </g>
      {/* House — solid, transparent windows via evenodd */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M100 55 L58 90 L58 128 Q58 138 72 138 L128 138 Q142 138 142 128 L142 90 Z
           M88 100 h10 v10 H88 Z
           M102 100 h10 v10 h-10 Z
           M88 114 h10 v10 H88 Z
           M102 114 h10 v10 h-10 Z"
      />
      {/* Wordmark */}
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="1.2"
      >
        BRICK &amp; BUILT
      </text>
    </svg>
  );
}
