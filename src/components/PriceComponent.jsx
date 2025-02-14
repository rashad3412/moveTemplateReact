const PriceComponent = () => {
  return (
    <>
      <section className="py-14 px-6 ">
        {/* Pricing Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-royalBlue font-Playfair">
            Pricing
          </h2>

          <p className="mt-3 text-gray-700 font-Roboto">
            View our subscription packages to see what fits your moving needs.
          </p>
        </div>

        {/* Pricing Plan */}
        <section className="md:grid md:grid-cols-2 lg:px-56">
          <div className="mt-10 max-w-lg   bg-white w-11/12 shadow-lg rounded-lg mx-auto  p-6 text-center ">
            <h4 className="text-xl font-semibold text-royalBlue font-Playfair">
              Starter
            </h4>
            <p className="text-gray-600 font-Playfair">Subscription</p>

            {/* Price Section */}
            <div className="mt-4">
              <span className="text-4xl font-bold text-deepYellow">$60</span>
              <span className="text-gray-500 ml-2">/ Monthly</span>
            </div>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-700 font-Roboto">
              <li>✔ Boxes for packing</li>
              <li>✔ Packing materials</li>
              <li>✔ Tape for fragile items</li>
              <li>✔ Movers command</li>
              <li>✔ Truck for moving</li>
            </ul>
          </div>
          <div className="mt-10 max-w-lg   bg-white w-11/12 shadow-lg rounded-lg mx-auto  p-6 text-center">
            <h4 className="text-xl font-semibold text-royalBlue font-Playfair">
              Standard
            </h4>
            <p className="text-gray-600 font-Playfair">Subscription</p>

            {/* Price Section */}
            <div className="mt-4">
              <span className="text-4xl font-bold text-deepYellow">$90</span>
              <span className="text-gray-500 ml-2 ">/ Monthly</span>
            </div>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-700 font-Roboto">
              <li>✔ Boxes for packing</li>
              <li>✔ Packing materials</li>
              <li>✔ Tape for fragile items</li>
              <li>✔ Movers command</li>
              <li>✔ Truck for moving</li>
            </ul>
          </div>
          <div className="md:relative md:left-1/2">
            <div className="mt-10 max-w-lg bg-white w-11/12 shadow-lg rounded-lg mx-auto p-6 text-center">
              <h4 className="text-xl font-semibold text-royalBlue font-Playfair">
                Premium
              </h4>
              <p className="text-gray-600 font-Playfair">Subscription</p>

              {/* Price Section */}
              <div className="mt-4">
                <span className="text-4xl font-bold text-deepYellow">$115</span>
                <span className="text-gray-500 ml-2">/ Monthly</span>
              </div>

              {/* Features List */}
              <ul className="mt-4 space-y-2 text-gray-700 font-Roboto">
                <li>✔ Boxes for packing</li>
                <li>✔ Packing materials</li>
                <li>✔ Tape for fragile items</li>
                <li>✔ Movers command</li>
                <li>✔ Truck for moving</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PriceComponent;
