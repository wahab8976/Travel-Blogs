import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    review: {
      type: String,
      required: [true, "This is a required field"],
    },
    location: {
      type: String,
      required: [true, "Travel location is a required field"],
    },
    date: {
      type: String, // Consider changing to Date type if needed
      required: [true, "Date is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the User model
      required: [true, "User reference is required"],
    },
  },
  { timestamps: true }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
