import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Database URL not found");
}

//  Global is used here to maintain a cached connection across hot reloads in development.

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    // Check if there is already a connection with the database
    return cached.conn;
  }

  if (!cached.promise) {
    // If no existing promises in progress, create a new connection
    const options = {
      bufferCommands: false, // Avoid queues if there's no DB connection; throw an error immediately
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => {
        cached.promise = null; // Reset promise if connection fails
        throw new Error(`Database connection failed: ${error.message}`);
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.conn = null; // Reset connection if an error occurs
    throw error;
  }

  return cached.conn;
};

export default dbConnect;
