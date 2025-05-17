import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      initial: "M",
      quote: "ScottSync transformed our outdated website into a stunning platform that showcases our wedding venue perfectly. The attention to detail and responsive design have helped us attract more clients. Simply outstanding work!",
      name: "Michael & Lisa Davis",
      company: "Owners, Sunset Gardens Wedding Venue"
    },
    {
      initial: "J",
      quote: "As a small boutique owner, I needed a website that would help me compete with larger retailers. ScottSync delivered exactly what I needed - a beautiful, functional site that has increased my online sales by 40% in just three months!",
      name: "Jennifer Wilson",
      company: "Owner, Urban Style Boutique"
    },
    {
      initial: "R",
      quote: "The team at ScottSync understands local business needs. They not only built us a fantastic website but also implemented SEO strategies that have significantly improved our visibility in local searches. Highly recommended!",
      name: "Robert Chen",
      company: "Owner, Downtown Event Space"
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation variants for section
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Animation variants for heading
  const textVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  // Animation variants for testimonial card
  const cardVariants = {
    initial: { opacity: 0, x: 100, rotateY: 30 },
    animate: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.7, 
        type: "spring", 
        stiffness: 120, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      rotateY: -30,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for avatar
  const avatarVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        type: "spring", 
        bounce: 0.5 
      }
    },
    hover: { 
      scale: 1.2, 
      transition: { duration: 0.3 } 
    }
  };

  // Animation variants for navigation dots
  const dotVariants = {
    inactive: { scale: 1, opacity: 0.5 },
    active: { 
      scale: 1.3, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        type: "spring", 
        stiffness: 300 
      }
    },
    hover: { 
      scale: 1.5, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      className="py-16 md:py-24 relative overflow-hidden"
      id="testimonials"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear what our clients have to say
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              className="px-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    variants={avatarVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <span className="text-2xl font-semibold text-[#3B82F6]">{testimonials[currentTestimonial].initial}</span>
                  </motion.div>
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-[#1F2937]/80 italic mb-6"
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </motion.p>
                  <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-[#1F2937]">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-[#1F2937]/60">{testimonials[currentTestimonial].company}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                variants={dotVariants}
                initial="inactive"
                animate={index === currentTestimonial ? "active" : "inactive"}
                whileHover="hover"
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#3B82F6]' : 'bg-[#E2E8F0]'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}