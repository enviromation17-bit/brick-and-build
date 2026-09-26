import { useEffect, useState } from "react";
import { COMPANY } from "../data/content";
import { submitLead } from "../lib/submitLead";

const INTERESTS = [
  "Toba Tek Singh",
  "Pak City",
  "Residential",
  "Commercial",
  "General enquiry",
];

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const openChat = (n, p, i) => {
    const text = encodeURIComponent(
      `Assalam o Alaikum, my name is ${n}. Phone: ${p}. I am interested in: ${i}.`
    );
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const n = name.trim();
    const p = phone.trim();
    if (!n || !p) {
      setStatus({ state: "error", message: "Please enter name and phone." });
      return;
    }
    setStatus({ state: "sending", message: "Saving…" });
    try {
      await submitLead({
        name: n,
        phone: p,
        interest,
        message: "WhatsApp pre-chat form",
        source: "whatsapp",
      });
      setStatus({ state: "ok", message: "Opening WhatsApp…" });
      openChat(n, p, interest);
      setTimeout(() => {
        setOpen(false);
        setName("");
        setPhone("");
        setInterest(INTERESTS[0]);
        setStatus({ state: "idle", message: "" });
      }, 600);
    } catch {
      setStatus({
        state: "error",
        message: "Could not save. Opening WhatsApp anyway…",
      });
      openChat(n, p, interest);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Chat on WhatsApp at ${COMPANY.whatsappDisplay}`}
        className="fixed right-3 sm:right-5 z-[60] inline-flex items-center gap-2 rounded-pill bg-[#25D366] text-[#0b3d1f] px-3.5 sm:px-4 py-2.5 sm:py-3 font-bold text-sm shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <span aria-hidden="true">WhatsApp</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wa-form-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/50 border-0 cursor-pointer"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full sm:max-w-md bg-paper rounded-t-2xl sm:rounded-2xl border border-line shadow-lift p-5 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 id="wa-form-title" className="text-lg font-extrabold text-navy">
                  Message on WhatsApp
                </h2>
                <p className="mt-1 text-sm text-slate">
                  Leave your details first — we save them to our CRM, then open WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 w-9 h-9 rounded-full border border-line text-navy text-lg leading-none hover:bg-paper2"
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="wa-name">
                  Full name *
                </label>
                <input
                  id="wa-name"
                  className="field-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="wa-phone">
                  Phone / WhatsApp *
                </label>
                <input
                  id="wa-phone"
                  className="field-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  required
                />
              </div>
              <div>
                <span className="block text-[0.78rem] text-slate mb-1.5">Interest</span>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Interest">
                  {INTERESTS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`chip ${interest === item ? "selected" : ""}`}
                      onClick={() => setInterest(item)}
                      aria-pressed={interest === item}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={status.state === "sending"}
                className="w-full h-12 rounded-pill bg-[#25D366] text-[#0b3d1f] font-bold text-sm disabled:opacity-60 hover:bg-[#1fbd59]"
              >
                {status.state === "sending" ? "Saving…" : "Continue to WhatsApp"}
              </button>

              {status.message ? (
                <p
                  className={`text-sm ${status.state === "error" ? "text-[#b3402c]" : "text-slate"}`}
                  role="status"
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="button"
                className="w-full text-sm text-slate underline underline-offset-2"
                onClick={() => openChat(name.trim() || "Guest", phone.trim() || "-", interest)}
              >
                Skip form — open WhatsApp only
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
