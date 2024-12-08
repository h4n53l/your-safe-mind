const FAQSection = () => {
  return (
    <>
      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-green-600">
            Your questions, answered
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
        {/* End Title */}
        <div className="max-w-2xl mx-auto">
          {/* Accordion */}
          <div className="space-y-4">
            <details
              className="group border-s-4 border-green-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-green-600">
                  How do I know if therapy is right for me?
                </h2>

                <span className="shrink-0 rounded-full bg-green-600 p-1.5 text-white sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Therapy can be beneficial for anyone experiencing emotional
                distress, relationship issues, or seeking personal growth. If
                you’re feeling overwhelmed, struggling with daily tasks, or
                noticing persistent changes in your mood or behavior, it may be
                time to consider therapy. Our initial consultation can help
                determine if our services are a good fit for your needs.
              </p>
            </details>
            <details
              className="group border-s-4 border-green-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-green-600">
                  What can I expect during my first therapy session?
                </h2>

                <span className="shrink-0 rounded-full bg-green-600 p-1.5 text-white sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Your first session, often called an intake or assessment, is an
                opportunity for you and your therapist to get to know each
                other. You’ll discuss your reasons for seeking therapy, your
                personal history, and your goals. This session helps us create a
                personalized treatment plan tailored to your specific needs and
                concerns.
              </p>
            </details>
            <details
              className="group border-s-4 border-green-300 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-green-600">
                  Is my information kept confidential?
                </h2>

                <span className="shrink-0 rounded-full bg-green-600 p-1.5 text-white sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Absolutely. Confidentiality is a cornerstone of our practice. We
                adhere to strict privacy guidelines and HIPAA regulations. Your
                personal information and session content are kept strictly
                confidential, with few exceptions required by law (such as if
                there’s an immediate threat to your safety or the safety of
                others).
              </p>
            </details>
          </div>
          {/* End Accordion */}
        </div>
      </div>
      {/* End FAQ */}
    </>
  );
};

export default FAQSection;
