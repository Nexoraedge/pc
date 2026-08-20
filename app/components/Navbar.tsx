"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isOpen ? "glass py-4 shadow-sm rounded-br-[4rem]" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo/logo-text.png"
              alt="Parshwanath Caterers"
              width={200}
              height={60}
              className="object-contain h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <div className="flex items-center space-x-6">


            {/* Custom SVG Hamburger */}
            <label className={`hamburger z-50 relative ${!isScrolled && !isOpen ? "text-maroon-dark md:text-cream" : "text-maroon-dark"}`}>
              <input
                type="checkbox"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] bg-cream flex flex-col justify-center items-center"
          >
            {/* Background Aesthetic element */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="font-display text-5xl md:text-7xl font-bold text-foreground hover:text-maroon transition-colors hover:italic"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
