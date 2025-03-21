import Banner from "./Banner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <section>
      {/* Banner Component*/}
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
            <Link to="/">
              <div href="#" className="flex items-center space-x-2 px-4">
                <div className="w-6 h-6 rounded-full bg-deepYellow flex items-center justify-center text-royalBlue font-bold">
                  M
                </div>
                <span className="text-lg text-lightGray font-medium tracking-wide">
                  MeezHaul
                </span>
              </div>
            </Link>
            {/* Logo */}

            {/* Hamburger Icon for Mobile */}
            <button
              className="flex justify-center items-center w-10 h-10 border border-transparent rounded text-4xl cursor-pointer lg:hidden text-deepYellow focus:outline-none transition duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="text-2xl">{isOpen ? "x" : "☰"}</div>
            </button>

            {/* Links for Larger Screens */}
            <ul className="hidden lg:flex lg:min-w-56 lg:relative items-center space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Service", path: "/service" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer"
                    onClick={handleLinkClick} // Close the menu when clicking a link
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {/* Links for mobile screens */}
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
          <ul className="overflow-y-auto max-h-60 flex flex-col tracking-widest text-md px-4 font-sans font-thin text-lightGray">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Service", path: "/service" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block py-2 px-3 w-full text-left hover:bg-deepYellow hover:bg-opacity-20 hover:font-medium transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick} // Close the menu when clicking a link
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
