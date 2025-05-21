import { motion } from "framer-motion";
import { Monitor, Code, Search, CheckCircle, PhoneCall } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Web Design",
    description:
      "Beautiful, user-friendly designs tailored to your brand and audience. We focus on aesthetics, usability, and conversion.",
    icon: <Monitor className="h-8 w-8 text-[#3B82F6]" />,
    features: [
      "Custom design for your brand",
      "Mobile-first, responsive layouts",
      "User experience optimization",
    ],
  },
  {
    title: "Web Development",
    description:
      "Fast, reliable, and scalable websites built with modern technologies. We ensure your site is robust and easy to manage.",
    icon: <Code className="h-8 w-8 text-[#3B82F6]" />,
    features: [
      "Modern, clean code",
      "Performance optimization",
      "Content management system",
    ],
  },
  {
    title: "SEO",
    description:
      "Enhance your visibility and reach more customers in your local area. We help you rank and get found.",
    icon: <Search className="h-8 w-8 text-[#3B82F6]" />,
    features: [
      "Local SEO strategy",
      "Keyword research",
      "Performance tracking",
    ],
  },
];

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <section className="bg-[#1F2937] py-20 md:py-28 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4 font-space tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Modern web solutions to help your business thrive online.
          </motion.p>
        </section>

        {/* Service Cards */}
        <section className="py-16 md:py-24 bg-[#F1F5F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="bg-[#3B82F6]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-3 font-space group-hover:text-[#3B82F6] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#1F2937]/70 mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-3 text-sm mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#10B981] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#3B82F6] text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 font-space"
          >
            Ready to grow your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto"
          >
            Book a free discovery call or start your project with us today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link href="#contact">
              <a className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] transition-colors text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3B82F6]">
                <PhoneCall className="h-5 w-5" /> Book a Discovery Call
              </a>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
