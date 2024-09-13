import blogSchema from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";
import userSchema from "@/models/user.model";

export const POST = async (request) => {
  await dbConnect();
  const jsonData = await request.json();
  const { id } = jsonData;

  console.log(`ID is ${id}`);
  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is missing" },
      { status: 400 }
    );
  }

  try {
    const _id = id;
    const blog = await blogSchema.findOne({ _id }).populate("user", "userName");
    if (!blog) console.log(`Blog not found`);

    console.log(`Found a blod ${JSON.stringify(blog)}`);
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (request) => {
  await dbConnect();

  try {
    const url = new URL(request.url); // Create a URL object from the request URL
    const authorId = url.searchParams.get("author"); // Extract the 'author' query parameter

    if (!authorId) {
      return NextResponse.json(
        {
          success: false,
          message: "Author ID is missing",
        },
        { status: 400 }
      );
    }

    // Find all reviews by the user ID
    const blogs = await blogSchema
      .find({ user: authorId })
      .populate("user", "userName");

    if (!blogs || blogs.length === 0) {
      console.log(`Blogs not found for user: ${authorId}`);
      return NextResponse.json(
        {
          success: false,
          message: "No blogs found for this user",
        },
        { status: 404 }
      );
    }

    console.log(`Found blogs: ${JSON.stringify(blogs)}`);
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching blogs",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
