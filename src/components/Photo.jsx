// Branded placeholder used everywhere a real photo will eventually go.
// No external/binary dependency — pure CSS, so nothing to break or swap
// out accidentally. Replace usages of this component with a normal
// <img src="/assets/media/..."> once real photography is added.
export default function Photo({ label, src, aspect = "aspect-[4/3]", className = "" }) {
  if (src) {
    return <img src={src} alt={label || ""} className={`${aspect} ${className} w-full object-cover`} />;
  }

  return (
    <div
      className={`${aspect} ${className} relative overflow-hidden rounded-2xl border border-lineDark flex items-center justify-center`}
      style={{
        background: "linear-gradient(135deg, #1C3564 0%, #152A54 55%, #0E1D3D 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)"
      }} />
      <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold/80">
          <path d="M4 7h3l2-2h6l2 2h3v12H4V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        <span className="text-[0.7rem] tracking-[0.1em] uppercase text-white/60">{label || "Photography pending"}</span>
      </div>
    </div>
  );
}
