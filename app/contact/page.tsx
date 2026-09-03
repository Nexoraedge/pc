"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "Wedding",
    details: ""
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919982310686";

    // Construct the message
    const message = `Hello Parshwanath Caterers!%0A%0A*New Event Inquiry:*%0A- *Name:* ${formData.firstName} ${formData.lastName}%0A- *Phone:* ${formData.phone}%0A- *Event Type:* ${formData.eventType}%0A- *Details:* ${formData.details}%0A%0ALooking forward to hearing from you!`;

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-cream text-maroon-dark font-sans selection:bg-gold selection:text-maroon-dark">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-dark/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-maroon-dark mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gold"></span>
            Contact Us
            <span className="w-8 h-[1px] bg-gold"></span>
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-maroon-dark mb-6">
            Get In <span className="font-script text-gold italic">Touch</span>
          </h1>
          <p className="text-maroon-dark/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Planning a grand wedding, corporate gala, or an intimate gathering? Let&apos;s curate a bespoke culinary experience together.
          </p>
        </div>
      </section>

      {/* 2. Contact Interface & Form */}
      <section className="py-12 px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="font-display text-3xl text-maroon-dark mb-8">Reach Out Directly</h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 bg-maroon-dark/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-maroon-dark mb-2">Headquarters</h4>
                    <p className="text-maroon-dark/70 text-lg leading-relaxed">
                      B-18 Mohan Bari,<br />
                      Surajpole Gate,<br />
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 bg-maroon-dark/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-maroon-dark mb-2">Phone</h4>
                    <p className="text-maroon-dark/70 text-lg leading-relaxed">
                      <a href="tel:+919982310686" className="hover:text-gold transition-colors">+91 9982310686</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/30 bg-maroon-dark/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-maroon-dark mb-2">Email</h4>
                    <p className="text-maroon-dark/70 text-lg leading-relaxed">
                      <a href="mailto:info@parshwanathcaterers.com" className="hover:text-gold transition-colors">info@parshwanathcaterers.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-maroon-dark mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/parshwanath_caterer_and_events?igsi=OXdtbXl4eDZ3djNv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-maroon-dark text-cream flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all hover:scale-105">
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/share/1HUyoMMPJp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-maroon-dark text-cream flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all hover:scale-105">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-cream"
          >
            <h3 className="font-display text-3xl text-maroon-dark mb-2">Event Inquiry</h3>
            <p className="text-maroon-dark/60 mb-8">Fill out the form below and our event directors will get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">First Name</label>
                  <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="John" />
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">Phone Number</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>

              {/* Event Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">Event Type</label>
                <select value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors text-maroon-dark/70">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday / Anniversary</option>
                  <option>Other Gathering</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-maroon-dark/80">Event Details</label>
                <textarea rows={4} required value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} className="w-full bg-cream/50 border border-maroon-dark/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your event, estimated guest count, and dates..."></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full bg-green-600 text-white rounded-xl py-4 font-bold uppercase tracking-widest text-sm hover:bg-green-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-600/20">
                Send via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Booking FAQs */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream/50 border-t border-maroon-dark/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-maroon-dark mb-4">
              Booking <span className="font-script text-gold italic">Questions</span>
            </h2>
            <p className="text-maroon-dark/70 text-lg">Common questions about reserving Parshwanath Caterers for your event.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">How far in advance should we book?</h3>
              <p className="text-maroon-dark/80">For weddings and large destination events, we highly recommend booking <strong>3 to 6 months in advance</strong> to secure your dates, as the luxury wedding season in Jaipur gets fully booked very quickly.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">Do you offer food tasting sessions?</h3>
              <p className="text-maroon-dark/80">Yes, absolutely! We believe you should experience our culinary excellence firsthand. We arrange exclusive tasting sessions for clients once the initial event consultation is complete.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">What is the minimum guest count you cater for?</h3>
              <p className="text-maroon-dark/80">Because we focus on premium, grand setups with live counters and luxury dining, we typically cater to events with a <strong>minimum of 50 guests</strong>. For smaller, highly exclusive private parties, please reach out to discuss custom options.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">Do you provide the buffet setup and counters?</h3>
              <p className="text-maroon-dark/80">Yes! We provide complete end-to-end luxury catering setups. This includes premium buffet counters, elegant live station decor, exotic fruit displays, and all necessary serving equipment to make your event look magnificent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed */}
      <section className="mt-12 w-full h-[500px] relative bg-maroon-dark/5 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.34072698358764!2d75.84574361865361!3d26.920893282878126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7900966022b%3A0xcbc7d3cd2f9f0a61!2sParshwanath%20Caterers!5e0!3m2!1sen!2sin!4v1788419649552!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Parshwanath Caterers Location"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-maroon-dark/10 pointer-events-none mix-blend-overlay"></div>
      </section>

      <Footer />
    </main>
  );
}
