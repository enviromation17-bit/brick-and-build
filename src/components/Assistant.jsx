import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "../lib/submitLead";
import { COMPANY } from "../data/content";

const FAQ = [
  {
    q: ["toba", "plot", "colony", "punjab", "coming soon", "land"],
    a: "Toba Tek Singh is our current featured project in Punjab. Full details on categories, plot sizes and pricing haven't been confirmed yet, so sales haven't begun.",
    href: "/projects/toba-tek-singh",
    cta: "Open Toba Tek Singh",
  },
  { q: ["residential", "villa", "apartment", "home", "house"], a: "Residential is one of our two focus areas — plots and homes for families and individual buyers.", href: "/services", cta: "Residential services" },
  { q: ["commercial", "office", "retail", "shop"], a: "Commercial covers retail and commercial plots and units for business owners and investors.", href: "/services", cta: "Commercial services" },
  { q: ["where", "location", "pakpattan", "based", "office", "hq", "address"], a: `We're based in ${COMPANY.location}. That's our home base and primary market.`, href: "/contact", cta: "Contact us" },
  { q: ["contact", "enquire", "call", "email", "whatsapp", "phone", "hour", "time", "open"], a: `You can reach us on WhatsApp at ${COMPANY.whatsappDisplay}, daily from ${COMPANY.hours}.`, href: "/contact", cta: "Contact the team" },
  { q: ["price", "cost", "payment", "budget"], a: "I'm not able to share pricing or availability yet — that's still being confirmed. Send an inquiry or message us on WhatsApp and our team will follow up.", href: "/contact", cta: "Send an enquiry" },
];

function reply(input) {
  const t = input.toLowerCase();
  const hit = FAQ.find((f) => f.q.some((k) => t.includes(k)));
  return hit || { a: "I can help with Toba Tek Singh, land development, residential or commercial questions, our Pakpattan location, or how to reach us.", href: "/contact", cta: "Contact us" };
}

export default function Assistant() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { who: "bot", text: "Hi! Ask me about Toba Tek Singh, our services, or how to reach us. I won't guess at prices or availability." },
  ]);
  const [input, setInput] = useState("");
  const [offerCapture, setOfferCapture] = useState(false);
  const [captureState, setCaptureState] = useState("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const scrollRef = useRef(null);

  const push = (msg) => {
    setMessages((m) => [...m, msg]);
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }));
  };

  const ask = (text) => {
    if (!text.trim()) return;
    push({ who: "you", text });
    setInput("");
    const hit = reply(text);
    setTimeout(() => {
      push({ who: "bot", text: hit.a, href: hit.href, cta: hit.cta });
      if (!offerCapture) setTimeout(() => setOfferCapture(true), 500);
    }, 350);
  };

  const send = async () => {
    if (!name.trim() || !phone.trim()) return;
    setCaptureState("sending");
    try {
      await submitLead({ name, phone, source: "assistant" });
      setCaptureState("done");
    } catch {
      setCaptureState("error");
    }
  };

  const safeBottom = "env(safe-area-inset-bottom, 0px)";

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        aria-controls="assistant-panel"
        className="fixed right-4 sm:right-5 z-[60] h-12 inline-flex items-center gap-2 rounded-pill bg-navy text-white px-4 font-bold text-sm shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        style={{ bottom: `calc(4.75rem + ${safeBottom})` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 200, damping: 16 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 12a8 8 0 01-8 8H7l-4 3 1-5.2A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Assistant
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="assistant-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 sm:right-5 z-[65] w-[min(360px,calc(100vw-2rem))] max-h-[min(28rem,68vh)] bg-paper2 border border-line rounded-2xl shadow-lift flex flex-col overflow-hidden"
            style={{ bottom: `calc(8.25rem + ${safeBottom})` }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-line">
              <div>
                <p id="assistant-title" className="text-[0.92rem] font-bold">
                  Bricks &amp; Built Assistant
                </p>
                <p className="text-[0.75rem] text-slate mt-0.5">Answers based on confirmed information only</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="p-1 text-navy">
                ✕
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2.5"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[88%] px-3.5 py-2 rounded-2xl text-[0.88rem] leading-relaxed ${
                    m.who === "bot"
                      ? "bg-paper text-navy self-start rounded-bl-sm border border-line"
                      : "bg-navy text-white self-end rounded-br-sm"
                  }`}
                >
                  {m.text}
                  {m.href && (
                    <>
                      <br />
                      <button
                        type="button"
                        onClick={() => {
                          navigate(m.href);
                          setOpen(false);
                        }}
                        className="underline decoration-gold font-bold text-navy"
                      >
                        {m.cta}
                      </button>
                    </>
                  )}
                </motion.div>
              ))}

              {offerCapture && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[92%] px-3.5 py-3 rounded-2xl text-[0.88rem] bg-paper text-navy border border-line self-start rounded-bl-sm"
                >
                  {captureState === "done" ? (
                    <p role="status">Thanks — our team will reach out shortly.</p>
                  ) : captureState === "error" ? (
                    <p role="alert">
                      Something went wrong — please message us on{" "}
                      <a
                        href={`https://wa.me/${COMPANY.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gold font-bold text-navy"
                      >
                        WhatsApp
                      </a>{" "}
                      instead.
                    </p>
                  ) : (
                    <div className="grid gap-2">
                      <p>Want our team to follow up directly? Leave your name and number.</p>
                      <label className="sr-only" htmlFor="assistant-name">
                        Your name
                      </label>
                      <input
                        id="assistant-name"
                        className="field-input h-9 text-[0.82rem]"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                      />
                      <label className="sr-only" htmlFor="assistant-phone">
                        Phone or WhatsApp
                      </label>
                      <input
                        id="assistant-phone"
                        className="field-input h-9 text-[0.82rem]"
                        placeholder="Phone / WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        type="tel"
                      />
                      <button
                        type="button"
                        onClick={send}
                        disabled={captureState === "sending"}
                        aria-busy={captureState === "sending"}
                        className="h-9 rounded-pill bg-navy text-white text-[0.8rem] font-bold disabled:opacity-60"
                      >
                        {captureState === "sending" ? "Sending..." : "Share details"}
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 px-4 pb-3" role="group" aria-label="Suggested questions">
              {["Where are you based?", "Tell me about Toba Tek Singh", "How can I contact you?"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="text-[0.76rem] border border-line rounded-pill px-3 py-1.5 text-slate hover:border-navy hover:text-navy"
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              className="flex border-t border-line"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              aria-label="Ask the assistant"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Ask a question"
                className="flex-1 bg-transparent border-none px-4 py-3.5 text-[16px] sm:text-[0.88rem] focus:outline-none text-navy placeholder:text-slate"
              />
              <button type="submit" aria-label="Send message" className="px-4 text-navy">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
