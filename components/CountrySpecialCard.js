import React from "react";

const CountrySpecialCard = ({ imageUrl, location, handleCardClick }) => {
  return (
    <div onClick={handleCardClick}>
      {" "}
      {/* Trigger the passed function on click */}
      <div className="hover:cursor-pointer mb-5 w-[280px] h-[280px] rounded-t-xl mt-5">
        <div className="w-full flex flex-col items-start h-[80%] rounded-t-xl">
          <img
            className="object-cover w-full h-full rounded-xl"
            src={imageUrl}
            alt="Country special"
          />
        </div>
        <span className="flex flex-col gap-1 mt-2">
          <h2 className="font-bold">{location}</h2>
        </span>
      </div>
    </div>
  );
};

export default CountrySpecialCard;
