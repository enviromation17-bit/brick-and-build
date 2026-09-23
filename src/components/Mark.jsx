export default function Mark({ className = "", size = 40 }) {
  return (
    <svg
      viewBox="0 0 420 120"
      width={Math.round(size * 3.5)}
      height={size}
      className={`block ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
      fill="none"
    >
      <g fill="currentColor">
        <path d="M8 8h36c14 0 24 6 24 20 0 9-5 15-12 18 9 3 16 10 16 22 0 16-12 24-28 24H8V8zm20 32h14c6 0 10-3 10-8s-4-8-10-8H28v16zm0 44h16c8 0 14-4 14-12s-6-12-14-12H28v24z" />
      </g>
      <text x="96" y="52" fontFamily="Georgia, Times New Roman, serif" fontSize="28" fontWeight="700" fill="currentColor" letterSpacing="1.5">BRICKS &amp; BUILT</text>
      <line x1="96" y1="68" x2="160" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <line x1="280" y1="68" x2="344" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <text x="220" y="74" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="600" fill="currentColor" letterSpacing="4">DEVELOPERS</text>
    </svg>
  );
}
