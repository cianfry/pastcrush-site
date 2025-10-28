import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Clock, Users } from "lucide-react";

export default function About() {
  React.useEffect(() => {
    document.title = "About – Past Crush";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "pc-org-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Past Crush",
      "url": "https://pastcrush.shop",
      "logo": "https://pastcrush.shop/icon.png",
      "description": "Past Crush curates ancient jewelry with playful, modern storytelling — gifts from another lifetime.",
      "sameAs": []
    });
    const old = document.getElementById("pc-org-schema");
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById("pc-org-schema"); if (s) s.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <Heart className="w-12 h-12 text-[#C9A959] fill-[#C9A959]/20 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-5xl md:text-6xl font-serif text-[#111] mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-[#C9A959] mx-auto rounded-full" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="prose prose-lg max-w-none">
          <div className="text-xl md:text-2xl leading-relaxed text-gray-700 space-y-8 text-center md:text-left font-light">
            <p className="text-3xl font-serif text-[#111] mb-8">
              We're not historians —<br />we're <span className="text-[#C9A959]">romantics</span>.
            </p>
            <p>We believe every ancient jewel deserves another love story. By giving one of these treasures to someone special, you're keeping history alive, one heartbeat at a time.</p>
            <p>Think about it: that ring survived empires, wars, centuries of silence. It's seen more than any history book could ever tell. And now? It's ready to be part of <em>your</em> story.</p>
            <p className="italic text-gray-600">"Because love deserves more than next-day delivery."</p>
            <p>We're a small team of jewelry lovers, history nerds, and hopeless romantics who got tired of seeing ancient treasures collect dust in collections. These pieces were made to be worn, admired, passed down.</p>
            <p className="text-2xl font-serif text-[#111] pt-4">So we created Past Crush — where archaeology meets affection, and every piece gets a second chance to shine.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="grid md:grid-cols-3 gap-8 mt-32" aria-label="Our values">
          <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-100">
            <Heart className="w-10 h-10 text-[#C9A959] fill-[#C9A959]/20 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-serif text-[#111] mb-2">Emotional Connection</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Every piece carries stories that modern jewelry can only dream of telling.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-100">
            <Clock className="w-10 h-10 text-[#C9A959] mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-serif text-[#111] mb-2">Timeless Beauty</h3>
            <p className="text-sm text-gray-600 leading-relaxed">If it survived 2000 years, it's probably going to outlast your next relationship.</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-100">
            <Users className="w-10 h-10 text-[#C9A959] mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-serif text-[#111] mb-2">Sustainable Romance</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Giving ancient treasures another love story. One beautiful reuse at a time.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-[#C9A959]/5 to-gray-50 border border-[#C9A959]/20">
          <h2 className="text-3xl font-serif text-[#111] mb-6 text-center">What We Stand For</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            We champion the idea that meaningful gifts don't have to be brand new. Sometimes the most romantic gesture is choosing something that's already lived, loved, and survived — and giving it permission to do it all again.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-16 text-center">
          <p className="text-gray-500 italic">P.S. — Yes, we're a little obsessed. But can you blame us?</p>
          <Sparkles className="w-6 h-6 text-[#C9A959] mx-auto mt-4" aria-hidden="true" />
        </motion.div>
      </section>
    </div>
  );
}
