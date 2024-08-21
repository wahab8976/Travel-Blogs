"use client";
import { useForm } from "react-hook-form";
import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OTPInput from "@/components/verifyOTP";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [step, setStep] = useState("signUp");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`Form Data ${data}`);
    setStep("Verification");  //Once input data is validated, Forward user to Enter OTP page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };

  const router = useRouter();
  const handleLogInRedirect = () => {
    router.push("/login");
  };

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
              We have just sent a verification code to Johnathon@hotmail.com
            </p>
            <OTPInput length={4} onChange={handleOtpChange} />

            <div className="flex flex-col items-center justify-center mt-6 space-y-3">
              <button className="bg-blue-600 text-white text-sm w-[150px] hover:bg-blue-500 transition-all duration-200 py-3 rounded-3xl">
                Verify
              </button>
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
