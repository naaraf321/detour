import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Category = "All" | "Residential" | "Commercial" | "Drone" | "Photography" | "Reels";

const projects: {
  n: string;
  name: string;
  category: Exclude<Category, "All">;
  location: string;
  gradient: string;
}[] = [
  { n: "01", name: "Villa Aurelia", category: "Residential", location: "Côte d'Azur, FR", gradient: "from-amber-200/30 via-neutral-900 to-black" },
  { n: "02", name: "The Cliff House", category: "Drone", location: "Amalfi, IT", gradient: "from-sky-300/25 via-neutral-900 to-black" },
  { n: "03", name: "Monolith Tower", category: "Commercial", location: "Dubai, UAE", gradient: "from-orange-300/25 via-neutral-900 to-black" },
  { n: "04", name: "Casa del Vento", category: "Photography", location: "Ibiza, ES", gradient: "from-rose-200/25 via-neutral-900 to-black" },
  { n: "05", name: "Penthouse VII", category: "Reels", location: "NYC, USA", gradient: "from-emerald-200/25 via-neutral-900 to-black" },
  { n: "06", name: "Desert Pavilion", category: "Drone", location: "Joshua Tree, USA", gradient: "from-yellow-200/25 via-neutral-900 to-black" },
];

const filters: Category[] = ["All", "Residential", "Commercial", "Drone", "Photography", "Reels"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="hairline-b relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              (03) Selected Work
            </div>
            <h2 className="mt-4 text-[10vw] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[6vw]">
              Featured
              <br />
              <span className="text-outline">Portfolio</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                  active === f
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-white/15 text-muted-foreground hover:border-white/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.2, 0.9, 0.2, 1] }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-secondary"
              >
                <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-arch-grid opacity-30" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
                  <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.3em] text-white/70">
                    {p.n} / {p.category}
                  </div>
                  <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    Coming Soon
                  </div>

                  {/* Massive project name in bg */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-outline whitespace-nowrap text-[20vw] font-black leading-none tracking-tighter md:text-[8vw]">
                      {p.n}
                    </span>
                  </div>

                  {/* Hover glass */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-4 rounded-md p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 glass">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                      Case Study →
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between p-5">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.category}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
