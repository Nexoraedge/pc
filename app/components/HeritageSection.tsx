"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function HeritageSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-maroon-dark to-[#160c0f] py-24  overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-5 h-5 text-gold" />
              <span className="text-sm font-bold uppercase tracking-widest text-gold/80">Our Heritage</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream leading-tight mb-8">
              A Legacy of <br />
              <span className="font-script text-gold italic">Pure Vegetarian</span> <br />
              Excellence.
            </h2>

            <div className="space-y-6 text-cream/70 text-base md:text-lg leading-relaxed">
              <p>
                For over two decades, Parshwanath Caterers has redefined luxury dining with an unwavering commitment to 100% pure vegetarian cuisine. We believe that true culinary art requires no compromise.
              </p>
              <p>
                From the bustling live counters of grand destination weddings to intimate corporate banquets, our master chefs source only the finest, freshest ingredients to craft dishes that are as visually stunning as they are delicious.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/20 pt-8">
              <div>
                <h4 className="font-display text-4xl text-cream font-bold mb-2">20+</h4>
                <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gold">Years of Legacy</p>
              </div>
              <div>
                <h4 className="font-display text-4xl text-cream font-bold mb-2">50k+</h4>
                <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-gold">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          {/* Right Images (Asymmetrical Collage) */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Catering Setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#160c0f] z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chef Plating Food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Decorative Gold Elements */}
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gold/15 rounded-full blur-[60px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 font-script text-9xl text-gold/5 select-none pointer-events-none">Heritage</div>
          </div>

          {/* Mobile Image (Simplified) */}
          <div className="block lg:hidden w-full h-[350px] rounded-2xl overflow-hidden shadow-xl mt-8">
            <img
              src="https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Catering Setup"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
