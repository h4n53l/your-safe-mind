const ComingSoon = () => {
    return (
<main id="content">
  <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
    <h1 className="block text-2xl font-bold text-white sm:text-4xl">
      Still Working on This One
    </h1>
    <p className="mt-3 text-lg text-gray-300">
      This page is under construction.
    </p>
    <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
      <a
        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
        target="parent"
        href="/"
      >
        <svg
          className="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Home Page
      </a>
    </div>
  </div>
</main>

    );
}

export default ComingSoon;