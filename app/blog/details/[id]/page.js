"use client";
import CountrySpecialCard from "@/components/CountrySpecialCard";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const [userBlogs, setUserBlogs] = useState([]);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailedBlog = async () => {
      try {
        const response = await fetch(`/api/blog/details`, {
          method: "POST",
          body: JSON.stringify({ id }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setBlogDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    id && fetchDetailedBlog();
  }, [id]);

  useEffect(() => {
    const fetchStoriesByAuthor = async () => {
      if (!blogDetails.user?._id) {
        // If _id is not available, don't make the request
        return;
      }

      try {
        const response = await fetch(
          `/api/blog/details?author=${blogDetails.user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoriesByAuthor();
  }, [blogDetails.user?._id]); // Only trigger when user._id changes

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

  const { city, state, country } = splitLocation(blogDetails.location || "");

  const handleCardClick = (id) => {
    router.push(`/blog/details/${id}`);
  };

  return (
    <div className="overflow-hidden">
      {/* Background Image Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={blogDetails.imageUrl}
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <div>
            <h1 className="md:text-[20vw] text-[70px] font-semibold px-10">
              {city || "City"}
            </h1>
          </div>
        </div>
      </div>

      {/* Country Information Section */}
      <div className="flex flex-col mt-10 items-center">
        <h2 className="mx-auto text-center text-6xl text-blue-600 font-bold font-sans">
          {country || "Country"}
        </h2>
        <h3 className="text-xl py-2 text-gray-500">
          {state ? `${state}, ${country}` : country}
        </h3>
        <article className="text-center mt-5 md:px-32 px-3 h-auto">
          {blogDetails.review || "Review"}
        </article>
      </div>
      <div className="flex mt-5 justify-end items-center px-10">
        {blogDetails.user?.userName && (
          <span className="hover:cursor-pointer">
            Author: {blogDetails.user?.userName}
          </span>
        )}
      </div>
      {/* Top Sights and Locations Section */}
      <div className="pt-10">
        <span className="text-blue-500 px-5 text-sm">
          01 / More stories from Author
        </span>
        <div className="flex flex-col items-start px-5 text-3xl pt-3 font-semibold">
          <span>Top Destinations for</span>
          <span>Your Travel Plans</span>
        </div>
      </div>

      {/* Carousel of Country Special Cards */}
      <div className="flex pt-10 flex-wrap gap-2 justify-center">
        <div className="carousel carousel-center rounded-box max-w-full bg-white space-x-4 p-4">
          {userBlogs.map((blog) => (
            <CountrySpecialCard
              key={blog._id}
              imageUrl={blog.imageUrl}
              location={blog.location}
              handleCardClick={() => router.push(`/blog/details/${blog._id}`)}
            />
          ))}
        </div>
      </div>

      {/* Other Fun Places Section */}
      {/* <div className="pt-10">
        <span className="text-blue-500 px-5 text-sm">
          03 / Other Fun Places in Croatia
        </span>
        <div className="flex flex-col items-start px-5 text-3xl pt-3 font-semibold">
          <span>Other Fun Places</span>
          <span>In Croatia</span>
        </div>
      </div> */}

      {/* Additional CountrySpecialCard Items */}
      {/* <div className="flex pt-10 flex-wrap gap-2 justify-center">
        <CountrySpecialCard />
        <CountrySpecialCard />
        <CountrySpecialCard />
      </div> */}
      {/* <span className="flex justify-center mb-10">
        <button className="rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
          View all other Places
        </button>
      </span> */}
    </div>
  );
};

export default Page;
