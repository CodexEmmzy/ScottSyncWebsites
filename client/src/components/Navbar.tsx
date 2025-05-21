import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#18181b]/95 shadow-creative" : "bg-transparent"
      }`}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-creative text-creative-yellow drop-shadow-lg tracking-tight">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="8"
                  fill="#FACC15"
                />
                <path
                  d="M10 22L22 10M10 10H22V22"
                  stroke="#18181b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ScottSync
            </a>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services">
              <a className="flex items-center gap-2 text-white/90 hover:text-creative-yellow font-medium transition duration-150">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                </svg>
                Services
              </a>
            </Link>
            <a
              href="#portfolio"
              className="flex items-center gap-2 text-white/90 hover:text-creative-yellow font-medium transition duration-150"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M16 3v4M8 3v4" />
              </svg>
              Portfolio
            </a>
            <Link href="/about">
              <a
                href="#about"
                className="flex items-center gap-2 text-white/90 hover:text-creative-yellow font-medium transition duration-150"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a7.5 7.5 0 0113 0" />
                </svg>
                About
              </a>
            </Link>
            <a
              href="#testimonials"
              className="flex items-center gap-2 text-white/90 hover:text-creative-yellow font-medium transition duration-150"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                <path d="M15 3h-6a2 2 0 00-2 2v3a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
              Testimonials
            </a>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-full bg-creative-yellow text-[#18181b] font-bold shadow-creative hover:bg-yellow-400 transition-colors text-base"
            >
              Book My Growth Call
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-creative-yellow hover:text-yellow-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-[#18181b] rounded-xl shadow-creative mt-2">
            <Link href="/services">
              <a
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-creative-yellow hover:bg-[#232326] transition"
                onClick={handleLinkClick}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                </svg>
                Services
              </a>
            </Link>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-creative-yellow hover:bg-[#232326] transition"
              onClick={handleLinkClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M16 3v4M8 3v4" />
              </svg>
              Portfolio
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-creative-yellow hover:bg-[#232326] transition"
              onClick={handleLinkClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0113 0" />
              </svg>
              About
            </a>
            <a
              href="#testimonials"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-creative-yellow hover:bg-[#232326] transition"
              onClick={handleLinkClick}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                <path d="M15 3h-6a2 2 0 00-2 2v3a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-full font-bold bg-creative-yellow text-[#18181b] shadow-creative hover:bg-yellow-400 text-center mt-3 transition"
              onClick={handleLinkClick}
            >
              Book My Growth Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
