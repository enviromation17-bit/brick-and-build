import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import { PAK_CITY } from "../data/content";

export default function PakCity() {
  return (
    <>
      <Hero
        eyebrow="Pakpattan, Punjab"
        title="Pak City Housing Society"
        media="/assets/media/service-residential.jpg"
        lede={PAK_CITY.overview}
      >
        <span className="inline-flex w-fit border border-gold/50 bg-gold/15 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase rounded-pill text-white">
          {PAK_CITY.siteCount} · {PAK_CITY.totalArea} total
        </span>
      </Hero>

      <section className="py-10 border-y border-line">
        <div className="grid sm:grid-cols-3">
          <Reveal className="border-r border-line sm:last:border-r-0 p-6">
            <strong className="block text-[1.2rem] font-extrabold text-navy">{PAK_CITY.totalArea}</strong>
            <p className="mt-1.5 text-[0.82rem] text-slate">Total area across all sites</p>
          </Reveal>
          <Reveal delay={0.05} className="border-r border-line sm:last:border-r-0 p-6">
            <strong className="block text-[1.2rem] font-extrabold text-navy">{PAK_CITY.siteCount}</strong>
            <p className="mt-1.5 text-[0.82rem] text-slate">Commercial, colony &amp; housing society</p>
          </Reveal>
          <Reveal delay={0.1} className="p-6">
            <strong className="block text-[1.2rem] font-extrabold text-navy">{PAK_CITY.region}</strong>
            <p className="mt-1.5 text-[0.82rem] text-slate">Region</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">The three sites</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">One umbrella, three developments.</h2></Reveal>
          <div className="mt-12 grid gap-5">
            {PAK_CITY.sites.map((s, i) => (
              <Reveal key={s.name} delay={0.06 * i} className="border border-line bg-paper2 rounded-2xl p-8 grid md:grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <h3 className="font-display text-[1.6rem] text-navy">{s.name}</h3>
                  <p className="mt-1 text-slate text-sm">{s.location}</p>
                  <p className="mt-4 text-navy font-semibold text-sm">{s.status}</p>
                  <p className="mt-2 text-slate text-sm max-w-[52ch]">{s.highlights}</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-flex items-center rounded-pill bg-paper border border-line px-4 py-1.5 text-[0.8rem] font-bold text-navy">{s.area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">Development services</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight">What we handled, site to sale.</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-lineDark">
            {PAK_CITY.developmentServices.map((d, i) => (
              <Reveal key={d} delay={0.05 * i} className="bg-navy p-8">
                <p className="text-white/90 text-sm">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Gallery</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">On the ground.</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {PAK_CITY.gallery.map((g, i) => (
              <Reveal key={g.src} delay={0.06 * i} className="rounded-2xl overflow-hidden border border-line">
                <img src={g.src} alt={g.caption} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <p className="p-4 text-[0.82rem] text-slate bg-paper2">{g.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper2 border-t border-line">
        <div className="max-w-container mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-slate">
              If you want to know more about this project,{" "}
              <Link to="/contact" className="font-bold text-navy underline decoration-gold">click here to contact us</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
