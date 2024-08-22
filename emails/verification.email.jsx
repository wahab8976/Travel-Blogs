import * as React from "react";

export const EmailTemplate = ({ userName, OTP }) => (
  <div className="bg-gray-100 text-gray-800 font-sans">
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Your One-Time Password: {OTP}
        </h1>
      </div>
      <p className="text-lg mb-4">
        Greetings! <span className="font-semibold">{userName}</span>,
      </p>
      <p className="mb-4">
        Thank you for signing up with{" "}
        <span className="font-semibold">Travel Pulse</span>!
      </p>
      <p className="mb-4">
        To complete your registration, please use the following One-Time
        Password {OTP} to verify your email address:
      </p>
      <p className="text-2xl font-bold text-gray-900 bg-gray-100 p-4 rounded-lg mb-4"></p>
      <p className="mb-4">
        For any assistance, feel free to contact our support team at{" "}
        <span className="font-semibold">TravelPulse.com/contact</span>.
      </p>
      <p className="mb-4">
        Welcome aboard, and thank you for choosing{" "}
        <span className="font-semibold">Travel Pulse</span>!
      </p>
      <div className="text-center text-sm text-gray-600 mt-6">
        <p>
          Best regards,
          <br />
          The <span className="font-semibold">Travel Pulse</span> Team
        </p>
        <p className="mt-2">
          <small>
            Note: This is an automated message, please do not reply.
          </small>
        </p>
      </div>
    </div>
  </div>
);
