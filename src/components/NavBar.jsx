import Banner from "./Banner";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isSticky, setIsSticky] = useState(false); // Sticky navbar toggle

  useEffect(() => {
    const handleScroll = () => {
      // Get the screen width and scroll position
      const windowWidth = window.innerWidth;
      const scrollPosition = window.scrollY;

      // Apply different scroll behaviors based on the screen size
      if (windowWidth < 1024) {
        // Mobile: Make navbar sticky when scrollPosition >= 0
        if (scrollPosition >= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      } else {
        // Laptop/Desktop: Make navbar sticky when scrollPosition >= 100
        if (scrollPosition >= 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      {/* Banner */}
      <Banner />

      {/* NavBar */}
      <nav>
        {/* Apply fixed class to navbar on scroll */}
        <div
          className={`${
            isSticky
              ? "fixed top-0 bg-royalBlue text-lightGray shadow-lg z-50 w-full"
              : "relative bg-royalBlue"
          } w-full transition-all duration-300`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-lightGray w-full">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 px-4">
              <div className="w-6 h-6 rounded-full bg-deepYellow flex items-center justify-center text-royalBlue font-bold">
                M
              </div>
              <span className="text-lg text-lightGray font-medium tracking-wide">
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

            {/* Links for Larger Screens */}
            <div className="hidden lg:flex lg:min-w-56 lg:relative items-center space-x-6 ">
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
                  className="block py-2 px-3 hover:decoration-deepYellow hover:underline hover:font-medium transition-all duration-300 cursor-pointer lg:text-md lg:hover:font-bold lg:px-1 lg:py-3"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`lg:hidden overflow-hidden bg-royalBlue transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-80 " : "max-h-0"
          }`}
          style={{
            position: "fixed", // Ensure the dropdown stays visible
            top: isSticky ? "60px" : "auto", // Adjust dropdown positioning for sticky navbar
            width: "100%", // Full-width dropdown
            zIndex: 49, // Prevent overlapping with navbar
          }}
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
    </section>
  );
};

export default NavBar;
