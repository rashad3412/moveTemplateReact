import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import whiteBox from "/assets/HomeComPics/boxPicThree.jpg";
import { Link, useLocation } from "react-router-dom";
import PriceComponent from "../components/PriceComponent";
import InfoBanner from "../components/InfoBanner";
import Testimonials from "../components/Testimonials";
import TeamExperts from "../components/TeamExperts";

// eslint-disable-next-line react/prop-types
function AboutPage({ hideInfoBanner = false }) {
  const location = useLocation(); // useLocation to have the certain part of the code not in the homepage
  return (
    <>
      <section>
        {location.pathname !== "/" && (
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
        )}

        <article className="w-[415px] mx-auto mt-16 pb-10 md:w-9/12 lg:w-11/12 lg:grid lg:grid-cols-2 lg:gap-8 ">
          {/* Image Section - Left on Large Screens */}
          <div className="shadow-md rounded-lg">
            <img
              src={whiteBox}
              alt="whiteBox"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Content - Right on Large Screens */}
          <div className="px-4 w-full flex flex-col justify-center">
            <div className="text-xl font-extrabold font-Roboto pt-6 text-royalBlue drop-shadow-md">
              About Us
            </div>
            <div className="text-4xl font-bold font-Playfair pt-4 text-royalBlue drop-shadow-md tracking-wider">
              Moving is always <span className="italic">easy</span> and{" "}
              <span className="underline decoration-royalBlue">Fast!</span>
            </div>
            <p className="mt-4 text-gray-800 font-Roboto font-normal text-lg">
              At MeezHaul, we believe every move should be stress-free and
              efficient. Our team is dedicated to providing tailored solutions
              for your moving needs, ensuring that every step is handled with
              care and professionalism. Whether you are relocating across town
              or across the country, we are here to make the process seamless
              and enjoyable for you and your family.
            </p>

            <ul className="mt-6 space-y-4 text-gray-700 font-norma">
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
                <span className="text-lg font-medium">
                  Customer Satisfaction
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-5 h-5 bg-deepYellow text-royalBlue font-bold rounded-full flex items-center justify-center">
                  ✓
                </span>
                <span className="text-lg font-medium">5 Star Service</span>
              </li>
            </ul>
          </div>
        </article>
        {/* Render InfoBanner only if hideInfoBanner is false */}
        <Testimonials />
        <PriceComponent />
        {!hideInfoBanner && <InfoBanner />}
        <div className="relative w-full  lg:hidden md:hidden">
          <div className="absolute w-56 h-56 border-[1.7rem] border-deepYellow rounded-full clip-c-shape -left-36 mt-2"></div>
        </div>
        <TeamExperts />
      </section>
    </>
  );
}

export default AboutPage;
