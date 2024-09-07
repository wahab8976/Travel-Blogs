import React from "react";
import { useRouter } from "next/navigation";

const PostCard = ({
  title,
  review,
  date,
  location,
  imageUrl,
  handleDetailRedirect,
  readingTime,
}) => {
  const parseDate = (date) => {
    try {
      const { day, month, year } = JSON.parse(date);

      if (
        typeof day !== "number" ||
        typeof month !== "number" ||
        typeof year !== "number"
      ) {
        throw new Error("Invalid date format");
      }

      const monthNames = [
        null, // Placeholder for 0, since months are 1-indexed
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const monthName = monthNames[month];
      if (!monthName) {
        throw new Error("Invalid month value");
      }

      return `${monthName}/${day}/${year}`;
    } catch (error) {
      console.error("Invalid input:", error.message);
      return "";
    }
  };

  return (
    <div
      id="MainPagePostCard"
      className="mb-3 w-[360px] md:w-[45vw] md:[h-70vh] h-[450px] rounded-t-2xl flex flex-col"
    >
      <div className="relative w-[100%] h-[350px] rounded-2xl overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={imageUrl}
          alt="pic uploaded by user"
        />
      </div>
      <span className="flex text-xs justify-between px-4 py-2">
        <p>{location}</p>
        <p>{parseDate(date)}</p>
      </span>
      <span className="px-4 py-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm ellipsis">{review}</p>
        <div className="flex  justify-between items-center pt-4">
          <button
            onClick={() =>
              handleDetailRedirect(title, location, review, imageUrl)
            }
            className="flex gap-2 items-center mt-4 px-3 py-1 text-blue-500 rounded-md justify-between"
          >
            Read full Post
            <img
              className="ml-2"
              width={20}
              height={20}
              src="/external-link.png"
              alt="External link"
            />
          </button>
          <span className="pt-[20px]">{readingTime}</span>
        </div>
      </span>
    </div>
  );
};

export default PostCard;
