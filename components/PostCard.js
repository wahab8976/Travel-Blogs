import React from "react";

const PostCard = () => {
  return (
    <div
      id="MainPagePostCard"
      className="mb-3 w-[360px] md:w-[45vw] md:[h-70vh] h-[450px] rounded-t-2xl flex flex-col"
    >
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
        <h3 className="text-xl font-bold">A Wonderful Journey to India</h3>
        <p className="mt-2 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          recusandae ullam a sint unde velit harum neque dicta libero fugit?
          Iure, laboriosam illo.
        </p>
        <button className="flex items-center mt-4 px-3 py-1  text-blue-500 rounded-md">
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
  );
};

export default PostCard;
