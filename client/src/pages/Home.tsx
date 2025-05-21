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
    document.title = "ScottSync - Experience. Transform. Grow.";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "ScottSync helps you experience real business growth with creative, modern websites and digital strategies."
    );
    // Add Open Graph tags
    const ogTags = [
      {
        property: "og:title",
        content: "ScottSync - Experience. Transform. Grow.",
      },
      {
        property: "og:description",
        content: "Transform your business with creative web solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];
    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", tag.content);
    });
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Use dark theme and creative layout, but keep all original sections
  return (
    <div className="min-h-screen bg-[#111112] text-white font-sans">
      <Navbar />
      {/* New Hero Section (creative, dark, modern) */}
      <section className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 pt-24 pb-12">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display tracking-tight">
            <span className="text-creative-yellow font-creative drop-shadow-lg">
              Experience.
            </span>
            <br />
            <span className="text-white">Transform.</span>
            <br />
            <span className="text-white">Grow.</span>
          </h1>
          <div className="w-16 h-1 bg-creative-yellow rounded mb-6"></div>
          <p className="font-semibold text-lg mb-2 text-white/90">
            Looking for tangible business growth and a dedicated team to help
            you achieve it?
          </p>
          <p className="mb-2 text-white/70 max-w-lg">
            With our proven creative process, we’ve successfully transformed the
            digital presence of brands across industries. We’re committed to
            providing you with an exceptional agency experience that drives real
            revenue growth.
          </p>
          <p className="mb-8 text-white/70 max-w-lg">
            Experience the difference. Transform your marketing. Grow your
            business.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-creative-yellow text-[#222] font-bold shadow-creative hover:bg-yellow-400 transition-colors text-lg mt-2"
          >
            SPEAK TO AN EXPERT
          </a>
        </div>
        <div className="flex flex-col items-center relative">
          {/* Blueprint/creative image area */}
          <div className="relative w-full flex justify-center items-center">
            <div className="absolute -top-8 -left-8 w-72 h-56 bg-creative-yellow/10 border-2 border-creative-yellow rounded-creative animate-creative-float z-0"></div>
            {/* <img
              src="https://www.freepik.com/free-psd/astronaut-space-stunning-image-spacewalker_408653330.htm#fromView=keyword&page=1&position=0&uuid=bd59bdf1-94b7-486b-bfe6-2cddd98d3073&query=Space+Png"
              alt="Blueprint"
              className="relative z-10 w-80 h-56 object-contain rounded-xl shadow-creative"
            /> */}
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-60 h-12 bg-[#222] rounded-creative shadow-neon flex items-center justify-center text-creative-blue font-mono text-base animate-creative-float z-20">
            <span>Creative. Modern. Results.</span>
          </div>
        </div>
      </section>
      {/* All original sections, now themed dark/creative */}
      <main className="bg-transparent">
        <WhoWeHelp />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
