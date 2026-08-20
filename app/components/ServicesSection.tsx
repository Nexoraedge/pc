"use client";

import { motion } from "framer-motion";
import { GlassWater, Cake, Briefcase, PartyPopper } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Weddings",
    description: "Elegant multi-course meals and stunning buffets to make your special day unforgettable.",
    icon: Cake,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Professional catering with a touch of class for galas, conferences, and office parties.",
    icon: Briefcase,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Private Parties",
    description: "Intimate and bespoke menus tailored specifically for your exclusive gatherings.",
    icon: PartyPopper,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Beverage Services",
    description: "Premium mocktails, fine teas, and curated drinks to complement our exquisite dishes.",
    icon: GlassWater,
    delay: 0.4,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-5xl text-maroon mb-6 tracking-tight"
          >
            Our Signatures
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-foreground/70 text-lg"
          >
            We curate exceptional culinary experiences tailored to the unique atmosphere of your event. From intimate gatherings to grand celebrations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full transition-transform duration-500 group-hover:scale-110 -z-10" />
              
              <div className="w-14 h-14 bg-maroon text-cream rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-maroon/20 group-hover:bg-gold group-hover:shadow-gold/20 transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-maroon transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
