const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col justify-center w-auto text-teal-600 sm:justify-start">
            <img className="w-12" src="logo.svg" />
          </div>
          <div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right grid-flow-col">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>

          {/* <div>
            <ul className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-greev-700/75"
                  href="coming-soon"
                >
                  {" "}
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-green-700/75"
                  href="coming-soon"
                >
                  {" "}
                  Contact Us{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-green-700/75"
                  href="coming-soon"
                >
                  {" "}
                  Privacy policy{" "}
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;