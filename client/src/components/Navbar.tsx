import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-semibold text-[#1F2937]">
                Scott<span className="text-[#3B82F6]">Sync</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#1F2937] hover:text-[#3B82F6] font-medium transition duration-150">Services</a>
            <a href="#portfolio" className="text-[#1F2937] hover:text-[#3B82F6] font-medium transition duration-150">Portfolio</a>
            <a href="#about" className="text-[#1F2937] hover:text-[#3B82F6] font-medium transition duration-150">About</a>
            <a href="#testimonials" className="text-[#1F2937] hover:text-[#3B82F6] font-medium transition duration-150">Testimonials</a>
            <a href="#contact" className="bg-[#10B981] hover:bg-opacity-90 text-white px-5 py-2 rounded-md font-medium transition duration-150">Contact Us</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#1F2937] hover:text-[#3B82F6]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-[#1F2937] hover:bg-[#E2E8F0]" onClick={handleLinkClick}>Services</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-[#1F2937] hover:bg-[#E2E8F0]" onClick={handleLinkClick}>Portfolio</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-[#1F2937] hover:bg-[#E2E8F0]" onClick={handleLinkClick}>About</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-[#1F2937] hover:bg-[#E2E8F0]" onClick={handleLinkClick}>Testimonials</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-[#10B981] text-white hover:bg-opacity-90 text-center mt-3" onClick={handleLinkClick}>Contact Us</a>
          </div>
        </div>
      </div>
    </header>
  );
}
