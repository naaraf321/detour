import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const line =
  "Detour is where your next customers find you. We’re more than videographers—we help businesses get noticed by the right people. Through creative content and smart marketing, we capture attention, build trust, generate demand, and turn interest into real customers";

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const words = line.split(" ");

  return (
    <section id="about" ref={ref} className="hairline-b relative py-32 md:py-48">
      <div className="mb-24 overflow-hidden hairline-t hairline-b py-6">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                "Detour",
                "Detour",
                "Detour",
                "Detour",
                "Detour",
                "Detour",
                "Detour",
                
              ].map((t) => (
                <span key={t} className="flex items-center gap-16">
                  {t}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Manifesto
          </div>
        </div>
        <p className="md:col-span-9 text-[7vw] font-medium leading-[1.05] tracking-[-0.02em] md:text-[3.4vw]">
          {words.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1.5) / words.length]}
            >
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}
