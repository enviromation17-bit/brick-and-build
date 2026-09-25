import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "../lib/submitLead";

export default function EnquiryForm({
  roleOptions = ["Investor", "Agent", "End-user"],
  interestOptions = ["Residential plot", "Commercial plot"],
  submitLabel = "Send message",
  extraFields = false,
  source,
}) {
  const [role, setRole] = useState(roleOptions[0]);
  const [interest, setInterest] = useState(interestOptions[0]);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [done, setDone] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.phone) {
      setStatus({ state: "error", message: "Please share your name and phone number so we can reach you." });
      return;
    }
    setStatus({ state: "sending", message: "Sending..." });
    try {
      await submitLead({ ...data, role, interest, source });
      setDone(true);
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try WhatsApp instead." });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl bg-paper2 border border-line p-10"
          role="status"
          aria-live="polite"
        >
          <h3 className="font-display text-2xl text-navy">Thank you for reaching out</h3>
          <p className="mt-3 text-sm text-slate">
            Our team will follow up with you shortly — for the fastest response, message us directly on WhatsApp.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          noValidate
          aria-label="Enquiry form"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="name">
                Full name <span className="text-navy" aria-hidden="true">*</span>
                <span className="sr-only"> (required)</span>
              </label>
              <input
                className="field-input"
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                aria-required="true"
              />
            </div>
            <div>
              <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="phone">
                Phone / WhatsApp <span className="text-navy" aria-hidden="true">*</span>
                <span className="sr-only"> (required)</span>
              </label>
              <input
                className="field-input"
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                aria-required="true"
              />
            </div>
            {extraFields && (
              <>
                <div>
                  <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input className="field-input" id="email" name="email" type="email" autoComplete="email" />
                </div>
                <div>
                  <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="whatsapp">
                    WhatsApp (if different)
                  </label>
                  <input className="field-input" id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" />
                </div>
              </>
            )}
          </div>

          <fieldset className="mt-5 border-none p-0">
            <legend className="block text-[0.78rem] text-slate mb-1.5">Which best describes you</legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Your role">
              {roleOptions.map((r) => (
                <button
                  type="button"
                  key={r}
                  className={`chip ${role === r ? "selected" : ""}`}
                  onClick={() => setRole(r)}
                  aria-pressed={role === r}
                >
                  {r}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5 border-none p-0">
            <legend className="block text-[0.78rem] text-slate mb-1.5">Interest</legend>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Interest">
              {interestOptions.map((i) => (
                <button
                  type="button"
                  key={i}
                  className={`chip ${interest === i ? "selected" : ""}`}
                  onClick={() => setInterest(i)}
                  aria-pressed={interest === i}
                >
                  {i}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5">
            <label className="block text-[0.78rem] text-slate mb-1.5" htmlFor="message">
              Message (optional)
            </label>
            <textarea
              className="field-input"
              id="message"
              name="message"
              placeholder="Tell us what you're looking for."
            />
          </div>

          <motion.button
            type="submit"
            disabled={status.state === "sending"}
            whileTap={{ scale: 0.96 }}
            className="mt-6 h-12 px-7 rounded-pill bg-navy text-white font-bold text-sm disabled:opacity-60 hover:bg-navy2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            aria-busy={status.state === "sending"}
          >
            {status.state === "sending" ? "Sending..." : submitLabel}
          </motion.button>

          <p
            className={`mt-3 text-sm ${status.state === "error" ? "text-[#b3402c]" : "text-slate"}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {status.message}
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
