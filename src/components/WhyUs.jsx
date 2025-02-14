import { ShieldCheck } from "lucide-react";

const WhyUs = () => {
  return (
    <>
      <section className=" bg-royalBlue py-12 px-6 text-center text-white">
        <h1 className="text-deepYellow text-3xl font-bold mb-6">
          Why Choose Us!
        </h1>
        <p className="text-lg mb-12 ">
          We are leaders in the moving business, committed to providing reliable
          and seamless relocation experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-6">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-center">
              <div className="px-2">
                <ShieldCheck
                  size={45}
                  className="text-royalBlue bg-deepYellow rounded-full p-2"
                />
              </div>
              Our Experience
            </h2>
            <p className="text-gray-400">
              With years of expertise in the moving industry, our team ensures
              every move is handled with care and precision. We understand the
              challenges and deliver tailored solutions to meet your unique
              needs.
            </p>
          </div>

          <div className="p-6">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <div className="px-2">
                <ShieldCheck
                  size={45}
                  className="text-royalBlue bg-deepYellow rounded-full p-2"
                />
              </div>
              Certified Company
            </h2>
            <p className="text-gray-400">
              Our certification guarantees that we meet the highest standards in
              the moving industry. We are fully insured, so you can have peace
              of mind knowing your belongings are in safe hands.
            </p>
          </div>

          <div className="p-6">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <div className="px-2">
                <ShieldCheck
                  size={45}
                  className="text-royalBlue bg-deepYellow rounded-full p-2"
                />
              </div>
              Online Community
            </h2>
            <p className="text-gray-400">
              Join our growing community of movers and clients who share tips,
              advice, and experiences. We believe in making moving a
              collaborative and supportive experience for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
