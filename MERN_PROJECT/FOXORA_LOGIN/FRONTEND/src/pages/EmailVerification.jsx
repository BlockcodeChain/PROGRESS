import React from 'react'

const EmailVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
      <div className="w-96 bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Verify Email</h2>
        <p className="text-gray-500 mb-6">Enter the verification code sent to your email</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP Code"
            className="w-full border rounded-lg p-2 text-center tracking-widest outline-none"
          />

          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
            Verify Email
          </button>

          <p className="text-sm text-gray-500">
            Didn’t receive code? <span className="text-orange-600 cursor-pointer font-semibold">Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default EmailVerification
