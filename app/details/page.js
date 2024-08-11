import CountrySpecialCard from "@/components/CountrySpecialCard";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-[90vh]">
        <img
          className="w-full h-full object-cover"
          src="/globe.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <div>
            <h1 className="text-[20vw] font-semibold ">Crotia</h1>
          </div>
        </div>
      </div>

      {/* Country Information Section */}
      <div className="flex flex-col mt-10 items-center">
        <h2 className="text-6xl text-blue-600 font-bold font-sans">Crotia</h2>
        <h3 className="text-xl py-2 text-gray-500">Europe</h3>
        <p className="text-center mt-5 px-32 h-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          dolorum, nostrum provident saepe minima quod natus quae modi
          recusandae veritatis. Cum dolores dolorum nostrum expedita impedit aut
          fugiat obcaecati saepe illum. Nam facilis expedita accusantium. Fugiat
          accusamus, fuga ratione aliquid autem voluptas reiciendis atque
          veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum, quod enim laboriosam ipsam fuga saepe, illo corrupti dolores
          voluptas nostrum repellendus. Totam, sunt.
        </p>
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
          {/* Card 1 */}
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
                  A Wonderful Journey to India
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

export default page;
