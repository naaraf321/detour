import { motion } from "motion/react";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-56">
      <div className="pointer-events-none absolute inset-0 bg-arch-grid opacity-25" />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, oklch(0.82 0.15 82 / 0.3), transparent 50%, oklch(0.6 0.2 300 / 0.15), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 text-center md:px-10">
        <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          (10) Let's talk
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.9, 0.2, 1] }}
          className="mx-auto mt-6 max-w-[14ch] text-[15vw] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[9vw]"
        >
          Start your <span className="italic font-light">project</span> in one message.
        </motion.h2>

        <p className="mx-auto mt-8 max-w-md text-base text-muted-foreground">
          No forms. No calendars. Send a WhatsApp — we reply within the hour, quote within
          the day.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="size-2 rounded-full bg-accent-foreground" />
            Chat on WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold hover:border-white/60"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
