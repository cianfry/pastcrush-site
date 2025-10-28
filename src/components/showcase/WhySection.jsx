import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Sparkles } from 'lucide-react';

export default function WhySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="why-heading">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 id="why-heading" className="text-4xl md:text-5xl font-serif text-[#111] mb-6">
            Why Past Crush Exists
          </h2>
          
          <div className="w-16 h-1 bg-[#C9A959] mx-auto mb-12 rounded-full" aria-hidden="true" />

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 font-light">
            We love jewelry with baggage. The kind that's seen empires rise and fall, yet still looks great on a night out. 
            Every piece you'll find here once belonged to someone's past — and it's ready for a second crush.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Heart className="w-10 h-10 text-[#C9A959] mx-auto mb-4 fill-[#C9A959]/20" aria-hidden="true" />
              <h3 className="text-lg font-serif text-[#111] mb-2">More Than Metal</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each piece carries stories that modern jewelry can only dream of.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Clock className="w-10 h-10 text-[#C9A959] mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-serif text-[#111] mb-2">Time-Tested Style</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If it survived 2000 years, it's probably going to outlast fast fashion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Sparkles className="w-10 h-10 text-[#C9A959] mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-lg font-serif text-[#111] mb-2">Romantic Reuse</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Give ancient treasures another love story. Sustainability meets sentimentality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
