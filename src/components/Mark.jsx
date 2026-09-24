import LOGO_SRC from "../assets/logoData.js";

export default function Mark({ className = "", size = 48 }) {
  const height = size;
  return (
    <img
      src={LOGO_SRC}
      alt="Bricks & Built Developers"
      height={height}
      className={`block object-contain ${className}`}
      style={{ height, width: "auto", maxHeight: height }}
      decoding="async"
    />
  );
}
