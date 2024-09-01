"use client";
import ReviewCard from "@/components/ReviewCard";
import WriteReview from "@/components/WriteReview";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Review = ({ review, title, location, imageUrl }) => {
  const [enableReview, setEnableReview] = useState(false); // State to toggle the review form
  const [error, setError] = useState(null); // State to handle errors
  const [fetchReviews, setFetchReviews] = useState([]); // State to store fetched reviews
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

  return (
    <div className="flex md:flex-row flex-col justify-center mb-10 gap-3">
      <div className="md:w-[35vw] w-[80vw] h-[320px] rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={imageUrl}
          alt="India"
        />
      </div>
      <article className="p-3 md:w-[35vw] w-[80vw] overflow-hidden h-[320px]  pb-3 rounded-xl">
        <p className="text-xs text-gray-500">{location}</p>
        <h1 className="pt-3 text-2xl font-semibold">{title}</h1>
        <p className="pt-3 h-[70%]  overflow-hidden">{review}</p>
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

export default Review;
