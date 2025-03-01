import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsSubmitted(true); // Set the form submission state
    e.target.reset();
    setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
  };
  return (
    <div>
      <section className="relative flex justify-center scroll-smooth">
        <div className="relative rounded w-full h-[20rem] aspect-w-16 aspect-h-9">
          {/* Image */}
          <img
            src={movingBox}
            alt="boxPictureTwo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-extrabold mb-2 tracking-tight font-Roboto">
              Contact Us
            </h2>
            <div className="text-md">
              <Link to="/">
                <span className="pt-4 cursor-pointer hover:text-deepYellow font-Playfair tracking-wide">
                  Home
                </span>
              </Link>
              <span className="before:content-['»'] before:text-deepYellow before:mx-1"></span>
              <span className="text-deepYellow font-Playfair tracking-wide">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-20 px-5 lg:flex lg:justify-center pb-20">
        <div className="bg-slate-50 bg-opacity-25 rounded pb-10 border-deepYellow shadow-md px-5">
          <h1 className="text-3xl text-royalBlue font-Playfair font-bold tracking-wide pt-5 pb-5">
            Get In Touch
          </h1>
          <div className="pb-5">
            <p>
              Fill out your information below and we will answer any questions
              you have on the moving process.
            </p>
          </div>

          {/* Form and Contact Info in a Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-center">
            {/* Left: Form */}
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-royalBlue pb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royalBlue"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-royalBlue pb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royalBlue"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-royalBlue pb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royalBlue"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-deepYellow text-royalBlue font-medium px-4 py-2 rounded shadow-md hover:bg-deepYellow transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
              {/* Success Message */}
              {isSubmitted && (
                <div className="px-5 pt-5 text-green-600 font-bold">
                  Successfully sent message!
                </div>
              )}
            </form>

            {/* Right: Contact Info */}
            <div className="md:px-10 lg:px-20">
              <div className="flex items-center space-x-2 pb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-deepYellow rounded-full">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-royalBlue text-lg"
                  />
                </div>
                <div className="px-2">
                  <p className="font-bold text-lg py-1">Office Address</p>
                  <p className="text-base">123 Main Street</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 pb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-deepYellow rounded-full">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-royalBlue text-lg"
                  />
                </div>
                <div className="px-2">
                  <p className="font-bold text-lg py-1">Call Us</p>
                  <p className="text-base">757-123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 pb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-deepYellow rounded-full">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-royalBlue text-lg"
                  />
                </div>
                <div className="">
                  <p className="font-bold text-lg py-1">Email Us</p>
                  <p className="text-sm">MoveTemplate@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 flex items-center justify-center bg-deepYellow rounded-full">
                  <FontAwesomeIcon
                    icon={faTruckMoving}
                    className="text-royalBlue text-lg"
                  />
                </div>
                <div className="px-2">
                  <p className="font-bold text-lg py-1">Office Hours</p>
                  <p className="text-base">Sun-Fri (08AM-10PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20"></div>
      </section>
    </div>
  );
}

export default ContactPage;
