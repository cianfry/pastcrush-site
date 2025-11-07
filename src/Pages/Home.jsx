import React from "react";
import { Button } from "@/components/ui/button";
//import { Switch } from "@/components/ui/switch";
//import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
//import { base44 } from "@/api/base44Client";
//import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/showcase/ProductCard";
import CategoryFilter from "../components/showcase/CategoryFilter";
import WhySection from "../components/showcase/WhySection";

export default function Home() {
  const [emailEnabled, setEmailEnabled] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const products = []
  const isLoading = false

  // const { data: products = [], isLoading } = useQuery({
  //    queryKey: ['products'],
  //    queryFn: () => base44.entities.Product.list('-created_date', 100),
  //  });

  const handleEmailSubmit = async (e) => {
    // e.preventDefault();
    // if (email && !isSubmitting) {
    //   setIsSubmitting(true);
    //   try {
    //     await base44.integrations.Core.SendEmail({
    //       to: "hello@pastcrush.com",
    //       subject: "New Newsletter Signup! 💍",
    //       body: `Someone wants to hear from you: ${email}\n\nThey're clearly someone with excellent taste in ancient jewelry.`
    //     });
    //     alert("🎉 Welcome to the Past Crush family! We'll keep you updated on treasures that survived empires.");
    //     setEmail("");
    //     setEmailEnabled(false);
    //   } catch (error) {
    //     alert("✨ Your taste is impeccable! We've noted your interest.");
    //     setEmail("");
    //     setEmailEnabled(false);
    //   }
    //   setIsSubmitting(false);
    // }
  };

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Extract categories from products
  const categories = React.useMemo(() => {
    const cats = new Set(products.map(p => p.title.split(' ')[0]).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = React.useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.title.toLowerCase().includes(selectedCategory.toLowerCase()));
  }, [products, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F5F5F5] py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A2E] mb-6 leading-[1.1] tracking-tight">
              Archaeology, but<br />make it fashion.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
              Discover ancient jewelry that found its way to you.<br/>
              <span className="text-base text-gray-400 italic mt-2 inline-block">
                (Probably older than your last relationship)
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={scrollToCollection}
              className="bg-[#E07856] hover:bg-[#d06846] text-white px-12 py-7 text-lg rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Jewelry */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button 
              onClick={scrollToCollection}
              className="w-full bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-12 flex items-center justify-center min-h-[320px] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="text-9xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {/*IMAGE HERE */}
              </div>
            </button>
            <div className="px-2">
              <h2 className="text-3xl font-black text-[#1A1A2E] mb-3 tracking-tight">More Than Metal</h2>
              <p className="text-[#1A1A2E]/70 text-lg font-medium leading-relaxed">
                Each piece carries stories<br />that modern jewelry can only<br />dream of.
              </p>
            </div>
          </motion.div>

          {/* What's Old is New */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={scrollToCollection}
              className="w-full bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-12 flex items-center justify-center min-h-[320px] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex gap-6 items-center">
                <div className="text-8xl group-hover:rotate-12 transition-transform duration-300">   {/*IMAGE HERE */}</div>
                <div className="text-8xl group-hover:-rotate-12 transition-transform duration-300">   {/*IMAGE HERE */}</div>
              </div>
            </button>
            <div className="px-2">
              <h2 className="text-3xl font-black text-[#1A1A2E] mb-3 tracking-tight">Time-Tested Style</h2>
              <p className="text-[#1A1A2E]/70 text-lg font-medium leading-relaxed">
                If it survived 2000 years, it's<br />probably going to outlast fast<br />fashion.
              </p>
            </div>
          </motion.div>

          {/* About Us */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to={createPageUrl("About")}
              className="block w-full bg-gradient-to-br from-[#4FC3B5] to-[#3ba89c] rounded-[32px] p-12 flex items-center justify-center min-h-[320px] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <div className="text-9xl group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300">   {/*IMAGE HERE */}</div>
            </Link>
            <div className="px-2">
              <h2 className="text-3xl font-black text-[#1A1A2E] mb-3 tracking-tight">Romantic Reuse</h2>
              <p className="text-[#1A1A2E]/70 text-lg font-medium leading-relaxed">
                Give ancient treasures<br />another love story.<br />Sustainability meets sentimentality.
              </p>
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-[#E07856] to-[#d06846] rounded-[32px] p-10 flex flex-col justify-between min-h-[320px] shadow-lg hover:shadow-2xl transition-all duration-300">
              <div>  
               {/* <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Be the First to Know</h2>
                <p className="text-white/80 text-sm mb-6 italic">When treasures arrive (they take their time)</p>
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                  <span className="text-white text-lg font-semibold">Email me</span>
                 <Switch 
                    checked={emailEnabled}
                    onCheckedChange={setEmailEnabled}
                    className="data-[state=checked]:bg-[#4FC3B5] scale-125"
                  /> 
                </div>*/}
              </div>
              
              {emailEnabled && (
                <motion.form 
                  onSubmit={handleEmailSubmit} 
                  className="mt-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#4FC3B5] border-none text-white placeholder:text-white/60 rounded-2xl h-16 px-6 text-lg font-medium focus:ring-2 focus:ring-white/30"
                    required
                    disabled={isSubmitting}
                  /> */}
                  {isSubmitting && (
                    <p className="text-white/70 text-xs mt-2 text-center italic">Sending carrier pigeon...</p>
                  )}
                </motion.form>
              )}
            </div>
           <div className="px-2">
              <h2 className="text-3xl font-black text-[#1A1A2E] mb-3 tracking-tight">About Us</h2>
              <p className="text-[#1A1A2E]/70 text-lg font-medium leading-relaxed">
                Give ancient treasures<br />another love story.<br />Sustainability meets sentimentality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Collection Section */}
      <section id="collection" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">The Collection</h2>
          <p className="text-gray-500 text-lg font-medium mb-8">Curated pieces with centuries of stories</p>
          
          {products.length > 0 && (
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          )}
        </motion.div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-[#E07856] rounded-full animate-spin mb-4" />
            <p className="text-gray-500 italic">Excavating treasures...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-[32px] p-16 text-center shadow-lg max-w-3xl mx-auto">
            <div className="text-6xl mb-6 animate-bounce">⏳</div>
            <p className="text-gray-600 mb-3 text-xl font-semibold">Our treasures are being excavated...</p>
            <p className="text-base text-gray-500 font-medium mb-6">
              We're currently curating authentic ancient jewelry for modern romantics.
            </p>
            <p className="text-sm text-gray-400 italic">
              (They've waited centuries. A few more days won't hurt.)
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg italic">
              No treasures in this category yet.<br />
              <span className="text-sm">Try exploring "All" to see our full collection.</span>
            </p>
          </div>
        )}
      </section>

      {/* Why Section */}
      {products.length > 0 && <WhySection />}
    </div>
  );
}