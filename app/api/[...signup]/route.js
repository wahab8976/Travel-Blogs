import mongoose from "mongoose";
import userSchema from "@/models/user.model";
import { NextResponse } from "next/server";

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
  try {
    // Parse the JSON body
    const { userName, email, password } = await req.json();

    // Check if the user already exists
    // const isExistingUser = await userSchema.findOne({ email }); // Await added
    // if (isExistingUser) {
    //   return returnNewResponse(
    //     400,
    //     `A person with email ${email} already exists`,
    //     false
    //   );
    // }

    // Create a new user
    const newUser = new userSchema({ userName, email, password });
    await newUser.save();

    // Return success response after user creation
    return returnNewResponse(201, "User Created", true);
  } catch (error) {
    console.error("Error handling the POST request:", error);

    // Return error response
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
