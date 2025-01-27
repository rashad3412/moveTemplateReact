import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import whiteBox from "/assets/HomeComPics/boxPicThree.jpg";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <section>
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
              About Us
            </h2>
            <div className="text-md">
              <Link to="/">
                <span className="pt-4 cursor-pointer hover:text-deepYellow font-Playfair tracking-wide">
                  Home
                </span>
              </Link>
              <span className="before:content-['»'] before:text-deepYellow before:mx-1"></span>
              <span className="text-deepYellow font-Playfair tracking-wide">
                About Us
              </span>
            </div>
          </div>
        </div>
        <article className="w-[415px] mx-auto mt-16">
          {/* Image Section */}
          <div className="bg-white shadow-md rounded-lg">
            <img
              src={whiteBox}
              alt="whiteBox"
              className="w-full rounded-t-lg"
            />
          </div>
          <div className="px-4 w-11/12">
            <div className="text-3xl font-extrabold font-Playfair pt-6  bg-gradient-to-r from-royalBlue to-deepYellow bg-clip-text text-transparent">
              About Us
            </div>
            <div className="text-5xl font-Playfair pt-4 bg-gradient-to-r from-royalBlue to-lightGray bg-clip-text text-transparent">
              Moving is always easy and Fast!
            </div>
          </div>

          {/* Text Section */}

          <p className="px-4 mt-4 text-gray-700 font-Roboto font-extralight text-lg">
            At MeezHaul, we believe every move should be stress-free and
            efficient. Our team is dedicated to providing tailored solutions for
            your moving needs, ensuring that every step is handled with care and
            professionalism. Whether you are relocating across town or across
            the country, we are here to make the process seamless and enjoyable
            for you and your family.
          </p>
          <ul className="px-4 mt-6 space-y-4 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-deepYellow text-royalBlue font-bold rounded-full flex items-center justify-center">
                ✓
              </span>
              <span className="text-lg font-medium">Fast</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-deepYellow text-royalBlue font-bold rounded-full flex items-center justify-center">
                ✓
              </span>
              <span className="text-lg font-medium">Affordable</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-deepYellow text-royalBlue font-bold rounded-full flex items-center justify-center">
                ✓
              </span>
              <span className="text-lg font-medium">Customer Satisfaction</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-deepYellow text-royalBlue font-bold rounded-full flex items-center justify-center">
                ✓
              </span>
              <span className="text-lg font-medium">5 Star Service</span>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default AboutPage;
