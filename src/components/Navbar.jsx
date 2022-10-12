import React from "react";

const Navbar = () => {
  const toggleNav = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="bg-[#fffcd9] shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x- justify-between w-full">
              <div>
                {/* <!-- Website Logo --> */}
                <a href="#" className="flex items-center py-4 px-2">
                  <h1 className="font-bold text-[#1f1f38] text-lg lg:text-3xl">
                    PORTFO<span className="text-[#2c2c6c]">LIO</span>
                  </h1>
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-4 px-2 text-gray-900 font-semibold hover:text-[#1f1f38] transition duration-300 "
                >
                  Home
                </a>
                <a
                  href="#work"
                  className="py-4 px-2 text-gray-900 font-semibold hover:text-[#1f1f38] transition duration-300"
                >
                  Work
                </a>
                <a
                  href="#about"
                  className="py-4 px-2 text-gray-900 font-semibold hover:text-[#1f1f38] transition duration-300"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="py-4 px-2 text-gray-900 font-semibold hover:text-[#1f1f38] transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleNav}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className=" w-6 h-6 text-[#1f1f38] hover:text-[#1f1f38] "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className="hidden md:hidden mobile-menu">
          <ul className="">
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 hover:bg-[#1f1f38] hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="block text-sm px-2 py-4 hover:bg-[#1f1f38] hover:text-white transition duration-300"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-[#1f1f38] hover:text-white transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-[#1f1f38] hover:text-white transition duration-300"
              >
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
