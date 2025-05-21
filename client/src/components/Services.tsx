
// Custom SVG icons for creative theme
const icons = [
  // Web Design
  <svg className="w-8 h-8 text-creative-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M3 8h18"/><circle cx="8" cy="7" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="7" r="1"/></svg>,
  // Web Development
  <svg className="w-8 h-8 text-creative-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="4"/><path d="M8 12l2 2 4-4"/></svg>,
  // SEO
  <svg className="w-8 h-8 text-creative-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
];
const checkIcon = (
  <svg className="h-5 w-5 text-creative-yellow mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
);

export default function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, user-friendly designs tailored to your brand and audience",
      features: [
        "Custom design tailored to your brand",
        "Responsive for all devices",
        "User experience optimization"
      ]
    },
    {
      title: "Web Development",
      description: "Fast, reliable, and scalable websites built with modern technologies",
      features: [
        "Modern, clean code",
        "Performance optimization",
        "Content management system"
      ]
    },
    {
      title: "SEO",
      description: "Enhance your visibility and reach more customers in your local area",
      features: [
        "Local SEO strategy",
        "Keyword research and implementation",
        "Performance tracking and reporting"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#18181b] text-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            <span className="text-creative-yellow font-creative drop-shadow-lg">Our Services</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive web solutions to establish your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#232326] rounded-creative shadow-creative p-8 hover:shadow-neon transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-creative-yellow opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              <div className="bg-creative-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-creative-float">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-white flex items-center gap-2">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6">
                {service.description}
              </p>
              <div className="space-y-3 text-sm transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    {checkIcon}
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
