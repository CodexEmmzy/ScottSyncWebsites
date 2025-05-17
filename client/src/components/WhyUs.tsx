import { motion } from "framer-motion";
import { Zap, MapPin, Lightbulb } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "Fast",
      description: "Quick turnaround times without compromising on quality. We understand that time is valuable for your business.",
      icon: <Zap className="h-8 w-8 text-[#3B82F6]" />
    },
    {
      title: "Local",
      description: "We understand the local market and community. Our expertise helps position your business for local success.",
      icon: <MapPin className="h-8 w-8 text-[#3B82F6]" />
    },
    {
      title: "Creative",
      description: "Innovative solutions that help your business stand out from the competition with unique and memorable designs.",
      icon: <Lightbulb className="h-8 w-8 text-[#3B82F6]" />
    }
  ];

  // Animation variants for section background
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
        ease: "easeOut", 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  // Animation variants for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      y: -10,
      rotateY: 5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Animation variants for icon
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
        delay: 0.3
      }
    },
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.4, repeat: 1 }
    }
  };

  // Animation variants for testimonial
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  // Animation variants for quote icon
  const quoteIconVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      className="py-16 md:py-24 bg-[#F1F5F9] relative overflow-hidden"
      id="about"
    >
      <motion.div
        className="absolute inset-0 bg-[#3B82F6]/10"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto"
          >
            We're committed to delivering exceptional results for local businesses
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-[#3B82F6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="text-xl font-semibold text-[#1F2937] mb-3"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-[#1F2937]/70"
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          variants={testimonialVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              variants={quoteIconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="h-12 w-12 text-[#3B82F6]/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </motion.svg>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-[#1F2937]/80 italic mb-6"
            >
              "Working with ScottSync was a game-changer for our café. They created a beautiful website that perfectly captures our atmosphere and has significantly increased our online orders. Their local expertise was invaluable."
            </motion.p>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              <h4 className="font-semibold text-[#1F2937]">Sarah Johnson</h4>
              <p className="text-sm text-[#1F2937]/60">Owner, Morning Brew Café</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}