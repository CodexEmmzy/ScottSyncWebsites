import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  business: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        variant: "default"
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#1F2937] text-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-stretch md:items-center">
          {/* Info Panel */}
          <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 font-space leading-tight tracking-tight"
            >
              Let's work <span className="text-[#3B82F6]">together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-white/80 text-lg md:text-xl mb-10 max-w-lg"
            >
              Ready to elevate your online presence? Get in touch to discuss how we can help your business thrive in the digital world.
            </motion.p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-0.5">Phone</h3>
                  <p className="text-white/70 text-base">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-0.5">Email</h3>
                  <p className="text-white/70 text-base">hello@scottsync.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-0.5">Location</h3>
                  <p className="text-white/70 text-base">123 Main Street, Anytown, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4">Send us a message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1F2937]/80 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] bg-[#F9FAFB] ${errors.name ? "border-red-500" : "border-[#E2E8F0]"}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937]/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] bg-[#F9FAFB] ${errors.email ? "border-red-500" : "border-[#E2E8F0]"}`}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-[#1F2937]/80 mb-1">Business (optional)</label>
                <input
                  type="text"
                  id="business"
                  {...register("business")}
                  className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] bg-[#F9FAFB] border-[#E2E8F0]"
                  placeholder="Your business name"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1F2937]/80 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] bg-[#F9FAFB] ${errors.message ? "border-red-500" : "border-[#E2E8F0]"}`}
                  placeholder="How can we help you?"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#10B981] hover:bg-[#059669] transition-colors text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? 'Sending...' : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
