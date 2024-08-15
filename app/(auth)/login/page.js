"use client"; // Indicates that this is a client-side component
import GoogleLoginBtn from "@/components/GoogleLoginBtn"; // Importing a custom Google login button component
import React, { useState } from "react"; // Importing React and useState hook
import { useRouter } from "next/navigation"; // Importing Next.js router for client-side navigation
import OTPInput from "@/components/verifyOTP";

const LoginPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(true); // Password visibility toggle state
  const [steps, setSteps] = useState("logIn"); // State to manage steps or stages of the login process

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

  return (
    <div className="flex h-screen bg-white  ">
      {/* Left side of the screen with background image */}
      <div className="hidden  lg:block lg:w-1/2">
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
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Password Input with visibility toggle */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
              </div>

              <div className="flex w-full justify-between text-xs">
                {/* Checkbox for Remember Me or Forgot Password */}

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="w-5 h-5 border-2 border-blue-500 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 checked:before:content-['✔'] checked:before:absolute checked:before:left-1 checked:before:top-0.5 checked:before:text-white checked:before:text-lg cursor-pointer"
                  ></input>
                  <label htmlFor="remember" className="text-gray-700">
                    Remember me
                  </label>
                </div>
                <span className="hover:text-blue-600 hover:cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
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

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col items-center space-y-3">
              {/* Verify Email Button  */}
              <button className="w-[150px] bg-blue-600 text-white text-sm py-3 rounded-3xl hover:bg-blue-500 transition duration-200">
                Verify
              </button>
              {/* Resend Email Button  */}
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
