import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
        variant: "success"
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
    <section className="py-16 md:py-24 bg-[#1F2937] text-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-space">Let's work together</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Ready to elevate your online presence? Get in touch with us today to discuss how we can help your local business thrive in the digital world.
            </p>
            
            <div className="flex items-start mb-6">
              <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-white/70">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-white/70">hello@scottsync.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-white/70">123 Main Street, Anytown, USA</p>
              </div>
            </div>
          </div>
          
          <div>
            <form 
              className="bg-white rounded-xl shadow-lg p-8" 
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-6">Send us a message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937]/70 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  {...register("name")}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] ${
                    errors.name ? "border-red-500" : "border-[#E2E8F0]"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#1F2937]/70 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  {...register("email")}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] ${
                    errors.email ? "border-red-500" : "border-[#E2E8F0]"
                  }`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="business" className="block text-sm font-medium text-[#1F2937]/70 mb-1">Business Name</label>
                <input 
                  type="text" 
                  id="business" 
                  {...register("business")}
                  className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937]"
                  placeholder="Your business name (optional)"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#1F2937]/70 mb-1">Message</label>
                <textarea 
                  id="message" 
                  {...register("message")}
                  rows={4} 
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-[#1F2937] ${
                    errors.message ? "border-red-500" : "border-[#E2E8F0]"
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#10B981] hover:bg-opacity-90 text-white py-3 rounded-lg font-medium transition duration-150 shadow-lg shadow-[#10B981]/20 disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
