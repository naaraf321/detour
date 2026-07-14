import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

const words = ["BUSINESS", "PROPERTY", "CLIENTS."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        for (let i = 0; i < words.length; i++) {
          setCurrentIndex(i);
          setIsVisible(true);
          await new Promise((resolve) => setTimeout(resolve, 1400));
          setIsVisible(false);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    };

    sequence();
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0 bg-arch-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "conic-gradient(from 120deg, oklch(0.82 0.15 82 / 0.35), transparent 40%, oklch(0.4 0.15 250 / 0.25), transparent 80%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* DETOUR - Upper Section */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[15%] -z-10 select-none text-center md:top-[12%]"
      >
        <span className="text-outline whitespace-nowrap text-[23vw] font-black leading-none tracking-tighter md:text-[22vw]">
          DETOUR.
        </span>
      </motion.div>

      {/* WE CREATE + Animated Word - Lower Section */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto mt-auto w-full max-w-[1600px] px-6 pb-8 md:px-10 md:pb-12"
      >
        <h2 className="font-display leading-none tracking-tight">
          {/* WE CREATE */}
          <span className="mb-2 block text-[14vw] font-light tracking-[-0.03em] text-white/80 md:text-[5.5vw] lg:text-[4.5vw]">
            Detour your
          </span>

          {/* Animated words container */}
          <span
            className="relative block overflow-hidden"
            style={{ height: "7.60em" }}
          >
            {words.map((w, i) => {
              const isLast = i === words.length - 1;
              const displayText = isLast ? w.slice(0, -1) : w;
              const period = isLast ? "." : "";
              const isCurrent = i === currentIndex;

              return (
                <motion.span
                  key={i}
                  initial={{ y: "105%", opacity: 0, filter: "blur(8px)" }}
                  animate={
                    isCurrent && isVisible
                      ? {
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                        }
                      : isCurrent && !isVisible
                      ? {
                          y: "-105%",
                          opacity: 0,
                          filter: "blur(8px)",
                        }
                      : {
                          y: "105%",
                          opacity: 0,
                          filter: "blur(8px)",
                        }
                  }
                  transition={{
                    duration: 0.9,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: { duration: 0.7 },
                    filter: { duration: 0.8 },
                  }}
                  className="absolute inset-0 text-[8vw] font-bold leading-[0.85] tracking-[-0.04em] text-white md:text-[12vw] lg:text-[10vw]"
                >
                  {displayText}
                  {period && (
                    <span className="text-accent">{period}</span>
                  )}
                </motion.span>
              );
            })}
          </span>
        </h2>
      </motion.div>

      {/* Buttons - Bottom */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto mb-10 flex w-full max-w-[1600px] flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:justify-end md:mb-14 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-medium tracking-wide text-white backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] md:px-8 md:py-4 md:text-base"
          >
            <span className="relative">View Portfolio</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:translate-x-0.5 group-hover:bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/[0.03] px-7 py-4 text-sm font-medium tracking-wide text-accent backdrop-blur-md transition-all duration-500 hover:border-accent/60 hover:bg-accent/[0.08] hover:shadow-[0_0_30px_-5px_rgba(var(--accent),0.2)] md:px-8 md:py-4 md:text-base"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Chat on WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}