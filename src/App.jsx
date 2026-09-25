import { useEffect, useState } from "react";

const COMPANY = {
  whatsapp: "923011783333",
  whatsappDisplay: "03011783333",
  location: "Pakpattan, Punjab, Pakistan",
};

const SERVICES = [
  { title: "Land development", image: "/assets/media/service-land.jpg", text: "Housing colonies, plots and masterplans — as delivered at Pak City Housing Society.", href: "/projects/pak-city" },
  { title: "Commercial", image: "/assets/media/service-commercial.jpg", text: "Workplaces and retail that meet the street — for business owners and investors.", href: "/contact" },
  { title: "Residential", image: "/assets/media/service-residential.jpg", text: "Homes and residential plots for families and individual buyers.", href: "/contact" },
];

const PROCESS = [
  ["01", "Acquire", "Land, title, and a clear brief before anything is announced."],
  ["02", "Masterplan", "Sectors, roads, parks and plot grain before a single facade."],
  ["03", "Develop", "Infrastructure and community elements, then homes and commercial stock."],
  ["04", "Steward", "Handover is not an ending — we stay with the place as it is lived in."],
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-40 text-white">
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-5 md:px-8">
        <a href="/" onClick={close} className="text-xl font-extrabold tracking-tight">BRICKS <span className="text-gold">&amp;</span> BUILT <span className="block text-[0.55rem] tracking-[0.35em] text-gold">DEVELOPERS</span></a>
        <button type="button" className="rounded border border-white/40 px-3 py-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">Menu</button>
        <nav className={`${open ? "block" : "hidden"} absolute left-5 right-5 top-20 rounded-xl bg-navy p-5 md:static md:block md:bg-transparent md:p-0`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
            {[['About','/about'], ['Projects','/projects'], ['Services','/services'], ['Contact','/contact']].map(([label, href]) => <a key={href} href={href} onClick={close} className="font-semibold hover:text-gold">{label}</a>)}
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero({ eyebrow, title, text, image, children }) {
  return <section className="relative min-h-[64dvh] overflow-hidden bg-navy">
    {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
    <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-navy/65 to-navy/45" />
    <div className="relative z-10 mx-auto flex min-h-[64dvh] max-w-container flex-col justify-end px-5 pb-12 pt-32 md:px-8 md:pb-20">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-tight tracking-tight text-white">{title}</h1>
      {text && <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">{text}</p>}
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </div>
  </section>;
}

function Button({ href, children, dark = false }) { return <a href={href} className={`inline-flex h-12 items-center rounded-pill px-7 text-sm font-bold ${dark ? "bg-navy text-white" : "bg-white text-navy"}`}>{children}</a>; }
function SectionTitle({ eyebrow, title, text }) { return <><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate">{eyebrow}</p><h2 className="mt-3 text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold tracking-tight text-navy">{title}</h2>{text && <p className="mt-4 max-w-xl leading-relaxed text-slate">{text}</p>}</>; }

function Home() { return <>
  <Hero eyebrow="Pakpattan · Punjab · Pakistan" title="Toba Tek Singh is next." image="/assets/media/hero-frontpage-web.mp4" text="An established property development company delivering residential, commercial and land projects — including Pak City Housing Society in Pakpattan — with our next project underway in Toba Tek Singh."><Button href="/projects/toba-tek-singh">Explore Toba Tek Singh</Button><Button href="/projects" dark>View completed work</Button></Hero>
  <section className="py-16 sm:py-24"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Services" title="Land. Commercial. Residential." text="Three practices, one established standard: land development, commercial and residential."/><div className="mt-10 grid gap-5 md:grid-cols-3">{SERVICES.map((s) => <a href={s.href} key={s.title} className="group relative min-h-[22rem] overflow-hidden rounded-2xl"><img src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navyDeep/95 to-transparent"/><div className="relative flex h-full flex-col justify-end p-7 text-white"><h3 className="text-2xl font-extrabold">{s.title}</h3><p className="mt-2 text-sm text-white/85">{s.text}</p></div></a>)}</div></div></section>
  <Process />
</>; }

function Process() { return <section className="bg-navy py-20 text-white"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Method" title="How we approach land and development."/><div className="mt-12 grid gap-px bg-lineDark sm:grid-cols-2 lg:grid-cols-4">{PROCESS.map(([n, title, text]) => <div key={n} className="bg-navy p-7"><p className="text-2xl font-extrabold text-gold">{n}</p><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm text-white/70">{text}</p></div>)}</div></div></section>; }

function Services() { return <><Hero eyebrow="Services" title="What we work on." image="/assets/media/pak-city-park.jpg" text="Land development, commercial and residential — three practices, one established standard of transparency."/><section className="py-20"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Practices" title="Pick a focus area."/><div className="mt-12 grid gap-5">{SERVICES.map((s, i) => <a href={s.href} key={s.title} className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-2"><img src={s.image} alt="" loading="lazy" className="aspect-[4/3] h-full w-full object-cover"/><div className="flex flex-col justify-center bg-paper2 p-8 md:p-10"><p className="text-xs font-bold text-slate">0{i + 1}</p><h3 className="mt-2 font-display text-3xl text-navy">{s.title}</h3><p className="mt-3 max-w-md text-slate">{s.text}</p></div></a>)}</div></div></section><Process/></>; }

