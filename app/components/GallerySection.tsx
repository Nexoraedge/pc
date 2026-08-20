"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Gourmet Dessert", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Elegant Plating", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Salad Setup", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Healthy Bowls", span: "md:col-span-2 md:row-span-1" },
];

export default function GallerySection() {
  return (
    <section className="relative w-full bg-[#160c0f] py-24 overflow-hidden  border-cream/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10 relative">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gold mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span>
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream leading-tight">
              A Feast for the <span className="font-script text-gold italic">Eyes</span>
            </h2>
          </motion.div>

          <Link href="#" className="group flex items-center gap-3 text-gold hover:text-cream transition-colors text-xs md:text-sm font-semibold tracking-widest uppercase pb-2 border-b border-gold/30 hover:border-cream shrink-0">
            View Full Gallery
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span || 'col-span-1 row-span-1'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-gold font-script text-2xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
