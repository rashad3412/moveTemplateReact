import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-royalBlue text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-deepYellow">
          Logo
        </a>

        {/* Hamburger Icon */}
        <button
          className={`flex justify-center items-center w-10 h-10 border border-transparent rounded text-4xl cursor-pointer md:hidden text-deepYellow focus:outline-none transition duration-300 ${
            isOpen ? "hover:border-lightGray hover:bg-transparent" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "☰" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } w-3/4 md:w-auto absolute md:relative top-20 md:top-auto left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 bg-royalBlue md:bg-transparent md:flex rounded-lg transition-all duration-700 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row gap-2 font-Playfair tracking-widest text-xl p-4 md:p-0 md:border-none justify-center items-center font-extralight border-deepYellow border-2 rounded-lg ">
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 px-3 hover:underline hover:decoration-deepYellow transition-all duration-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 px-3 hover:underline hover:decoration-deepYellow transition-all duration-300 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 px-3 hover:underline hover:decoration-deepYellow transition-all duration-300 cursor-pointer"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 px-3 hover:underline hover:decoration-deepYellow transition-all duration-300 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
