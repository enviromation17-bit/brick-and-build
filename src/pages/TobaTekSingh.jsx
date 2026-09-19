import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import EnquiryForm from "../components/EnquiryForm";
import { TOBA_FACTS, COMPANY } from "../data/content";

const CHAPTERS = [
  { n: "01", title: "Sector layout", body: "A detailed sector and street layout hasn't been finalized yet. We'll publish it here once the master plan is confirmed.", reverse: false, img: "/assets/media/toba-masterplan.jpg" },
  { n: "02", title: "Residential plots", body: "Exact plot sizes and sector assignments are still being confirmed.", reverse: true, img: "/assets/media/toba-residential.jpg" },
  { n: "03", title: "Construction progress", body: "Project development and site details will be published as they are confirmed.", reverse: false, img: "/assets/media/toba-construction.jpg" },
];

export default function TobaTekSingh() {
  return (
    <>
      <Hero eyebrow="" title="Toba Tek Singh" lede="A project represented by Brick & Build in Toba Tek Singh, Punjab. Sales have not begun — full details are being confirmed and will be published here as they're verified.">
        <span className="inline-flex w-fit border border-gold/50 bg-gold/15 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase rounded-pill text-gold">Coming soon · Land development</span>
      </Hero>

      <section className="py-10 border-y border-line bg-paper2">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {TOBA_FACTS.map((f, i) => (
            <Reveal key={f.label} delay={0.03 * i} className="border-r border-b border-line p-6">
              <strong className={`block text-[1.2rem] font-extrabold ${f.pending ? "text-gold font-sans text-[0.9rem] font-semibold" : "text-navy"}`}>{f.value}</strong>
              <p className="mt-1.5 text-[0.82rem] text-slate">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Plot inventory</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Residential and commercial plots</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 max-w-[52ch] text-slate">We expect categories in the sizes Pakistani housing societies commonly use — but exact sizes, sectors and pricing haven't been confirmed. This section will fill in as that information is verified.</p></Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {["Residential", "Commercial", "Master plan"].map((t, i) => (
              <Reveal key={t} delay={0.06 * i} className="border border-line bg-paper2 rounded-xl p-8">
                <p className="text-[0.75rem] font-bold uppercase text-gold">{t}</p>
                <h3 className="font-display text-[1.5rem] mt-2 text-navy">{t === "Master plan" ? "Sector layout" : "Plot sizes"}</h3>
                <p className="mt-3 text-sm text-slate border-l-2 border-gold pl-3">Information coming soon</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8 grid gap-16">
          {CHAPTERS.map((c) => (
            <Reveal key={c.n} className={`grid md:grid-cols-2 gap-10 items-center ${c.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Photo label={c.title} src={c.img} aspect="aspect-[4/3]" className="rounded-2xl" />
              <div>
                <p className="text-[0.75rem] font-bold uppercase text-slateLight">Chapter {c.n}</p>
                <h2 className="mt-2 text-[1.9rem] font-extrabold tracking-tight text-white">{c.title}</h2>
                <p className="mt-3 max-w-[40ch] text-slateLight">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Community amenities</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">What's planned</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 max-w-[52ch] text-slate">Amenities haven't been finalized or verified. We're not going to list specifics until they're confirmed by the company.</p></Reveal>
          <Reveal delay={0.15}><p className="mt-8 text-sm text-slate border-l-2 border-gold pl-4">Information coming soon</p></Reveal>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slateLight">Location</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-white">Toba Tek Singh, Punjab</h2>
            <p className="mt-4 max-w-[56ch] text-slateLight">Located in the Toba Tek Singh area. Precise location details and access routes will be added once confirmed — the map below shows the general area.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-[56rem] aspect-video rounded-2xl overflow-hidden border border-line">
            <iframe
              src="https://www.google.com/maps?q=Toba+Tek+Singh,+Punjab,+Pakistan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toba Tek Singh, Punjab map"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-[48rem]">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Register interest</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Be first when plots are released.</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-slate">Sales haven't begun. Leave your details and we'll follow up with confirmed information as it becomes available — or message us directly on WhatsApp.</p></Reveal>
          <Reveal delay={0.15}>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-12 items-center rounded-pill bg-[#25D366] text-[#0b3d1f] px-8 font-bold text-sm hover:bg-[#1fbd59]">
              Message us on WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <EnquiryForm submitLabel="Register interest" interestOptions={["Residential plot", "Commercial plot"]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
