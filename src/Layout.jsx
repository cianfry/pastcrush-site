import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close the mobile panel when route changes (optional if you control routes elsewhere)
  React.useEffect(() => {
    setMobileOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; color: #1A1A2E; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: -0.02em; }
        * { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top row */}
          <div className="flex items-center justify-between py-3">
            {/* Logo + Brand */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 text-2xl font-black text-[#1A1A2E] tracking-tight hover:text-[#E07856] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/logo_nav.png"
                alt="PastCrush logo"
                className="w-[52px] h-[52px] object-contain"
              />
              <span>PastCrush</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-10">
              <Link
                to={createPageUrl("Home")}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                  currentPageName === "Home"
                    ? "text-[#E07856]"
                    : "text-gray-500 hover:text-[#1A1A2E]"
                }`}
              >
                Shop
              </Link>
              <Link
                to={createPageUrl("About")}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                  currentPageName === "About"
                    ? "text-[#E07856]"
                    : "text-gray-500 hover:text-[#1A1A2E]"
                }`}
              >
                Our Story
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                  currentPageName === "FAQ"
                    ? "text-[#E07856]"
                    : "text-gray-500 hover:text-[#1A1A2E]"
                }`}
              >
                FAQ
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center rounded-xl p-2 text-[#1A1A2E] hover:text-[#E07856] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E07856]/40"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile slide-down panel */}
          <div
            className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-gray-200 ${
              mobileOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col py-2">
              <Link
                to={createPageUrl("Home")}
                onClick={() => setMobileOpen(false)}
                className={`px-1 py-3 text-base font-semibold tracking-wide ${
                  currentPageName === "Home"
                    ? "text-[#E07856]"
                    : "text-gray-600 hover:text-[#1A1A2E]"
                }`}
              >
                Shop
              </Link>
              <Link
                to={createPageUrl("About")}
                onClick={() => setMobileOpen(false)}
                className={`px-1 py-3 text-base font-semibold tracking-wide ${
                  currentPageName === "About"
                    ? "text-[#E07856]"
                    : "text-gray-600 hover:text-[#1A1A2E]"
                }`}
              >
                Our Story
              </Link>
              <Link
                to={createPageUrl("FAQ")}
                onClick={() => setMobileOpen(false)}
                className={`px-1 py-3 text-base font-semibold tracking-wide ${
                  currentPageName === "FAQ"
                    ? "text-[#E07856]"
                    : "text-gray-600 hover:text-[#1A1A2E]"
                }`}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
              <p className="text-sm text-gray-400 min-h-[20px]">
                We display publicly available listings from Catawiki auctions. <br />
                All images and data © Catawiki. Updated responsibly for your browsing pleasure.
              </p>
          </div>

          {/* Instagram CTA */}
          <div className="flex justify-center mb-6">
            <a
              href="https://www.instagram.com/pastcrush"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#E07856] to-[#4FC3B5] text-white px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {/* Instagram icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm4.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
              <span className="font-semibold tracking-wide text-sm">
                Follow us on Instagram
              </span>
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400 tracking-wide">
              © 2025 Past Crush · Making archaeology fashionable
            </p>
            <p className="text-[10px] text-gray-400 italic">
              Bringing together old souls and ancient gold since 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
