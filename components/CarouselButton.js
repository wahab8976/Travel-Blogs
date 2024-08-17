import React, { useRef } from "react";

const CarouselButton = ({ scrollRef }) => {

  
  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth; // Amount to scroll
      scrollRef.current.scrollBy({
        left: direction === "forward" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sm:flex hidden justify-center gap-1">
      <span
        onClick={() => scrollContainer("reverse")}
        className="hover:cursor-pointer"
      >
        <img
          className="p-2 rounded-full rotate-180 bg-blue-400"
          src="/next.png"
          alt="Previous"
        />
      </span>
      <span
        onClick={() => scrollContainer("forward")}
        className="hover:cursor-pointer"
      >
        <img
          className="p-2 rounded-full bg-blue-400"
          src="/next.png"
          alt="Next"
        />
      </span>
    </div>
  );
};

export default CarouselButton;
