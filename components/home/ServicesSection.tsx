// components/FeaturesSection.tsx
const ServicesSection = () => {
  const features = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions focused on personal growth and healing in a safe, confidential environment.",
      icon: "🌱", // You can replace with proper SVG/icon component
    },
    {
      title: "Couples Counseling",
      description:
        "Build stronger relationships through guided sessions focused on communication and understanding.",
      icon: "💕", // You can replace with proper SVG/icon component
    },
    {
      title: "Family Therapy",
      description:
        "Resolve conflicts and strengthen family bonds through collaborative therapeutic sessions.",
      icon: "👨‍👩‍👧‍👦", // You can replace with proper SVG/icon component
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600">Our Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive mental health support tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300 ease-in-out"
            >
              {/* Animated background effect */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                            rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                            transition duration-1000 group-hover:duration-200 
                            animate-gradient"
              ></div>

              {/* Card content */}
              <div className="relative px-6 py-8 bg-white rounded-xl leading-none h-full">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                {/* Optional call-to-action button */}
                <div className="mt-6 text-center">
                  <button
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium 
                                   text-green-600 hover:text-green-700 
                                   transition-colors duration-200"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
