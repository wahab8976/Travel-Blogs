import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center mb-10 gap-3">
      <div className="md:w-[35vw] w-[80vw] h-[320px] rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="/India.jpg"
          alt="India"
        />
      </div>
      <article className="p-3 md:w-[35vw] w-[80vw] overflow-hidden h-[320px]  pb-3 rounded-xl">
        <p className="text-xs text-gray-500">Mumbai, India</p>
        <h1 className="pt-3 text-2xl font-semibold">
          A Wonderful Journey to India
        </h1>
        <p className="pt-3 h-[70%]  overflow-hidden">
          Here's a text of exactly 500 characters: --- In the heart of the
          bustling city, there stood a towering skyscraper, its glass walls
          reflecting the vibrant colors of the sunset. The streets below were
          alive with the sounds of honking cars, chattering pedestrians, and
          distant music. High above, in a small apartment on the 27th floor, a
          young artist sat by the window, sketching the skyline. Lorem ipsum dol
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          non sed aspernatur minus, id eligendi fuga doloribus animi autem, cum
          laborum quasi, culpa nobis. Repellendus fugit ad corrupti tempora
          perspiciatis velit perferendis itaque amet sint, totam ipsum, earum
          repellat quidem nulla beatae aliquid laborum minus nesciunt harum
          expedita eveniet. Quis assumenda atque laboriosam esse, possimus quia
          maiores alias neque similique fuga ratione consectetur eaque fugiat
          vel, sint porro accusamus asperiores harum obcaecati laudantium
          perspiciatis eius? Culpa voluptatem explicabo aliquid est? Quas vero
          culpa officia ad assumenda possimus delectus quo voluptate nobis, vel
          reprehenderit voluptatibus, sed eum, voluptas aliquam cupiditate
          corrupti?
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
      </article>
    </div>
  );
};

export default ReviewCard;
