import { useEffect, useRef } from "react";

/**
 * Canvas gold dust — stronger visibility + desktop cursor part-away.
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

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const count = isMobile ? 70 : 160;
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
        r: 1.1 + Math.random() * (isMobile ? 2.2 : 2.8),
        vx: (Math.random() - 0.5) * 0.0004,
        vy: -0.00025 - Math.random() * 0.00055,
        a: 0.4 + Math.random() * 0.55,
      };
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = rect.width;
      h = rect.height;
      if (w < 2 || h < 2) return;
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
          const radius = 120;
          if (dist < radius) {
            const force = (1 - dist / radius) * 0.018;
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

        const px = p.x * w;
        const py = p.y * h;
        const g = ctx.createRadialGradient(px, py, 0, px, py, p.r * 2.2);
        g.addColorStop(0, `rgba(232, 201, 120, ${p.a})`);
        g.addColorStop(0.45, `rgba(184, 147, 90, ${p.a * 0.7})`);
        g.addColorStop(1, "rgba(184, 147, 90, 0)");
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(px, py, p.r * 2.2, 0, Math.PI * 2);
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
    // delay one frame so parent has layout
    requestAnimationFrame(() => {
      resize();
      tick();
    });

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
      { threshold: 0.02 }
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
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      aria-hidden="true"
    />
  );
}
