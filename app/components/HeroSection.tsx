"use client";

import { motion } from "framer-motion";
import { Utensils, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      {/* Decorative background shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-maroon/5 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 text-maroon font-semibold tracking-wider uppercase mb-4 text-sm">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span>Premium Catering Experience</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1] font-bold tracking-tight">
              A Taste of <br />
              <span className="text-maroon italic">Elegance</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/70 max-w-lg"
          >
            Crafting unforgettable culinary moments for your weddings, corporate events, and exclusive parties. We bring artistry to every plate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-maroon text-cream rounded-full font-medium hover:bg-maroon-dark transition-all transform hover:scale-105 shadow-lg shadow-maroon/30 flex items-center gap-2">
              Explore Menu
              <Utensils className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-maroon text-maroon rounded-full font-medium hover:bg-maroon/5 transition-all transform hover:scale-105">
              Book a Tasting
            </button>
          </motion.div>
        </div>

        {/* Visual / Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] w-full hidden lg:block"
        >
          {/* Abstract creative image placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[28rem] rounded-full overflow-hidden border-4 border-cream shadow-2xl z-10 rotate-3">
             <div className="w-full h-full bg-gradient-to-tr from-maroon/80 to-maroon-dark/90 flex flex-col items-center justify-center text-cream p-8 text-center relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               <h3 className="font-display text-3xl font-bold relative z-10">Parshwanath Caterers</h3>
             </div>
          </div>
          
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gold shadow-lg shadow-gold/20 flex items-center justify-center z-20"
          >
            <div className="text-center p-4">
              <span className="block font-display text-3xl text-maroon font-bold">15+</span>
              <span className="text-xs font-semibold text-maroon/80 uppercase">Years of Joy</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-0 w-48 glass rounded-2xl p-4 shadow-xl z-20"
          >
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-maroon flex items-center justify-center">
                <Star className="w-5 h-5 text-gold fill-gold" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Top Rated</p>
                <p className="text-xs text-foreground/60">500+ Events</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
