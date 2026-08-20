"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Play } from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-maroon-dark">

      {/* 1. Cinematic Background Layer (Parallax Back) */}
      <motion.div
        className="absolute inset-[-5%] z-0"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/images/bg-hero.png')" }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent mix-blend-multiply" />
      </motion.div>

      {/* 3. Left Cream Wave Overlay */}
      {/* Mobile: z-30 (above waiter). Desktop: z-10 (below waiter) */}
      <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full z-20 md:z-10 pointer-events-none">
        {/* Desktop Wave (Restored original slanted wave) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full text-cream drop-shadow-2xl"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M0,0 L85,0 C105,30 65,60 90,100 L0,100 Z"
          />
        </svg>
        {/* Mobile Wave - Top 55% horizontal split */}
        <svg
          className="block md:hidden absolute top-0 left-0 w-full h-[55%] text-cream drop-shadow-2xl"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M0,0 L100,0 L100,95 C70,110 30,75 0,90 Z"
          />
        </svg>
      </div>

      {/* Content Container (z-50 so text is always on top) */}
      {/* Mobile: Constrained to top 55% to center in cream wave. Desktop: Full height */}
      <div className="relative z-50 h-[55%] md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-3xl pointer-events-auto pt-[8vh] md:pt-10 pb-4 md:pb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:mt-[-10vh] lg:mt-[-5vh] max-w-[90%] md:max-w-full"
        >
          <h1 className="flex flex-col">
            <span className="font-display text-[1.75rem] md:text-6xl text-maroon-dark leading-none tracking-tight">
              Experience The Finest
            </span>
            <div className="flex items-center gap-2 md:gap-4 my-1 md:my-2">
              <div className="h-[2px] w-5 md:w-12 bg-gold"></div>
              <span className="font-script text-4xl md:text-7xl text-gold -rotate-2 whitespace-nowrap">
                Pure Veg Catering
              </span>
              <div className="h-[2px] flex-1 bg-gold max-w-[30px] md:max-w-[100px]"></div>
            </div>
            <span className="font-display text-4xl md:text-8xl text-maroon-dark font-bold leading-none tracking-tighter">
              Services.
            </span>
          </h1>

          {/* Hidden SEO Text */}
          <p className="sr-only">
            Exquisite culinary experiences for weddings and corporate events. 100% vegetarian, authentic, and unforgettable.
          </p>

          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-maroon-dark text-cream rounded-full font-medium hover:bg-maroon transition-all shadow-lg flex items-center gap-3 group cursor-pointer w-auto">
              <Utensils className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              <span className="tracking-widest uppercase text-xs md:text-sm font-semibold">Gallery</span>
            </button>

            <button className="flex items-center gap-3 md:gap-4 group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10">
                <Play className="w-3 h-3 md:w-4 md:h-4 text-maroon-dark ml-1 fill-maroon-dark" />
              </div>
              <span className="tracking-widest uppercase text-xs md:text-sm font-semibold text-maroon-dark">Watch Our Story</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Maroon Wave */}
      {/* Mobile: z-10 (below waiter). Desktop: z-20 */}
      <div className="absolute bottom-0 left-0 w-full h-[25%] lg:h-[30%] z-10 md:z-20 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full text-maroon-dark drop-shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            fill="currentColor"
            d="M0,40 C30,10 60,30 100,0 L100,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* 2. Waiter Foreground Layer */}
      {/* Mobile: z-20 (between maroon and cream waves). Desktop: z-30 (above all waves) */}
      <div
        className="absolute bottom-0 right-0 w-[85%] md:w-full lg:w-[60%] h-[47%] md:h-full z-10 md:z-30 flex items-end justify-end pointer-events-none"
      >
        <img
          src="/images/waiter.png"
          alt="Parshwanath Caterer"
          className="h-[100%] md:h-[95%] lg:h-[110%] w-auto object-contain origin-bottom object-bottom mr-[-5%] md:mr-[-10%] lg:mr-0 drop-shadow-[0_0_20px_rgba(0,0,0,0.4)] [mask-image:linear-gradient(to_bottom,transparent,black_15%)] md:[mask-image:none] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%)] md:[-webkit-mask-image:none]"
        />
      </div>

      {/* 5. Pill Collage */}
      <div className="absolute bottom-3 md:bottom-8 left-3 md:left-auto md:right-12 lg:right-20 z-40 flex items-end gap-1.5 md:gap-3 lg:gap-4 pointer-events-none">

        {/* Pill 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-10 md:w-20 lg:w-24 h-20 md:h-56 lg:h-64 rounded-full overflow-hidden border border-gold/50 md:border-2 shadow-2xl relative"
        >
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Chef preparing food" className="w-full h-full object-cover" />
        </motion.div>

        {/* Pill 2 (Taller) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-10 md:w-20 lg:w-24 h-28 md:h-72 lg:h-80 rounded-full overflow-hidden border border-gold/50 md:border-2 shadow-2xl relative -mb-1 md:-mb-8"
        >
          <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Kitchen staff plating" className="w-full h-full object-cover" />
        </motion.div>

        {/* Pill 3 (Highest) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-10 md:w-20 lg:w-24 h-24 md:h-80 lg:h-[22rem] rounded-full overflow-hidden border border-gold/50 md:border-2 shadow-2xl relative mb-1 md:mb-4"
        >
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gourmet vegetarian dish" className="w-full h-full object-cover" />
        </motion.div>

        {/* Pill 4 (Short with Logo/Text) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="w-10 md:w-20 lg:w-24 h-16 md:h-48 lg:h-56 rounded-full overflow-hidden border border-gold md:border-2 shadow-2xl relative bg-maroon-dark flex items-center justify-center flex-col gap-1 md:gap-2"
        >
          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Catering setup" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" />
          <span className="relative z-10 font-display text-2xl md:text-5xl lg:text-6xl text-gold font-bold">P</span>
        </motion.div>

      </div>

    </section>
  );
}
