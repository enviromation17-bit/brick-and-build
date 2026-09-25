import { motion } from "framer-motion";

export default function Hero({ eyebrow, title, lede, media, poster, compact = false, children }) {
  const isVideo = media?.toLowerCase().endsWith(".mp4");

  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[48dvh] sm:min-h-[58dvh]" : "min-h-[100dvh]"}`}>
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
          <motion.img
            src={media}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
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
          compact ? "min-h-[48dvh] sm:min-h-[58dvh]" : "min-h-[100dvh]"
        } max-w-container mx-auto px-5 md:px-8 pt-24 pb-16 sm:pt-28 sm:pb-14 md:pt-32 md:pb-20`}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.28em] uppercase text-gold"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 sm:mt-4 max-w-[40rem] text-[clamp(2rem,7vw,4.6rem)] font-extrabold tracking-tight leading-[1.05] text-white"
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-5 max-w-[32rem] text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-white/90 leading-relaxed"
          >
            {lede}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto pb-14 sm:pb-0"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
