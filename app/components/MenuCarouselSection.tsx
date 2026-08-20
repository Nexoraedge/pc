"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./MenuCarousel.module.css";

const EXPERTISE = [
  { slug: "weddings", label: "Weddings", emoji: "💍" },
  { slug: "corporate", label: "Corporate", emoji: "💼" },
  { slug: "live-counters", label: "Live Food", emoji: "🥘" },
  { slug: "private", label: "Private", emoji: "🥂" },
  { slug: "high-tea", label: "High Tea", emoji: "🫖" },
  { slug: "destination", label: "Destination", emoji: "🧭" },
  { slug: "fine-dining", label: "Fine Dining", emoji: "🍽️" },
  { slug: "parties", label: "Parties", emoji: "🎉" },
];

export default function MenuCarouselSection() {
  return (
    <section className="relative w-full bg-maroon-dark py-24 overflow-hidden flex flex-col justify-center border-t border-maroon/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gold mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold"></span>
              Our Expertise
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-4">
              Crafting Unforgettable <br />
              <span className="font-script text-gold italic pr-4">Moments</span>
            </h2>
            <p className="text-cream/80 max-w-md text-base md:text-lg">
              From intimate private gatherings to grand royal weddings, our elite team flawlessly executes every detail of your special occasion.
            </p>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gold hover:text-cream transition-colors uppercase tracking-widest px-6 py-3 border border-gold/40 rounded-full hover:bg-gold/10 whitespace-nowrap"
          >
            Plan Your Event
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        <div className={styles.wrapper}>
          <div className={styles.inner} style={{ "--quantity": EXPERTISE.length } as React.CSSProperties}>

            {/* Center 3D Avatar */}
            <div className={`${styles.centerAvatar}`}>
              <img
                src="/images/waiter-3.png"
                alt="Master Chef"
                className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              />
            </div>

            {EXPERTISE.map((item, i) => {
              return (
                <div
                  key={item.slug}
                  className={`${styles.card} group cursor-pointer`}
                  style={{ "--index": i } as React.CSSProperties}
                >
                  <div className={styles.imgWrapper}>
                    <span className="text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-125 inline-block drop-shadow-md">
                      {item.emoji}
                    </span>
                  </div>
                  <div className={styles.titleWrapper}>
                    <p className="text-[9px] md:text-[10px] font-light text-cream/90 text-center tracking-[0.2em] uppercase leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
