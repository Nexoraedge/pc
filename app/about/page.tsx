"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const TEAM_MEMBERS = [
  {
    name: "Himanshu Jain",
    role: "Founder & Visionary",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The visionary behind Parshwanath Caterers, bringing decades of pure vegetarian culinary excellence to life."
  },
  {
    name: "Lokesh Jain",
    role: "Executive Master Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Award-winning culinary artist specializing in redefining traditional Indian vegetarian cuisine for modern luxury."
  },
  {
    name: "Praveen Jain",
    role: "Director of Events",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Orchestrating flawless, high-end events with immaculate attention to detail and flawless execution."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-maroon-dark font-sans selection:bg-gold selection:text-maroon-dark">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-dark/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-maroon-dark mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gold"></span>
            Our Legacy
            <span className="w-8 h-[1px] bg-gold"></span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-maroon-dark mb-6">
            The <span className="font-script text-gold italic">Story</span> of Parshwanath
          </h1>
          <p className="text-maroon-dark/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Elevating pure vegetarian catering to an art form. We don't just serve food; we craft unforgettable luxury experiences for your most treasured moments.
          </p>
        </div>
      </section>

      {/* 2. The Brand Story */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-maroon-dark mb-6">
              A Tradition of <span className="text-gold italic">Excellence</span>
            </h2>
            <div className="space-y-6 text-maroon-dark/80 text-lg leading-relaxed">
              <p>
                Founded on the principles of authenticity, purity, and uncompromising quality, Parshwanath Caterers has grown into a premier name in luxury vegetarian catering. 
              </p>
              <p>
                We believe that pure vegetarian cuisine is not a limitation, but a vast canvas of flavors, textures, and aromas. From grand royal weddings to exclusive corporate galas, our dedicated culinary team sources the finest ingredients globally to curate menus that leave a lasting impression.
              </p>
              <p className="font-bold text-maroon-dark flex items-center gap-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                100% Pure Vegetarian Kitchen
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-[600px]"
          >
            <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Catering Detail" className="w-full h-full object-cover rounded-2xl shadow-xl" />
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Culinary Art" className="w-full h-full object-cover rounded-2xl shadow-xl mt-12" />
          </motion.div>

        </div>
      </section>

      {/* 3. Meet The Team */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-gold mb-4">The Culinary Masters</p>
          <h2 className="font-display text-4xl md:text-6xl text-maroon-dark">
            Meet Our <span className="font-script text-gold italic">Team</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group text-center"
            >
              <div className="w-full aspect-[3/4] rounded-full overflow-hidden mb-8 relative border-4 border-cream shadow-xl mx-auto max-w-[300px]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-maroon-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-display text-3xl text-maroon-dark mb-2">{member.name}</h3>
              <p className="text-gold font-bold uppercase tracking-wider text-sm mb-4">{member.role}</p>
              <p className="text-maroon-dark/70 px-4">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Internship & Careers CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-maroon-dark text-cream">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Join The <span className="font-script text-gold italic">Legacy</span>
          </h2>
          <p className="text-cream/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Are you a passionate culinary artist or event management enthusiast? Parshwanath Caterers offers exclusive internship and career opportunities to shape the next generation of hospitality leaders.
          </p>
          
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-gold mb-6">Our Proud Alumni / Past Interns</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["Hardik Jain", "Suraj Shah", "Pankaj"].map((intern) => (
                <div key={intern} className="px-6 py-3 bg-cream/5 border border-cream/20 rounded-full text-cream font-medium">
                  {intern}
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-maroon-dark rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cream hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            Apply For Internship
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
