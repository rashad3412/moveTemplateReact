import { useState, useEffect } from "react";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/services") // Fetch data from backend
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mt-5 p-6 max-w-lg mx-auto shadow-lg rounded-lg">
      <h1 className="text-2xl font-Playfair font-extrabold text-royalBlue mb-4 text-center">
        Our Services
      </h1>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={service.id} className="cursor-pointer">
            <button
              onClick={() => toggleDescription(index)}
              className="w-full flex justify-between items-center p-3 text-lg font-Playfair text-royalBlue bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              {service.name}
              <span className="text-xl text-deepYellow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 font-Roboto text-sm">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceDetails;
