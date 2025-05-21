import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Animation variants for heading
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for buttons
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2, type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  // Animation variants for link
  const linkVariants = {
    initial: { x: 0 },
    hover: { 
      x: 4,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#18181b] text-white" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4"
          >
            <span className="text-creative-yellow font-creative drop-shadow-lg">Our Portfolio</span>
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Check out some of our recent projects for local businesses
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              ref={carouselRef}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
              style={{ width: `${totalSlides * 100}%` } as React.CSSProperties}
            >
              {portfolioItems.map((slide, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="min-w-full px-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {slide.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        custom={itemIndex}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="rounded-creative shadow-creative w-full h-64 md:h-80 overflow-hidden bg-[#232326] group hover:shadow-neon transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-creative-yellow text-[#18181b] text-xs px-3 py-1 rounded-full shadow-creative font-mono uppercase tracking-wide">
                          {item.alt}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <motion.button
            type="button"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-creative-yellow/90 text-[#18181b] rounded-full p-2 shadow-creative hover:bg-yellow-400 transition"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            type="button"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-creative-yellow/90 text-[#18181b] rounded-full p-2 shadow-creative hover:bg-yellow-400 transition"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            className="inline-flex items-center font-bold text-creative-yellow hover:text-yellow-400 font-display text-lg drop-shadow-lg transition-colors"
            initial="initial"
            whileHover="hover"
          >
            See More Work
            <motion.div variants={linkVariants}>
              <ArrowRight className="h-5 w-5 ml-1" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}