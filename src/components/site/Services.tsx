import { motion } from "motion/react";
import { useState } from "react";

const services = [
  { n: "01", title: "Luxury Property Films", desc: "Signature cinematic films crafted for the world's most distinguished residences." },
  { n: "02", title: "Real Estate Photography", desc: "Editorial stills that treat architecture like a subject, not a backdrop." },
  { n: "03", title: "Drone Cinematography", desc: "Aerial sequences that place a home inside its landscape." },
  { n: "04", title: "Social Media Reels", desc: "Short-form films built to travel, tuned for the algorithm." },
  { n: "05", title: "Commercial Property", desc: "Films for developers, hotels, and hospitality brands." },
  { n: "06", title: "Architecture Films", desc: "Long-form storytelling for practices and studios." },
];

export function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="hairline-b relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Services
            </div>
            <h2 className="mt-4 text-[10vw] font-semibold leading-[0.9] tracking-[-0.04em] md:text-[5.5vw]">
              What we
              <br />
              <span className="italic font-light">produce.</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground">
              Seven disciplines, one studio. Each engagement is scoped like a film — not a
              deliverable list.
            </p>
          </div>

          <ul className="md:col-span-8">
            {services.map((s, i) => (
              <motion.li
                key={s.n}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative flex cursor-pointer items-center justify-between border-t border-white/10 py-8 last:border-b"
              >
                <div className="flex items-center gap-8">
                  <span className="text-[11px] tabular-nums tracking-[0.2em] text-muted-foreground">
                    {s.n}
                  </span>
                  <motion.h3
                    animate={{
                      x: hover === i ? 16 : 0,
                      color: hover === i ? "var(--color-accent)" : "var(--color-foreground)",
                    }}
                    transition={{ duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
                    className="text-3xl font-medium tracking-tight md:text-5xl"
                  >
                    {s.title}
                  </motion.h3>
                </div>
                <motion.div
                  animate={{ opacity: hover === i ? 1 : 0, x: hover === i ? 0 : -12 }}
                  transition={{ duration: 0.4 }}
                  className="hidden max-w-xs text-right text-xs text-muted-foreground md:block"
                >
                  {s.desc}
                </motion.div>
                <motion.span
                  animate={{ rotate: hover === i ? 45 : 0 }}
                  className="ml-6 text-2xl text-muted-foreground"
                >
                  +
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
