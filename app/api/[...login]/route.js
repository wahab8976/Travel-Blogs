import userSchema from "@/models/user.model";
import bcrypt from "bcrypt";
import dbConnect from "@/DataBase/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await dbConnect();
  let { email, password } = await request.json();

  email = email.toLowerCase();
  const existingUser = await userSchema.findOne({ email });

  if (!existingUser) {
    return NextResponse.json(
      {
        success: false,
        message: "No Account exists with this email",
      },
      {
        status: 400,
      }
    );
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password);

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

  return NextResponse.json(
    {
      success: true,
      message: "User Authenticated Successfully!",
      user: userWithoutPassword,
    },
    {
      status: 200,
    }
  );
};
