import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const quotes = [
  {
    quote:
      "So much cold traffic, you'll need a jacket. We drive high-quality cold traffic that fuels consistent business growth",
    who: "Sarah Chen",
    role: "CEO, Growth Dynamics",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "Not everyone buys on the first click. We keep your brand in front of the right people until they're ready to convert.",
    who: "Marcus Rodriguez",
    role: "Founder, Digital Pulse",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "Too hot to ignore. We drive high-intent buyers straight to your business at the right time.",
    who: "Emily Thompson",
    role: "Head of Marketing, BrandFlow",
    avatar: "ET",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentQuote = quotes[currentIndex];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((v) => (v + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((v) => (v - 1 + quotes.length) % quotes.length);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((v) => (v + 1) % quotes.length);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Yellow glow */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/3 blur-3xl" />
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-yellow-400/3 blur-3xl" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20px_20px,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-yellow-500/60"
            >
              <span className="h-1 w-1 rounded-full bg-yellow-500" />
              Testimonials
              <span className="h-1 w-1 rounded-full bg-yellow-500" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              What detour
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                brings
              </span>
            </motion.h2>
          </div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center gap-3 md:mt-0"
          >
            <button
              onClick={handlePrevious}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 text-yellow-500/60 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              aria-label="Previous testimonial"
            >
              <span className="text-lg">←</span>
            </button>
            
            <div className="flex items-center gap-1.5">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-0.5 transition-all duration-500 ${
                    idx === currentIndex
                      ? "w-10 bg-yellow-400"
                      : "w-4 bg-yellow-500/20 hover:bg-yellow-500/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 text-yellow-500/60 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              aria-label="Next testimonial"
            >
              <span className="text-lg">→</span>
            </button>
          </motion.div>
        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-yellow-500/10 bg-gradient-to-br from-yellow-500/5 via-black to-black p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 hover:shadow-yellow-500/5 md:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/5 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/5 blur-2xl" />
          
          {/* Top accent line */}
          <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

          {/* Large quote mark */}
          <div className="absolute -top-4 left-6 font-serif text-8xl leading-none text-yellow-500/20 md:left-10 md:text-9xl">
            "
          </div>

          {/* Quote content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <p className="text-xl font-light leading-relaxed text-zinc-200 md:text-3xl md:leading-relaxed lg:text-4xl">
                {currentQuote.quote}
              </p>
              

            </motion.blockquote>
          </AnimatePresence>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-50" />
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-yellow-500/10 pt-12 md:gap-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
