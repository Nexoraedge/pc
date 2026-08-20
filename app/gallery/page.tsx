"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Play } from "lucide-react";

const CATEGORIES = ["All", "Weddings", "Corporate", "Birthdays", "Videos"];

const GALLERY_ITEMS = [
  { id: 1, type: "image", category: "Weddings", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Royal Mandap Setup" },
  { id: 2, type: "image", category: "Corporate", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Executive Gala Dinner" },
  { id: 3, type: "video", category: "Videos", src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Grand Entrance Highlights" },
  { id: 4, type: "image", category: "Birthdays", src: "https://images.unsplash.com/photo-1530103862679-de809de96055?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Sweet 16 Celebration" },
  { id: 5, type: "image", category: "Weddings", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Bridal Feast" },
  { id: 6, type: "image", category: "Corporate", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Product Launch Catering" },
  { id: 7, type: "video", category: "Videos", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Behind the Scenes Kitchen" },
  { id: 8, type: "image", category: "Birthdays", src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Midnight Dessert Table" },
  { id: 9, type: "image", category: "Weddings", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", title: "Outdoor Reception" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = GALLERY_ITEMS.filter((item) => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-cream text-maroon-dark font-sans selection:bg-gold selection:text-maroon-dark">
      <Navbar />

      {/* Hero Section for Gallery */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gold mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gold"></span>
            Visual Experience
            <span className="w-8 h-[1px] bg-gold"></span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-maroon-dark mb-6">
            The <span className="font-script text-gold italic">Gallery</span>
          </h1>
          <p className="text-maroon-dark/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of our finest events. From breathtaking wedding setups to immaculate corporate galas, witness the Parshwanath standard.
          </p>
        </div>
      </section>

      {/* Filter Toggle Buttons */}
      <section className="px-6 pb-12 sticky top-24 z-40">
        <div className="max-w-max mx-auto bg-white/80 backdrop-blur-md p-2 rounded-full border border-maroon-dark/10 flex gap-2 overflow-x-auto shadow-xl hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-maroon-dark text-cream shadow-lg" 
                  : "text-maroon-dark/70 hover:text-maroon-dark hover:bg-black/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry/Grid Gallery */}
      <section className="px-6 md:px-12 lg:px-20 pb-32 min-h-[50vh]">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-maroon-dark/10 shadow-sm hover:shadow-xl transition-shadow cursor-pointer break-inside-avoid"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-display text-2xl text-cream">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Video Play Icon Indicator */}
                {item.type === "video" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/40 backdrop-blur-md border border-gold/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-6 h-6 text-gold fill-gold ml-1" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
