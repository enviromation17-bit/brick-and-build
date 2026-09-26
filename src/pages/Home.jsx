import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Tile from "../components/Tile";
import ProjectCard from "../components/ProjectCard";
import { SERVICES, PROCESS, MARQUEE_ITEMS } from "../data/content";

export default function Home() {
  return (
    <>
      <Hero
        cinematic
        eyebrow="Pakpattan · Punjab · Pakistan"
        title="Toba Tek Singh is next."
        media="/assets/media/hero-frontpage-web.mp4"
        poster="/assets/media/service-land.jpg"
        lede="An established property development company delivering residential, commercial and land projects — including Pak City Housing Society in Pakpattan — with our next project underway in Toba Tek Singh."
      >
        <Link
          to="/projects/toba-tek-singh"
          className="h-12 inline-flex items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2 btn-glow"
          style={{ backgroundColor: "#FFFFFF", color: "#152A54" }}
        >
          Explore Toba Tek Singh
        </Link>
        <Link
          to="/projects/pak-city"
          className="h-12 inline-flex items-center rounded-pill border border-white/60 text-white px-8 font-bold text-sm hover:bg-white hover:text-navy"
        >
          View completed work
        </Link>
      </Hero>

      {/* Film statement — big editorial type */}
      <section className="relative py-20 sm:py-28 md:py-36 bg-navyDeep overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none film-grain" aria-hidden="true" />
        <div className="max-w-container mx-auto px-5 md:px-8 relative z-10">
          <p className="text-[0.72rem] font-bold tracking-[0.32em] uppercase text-gold">The standard</p>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2.2rem,6.5vw,4.8rem)] font-extrabold tracking-[-0.03em] leading-[1.02] text-white">
            <span className="text-outline-soft">Brick is patience.</span>
            <br />
            <span className="text-gold">Built is the result.</span>
          </h2>
          <p className="mt-8 max-w-[36ch] text-white/70 text-base sm:text-lg leading-relaxed">
            Land first. Honest figures. Communities people can actually afford — in Pakpattan and now Toba Tek Singh.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 sm:gap-14">
            {[
              { n: "29", l: "Acres delivered" },
              { n: "3", l: "Pak City sites" },
              { n: "20", l: "Acres next" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tabular-nums">{s.n}</p>
                <p className="mt-1 text-[0.72rem] font-bold tracking-[0.18em] uppercase text-white/45">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-lineDark bg-navy py-4 sm:py-5">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="inline-flex items-center gap-10 font-display italic text-xl sm:text-2xl text-white/80">
              {MARQUEE_ITEMS.map((m) => (
                <span key={m}>
                  {m} <i className="text-gold not-italic">·</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Services</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold tracking-tight text-navy leading-[1.05]">
              Land. Commercial.
              <br className="hidden sm:block" /> Residential.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[40ch] text-slate leading-relaxed">Three practices, one established standard: land development, commercial and residential.</p>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i}>
                <Tile n={s.n} title={s.title} body={s.body} to={s.to} img={s.img} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-paper2 border-y border-line">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Projects</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold tracking-tight text-navy">Delivered, and in progress.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-[46ch] text-slate leading-relaxed">
              Pak City Housing Society is our completed, multi-site development in Pakpattan. Toba Tek Singh is our current project, underway.
            </p>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-4">
            <Reveal className="sm:col-span-2">
              <ProjectCard
                to="/projects/pak-city"
                img="/assets/media/service-residential.jpg"
                kicker="Pakpattan · 29 Acres · 3 sites"
                name="Pak City Housing Society"
                location="Tibba Sher Kot, Behram Pur & Sheikh Jamal, Pakpattan"
                summary="A completed and near-complete residential and commercial development across three sites."
                featured
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ProjectCard
                to="/projects/toba-tek-singh"
                img="/assets/media/service-land.jpg"
                kicker="Land · Coming soon"
                name="Toba Tek Singh"
                location="Toba Tek Singh, Punjab"
                summary="Represented by Bricks & Built. Categories, pricing and availability are being confirmed and will be published as they're verified."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-navy text-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">Method</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold tracking-tight">How we approach land and development.</h2>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lineDark">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={0.05 * i} className="bg-navy p-6 sm:p-8 process-card">
                <p className="text-2xl font-extrabold text-gold">{p.n}</p>
                <h3 className="mt-4 sm:mt-5 text-[1.25rem] sm:text-[1.4rem] font-extrabold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28 md:py-32">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #1C3564 0%, #152A54 55%, #0E1D3D 100%)" }} />
          <div className="absolute inset-0 film-grain opacity-40" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="text-[0.75rem] font-bold tracking-[0.28em] uppercase text-gold">Home base</p>
          <Reveal>
            <h2 className="mt-5 max-w-[14ch] text-[clamp(2rem,5.5vw,4rem)] font-extrabold tracking-[-0.03em] leading-[1.02] text-white">
              Pakpattan is where we&apos;re based.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[28rem] text-white/80 leading-relaxed text-base sm:text-lg">Direct access to our team — no call centers, no sales floors.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="mt-10 inline-flex h-12 w-full sm:w-auto justify-center items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2 btn-glow"
              style={{ backgroundColor: "#FFFFFF", color: "#152A54" }}
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
