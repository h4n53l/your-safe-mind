import { useState, FormEvent } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmail = async (email: any, details: any, isPatient: Boolean) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Your Safe Mind Appointment",
          appointmentDetails: details,
          patientEmail: isPatient,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      alert("Failed to send email: " + error);
    } finally {
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData.email)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let details = {
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          symptom: formData.symptom,
        }

      // handleEmail(formData.email, details, false)

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          date: new Date(),
          time: '',
          serviceType: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit booking');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  }

  return (
    <div className='bg-white flex flex-row justify-center p-12'>
    <div className="relative group transition-all duration-300 ease-in-out max-w-2xl mx-auto">
      {/* Animated background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-green-500 to-green-300 
                      rounded-2xl blur-lg opacity-25 group-hover:opacity-100 
                      transition duration-1000 group-hover:duration-200 
                      animate-gradient"></div>
      
      {/* Main container */}
      <div className="relative px-7 py-6 bg-white rounded-xl leading-none">
      <div className="text-center py-3 pb-6">
      <h1 className="text-3xl font-bold text-green-600 sm:text-4xl dark:text-white">
        Book Your Journey to Well-being
      </h1>
      <p className="mt-1 py-3 px-6 text-xl text-gray-600 dark:text-neutral-400">
        Take the first step towards positive change. We'll match you with
        the right professional to support your unique needs.
      </p>
    </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                       focus:border-green-300 transition-all duration-200 outline-none
                       hover:border-green-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                       focus:border-green-300 transition-all duration-200 outline-none
                       hover:border-green-200"
              placeholder="your@email.com"
            />
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Input */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                         focus:border-green-300 transition-all duration-200 outline-none
                         hover:border-green-200"
              />
            </div>

            {/* Time Input */}
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                         focus:border-green-300 transition-all duration-200 outline-none
                         hover:border-green-200"
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
              Type of Session
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                       focus:border-green-300 transition-all duration-200 outline-none
                       hover:border-green-200"
            >
              <option value="">Select service type</option>
              <option value="individual">Individual Therapy</option>
              <option value="couples">Couples Therapy</option>
              <option value="family">Family Therapy</option>
              <option value="group">Group Therapy</option>
            </select>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-300 
                       focus:border-green-300 transition-all duration-200 outline-none
                       hover:border-green-200 resize-none"
              placeholder="Any specific concerns or symptoms?"
            />
                  <div className="mt-3 flex flex-row justify-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-1.5 border-green-500 rounded text-green-600 focus:ring-green-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-600 dark:text-neutral-400"
            >
              By submitting this form I have read and acknowledged the{" "}
              <a
                className="text-green-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-green-500"
                href="#"
              >
                Privacy policy
              </a>
            </label>
          </div>
        </div>
          </div>
          {/* Submit Button */}
          <div className="mt-6 flex flex-row justify-center">
          <button className="w-auto font-semibold py-4 px-12 mx-6 uppercase text-white bg-gradient-to-r from-green-400 to-green-500 
                           rounded-lg hover:from-green-500 hover:to-green-600 
                           transform hover:-translate-y-0.5 transition-all duration-200">
            Book Appointment
          </button>
        </div>
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default BookingForm;