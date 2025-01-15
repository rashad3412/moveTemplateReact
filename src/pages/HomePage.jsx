//Home ComponentP
import boxPic from "/assets/HomeComPics/boxPic.jpg";

function HomePage() {
  return (
    <div className="relative">
      {/* Image Layer */}
      <div className="relative">
        <img src={boxPic} alt="boxPic" className="w-full h-auto" />
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </div>

      <div>
        {/* Text Layer with Lazy Load and Slide-Up Effect */}
        <section className="absolute top-40 px-3 text-slate-50  font-bold z-10 tracking-wide uppercase opacity-0 translate-y-10 animate-fadeInUp">
          <h1 className="font-extrabold mb-4 font-sans text-sm tracking-tight">
            move with meezHaul
          </h1>

          <p className="font-medium text-3xl tracking-wide mb-4 font-Roboto">
            moving every customer with care
          </p>
          <p className="font-normal text-xl tracking-wider text-lightGray">
            Every step of your move, handled with care and precision.
          </p>
          <div className="flex relative top-20 gap-4 w-full ">
            <button className="border p-2 rounded bg-deepYellow text-royalBlue">
              Start Move
            </button>
            <button className="border p-2 rounded bg-royalBlue text-deepYellow">
              About Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
