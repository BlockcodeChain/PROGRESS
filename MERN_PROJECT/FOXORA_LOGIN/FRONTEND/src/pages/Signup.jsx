import React from "react";
import { FaUser, FaLock, FaEnvelope, FaHome } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

// -------- SIGNUP PAGE --------
export const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">
      <div className="w-96 bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <div className="space-y-4">
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="mr-2 text-gray-500" />
            <input type="text" placeholder="Username" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg p-2">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input type="email" placeholder="Email" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg p-2">
            <FaLock className="mr-2 text-gray-500" />
            <input type="password" placeholder="Password" className="w-full outline-none" />
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

