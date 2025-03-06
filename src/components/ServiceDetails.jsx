import { useState } from "react";

const services = [
  {
    name: "Local Moving",
    description:
      "Reliable and efficient local moving services to get you settled into your new home quickly. We handle everything from packing to unloading, ensuring a stress-free move within your area.",
  },
  {
    name: "Box Delivery",
    description:
      "Convenient box delivery solutions to streamline your packing process. We provide sturdy boxes and timely delivery, so you can focus on organizing your move.",
  },
  {
    name: "Long Distance",
    description:
      "Seamless long-distance moving services to transport your belongings safely and securely across state lines. We offer comprehensive planning and tracking for a worry-free relocation.",
  },
  {
    name: "Loading Unloading",
    description:
      "Let us handle the heavy lifting! Our team is equipped to safely move even the largest and most challenging items.",
  },
  {
    name: "Office Relocation",
    description:
      "Minimize downtime with our professional office relocation services. We handle the efficient transfer of your equipment and furniture, ensuring a smooth transition for your business.",
  },
  {
    name: "Storage Units",
    description:
      "Secure storage units available for short or long-term needsSecure and convenient storage units for your moving needs. We offer flexible storage options to accommodate your belongings, providing a safe space during your transition..",
  },
];

const ServiceDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mt-5 p-6 max-w-lg mx-auto shadow-lg rounded-lg">
      <h1 className="text-2xl font-Playfair font-extrabold text-royalBlue mb-4 text-center">
        About Our Services
      </h1>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="cursor-pointer">
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
