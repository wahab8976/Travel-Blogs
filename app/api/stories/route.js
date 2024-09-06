import Review from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";

export const GET = async (req) => {
  await dbConnect();
  try {
    // Fetch all reviews and populate the 'user' field with the user's data
    const reviews = await Review.find({}); // Populate with the desired fields
    console.log(`Stories ${reviews}`);
    console.log(`Review before Reading Time ${reviews}`);
    // console.log("Reviews to Send are:", reviews);
    // Return the reviews and their corresponding user data to the frontend
    return NextResponse.json(
      {
        success: true,
        message: "Reviews and Authors Returned",
        body: reviews,
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
