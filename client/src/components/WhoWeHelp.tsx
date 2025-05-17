

import { motion } from "framer-motion";

export default function WhoWeHelp() {
  const industries = [
    {
      title: "Events",
      description: "Custom websites for event venues, planners, and corporate events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Weddings",
      description: "Elegant websites for wedding planners, venues, and services",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Cafés",
      description: "Inviting websites for cafés, coffee shops, and bakeries",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Shops",
      description: "Engaging websites for retail stores, boutiques, and local shops",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  // Animation variants for section heading
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for image
  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 2,
      transition: { duration: 0.4 }
    }
  };

  // Animation variants for card content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <section className="py-16 md:py-24" id="who-we-help">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space"
          >
            Who We Help
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto"
          >
            Tailored web solutions for local businesses across various industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.img
                src={industry.image}
                alt={`${industry.title} website example`}
                variants={imageVariants}
                initial="initial"
                whileHover="hover"
                className="w-full h-48 object-cover"
              />
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="p-6"
              >
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{industry.title}</h3>
                <p className="text-[#1F2937]/70">{industry.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}