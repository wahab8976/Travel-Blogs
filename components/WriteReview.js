import { DatePicker } from "@nextui-org/date-picker";
import React from 'react';

const WriteReview = () => {
  return (
    <div className="text-black p-4 flex justify-center gap-5">
      <div className="bg-gray-300 w-[30vw] h-[300px] flex justify-center items-center rounded-3xl mb-6">
        <img src="/uploadFile.png" alt="Upload" />
      </div>

      {/* Div to Handle Form Data */}
        <div className="space-y-4 w-[50%]">
        {/* Div to take Title Input  */}
        <div>
          <label htmlFor="summary" className="block font-semibold mb-1">Summarize your Travel Journey</label>
          <input
            type="text"
            id="summary"
            placeholder="Summarize your Travel Journey"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Div to take Review detail Input  */}
        <div>
          <label htmlFor="review" className="block font-semibold mb-1">Your Review</label>
          <textarea
            id="review"
            placeholder="A detailed Review of your Travel Journey. Travellers will love to know your reviews!"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
        </div>

        {/* Div to take Location Input  */}
        <div className='flex gap-2'>
          <div className='w-1/2 '>
            <label htmlFor="location" className="block font-semibold mb-1">Your travel Location</label>
            <input
              type="text"
              id="location"
              placeholder="Your travel Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Div to take Date Input  */}
          <div className='w-1/2 '>
            <label htmlFor="date" className="block font-semibold mb-1">Select Date of Travel</label>
            <div>

            <DatePicker/>
            </div>
          </div>
        </div>
        </div>
        
    </div>
  );
}

export default WriteReview;
