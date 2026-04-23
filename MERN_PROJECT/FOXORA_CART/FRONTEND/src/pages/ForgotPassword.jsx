import React, { useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { serverURL } = useContext(authDataContext);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("SERVER:", serverURL);
console.log("EMAIL:", email);
      await axios.post(`${serverURL}/api/auth/forgot-password`, { email });
      toast.success("📩 Reset link sent to your email");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="w-[350px] bg-white/5 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl"
      >
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition"
        />

        <button
          type="submit"
          className="w-full mt-5 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;