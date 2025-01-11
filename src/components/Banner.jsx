import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <section>
      <section className="hidden lg:block relative bg-gradient-to-b from-white to-gray-100 lg:py-4">
        <div className="flex justify-between items-start px-10">
          {/* Left Side: Logo */}
          <div className="flex flex-col space-y-4">
            <div className="w-16 h-16 flex items-center   text-royalBlue text-2xl font-Roboto font-bold  relative left-16 italic">
              <div className="w-8 h-8  flex items-center py-4 relative right-1">
                <FontAwesomeIcon
                  icon={faTruckMoving}
                  className="text-royalBlue text-xl"
                />
              </div>
              Meezaul
            </div>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex space-x-8 ">
            {/* Call Us */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-deepYellow flex items-center justify-center shadow-md">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-royalBlue text-lg"
                />
              </div>
              <div className="text-gray-600 lg:text-md font-bold tracking-wide ">
                Call Us
                <div className="font-light">123-456-789</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8  rounded-full bg-deepYellow flex items-center justify-center shadow-md">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-royalBlue text-lg"
                />
              </div>
              <div className="text-gray-600 lg:text-md font-bold  tracking-wide ">
                Email Us
                <div className="font-light">MoveTemplate@gmail.com</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8  rounded-full bg-deepYellow flex items-center justify-center shadow-md">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-royalBlue text-lg"
                />
              </div>
              <div className="text-gray-600 lg:text-md font-bold  tracking-wide">
                Address
                <div className="font-light">123 Main Street</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Banner;
