import React from "react";
import PostCard from "@/components/PostCard";


export default function Home() {
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
        <div className="flex flex-grow justify-center relative z-10">
          <section className="w-1/3 h-[90vh] flex items-end relative overflow-hidden">
            <img
              src="/bg1.jpg"
              alt="Background Image"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 p-5 text-white">
              <h2>Why you should</h2>
              <h2>reconsider The</h2>
              <span className="flex items-center">
                <h2>Inca Trail, Peru Trip</h2>
                <img className="ml-2" src="/Arrow.png" alt="NextIcon" />
              </span>
            </div>
          </section>
          <section className="w-1/3 h-[90vh] flex items-end relative overflow-hidden">
            <img
              src="/bg2.jpg"
              alt="Background Image"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 p-5 text-white">
              <h2>Why you should</h2>
              <h2>reconsider The</h2>
              <span className="flex items-center">
                <h2>Inca Trail, Peru Trip</h2>
                <img className="ml-2" src="/Arrow.png" alt="NextIcon" />
              </span>
            </div>
          </section>
          <section className="w-1/3 h-[90vh] flex items-end relative overflow-hidden">
            <img
              src="/bg3.jpg"
              alt="Background Image"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative z-10 p-5 text-white">
              <h2>Why you should</h2>
              <h2>reconsider The</h2>
              <span className="flex items-center">
                <h2>Inca Trail, Peru Trip</h2>
                <img className="ml-2" src="/Arrow.png" alt="NextIcon" />
              </span>
            </div>
          </section>
        </div>
      </div>
      <span className="absolute font-bold inset-0 flex items-center justify-center z-20 text-center text-white text-4xl pointer-events-none">
        <div>
          <h1>Discover New Places and Create</h1>
          <h1>Unforgettable Memories</h1>
        </div>
      </span>
      <div className="pt-5">
        <h3 className="px-3 text-xl font-bold">Plan your best trip ever</h3>
        <span className="flex items-center mx-3 justify-between">
          <p>Making the most of your travel experience in 2023</p>
          <button className="items-center rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
            View all Destinations
          </button>
        </span>
      </div>
      {/* Main Carousel of Landing page */}
      <div className="carousel mt-5 carousel-center bg-transparent rounded-box max-w-screen space-x-4 p-4">
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
      <div className="pt-2">
        <h3 className="px-3 text-xl font-bold">Top Locations to Explore</h3>
        <span className="flex mx-3 justify-between">
          <p>Here are some of the most visited places in 2023</p>
        </span>
      </div>
      {/* Top locations Carousel */}
      <div className="carousel mt-5 carousel-center bg-transparent rounded-box max-w-screen space-x-4 p-4">
        {carouselItems.map((item, index) => (
          <div className="carousel-item flex flex-col" key={index}>
            <img
              src={item.src}
              className="rounded-box relative z-10"
              alt={`Carousel image ${index + 1}`}
            />
            <p className="px-5 pt-2">City, Country</p>
            <span className="px-5 text-lg relative font-semibold z-20 text-black">
              {item.country}
            </span>
          </div>
        ))}
      </div>
      {/* Location based on Search Login is pending */}
      <div className="mt-10">
        <h3 className="px-3 text-xl font-bold">Top Travel Stories</h3>
        <span className="flex mx-3 items-center justify-between">
          <p>Discover our top travel stories from our active users</p>
          <button className="rounded-3xl text-blue-500 bg-transparent py-1 px-3 border-blue-500 border-2">
            View all Stories
          </button>
        </span>
      </div>
      <div className="flex mt-7 flex-wrap justify-center gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
}
