export default function Mark({ className = "", size = 40 }) {
  return (
    <img
      src="/assets/brand-logo-final.jpg"
      alt="Bricks & Built Developers"
      width={size * 1.49}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
