"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Lokesh Jain",
    role: "Founder & Visionary",
    image: "/founder/Lokesh_Jain.png",
    description: "The visionary behind Parshwanath Caterers, bringing decades of pure vegetarian culinary excellence to life."
  },
  {
    name: "Praveen Jain",
    role: "Founder & Operations Head",
    image: "/founder/Praveen_Jain.png",
    description: "Driving the strategic vision and ensuring uncompromising quality across all of Parshwanath's premium events."
  },
  {
    name: "Himanshu Jain",
    role: "Event Specialist",
    image: "/founder/Himanshu_Jain.png",
    description: "An expert in luxury hospitality, having completed his Hotel Management from Marriott Hotel DangaH. Orchestrating flawless, high-end events with immaculate attention to detail."
  }
];

const INTERNS = [
  {
    slug: "pankaj-singh-rahtore",
    name: "Pankaj singh rathore",
    role: "Media & Video Intern (BCA)",
    duration: "2024"
  },
  {
    slug: "tanmay-vijay",
    name: "Tanmay Vijay",
    role: "Management Intern (BBA)",
    duration: "2024"
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
            Parshwanath <span className="font-script text-gold italic">Caterers & Events</span>
          </h1>
          <p className="text-maroon-dark/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The best pure vegetarian catering service in Jaipur. We bring amazing food and luxury setups to your weddings and special events.
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
                Started with a simple goal: to provide the best Jain and pure vegetarian catering in Jaipur. Today, Parshwanath Caterers is a top choice for premium events.
              </p>
              <p>
                From big royal weddings to small private parties, we make sure every dish is perfect. Our team uses the best ingredients to make food that everyone will love.
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
            className="grid grid-cols-2 gap-4 h-[560px]"
          >
            <div className="relative  rounded-2xl shadow-xl overflow-hidden">
              <Image src="/gallery-photos/Stall.jpeg" alt="Premium Setup" fill className="object-cover" />
            </div>
            <div className="relative  rounded-2xl shadow-xl overflow-hidden mt-12">
              <Image src="/gallery-photos/Table-3.jpeg" alt="Royal Dining Decor" fill className="object-cover" />
            </div>
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

      {/* 4. SEO FAQs */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-cream border-t border-maroon-dark/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-maroon-dark mb-4">
              Frequently Asked <span className="font-script text-gold italic">Questions</span>
            </h2>
            <p className="text-maroon-dark/70 text-lg">Everything you need to know about booking the best caterer in Jaipur.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">Do you provide 100% Pure Veg and Jain Catering?</h3>
              <p className="text-maroon-dark/80">Yes! We are proud to be the best pure veg and Jain caterer in Jaipur. We use a strictly vegetarian kitchen and have special menus for Jain food without onion or garlic.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">Which cities do you serve?</h3>
              <p className="text-maroon-dark/80">While we are based in Jaipur, Rajasthan, we provide luxury destination wedding catering across India. We regularly travel for large-scale events.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">What kind of events do you cater?</h3>
              <p className="text-maroon-dark/80">We cater all types of premium events including royal weddings, corporate galas, birthdays, high-tea parties, and private dinners.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-maroon-dark/5">
              <h3 className="font-display text-2xl text-maroon-dark mb-3">How do I book Parshwanath Caterers?</h3>
              <p className="text-maroon-dark/80">You can easily contact us through our website's contact form, call us at +91 9982310686, or message us on WhatsApp to discuss your event menu and pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-maroon-dark/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-maroon-dark mb-4">Our Interns</h2>
            <p className="text-maroon-dark/70 max-w-2xl mx-auto text-lg">
              We take pride in mentoring the next generation of hospitality and culinary experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTERNS.map((intern, i) => (
              <Link href={`/interns/${intern.slug}`} key={i} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-maroon-dark/5 flex flex-col items-center text-center">
                <h3 className="font-display text-2xl text-maroon-dark mb-2 group-hover:text-gold transition-colors">{intern.name}</h3>
                <p className="text-gold font-bold tracking-widest uppercase text-xs mb-4">{intern.role}</p>
                <p className="text-maroon-dark/60 text-sm">{intern.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
