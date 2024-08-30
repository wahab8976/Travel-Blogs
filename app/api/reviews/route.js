// Import the Review model (not the schema)
import Review from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";
import { getUserFromToken } from "@/utils/getUserFromToken";

export const POST = async (req) => {
  // Connect to the database
  await dbConnect();
  console.log("Request is just after DB");

  try {
    const { title, review, location, date } = await req.json(); // Parse the request body as JSON
    console.log("Request is in Try Block");

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
    console.log(`Got Token: ${userID}`);

    const newReview = new Review({
      title,
      review,
      location,
      date: JSON.stringify(userDate),
      userID,
      user: userID,
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
