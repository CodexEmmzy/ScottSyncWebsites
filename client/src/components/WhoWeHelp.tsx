export default function WhoWeHelp() {
  const industries = [
    {
      title: "Events",
      description: "Custom websites for event venues, planners, and corporate events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Weddings",
      description: "Elegant websites for wedding planners, venues, and services",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Cafés",
      description: "Inviting websites for cafés, coffee shops, and bakeries",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Shops",
      description: "Engaging websites for retail stores, boutiques, and local shops",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-16 md:py-24" id="who-we-help">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-4 font-space">Who We Help</h2>
          <p className="text-lg text-[#1F2937]/70 max-w-2xl mx-auto">
            Tailored web solutions for local businesses across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
              <img 
                src={industry.image} 
                alt={`${industry.title} website example`} 
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{industry.title}</h3>
                <p className="text-[#1F2937]/70">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