function About() { return <><Hero eyebrow="The company" title="Built for the long term." text="Bricks & Built represents and develops residential and commercial property in Punjab, with Pak City Housing Society delivered and Toba Tek Singh in progress."/><section className="py-20"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Origin" title="Named for the first material, and the lasting result." text="Brick is patience. Built is the lasting result. Pak City Housing Society — three sites across 29 acres in Pakpattan — is our delivered project. Toba Tek Singh, our next project, is currently in progress."/><div className="mt-12 grid gap-5 sm:grid-cols-2">{['Two focus areas, one standard','Land, then structure','Pakpattan as home base','Honest by default'].map((x) => <div key={x} className="rounded-xl border border-line bg-white p-7"><h3 className="font-display text-2xl text-navy">{x}</h3><p className="mt-3 text-sm text-slate">Residential and commercial real estate under the same standard of transparency.</p></div>)}</div></div></section></>; }

function Projects() { return <><Hero eyebrow="Projects" title="The portfolio." image="/assets/media/service-residential.jpg" text="One completed multi-site development, and one project currently in progress."/><section className="py-20"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Portfolio" title="Delivered, and in progress."/><div className="mt-12 grid gap-5 md:grid-cols-2"><Project href="/projects/pak-city" image="/assets/media/service-residential.jpg" title="Pak City Housing Society" text="A completed and near-complete residential and commercial development across three sites in Pakpattan."/><Project href="/projects/toba-tek-singh" image="/assets/media/service-land.jpg" title="Toba Tek Singh" text="Our current project in Punjab. Categories, pricing and availability are being confirmed."/></div></div></section></>; }
function Project({ href, image, title, text }) { return <a href={href} className="overflow-hidden rounded-2xl border border-line bg-paper2"><img src={image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover"/><div className="p-7"><h3 className="text-2xl font-extrabold text-navy">{title}</h3><p className="mt-3 text-slate">{text}</p></div></a>; }

function Detail({ toba = false }) { return <><Hero eyebrow={toba ? 'Current project' : 'Completed project'} title={toba ? 'Toba Tek Singh' : 'Pak City Housing Society'} image={toba ? '/assets/media/toba-residential.jpg' : '/assets/media/service-residential.jpg'} text={toba ? 'A new community project underway in Toba Tek Singh, Punjab.' : 'A completed multi-site residential and commercial development in Pakpattan.'}/><section className="py-20"><div className="mx-auto max-w-container px-5 md:px-8"><SectionTitle eyebrow="Overview" title={toba ? 'A considered next step.' : 'Delivered across three sites.'} text={toba ? 'Project categories, pricing and availability will be published as they are verified.' : 'Pak City Housing Society spans 29 acres across three sites with residential plots, commercial areas, roads, electricity and community infrastructure.'}/><Button href="/contact" dark>Contact our team</Button></div></section></>; }

function Contact() { return <><Hero eyebrow="Contact" title="Get in touch." text="Land, homes, and general enquiries — reach us directly, no call centers."/><section className="py-20"><div className="mx-auto grid max-w-container gap-10 px-5 md:grid-cols-2 md:px-8"><div><SectionTitle eyebrow="Reach us directly" title="Talk to our team." text={COMPANY.location}/><a className="mt-7 inline-flex h-12 items-center rounded-pill bg-[#25D366] px-7 text-sm font-bold text-[#0b3d1f]" href={`https://wa.me/${COMPANY.whatsapp}`}>WhatsApp: {COMPANY.whatsappDisplay}</a></div><div className="rounded-2xl bg-paper2 p-7"><h2 className="text-2xl font-extrabold text-navy">Send an enquiry</h2><p className="mt-3 text-slate">Please contact us on WhatsApp and our team will respond directly.</p><a className="mt-6 inline-flex h-12 items-center rounded-pill bg-navy px-7 text-sm font-bold text-white" href={`https://wa.me/${COMPANY.whatsapp}`}>Message us</a></div></div></section></>; }

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  useEffect(() => { window.scrollTo(0, 0); }, [path]);
  const page = path === "/" ? <Home /> : path === "/about" ? <About /> : path === "/services" ? <Services /> : path === "/projects" ? <Projects /> : path === "/projects/toba-tek-singh" ? <Detail toba /> : path === "/projects/pak-city" ? <Detail /> : path === "/contact" ? <Contact /> : <Home />;
  return <><Header/><main id="main-content">{page}</main><footer className="border-t border-line bg-paper2 py-10"><div className="mx-auto flex max-w-container flex-col gap-3 px-5 text-sm text-slate md:flex-row md:justify-between md:px-8"><span>© Bricks &amp; Built Developers</span><a href={`https://wa.me/${COMPANY.whatsapp}`}>WhatsApp {COMPANY.whatsappDisplay}</a></div></footer></>;
}

export default App;
