import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FlipCard = ({ title, description, backText, icon }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-[290px] h-[290px] rounded-lg shadow-lg cursor-pointer transition-transform duration-500  ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Card Container */}
      <div className="w-full h-full relative">
        {/* Front Side */}
        {!flipped && (
          <div className="absolute w-full h-full bg-white flex flex-col justify-center items-center p-4 rounded-lg border-royalBlue border">
            {icon && <div className="mb-2">{icon}</div>}
            <h1 className="text-xl font-bold text-royalBlue font-Playfair">
              {title}
            </h1>
            <p className="text-gray-700 text-center font-Roboto font-normal">
              {description}
            </p>
            <button className="relative top-12 bg-deepYellow text-royalBlue px-4 py-2 rounded">
              Read More
            </button>
          </div>
        )}

        {/* Back Side */}
        {flipped && (
          <div className="absolute w-full h-full bg-royalBlue text-white flex flex-col justify-center items-center p-4 rounded-lg border-deepYellow border">
            <p className="text-center">{backText}</p>
            <button
              className="mt-4 bg-deepYellow text-royalBlue px-4 py-2 rounded"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click from bubbling up
                setFlipped(false);
              }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipCard;
