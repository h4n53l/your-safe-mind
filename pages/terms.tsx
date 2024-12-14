// pages/terms.tsx
export default function Terms() {
    return (
      <div className="min-h-screen">
        {/* Hero Section - Transparent Background */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
              Terms of Service
            </h1>
          </div>
        </section>
  
        {/* Main Content - Green Background */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group transition-all duration-300 ease-in-out">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                            rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                            transition duration-1000 group-hover:duration-200 
                            animate-gradient"></div>
              <div className="relative px-8 py-10 bg-white rounded-xl leading-none">
                <div className="space-y-6 text-gray-700">
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Service Agreement</h2>
                    <p className="mb-4">By booking an appointment, you agree to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Provide accurate information</li>
                      <li>Attend scheduled appointments or provide 24-hour notice for cancellations</li>
                      <li>Pay for services as agreed</li>
                      <li>Engage in therapy respectfully and constructively</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Appointment Policy</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>24-hour cancellation notice required</li>
                      <li>Late arrivals may result in shortened sessions</li>
                      <li>Missed appointments may be charged</li>
                      <li>Emergency procedures will be discussed in session</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Confidentiality</h2>
                    <p className="mb-4">We maintain strict confidentiality except when:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Required by law</li>
                      <li>Risk of harm to self or others</li>
                      <li>Safeguarding concerns</li>
                      <li>Written consent is provided</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Online Services</h2>
                    <p>For online therapy sessions:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Secure internet connection required</li>
                      <li>Private location necessary</li>
                      <li>Backup contact method needed</li>
                      <li>Technical requirements must be met</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-transparent w-full h-24"></section>
      </div>
    );
  }