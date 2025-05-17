import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Set page title and meta description
  useEffect(() => {
    document.title = "ScottSync - Modern Websites for Local Legends";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'ScottSync designs and develops beautiful, functional websites that help local businesses thrive in the digital landscape.');
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'ScottSync - Modern Websites for Local Legends' },
      { property: 'og:description', content: 'Custom websites for local businesses that drive real results.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
