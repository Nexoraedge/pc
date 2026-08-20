"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-maroon relative overflow-hidden text-cream">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-maroon-dark/50 skew-x-12 translate-x-32" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-gold/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-gold mb-6 tracking-tight">Let's Talk</h2>
              <p className="text-cream/80 text-lg max-w-md">
                Ready to elevate your event? Get in touch with us to discuss your vision, menu options, and tasting sessions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Phone className="text-gold group-hover:text-maroon transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Mail className="text-gold group-hover:text-maroon transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium">hello@parshwanathcaterers.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <MapPin className="text-gold group-hover:text-maroon transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-medium">123 Culinary Avenue, Food City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream/10 backdrop-blur-xl border border-cream/20 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-cream/80 ml-1">First Name</label>
                  <input type="text" className="w-full bg-maroon-dark/50 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-cream/80 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-maroon-dark/50 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-cream/80 ml-1">Email Address</label>
                <input type="email" className="w-full bg-maroon-dark/50 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-cream/80 ml-1">Event Type</label>
                <select className="w-full bg-maroon-dark/50 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="party">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-cream/80 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-maroon-dark/50 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your event..."></textarea>
              </div>

              <button className="w-full py-4 bg-gold text-maroon font-bold rounded-xl hover:bg-cream transition-colors shadow-lg shadow-gold/20 transform hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
