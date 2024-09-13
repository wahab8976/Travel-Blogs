"use client";
import React, { useRef, useState, useEffect } from "react";
import MainPageSection from "@/components/MainPageSection";
import ClientCarousel from "@/components/ClientMainCarousel";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";
import CarouselButton from "@/components/CarouselButton";

const Home = () => {
  const [sectionData, setSectionData] = useState([]);
  const [fetchStories, setFetchStories] = useState([]);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);
  const topLocationsCarouselRef = useRef(null); // Ref for the second carousel

  const router = useRouter();
  useEffect(() => {
    // Simulate data fetching with sample data
    const fetchSectionData = async () => {
      try {
        const data = [
          { bg: "/bg1.jpg", city: "City One", country: "Country One" },
          { bg: "/bg2.jpg", city: "City Two", country: "Country Two" },
          { bg: "/bg3.jpg", city: "City Three", country: "Country Three" },
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
        <div className="hidden md:flex flex-wrap">
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
        <h3 className="px-3 text-xl font-bold">Plan Your Best Trip Ever</h3>
        <span className="flex sm:items-center sm:flex-row items-start flex-col mx-3 justify-between">
          <p>Making the most of your travel experience in 2023</p>
          <button className="sm:mt-0 mt-3 items-center rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
            View all Destinations
          </button>
        </span>
      </div>

      {/* Main Carousel of Landing page */}
      <div
        ref={carouselRef}
        className="carousel mt-5 carousel-center bg-transparent rounded-box max-w-screen space-x-4 p-4"
      >
        {carouselItems.map((item, index) => (
          <div className="carousel-item flex flex-col" key={index}>
            <img
              src={item.src}
              className="rounded-box relative z-10"
              alt={`Carousel image ${index + 1}`}
            />
            <span className="px-5 text-lg relative font-semibold z-20 top-[-40px] text-white">
              {item.country}
            </span>
          </div>
        ))}
      </div>
      <CarouselButton scrollRef={carouselRef} />

      {/* Top locations Carousel */}
      <div className="flex md:mt-10 justify-between px-2">
        <div className="pt-2">
          <h3 className="px-3 text-xl font-bold">Top Locations to Explore</h3>
          <span className="flex mx-3 justify-between">
            <p>Here are some of the most visited places in 2023</p>
          </span>
        </div>
        <CarouselButton scrollRef={topLocationsCarouselRef} />
      </div>

      <div
        ref={topLocationsCarouselRef} // Use ref for the second carousel
        className="carousel mt-5 carousel-center bg-transparent rounded-box max-w-screen overflow-x-hidden p-4"
      >
        <div className="flex space-x-4">
          {carouselItems.map((item, index) => (
            <div
              className="carousel-item flex flex-col min-w-[300px]"
              key={index}
            >
              <img
                src={item.src}
                className="rounded-box"
                alt={`Carousel image ${index + 1}`}
              />
              <p className="px-5 pt-2">City, Country</p>
              <span className="px-5 text-lg font-semibold text-black">
                {item.country}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* <CarouselButton scrollRef={topLocationsCarouselRef} /> */}

      {/* Top Travel Stories */}
      {/* <div className="mt-10">
        <h3 className="px-3 text-xl font-bold">Top Travel Stories</h3>
        <span className="flex mx-3 flex-col items-start sm:flex-row sm:items-center justify-between">
          <p>Discover our top travel stories from our active users</p>
          <button
            onClick={() => router.push("/stories")}
            className="mt-3 sm:mt-0 rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2"
          >
            View all Stories
          </button>
        </span>
      </div> */}

      {/* Pending ........... TODO */}
      {/* <div className="flex mt-7 flex-wrap justify-center gap-4">
        <PostCard />
      </div> */}
      <div className="flex md:mt-10 justify-between px-2">
        <div className="pt-2">
          <h3 className="px-3 text-xl font-bold">Top Travel Stories</h3>
          <span className="flex mx-3 justify-between">
            <p>Discover our top travel stories from our active users</p>
          </span>
        </div>
        <CarouselButton scrollRef={topLocationsCarouselRef} />
      </div>

      <div
        ref={topLocationsCarouselRef} // Use ref for the second carousel
        className="carousel mt-5 carousel-center bg-transparent rounded-box max-w-screen overflow-x-hidden p-4"
      >
        <div className="flex space-x-4">
          {fetchStories.map((item, index) => (
            <div
              className="carousel-item flex flex-col min-h-[500px] max-w-[300px]"
              key={index}
            >
              <img
                src={item.imageUrl}
                className="rounded-box h-[70%] object-cover" // Apply object-cover here
                alt={`Carousel image ${index + 1}`}
              />
              <span className="px-5 text-lg font-semibold text-black">
                {item.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
