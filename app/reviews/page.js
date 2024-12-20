"use client";
import ReviewCard from "@/components/ReviewCard";
import WriteReview from "@/components/WriteReview";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Review = () => {
  const [enableReview, setEnableReview] = useState(false); // State to toggle the review form
  const [error, setError] = useState(null); // State to handle errors
  const [fetchReviews, setFetchReviews] = useState([]); // State to store fetched reviews
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  // Function to handle form submission
  const handleFormSubmission = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      const { date, review, title, location, imageUrl } = formData;
      const queryParams = {
        review,
        title,
        date,
        location,
        imageUrl,
      };

      const response = await fetch(`/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryParams),
      });

      if (!response.ok) {
        try {
          const parsedResponse = await response.json();
          setError(parsedResponse.message || "An error occurred");
          router.push("/login"); // Redirect to login if the user is not authenticated
        } catch (jsonError) {
          setError("Failed to parse error response");
        }
      } else {
        console.log("Data Added");
        setError(null); // Clear any previous errors
        setEnableReview(false); // Close the review form
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred");
    }
  };

  // Fetch all reviews when the component is mounted
  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await fetch(`/api/reviews`);
        const jsonResponse = await response.json();

        if (!response.ok) {
          setError(jsonResponse.message || "Failed to fetch reviews");
        } else {
          // Check if `body` exists and is an array
          if (Array.isArray(jsonResponse.body)) {
            console.log(`All reviews: ${JSON.stringify(jsonResponse.body)}`);
            setFetchReviews(jsonResponse.body);
          } else {
            setError("Unexpected response format");
          }
        }
      } catch (fetchError) {
        console.error(fetchError);
        setError("An error occurred while fetching reviews");
      }
    };

    fetchAllReviews();
  }, []);

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
          {/* Ensure fetchReviews is an array */}
          {fetchReviews.map((review) => (
            <ReviewCard key={review._id} {...review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
