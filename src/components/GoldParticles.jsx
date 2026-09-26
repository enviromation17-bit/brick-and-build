import { useEffect, useRef } from "react";

/**
 * Lightweight Canvas gold dust — Option B style:
 * soft drift + desktop cursor part-away. No WebGL / Three.js.
 */
export default function GoldParticles({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window;
    const count = isMobile ? 48 : 110;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999, active: false };

    const particles = Array.from({ length: count }, () => spawn());

    function spawn() {
      return {
        x: Math.random(),
        y: Math.random(),
        r: 0.4 + Math.random() * (isMobile ? 1.2 : 1.8),
        vx: (Math.random() - 0.5) * 0.00025,
        vy: -0.00015 - Math.random() * 0.00035,
        a: 0.15 + Math.random() * 0.45,
      };
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (!isMobile && mouse.active) {
          const px = p.x * w;
          const py = p.y * h;
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          const radius = 90;
          if (dist < radius) {
            const force = (1 - dist / radius) * 0.012;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        if (p.y < -0.02) {
          p.y = 1.02;
          p.x = Math.random();
        }
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;

        ctx.beginPath();
        ctx.fillStyle = `rgba(184, 147, 90, ${p.a})`;
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    tick();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
    if (ro && canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize, { passive: true });

    if (!isMobile) {
      canvas.parentElement?.addEventListener("mousemove", onMove, { passive: true });
      canvas.parentElement?.addEventListener("mouseleave", onLeave, { passive: true });
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !raf) raf = requestAnimationFrame(tick);
        if (!running && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro?.disconnect();
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMove);
      canvas.parentElement?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      aria-hidden="true"
    />
  );
}
