import React from 'react';
import { motion } from 'framer-motion';
import { Amphora, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ onScrollToCollection }) {
  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
            className="inline-block mb-6"
            aria-hidden="true"
          >
            <div className="relative">
              <Amphora className="w-16 h-16 text-[#C9A959] fill-[#C9A959]/20" />
              <Sparkles className="w-6 h-6 text-[#C9A959] absolute -top-1 -right-1" />
            </div>
          </motion.div>

          <h1 id="hero-heading" className="text-5xl md:text-7xl font-serif text-[#111] mb-8 leading-tight">
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
            type="button"
            onClick={onScrollToCollection}
            aria-label="Scroll to collection"
            className="bg-[#C9A959] hover:bg-[#b89640] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            See What Survived the Centuries
          </Button>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xs mx-auto mt-16 h-px bg-gradient-to-r from-transparent via-[#C9A959]/30 to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C9A959] opacity-[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C9A959] opacity-[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  );
}
