import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal — pure CSS + IntersectionObserver.
 * Starts hidden, plays once in view; stays visible after.
 */
export default function Reveal({ children, delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-io ${on ? "is-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${Math.min(delay, 0.35)}s` } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
