import React from "react";
import {
  Sparkles,
  Shield,
  Users,
  Zap,
  RefreshCw,
  Compass
} from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";

function useIsClient() {
  const [isClient, setClient] = useState(false);
  useEffect(() => setClient(true), []);
  return isClient;
}

function MotionWrapper({ children, delay = 0, x = 0, y = 20 }) {
  const isClient = useIsClient();

  if (!isClient) {
    return <div>{children}</div>; // SSR fallback, no animation
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, x, y }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <section className="max-w-5xl mx-auto px-6 py-24">

        {/* TITLE */}
        <MotionWrapper delay={0.1} y={30}>
          <div className="text-center mb-20">
            <MotionWrapper delay={0.2} x={0}>
              <div className="inline-block mb-6">
                <Compass
                  className="w-16 h-16 text-[#E07856] mx-auto"
                  strokeWidth={1.5}
                />
              </div>
            </MotionWrapper>

            <h1 className="text-6xl md:text-7xl font-black text-[#1A1A2E] mb-6 tracking-tight">
              Our Story
            </h1>

            <p className="text-xl text-gray-500 italic max-w-2xl mx-auto">
              We're not historians. We're hopeless romantics with a thing for ancient bling.
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-[#E07856] to-[#4FC3B5] mx-auto mt-8 rounded-full" />
          </div>
        </MotionWrapper>

        {/* MAIN CONTENT */}
        <MotionWrapper delay={0.3}>
          <div className="space-y-10">

            <div className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg">
              <h2 className="text-4xl font-black text-[#1A1A2E] mb-8 tracking-tight">
                Making history's treasures accessible for all
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  We believe ancient jewelry shouldn't be locked away in museums...
                </p>
                <p>
                  Think about it: that ring survived empires…
                </p>
                <p>
                  Past Crush curates authentic ancient artifacts…
                </p>
                <p className="text-[#E07856] font-black text-2xl pt-4">
                  Archaeology, but make it fashion.
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              <MotionWrapper delay={0.4} x={-20}>
                <div className="bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-10 shadow-lg">
                  <Shield className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Authentic</h3>
                  <p className="text-white/90 font-medium text-lg leading-relaxed">
                    Every piece is genuinely ancient…
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.5} x={20}>
                <div className="bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-10 shadow-lg">
                  <Users className="w-12 h-12 text-white mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Accessible</h3>
                  <p className="text-white/90 font-medium text-lg leading-relaxed">
                    History shouldn't require a PhD…
                  </p>
                </div>
              </MotionWrapper>

            </div>

          </div>
        </MotionWrapper>

      </section>
    </div>
  );
}
