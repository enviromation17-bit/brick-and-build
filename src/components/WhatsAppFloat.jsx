import { motion } from "framer-motion";
import { COMPANY } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${COMPANY.whatsappDisplay}`}
      className="fixed right-4 sm:right-5 z-[60] inline-flex items-center gap-2 rounded-pill bg-[#25D366] text-[#0b3d1f] px-4 py-3 font-bold text-sm shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span aria-hidden="true">WhatsApp</span>
    </motion.a>
  );
}
