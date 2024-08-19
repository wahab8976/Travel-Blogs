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
      type: String,
      required: [true, "Date is a required field"],
    },
  },
  { timestamps: true }
);

// Check if the model is already defined to prevent OverwriteModelError
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
