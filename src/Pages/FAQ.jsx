import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, ShoppingBag, Info, Coins, HeartHandshake } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <section className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <HelpCircle className="w-16 h-16 text-[#E07856] mx-auto" strokeWidth={1.5} />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-black text-[#1A1A2E] mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-gray-500 italic max-w-2xl mx-auto">
            Ancient jewelry, modern questions — let’s dig in.
          </p>

          <div className="w-32 h-2 bg-gradient-to-r from-[#E07856] to-[#4FC3B5] mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* FAQ Blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-10"
        >
          {/* How PastCrush Works */}
          <div className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-all duration-300">
                       <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mb-6 flex flex-col md:flex-row items-start md:items-center gap-3">
              <Info className="w-10 h-10 md:w-8 md:h-8 text-[#E07856] flex-shrink-0" strokeWidth={1.5} />
              <span>How does PastCrush actually work?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              For now, all treasures displayed on PastCrush are carefully curated from{" "}
              <span className="text-[#E07856] font-semibold">Catawiki</span> — a trusted
              international auction platform specializing in collectible and historical items.
              Every listing you see here is real, authenticated, and available for auction on
              Catawiki.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed font-medium">
              Think of PastCrush as your stylish archaeologist friend — we dig through
              countless listings and surface only the timeless pieces worth crushing on.
            </p>
          </div>

          {/* Buying Process */}
          <div className="bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-6 flex flex-col md:flex-row items-start md:items-center gap-3">
             <ShoppingBag className="w-10 h-10 md:w-8 md:h-8  flex-shrink-0" strokeWidth={1.5} />

              <span>How do I buy something I like?</span>
            </h2>
            <p className="text-lg leading-relaxed font-medium">
              Each item on PastCrush links directly to its Catawiki auction. When you click{" "}
              <span className="italic">“View on Catawiki”</span>, you’ll be redirected to the
              official listing where you can place your bid.
            </p>
            <p className="mt-4 text-lg leading-relaxed font-medium">
              Catawiki handles all transactions, shipping, and authentication — we just make
              sure you find the most irresistible ancient pieces faster (and with better taste).
            </p>
          </div>

          {/* Auctions */}
          <div className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-all duration-300">
             <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mb-6 flex flex-col md:flex-row items-start md:items-center gap-3">
            <Coins className="w-10 h-10 md:w-8 md:h-8 text-[#E07856] flex-shrink-0" strokeWidth={1.5} />
            <span>Wait, what’s the deal with auctions?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Every Catawiki item runs on an auction system — meaning you can{" "}
              <span className="font-semibold text-[#E07856]">bid</span> on it for a set period.
              If you win, it’s yours (congratulations, modern pharaoh 👑).
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed font-medium">
              The price you see here on PastCrush is the current bid or last known winning bid.
              You can follow the link to join the live auction and make your own offer.
            </p>
          </div>

        {/* Commission / Support */}
        <div className="bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-white">
         <h2 className="text-3xl md:text-4xl font-black mb-6 flex flex-col md:flex-row items-start md:items-center gap-3">        
            <HeartHandshake className="w-10 h-10 md:w-8 md:h-8  flex-shrink-0" strokeWidth={1.5} />

            <span>Do you take a commission?</span>
        </h2>
        <p className="text-lg leading-relaxed font-medium">
            We do — but not from you. PastCrush receives a small commission directly from{" "}
            <span className="font-semibold">Catawiki</span> whenever one of our featured pieces finds
            its next owner through our site.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-medium">
            For you, the collector, nothing changes:{" "}
            <span className="font-semibold">the auction price stays exactly the same</span> whether you
            bid through PastCrush or directly on Catawiki.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-medium">
            That small partnership commission simply helps{" "}
            <span className="font-semibold">PastCrush grow</span> — supporting this emerging project so
            we can keep unearthing treasures, forming new collaborations, and one day... host our own
            curated marketplace of ancient jewelry.
        </p>
        </div>


          {/* Future Plans */}
          <div className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A2E] mb-6 flex flex-col md:flex-row items-start md:items-center gap-3">        
              <Info className="w-10 h-10 md:w-8 md:h-8 text-[#4FC3B5]  flex-shrink-0" strokeWidth={1.5} />

              <span>What’s next for PastCrush?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Catawiki is just the beginning. We’re already talking to other museums, dealers,
              and archaeologists to expand the collection and bring you unique, verified
              ancient jewelry pieces from around the world.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed font-medium">
              Our goal? To make history feel wearable and personal — and to bring you exclusive pieces, the kind that make museums a little jealous.
            </p>
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pt-16"
        >
          <p className="text-gray-500 italic text-lg max-w-2xl mx-auto">
            Still got questions? Send us a DM on{" "}
            <a
              href="https://www.instagram.com/pastcrush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07856] font-medium hover:underline"
            >
              Instagram
            </a>{" "}
            — we’re much friendlier than a museum guard.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
