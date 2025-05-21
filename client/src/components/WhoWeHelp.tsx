import { motion } from "framer-motion";

export default function WhoWeHelp() {
  const industries = [
    {
      title: "Events",
      description:
        "Custom websites for event venues, planners, and corporate events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Weddings",
      description:
        "Elegant websites for wedding planners, venues, and services",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Cafés",
      description: "Inviting websites for cafés, coffee shops, and bakeries",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Shops",
      description:
        "Engaging websites for retail stores, boutiques, and local shops",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
  ];

  // Animation variants for section heading
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: { duration: 0.4 },
    },
  };

  // Animation variants for card content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  return (
    <section
      className="py-20 md:py-28 bg-[#18181b] text-white"
      id="who-we-help"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4"
          >
            <span className="text-creative-yellow font-creative drop-shadow-lg">
              Who We Help
            </span>
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Tailored web solutions for local businesses across various
            industries
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
              className="bg-[#232326] rounded-creative shadow-creative overflow-hidden group transition-all duration-300 hover:shadow-neon"
            >
              <motion.div className="relative">
                <motion.img
                  src={industry.image}
                  alt={`${industry.title} website example`}
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  className="w-full h-48 object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-creative-yellow text-[#18181b] font-mono text-xs px-3 py-1 rounded-full shadow-creative uppercase tracking-wide">
                  {industry.title}
                </div>
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="p-6"
              >
                <h3 className="text-lg font-bold font-display mb-2 text-white flex items-center gap-2">
                  {/* Icon for each industry */}
                  {index === 0 && (
                    <svg
                      className="w-5 h-5 text-creative-yellow"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-5 h-5 text-creative-yellow"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21C12 21 7 16.5 7 12.5C7 9.5 9.5 7 12 7C14.5 7 17 9.5 17 12.5C17 16.5 12 21 12 21Z" />
                      <circle cx="12" cy="12.5" r="2.5" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-5 h-5 text-creative-yellow"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 15c1.333-2 6.667-2 8 0" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="w-5 h-5 text-creative-yellow"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                      <path d="M8 8h8v8H8z" />
                    </svg>
                  )}
                  {industry.title}
                </h3>
                <p className="text-white/70 font-mono">
                  {industry.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
