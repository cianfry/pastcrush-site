import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        :root { --gold: #C9A959; --black: #111111; }
        body { font-family: 'Inter', sans-serif; color: var(--black); background-color: #ffffff; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 3px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #b89640; }
        * { transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out; }
      `}</style>

      <header>
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100" aria-label="Main navigation">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C9A959] rounded-md">
            <Heart className="w-5 h-5 text-[#C9A959] group-hover:fill-[#C9A959] transition-all duration-300" aria-hidden="true" />
            <div>
              <span className="text-xl font-serif text-[#111] tracking-tight block leading-none">Past Crush</span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase">Ancient Jewelry for Modern Hearts</span>
            </div>
          </Link>

          <div className="flex items-center gap-10">
            <Link to={createPageUrl("Home")} className={`text-sm font-medium tracking-wide transition-all duration-300 rounded-md ${currentPageName === "Home" ? "text-[#111]" : "text-gray-400 hover:text-[#111]"}`}>Collection</Link>
            <Link to={createPageUrl("About")} className={`text-sm font-medium tracking-wide transition-all duration-300 rounded-md ${currentPageName === "About" ? "text-[#111]" : "text-gray-400 hover:text-[#111]"}`}>Our Story</Link>
          </div>
        </nav>
      </header>

      <main id="main-content" className="pt-24 flex-1">{children}</main>

      <footer className="border-t border-gray-100 mt-32 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C9A959] fill-[#C9A959]" aria-hidden="true" />
              <span className="text-sm text-gray-600 font-serif">Because love deserves more than next-day delivery.</span>
            </div>
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              We display publicly available listings from Catawiki auctions. All images and data © Catawiki. Updated responsibly every 6 hours for your browsing pleasure.
            </p>
            <p className="text-xs text-gray-500 pt-4">© {new Date().getFullYear()} Past Crush · Timeless treasures, modern hearts</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
