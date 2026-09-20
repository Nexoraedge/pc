"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="relative w-full min-h-[100dvh] md:min-h-screen overflow-hidden bg-cream flex flex-col items-center justify-start pt-32 md:pt-40 pb-16 md:pb-24">

      {/* 1. Cinematic Background Layer (Parallax Back) - Light Theme */}
      <motion.div
        className="absolute inset-[-5%] z-0"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/bg-hero.png')" }}
        />
        {/* Light cream gradient overlay for extreme readability and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/60 to-cream/95" />
      </motion.div>

      {/* 2. Centered Typography Content */}
      <div className="relative z-40 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-4 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <span className="font-display text-[1.75rem] md:text-5xl lg:text-7xl text-maroon-dark leading-none tracking-tight">
            Experience The Finest
          </span>
          <div className="flex items-center gap-3 md:gap-6 my-2 md:my-4 w-full justify-center">
            <div className="h-[2px] w-8 md:w-24 bg-gold"></div>
            <span className="font-script text-4xl md:text-7xl lg:text-8xl text-gold -rotate-2 whitespace-nowrap drop-shadow-sm">
              Pure Veg Catering
            </span>
            <div className="h-[2px] w-8 md:w-24 bg-gold"></div>
          </div>
          <span className="font-display text-4xl md:text-7xl lg:text-8xl text-maroon-dark font-bold leading-none tracking-tighter">
            Services.
          </span>

          {/* Hidden SEO Text */}
          <p className="sr-only">
            The best pure veg catering service in Jaipur. Jain catering, wedding catering, and luxury corporate events. 100% vegetarian.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <Link href="/gallery" className="px-8 md:px-10 py-3 md:py-4 bg-maroon-dark text-cream rounded-full font-medium hover:bg-gold transition-all shadow-lg flex items-center gap-3 group cursor-pointer w-full sm:w-auto justify-center hover:scale-105">
              <Utensils className="w-4 h-4 text-gold group-hover:text-maroon-dark group-hover:rotate-12 transition-all" />
              <span className="tracking-widest uppercase text-xs md:text-sm font-bold group-hover:text-maroon-dark transition-colors">The Gallery</span>
            </Link>

            <button className="flex items-center gap-3 md:gap-4 group cursor-pointer hover:opacity-80 transition-opacity w-full sm:w-auto justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-maroon-dark flex items-center justify-center bg-cream/50 backdrop-blur-sm group-hover:scale-110 group-hover:bg-maroon-dark transition-all">
                <Play className="w-4 h-4 md:w-5 md:h-5 text-maroon-dark group-hover:text-cream ml-1 fill-current transition-colors" />
              </div>
              <span className="tracking-widest uppercase text-xs md:text-sm font-semibold text-maroon-dark">Watch Our Story</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 3. Horizontal Pill Collage */}
      <div className="relative z-30 w-full flex justify-center items-end gap-2 md:gap-4 lg:gap-6 px-4 mt-16 md:mt-24 pointer-events-none">

        {/* Pill 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-16 md:w-20 lg:w-24 h-24 md:h-32 lg:h-40 rounded-full overflow-hidden border-2 border-white shadow-xl relative"
        >
          <Image src="/gallery-photos/Live_Tawa_sabji.jpeg" alt="Live Catering" fill sizes="100px" className="object-cover" />
        </motion.div>

        {/* Pill 2 (Taller) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-16 md:w-24 lg:w-28 h-32 md:h-48 lg:h-56 rounded-full overflow-hidden border-2 border-white shadow-xl relative mb-2 md:mb-6"
        >
          <Image src="/gallery-photos/Stall.jpeg" alt="Luxury Table Setup" fill sizes="120px" className="object-cover" />
        </motion.div>

        {/* Pill 3 (Highest - Center Focus) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-20 md:w-28 lg:w-36 h-40 md:h-56 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative mb-6 md:mb-12"
        >
          <Image src="/gallery-photos/Fruit_Counter.jpeg" alt="Fruit Counter Display" fill sizes="150px" className="object-cover" />
        </motion.div>

        {/* Pill 4 (Medium) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="w-16 md:w-24 lg:w-28 h-32 md:h-48 lg:h-56 rounded-full overflow-hidden border-2 border-white shadow-xl relative mb-2 md:mb-6"
        >
          <Image src="/gallery-photos/Counter.jpeg" alt="Premium Event Setup" fill sizes="120px" className="object-cover" />
        </motion.div>

        {/* Pill 5 (Logo/Text) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="w-16 md:w-20 lg:w-24 h-24 md:h-32 lg:h-40 rounded-full overflow-hidden border-2 border-white relative  flex items-center justify-center flex-col"
        >
          <Image src="/gallery-photos/Table-3.jpeg" alt="Texture" fill sizes="100px" className="object-cover mix-blend-luminosity" />

        </motion.div>

      </div>

    </section>
  );
}
