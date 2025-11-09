import React, { useEffect, useState, useMemo } from "react";
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
import Papa from "papaparse"; // lightweight CSV parser

export default function Home() {
  const [emailEnabled, setEmailEnabled] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

   useEffect(() => {
    async function loadProducts() {
      try {
        // Fetch the CSV file from /public
        const response = await fetch("/products.csv");
        const csvText = await response.text();

        // Parse CSV into JSON
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const data = parsed.data.map((p, i) => ({
          id: p.lot_id,
          title: p.lot_title_en,
          image_url: p.lot_images_image_1,
          price: p.lot_last_bid_euro,
          link: p.lot_url_en,
          ai_description: p.ai_description,
          source: p.source || "manual",
        })).filter((p) => p.price && p.price > 4 &&
            // exclude coral/corallo/amber titles
             !/coral|corallo|amber|american turquoise/i.test(p.title || ""));

        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);


  // Extract categories from products
  // const categories = React.useMemo(() => {
  //   const cats = new Set(products.map(p => p.title.split(' ')[0]).filter(Boolean));
  //   return ['All', ...Array.from(cats)];
  // }, [products]);
const categories = [];
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

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-5xl mx-auto my-24"
>
  <motion.div
    initial={{ rotate: -180, scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
    className="inline-block mb-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-[#E07856] mx-auto"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9l10.5-3m0 0L21 9m-1.5-3l-1.5 12m0 0H6m12 0L9 9m0 0L7.5 21"
      />
    </svg>
  </motion.div>

   <WhySection/>
</motion.div>


{/* Grid Section */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-10">

    {/* 1. More Than Metal */}
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <button
        onClick={scrollToCollection}
        className="relative group w-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
      >
        <div
          className="h-[340px] bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/ring1.PNG')" }}
        ></div>

        {/* keep overlay always visible, but soften opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/20 to-transparent transition-opacity duration-500 rounded-[32px]" />

        {/* text always visible */}
        <div className="absolute bottom-6 left-6 text-left text-white transition-all duration-500">
        <h2 className="text-3xl font-black mb-2">More Than Metal</h2>
        <p className="text-white/80 text-base font-medium leading-relaxed min-h-[48px]">
        Each piece carries stories that modern jewelry can only dream of.
        </p>
        </div>

      </button>
    </motion.div>

    {/* 2. Time-Tested Style */}
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <button
        onClick={scrollToCollection}
        className="relative group w-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
      >
        <div
          className="h-[340px] bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/pendant2.PNG')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/20 to-transparent transition-opacity duration-500 rounded-[32px]" />

        <div className="absolute bottom-6 left-6 text-left text-white transition-all duration-500">
          <h2 className="text-3xl font-black mb-2">Time-Tested Style</h2>
          <p className="text-white/80 text-base font-medium leading-relaxed">
            If it survived 2000 years, it's probably going to outlast fast fashion.
          </p>
        </div>
      </button>
    </motion.div>

    {/* 3. Romantic Reuse */}
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
    <button
        onClick={scrollToCollection}
        className="relative group w-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
      >
      <div
        className="h-[340px] bg-cover bg-center transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: "url('/bracelet3.PNG')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/20 to-transparent transition-opacity duration-500 rounded-[32px]" />

      <div className="absolute bottom-6 left-6 text-left text-white transition-all duration-500">
        <h2 className="text-3xl font-black mb-2">Romantic Reuse</h2>
        <p className="text-white/80 text-base font-medium leading-relaxed">
          Give ancient treasures another love story.<br />Sustainability meets sentimentality.
        </p>
      </div>
      </button>
    </motion.div>

    {/* 4. For Romantics, Not Historians */}
    <motion.div
      className="space-y-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <button
        onClick={scrollToCollection}
        className="relative group w-full rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
      >
        <div
          className="h-[340px] bg-cover bg-center transition-all duration-700 group-hover:scale-110"
          style={{ backgroundImage: "url('/necklace4.PNG')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/20 to-transparent transition-opacity duration-500 rounded-[32px]" />

        <div className="absolute bottom-6 left-6 text-left text-white transition-all duration-500">
          <h2 className="text-3xl font-black mb-2">For Romantics, Not Historians</h2>
          <p className="text-white/80 text-base font-medium leading-relaxed">
            You don’t need a PhD to wear history — just a crush on timeless things.
          </p>
        </div>
      </button>
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
    </div>
  );
}