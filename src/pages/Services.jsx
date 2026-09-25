import { Link } from "react-router-dom";
import { PROCESS } from "../data/content";

const BOOKS = [
  { n: "01", title: "Land development", body: "Housing colonies and plot societies — as delivered at Pak City Housing Society, our completed 3-site, 29-acre development in Pakpattan.", to: "/projects/pak-city", img: "/assets/media/service-land.jpg" },
  { n: "02", title: "Commercial", body: "Workplaces and retail that meet the street — for business owners and investors.", to: "/contact", img: "/assets/media/service-commercial.jpg" },
  { n: "03", title: "Residential", body: "Homes people keep — plots, villas and apartments for families and individual buyers.", to: "/contact", img: "/assets/media/service-residential.jpg" },
];

function ServicesHero() {
  return (
    <section className="relative min-h-[44dvh] overflow-hidden bg-navy sm:min-h-[56dvh]">
      <img src="/assets/media/pak-city-park.jpg" alt="Pak City development" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/60 to-navy/50" />
      <div className="relative z-10 mx-auto flex min-h-[44dvh] max-w-container flex-col justify-end px-5 pb-8 pt-24 sm:min-h-[56dvh] sm:px-8 sm:pb-14 sm:pt-28">
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.28em] text-gold">Services</p>
        <h1 className="mt-3 max-w-[40rem] text-[clamp(2rem,7vw,4.6rem)] font-extrabold leading-[1.05] tracking-tight text-white">What we work on.</h1>
        <p className="mt-4 max-w-[32rem] text-[0.95rem] leading-relaxed text-white/90 sm:text-[1rem] md:text-[1.1rem]">Land development, commercial and residential — three practices, one established standard of transparency.</p>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <section className="py-24">
        <div className="mx-auto max-w-container px-5 md:px-8">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-slate">Practices</p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Pick a focus area.</h2>
          <div className="mt-12 grid gap-5">
            {BOOKS.map((book) => (
              <Link key={book.title} to={book.to} className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2">
                <img src={book.img} alt="" loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
                <div className="flex flex-col justify-center bg-paper2 p-10">
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.02em] text-slate">{book.n}</p>
                  <h3 className="mt-2 font-display text-[2rem] text-navy">{book.title}</h3>
                  <p className="mt-3 max-w-[34ch] text-slate">{book.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-container px-5 md:px-8">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-gold">Method</p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight">Acquire. Masterplan. Develop. Steward.</h2>
          <div className="mt-12 grid gap-px bg-lineDark sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="bg-navy p-8">
                <p className="text-2xl font-extrabold text-gold">{step.n}</p>
                <h3 className="mt-5 text-[1.4rem] font-extrabold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex h-12 items-center rounded-pill bg-white px-8 text-sm font-bold text-navy hover:bg-paper2">Enquire</Link>
        </div>
      </section>
    </>
  );
}
