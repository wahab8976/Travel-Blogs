import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nameName: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});
// Check if the model is already defined to prevent OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
