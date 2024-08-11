import React from "react";
import RatingStars from "./RatingStars";

const ReviewCard = () => {
  return (
    <div className="flex justify-center gap-3">
      <div className="w-[35vw] h-[320px] bg-green-400 rounded-2xl "></div>
      <article className="p-3 w-[35vw] bg-blue-300 overflow-hidden h-[320px] pb-3 rounded-xl">
        <p className="text-xs text-gray-500">Mumbai, India</p>
        <h1 className="pt-3 text-2xl font-semibold">
          A Wonderful journey to India
        </h1>
        <p className="pt-3 ">
          Here's a text of exactly 500 characters: --- In the heart of the
          bustling city, there stood a towering skyscraper, its glass walls
          reflecting the vibrant colors of the sunset. The streets below were
          alive with the sounds of honking cars, chattering pedestrians, and
          distant music. High above, in a small apartment on the 27th floor, a
          young artist sat by the window, sketching the skyline. Lorem ipsum
          dol
        </p>
        <RatingStars />
      </article>
    </div>
  );
};

export default ReviewCard;
