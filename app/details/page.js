"use client";
import CountrySpecialCard from "@/components/CountrySpecialCard";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const splitLocation = (location) => {
    if (!location) return { city: null, state: null, country: null };

    const parts = location.split(",").map((part) => part.trim());

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

  const location = searchParams.get("location");
  const { city, state, country } = splitLocation(location);
  const review = searchParams.get("review");

  return (
    <div className="overflow-hidden">
      {/* Background Image Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/globe.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <div>
            <h1 className="md:text-[20vw] text-[70px] font-semibold px-10">
              {city}
            </h1>
          </div>
        </div>
      </div>

      {/* Country Information Section */}
      <div className="flex flex-col mt-10 items-center">
        <h2 className="text-6xl text-blue-600 font-bold font-sans">
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
          <div className="carousel-item">
            <div className="mb-3 w-[370px] h-[450px] rounded-t-2xl flex flex-col">
              <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/India.jpg"
                  alt="pic uploaded by user"
                />
              </div>
              <span className="flex text-xs justify-between px-4 py-2">
                <p>Mumbai, India</p>
                <p>Feb 27, 2023</p>
              </span>
              <span className="px-4 py-2">
                <h3 className="text-xl font-bold">
                  A Wonderful Travel Experience
                </h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  recusandae ullam a sint unde velit harum neque dicta libero
                  fugit? Iure, laboriosam illo.
                </p>
                <button className="flex items-center mt-4 px-3 py-1 text-blue-500 rounded-md">
                  Read full Post
                  <img
                    className="ml-2"
                    width={20}
                    height={20}
                    src="/external-link.png"
                    alt="External link"
                  />
                </button>
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="carousel-item">
            <div className="mb-3 w-[370px] h-[450px] rounded-t-2xl flex flex-col">
              <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/India.jpg"
                  alt="pic uploaded by user"
                />
              </div>
              <span className="flex text-xs justify-between px-4 py-2">
                <p>Delhi, India</p>
                <p>Mar 12, 2023</p>
              </span>
              <span className="px-4 py-2">
                <h3 className="text-xl font-bold">Exploring Delhi</h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  recusandae ullam a sint unde velit harum neque dicta libero
                  fugit? Iure, laboriosam illo.
                </p>
                <button className="flex items-center mt-4 px-3 py-1 text-blue-500 rounded-md">
                  Read full Post
                  <img
                    className="ml-2"
                    width={20}
                    height={20}
                    src="/external-link.png"
                    alt="External link"
                  />
                </button>
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="carousel-item">
            <div className="mb-3 w-[370px] h-[450px] rounded-t-2xl flex flex-col">
              <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/India.jpg"
                  alt="pic uploaded by user"
                />
              </div>
              <span className="flex text-xs justify-between px-4 py-2">
                <p>Goa, India</p>
                <p>Apr 5, 2023</p>
              </span>
              <span className="px-4 py-2">
                <h3 className="text-xl font-bold">Beaches of Goa</h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  recusandae ullam a sint unde velit harum neque dicta libero
                  fugit? Iure, laboriosam illo.
                </p>
                <button className="flex items-center mt-4 px-3 py-1 text-blue-500 rounded-md">
                  Read full Post
                  <img
                    className="ml-2"
                    width={20}
                    height={20}
                    src="/external-link.png"
                    alt="External link"
                  />
                </button>
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="carousel-item">
            <div className="mb-3 w-[370px] h-[450px] rounded-t-2xl flex flex-col">
              <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/India.jpg"
                  alt="pic uploaded by user"
                />
              </div>
              <span className="flex text-xs justify-between px-4 py-2">
                <p>Kolkata, India</p>
                <p>May 10, 2023</p>
              </span>
              <span className="px-4 py-2">
                <h3 className="text-xl font-bold">Kolkata Adventure</h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  recusandae ullam a sint unde velit harum neque dicta libero
                  fugit? Iure, laboriosam illo.
                </p>
                <button className="flex items-center mt-4 px-3 py-1 text-blue-500 rounded-md">
                  Read full Post
                  <img
                    className="ml-2"
                    width={20}
                    height={20}
                    src="/external-link.png"
                    alt="External link"
                  />
                </button>
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="carousel-item">
            <div className="mb-3 w-[370px] h-[450px] rounded-t-2xl flex flex-col">
              <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/India.jpg"
                  alt="pic uploaded by user"
                />
              </div>
              <span className="flex text-xs justify-between px-4 py-2">
                <p>Chennai, India</p>
                <p>Jun 22, 2023</p>
              </span>
              <span className="px-4 py-2">
                <h3 className="text-xl font-bold">Chennai Diaries</h3>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  recusandae ullam a sint unde velit harum neque dicta libero
                  fugit? Iure, laboriosam illo.
                </p>
                <button className="flex items-center mt-4 px-3 py-1 text-blue-500 rounded-md">
                  Read full Post
                  <img
                    className="ml-2"
                    width={20}
                    height={20}
                    src="/external-link.png"
                    alt="External link"
                  />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Other Fun Places Section */}
      <div className="pt-10">
        <span className="text-blue-500 px-5 text-sm">
          03 / Other Fun Places in Crotia
        </span>
        <div className="flex flex-col items-start px-5 text-3xl pt-3 font-semibold">
          <span>Other Fun Places</span>
          <span>In Crotia</span>
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
