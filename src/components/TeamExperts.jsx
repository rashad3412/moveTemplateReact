import employeeOne from "/assets/HomeComPics/employeeOne.jpg";
import employeeTwo from "/assets/HomeComPics/employeeTwo.jpg";
import employeeThree from "/assets/HomeComPics/employeeThree.jpg";
import employeeFour from "/assets/HomeComPics/employeeFour.jpg";
import { useLocation } from "react-router-dom";
const TeamExperts = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <section>
          <div className="relative mt-36 flex flex-col items-center  md:mt-32 px-3 py-2">
            <h1 className="uppercase font-Roboto text-2xl font-extrabold tracking-wider text-royalBlue md:text-2xl ">
              Meet the Team
            </h1>
            <p className="p-2 mt-3 text-md text-gray-600 max-w-md mx-auto leading-relaxed w-11/12 ">
              The talented individuals who make{" "}
              <span className="font-semibold">MeezHaul</span> the best in the
              moving industry.
            </p>
            <section className="md:grid md:grid-cols-2 gap-4">
              <div className="relative mt-6 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-xl border-4 border-royalBlue">
                {/* Employee Image */}
                <img
                  src={employeeOne}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag Overlay */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-royalBlue text-white px-4 py-2 rounded-md shadow-md text-center w-[80%]">
                  <h3 className="font-semibold text-lg">Lucy Smith</h3>
                  <p className="text-sm opacity-80">Project Manager</p>
                </div>
              </div>

              <div className="relative mt-6 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-xl border-4 border-royalBlue">
                {/* Employee Image */}
                <img
                  src={employeeTwo}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag Overlay */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-royalBlue text-white px-4 py-2 rounded-md shadow-md text-center w-[80%]">
                  <h3 className="font-semibold text-lg">Tyler Boyd</h3>
                  <p className="text-sm opacity-80">Move enthusiast</p>
                </div>
              </div>
              <div className="relative mt-6 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-xl border-4 border-royalBlue ">
                {/* Employee Image */}
                <img
                  src={employeeThree}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag Overlay */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-royalBlue text-white px-4 py-2 rounded-md shadow-md text-center w-[80%]">
                  <h3 className="font-semibold text-lg">Rodney Harrison</h3>
                  <p className="text-sm opacity-80">Move enthusiast</p>
                </div>
              </div>
              <div className="relative mt-6 w-[350px] h-[400px] overflow-hidden rounded-lg shadow-xl border-4 border-royalBlue mb-7">
                {/* Employee Image */}
                <img
                  src={employeeFour}
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />

                {/* Name Tag Overlay */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-royalBlue text-white px-4 py-2 rounded-md shadow-md text-center w-[80%]">
                  <h3 className="font-semibold text-lg">Jim Benson</h3>
                  <p className="text-sm opacity-80">Move enthusiast</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default TeamExperts;
