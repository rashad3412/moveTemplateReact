const Pricing = () => {
  return (
    <>
      <section className="py-12 px-6 ">
        {/* Pricing Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-royalBlue">Pricing</h2>

          <p className="mt-3 text-gray-700">
            View our subscription packages to see what fits your moving needs.
          </p>
        </div>

        {/* Pricing Plan */}
        <div className="mt-10 max-w-lg   bg-white w-11/12 shadow-lg rounded-lg mx-auto  p-6 text-center">
          <h4 className="text-xl font-semibold text-royalBlue">Starter</h4>
          <p className="text-gray-600">Subscription</p>

          {/* Price Section */}
          <div className="mt-4">
            <span className="text-4xl font-bold text-deepYellow">$60</span>
            <span className="text-gray-500 ml-2">/ Monthly</span>
          </div>

          {/* Features List */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Boxes for packing</li>
            <li>✔ Packing materials</li>
            <li>✔ Tape for fragile items</li>
            <li>✔ Movers command</li>
            <li>✔ Truck for moving</li>
          </ul>
        </div>
        <div className="mt-10 max-w-lg   bg-white w-11/12 shadow-lg rounded-lg mx-auto  p-6 text-center">
          <h4 className="text-xl font-semibold text-royalBlue">Standard</h4>
          <p className="text-gray-600">Subscription</p>

          {/* Price Section */}
          <div className="mt-4">
            <span className="text-4xl font-bold text-deepYellow">$90</span>
            <span className="text-gray-500 ml-2">/ Monthly</span>
          </div>

          {/* Features List */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Boxes for packing</li>
            <li>✔ Packing materials</li>
            <li>✔ Tape for fragile items</li>
            <li>✔ Movers command</li>
            <li>✔ Truck for moving</li>
          </ul>
        </div>
        <div className="mt-10 max-w-lg   bg-white w-11/12 shadow-lg rounded-lg mx-auto  p-6 text-center">
          <h4 className="text-xl font-semibold text-royalBlue"></h4>
          <p className="text-gray-600">Subscription</p>

          {/* Price Section */}
          <div className="mt-4">
            <span className="text-4xl font-bold text-deepYellow">$115</span>
            <span className="text-gray-500 ml-2">/ Monthly</span>
          </div>

          {/* Features List */}
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Boxes for packing</li>
            <li>✔ Packing materials</li>
            <li>✔ Tape for fragile items</li>
            <li>✔ Movers command</li>
            <li>✔ Truck for moving</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pricing;
