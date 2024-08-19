const reviewSchema = require("@/models/reviews.mode");
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";

// Utility function to return a response
const returnNewResponse = (status, message, success) => {
  return new NextResponse(
    JSON.stringify({
      message: message,
      success: success,
    }),
    {
      status: status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const POST = async (req) => {
  // Connect to the database
  await dbConnect();

  try {
    const { title, review, location, date } = await req.json(); // Parse the request body as JSON

    // Validate required fields
    if (!title) return returnNewResponse(400, "Title is required!", false);
    if (!review) return returnNewResponse(400, "Review is required!", false);
    if (!location)
      return returnNewResponse(400, "Location is required!", false);
    if (!date) return returnNewResponse(400, "Date is required!", false);

    // Create a new review document
    const newReview = new reviewSchema({
      title,
      review,
      location,
      date,
    });

    // Save the review to the database
    await newReview.save();

    // Return success response
    return returnNewResponse(201, "Review created successfully!", true);
  } catch (error) {
    // Handle any errors and return a failure response
    return returnNewResponse(500, error.message || "An error occurred!", false);
  }
};

// export async function POST(request) {

//   const body = await request.json();

//   // Extract title from the request body
//   const { title } = body;

//   // Validate the title
//   if (title === "My Travel Journey") {
//     return NextResponse.json(
//       {
//         success: false,
//         messages: "My Travel Journey cannot be set as title",
//       },
//       {
//         status: 400,
//       }
//     );
//   } else {
//     return NextResponse.json(
//       {
//         success: true,
//         messages: "Data Added",
//         content: body,
//       },
//       {
//         status: 200,
//       }
//     );
//   }
// }
