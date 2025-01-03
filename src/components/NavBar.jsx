// NavBar for the MoveTemplate

const NavBar = () => {
  return (
    <div className="bg-royalBlue text-white fixed top-0 left-0 w-full flex items-center px-4 py-3 shadow-lg z-50">
      {/* Logo */}
      <div className="text-xl font-bold mr-auto text-deepYellow ">Logo</div>

      {/* Navigation Links */}
      <ul className="flex gap-4 font-Playfair tracking-wide text-sm">
        <li className="hover:underline hover:text-deepYellow transition-all duration-300 cursor-pointer">
          Home
        </li>
        <li className="hover:underline hover:text-deepYellow transition-all duration-300 cursor-pointer">
          About
        </li>
        <li className="hover:underline hover:text-deepYellow transition-all duration-300 cursor-pointer">
          Company
        </li>
        <li className="hover:underline hover:text-deepYellow transition-all duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
