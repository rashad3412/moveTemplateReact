import movingCompany from "/assets/HomeComPics/movingCompany.jpg";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <section className="relative text-white text-center py-10 min-h-[650px]">
          {/* Overlay & Image Wrapper */}
          <div className="absolute inset-0 z-0">
            <img
              src={movingCompany}
              alt="building"
              className="w-full h-full object-cover absolute"
            />
            <div className="absolute inset-0 bg-royalBlue bg-opacity-80"></div>
          </div>

          {/* Text Content (Now On Top) */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold uppercase tracking-wide">
              Testimonials
            </h3>
            <h1 className="text-4xl font-bold mt-2">What Clients Say</h1>
            <p className="mt-4 text-lg max-w-lg mx-auto">
              You heard it from us, now hear it from our clients.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
