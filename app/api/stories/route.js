import Review from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";
import { readingTime } from "reading-time-estimator";

export const GET = async (req) => {
  await dbConnect();
  try {
    // Fetch all reviews
    const reviews = await Review.find({});
    console.log(`Fetched Reviews: ${reviews}`);

    // Add reading time to each review
    const finalReview = reviews.map((review) => {
      // Calculate reading time and attach it to the review
      const time = readingTime(review.review);
      return {
        ...review.toObject(),
        readingTime: time.text, // or `time.minutes` if you want to return just minutes
      };
    });

    console.log(`Reviews with Reading Time: ${finalReview}`);

    // Return the reviews with their reading times to the frontend
    return NextResponse.json(
      {
        success: true,
        message: "Reviews and Reading Times Returned",
        body: finalReview,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching reviews",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
