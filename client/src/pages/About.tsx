import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Heart, Target, PhoneCall } from "lucide-react";
import WhyUs from "@/components/WhyUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero/About Header */}
        <section className="bg-[#1F2937] py-20 md:py-28 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-4 font-space tracking-tight"
          >
            About ScottSync Digital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We are a passionate team dedicated to helping local businesses
            thrive online with beautiful, high-performing websites and digital
            strategies.
          </motion.p>
        </section>

        {/* Who We Are / Mission / Values */}
        <section className="py-16 md:py-24 bg-[#F1F5F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <Users className="h-10 w-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                Who We Are
              </h3>
              <p className="text-[#1F2937]/70">
                ScottSync Digital is a creative web agency based in Sydney,
                focused on empowering local legends with modern, effective
                digital solutions. We blend design, technology, and strategy to
                help you stand out.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <Heart className="h-10 w-10 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                Our Mission
              </h3>
              <p className="text-[#1F2937]/70">
                Our mission is to deliver websites and digital experiences that
                drive real results for small businesses. We value creativity,
                transparency, and genuine partnership with our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <Target className="h-10 w-10 text-[#3B82F6] mb-4" />
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                What We Value
              </h3>
              <p className="text-[#1F2937]/70">
                We believe in honest communication, local expertise, and
                building long-term relationships. Your success is our success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us / Meet the Team */}
        <WhyUs />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#3B82F6] text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 font-space"
          >
            Let’s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto"
          >
            Ready to elevate your business? Reach out and let’s create something
            amazing together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] transition-colors text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#3B82F6]"
            >
              <PhoneCall className="h-5 w-5" /> Let’s Talk
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
