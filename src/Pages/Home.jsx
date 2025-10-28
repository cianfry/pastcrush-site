import React from "react";
import { Sparkles } from "lucide-react";
import ProductCard from "../components/showcase/ProductCard";
import HeroSection from "../components/showcase/HeroSection";
import WhySection from "../components/showcase/WhySection";
import LoadingState from "../components/showcase/LoadingState";
import CategoryFilter from "../components/showcase/CategoryFilter";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FEED_URL =
  window.__PASTCRUSH_API__ ||
  "https://raw.githubusercontent.com/cianfry/timeless-scraper/refs/heads/main/catawiki_auctions_ai.json";

const LS_KEY_ITEMS = "pastcrush_products";
const LS_KEY_LAST_FETCH = "pastcrush_last_fetch";
const SIX_HOURS = 6 * 60 * 60 * 1000;

const norm = (s) => (s || "").trim();
const toTitle = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const normCategory = (raw) => {
  const c = norm(raw).toLowerCase();
  if (!c) return "Other";
  const map = {
    ring: "Rings",
    rings: "Rings",
    bracelet: "Bracelets",
    bracelets: "Bracelets",
    necklace: "Necklaces",
    necklaces: "Necklaces",
    amulet: "Amulets",
    amulets: "Amulets",
    pendant: "Necklaces",
    coin: "Coins",
    coins: "Coins",
    artifact: "Other",
    statue: "Other",
    other: "Other",
  };
  return map[c] || toTitle(c);
};

function shapeItem(item) {
  const id = item.item_url || item.url || `${item.title}-${item.image}-${Math.random()}`;
  return {
    id,
    title: norm(item.title_en || item.title),
    image_url: norm(item.image),
    price: norm(item.price),
    link: norm(item.item_url || item.url),
    ai_description: norm(item.description),
    category: normCategory(item.category),
    fetched_at: new Date().toISOString(),
  };
}

function dedupeById(items) {
  const seen = new Set();
  return items.filter((it) => (seen.has(it.id) ? false : (seen.add(it.id), true)));
}

async function fetchFeed(signal) {
  const res = await fetch(FEED_URL, { signal, mode: "cors", cache: "no-store" });
  if (!res.ok) throw new Error(`Feed HTTP ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return dedupeById(data.map(shapeItem));
}

export default function Home() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const [statusMessage, setStatusMessage] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const collectionRef = React.useRef(null);

  React.useEffect(() => {
    try {
      const cached = localStorage.getItem(LS_KEY_ITEMS);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length) {
          setProducts(parsed);
          setIsInitialLoad(false);
        }
      }
    } catch (e) {
      console.warn("Cache parse failed", e);
    }
  }, []);

  const updateProducts = React.useCallback(async () => {
    setIsRefreshing(true);
    setStatusMessage("✨ Searching through centuries...");

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort("timeout"), 60000);

    try {
      const fresh = await fetchFeed(ctrl.signal);
      setProducts(fresh);
      localStorage.setItem(LS_KEY_ITEMS, JSON.stringify(fresh));
      localStorage.setItem(LS_KEY_LAST_FETCH, Date.now().toString());
      setStatusMessage(null);
    } catch (err) {
      console.error("Feed fetch failed:", err);
      setStatusMessage("💔 Something went wrong. We'll try again soon.");
      setTimeout(() => setStatusMessage(null), 5000);
      try {
        const cached = JSON.parse(localStorage.getItem(LS_KEY_ITEMS) || "[]");
        setProducts(Array.isArray(cached) ? cached : []);
      } catch {
        setProducts([]);
      }
    } finally {
      clearTimeout(t);
      setIsRefreshing(false);
      setIsInitialLoad(false);
    }
  }, []);

  React.useEffect(() => {
    const last = parseInt(localStorage.getItem(LS_KEY_LAST_FETCH) || "0", 10);
    const now = Date.now();
    if (!last || now - last > SIX_HOURS) {
      updateProducts();
    } else {
      const remain = SIX_HOURS - (now - last);
      const first = setTimeout(updateProducts, remain);
      const interval = setInterval(updateProducts, SIX_HOURS);
      return () => { clearTimeout(first); clearInterval(interval); };
    }
  }, [updateProducts]);

  const { categories, filtered } = React.useMemo(() => {
    const counts = products.reduce((acc, p) => {
      const c = p.category || "Other";
      acc[c] = (acc[c] || 0) + 1;
      return acc;
    }, {});
    const cats = ["All", ...Object.keys(counts).sort()];
    const filtered = selectedCategory === "All" ? products : products.filter((p) => (p.category || "Other") === selectedCategory);
    return { categories: cats, filtered };
  }, [products, selectedCategory]);

  const scrollToCollection = () => collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (isInitialLoad && products.length === 0) return <LoadingState />;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onScrollToCollection={scrollToCollection} />
      <WhySection />

      {statusMessage && (
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Alert className="border-[#C9A959] bg-[#C9A959]/5 rounded-2xl">
            <Sparkles className="w-4 h-4 text-[#C9A959]" />
            <AlertDescription className="text-gray-700">
              {statusMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}

      <section ref={collectionRef} className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#111] mb-4">The Collection</h2>
          <p className="text-gray-500 mb-12 text-lg">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} waiting for a second chance at love
            {selectedCategory !== "All" && ` · ${selectedCategory}`}
            {isRefreshing ? " · refreshing…" : ""}
          </p>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <Sparkles className="w-16 h-16 text-gray-200 mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-gray-400 mb-3">
              {selectedCategory === "All"
                ? "The vault is being restocked..."
                : `No ${selectedCategory.toLowerCase()} right now`}
            </h3>
            <p className="text-gray-400 italic">
              {selectedCategory === "All" ? "Ancient treasures take their time." : "Maybe they're off fighting curses."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, index) => (
              <ProductCard key={product.id || product.link || index} product={product} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
