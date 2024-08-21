import React, { useState, useEffect } from "react";

const OTPInput = ({ length = 4, onChange }) => {
  // State to hold OTP digits
  const [otp, setOtp] = useState(new Array(length).fill(""));

  // Effect to notify parent component when OTP is complete
  useEffect(() => {
    const otpValue = otp.join("");
    if (otpValue.length === length) {
      onChange(otpValue); // Notify parent about the OTP change
    }
  }, [otp, length, onChange]);

  // Handle input changes
  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/[^0-9]/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Update digit at index

    setOtp(newOtp);

    // Move focus to next input if present
    if (value && index < length - 1) {
      e.target.nextSibling.focus();
    }
  };

  // Handle key down for backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 text-center text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />
      ))}
    </div>
  );
};

export default OTPInput;
