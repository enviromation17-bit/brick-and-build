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
        eyebrow="Pakpattan · Punjab · Pakistan"
        title="Toba Tek Singh is next."
        media="/assets/media/hero-frontpage-web.mp4"
        poster="/assets/media/service-land.jpg"
        lede="An established property development company delivering residential, commercial and land projects — including Pak City Housing Society in Pakpattan — with our next project underway in Toba Tek Singh."
      >
        <Link to="/projects/toba-tek-singh" className="h-12 inline-flex items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2">
          Explore Toba Tek Singh
        </Link>
        <Link to="/projects/pak-city" className="h-12 inline-flex items-center rounded-pill border border-white/50 text-white px-8 font-bold text-sm hover:bg-white hover:text-navy">
          View completed work
        </Link>
      </Hero>

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
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Land. Commercial. Residential.</h2>
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
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Delivered, and in progress.</h2>
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
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight">How we approach land and development.</h2>
          </Reveal>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lineDark">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={0.05 * i} className="bg-navy p-6 sm:p-8">
                <p className="text-2xl font-extrabold text-gold">{p.n}</p>
                <h3 className="mt-4 sm:mt-5 text-[1.25rem] sm:text-[1.4rem] font-extrabold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #1C3564 0%, #152A54 55%, #0E1D3D 100%)" }} />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="text-[0.75rem] font-bold tracking-[0.28em] uppercase text-gold">Home base</p>
          <Reveal>
            <h2 className="mt-4 max-w-[34rem] text-[clamp(1.85rem,4vw,3.4rem)] font-extrabold tracking-tight text-white">Pakpattan is where we're based.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[28rem] text-white/80 leading-relaxed">Direct access to our team — no call centers, no sales floors.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/contact" className="mt-8 inline-flex h-12 w-full sm:w-auto justify-center items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
