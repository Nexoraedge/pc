"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const WHATSAPP_NUMBER = "919982310686";
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi Parshwanath Caterers, I would like to inquire about planning an event!");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative w-full bg-maroon-dark py-24 md:py-32 overflow-hidden border-t border-gold/20">
      
      {/* Background Parallax Image with Overlay */}
      <div className="absolute inset-0 opacity-[0.03] grayscale">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Elegant Dining Setup" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span>
              Secure Your Date
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream leading-tight mb-8">
              Let's Plan Your <br />
              <span className="font-script text-gold italic">Grand Feast</span>
            </h2>
            <p className="text-cream/70 text-base md:text-lg max-w-md mb-12">
              We accept a limited number of events each year to ensure uncompromising quality and flawless execution. Reach out directly to secure your date.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-cream/90">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest font-semibold mb-1">Call Us</p>
                  <p className="text-base md:text-lg">+91 99823 10686</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-cream/90">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gold uppercase tracking-widest font-semibold mb-1">Email Us</p>
                  <p className="text-base md:text-lg">hello@parshwanathcaterers.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: WhatsApp CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1a0c11]/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gold/20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center h-full min-h-[400px]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 blur-[60px] -z-10"></div>
            
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10 text-gold" />
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl text-cream mb-4">Chat With Us</h3>
            <p className="text-cream/60 mb-10 max-w-sm">
              Skip the forms. Message us directly on WhatsApp to check our availability, request a tasting, or discuss your custom menu.
            </p>
            
            <Link 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gold text-maroon-dark py-4 px-10 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-cream hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle size={20} />
              Message on WhatsApp
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
