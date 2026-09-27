/**
 * Classic BB logo (brick arch + skyline)
 * White plate keeps it visible on dark hero and light header
 */
const LOGO_SRC = "/assets/logo-bb-classic.jpg";

export default function Mark({ className = "", size = 48, variant = "mark" }) {
  const full = variant === "full";
  const h = full ? Math.max(56, size) : Math.max(42, Math.round(size * 0.95));

  return (
    <span
      className={`inline-flex items-center ${className}`}
      role="img"
      aria-label="Bricks & Built Developers"
    >
      <span
        className="inline-flex items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/10"
        style={{
          padding: full ? "6px 10px" : "5px 9px",
          maxWidth: full ? "15rem" : "min(16rem, 62vw)",
        }}
      >
        <img
          src={LOGO_SRC}
          alt="Bricks & Built Developers"
          className="block object-contain"
          style={{
            height: h,
            width: "auto",
            maxWidth: "100%",
          }}
          decoding="async"
        />
      </span>
    </span>
  );
}
