import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-royalBlue text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center px-8">
        {/* Left Section - Logo & About */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold font-Playfair text-slate-100">
            MeezHaul
          </h2>
          <p className="text-sm mt-2 font-Roboto">
            Making moving simple, fast, and stress-free.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h3 className="font-semibold text-lg mb-3 text-deepYellow font-Playfair">
            Quick Links
          </h3>
          <Link
            to="/"
            className="text-gray-400 hover:text-deepYellow font-Roboto"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="text-gray-400 hover:text-deepYellow font-Roboto"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-deepYellow font-Roboto"
          >
            Contact
          </Link>
        </div>

        {/* Right Section - Contact & Socials */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold text-lg mb-3 text-slate-100 font-Playfair mt-3">
            Chat With Us
          </h3>
          <p className="text-gray-400 font-Roboto">📍 Norfolk, VA</p>
          <p className="text-gray-400 font-Roboto">📧 support@meezhaul.com</p>
          <p className="text-gray-400 font-Roboto">📞 (555) 123-4567</p>

          {/* Social Icons */}
          <section className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </section>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm font-Roboto">
        © {new Date().getFullYear()} MeezHaul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
