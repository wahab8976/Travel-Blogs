"use client";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OTPInput from "@/components/verifyOTP";

const SignupPage = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [step, setStep] = useState("signUp"); //State to conditionally Render Left section of SigUp and OTP verification

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setStep("verification"); //Forwards User to OTP Verification State
  };

  const router = useRouter();
  const handleLogInRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="flex md:flex-row flex-col justify-center w-full items-center h-screen">
      {/* Left side of the screen with background color */}
      <div className="h-full md:block hidden bg-green-600 w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/signUpBG.jpg"
          alt="sign up background"
        />
      </div>

      {/* Right side with the form */}
      <div className="h-full md:w-1/2 w-[95%] pt-14 flex justify-center flex-col items-center">
        {/* Conditionally rendering Sign Up component  */}
        {step === "signUp" ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Hi, Get Started Now!</h1>
            <p className="mb-6">Enter details to create your Travel Account</p>

            {/* Google login button */}
            <GoogleLoginBtn />

            {/* Signup form */}
            <div className="w-full max-w-sm">
              <form onSubmit={handleSignUpSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Password Input with visibility toggle */}
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  >
                    {showPassword ? (
                      <img className="h-[18px]" src="/view.png " alt="Show" />
                    ) : (
                      <img className="h-[18px]" src="/hide.png " alt="Hide" />
                    )}
                  </span>
                </div>

                {/* Confirm Password Input with visibility toggle */}
                <div className="mb-6 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <span
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <img className="h-[18px]" src="/view.png " alt="Show" />
                    ) : (
                      <img className="h-[18px]" src="/hide.png " alt="Hide" />
                    )}
                  </span>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Reference to Login */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      onClick={handleLogInRedirect}
                      className="text-blue-500 hover:underline cursor-pointer"
                    >
                      Login Now!
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          // Conditionally Rendering OTP verification Components
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl mb-4">Enter Verification Code</h1>
            <p className="mb-6">
              We have just sent a verification code to Johnathon@hotmail.com
            </p>
            <OTPInput length={4} onChange={handleOtpChange} />

            <div className="flex flex-col items-center justify-center mt-6 space-y-3">
              {/* Verify Email Button  */}
              <button className="bg-blue-600 text-white text-sm w-[150px] hover:bg-blue-500 transition-all duration-200 py-3 rounded-3xl">
                Verify
              </button>
              {/* Resend Email Button  */}
              <button className="text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-200 border-blue-600 border-2 text-sm w-[80%] py-3 rounded-3xl">
                Resend
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
