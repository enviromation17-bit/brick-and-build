import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import EnquiryForm from "../components/EnquiryForm";
import ScrollScrubVideo from "../components/ScrollScrubVideo";
import { TOBA_FACTS, COMPANY } from "../data/content";

const CHAPTERS = [
  { n: "01", title: "Sector layout", body: "A detailed sector and street layout hasn't been finalized yet. We'll publish it here once the master plan is confirmed.", reverse: false, img: "/assets/media/toba-masterplan.jpg" },
  { n: "02", title: "Residential plots", body: "Exact plot sizes and sector assignments are still being confirmed.", reverse: true, img: "/assets/media/toba-residential.jpg" },
  { n: "03", title: "Construction progress", body: "Project development and site details will be published as they are confirmed.", reverse: false, img: "/assets/media/service-land.jpg" },
];

const TOBA_MAP_LINK = "https://maps.app.goo.gl/5rzugB9Vw27r6Ukr9";
const TOBA_HERO_IMG = "https://litter.catbox.moe/7fid4g.jpg";

const SCRUB_STAGES = [
  {
    at: 0,
    kicker: "Stage 01",
    title: "Open land",
    body: "The journey begins with verified land — the foundation of every Bricks & Built community.",
  },
  {
    at: 0.28,
    kicker: "Stage 02",
    title: "Framing & structure",
    body: "Roads, plots and built form take shape as the site moves from plan to construction.",
  },
  {
    at: 0.58,
    kicker: "Stage 03",
    title: "Rising homes",
    body: "Residential fabric grows into a liveable community families can grow into.",
  },
  {
    at: 0.82,
    kicker: "Toba Tek Singh",
    title: "A community, planned with care",
    body: "Scroll through the progress story. Full plot details will be published as they are confirmed.",
  },
];

export default function TobaTekSingh() {
  return (
    <>
      <Hero
        eyebrow="Toba Tek Singh"
        title="A new community, planned with care."
        lede="A project represented by Bricks & Built in Toba Tek Singh, Punjab. Sales have not begun — full details are being confirmed and will be published here as they're verified."
        media={TOBA_HERO_IMG}
      >
        <span className="inline-flex w-fit border border-gold/50 bg-gold/15 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase rounded-pill text-gold">
          Coming soon · Land development
        </span>
      </Hero>

      <section className="py-10 border-y border-line bg-paper2">
        <div className="max-w-container mx-auto px-5 md:px-8 mb-4">
          <p className="text-[0.8rem] text-slate">
            Figures marked <span className="font-semibold text-gold">Pending</span> are updated here as soon as the company confirms them.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {TOBA_FACTS.map((f, i) => (
            <Reveal key={f.label} delay={0.03 * i} className="border-r border-b border-line p-6">
              <strong className={`block text-[1.2rem] font-extrabold ${f.pending ? "text-gold font-sans text-[0.9rem] font-semibold" : "text-navy"}`}>{f.value}</strong>
              <p className="mt-1.5 text-[0.82rem] text-slate">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8 pt-14 sm:pt-20">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-gold">Progress</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-white">From land to built community.</h2>
            <p className="mt-4 max-w-[48ch] text-slateLight pb-8">Scroll down — the video advances with you, with each stage explained on screen.</p>
          </Reveal>
        </div>
        <ScrollScrubVideo
          src="/assets/media/toba-timelapse-web.mp4"
          poster="/assets/media/service-land.jpg"
          stages={SCRUB_STAGES}
          heightVh={280}
          ariaLabel="Scroll-driven time-lapse from empty land to construction progress"
        />
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Plot inventory</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Residential and commercial plots</h2></Reveal>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-4">
            {["Residential", "Commercial", "Master plan"].map((t, i) => (
              <Reveal key={t} delay={0.06 * i} className="border border-line bg-paper2 rounded-xl p-6 sm:p-8">
                <p className="text-[0.75rem] font-bold uppercase text-gold">{t}</p>
                <h3 className="font-display text-[1.4rem] sm:text-[1.5rem] mt-2 text-navy">{t === "Master plan" ? "Sector layout" : "Plot sizes"}</h3>
                <p className="mt-3 text-sm text-slate border-l-2 border-gold pl-3">Information coming soon</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8 grid gap-12 sm:gap-16">
          {CHAPTERS.map((c) => (
            <Reveal key={c.n} className={`grid md:grid-cols-2 gap-8 md:gap-10 items-center ${c.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Photo label={c.title} src={c.img} aspect="aspect-[4/3]" className="rounded-2xl" />
              <div>
                <p className="text-[0.75rem] font-bold uppercase text-slateLight">Chapter {c.n}</p>
                <h2 className="mt-2 text-[1.6rem] sm:text-[1.9rem] font-extrabold tracking-tight text-white">{c.title}</h2>
                <p className="mt-3 max-w-[40ch] text-slateLight">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Community amenities</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">What's planned</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 max-w-[52ch] text-slate">Amenities haven't been finalized or verified. We're not going to list specifics until they're confirmed by the company.</p></Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slateLight">Location</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-white">Toba Tek Singh, Punjab</h2>
            <p className="mt-4 max-w-[56ch] text-slateLight">Project site location in Toba Tek Singh. Open the map for turn-by-turn directions.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-[28rem]">
            <div className="map-card">
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-gold">Location</p>
              <p className="mt-2 text-[1.05rem] font-bold text-white">Toba Tek Singh</p>
              <p className="mt-1 text-sm text-white/75">Punjab, Pakistan</p>
              <a className="map-open" href={TOBA_MAP_LINK} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-[48rem]">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Register interest</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Be first when plots are released.</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-slate">Sales haven't begun. Leave your details and we'll follow up with confirmed information as it becomes available — or message us directly on WhatsApp.</p></Reveal>
          <Reveal delay={0.15}>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-12 w-full sm:w-auto justify-center items-center rounded-pill bg-[#25D366] text-[#0b3d1f] px-8 font-bold text-sm hover:bg-[#1fbd59]">
              Message us on WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <EnquiryForm source="toba-tek-singh" submitLabel="Register interest" interestOptions={["Residential plot", "Commercial plot"]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
