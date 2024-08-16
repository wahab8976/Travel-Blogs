"use client";
import React, { useState, useEffect } from "react";

const ClientCarousel = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sections.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds autoplay delay

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {sections.map((item, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className="absolute w-full bottom-0 z-50 px-5 py-2 pb-5 text-white bg-black bg-opacity-50">
              <h2 className=" text-sm relative z-50 md:text-2xl ">
                Why you should
              </h2>
              <h2 className="text-sm md:text-2xl">reconsider The</h2>
              <span className="flex items-center">
                <h2 className="text-sm  md:text-2xl">
                  {item.city ? item.city : "Unknown City"},{" "}
                  {item.country ? item.country : "Unknown Country"} Trip
                </h2>
                <img className="ml-2" src="/Arrow.png" alt="NextIcon" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="carousel-dots absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
