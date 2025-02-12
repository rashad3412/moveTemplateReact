import { Calendar, Package, Truck, ShieldCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <>
      <>
        <section className="flex flex-col items-center text-center py-10">
          {/* Section Heading */}
          <h1 className="text-royalBlue text-xl font-semibold tracking-wide">
            Working Process
          </h1>
          <h2 className="text-royalBlue text-3xl font-extrabold mt-2">
            How It Works
          </h2>

          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-11/12">
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white ">
              <Calendar
                size={50}
                className="text-royalBlue bg-deepYellow rounded-full p-2"
              />
              <h3 className="text-lg font-semibold mt-3">Book Your Service</h3>
              <p className="text-gray-700 mt-2 text-sm">
                Schedule your move at your convenience with our easy booking
                system.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white ">
              <Package
                size={50}
                className="text-royalBlue bg-deepYellow rounded-full p-2"
              />
              <h3 className="text-lg font-semibold mt-3">Pack and Load</h3>
              <p className="text-gray-700 mt-2 text-sm">
                Our experts pack your belongings securely and load them with
                care.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <Truck
                size={50}
                className="text-royalBlue bg-deepYellow rounded-full p-2"
              />
              <h3 className="text-lg font-semibold mt-3">Transportation</h3>
              <p className="text-gray-700 mt-2 text-sm">
                We transport your items safely and efficiently to the
                destination.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white">
              <ShieldCheck
                size={50}
                className="text-royalBlue bg-deepYellow rounded-full p-2"
              />
              <h3 className="text-lg font-semibold mt-3">Safe Delivery</h3>
              <p className="text-gray-700 mt-2 text-sm">
                Your items arrive securely and on time, ready for your new
                space.
              </p>
            </div>
          </article>
        </section>
      </>
    </>
  );
};

export default HowItWorks;
