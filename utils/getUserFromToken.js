import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const getUserFromToken = async (request) => {
  try {
    const token = request.cookies.get("token"); // Extract the token from cookies
    console.log(`Type of Token: ${typeof token}`);
    console.log(`Token: ${JSON.stringify(token)}`);

    // Ensure the token is a string, not an object
    const finalToken = token?.value;
    console.log(`Final Token: ${finalToken}`);

    if (!finalToken) {
      return null;
    }

    const secretKey = process.env.JWT_SECRET;
    console.log(`Secret key: ${secretKey}`);

    // Verify the JWT token
    const decryptedToken = jwt.verify(finalToken, secretKey);
    console.log(`Decoded Token: ${JSON.stringify(decryptedToken.id)}`);
    return decryptedToken.id;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    throw new Error("Invalid token or token verification failed");
  }
};
