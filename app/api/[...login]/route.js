import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/DataBase/connectDB"; // Adjust the import path accordingly
import userSchema from "@/models/user.model"; // Adjust the import path accordingly
import jwt from "jsonwebtoken";

export const POST = async (request) => {
  try {
    await dbConnect();

    // Parse the request body
    const { email, password } = await request.json();

    // Convert email to lowercase
    const normalizedEmail = email.toLowerCase();
    console.log(`Normalized Email is ${normalizedEmail}`);
    // Find the user by email
    const existingUser = await userSchema.findOne({ email: normalizedEmail });

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "No account exists with this email",
        },
        {
          status: 401,
        }
      );
    }

    // Verify the password
    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Password doesn't match",
        },
        {
          status: 403,
        }
      );
    }

    // Exclude sensitive data before returning the user object
    const { password: _, ...userWithoutPassword } = existingUser._doc;

    // Include the _id in the payload
    const payload = { id: existingUser._id };
    console.log(`Payload: ${JSON.stringify(payload)}`);
    const privateKey = process.env.JWT_SECRET;
    const token = jwt.sign(payload, privateKey, { expiresIn: "1d" });

    const response = NextResponse.json(
      {
        success: true,
        message: "User authenticated successfully!",
        user: userWithoutPassword,
      },
      {
        status: 200,
      }
    );
    response.cookies.set("token", token);
    return response;
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred",
      },
      {
        status: 500,
      }
    );
  }
};
