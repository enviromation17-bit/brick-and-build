import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV } from "../data/content";
import Mark from "./Mark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const dark = scrolled || mobileOpen;
  const tone = dark ? "text-navy" : "text-white";
  const toneMuted = dark ? "text-slate" : "text-white/70";

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        dark ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between gap-4 h-[4.75rem] px-5 md:px-8">
        <Link
          to="/"
          className={`flex items-center shrink-0 rounded-lg px-1 py-1 -ml-1 transition-opacity hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${dark ? "text-navy focus-visible:outline-navy" : "text-white focus-visible:outline-white"}`}
          aria-label="Bricks & Built Developers — Home"
          title="Bricks & Built — Home"
        >
          <Mark size={46} variant="mark" className="h-11 w-auto max-w-[min(16rem,62vw)] sm:h-12" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${toneMuted} ${dark ? "hover:text-navy focus-visible:outline-navy" : "hover:text-white focus-visible:outline-white"}`}
                  onClick={() => setDropOpen((v) => !v)}
                  aria-expanded={dropOpen}
                  aria-haspopup="true"
                  aria-controls="projects-menu"
                  id="projects-menu-button"
                >
                  {item.label}
                  <svg viewBox="0 0 12 8" fill="none" width="10" height="7" className={`transition-transform ${dropOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
                {dropOpen && (
                  <div id="projects-menu" role="menu" aria-labelledby="projects-menu-button" className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[300px]">
                    <div className="rounded-2xl border border-line bg-paper2 shadow-lift overflow-hidden">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.to}
                          to={d.to}
                          role="menuitem"
                          className="block px-5 py-4 border-b border-line last:border-0 hover:bg-paper text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy focus-visible:outline-offset-[-2px]"
                        >
                          <strong className="block text-[0.92rem] font-bold">{d.label}</strong>
                          <span className="block mt-1 text-[0.78rem] text-slate">{d.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-semibold rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isActive ? tone : toneMuted} ${dark ? "focus-visible:outline-navy" : "focus-visible:outline-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="sr-only"> (current page)</span>}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex h-11 items-center rounded-pill bg-navy text-white px-6 text-sm font-bold hover:bg-navy2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Enquire
          </Link>
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tone} ${dark ? "focus-visible:outline-navy" : "focus-visible:outline-white"}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden overflow-hidden bg-paper border-t border-line">
          <nav className="flex flex-col px-5 pb-8 text-navy" aria-label="Mobile">
            <Link to="/" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <p className="pt-4 text-[0.72rem] tracking-[0.2em] uppercase text-slate" id="mobile-projects-label">
              Projects
            </p>
            <div role="group" aria-labelledby="mobile-projects-label">
              <Link to="/projects/pak-city" className="py-4 border-b border-line text-lg font-bold block" onClick={() => setMobileOpen(false)}>
                Pak City Housing Society
              </Link>
              <Link to="/projects/toba-tek-singh" className="py-4 border-b border-line text-lg font-bold block" onClick={() => setMobileOpen(false)}>
                Toba Tek Singh <span className="text-gold text-[0.7rem] tracking-[0.14em] uppercase ml-2">Coming soon</span>
              </Link>
              <Link to="/projects" className="py-4 border-b border-line text-lg font-bold block" onClick={() => setMobileOpen(false)}>
                All projects
              </Link>
            </div>
            <p className="pt-4 text-[0.72rem] tracking-[0.2em] uppercase text-slate">Services</p>
            <Link to="/services" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>
              All services
            </Link>
            <Link to="/contact" className="py-4 text-lg font-bold" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
