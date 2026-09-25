import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Fade-in on scroll. Never stays invisible:
 * - reduced motion → show immediately
 * - 800ms fallback → force visible if IntersectionObserver fails
 */
export default function Reveal({ children, delay = 0, y = 16, className = "", as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);
  const MotionTag = motion[as] || motion.div;

  useEffect(() => {
    if (reduce) return;
    const t = window.setTimeout(() => setForceShow(true), 800);
    return () => window.clearTimeout(t);
  }, [reduce]);

  if (reduce || forceShow) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
