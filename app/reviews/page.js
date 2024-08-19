"use client";
import ReviewCard from "@/components/ReviewCard";
import WriteReview from "@/components/WriteReview";
import React, { useState } from "react";

const Review = () => {
  const [enableReview, setEnableReview] = useState(false);
  const [error, setError] = useState(null);
  // Function to handle form submission
  // Form Data is coming from WriteComponent by passing this function as props
  const handleFormSubmission = async (formData) => {
    console.log("Form Data Submitted:", formData);

    if (
      formData.title.length === 0 ||
      formData.Review.length === 0 ||
      formData.location.length === 0 ||
      formData.date.length === 0
    ) {
      setError("All fields are required!");
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch("/api/reviews", options);
      const jsonResponse = await response.json();

      if (!response.ok) {
        // Display error from backend
        setError(jsonResponse.message || "An unknown error occurred.");
      } else {
        // Clear error if submission is successful
        setError(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message || "An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <div className="overflow-hidden flex bg-gradient-to-b from-blue-400 to-white h-screen flex-col items-center text-center justify-center pt-28">
        <span className="text-4xl font-semibold space-y-1">
          <h1>Share your Travel Experience</h1>
          <h1>In the form of Story</h1>
        </span>

        <span className="flex justify-center relative w-full mt-14 ml-3">
          <input
            className="md:text-sm text-xs md:w-[60vw] w-[98vw] p-3 flex justify-center rounded-full md:pl-10 pr-12 border border-gray-500 placeholder-gray-400 focus:border-blue-700 focus:outline-none"
            type="text"
            placeholder="What would you like to review?"
          />
          <img
            src="/blueSearch.png"
            alt="Search"
            className="relative right-10 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        </span>
      </div>

      <div className="flex md:flex-row flex-col justify-between px-3 mb-10 pt-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Top Places with reviews</h2>
          <span className="text-sm">
            Travelers want to see more reviews of these Places
          </span>
        </div>

        <button
          onClick={() => setEnableReview(true)}
          className="flex mt-5 w-[230px] items-center justify-center gap-1 rounded-full text-blue-500 bg-transparent px-5 border-blue-500 border-2"
        >
          <img src="/pencil.png" alt="write blog" />
          <span className="p-2">Write New Review</span>
        </button>
      </div>

      {/* Container for transition */}
      <div
        className={`w-full transform transition-all duration-300 ease-in-out ${
          enableReview ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {enableReview ? (
          <>
            <WriteReview handleFormSubmission={handleFormSubmission} />
            <span className="flex gap-2 justify-center">
              <button
                className="mb-5 bg-red-500 text-white p-2 rounded-lg"
                onClick={() => setEnableReview(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mb-5 bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => {
                  // Simulate form submission by triggering the form's submit event
                  const form = document.querySelector("form");
                  if (form) {
                    form.dispatchEvent(
                      new Event("submit", { cancelable: true, bubbles: true })
                    );
                  }
                }}
              >
                Add Review
              </button>
            </span>

            {error && (
              <div className="flex justify-center text-red-700 text-sm">
                {error}
              </div>
            )}
          </>
        ) : null}
      </div>

      {!enableReview && (
        <div className="flex flex-col items-center">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      )}
    </div>
  );
};

export default Review;
