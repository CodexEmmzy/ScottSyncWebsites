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

  return (
    <section className="py-16 md:py-24 bg-[#F1F5F9]" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space">Why Choose Us</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            We're committed to delivering exceptional results for local businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-[#3B82F6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{feature.title}</h3>
              <p className="text-[#1F2937]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#3B82F6]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl text-[#1F2937]/80 italic mb-6">
              "Working with ScottSync was a game-changer for our café. They created a beautiful website that perfectly captures our atmosphere and has significantly increased our online orders. Their local expertise was invaluable."
            </p>
            <div>
              <h4 className="font-semibold text-[#1F2937]">Sarah Johnson</h4>
              <p className="text-sm text-[#1F2937]/60">Owner, Morning Brew Café</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
