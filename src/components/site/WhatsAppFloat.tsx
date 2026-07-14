import { motion } from "motion/react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold glass md:bottom-8 md:right-8"
    >
      <span className="relative flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
        <svg viewBox="0 0 24 24" className="relative size-4" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01a1.09 1.09 0 0 0-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.096.55 4.144 1.594 5.947L.057 24l6.302-1.653a11.87 11.87 0 0 0 5.694 1.45h.006c6.554 0 11.895-5.34 11.897-11.9a11.83 11.83 0 0 0-3.436-8.417zM12.06 21.79h-.005a9.86 9.86 0 0 1-5.03-1.378l-.361-.214-3.741.98.999-3.647-.235-.374a9.88 9.88 0 0 1-1.513-5.257c0-5.451 4.436-9.887 9.891-9.887 2.641 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.895 6.996c-.002 5.452-4.437 9.883-9.888 9.883z"/>
        </svg>
      </span>
      <span className="hidden md:inline">WhatsApp</span>
    </motion.a>
  );
}
