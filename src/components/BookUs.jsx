const BookUs = () => {
  return (
    <>
      <section className="bg-slate-50 text-royalBlue font-roboto py-16 px-6 flex flex-col items-center">
        <article className="text-center max-w-lg">
          <h1 className="text-3xl font-playfair font-bold">Book Us</h1>
          <h2 className="text-2xl font-semibold mt-2">Get Your Free Quote</h2>
          <p className="text-gray-600 mt-4">
            Plan your move effortlessly with MeezHaul. Get a free, no-obligation
            quote and let us handle the heavy lifting.
          </p>
        </article>

        <form
          action=""
          className="mt-6 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us about your move..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalBlue"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-deepYellow text-royalBlue py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Get a Free Quote
          </button>
        </form>
      </section>
    </>
  );
};

export default BookUs;
