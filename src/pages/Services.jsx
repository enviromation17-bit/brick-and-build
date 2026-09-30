import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import ScrollScrubVideo from "../components/ScrollScrubVideo";
import { PROCESS } from "../data/content";

const BOOKS = [
  {
    n: "01",
    title: "Land development",
    body: "Housing colonies and plot societies — as delivered at Pak City Housing Society, our completed 3-site, 29-acre development in Pakpattan.",
    to: "/projects/pak-city",
    img: "/assets/media/service-land.jpg",
  },
  {
    n: "02",
    title: "Commercial",
    body: "Workplaces and retail that meet the street — for business owners and investors.",
    to: "/contact",
    img: "/assets/media/service-commercial.jpg",
  },
  {
    n: "03",
    title: "Residential",
    body: "Homes people keep — plots, villas and apartments for families and individual buyers.",
    to: "/contact",
    img: "/assets/media/service-residential.jpg",
  },
];

/** Scroll-scrub stages — method story (seasons-scroll style) */
const METHOD_STAGES = [
  {
    at: 0,
    rail: "01",
    kicker: "Method 01 · Acquire",
    title: "Land, title, and a clear brief.",
    body: "Nothing is announced until the ground is real — verified land, clean title, and a brief the team can deliver.",
  },
  {
    at: 0.28,
    rail: "02",
    kicker: "Method 02 · Masterplan",
    title: "Sectors, roads, and plot grain.",
    body: "Streets and parks are set before facades. The masterplan is the contract between the land and the people who will live on it.",
  },
  {
    at: 0.55,
    rail: "03",
    kicker: "Method 03 · Develop",
    title: "Infrastructure, then homes.",
    body: "Roads, utilities and community fabric first — then residential and commercial stock that people can actually use.",
  },
  {
    at: 0.8,
    rail: "04",
    kicker: "Method 04 · Steward",
    title: "Handover is not the end.",
    body: "We stay with the place as it is lived in — transparent aftercare and a standard that does not stop at the keys.",
  },
];

export default function Services() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="What we work on."
        media="/assets/media/pak-city-park.jpg"
        compact
        lede="Land development, commercial and residential — three practices, one established standard of transparency."
      />

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Practices</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">
              Pick a focus area.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5">
            {BOOKS.map((b, i) => (
              <Reveal key={b.title} delay={0.06 * i}>
                <Link
                  to={b.to}
                  className="grid md:grid-cols-2 overflow-hidden rounded-2xl border border-line card-lift"
                >
                  {b.img ? (
                    <img
                      src={b.img}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
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

      {/* Seasons-style scroll scrub — method journey */}
      <section className="bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8 pt-16 sm:pt-20">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">Method</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-white">
              Acquire. Masterplan. Develop. Steward.
            </h2>
            <p className="mt-4 max-w-[48ch] text-white/70 pb-8">
              Scroll — the film advances with you. One continuous story of how we take land to a lived-in place.
            </p>
          </Reveal>
        </div>
        <ScrollScrubVideo
          src="/assets/media/toba-timelapse-web.mp4"
          poster="/assets/media/service-land.jpg"
          stages={METHOD_STAGES}
          heightVh={320}
          exploreLabel="Scroll through the method"
          ariaLabel="Scroll-driven film of land development method: acquire, masterplan, develop, steward"
        />
      </section>

      <section className="py-24 bg-navy text-white border-t border-white/10">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">At a glance</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight">Four steps, one standard.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lineDark">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={0.05 * i} className="bg-navy p-8 process-card">
                <p className="text-2xl font-extrabold text-gold">{p.n}</p>
                <h3 className="mt-5 text-[1.4rem] font-extrabold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm text-white/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-10 inline-flex h-12 items-center rounded-pill bg-white text-navy px-8 font-bold text-sm hover:bg-paper2"
            >
              Enquire
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
