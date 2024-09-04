// Import the Review model (not the schema)
import reviewSchema from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";
import { getUserFromToken } from "@/utils/getUserFromToken";

export const POST = async (req) => {
  // Connect to the database
  await dbConnect();
  console.log("Request is just after DB");

  try {
    const { title, review, location, date, imageUrl } = await req.json(); // Parse the request body as JSON
    console.log("Request is in Try Block");
    console.log(`Images URL is ${JSON.stringify(imageUrl)}`);
    // Validate required fields
    if (!title || !review || !location || !date) {
      return NextResponse.json(
        { success: "false", message: "All fields are required" },
        { status: 400 }
      );
    }

    const { day, year, month } = date;
    const userDate = { day, year, month };

    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);
    console.log(`Requested Date: ${JSON.stringify(date)}`);

    const userID = await getUserFromToken(req);
    if (!userID || userID === null) {
      console.log(`Returned Null`);
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized User. Please login before Adding any review",
        },
        { status: 500 }
      );
    }
    console.log(`Got Token: ${userID}`);

    const newReview = new reviewSchema({
      title,
      review,
      location,
      date: JSON.stringify(userDate),
      user: userID,
      imageUrl,
    });

    // Save the review to the database
    await newReview.save();

    return NextResponse.json(
      { success: "true", message: "Review Added" },
      { status: 201 }
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return NextResponse.json(
      { success: "false", message: "Something went wrong" },
      { status: 500 } // Use 500 for server errors
    );
  }
};

export const GET = async (req) => {
  await dbConnect();
  try {
    // Fetch all reviews and populate the 'user' field with the user's data
    const reviews = await reviewSchema.find({});

    console.log("Reviews to Send are:", reviews);

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
