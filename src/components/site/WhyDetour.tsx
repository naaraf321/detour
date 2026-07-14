import { motion } from "motion/react";

const items = [
  "Luxury Quality",
  "Fast Delivery",
  "Creative Direction",
  "Professional Equipment",
  "Licensed Drone Pilot",
  "Premium Editing",
];

export function WhyDetour() {
  return (
    <section className="hairline-b relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          (06) Why Detour
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.2, 0.9, 0.2, 1] }}
              className="group flex items-center justify-between border-b border-white/10 py-8"
            >
              <h3 className="text-[8vw] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[3.6vw]">
                {t}<span className="text-accent">.</span>
              </h3>
              <span className="text-xs tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
