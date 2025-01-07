/* NavBar Component*/

import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-royalBlue  text-white fixed top-0 left-0 w-full shadow-lg z-50">
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
        {/* Hamburger Icon */}
        <button
          className="flex justify-center items-center w-10 h-10 border border-transparent rounded text-4xl cursor-pointer md:hidden text-deepYellow focus:outline-none transition duration-300 "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="text-2xl">{isOpen ? "x" : "☰"}</div>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden bg-royalBlue transition-all duration-500 ease-in-out   ${
          isOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="overflow-y-auto max-h-60 flex flex-col tracking-widest text-md px-4 font-sans font-thin ">
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer  "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
