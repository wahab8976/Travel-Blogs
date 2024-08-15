"use client";
import ReviewCard from "@/components/ReviewCard";
import WriteReview from "@/components/WriteReview";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <div className="flex bg-gradient-to-b from-blue-400 to-white h-screen flex-col items-center text-center justify-center pt-28">
          <span className="text-4xl font-semibold space-y-1">
            <h1>Share your Travel Experience</h1>
            <h1>In the form of Story</h1>
          </span>

          <span className="flex justify-center relative w-1/2 mt-14 ml-20">
            <input
              className="w-full p-3 rounded-full pl-10 pr-12 border border-gray-500 placeholder-gray-400 focus:border-blue-700 focus:outline-none"
              type="text"
              placeholder="What would you like to review?"
            />
            <img
              src="/blueSearch.png"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
          </span>
        </div>
      </div>

      
      <div>
        <WriteReview />
      </div>

      <div className="flex justify-between px-3 mb-10 pt-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Top Places with reviews</h2>
          <span className="text-sm">
            Travelers want to see more reviews of these Places
          </span>
        </div>

      

        <button className="flex items-center justify-center gap-1 rounded-full text-blue-500 bg-transparent  px-5 border-blue-500 border-2">
          <img src="/pencil.png" alt="" /> <span>Write New Review </span>
        </button>
      </div>

      <div className="flex flex-col items-center ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default page;
