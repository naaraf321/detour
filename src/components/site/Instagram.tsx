import { motion } from "motion/react";

const posts = [
  { g: "from-amber-200/40 via-neutral-900 to-black", tag: "Villa" },
  { g: "from-sky-200/30 via-neutral-900 to-black", tag: "Aerial" },
  { g: "from-rose-200/25 via-neutral-900 to-black", tag: "Interior" },
  { g: "from-emerald-200/25 via-neutral-900 to-black", tag: "FPV" },
  { g: "from-orange-200/25 via-neutral-900 to-black", tag: "Sunset" },
  { g: "from-neutral-300/25 via-neutral-900 to-black", tag: "BTS" },
  { g: "from-yellow-200/25 via-neutral-900 to-black", tag: "Reel" },
  { g: "from-purple-200/20 via-neutral-900 to-black", tag: "Night" },
];

export function Instagram() {
  return (
    <section className="hairline-b relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              (09) Instagram
            </div>
            <h2 className="mt-4 text-[10vw] font-semibold leading-[0.9] tracking-[-0.04em] md:text-[5vw]">
              @detour.studio
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium hover:border-accent hover:text-accent"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className={`group relative aspect-square overflow-hidden rounded-sm bg-gradient-to-br ${p.g}`}
            >
              <div className="absolute inset-0 bg-arch-grid opacity-25" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.3em] text-white">
                  {p.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
