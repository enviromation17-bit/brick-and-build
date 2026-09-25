import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { COMPANY } from "../data/content";

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Get in touch."
        compact
        lede="Land, homes, and general enquiries — reach us directly, no call centers."
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-container mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-12">
          <Reveal>
            <h2 className="font-display text-[1.75rem] md:text-[1.9rem] text-navy">Reach us directly</h2>
            <p className="mt-3 max-w-[32ch] text-slate">{COMPANY.location}</p>
            <ul className="mt-6 grid gap-3 list-none p-0">
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  WhatsApp: {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${COMPANY.whatsapp}`}
                  className="text-slate text-[0.92rem] hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Call / save: {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li className="text-slate text-[0.92rem]">{COMPANY.hours}</li>
              <li className="text-slate text-[0.85rem]">Official email is pending confirmation and will be added here once set up.</li>
            </ul>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 w-full sm:w-auto justify-center items-center rounded-pill bg-[#25D366] text-[#0b3d1f] px-8 font-bold text-sm hover:bg-[#1fbd59]"
            >
              Message us on WhatsApp
            </a>
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-line">
              <iframe
                src="https://www.google.com/maps?q=30.3358251,73.4026166&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pak City, Pakpattan map"
                allowFullScreen
              />
            </div>
            <p className="mt-2.5 text-[0.78rem] text-slate">
              Pak City, Pakpattan —{" "}
              <a
                href="https://maps.app.goo.gl/k24Qfhx6XDQKKP4x9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold text-navy font-semibold"
              >
                Open in Google Maps
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <EnquiryForm
              extraFields
              source="contact"
              roleOptions={["Investor", "Agent", "End-user", "Partner"]}
              interestOptions={["Pak City", "Toba Tek Singh — residential", "Toba Tek Singh — commercial", "General enquiry"]}
              submitLabel="Send message"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
