import React from "react";
import { FaHome } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-96">
        <FaHome className="text-5xl mx-auto mb-4 text-indigo-600" />
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p className="text-gray-500 mt-2">
          You are successfully logged in 🎉
        </p>
      </div>
    </div>
  );
};