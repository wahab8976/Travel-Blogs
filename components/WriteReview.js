"use client";
import { DatePicker } from "@nextui-org/date-picker";
import React, { useState } from "react";
import moment from "moment";
const WriteReview = ({ handleFormSubmission }) => {
  const [formData, setFormData] = useState({
    title: "",
    review: "",
    date: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    const momentDate = moment(date);
    if (momentDate.isValid()) {
      const isoString = momentDate.toISOString();
      setFormData({ ...formData, date: isoString });
    } else {
      setFormData({ ...formData, date: "" }); // or handle the value as an empty string
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmission(formData); // Pass form data to the parent component
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black pb-3 p-4 md:flex md:flex-row md:justify-center flex-col items-center justify-center gap-5"
    >
      {/* Figure to upload files by clicking here */}
      <figure className="bg-gray-300 md:w-[30vw] w-[80vw] h-[300px] flex justify-center items-center rounded-3xl mb-6">
        <img src="/uploadFile.png" alt="Upload" />
      </figure>

      {/* Article to Handle Form Data */}
      <article className="space-y-4 md:w-[50%] w-[90%]">
        {/* Section to take Title Input */}
        <fieldset>
          <legend className="block font-semibold mb-1">
            Title of your Travel Journey
          </legend>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Summarize your Travel Journey"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* Section to take Review detail Input */}
        <fieldset>
          <legend className="block font-semibold mb-1">Your Review</legend>
          <textarea
            id="review"
            name="review"
            placeholder="A detailed Review of your Travel Journey. Travelers will love to know your reviews!"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            value={formData.review}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* Section to take Location Input */}
        <fieldset className="flex gap-2">
          <div className="w-1/2">
            <label htmlFor="location" className="block font-semibold mb-1">
              Your travel Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Your travel Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          {/* Section to take Date Input */}
          <div className="w-1/2">
            <label htmlFor="date" className="block font-semibold mb-1">
              Select Date of Travel
            </label>
            <div>
              <DatePicker
                aria-label="Select date"
                id="date"
                name="date"
                selected={formData.date}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </fieldset>
      </article>
    </form>
  );
};

export default WriteReview;
