import React from "react";
import DestinationPageCard from "@/components/DestinationPageCard";

const page = () => {
  return (
    <div>
      <div>
        {/* Background Image with Centered Text */}
        <div className="relative w-full h-[90vh]">
          <img
            className="w-full h-full object-cover"
            src="/globe.jpg"
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
            <div>
              <h1 className="text-4xl font-semibold">
                Discover the Wonders of our
              </h1>
              <h1 className="text-4xl mt-2 font-semibold">
                planet, one adventure at a time
              </h1>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2 mt-14 ml-20">
          <input
            className="w-full p-3 rounded-full pl-10 pr-12 border border-gray-500 placeholder-gray-400 focus:border-blue-700 focus:outline-none"
            type="text"
            placeholder="Search for places, hotels, and restaurants"
          />
          <img
            src="/blueSearch.png"
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        </div>

        {/* Sorting Algorithm is still pending */}
        {/* Destination Cards */}
        <div className="mt-20 flex flex-wrap justify-center px-10 gap-5">
          <DestinationPageCard />
          <DestinationPageCard />
          <DestinationPageCard />
          <DestinationPageCard />
          <DestinationPageCard />
          <DestinationPageCard />
        </div>
        
      </div>
    </div>
  );
};

export default page;
