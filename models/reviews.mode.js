import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    review: {
      type: String,
      required: [true, "This is a required Field"],
    },
    location: {
      type: String,
      required: [true, "Travel location is a required Field"],
    },
    date: {
      type: String,
      required: [true, "Travel location is a required Field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
