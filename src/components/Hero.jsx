export default function Hero({ eyebrow, title, lede, media, poster, compact = false, children }) {
  const isVideo = media?.toLowerCase().endsWith(".mp4");

  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[44dvh] sm:min-h-[56dvh]" : "min-h-[100dvh]"}`}>
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={media}
            poster={poster}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : media ? (
          <img src={media} alt="" className="w-full h-full object-cover hero-kenburns" />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, #1C3564 0%, #152A54 55%, #0E1D3D 100%)" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/45 to-navy/50" />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-end ${
          compact ? "min-h-[44dvh] sm:min-h-[56dvh]" : "min-h-[100dvh]"
        } max-w-container mx-auto px-5 md:px-8 pt-24 pb-8 sm:pt-28 sm:pb-14 md:pt-32 md:pb-20`}
      >
        <p className="reveal-in text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.28em] uppercase text-gold">
          {eyebrow}
        </p>
        <h1 className="reveal-in reveal-d1 mt-3 sm:mt-4 max-w-[40rem] text-[clamp(2rem,7vw,4.6rem)] font-extrabold tracking-tight leading-[1.05] text-white">
          {title}
        </h1>
        {lede && (
          <p className="reveal-in reveal-d2 mt-4 sm:mt-5 max-w-[32rem] text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-white/90 leading-relaxed">
            {lede}
          </p>
        )}
        {children && (
          <div className="reveal-in reveal-d3 mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
