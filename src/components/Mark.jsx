export default function Mark({ className = "", size = 40 }) {
  return (
    <img
      src="/assets/brand-logo.svg"
      alt="Bricks & Built Developers"
      width={Math.round(size * 1.5)}
      height={size}
      className={`block object-contain object-left ${className}`}
      style={{ imageRendering: "auto" }}
      loading="eager"
      decoding="async"
    />
  );
}
