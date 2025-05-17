import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      initial: "M",
      quote: "ScottSync transformed our outdated website into a stunning platform that showcases our wedding venue perfectly. The attention to detail and responsive design have helped us attract more clients. Simply outstanding work!",
      name: "Michael & Lisa Davis",
      company: "Owners, Sunset Gardens Wedding Venue"
    },
    {
      initial: "J",
      quote: "As a small boutique owner, I needed a website that would help me compete with larger retailers. ScottSync delivered exactly what I needed - a beautiful, functional site that has increased my online sales by 40% in just three months!",
      name: "Jennifer Wilson",
      company: "Owner, Urban Style Boutique"
    },
    {
      initial: "R",
      quote: "The team at ScottSync understands local business needs. They not only built us a fantastic website but also implemented SEO strategies that have significantly improved our visibility in local searches. Highly recommended!",
      name: "Robert Chen",
      company: "Owner, Downtown Event Space"
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Update the transform when currentTestimonial changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
  }, [currentTestimonial]);

  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space">Client Testimonials</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-full px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-3xl mx-auto">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-semibold text-[#3B82F6]">{testimonial.initial}</span>
                    </div>
                    <p className="text-lg md:text-xl text-[#1F2937]/80 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-[#1F2937]">{testimonial.name}</h4>
                      <p className="text-sm text-[#1F2937]/60">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#3B82F6]' : 'bg-[#E2E8F0]'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
