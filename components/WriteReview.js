"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DateSelector from "./DateSelector";

const WriteReview = ({ handleFormSubmission }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    handleFormSubmission(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black pb-3 p-4 md:flex md:flex-row md:justify-center flex-col items-center justify-center gap-5"
    >
      {/* Figure to upload files */}
      <figure className="bg-gray-300 md:w-[30vw] w-[80vw] h-[300px] flex justify-center items-center rounded-3xl mb-6">
        <img src="/uploadFile.png" alt="Upload" />
      </figure>

      {/* Form Fields */}
      <article className="space-y-4 md:w-[50%] w-[90%]">
        {/* Title Field */}
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

        {/* Review Field */}
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

        {/* Location and Date Fields */}
        <fieldset className="flex gap-2">
          <div className="w-1/2">
            <label htmlFor="location" className="block font-semibold mb-1">
              Your Travel Location
            </label>
            <input
              {...register("location", {
                required: "Location is required!",
              })}
              type="text"
              id="location"
              placeholder="Your travel Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">
                {errors.location.message}
              </span>
            )}
          </div>

          {/* Date Field */}
          <div className="w-1/2">
            <label htmlFor="date" className="block font-semibold mb-1">
              Select Date of Travel
            </label>
            <DateSelector
              value={watch("date")} // Bind the date to React Hook Form
              onChange={(date) => setValue("date", date)} // Update date value in form
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
        </fieldset>

        {/* Submit Button */}
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
