import { Link, useLocation } from "react-router-dom";
import movingBox from "/assets/HomeComPics/movingBoxes.jpg";
import FlipCard from "../components/FlipCard";

import { Truck, Globe, Package, Building2, Warehouse } from "lucide-react"; //

const ServicesPage = () => {
  const location = useLocation();
  return (
    <>
      <section>
        {location.pathname !== "/" && (
          <div className="relative rounded w-full h-[20rem] aspect-w-16 aspect-h-9 ">
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
              <h2 className="text-5xl font-extrabold mb-2 tracking-wide font-Roboto">
                Services
              </h2>
              <div className="text-md">
                <Link to="/">
                  <span className="pt-4 cursor-pointer hover:text-deepYellow font-Playfair tracking-wide">
                    Home
                  </span>
                </Link>
                <span className="before:content-['»'] before:text-deepYellow before:mx-1"></span>
                <span className="text-deepYellow font-Playfair tracking-wide">
                  Services
                </span>
              </div>
            </div>
          </div>
        )}
        {/* {!hideDivider && <Divider />} */}
        <div className="flex flex-col justify-center relative top-14 items-center">
          <h1 className="font-Playfair text-2xl text-royalBlue font-extrabold tracking-wider">
            Services
          </h1>
          <p className="text-4xl font-Roboto font-extrabold tracking-wide text-royalBlue mt-2">
            Best Services
          </p>
        </div>
        <section className="flex flex-wrap justify-center gap-6 mt-24 pb-10 md:w-11/12 md:mx-auto lg:w-10/12 xl:w-9/12">
          {/* Row 1 */}
          <FlipCard
            icon={<Truck size={40} className="text-royalBlue " />}
            title="Local Moving"
            description="Seamless local moving solutions."
            backText="We ensure stress-free relocation in your city."
          />

          <FlipCard
            icon={<Globe size={40} className="text-royalBlue" />}
            title="Long Distance"
            description="We help with cross-state moves."
            backText="Our team manages long-distance moves efficiently."
          />

          <FlipCard
            icon={<Package size={40} className="text-royalBlue" />}
            title="Packing Services"
            description="Professional packing for safe transport."
            backText="We use high-quality materials to protect your items."
          />

          {location.pathname !== "/" && (
            <>
              {/* Row 2 */}
              <FlipCard
                icon={<Building2 size={40} className="text-royalBlue" />} // Office Icon
                title="Office Relocation"
                description="Smooth office moving solutions."
                backText="We ensure a hassle-free transition for your workspace."
              />

              <FlipCard
                icon={<Warehouse size={40} className="text-royalBlue" />} // Storage Icon
                title="Storage Units"
                description="Secure storage for your belongings."
                backText="Short-term and long-term storage solutions."
              />

              <FlipCard
                icon={<Truck size={40} className="text-royalBlue" />} // Loading Icon
                title="Loading and Unloading"
                description="We load and unload the truck for you."
                backText="Our skilled movers handle your items with care."
              />
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default ServicesPage;
