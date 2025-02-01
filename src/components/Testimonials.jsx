import movingCompany from "/assets/HomeComPics/movingCompany.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "MeezHaul was a great experience for me and the effort everyone put in to make this process smooth and professional.",
      author: "John Harley",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      text: "Fantastic service! MeezHaul made my move stress-free and efficient.",
      author: "Sarah Williams",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      text: "Highly recommend MeezHaul. Professional team and great support.",
      author: "David Clark",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      text: "MeezHaul provided top-notch service! Their team went above and beyond.",
      author: "Emily Johnson",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
          <div className="relative z-10 top-14">
            <h3 className="text-md font-semibold font-Playfair uppercase tracking-wider text-deepYellow">
              Testimonials
            </h3>
            <h1 className="text-4xl font-Roboto mt-2 font-extrabold tracking-normal">
              What Clients Say
            </h1>
            <p className="mt-4 text-lg max-w-lg mx-auto font-Roboto ">
              You heard it from us, now hear it from our clients!
            </p>
            <article className="flex justify-center min-h-[25vh] relative">
              <div className="relative bg-slate-200 top-6 w-9/12 p-6 rounded-lg text-royalBlue border-royalBlue border shadow-lg text-lg leading-relaxed">
                {testimonials[index].text}
              </div>
            </article>

            {/* Author Section */}
            <div className="flex flex-col items-center relative top-8 border-t border-deepYellow pt-4 w-9/12 mx-auto">
              <h3 className="font-semibold text-xl tracking-wide font-Roboto">
                {testimonials[index].author}
              </h3>
              <div className="text-deepYellow mt-2 tracking-widest">
                {testimonials[index].rating}
              </div>
            </div>
            {/* Indicator Squares */}
            <ul className="flex relative top-14 justify-center gap-4 mt-4">
              {testimonials.map((_, i) => (
                <li
                  key={i}
                  className={`w-4 h-4 flex items-center justify-center border-2 rounded-md cursor-pointer ${
                    i === index
                      ? "bg-deepYellow border-deepYellow text-white"
                      : "border-gray-400 text-gray-400"
                  }`}
                  onClick={() => setIndex(i)} // Click to change manually
                >
                  {""}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
