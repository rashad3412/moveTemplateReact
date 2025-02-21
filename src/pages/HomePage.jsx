//Home ComponentP
import boxPic from "/assets/HomeComPics/boxPic.jpg";
import companyEmp from "/assets/HomeComPics/companyEmp.jpg";
import { Link } from "react-router-dom";
import ServicesPage from "../pages/ServicesPage";
import InfoBanner from "../components/InfoBanner";
import HowItWorks from "../components/HowItWorks";
import PriceComponent from "../components/PriceComponent";
import WhyUs from "../components/WhyUs";
import BookUs from "../components/BookUs";

function HomePage() {
  return (
    <div className="relative  md:h-fit">
      {/* Image Layer */}
      <div className="relative">
        <img
          src={boxPic}
          alt="boxPic"
          className="w-full h-[40rem] object-cover md:h-[600px]"
        />
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </div>

      <div>
        {/* Text Layer with Lazy Load and Slide-Up Effect */}
        <section className="absolute top-32 px-3 text-slate-50  font-bold z-10 tracking-wide uppercase opacity-0 translate-y-10 animate-fadeInUp md:w-7/12 md:px-6 lg:px-10 lg:w-full">
          <h1 className="font-extrabold mb-4 font-sans text-sm tracking-tight text-deepYellow lg:text-xl lg:pt-3 lg:pb-3">
            move with meezHaul
          </h1>

          <p className="font-medium text-3xl tracking-wide mb-4 font-Roboto md:font-extrabold lg:text-5xl lg:pb-2">
            moving every customer with care
          </p>
          <p className="font-normal text-xl tracking-wider text-lightGray md:font-normal lg:text-2xl">
            Every step of your move, handled with care and precision.
          </p>
          <div className="flex relative top-20 gap-4 w-full ">
            {/* Link to the contact page using button to navigate to page */}
            <Link to="/contact">
              <button className="border p-2 rounded bg-deepYellow text-royalBlue lg:text-2xl">
                Start Move
              </button>
            </Link>

            {/* Link to the about page using button to navigate to page */}
            <Link to="/about">
              <button className="border p-2 rounded bg-royalBlue text-deepYellow lg:text-2xl">
                About Us
              </button>
            </Link>
          </div>
        </section>

        <article className="w-[415px] mx-auto mt-28 pb-10 md:w-9/12 lg:w-11/12 lg:grid lg:grid-cols-2 lg:gap-8 bg-slate-50 bg-opacity-35 rounded">
          {/* Image Section - Left on Large Screens */}
          <div className="shadow-md rounded-lg md:w-11/12 md:mx-auto md:pt-3">
            <img
              src={companyEmp}
              alt="company employees"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Content - Right on Large Screens */}
          <div className="px-4 w-full flex flex-col justify-center">
            <div className="text-4xl font-bold font-Playfair pt-4 text-royalBlue drop-shadow-md tracking-wider pb-5">
              Your One-Stop Shop for Loading, Unloading, and{" "}
              <span className="underline decoration-royalBlue">Moving!</span>
            </div>

            <p className="mt-4 text-gray-800 font-Roboto font-normal text-lg">
              At MeezHaul, we’re more than just movers—we’re your partners in a
              smooth, stress-free moving experience. Whether youre heading
              across town or across the country, our expert team handles every
              step with care and precision. From packing to unloading, we make
              moving simple, efficient, and worry-free. Let’s get you settled
              into your new space with ease!
            </p>
          </div>
        </article>

        <section className="relative top-12 pb-10">
          {/* Start rendering the component pages on homePage.jsx */}
          <div className="mt-16 md:mt-0 bg-gray-100">
            <ServicesPage />
          </div>

          <InfoBanner />
        </section>
        <HowItWorks />
      </div>

      <div className="bg-gray-100">
        <PriceComponent />
      </div>
      <WhyUs />
      <BookUs />
    </div>
  );
}

export default HomePage;
