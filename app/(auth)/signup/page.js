"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import OTPInput from "@/components/verifyOTP";
import { useRouter } from "next/navigation";

const Page = () => {
  // State hooks
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [step, setStep] = useState("signUp"); // Tracks whether we're on sign up or verification step
  const [error, setError] = useState(null); // For handling errors
  const [generatedOTP, setGeneratedOTP] = useState(""); // Stores the OTP generated by the server
  const [otpValue, setOtpValue] = useState(""); // Stores the OTP entered by the user
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(); // React Hook Form for form handling
  const router = useRouter(); // Next.js Router for navigation

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      console.log(`Form Data: ${JSON.stringify(data)}`);

      // Extract necessary data
      const userName = watch("userName");
      const emailAddress = watch("email");
      const otpParams = { userName, emailAddress };

      // Send data to server to get OTP
      const response = await fetch(`/api/auth/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(otpParams),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      // Get OTP from server and update state
      const otpFromServer = await response.json();
      setGeneratedOTP(Number(otpFromServer));
      console.log("Generated OTP", otpFromServer);

      setStep("Verification"); // Switch to verification step
    } catch (error) {
      console.error(`Error: ${error.message}`);
      setError(error.message); // Set error message
    }
  };

  // Compare entered OTP with generated OTP
  const compareOTP = async (enteredOTP) => {
    console.log("Generated OTP:", generatedOTP);
    console.log("Entered OTP:", enteredOTP);
    if (enteredOTP == generatedOTP) {
      console.log("OTP Verified");
      const userName = watch("userName");
      const email = watch("email");
      const password = watch("password");

      const reqParams = {
        userName,
        email,
        password,
      };
      try {
        const response = await fetch(`/api/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqParams),
        });

        const serverResponse = await response.json();
        console.log(`Server response is ${serverResponse}`);
        if (!response.ok) {
          setError(serverResponse.message); // Update here to use serverResponse.message
          return;
        }
      } catch (error) {
        console.error(error);
      }

      router.push("/"); // Redirect on successful verification
    } else {
      console.log("Invalid OTP");
      setError("Invalid OTP. Please try again."); // Show error for invalid OTP
    }
  };

  // Update OTP value
  const handleOtpChange = (otpValue) => {
    setOtpValue(otpValue); // Update OTP value in state
  };

  // Handle verify button click
  const handleVerifyClick = () => {
    compareOTP(otpValue); // Compare OTP when button is clicked
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Redirect to login page
  const handleLogInRedirect = () => router.push("/login");

  return (
    <div className="flex md:flex-row flex-col justify-center w-full items-center h-screen">
      <div className="h-full md:block hidden bg-green-600 w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/signUpBG.jpg"
          alt="sign up background"
        />
      </div>

      <div className="h-full md:w-1/2 w-[95%] pt-14 flex justify-center flex-col items-center">
        {step === "signUp" ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Hi, Get Started Now!</h1>
            <p className="mb-6">Enter details to create your Travel Account</p>

            <GoogleLoginBtn />

            <div className="w-full max-w-sm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <input
                    {...register("userName", {
                      required: "Please Enter your name",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  {errors.userName && (
                    <span className="text-red-500 text-sm">
                      {errors.userName.message}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    {...register("email", {
                      required: "Please provide your email address",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please Enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="mb-4 relative">
                  <input
                    {...register("password", {
                      required: "Choose a password to create account",
                      minLength: {
                        value: 8,
                        message: "Minimum length of password is 8",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
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

                <div className="mb-6 relative">
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm your Password",
                      minLength: {
                        value: 8,
                        message: "Minimum length of password is 8",
                      },
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                  <span
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <img className="h-[18px]" src="/view.png" alt="Show" />
                    ) : (
                      <img className="h-[18px]" src="/hide.png" alt="Hide" />
                    )}
                  </span>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>
                {error && <span className="text-red-500 text-sm">{error}</span>}

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
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl mb-4">Enter Verification Code</h1>
            <p className="mb-6">
              We have just sent a verification code to {watch("email")}
            </p>
            <OTPInput
              compareOTP={compareOTP}
              length={4}
              onChange={handleOtpChange}
            />

            <div className="flex flex-col items-center justify-center mt-6 space-y-3">
              <button
                onClick={handleVerifyClick} // Trigger OTP comparison
                className="bg-blue-600 text-white text-sm w-[150px] hover:bg-blue-500 transition-all duration-200 py-3 rounded-3xl"
              >
                Verify
              </button>
              <button
                onClick={() => {
                  setStep("signUp");
                }}
                className="text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-200 border-blue-600 border-2 text-sm w-[80%] py-3 rounded-3xl"
              >
                back
              </button>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
