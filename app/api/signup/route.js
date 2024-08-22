import userSchema from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/DataBase/connectDB";

export const POST = async (req) => {
  dbConnect();
  try {
    // Parse the JSON body
    const { userName, email, password } = await req.json(); // assuming the request body is JSON

    // Check if the user already exists (commented out in your code)
    const isExistingUser = await userSchema.findOne({ email });
    if (isExistingUser) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Email already exists",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const saltRounds = 10;
    // Hash the password using bcrypt and async/await
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    console.log(`Here is username in Route.js ${userName}`);
    const newUser = await new userSchema({
      userName,
      email,
      password: hashedPassword,
    });

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
