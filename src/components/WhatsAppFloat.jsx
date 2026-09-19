import { motion } from "framer-motion";
import { COMPANY } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${COMPANY.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-[60] inline-flex items-center gap-2 rounded-pill bg-[#25D366] text-[#0b3d1f] px-4 py-3 font-bold text-sm shadow-lift"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      WhatsApp
    </motion.a>
  );
}
