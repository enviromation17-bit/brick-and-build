/**
 * Lightweight fade-in — pure CSS, no framer-motion.
 * Always visible (no stuck opacity:0).
 */
export default function Reveal({ children, delay = 0, className = "", ...rest }) {
  const style = delay
    ? { animationDelay: `${Math.min(delay, 0.4)}s` }
    : undefined;

  return (
    <div className={`reveal-in ${className}`.trim()} style={style} {...rest}>
      {children}
    </div>
  );
}
