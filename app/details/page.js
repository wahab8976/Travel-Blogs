"use client";
import CountrySpecialCard from "@/components/CountrySpecialCard";
import { image } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  // Function to split location into city, state, and country
  const splitLocation = (location) => {
    if (!location) return { city: null, state: null, country: null };

    const decodedLocation = decodeURIComponent(location); // Decode the location string
    const parts = decodedLocation.split(",").map((part) => part.trim());

    if (parts.length === 3) {
      // City, State, Country
      return { city: parts[0], state: parts[1], country: parts[2] };
    } else if (parts.length === 2) {
      // City, Country
      return { city: parts[0], state: null, country: parts[1] };
    } else if (parts.length === 1) {
      // Country only
      return { city: null, state: null, country: parts[0] };
    }

    return { city: null, state: null, country: null };
  };

  // Fetch query parameters
  const location = searchParams.get("location");
  const { city, state, country } = splitLocation(location);
  const review = decodeURIComponent(searchParams.get("review"));
  const imageUrl = searchParams.get("imageUrl");

  return (
    <div className="overflow-hidden">
      {/* Background Image Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <div>
            <h1 className=" md:text-[20vw] text-[70px] font-semibold px-10">
              {city}
            </h1>
          </div>
        </div>
      </div>

      {/* Country Information Section */}
      <div className="flex flex-col mt-10 items-center">
        <h2 className="mx-auto text-center text-6xl text-blue-600 font-bold font-sans">
          {country}
        </h2>
        <h3 className="text-xl py-2 text-gray-500">{location}</h3>
        <article className="text-center mt-5 md:px-32 px-3 h-auto">
          {review}
        </article>
      </div>

      {/* Top Sights and Locations Section */}
      <div className="pt-10">
        <span className="text-blue-500 px-5 text-sm">
          01 / Top Sights and Locations
        </span>
        <div className="flex flex-col items-start px-5 text-3xl pt-3 font-semibold">
          <span>Top Destinations for</span>
          <span>Your Travel Plans</span>
        </div>
      </div>

      {/* Carousel of Hardcoded Cards */}
      <div className="flex pt-10 flex-wrap gap-2 justify-center">
        <div className="carousel carousel-center rounded-box max-w-full bg-white space-x-4 p-4">
          {/* Carousel items here... */}
        </div>
      </div>

      {/* Other Fun Places Section */}
      <div className="pt-10">
        <span className="text-blue-500 px-5 text-sm">
          03 / Other Fun Places in Croatia
        </span>
        <div className="flex flex-col items-start px-5 text-3xl pt-3 font-semibold">
          <span>Other Fun Places</span>
          <span>In Croatia</span>
        </div>
      </div>

      {/* Additional CountrySpecialCard Items */}
      <div className="flex pt-10 flex-wrap gap-2 justify-center">
        <CountrySpecialCard />
        <CountrySpecialCard />
        <CountrySpecialCard />
      </div>
      <span className="flex justify-center mb-10">
        <button className="rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
          View all other Places
        </button>
      </span>
    </div>
  );
};

export default Page;
