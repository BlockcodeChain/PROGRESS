import React, { useState } from "react";
import logo from "../assets/Foxora_LOGO.png";
import {useNavigate} from "react-router-dom"
import { BiSolidHide, BiShow } from "react-icons/bi";
import {serverURL} from "../main"
import { toast } from "react-toastify";
import axios from 'axios'
const Signup = () => {
  const  navigate=useNavigate()
  const [show, setShow] = useState(false);
   const [loading, setLoading] = useState(false);
   const [user,setuser]=useState({
    fullname:"",username:"",email:"",password:""
   })
   const handlechange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
   }
   const handleSubmit=async (e)=>{
    e.preventDefault()
    // Handle signup logic here
     setLoading(true);

    try {
      const res = await axios.post(`${serverURL}/api/auth/signup`, user);

      toast.success(res.data.message);
      navigate("/login");

    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
    console.log(user);
   }
  return (
    <div className="w-screen h-screen bg-gray-200/90 flex items-center justify-center">
      <div className="shadow-md w-[90%] sm:w-100 md:w-105 bg-white/80 h-auto rounded-2xl">
        <div className="flex flex-col items-center gap-5 px-6 py-4">
          
          {/* Top Logo + Text */}
          <div className="flex items-center gap-5 bg-red-400/10 w-full px-5 justify-between py-1 rounded-lg">
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

          {/* Separator Line */}
          <div className="w-80 h-0.5 rounded-3xl animate-pulse bg-orange-600"></div>

          {/* Title */}
          <h1 className="text-center font-extrabold bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent text-2xl">
            🗨️ FOXORA CHAT 🗨️
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5 mt-4">
            <div className="w-72 flex flex-col gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                className="border border-orange-400 w-full h-10 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                 value={user.fullname}
                 onChange={handlechange}
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                className="border border-orange-400 w-full h-10 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                 value={user.username}
                 onChange={handlechange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-orange-400 w-full h-10 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                 value={user.email}
                 onChange={handlechange}
              />

              {/* Password Input */}
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="border border-orange-400 w-full h-10 rounded px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                   value={user.password}
                   onChange={handlechange}
                />
                <div
                  onClick={() => setShow(!show)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                >
                  {show ? <BiSolidHide className="text-lg" /> : <BiShow className="text-lg" />}
                </div>
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-72 h-10 bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold rounded hover:opacity-80 transition cursor-pointer "   onClick={()=>setLoading(!loading)}
            >
              {loading?"LOADING...":"SIGNUP"}
            </button>
          </form>

          {/* Already have account */}
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
             Login In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;