import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import { VALUES, CEO } from "../data/content";

export default function About() {
  return (
    <>
      <Hero eyebrow="The company" title="Built for the long term." compact lede="Bricks & Built represents and develops residential and commercial property in Punjab, with Pak City Housing Society delivered and Toba Tek Singh in progress." />

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-12">
          <Reveal>
            <p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Origin</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.4vw,2.6rem)] font-extrabold tracking-tight text-navy">Named for the first material, and the lasting result.</h2>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-5">
            <p className="text-slate max-w-[60ch]">Brick is patience. Built is the lasting result. Pak City Housing Society — three sites across 29 acres in Pakpattan — is our delivered project. Toba Tek Singh, our next project, is currently in progress.</p>
            <p className="text-slate max-w-[60ch]">Our home base is Pakpattan, Punjab, where our established team works directly with buyers rather than through call centers or franchise offices.</p>
            <p className="text-slate max-w-[60ch]">We'd rather be precise about what's confirmed and what isn't than overstate either.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-paper2 border-y border-line">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">What we stand for</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">A few working principles.</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * i} className="border border-line bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-display text-[1.6rem] text-navy">{v.title}</h3>
                <p className="mt-3 text-sm text-slate">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Leadership</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Led by our CEO.</h2></Reveal>

          <Reveal delay={0.1} className="mt-10 border border-line bg-paper2 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr_200px_1.15fr] gap-8 md:gap-10 items-center">
              {/* Left — quote */}
              <blockquote className="order-2 md:order-1 border-l-2 border-gold pl-5 md:pl-6">
                <p className="text-[1.05rem] md:text-[1.15rem] font-display italic leading-relaxed text-navy">
                  “{CEO.quote}”
                </p>
              </blockquote>

              {/* Center — photo */}
              <div className="order-1 md:order-2 justify-self-center w-full max-w-[200px]">
                <Photo
                  label="Waseem Bari, CEO"
                  src="/assets/ceo-waseem-bari.jpg"
                  aspect="aspect-square"
                  className="!rounded-xl border-2 !border-gold"
                />
              </div>

              {/* Right — name, title, bio only */}
              <div className="order-3">
                <h3 className="font-display text-[1.6rem] text-navy">{CEO.name}</h3>
                <p className="mt-1.5 text-slate">{CEO.title}</p>
                <p className="mt-4 text-sm text-slate leading-relaxed max-w-[40ch]">{CEO.bio}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
