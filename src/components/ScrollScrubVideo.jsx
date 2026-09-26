import { useEffect, useRef, useState } from "react";

/**
 * Pinned scroll-scrub video + staged text overlays.
 * Scroll drives video currentTime. Falls back to normal play if reduced motion.
 */
export default function ScrollScrubVideo({
  src,
  poster,
  stages = [],
  heightVh = 280,
  ariaLabel = "Scroll-driven project progress video",
}) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    video.pause();
    video.muted = true;
    video.playsInline = true;

    const onMeta = () => setReady(true);
    if (video.readyState >= 1) setReady(true);
    else video.addEventListener("loadedmetadata", onMeta);

    const update = () => {
      rafRef.current = 0;
      const rect = wrap.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      const progress = scrolled / total;

      if (video.duration && Number.isFinite(video.duration)) {
        const t = progress * video.duration * 0.98;
        if (Math.abs(video.currentTime - t) > 0.04) {
          try {
            video.currentTime = t;
          } catch {
            /* seek not ready */
          }
        }
      }

      if (stages.length) {
        let idx = 0;
        for (let i = 0; i < stages.length; i++) {
          if (progress >= (stages[i].at ?? i / stages.length)) idx = i;
        }
        setActive(idx);
      }
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [reduced, stages, src]);

  if (reduced) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40">
        <video
          src={src}
          poster={poster}
          className="w-full aspect-video object-cover"
          controls
          muted
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
        />
        {stages[0] ? (
          <div className="p-5 sm:p-6 border-t border-white/10">
            <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-gold">{stages[0].kicker}</p>
            <p className="mt-2 text-white font-extrabold text-lg">{stages[0].title}</p>
            <p className="mt-1.5 text-sm text-white/70">{stages[0].body}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${heightVh}vh` }}
      aria-label={ariaLabel}
    >
      <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/50 to-navy/30" />
        </div>

        <div className="relative z-10 w-full max-w-container mx-auto px-5 md:px-8 pb-16 pt-24">
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-gold mb-3">
            Scroll to explore progress
          </p>
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="transition-all duration-500 ease-out max-w-[34rem]"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(12px)",
                position: i === active ? "relative" : "absolute",
                pointerEvents: i === active ? "auto" : "none",
              }}
              aria-hidden={i !== active}
            >
              {s.kicker ? (
                <p className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-gold/90">{s.kicker}</p>
              ) : null}
              <h3 className="mt-2 text-[clamp(1.6rem,4vw,2.75rem)] font-extrabold tracking-tight text-white leading-tight">
                {s.title}
              </h3>
              {s.body ? <p className="mt-3 text-[0.98rem] text-white/85 leading-relaxed max-w-[32ch]">{s.body}</p> : null}
            </div>
          ))}

          <div className="mt-10 flex gap-2" aria-hidden="true">
            {stages.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 10,
                  background: i === active ? "#B8935A" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {!ready ? (
            <p className="mt-4 text-sm text-white/50">Loading video…</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
