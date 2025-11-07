import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ onScrollToCollection }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Gem className="w-16 h-16 text-[#C9A959] fill-[#C9A959]/20" />
              <Sparkles className="w-6 h-6 text-[#C9A959] absolute -top-1 -right-1" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif text-[#111] mb-8 leading-tight">
            Some love stories<br />
            <span className="text-[#C9A959]">never age.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            Discover ancient jewelry that found its way to you.
            <br />
            <span className="text-base text-gray-500 italic mt-2 block">
              (Probably older than your last relationship)
            </span>
          </p>

          <Button
            onClick={onScrollToCollection}
            className="bg-[#C9A959] hover:bg-[#b89640] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            See What Survived the Centuries
          </Button>

          {/* Subtle decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-xs mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-[#C9A959]/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A959] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A959] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}