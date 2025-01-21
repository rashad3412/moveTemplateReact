import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <div className="relative flex justify-center ">
        <div className="relative rounded">
          {/* Image */}
          <img
            src={movingBox}
            alt="boxPictureTwo"
            className="w-full h-80 object-cover "
          />
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-70 w-full h-80 "></div>
          {/* Add your form or contact details */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-bold mb-2 tracking-tight font-Roboto">
              Contact Us
            </h2>
            <div className="text-md">
              <Link to="/">
                <span className="pt-4 cursor-pointer hover:text-deepYellow">
                  Home
                </span>
              </Link>
              <span className="before:content-['»'] before:text-deepYellow before:mx-1"></span>
              <span className="text-deepYellow">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
