import React from 'react'

 const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-teal-400 to-blue-500">
      <div className="w-96 bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>

        <div className="space-y-4">
          <div className="flex items-center border rounded-lg p-2">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input type="email" placeholder="Enter Email" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg p-2">
            <MdOutlinePassword className="mr-2 text-gray-500" />
            <input type="password" placeholder="New Password" className="w-full outline-none" />
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword
