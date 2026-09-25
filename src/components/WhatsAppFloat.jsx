import { COMPANY } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${COMPANY.whatsappDisplay}`}
      className="fixed right-3 sm:right-5 z-[60] inline-flex items-center gap-2 rounded-pill bg-[#25D366] text-[#0b3d1f] px-3.5 sm:px-4 py-2.5 sm:py-3 font-bold text-sm shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <span aria-hidden="true">WhatsApp</span>
    </a>
  );
}
