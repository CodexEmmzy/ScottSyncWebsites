import { Monitor, Code, Search, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, user-friendly designs tailored to your brand and audience",
      icon: <Monitor className="h-8 w-8 text-[#3B82F6]" />,
      features: [
        "Custom design tailored to your brand",
        "Responsive for all devices",
        "User experience optimization"
      ]
    },
    {
      title: "Web Development",
      description: "Fast, reliable, and scalable websites built with modern technologies",
      icon: <Code className="h-8 w-8 text-[#3B82F6]" />,
      features: [
        "Modern, clean code",
        "Performance optimization",
        "Content management system"
      ]
    },
    {
      title: "SEO",
      description: "Enhance your visibility and reach more customers in your local area",
      icon: <Search className="h-8 w-8 text-[#3B82F6]" />,
      features: [
        "Local SEO strategy",
        "Keyword research and implementation",
        "Performance tracking and reporting"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F1F5F9]" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space">Our Services</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Comprehensive web solutions to establish your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#3B82F6] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="bg-[#3B82F6]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{service.title}</h3>
              <p className="text-[#1F2937]/70 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3 text-sm transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#10B981] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
