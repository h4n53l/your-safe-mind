// pages/about.tsx
export default function About() {
    return (
      <div className="min-h-screen">
        {/* Hero Section - Transparent Background */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                About Your Safe Mind
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your trusted partner in mental wellness, providing professional 
                psychotherapy services across the UK with compassion and expertise.
              </p>
            </div>
          </div>
        </section>
  
        {/* Vision & Mission Section - Green Background */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group transition-all duration-300 ease-in-out">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                              rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                              transition duration-1000 group-hover:duration-200 
                              animate-gradient"></div>
                <div className="relative px-6 py-8 bg-white rounded-xl leading-none">
                  <h1 className="text-3xl font-extrabold text-green-800 mb-4">Our Vision</h1>
                  <p className="text-gray-700">
                    To be a leading provider of accessible mental health care in the UK, 
                    creating a society where mental wellness is prioritised and support 
                    is readily available to all who need it.
                  </p>
                </div>
              </div>
  
              <div className="relative group transition-all duration-300 ease-in-out">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                              rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                              transition duration-1000 group-hover:duration-200 
                              animate-gradient"></div>
                <div className="relative px-6 py-8 bg-white rounded-xl leading-none">
                  <h1 className="text-3xl font-extrabold text-green-800 mb-4">Our Mission</h1>
                  <p className="text-gray-700">
                    To deliver high-quality, personalised mental health services that 
                    empower individuals on their journey to emotional well-being, ensuring 
                    professional support is accessible and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Policy Section - Transparent Background */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group transition-all duration-300 ease-in-out">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                            rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                            transition duration-1000 group-hover:duration-200 
                            animate-gradient"></div>
              <div className="relative px-8 py-10 bg-white rounded-xl text-center leading-none">
                <h1 className="text-3xl font-extrabold text-green-800 mb-6">Our Policy</h1>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We maintain the highest standards of confidentiality and professional 
                    ethics in accordance with UK healthcare regulations and professional 
                    guidelines. Your privacy and trust are paramount to our practice.
                  </p>
                  <p>
                    Our 24-hour cancellation policy ensures fair access to services for 
                    all clients. We offer both in-person and online sessions, providing 
                    flexible options to meet your needs.
                  </p>
                  <p>
                    We are registered with relevant UK professional bodies and adhere to 
                    the ethical frameworks set by the British Association for Counselling 
                    and Psychotherapy (BACP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-transparent w-full h-24"></section>
      </div>
    );
  }