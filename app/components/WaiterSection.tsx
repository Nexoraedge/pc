"use client";

import { motion } from "framer-motion";

export default function WaiterSection() {
  // USER: This is the placeholder for your custom floating circle and waiter code.
  // Please modify this component with your code.
  
  return (
    <section className="relative w-full py-24 min-h-[60vh] flex items-center justify-center bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-maroon/5 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center p-8 glass rounded-3xl max-w-2xl mx-auto border-maroon/20 border"
      >
        <h2 className="font-serif text-4xl text-maroon mb-4">
          Your Creative Vision Here
        </h2>
        <p className="text-foreground/80 mb-8">
          This is the placeholder for the floating circle and waiter component you mentioned. 
          Please replace the contents of this component (`app/components/WaiterSection.tsx`) with your custom code.
        </p>
        
        {/* Mock representation of the circle for now */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-48 h-48 rounded-full bg-maroon text-cream flex items-center justify-center shadow-2xl shadow-maroon/30"
        >
          <span className="font-serif text-xl">Waiter Graphic</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
