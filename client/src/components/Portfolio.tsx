import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const carouselRef = useRef<HTMLDivElement>(null);

  const portfolioItems = [
    [
      {
        image: "https://pixabay.com/get/g277fbc6e15651b39f8a847f6eaa3e43e6497b97249b6273675baff9c1adbd6c86a8a74793b32736b6f10478c75c32cea380b6170a37fa48ddd17e33f1b5e21fc_1280.jpg",
        alt: "Coffee shop website design"
      },
      {
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        alt: "Boutique clothing store website"
      }
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        alt: "Wedding planning website"
      },
      {
        image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
        alt: "Event venue website"
      }
    ]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section className="py-16 md:py-24" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space">Our Portfolio</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Check out some of our recent projects for local businesses
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${totalSlides * 100}%` }}
          >
            {portfolioItems.map((slide, slideIndex) => (
              <div 
                key={slideIndex} 
                className="min-w-full px-4"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {slide.map((item, itemIndex) => (
                    <img 
                      key={itemIndex}
                      src={item.image} 
                      alt={item.alt} 
                      className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button 
            type="button" 
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-[#1F2937]" />
          </button>
          <button 
            type="button" 
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-[#1F2937]" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center text-[#3B82F6] hover:text-[#3B82F6]/80 font-medium">
            See More Work
            <ArrowRight className="h-5 w-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
