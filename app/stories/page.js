"use client";
import React, { useRef, useState, useEffect } from "react";
import MainPageSection from "@/components/MainPageSection";
import ClientCarousel from "@/components/ClientMainCarousel";
import PostCard from "@/components/PostCard";
import CarouselButton from "@/components/CarouselButton";

const Home = () => {
  const [sectionData, setSectionData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchStories, setFetchStories] = useState([]);
  const carouselRef = useRef(null);

  const topLocationsCarouselRef = useRef(null); // Ref for the second carousel

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
          // Check if `body` exists and is an array
          if (Array.isArray(jsonResponse.body)) {
            console.log(`All reviews: ${JSON.stringify(jsonResponse.body)}`);
            setFetchStories(jsonResponse.body);
          } else {
            setError("Unexpected response format");
          }
        }
      } catch (fetchError) {
        console.error(fetchError);
        setError("An error occurred while fetching reviews");
      }
    };

    fetchAllReviews();
    fetchSectionData();
  }, []);

  const carouselItems = [
    {
      src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      country: "Croatia",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      country: "England",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      country: "United States",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      country: "Pakistan",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      country: "India",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      country: "Germany",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
      country: "Armenia",
    },
  ];

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

      {/* Additional content */}
      <div className="flex justify-center items-center mt-10">
        {/* <h1 className="text-4xl font-bold">Explore Amazing Destinations</h1> */}
      </div>
      <span className="absolute top-[-80px] font-bold inset-0 flex items-center justify-center z-20 text-center text-white md:text-4xl text-2xl pointer-events-none">
        <div>
          <h1>Discover New Places and Create</h1>
          <h1>Unforgettable Memories</h1>
        </div>
      </span>

      <div className="pt-5">
        <h3 className="px-3 text-xl font-bold">Top Travel Stories</h3>
        <span className="flex sm:items-center sm:flex-row items-start flex-col mx-3 justify-between">
          <p>Explore our latest Stories from our active users</p>
          <button className="sm:mt-0 mt-3 items-center rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
            View all Stories
          </button>
        </span>
      </div>

      {/* <CarouselButton scrollRef={topLocationsCarouselRef} /> */}

      {/* Top Travel Stories */}

      <div className="flex mt-7 flex-wrap justify-center gap-4">
        {fetchStories.map((story) => {
          return <PostCard key={story._id} {...story} />;
        })}
      </div>
    </main>
  );
};

export default Home;
