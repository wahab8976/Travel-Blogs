import React from "react";

const distinaationPageCard = () => {
  return (
    <div className="mb-5 w-[280px] h-[280px] rounded-t-xl mt-5  ">
      <div className="w-full flex flex-col items-start h-[80%] rounded-t-xl">
        <img
          className="object-cover w-full h-full rounded-xl"
          src="/India.jpg"
          alt=""
        />
      </div>
      <span className="flex flex-col gap-1 mt-2">
        <p className="text-xs">Asia</p>
        <h2 className="font-bold">China</h2>
      </span>
    </div>
  );
};

export default distinaationPageCard;
