import React, { useState } from 'react'
import logo from '../assets/registerlogo.png'
import gimage from '../assets/gimage.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { useContext } from 'react';
import { authDataContext } from '../context/Authcontext';
import { toast } from "react-toastify";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../utils/Firebase.js";
const Register = () => {
  const [show, setshow] = useState(false)
  const navigate = useNavigate()
  let {serverURL}=useContext(authDataContext)
  const [userdetail,setuserdetail]=useState({
    name:"",
    email:"",
    password:""
  })
const handleChange = (e) => {
  const { name, value } = e.target;

  setuserdetail((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${serverURL}/api/auth/register`,
      userdetail
    );

    toast.success("🎉 User Registered Successfully!", {
      position: "top-center",
      theme: "colored"
    });

    navigate("/verify-email");

  } catch (err) {
    toast.error(
      err?.response?.data?.message || "❌ Registration Failed",
      {
        position: "top-center",
        theme: "colored"
      }
    );
  }
};
const googlesignup = async () => {
  try {
    const response = await signInWithPopup(auth, provider);

    const user = response.user;

    // 👇 YAHI PE BACKEND CALL LAGANI HAI
    const res = await axios.post(`${serverURL}/api/auth/google`, {
      name: user.displayName,
      email: user.email,
    });

    toast.success("Google Login Successful");
    navigate("/");

  } catch (err) {
    console.log("GOOGLE ERROR 👉", err);
    toast.error(err.message || "Google signup failed");
  }
};
  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center px-4 py-6'>

      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className='w-16 sm:w-20 absolute top-4 left-4 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Heading */}
      <div className='text-center mt-16 sm:mt-10'>
        <h2 className='text-xl sm:text-2xl font-bold bg-linear-to-br from-orange-600 to-yellow-400 bg-clip-text text-transparent'>
          Create Your Foxora Account
        </h2>
        <p className='text-gray-300 text-sm sm:text-base mt-1'>
          Start Shopping with Foxora
        </p>
      </div>

      {/* Card */}
      <div className='w-full max-w-md bg-black/40 border border-white/20 rounded-3xl mt-6 p-5 sm:p-6 flex flex-col gap-5'>

        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
             name="name"
             value={userdetail.name}
             onChange={handleChange}
            placeholder='Enter Your Name'
            className='w-full border border-white/30 text-white px-3 py-2 rounded-lg text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-orange-500'
          />

          {/* Email */}
          <input
            type="email"
             value={userdetail.email}
              name="email"
            onChange={handleChange}
            placeholder='Enter Your Email'
            className='w-full border border-white/30 text-white px-3 py-2 rounded-lg text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-orange-500'
          />

          {/* Password */}
          <div className='relative'>

            <input
              type={show ? "text" : "password"}
               value={userdetail.password}
               onChange={handleChange}
                name="password"
              placeholder='Enter Your Password'
              className='w-full border border-white/30 text-white px-3 py-2 rounded-lg text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-orange-500'
            />

            <div
              className='absolute right-3 top-2.5 cursor-pointer text-white'
              onClick={() => setshow(!show)}
            >
              {show ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
            </div>

          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className='w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded-xl text-sm sm:text-base'
          >
            Signup
          </button>

          {/* Text */}
          <p className='text-gray-400 text-xs sm:text-sm text-center'>
            You already have an account?{" "}
            <span className='text-orange-500 underline cursor-pointer' onClick={()=>navigate('/login')}>
              Login
            </span>
          </p>

        </form>

        {/* OR */}
        <div className='text-center text-white text-sm'>OR</div>

        {/* Google Button */}
        <button
          type="button" onClick={googlesignup}
          className='flex items-center justify-center gap-3 border border-white/30 
          text-white py-2 px-4 rounded-xl w-full hover:bg-white/10 transition text-sm sm:text-base'
        >
          <img src={gimage} alt="google" className='w-5 h-5' />
          Continue with Google
        </button>

      </div>
    </div>
  )
}

export default Register