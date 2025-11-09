import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Clock, Sparkles } from 'lucide-react';

export default function WhySection() {
  return (
    <section >
    <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-8 tracking-tight text-center">
        Why Past Crush Exists
      </h2>

      <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto text-center">
        <p>
          We love jewelry with <span className="text-[#E07856] font-bold">baggage</span> — the kind that’s
          survived centuries of empires, banquets, heartbreaks, and still looks incredible on a Friday night.
        </p>

        <p>
          Every artifact we find once belonged to someone’s past. Maybe it sealed a love letter. Maybe it
          crossed an empire. Now it’s ready for its next chapter — <em>with you.</em>
        </p>

        <p>
          Past Crush exists to give ancient treasures a second crush: connecting history’s craftsmanship
          with today’s hearts and wardrobes.
        </p>

        <p className="text-[#E07856] font-black text-2xl pt-4">
          Archaeology, but make it fashion.
        </p>

        <p className="text-sm text-gray-500 italic pt-2">
          Because vintage is cute, but ancient? That’s iconic.
        </p>
      </div>
    </section>
  );
}