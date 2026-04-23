import React, { useState, useContext } from 'react'
import logo from '../assets/registerlogo.png'
import gimage from '../assets/gimage.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { authDataContext } from '../context/Authcontext';
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../utils/Firebase.js";

const Login = () => {

  const [show, setshow] = useState(false)
  const navigate = useNavigate()
  const { serverURL } = useContext(authDataContext)
  const { setUser } = useUser()

  const [userdetail, setuserdetail] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setuserdetail((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        `${serverURL}/api/auth/login`,
        userdetail,
        { withCredentials: true }
      )

      const res = await axios.get(
        `${serverURL}/api/auth/me`,
        { withCredentials: true }
      )

      setUser(res.data.data)

      toast.success("🔥 Login Successful!", {
        position: "top-center",
        theme: "colored"
      })

      navigate("/")

    } catch (err) {
      toast.error(err?.response?.data?.message || "❌ Invalid Credentials")
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      // Send to backend
      const res = await axios.post(`${serverURL}/api/auth/google`, {
        name: user.displayName,
        email: user.email,
      });

      setUser(res.data.data);

      toast.success("🔥 Google Login Successful!");
      navigate("/");

    } catch (err) {
      console.log("GOOGLE ERROR 👉", err);
      toast.error(err.message || "❌ Google login failed");
    }
  }

  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center px-4 py-6'>

      {/* Logo */}
      <img
        src={logo}
        className='w-16 sm:w-20 absolute top-4 left-4 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Heading */}
      <div className='text-center mt-20 sm:mt-16'>
        <h2 className='text-xl sm:text-2xl font-bold bg-linear-to-br from-orange-600 to-yellow-400 bg-clip-text text-transparent'>
          Welcome Back
        </h2>
        <p className='text-gray-300 text-sm sm:text-base mt-1'>
          Login to continue shopping with Foxora
        </p>
      </div>

      {/* Card */}
      <div className='w-full max-w-md bg-black/40 border border-white/20 rounded-3xl mt-6 p-6 sm:p-7'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          {/* Email */}
          <input
            type="email"
            name="email"
            value={userdetail.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            className='w-full border border-white/30 text-white px-3 py-2 rounded-lg text-sm sm:text-base outline-none focus:border-orange-500'
          />

          {/* Password */}
          <div className='relative'>

            <input
              type={show ? "text" : "password"}
              name="password"
              value={userdetail.password}
              onChange={handleChange}
              placeholder='Enter Your Password'
              className='w-full border border-white/30 text-white px-3 py-2 rounded-lg text-sm sm:text-base outline-none focus:border-orange-500'
            />

            <div
              className='absolute right-3 top-2.5 text-white cursor-pointer'
              onClick={() => setshow(!show)}
            >
              {show ? <FaEyeSlash size={18} /> : <IoEyeSharp size={18} />}
            </div>
          </div>

          {/* Forgot Password */}
          <p
            className='text-right text-xs text-orange-400 cursor-pointer -mt-2'
            onClick={() => navigate('/forgot-password')}
          >
            Forgot Password?
          </p>

          {/* Login Button */}
          <button className='w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-xl text-sm sm:text-base mt-1'>
            Login
          </button>

          {/* Signup */}
          <p className='text-gray-400 text-xs sm:text-sm text-center mt-1'>
            Don’t have an account?{" "}
            <span
              className='text-orange-500 underline cursor-pointer'
              onClick={() => navigate('/register')}
            >
              Signup
            </span>
          </p>

        </form>

        {/* OR */}
        <div className='text-center text-white text-sm mt-4'>OR</div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className='flex items-center justify-center gap-3 border border-white/30 text-white py-2.5 rounded-xl w-full hover:bg-white/10 transition text-sm sm:text-base mt-3'
        >
          <img src={gimage} className='w-5 h-5' />
          Continue with Google
        </button>

      </div>
    </div>
  )
}

export default Login