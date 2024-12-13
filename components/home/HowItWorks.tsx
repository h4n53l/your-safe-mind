const HowItWorks = () => {
  return (
    <>
      {/* Approach */}
      <div className="bg-green-700">
        {/* Approach */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h1 className="text-3xl text-center font-bold text-white md:text-4xl md:leading-tight">
              Our Simple Process
            </h1>
            <p className="mt-1 text-xl text-center text-gray-200">
              Our approach combines professional expertise with personalized
              care, ensuring you receive the support you need in a way that fits
              your life. Whether you're dealing with specific challenges or
              seeking personal growth, our structured process helps you move
              forward with confidence.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl"
                src="session.jpg"
                alt="Therapy Session Image"
              />
            </div>
            {/* End Col */}
            {/* Timeline */}
            <div>
              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-white text-lg font-bold uppercase">
                  Steps
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-white">
                    <span className="text-base font-extrabold">
                      Initial Consultation:
                    </span>
                    <br />
                    We’ll discuss your needs and match you with the right
                    therapist.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-white">
                    <span className="text-base font-extrabold">
                      Product Development and Testing:
                    </span>
                    <br />
                    Together, we’ll create a plan tailored to your goals.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-white text-white font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-white">
                    <span className="text-base font-extrabold">
                      Ongoing Support:
                    </span>
                    <br />
                    Regular sessions and check-ins to track your progress.
                    Adjustments as Needed: We’ll adapt our approach to ensure
                    you’re getting the most out of therapy.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
            </div>
            {/* End Timeline */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Approach */}
    </>
  );
};

export default HowItWorks;
