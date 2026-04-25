import React from "react";
import { FaUser, FaLock, FaEnvelope, FaHome } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500">
      <div className="w-96 bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <div className="space-y-4">
          <div className="flex items-center border rounded-lg p-2">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input type="email" placeholder="Email" className="w-full outline-none" />
          </div>

          <div className="flex items-center border rounded-lg p-2">
            <FaLock className="mr-2 text-gray-500" />
            <input type="password" placeholder="Password" className="w-full outline-none" />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};