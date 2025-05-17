import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1F2937] mb-6 font-space leading-tight">
              Modern Websites for <span className="text-[#3B82F6]">Local Legends.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#1F2937]/80 mb-8 max-w-xl">
              We design and develop beautiful, functional websites that help local businesses thrive in the digital landscape.
            </p>
            <a 
              href="#contact" 
              className="bg-[#10B981] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium text-lg inline-flex items-center transition duration-150 shadow-lg shadow-[#10B981]/20"
            >
              Let's Build Your Site
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern website design on laptop" 
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
