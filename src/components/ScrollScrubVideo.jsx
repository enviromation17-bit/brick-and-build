import { useEffect, useRef, useState } from "react";

/**
 * Pinned scroll-scrub video + staged text + side rail.
 * Scroll drives video currentTime (seasons-scroll style).
 */
export default function ScrollScrubVideo({
  src,
  poster,
  stages = [],
  heightVh = 300,
  ariaLabel = "Scroll-driven progress video",
  exploreLabel = "Scroll to explore",
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1528] via-[#152A54]/55 to-[#152A54]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1528]/70 via-transparent to-transparent" />
        </div>

        {/* Side stage rail (desktop) */}
        {stages.length > 0 ? (
          <nav
            className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex-col items-end gap-3"
            aria-label="Stages"
          >
            <div className="absolute right-[5px] top-0 bottom-0 w-px bg-white/20" aria-hidden="true" />
            {stages.map((s, i) => (
              <div key={s.title} className="relative flex items-center gap-3 pr-0">
                <span
                  className="text-[0.65rem] font-bold tracking-[0.18em] uppercase transition-colors duration-300"
                  style={{ color: i === active ? "#B8935A" : "rgba(255,255,255,0.4)" }}
                >
                  {s.rail || s.kicker || `0${i + 1}`}
                </span>
                <span
                  className="relative z-10 block rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 10 : 6,
                    height: i === active ? 10 : 6,
                    background: i === active ? "#B8935A" : "rgba(255,255,255,0.35)",
                    boxShadow: i === active ? "0 0 0 3px rgba(184,147,90,0.35)" : "none",
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </nav>
        ) : null}

        <div className="relative z-10 w-full max-w-container mx-auto px-5 md:px-8 pb-16 pt-24">
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-gold mb-3">
            {exploreLabel}
          </p>
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="transition-all duration-500 ease-out max-w-[34rem]"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0)" : "translateY(14px)",
                position: i === active ? "relative" : "absolute",
                pointerEvents: i === active ? "auto" : "none",
              }}
              aria-hidden={i !== active}
            >
              {s.kicker ? (
                <p className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-gold/90">{s.kicker}</p>
              ) : null}
              <h3 className="mt-2 text-[clamp(1.65rem,4.2vw,2.85rem)] font-extrabold tracking-tight text-white leading-[1.12]">
                {s.title}
              </h3>
              {s.body ? (
                <p className="mt-3 text-[0.98rem] text-white/85 leading-relaxed max-w-[34ch]">{s.body}</p>
              ) : null}
            </div>
          ))}

          <div className="mt-10 flex gap-2 md:hidden" aria-hidden="true">
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

          {!ready ? <p className="mt-4 text-sm text-white/50">Loading video…</p> : null}
        </div>
      </div>
    </div>
  );
}
