"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Anjali & Rohan",
    event: "Destination Wedding",
    text: "Parshwanath Caterers didn't just serve food; they created an experience. The live counters were the talk of our wedding, and the pure vegetarian spread was incredibly innovative and luxurious.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    event: "Corporate Gala",
    text: "Flawless execution. The presentation of the dishes was on par with a Michelin-star restaurant. They elevated our corporate event to a completely new level of prestige.",
    rating: 5,
  },
  {
    name: "Meera Singhal",
    event: "Anniversary Banquet",
    text: "From the traditional thalis to the global cuisines, everything tasted authentic. Their attention to detail and impeccable hospitality made our 25th anniversary truly memorable.",
    rating: 5,
  },
  {
    name: "The Sharma Family",
    event: "Grand Reception",
    text: "The variety and taste were simply outstanding. Our guests are still raving about the exquisite desserts and the royal presentation!",
    rating: 5,
  },
  {
    name: "Aditi Desai",
    event: "Private Soiree",
    text: "They completely understood our vision and executed it flawlessly. True professionals with an eye for absolute detail and perfection.",
    rating: 5,
  },
  {
    name: "Rajesh Kapoor",
    event: "Engagement Ceremony",
    text: "Pure vegetarian luxury at its finest. The majestic setup and the incredible taste of every single dish made our day perfect.",
    rating: 5,
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-cream py-24 md:py-32 overflow-hidden border-t border-maroon-dark/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold mb-3 flex items-center justify-center gap-2"
          >
            <span className="w-8 h-[1px] bg-gold"></span>
            Client Love
            <span className="w-8 h-[1px] bg-gold"></span>
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-maroon-dark leading-tight"
          >
            Words of <span className="font-script text-gold italic">Appreciation</span>
          </motion.h2>
        </div>
      </div>

      {/* Infinite Marquee Scroll */}
      <div className="w-full relative z-10 overflow-hidden flex">
        {/* Left/Right Fade Gradients for visual smoothness */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none hidden md:block"></div>

        <motion.div 
          className="flex gap-6 md:gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          whileHover={{ animationPlayState: "paused" }} // Optional: pause on hover if possible in Framer
        >
          {/* Duplicate the array to create the infinite loop effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div
              key={i}
              className="relative w-[300px] md:w-[400px] shrink-0 bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-maroon-dark/5 hover:border-gold/30 transition-colors group flex flex-col justify-between"
            >
              <div>
                <Quote className="absolute top-8 right-8 w-10 h-10 md:w-12 md:h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-maroon-dark/80 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-maroon-dark/10 pt-6">
                <h4 className="font-display text-lg md:text-xl text-maroon-dark font-bold">{testimonial.name}</h4>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gold mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
