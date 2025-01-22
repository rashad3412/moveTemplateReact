import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <section className="relative flex justify-center overflow-hidden">
        <div className="relative rounded w-full">
          {/* Image */}
          <img
            src={movingBox}
            alt="boxPictureTwo"
            className="w-full h-[20rem] bg-cover bg-no-repeat bg-center"
          />
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-70 w-full h-80 "></div>
          {/* Add your form or contact details */}
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
      <section className="pt-20 px-5">
        <div className="bg-slate-50 bg-opacity-25 rounded pb-10 border-deepYellow  shadow-md ">
          <div
            className="text-3xl text-royalBlue px-5 font-Playfair font-bold
          tracking-wide pt-5 pb-5"
          >
            Get In Touch
          </div>
          {/* Contact introduction Tab. */}
          <div className="px-5 ">
            <p className="pb-5">
              Fill out your information below and we will answer any questions
              you have on the moving process.
            </p>
          </div>
          {/* Form */}
          <form className="px-5 pb-15 space-y-4 ">
            {/* Name Field */}
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
            {/* Email Field */}
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
            {/* Message Field */}
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
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-deepYellow text-royalBlue font-medium px-4 py-2 rounded shadow-md hover:bg-deepYellow transition-all duration-300 cursor-pointer tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="pb-20">Footer</div>
      </section>
    </div>
  );
}

export default ContactPage;
