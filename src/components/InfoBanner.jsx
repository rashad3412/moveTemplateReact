const InfoBanner = () => {
  return (
    <>
      <section className="flex justify-center bg-royalBlue py-10">
        <ul className="flex flex-wrap justify-center gap-10 md:gap-20 w-11/12 max-w-4xl h-auto md:h-auto">
          <div className="text-center">
            <li className="text-4xl font-bold text-lightGray">100</li>
            <li className="text-lg text-deepYellow font-medium">
              + Projects Done
            </li>
          </div>
          <div className="text-center">
            <li className="text-4xl font-bold text-lightGray">150</li>
            <li className="text-lg text-deepYellow font-medium">
              + Tons of Goods
            </li>
          </div>
          <div className="text-center">
            <li className="text-4xl font-bold text-lightGray">20-30</li>
            <li className="text-lg text-deepYellow font-medium">+ Employees</li>
          </div>
          <div className="text-center">
            <li className="text-4xl font-bold text-lightGray">10</li>
            <li className="text-lg text-deepYellow font-medium">+ Awards</li>
          </div>
        </ul>
      </section>
    </>
  );
};

export default InfoBanner;
