import { Link } from "react-router-dom";
import { COMPANY } from "../data/content";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="border-t border-lineDark bg-navyDeep text-white">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10 py-16">
          <div>
            <Link to="/" className="flex items-center text-white" aria-label="Brick & Built home">
              <Mark size={42} className="h-10 w-auto max-w-[11rem]" />
            </Link>
            <p className="mt-5 max-w-[24rem] text-sm text-slateLight">
              An established property development company based in Pakpattan, Punjab — delivering and representing land, residential and commercial projects with transparency.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] uppercase text-slateLight">Company</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li><Link to="/about" className="text-white/85 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-white/85 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-white/85 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] uppercase text-slateLight">Projects</p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              <li><Link to="/projects/pak-city" className="text-white/85 hover:text-white">Pak City Housing Society</Link></li>
              <li><Link to="/projects/toba-tek-singh" className="text-white/85 hover:text-white">Toba Tek Singh</Link></li>
              <li><Link to="/projects" className="text-white/85 hover:text-white">All projects</Link></li>
            </ul>
            <p className="mt-5 text-[0.82rem] text-slateLight leading-relaxed">
              {COMPANY.location}<br />WhatsApp: {COMPANY.whatsappDisplay}<br />{COMPANY.hours}
            </p>
          </div>
        </div>
        <div className="border-t border-lineDark">
          <p className="py-5 text-[0.78rem] text-slateLight">© {new Date().getFullYear()} {COMPANY.fullName}, Pakpattan. Official email and social channels are pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
