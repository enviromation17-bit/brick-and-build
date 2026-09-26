import { useEffect, useRef, useState } from "react";

export default function Hero({
  eyebrow,
  title,
  lede,
  media,
  poster,
  compact = false,
  children,
  cinematic = false,
}) {
  const isVideo = media?.toLowerCase().endsWith(".mp4");
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!cinematic || compact) return;
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const h = Math.max(1, rect.height);
        const p = Math.min(1, Math.max(0, -rect.top / (h * 0.55)));
        setProgress(p);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [cinematic, compact]);

  const scale = 1 + progress * 0.12;
  const dim = 0.35 + progress * 0.35;
  const titleY = progress * 40;
  const titleOp = 1 - progress * 0.85;

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${compact ? "min-h-[44dvh] sm:min-h-[56dvh]" : cinematic ? "min-h-[115dvh]" : "min-h-[100dvh]"}`}
    >
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            ref={videoRef}
            src={media}
            poster={poster}
            className="w-full h-full object-cover will-change-transform"
            style={cinematic && !compact ? { transform: `scale(${scale})`, transformOrigin: "center center" } : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : media ? (
          <img
            src={media}
            alt=""
            className={`w-full h-full object-cover ${cinematic ? "" : "hero-kenburns"}`}
            style={cinematic && !compact ? { transform: `scale(${scale})` } : undefined}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, #1C3564 0%, #152A54 55%, #0E1D3D 100%)" }}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/50 to-navy/40"
          style={cinematic && !compact ? { opacity: 0.55 + dim * 0.4 } : undefined}
        />
        {cinematic && !compact ? (
          <div className="absolute inset-0 pointer-events-none film-grain" aria-hidden="true" />
        ) : null}
      </div>

      <div
        className={`relative z-10 flex flex-col justify-end ${
          compact ? "min-h-[44dvh] sm:min-h-[56dvh]" : cinematic ? "min-h-[100dvh]" : "min-h-[100dvh]"
        } max-w-container mx-auto px-5 md:px-8 pt-24 pb-8 sm:pt-28 sm:pb-14 md:pt-32 md:pb-20`}
        style={
          cinematic && !compact
            ? { transform: `translateY(${titleY}px)`, opacity: Math.max(0.15, titleOp) }
            : undefined
        }
      >
        <p className={`${cinematic ? "film-line" : "reveal-in"} text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.28em] uppercase text-gold`}>
          {eyebrow}
        </p>

        {cinematic ? (
          <h1 className="mt-4 sm:mt-5 max-w-[18ch] text-[clamp(2.35rem,8vw,5.2rem)] font-extrabold tracking-[-0.03em] leading-[0.98] text-white">
            <span className="film-title-wrap">
              {String(title)
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="film-word" style={{ animationDelay: `${0.12 + i * 0.07}s` }}>
                    {word}&nbsp;
                  </span>
                ))}
            </span>
          </h1>
        ) : (
          <h1 className="reveal-in reveal-d1 mt-3 sm:mt-4 max-w-[40rem] text-[clamp(2rem,7vw,4.6rem)] font-extrabold tracking-tight leading-[1.05] text-white">
            {title}
          </h1>
        )}

        {cinematic && !compact ? (
          <div className="film-gold-rule mt-5 sm:mt-6" aria-hidden="true" />
        ) : null}

        {lede && (
          <p
            className={`${cinematic ? "film-line film-line-delay" : "reveal-in reveal-d2"} mt-4 sm:mt-5 max-w-[34rem] text-[0.95rem] sm:text-[1.05rem] md:text-[1.15rem] text-white/90 leading-relaxed`}
          >
            {lede}
          </p>
        )}
        {children && (
          <div
            className={`${cinematic ? "film-line film-line-delay-2" : "reveal-in reveal-d3"} mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto`}
          >
            {children}
          </div>
        )}

        {cinematic && !compact ? (
          <div className="mt-10 sm:mt-14 flex flex-col items-start gap-2 film-line film-line-delay-3" aria-hidden="true">
            <span className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-white/50">Scroll</span>
            <span className="scroll-cue" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
