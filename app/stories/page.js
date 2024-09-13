"use client";
import React, { useRef, useState, useEffect } from "react";
import MainPageSection from "@/components/MainPageSection";
import ClientCarousel from "@/components/ClientMainCarousel";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";

const Home = () => {
  const [sectionData, setSectionData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStories, setFetchStories] = useState([]);
  const router = useRouter();

  const handleDetailRedirect = (_id) => {
    router.push(`/blog/details/${_id}`);
  };

  useEffect(() => {
    // Simulate data fetching with sample data
    const fetchSectionData = async () => {
      try {
        const data = [
          { bg: "/bg4.jpg", city: "City One", country: "Country One" },
          { bg: "/bg5.jpg", city: "City Two", country: "Country Two" },
          { bg: "/bg6.jpg", city: "City Three", country: "Country Three" },
        ];
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSectionData(data);
      } catch (error) {
        console.error("Failed to fetch section data", error);
      }
    };

    const fetchAllReviews = async () => {
      try {
        const response = await fetch(`/api/stories`);
        const jsonResponse = await response.json();

        if (!response.ok) {
          setError(jsonResponse.message || "Failed to fetch reviews");
        } else {
          if (Array.isArray(jsonResponse.body)) {
            setFetchStories(jsonResponse.body);
          } else {
            setError("Unexpected response format");
          }
        }
      } catch (fetchError) {
        setError("An error occurred while fetching reviews");
      }
    };

    fetchAllReviews();
    fetchSectionData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-grow flex-col">
        {/* Carousel for smaller screens */}
        <div className="md:hidden w-full h-[80vh]">
          <ClientCarousel sections={sectionData} />
        </div>

        {/* Grid for larger screens */}
        <div className="hidden md:flex flex-wrap w-full h-[90vh]">
          {sectionData.map((item, index) => (
            <MainPageSection
              key={index}
              bgImage={item.bg}
              city={item.city}
              country={item.country}
            />
          ))}
        </div>
      </div>

      <div className="pt-5">
        <h3 className="px-3 text-xl font-bold">Top Travel Stories</h3>
        <span className="flex sm:items-center sm:flex-row items-start flex-col mx-3 justify-between">
          <p>Explore our latest Stories from our active users</p>
          <button className="sm:mt-0 mt-3 items-center rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
            View all Stories
          </button>
        </span>
      </div>

      <div className="flex mt-7 flex-wrap justify-center gap-4">
        {fetchStories.map((story) => {
          return (
            <PostCard
              key={story._id}
              {...story}
              handleDetailRedirect={handleDetailRedirect}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
