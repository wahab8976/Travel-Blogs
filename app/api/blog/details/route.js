import blogSchema from "@/models/reviews.model";
import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";

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
    const blog = await blogSchema.findOne({ _id });
    if (!blog) console.log(`Blog not found~`);

    console.log(`Found a blod ${JSON.stringify(blog)}`);
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
