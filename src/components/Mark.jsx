export default function Mark({ className = "", size = 40 }) {
  return (
    <svg
      viewBox="0 0 240 175"
      width={Math.round(size * 1.9)}
      height={size}
      className={`block ${className}`}
      role="img"
      aria-label="Brick & Built Developers"
    >
      {/* Green leaves */}
      <g fill="#2E7D32">
        <ellipse cx="58" cy="30" rx="13" ry="6.5" transform="rotate(-42 58 30)" />
        <ellipse cx="72" cy="18" rx="12" ry="6" transform="rotate(-28 72 18)" />
        <ellipse cx="82" cy="34" rx="10" ry="5.5" transform="rotate(-55 82 34)" />
        <ellipse cx="92" cy="24" rx="9" ry="5" transform="rotate(-18 92 24)" />
        <ellipse cx="96" cy="44" rx="9" ry="5" transform="rotate(-48 96 44)" />
        <ellipse cx="182" cy="30" rx="13" ry="6.5" transform="rotate(42 182 30)" />
        <ellipse cx="168" cy="18" rx="12" ry="6" transform="rotate(28 168 18)" />
        <ellipse cx="158" cy="34" rx="10" ry="5.5" transform="rotate(55 158 34)" />
        <ellipse cx="148" cy="24" rx="9" ry="5" transform="rotate(18 148 24)" />
        <ellipse cx="144" cy="44" rx="9" ry="5" transform="rotate(48 144 44)" />
      </g>

      {/* Branches */}
      <g stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round">
        <path d="M120 60 C100 48 82 34 66 22" />
        <path d="M120 60 C105 46 95 32 88 22" />
        <path d="M120 60 C140 48 158 34 174 22" />
        <path d="M120 60 C135 46 145 32 152 22" />
      </g>

      {/* House + window cutouts (transparent panes, no white) */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M120 56 L68 96 L68 138 Q68 148 84 148 L156 148 Q172 148 172 138 L172 96 Z
           M108 108 h10 v10 h-10 Z
           M122 108 h10 v10 h-10 Z
           M108 122 h10 v10 h-10 Z
           M122 122 h10 v10 h-10 Z"
      />

      {/* Brick pattern */}
      <g opacity="0.3" stroke="#FFFFFF" strokeWidth="1" fill="none">
        <path d="M78 104 H162 M78 112 H162 M78 120 H162 M78 128 H162 M78 136 H162" />
        <path d="M90 104 V112 M110 104 V112 M130 104 V112 M150 104 V112" />
        <path d="M80 112 V120 M100 112 V120 M120 112 V120 M140 112 V120 M160 112 V120" />
        <path d="M90 120 V128 M110 120 V128 M130 120 V128 M150 120 V128" />
        <path d="M80 128 V136 M100 128 V136 M120 128 V136 M140 128 V136 M160 128 V136" />
      </g>

      {/* Wordmark */}
      <text
        x="120"
        y="162"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="1.4"
      >
        BRICK &amp; BUILT
      </text>
      <line x1="72" y1="168" x2="100" y2="168" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <line x1="140" y1="168" x2="168" y2="168" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text
        x="120"
        y="172"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="2.2"
      >
        DEVELOPERS
      </text>
    </svg>
  );
}
