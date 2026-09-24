/** Official BB monogram — client logo style, no white box, adapts via currentColor */
export default function Mark({ className = "", size = 48 }) {
  const h = size;
  const w = Math.round(size * 1.35);
  return (
    <svg
      viewBox="0 0 340 280"
      width={w}
      height={h}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
    >
      {/* BB monogram */}
      <g fill="currentColor">
        <path d="M85 32c32-3 58 5 70 30 7 14 6 32-4 44 16 10 26 26 22 46-5 36-34 54-74 54H48V34c14-2 26-2 37-2zm-10 58h22c16 0 26-9 26-20 0-12-10-18-24-18H75v38zm0 86h26c18 0 30-10 32-24 2-16-10-28-28-28H75v52z" />
        <path d="M188 32c32-3 58 5 70 30 7 14 6 32-4 44 16 10 26 26 22 46-5 36-34 54-74 54h-54V34c14-2 26-2 40-2zm-10 58h22c16 0 26-9 26-20 0-12-10-18-24-18h-24v38zm0 86h26c18 0 30-10 32-24 2-16-10-28-28-28h-30v52z" />
      </g>
      {/* Double flourish */}
      <path d="M30 172c48 22 105 34 162 26 40-6 78-20 110-42" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M40 184c52 24 112 34 172 24 32-5 62-16 90-32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
      {/* Brick arch */}
      <path fill="currentColor" d="M52 192c55 32 130 40 205 16 6 8 8 18 4 28-65 28-155 28-220-4 4-14 6-26 11-40z" opacity="0.95" />
      <g stroke="#FAF8F3" strokeWidth="1.15" opacity="0.5" fill="none">
        <path d="M65 204h175M58 214h188M68 224h170" />
        <path d="M90 200v28M112 202v26M134 200v30M156 202v28M178 200v30M200 202v26M222 200v28" />
      </g>
      {/* Skyline */}
      <g fill="currentColor">
        <rect x="262" y="168" width="9" height="26" rx="0.5" />
        <rect x="273" y="156" width="11" height="38" rx="0.5" />
        <rect x="286" y="162" width="8" height="32" rx="0.5" />
        <rect x="296" y="148" width="12" height="46" rx="0.5" />
        <rect x="310" y="158" width="9" height="36" rx="0.5" />
      </g>
      {/* Wordmark */}
      <text x="170" y="258" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fontWeight="600" letterSpacing="2.5">BRICKS &amp; BUILT</text>
      <text x="170" y="274" textAnchor="middle" fill="currentColor" fontFamily="Georgia, 'Times New Roman', serif" fontSize="10" letterSpacing="5.5">DEVELOPERS</text>
    </svg>
  );
}
