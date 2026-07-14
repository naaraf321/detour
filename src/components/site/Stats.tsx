import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { 
        duration: 2.8, 
        ease: [0.34, 1.56, 0.64, 1],
      });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span className="text-inherit">{suffix}</span>
    </span>
  );
}

const stats = [
  { 
    value: 35, 
    suffix: "+", 
    label: "Projects Delivered",
    subLabel: "12 industries",
    icon: "◆",
    metric: "98% satisfaction"
  },
  { 
    value: 10, 
    suffix: "M+", 
    label: "Views Generated",
    subLabel: "500+ campaigns",
    icon: "◇",
    metric: "45% avg. increase"
  },
  { 
    value: 48, 
    suffix: "h", 
    label: "Average Delivery",
    subLabel: "2x faster",
    icon: "▣",
    metric: "100% on-time"
  },
];

export function Stats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-32 md:py-44">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base black */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Dramatic yellow glow */}
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-400/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-amber-500/3 blur-3xl" />
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_65%,rgba(234,179,8,0.02)_65%,rgba(234,179,8,0.02)_70%,transparent_70%)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_65%,rgba(234,179,8,0.015)_65%,rgba(234,179,8,0.015)_70%,transparent_70%)] bg-[size:60px_60px]" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header - Minimalist */}
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-yellow-500/60"
          >
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            Performance metrics
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-4xl font-light leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            <span className="text-yellow-400">Numbers</span> that speak
            <br />
            louder than words
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-md text-xs text-zinc-500 md:text-sm"
          >
            Every metric represents real impact, real growth, and real results for our partners.
          </motion.p>
        </div>

        {/* Stats - Asymmetric grid */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`md:col-span-4 ${i === 1 ? 'md:col-start-5' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="group relative">
                {/* Main card */}
                <div className="relative overflow-hidden border border-yellow-500/10 bg-gradient-to-b from-yellow-500/5 to-transparent p-8 transition-all duration-500 hover:border-yellow-500/30 hover:bg-yellow-500/10 md:p-12">
                  
                  {/* Animated yellow line */}
                  <motion.div
                    className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  />

                  {/* Icon */}
                  <div className="mb-6 text-2xl text-yellow-500/30 transition-colors duration-300 group-hover:text-yellow-400">
                    {s.icon}
                  </div>

                  {/* Number */}
                  <div className="relative">
                    <div className="text-[15vw] font-black leading-[0.8] tracking-[-0.05em] text-white md:text-[6vw]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    
                    {/* Number shadow */}
                    <div className="absolute inset-0 -z-10 text-[15vw] font-black leading-[0.8] tracking-[-0.05em] text-yellow-500/5 md:text-[6vw]">
                      {s.value}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-6">
                    <div className="text-sm font-bold uppercase tracking-wider text-yellow-400/80 transition-colors group-hover:text-yellow-300">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 transition-colors group-hover:text-zinc-400">
                      {s.subLabel}
                    </div>
                  </div>

                  {/* Metric badge - slides in on hover */}
                  <motion.div
                    className="absolute bottom-6 right-6 overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: activeIndex === i ? 'auto' : 0,
                      opacity: activeIndex === i ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="whitespace-nowrap rounded-full border border-yellow-500/20 bg-black/80 px-4 py-1.5 text-[10px] font-medium tracking-wider text-yellow-400/80 backdrop-blur-sm">
                      {s.metric}
                    </div>
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-yellow-500/10 transition-all duration-500 group-hover:border-yellow-500/30" />
                  <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-yellow-500/10 transition-all duration-500 group-hover:border-yellow-500/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar - Horizontal metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 flex flex-col items-center gap-8 border-t border-yellow-500/10 pt-12"
        >
          {/* Horizontal trust bar */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { label: "Client Satisfaction", value: "98%", icon: "▣" },
              { label: "Repeat Business", value: "85%", icon: "◆" },
              { label: "On-time Delivery", value: "100%", icon: "◇" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-4 border-l border-yellow-500/10 pl-4"
              >
                <span className="text-xl text-yellow-500/30">{item.icon}</span>
                <div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}