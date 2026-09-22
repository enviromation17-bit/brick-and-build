export default function Mark({ className = "", size = 40 }) {
  return (
    <img
      src="/assets/brand-logo-final.jpg"
      alt="Brick & Build Developers"
      width={Math.round(size * 1.49)}
      height={size}
      className={`object-contain object-center max-h-full max-w-full ${className}`}
      style={{ imageRendering: "auto" }}
      loading="eager"
      decoding="async"
    />
  );
}
