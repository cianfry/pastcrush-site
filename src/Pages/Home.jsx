import React, { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProductCard from "../components/showcase/ProductCard";
import CategoryFilter from "../components/showcase/CategoryFilter";
import WhySection from "../components/showcase/WhySection";
import Papa from "papaparse";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://feeds.pastcrush.shop/feed/proxy"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch CSV: ${response.status} ${response.statusText}`
          );
        }

        const csvText = await response.text();
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const CATEGORY_MAP = {
          ring: "Rings",
          rings: "Rings",
          bracelet: "Bracelets",
          bracelets: "Bracelets",
          pendant: "Pendants",
          pendants: "Pendants",
          amulet: "Amulets",
          amulets: "Amulets",
          earring: "Earrings",
          earrings: "Earrings",
          necklace: "Necklaces",
          necklaces: "Necklaces",
          brooch: "Brooches",
          brooches: "Brooches",
          bead: "Beads",
          beads: "Beads",
          seal: "Seals",
          seals: "Seals",
          coin: "Coins",
          coins: "Coins",
        };

        const data = parsed.data
          .map((p, i) => {
            const title = p.lot_title_en || p.title || "Untitled";
            const lowerTitle = title.toLowerCase();

            let detectedCategory = "Other";
            for (const key in CATEGORY_MAP) {
              if (lowerTitle.includes(key)) {
                detectedCategory = CATEGORY_MAP[key];
                break;
              }
            }

            return {
              id: p.lot_id || i,
              title,
              image_url: p.lot_images_image_1 || "",
              price: parseFloat(p.lot_last_bid_euro || 0),
              link: p.lot_url_en || "",
              ai_description: p.ai_description || "",
              source: p.source || "partnerize",
              category: detectedCategory,
            };
          })
          .filter(
            (p) =>
              p.price > 4 &&
              !/coral|corallo|amber|american turquoise|baroque/i.test(
                p.title
              )
          );

        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Build categories (Other last)
  const categories = useMemo(() => {
    const catSet = new Set(products.map((p) => p.category));
    const sorted = Array.from(catSet).filter((c) => c !== "Other").sort();
    return ["All", ...sorted, "Other"];
  }, [products]);

  // Define price ranges
  const priceRanges = ["All", "Under €100", "€100–€500", "Over €500"];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== "All") {
      filtered = filtered.filter((p) => {
        if (selectedPrice === "Under €100") return p.price < 100;
        if (selectedPrice === "€100–€500")
          return p.price >= 100 && p.price <= 500;
        if (selectedPrice === "Over €500") return p.price > 500;
        return true;
      });
    }

    return filtered;
  }, [products, selectedCategory, selectedPrice]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#F5F5F5] py-24 md:py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A2E] mb-6 leading-[1.1] tracking-tight">
              Archaeology, but<br />make it fashion.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
              Discover ancient jewelry that found its way to you.<br />
              <span className="text-base text-gray-400 italic mt-2 inline-block">
                (Probably older than your last relationship)
              </span>
            </p>
          </motion.div>

          <Button
            onClick={scrollToCollection}
            className="bg-[#E07856] hover:bg-[#d06846] text-white px-12 py-7 text-lg rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Shop Now
          </Button>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[32px] p-12 md:p-16 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-5xl mx-auto my-24"
      >
        <WhySection />
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


      {/* Collection */}
      <section
        id="collection"
        className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-4 tracking-tight">
            The Collection
          </h2>
          <p className="text-gray-500 text-lg font-medium mb-8">
            Because vintage is cute, but 2000 years old is iconic.
          </p>

{products.length > 0 && (
  <>
    {/* DESKTOP FILTERS */}
    <div className="hidden md:flex flex-wrap justify-center gap-4 mb-10">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <CategoryFilter
        categories={priceRanges}
        selectedCategory={selectedPrice}
        onSelectCategory={setSelectedPrice}
      />
    </div>

  {/* MOBILE FILTERS – custom styled (uses shadcn/ui) */}
  <div className="md:hidden mb-8 px-2 flex flex-col gap-3">
    {/* Category */}
    <div className="relative z-30">
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="h-11 rounded-full bg-white border border-gray-300 text-[#1A1A2E] font-semibold shadow-sm focus:ring-2 focus:ring-[#E07856] focus:border-[#E07856]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="z-50 rounded-2xl border border-gray-100 bg-white shadow-lg font-sans font-semibold text-[#1A1A2E]"
          position="item-aligned"
          sideOffset={0}>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat} className="py-2.5">
              {cat}
            </SelectItem>
          ))} 
        </SelectContent>
      </Select>
    </div>

    {/* Price */}
    <div className="relative z-30">
      <Select value={selectedPrice} onValueChange={setSelectedPrice}>
        <SelectTrigger className="h-11 rounded-full bg-white border border-gray-300 text-[#1A1A2E] font-semibold shadow-sm focus:ring-2 focus:ring-[#E07856] focus:border-[#E07856]">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent 
          className="z-50 rounded-2xl border border-gray-100 bg-white shadow-lg font-sans font-semibold text-[#1A1A2E]"
          position="item-aligned"
          sideOffset={0}>
          {priceRanges.map((p) => (
            <SelectItem key={p} value={p} className="py-2.5">
              {p}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>

  </>
)}

         
        </motion.div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-[#E07856] rounded-full animate-spin mb-4" />
            <p className="text-gray-500 italic">Excavating treasures...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg italic">
              No treasures in this category yet.<br />
              <span className="text-sm">
                Try exploring “All” to see our full collection.
              </span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
