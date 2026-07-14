import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Contact us", desc: "we get contact with you and stay with you through the whole process." },
  { n: "02", title: "Planning", desc: "We plan and make the best content plan for your goals." },
  { n: "03", title: "Production", desc: "Set up a perfect time for the shoot and we will do the work." },
  { n: "04", title: "Editing", desc: "Colour, sound design, and edit — cut like a short film, not a listing." },
  { n: "05", title: "Delivery", desc: "we make the product you like, changes are on us." },
  { n: "06", title: "New Traffic", desc: "Strategic planning and execution for maximizing reach and engagement." },
  { n: "07", title: "Results", desc: "Our projects feedback speaks for itself" },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="hairline-b relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Process
              </div>
              <h2 className="mt-4 text-[10vw] font-semibold leading-[0.9] tracking-[-0.04em] md:text-[5.5vw]">
                From brief
                <br />
                to <span className="text-outline">final</span>
                <br />
                cut.
              </h2>
              <p className="mt-6 max-w-xs text-sm text-muted-foreground">
                A five-stage process refined over hundreds of shoots. No guesswork.
              </p>
            </div>
          </div>

          <div className="relative md:col-span-8">
            <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
            <motion.div
              style={{ height: line }}
              className="absolute left-4 top-0 w-px bg-accent"
            />

            <ul className="space-y-16">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.2, 0.9, 0.2, 1] }}
                  className="relative pl-16"
                >
                  <div className="absolute left-[9px] top-2 size-2 rounded-full bg-accent shadow-[0_0_0_6px_var(--background)]" />
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs tabular-nums tracking-[0.3em] text-muted-foreground">
                      {s.n}
                    </span>
                    <h3 className="text-4xl font-semibold tracking-tight md:text-6xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-lg text-base text-muted-foreground">{s.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
