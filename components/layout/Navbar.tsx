
const Navbar = () => {
    return (
<header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gray-50 text-sm py-3 dark:bg-neutral-800">
  <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
    <div className="flex items-center justify-between">
      <a
        className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
        href="/"
        aria-label="Your Safe Mind Logo"
      >
        <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-green-600 dark:text-white">
          <img
        src="logo.svg"
        className="mr-3 h-10 w-10"
        alt="Your Safe Mind Logo"
      />
          Your Safe Mind
        </span>
      </a>
      <div className="sm:hidden">
        <button
          type="button"
          className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-green-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          id="hs-navbar-example-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar-example"
          aria-label="Toggle navigation"
          data-hs-collapse="coming-soonhs-navbar-example"
        >
          <svg
            className="hs-collapse-open:hidden shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            color="green"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={3} x2={21} y1={6} y2={6} />
            <line x1={3} x2={21} y1={12} y2={12} />
            <line x1={3} x2={21} y1={18} y2={18} />
          </svg>
          <svg
            className="hs-collapse-open:block hidden shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            color="green"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>
    </div>
    <div
      id="hs-navbar-example"
      className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
      aria-labelledby="hs-navbar-example-collapse"
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        <a
          className="text-gray-700 transition hover:text-green-700/75 text-lg"
          href="coming-soon"
        >
          About Us
        </a>
        <a
          className="text-gray-700 transition hover:text-green-700/75 text-lg"
          href="coming-soon"
        >
          <button 
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
          >
          Book a Session
          </button>
        </a>
      </div>
    </div>
  </nav>
</header>

    );
}

export default Navbar;