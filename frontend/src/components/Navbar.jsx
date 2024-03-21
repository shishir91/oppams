import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import logo2 from "../logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pages = [
    { name: "Home", address: "/" },
    { name: "About", address: "/about" },
    { name: "Services", address: "/services" },
    { name: "Our Team", address: "/ourTeam" },
    { name: "Portfolio", address: "/portfolio" },
    { name: "Career", address: "/career" },
    { name: "Contact Us", address: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      } transition-colors duration-700 ease-in-out`}
      id="navbar"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src={isScrolled ? logo : logo2}
            className="h-14"
            alt="Oppams Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent transition-colors duration-300 ease-in-out md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}
          >
            {pages.map((page, index) => (
              <li key={index}>
                {/* block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 */}
                <a
                  href={page.address}
                  className={`px-2 py-1 ${
                    isScrolled
                      ? "text-gray-100 hover:text-blue-900"
                      : "text-black hover:text-gray-100"
                  } ${
                    page.address == "/contact"
                      ? "inline-block bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 flex items-center justify-center"
                      : ""
                  }`}
                  aria-current="page"
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
