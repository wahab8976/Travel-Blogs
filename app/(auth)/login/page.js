"use client"; // Indicates that this is a client-side component
import GoogleLoginBtn from "@/components/GoogleLoginBtn"; // Importing a custom Google login button component
import React, { useState } from "react"; // Importing React and useState hook
import { useRouter } from "next/navigation"; // Importing Next.js router for client-side navigation
import OTPInput from "@/components/verifyOTP"; // Importing OTP input component
import { useForm } from "react-hook-form"; // Importing useForm from React Hook Form

const LoginPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(true);
  const [steps, setSteps] = useState("logIn"); // State to manage login steps
  const [error, setError] = useState(null);
  
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Router instance to navigate to signup page
  const router = useRouter();

  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to redirect to signup page
  const handleSignupRedirect = () => {
    router.push("/signup"); // Adjust the path based on your signup route
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const email = data.email;
      const password = data.password;
      console.log(`Request Params: Email ${email} - Password ${password}`);

      const reqParams = {
        email,
        password,
      };

      const response = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(reqParams),
        headers: { "Content-Type": "application/json" },
      });

      // Log the raw response

      // Parse the JSON response
      const serverResponse = await response.json();

      // Log the parsed response
      console.log(`Parsed Response: ${JSON.stringify(serverResponse)}`);

      // Check if the response is not ok and handle the error
      if (!response.ok) {
        setError(serverResponse.message);
        return;
      }

      // If login is successful, redirect the user
      router.push("/");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side of the screen with background image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/logInBG.jpg"
          alt="Login Background"
        />
      </div>

      {/* Right side with the form */}
      <div className="flex pt-10 flex-col justify-center items-center w-full lg:w-1/2 px-6 sm:px-12 lg:px-24">
        {steps === "logIn" ? (
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-6">Login to access your Travel Account</p>
            </div>

            {/* Google login button */}
            <div className="flex justify-center">
              <GoogleLoginBtn />
            </div>

            {/* Login form */}
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:border-blue-500`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input with visibility toggle */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className={`w-full px-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:border-blue-500`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {/* Toggle button to show/hide password */}
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                >
                  {showPassword ? (
                    <img className="h-[18px]" src="/view.png" alt="Show" />
                  ) : (
                    <img className="h-[18px]" src="/hide.png" alt="Hide" />
                  )}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex w-full justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="w-5 h-5 border-2 border-blue-500 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 checked:before:content-['✔'] checked:before:absolute checked:before:left-1 checked:before:top-0.5 checked:before:text-white checked:before:text-lg cursor-pointer"
                  />
                  <label htmlFor="remember" className="text-gray-700">
                    Remember me
                  </label>
                </div>
                <span className="hover:text-blue-600 hover:cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Reference to Signup */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  onClick={handleSignupRedirect}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Sign up here
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-sm space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">
                Enter Verification Code
              </h1>
              <p className="mb-6">
                We have just sent a verification code to Johnathon@hotmail.com
              </p>
            </div>
            <OTPInput length={4} onChange={handleOtpChange} />

            <div className="flex flex-col items-center space-y-3">
              {/* Verify Email Button */}
              <button className="w-[150px] bg-blue-600 text-white text-sm py-3 rounded-3xl hover:bg-blue-500 transition duration-200">
                Verify
              </button>
              {/* Resend Email Button */}
              <button className="w-[150px] text-blue-600 border border-blue-600 text-sm py-3 rounded-3xl hover:bg-blue-600 hover:text-white transition duration-200">
                Resend
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
