import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import { PROCESS } from "../data/content";

const BOOKS = [
  { n: "01", title: "Land development", body: "Housing colonies and plot societies — as delivered at Pak City Housing Society, our completed 3-site, 29-acre development in Pakpattan.", to: "/projects/pak-city", img: "/assets/media/service-land.jpg" },
  { n: "02", title: "Commercial", body: "Workplaces and retail that meet the street — for business owners and investors.", to: "/contact", img: "/assets/media/service-commercial.jpg" },
  { n: "03", title: "Residential", body: "Homes people keep — plots, villas and apartments for families and individual buyers.", to: "/contact", img: "/assets/media/service-residential.jpg" },
];

export default function Services() {
  return (
    <>
      <Hero eyebrow="Services" title="What we work on." media="/assets/media/pak-city-park.jpg" compact lede="Land development, commercial and residential — three practices, one established standard of transparency." />

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Practices</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Pick a focus area.</h2></Reveal>
          <div className="mt-12 grid gap-5">
            {BOOKS.map((b, i) => (
              <Reveal key={b.title} delay={0.06 * i}>
                <Link to={b.to} className="grid md:grid-cols-2 overflow-hidden rounded-2xl border border-line">
                  {b.img ? (
                    <img src={b.img} alt="" className="w-full h-full object-cover aspect-[4/3]" />
                  ) : (
                    <Photo label={b.title} aspect="aspect-[4/3]" className="!rounded-none !border-0" />
                  )}
                  <div className="bg-paper2 p-10 flex flex-col justify-center">
                    <p className="text-[0.75rem] font-bold tracking-[0.02em] uppercase text-slate">{b.n}</p>
                    <h3 className="font-display text-[2rem] mt-2 text-navy">{b.title}</h3>
                    <p className="mt-3 max-w-[34ch] text-slate">{b.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">Method</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight">Acquire. Masterplan. Develop. Steward.</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lineDark">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={0.05 * i} className="bg-navy p-8">
                <p className="text-2xl font-extrabold text-gold">{p.n}</p>
                <h3 className="mt-5 text-[1.4rem] font-extrabold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 inline-flex h-12 items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2">Enquire</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
