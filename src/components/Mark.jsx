export default function Mark({ className = "", size = 40 }) {
  return (
    <img
      src="/assets/brand-logo.svg"
      alt="Bricks & Built Developers"
      width={Math.round(size * 1.5)}
      height={size}
      className={`object-contain object-center max-h-full max-w-full ${className}`}
      style={{ imageRendering: "auto" }}
      loading="eager"
      decoding="async"
    />
  );
}
