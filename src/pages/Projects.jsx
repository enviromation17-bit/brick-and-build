import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Hero eyebrow="Projects" title="The portfolio." media="/assets/media/pak-city-park.jpg" compact lede="One completed multi-site development, and one project currently in progress." />

      <section className="py-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <Reveal><p className="text-[0.75rem] font-bold tracking-[0.22em] uppercase text-slate">Portfolio</p></Reveal>
          <Reveal delay={0.05}><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">Delivered, and in progress.</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <Reveal className="sm:col-span-2">
              <ProjectCard
                to="/projects/pak-city"
                img="/assets/media/pak-city-street.jpg"
                kicker="Pakpattan · 29 Acres · 3 sites"
                name="Pak City Housing Society"
                location="Tibba Sher Kot, Behram Pur & Sheikh Jamal, Pakpattan"
                summary="A completed and near-complete residential and commercial development across three sites — commercial, colony, and housing society."
                featured
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ProjectCard
                to="/projects/toba-tek-singh"
                img="/assets/media/hero-3d.jpg"
                kicker="Land · Coming soon"
                name="Toba Tek Singh"
                location="Toba Tek Singh, Punjab"
                summary="Represented by Brick & Build. Categories, pricing and availability are being confirmed."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-dashed border-line rounded-xl p-7 flex items-center gap-3 text-slate text-sm">
                <span className="w-2 h-2 rounded-full border border-gold" />
                Additional projects will appear here as they're confirmed and onboarded.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
