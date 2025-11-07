
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Users, Zap, RefreshCw, Gem, Compass } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <Compass className="w-16 h-16 text-[#E07856] mx-auto" strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-black text-[#1A1A2E] mb-6 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-gray-500 italic max-w-2xl mx-auto">
            We're not historians. We're hopeless romantics with a thing for ancient bling.
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#E07856] to-[#4FC3B5] mx-auto mt-8 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-10"
        >
          <div className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-black text-[#1A1A2E] mb-8 tracking-tight">
              Making history's treasures accessible for all
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                We believe ancient jewelry shouldn't be locked away in museums or private collections gathering dust. 
                These pieces were created to be <span className="text-[#E07856] font-bold">worn, admired, and loved</span>.
              </p>

              <p>
                Think about it: that ring survived empires, wars, centuries of silence. It's seen more drama than any reality TV show. 
                And now? It's ready to be part of <em>your</em> story.
              </p>

              <p>
                Past Crush curates authentic ancient artifacts and connects them with people who appreciate the weight of history 
                (and the lightness of not taking ourselves too seriously).
              </p>

              <p className="text-[#E07856] font-black text-2xl pt-4">
                Archaeology, but make it fashion.
              </p>

              <p className="text-sm text-gray-500 italic pt-2">
                Because "vintage" is overrated when you can go ancient.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Shield className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Authentic</h3>
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                Every piece is genuinely ancient. No replicas, no fakes. Just real artifacts with real stories to tell.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Users className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Accessible</h3>
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                History shouldn't require a PhD or a trust fund. We make ancient treasures available to everyone.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Zap className="w-12 h-12 text-white mb-4 fill-white/20" strokeWidth={1.5} />
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Modern</h3>
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                Ancient doesn't mean outdated. These pieces are timeless — literally survived the test of time.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <RefreshCw className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Sustainable</h3>
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                The ultimate recycling program. Giving 2,000-year-old treasures another chance to shine.
              </p>
            </motion.div>
          </div>

          {/* Mission */}
          <motion.div 
            className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
            >
              <Sparkles className="w-12 h-12 text-[#E07856] mx-auto mb-6" strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl font-black text-[#1A1A2E] mb-8 text-center tracking-tight">Our Mission</h2>
            <p className="text-2xl text-gray-600 leading-relaxed text-center font-medium mb-6">
              We champion the idea that meaningful gifts don't have to be brand new. Sometimes the most romantic gesture is choosing something that's already lived, loved, and survived — and giving it permission to do it all again.
            </p>
            <p className="text-base text-gray-500 text-center italic">
              Because the best stories are the ones that span millennia.
            </p>
          </motion.div>

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center py-8"
          >
            <p className="text-gray-500 italic text-lg mb-4">
              P.S. — Yes, we're a little obsessed with old things.<br />
              But can you blame us? They've earned it.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
