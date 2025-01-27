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
          <div className="px-4 w-3/4 relative top-10 ">
            {" "}
            <img
              src={whiteBox}
              alt="whiteBox"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
