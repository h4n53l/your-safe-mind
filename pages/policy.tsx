// pages/privacy-policy.tsx
export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen">
        {/* Hero Section - Transparent Background */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
              Privacy Policy
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
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Information We Collect</h2>
                    <p className="mb-4">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Name and contact information</li>
                      <li>Appointment scheduling details</li>
                      <li>Health information relevant to your therapy</li>
                      <li>Communication preferences</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">How We Use Your Information</h2>
                    <p className="mb-4">Your information is used to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Provide therapy services</li>
                      <li>Schedule and manage appointments</li>
                      <li>Send appointment reminders</li>
                      <li>Process payments</li>
                      <li>Improve our services</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Data Protection</h2>
                    <p>We implement appropriate security measures to protect your personal information in accordance with UK data protection laws and professional standards. Your data is:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Encrypted during transmission</li>
                      <li>Stored securely</li>
                      <li>Accessible only to authorized personnel</li>
                      <li>Retained only as long as necessary</li>
                    </ul>
                  </section>
  
                  <section>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Your Rights</h2>
                    <p>Under UK data protection law, you have the right to:</p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Access your personal information</li>
                      <li>Request corrections to your data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Request data portability</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
            Terms of Service
          </h1>
        </div>
      </section>
        <section className="bg-transparent w-full h-24"></section>
      </div>
    );
  }