"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DateSelector from "./DateSelector";
import { CldUploadWidget } from "next-cloudinary";

const WriteReview = ({ handleFormSubmission }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [imageUrl, setImageUrl] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, imageUrl });
    handleFormSubmission({ ...data, imageUrl });
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (selectedSuggestion.length >= 2) {
        try {
          const response = await fetch(
            `/api/autocomplete?q=${selectedSuggestion}&apiKey=IreH-5YohPCcX6o5iCA3FfCFKdxgJTLEEko8PPD_lcA&limit=5`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const jsonResponse = await response.json();
          setSuggestions(jsonResponse.items || []);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      }
    };

    fetchSuggestions();
  }, [selectedSuggestion]);

  const handleOnChange = (e) => {
    setSelectedSuggestion(e.target.value); // Update the location input state
  };

  const handleSuggestionClick = (suggestion) => {
    const label = suggestion.address.label;
    setSelectedSuggestion(label); // Update the selected suggestion state
    setSuggestions([]); // Clear the suggestions after selection
    setValue("location", label); // Set the selected suggestion in the input field
    console.log(`Selected suggestion is: ${label}`); // Log the updated label
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black pb-3 p-4 md:flex md:flex-row md:justify-center flex-col items-center justify-center gap-5"
    >
      <figure className="bg-gray-300 md:w-[30vw] w-[80vw] h-[300px] flex justify-center items-center rounded-3xl mb-6">
        <CldUploadWidget
          uploadPreset="Travel-Pulse"
          onSuccess={(result) => {
            const url = result.info.secure_url;
            setImageUrl(url);
            setValue("imageUrl", url);
          }}
        >
          {({ open }) => (
            <img
              className="hover:cursor-pointer"
              onClick={() => open()}
              src="/uploadFile.png"
              alt="Upload"
            />
          )}
        </CldUploadWidget>
      </figure>

      <article className="space-y-4 md:w-[50%] w-[90%]">
        <fieldset>
          <legend className="block font-semibold mb-1">
            Title of your Travel Journey
          </legend>
          <input
            {...register("title", {
              required: "Title is required!",
              minLength: {
                value: 3,
                message: "Minimum length of Title is 3 characters",
              },
            })}
            type="text"
            id="title"
            placeholder="Summarize your Travel Journey"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </fieldset>

        <fieldset>
          <legend className="block font-semibold mb-1">Your Review</legend>
          <textarea
            {...register("review", {
              required: "Review is required!",
              minLength: {
                value: 10,
                message: "Minimum length of Review is 10 characters",
              },
            })}
            id="review"
            placeholder="A detailed Review of your Travel Journey. Travelers will love to know your reviews!"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          {errors.review && (
            <span className="text-red-500 text-sm">
              {errors.review.message}
            </span>
          )}
        </fieldset>

        <fieldset className="flex gap-2">
          <div className="w-1/2 relative">
            <label htmlFor="location" className="block font-semibold mb-1">
              Your Travel Location
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              id="location"
              placeholder="Your travel Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSuggestion} // Set the input value to selectedSuggestion
            />
            {errors.location && (
              <span className="text-red-500 text-sm">
                {errors.location.message}
              </span>
            )}

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute bg-white border border-gray-300 shadow-lg w-full mt-1 z-10">
                {suggestions.map((suggestion) => (
                  <div
                    onClick={() => handleSuggestionClick(suggestion)}
                    key={suggestion.address.label}
                    className="p-2 border border-y-2 cursor-pointer hover:bg-gray-200"
                  >
                    {suggestion.address.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-1/2">
            <label htmlFor="date" className="block font-semibold mb-1">
              Select Date of Travel
            </label>
            <DateSelector
              value={watch("date")}
              onChange={(date) => setValue("date", date)}
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
        </fieldset>

        <input
          type="hidden"
          {...register("imageUrl", {
            required: "Image URL is required!",
          })}
          value={imageUrl || ""}
        />
        {errors.imageUrl && (
          <span className="text-red-500 text-sm">
            {errors.imageUrl.message}
          </span>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="mb-5 bg-blue-500 text-white p-2 rounded-lg"
          >
            Add Review
          </button>
        </div>
      </article>
    </form>
  );
};

export default WriteReview;
