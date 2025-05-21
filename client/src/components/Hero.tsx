import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Animation variants for image
  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: { 
      scale: 1.02, 
      rotate: 1,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for badge
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.4,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  // Animation variants for button
  const buttonVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      scale: 1.05,
      boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  return (
    // <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid md:grid-cols-2 gap-12 items-center">
    //       <div>
    //         <motion.h1
    //           variants={textVariants}
    //           initial="hidden"
    //           animate="visible"
    //           className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1F2937] mb-6 font-space leading-tight"
    //         >
    //           Modern Websites for <span className="text-[#3B82F6]">Local Legends.</span>
    //         </motion.h1>
    //         <motion.p
    //           variants={textVariants}
    //           initial="hidden"
    //           animate="visible"
    //           transition={{ delay: 0.2 }}
    //           className="text-lg md:text-xl text-[#1F2937]/80 mb-8 max-w-xl"
    //         >
    //           We design and develop beautiful, functional websites that help local businesses thrive in the digital landscape.
    //         </motion.p>
    //         <motion.a
    //           href="#contact"
    //           variants={buttonVariants}
    //           initial="initial"
    //           whileHover="hover"
    //           className="bg-[#10B981] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium text-lg inline-flex items-center transition duration-150 shadow-lg shadow-[#10B981]/20"
    //         >
    //           Let's Build Your Site
    //           <motion.div
    //             whileHover={{ x: 4 }}
    //             transition={{ duration: 0.2 }}
    //           >
    //             <ArrowRight className="h-5 w-5 ml-2" />
    //           </motion.div>
    //         </motion.a>
    //       </div>
    //       <div className="relative">
    //         <motion.img
    //           src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    //           alt="Modern website design on laptop"
    //           variants={imageVariants}
    //           initial="initial"
    //           animate="animate"
    //           whileHover="hover"
    //           className="rounded-xl shadow-2xl w-full"
    //         />
    //         <AnimatePresence>
    //           <motion.div
    //             variants={badgeVariants}
    //             initial="hidden"
    //             animate="visible"
    //             exit="hidden"
    //             className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
    //           >
    //             <div className="flex items-center space-x-2">
    //               <motion.div
    //                 animate={{ scale: [1, 1.2, 1] }}
    //                 transition={{ repeat: Infinity, duration: 2 }}
    //                 className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full"
    //               ></motion.div>
    //               <span className="text-sm font-medium">100% Client Satisfaction</span>
    //             </div>
    //           </motion.div>
    //         </AnimatePresence>
    //       </div>
    //     </div>
    //   </div>
    // </section>

     <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-24 pb-12">
        {/* Hero Section - Inspired by screenshot */}
        <section className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display tracking-tight">
              <span className="text-creative-yellow font-creative drop-shadow-lg">Experience.</span><br />
              <span className="text-white">Transform.</span><br />
              <span className="text-white">Grow.</span>
            </h1>
            <div className="w-16 h-1 bg-creative-yellow rounded mb-6"></div>
            <p className="font-semibold text-lg mb-2 text-white/90">Looking for tangible business growth and a dedicated team to help you achieve it?</p>
            <p className="mb-2 text-white/70 max-w-lg">With our proven creative process, we’ve successfully transformed the digital presence of brands across industries. We’re committed to providing you with an exceptional agency experience that drives real revenue growth.</p>
            <p className="mb-8 text-white/70 max-w-lg">Experience the difference. Transform your marketing. Grow your business.</p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-creative-yellow text-[#222] font-bold shadow-creative hover:bg-yellow-400 transition-colors text-lg mt-2">SPEAK TO AN EXPERT</a>
          </div>
          <div className="flex flex-col items-center relative">
            {/* Blueprint/creative image area */}
            <div className="relative w-full flex justify-center items-center">
              <div className="absolute -top-8 -left-8 w-72 h-56 bg-creative-yellow/10 border-2 border-creative-yellow rounded-creative animate-creative-float z-0"></div>
              <img src="https://cdn.pixabay.com/photo/2017/01/06/19/15/space-shuttle-1957826_1280.png" alt="Blueprint" className="relative z-10 w-80 h-56 object-contain rounded-xl shadow-creative" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-60 h-12 bg-[#222] rounded-creative shadow-neon flex items-center justify-center text-creative-blue font-mono text-base animate-creative-float z-20">
              <span>Creative. Modern. Results.</span>
            </div>
          </div>
        </section>
      </main>
  );
}