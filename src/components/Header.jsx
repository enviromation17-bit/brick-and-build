import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  const dark = scrolled || mobileOpen; // true = light header bg, so content goes navy
  const tone = dark ? "text-navy" : "text-white";
  const toneMuted = dark ? "text-slate" : "text-white/70";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        dark ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between gap-4 h-[4.5rem] px-5 md:px-8">
        <Link to="/" className={`flex items-center gap-3 ${tone}`}>
          <span className="flex h-12 w-[7.5rem] items-center justify-center rounded-md border border-gold/70 bg-white px-1 shadow-sm">
            <Mark size={50} />
          </span>
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
                  className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 ${toneMuted} ${dark ? "hover:text-navy" : "hover:text-white"}`}
                  onClick={() => setDropOpen((v) => !v)}
                  aria-expanded={dropOpen}
                >
                  {item.label}
                  <svg viewBox="0 0 12 8" fill="none" width="10" height="7" className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}>
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[300px]"
                    >
                      <div className="rounded-2xl border border-line bg-paper2 shadow-lift overflow-hidden">
                        {item.dropdown.map((d) => (
                          <Link key={d.to} to={d.to} className="block px-5 py-4 border-b border-line last:border-0 hover:bg-paper text-navy">
                            <strong className="block text-[0.92rem] font-bold">{d.label}</strong>
                            <span className="block mt-1 text-[0.78rem] text-slate">{d.sub}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-semibold ${isActive ? tone : toneMuted}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-flex h-11 items-center rounded-pill bg-navy text-white px-6 text-sm font-bold hover:bg-navy2">
            Enquire
          </Link>
          <button
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 ${tone}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-paper border-t border-line"
          >
            <nav className="flex flex-col px-5 pb-8 text-navy">
              <Link to="/" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>About</Link>
              <p className="pt-4 text-[0.72rem] tracking-[0.2em] uppercase text-slate">Projects</p>
              <Link to="/projects/pak-city" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>Pak City Housing Society</Link>
              <Link to="/projects/toba-tek-singh" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>
                Toba Tek Singh <span className="text-gold text-[0.7rem] tracking-[0.14em] uppercase ml-2">Coming soon</span>
              </Link>
              <Link to="/projects" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>All projects</Link>
              <p className="pt-4 text-[0.72rem] tracking-[0.2em] uppercase text-slate">Services</p>
              <Link to="/services" className="py-4 border-b border-line text-lg font-bold" onClick={() => setMobileOpen(false)}>All services</Link>
              <Link to="/contact" className="py-4 text-lg font-bold" onClick={() => setMobileOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
