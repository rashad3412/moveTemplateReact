/* NavBar Component*/

import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-royalBlue text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 px-4">
          <div className="w-6 h-6 rounded-full bg-deepYellow flex items-center justify-center text-royalBlue font-bold">
            M
          </div>
          <span className="text-lg text-deepYellow font-medium tracking-wide">
            MeezHaul
          </span>
        </a>
        {/* Hamburger Icon for Mobile */}
        <button
          className="flex justify-center items-center w-10 h-10 border border-transparent rounded text-4xl cursor-pointer lg:hidden text-deepYellow focus:outline-none transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="text-2xl">{isOpen ? "x" : "☰"}</div>
        </button>

        {/* Links for Larger Screens (no <li> tags) */}
        <div className="hidden lg:flex items-center space-x-6">
          {[
            "Home",
            "About",
            "Pages",
            "Service",
            "Feature",
            "Blog",
            "Contact",
          ].map((link) => (
            <a
              href="#"
              key={link}
              className="block py-2 px-3  hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`lg:hidden overflow-hidden bg-royalBlue transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="overflow-y-auto max-h-60 flex flex-col tracking-widest text-md px-4 font-sans font-thin">
          {[
            "Home",
            "About",
            "Pages",
            "Service",
            "Feature",
            "Blog",
            "Contact",
          ].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
