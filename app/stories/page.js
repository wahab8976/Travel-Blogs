import PostCard from "@/components/PostCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-grow flex-col">
        <div className="flex flex-grow justify-center relative z-10">
          <section className="w-1/3 h-[90vh] flex items-end relative overflow-hidden">
            <img
              src="/bg4.jpg"
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
              src="/bg5.jpg"
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
              src="/bg6.jpg"
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
          <h1>Travel Stories from Different </h1>
          <h1>People Globally</h1>
        </div>
      </span>

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
      </div>
    </div>
  );
};

export default page;
