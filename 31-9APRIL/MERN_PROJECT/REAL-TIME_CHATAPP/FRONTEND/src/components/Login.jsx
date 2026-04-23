import React, { useState, useEffect } from "react";
import logo from "../assets/Foxora_LOGO.png";
import { useNavigate } from "react-router-dom";
import { BiSolidHide, BiShow } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import { serverURL } from "../main";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // ✅ Redirect if already logged in
useEffect(() => {
  const checkUser = async () => {
    try {
      const res = await axios.get(
        `${serverURL}/api/auth/me`,
        { withCredentials: true }
      );
      if (res.data.user) {
        navigate("/");
      }
    } catch (error) {
      console.log("Not logged in");
    }
  };

  checkUser();
}, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${serverURL}/api/auth/login`, user);

      localStorage.setItem("token", res.data.token);

      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
      navigate("/signup")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200/90 flex items-center justify-center">
      <div className="shadow-md w-[90%] sm:w-100 md:w-105 bg-white/80 h-auto rounded-2xl">
        <div className="flex flex-col items-center gap-5 px-6 py-4">
          
          <div className="flex items-center gap-5 bg-red-200/20 w-full px-5">
            <p className="text-md font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Talk Smarter
            </p>

            <div className="rounded-full shadow-lg w-20 h-20 shadow-orange-500 flex items-center justify-center">
              <img
                src={logo}
                alt="logo_foxora"
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>

            <p className="text-md font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect Faster
            </p>
          </div>

          <div className="w-80 h-0.5 rounded-3xl animate-pulse bg-orange-600"></div>

          <h1 className="text-center font-extrabold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent text-2xl">
            🗨️ FOXORA CHAT 🗨️
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5 mt-4">
            <div className="w-72 flex flex-col gap-4">
             
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                className="border border-orange-400 w-full h-10 rounded px-4"
              />

              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  className="border border-orange-400 w-full h-10 rounded px-4"
                />
                <div
                  onClick={() => setShow(!show)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                >
                  {show ? <BiSolidHide /> : <BiShow />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-72 h-10 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded"
            >
              {loading ? "LOADING..." : "LOGIN"}
            </button>
          </form>

          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <span
              className="text-orange-500 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;