import movingBox from "/assets/HomeComPics/movingBoxes.jpg";

function ContactPage() {
  return (
    <div className="p-4">
      <div className="relative flex justify-center items-center ">
        <div className="relative rounded">
          {/* Image */}
          <img
            src={movingBox}
            alt="boxPictureTwo"
            className="w-full h-80 object-cover rounded"
          />
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black bg-opacity-70 w-full h-80 rounded"></div>
          {/* Add your form or contact details */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-bold mb-2 tracking-tight font-Roboto">
              Contact Us
            </h2>
            <div>
              <span className="pt-4">Home</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
