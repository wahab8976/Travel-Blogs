import React from "react";

const MainPageSection = ({ bgImage, city, country }) => {
  return (
    <section className="relative w-full md:w-1/3 h-[90vh] flex items-end ">
      <img
        src={bgImage}
        alt="Background Image"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-50 p-5 text-white bg-black bg-opacity-50">
        <h2 className="relative z-50 text-lg md:text-2xl ">Why you should</h2>
        <h2 className="text-lg md:text-2xl">reconsider The</h2>
        <span className="flex items-center">
          <h2 className="text-lg md:text-2xl">
            {city}, {country} Trip
          </h2>
          <img className="ml-2" src="/Arrow.png" alt="NextIcon" />
        </span>
      </div>
    </section>
  );
};

export default MainPageSection;