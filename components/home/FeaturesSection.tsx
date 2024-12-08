const FeaturesSection = () => {
  return (
<>
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
      {/* Icon Block */}
      <div className="text-center">
        <div className="relative flex mx-auto justify-center items-center size-12 bg-white rounded-full before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-full dark:bg-neutral-900">
          <img 
          src="support.svg"
          className="w-10 h-10"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Professional Support
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Work with trained therapists who provide evidence-based techniques for lasting change.
          </p>
        </div>
      </div>
      {/* End Icon Block */}
      {/* Icon Block */}
      <div className="text-center">
        <div className="relative flex mx-auto justify-center items-center size-12 bg-white rounded-full before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-full dark:bg-neutral-900">
        <img 
          src="shield.svg"
          className="w-8 h-8"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Safe Environment
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Experience a judgment-free space where you can express yourself freely.
          </p>
        </div>
      </div>
      {/* End Icon Block */}

      {/* Icon Block */}
      <div className="text-center">
        <div className="relative flex mx-auto justify-center items-center size-12 bg-white rounded-full before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-green-400 before:rounded-full dark:bg-neutral-900">
        <img 
          src="growth.svg"
          className="w-8 h-8"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Personal Growth
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Discover your inner strength and develop new perspectives on life's challenges.
          </p>
        </div>
      </div>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>

  );
};

export default FeaturesSection;


// relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-green-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900