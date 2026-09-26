import { Link } from "react-router-dom";
import { COMPANY } from "../data/content";
import Mark from "./Mark";

const SOCIAL = [
  {
    key: "facebook",
    label: "Facebook",
    href: () => COMPANY.social?.facebook,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: () => COMPANY.social?.instagram,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 0 0 1 1.1-1.1z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: () => COMPANY.social?.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H3.5v12h3V9zM5 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0 0-3.5zM21 13.3c0-3.2-1.7-4.7-4-4.7a3.4 3.4 0 0 0-3 1.6V9H11v12h3v-6.4c0-1.7.8-2.7 2.2-2.7 1.3 0 1.8.9 1.8 2.7V21h3v-7.7z" />
      </svg>
    ),
  },
];

const PORTFOLIO_URL = "https://enviromation17-bit.github.io/my-portfolio/";

export default function Footer() {
  const links = SOCIAL.map((s) => ({ ...s, url: s.href() })).filter((s) => s.url && String(s.url).trim());

  return (
    <footer role="contentinfo" className="border-t border-lineDark bg-navyDeep text-white">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] gap-8 sm:gap-10 py-10 sm:py-12 md:py-16">
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Bricks & Built home"
            >
              <Mark size={64} variant="full" className="h-14 sm:h-16 w-auto max-w-[12rem]" />
            </Link>
            <p className="mt-4 sm:mt-5 max-w-[24rem] text-sm text-slateLight leading-relaxed">
              An established property development company based in Pakpattan, Punjab — delivering and representing land, residential and commercial projects with transparency.
            </p>
            {links.length > 0 && (
              <nav className="mt-5 sm:mt-6 flex flex-wrap gap-3" aria-label="Social media">
                {links.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </nav>
            )}
          </div>
          <nav aria-label="Company">
            <p className="text-[0.72rem] tracking-[0.2em] uppercase text-slateLight" id="footer-company">
              Company
            </p>
            <ul className="mt-3 sm:mt-4 grid gap-2.5 text-sm" aria-labelledby="footer-company">
              <li>
                <Link to="/about" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Projects">
            <p className="text-[0.72rem] tracking-[0.2em] uppercase text-slateLight" id="footer-projects">
              Projects
            </p>
            <ul className="mt-3 sm:mt-4 grid gap-2.5 text-sm" aria-labelledby="footer-projects">
              <li>
                <Link to="/projects/pak-city" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Pak City Housing Society
                </Link>
              </li>
              <li>
                <Link to="/projects/toba-tek-singh" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Toba Tek Singh
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/85 hover:text-white py-0.5 inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  All projects
                </Link>
              </li>
            </ul>
            <p className="mt-4 sm:mt-5 text-[0.82rem] text-slateLight leading-relaxed">
              <Link to="/projects/pak-city" className="text-white/85 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Pakpattan, Punjab, Pakistan
              </Link>
              <br />
              <Link to="/projects/toba-tek-singh" className="text-white/85 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Toba Tek Singh, Punjab, Pakistan
              </Link>
              <br />
              <span>WhatsApp: {COMPANY.whatsappDisplay}</span>
              <br />
              <span>{COMPANY.hours}</span>
            </p>
          </nav>
        </div>
      </div>

      {/* Bottom bar — always last line of footer */}
      <div className="border-t border-white/10 bg-[#0a1528]">
        <div className="max-w-container mx-auto px-5 md:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.8rem] text-white/55">
            © {new Date().getFullYear()} {COMPANY.fullName}, Pakpattan.
          </p>
          <p className="text-[0.8rem] text-white/55">
            Built by{" "}
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:text-white underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Revolt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
