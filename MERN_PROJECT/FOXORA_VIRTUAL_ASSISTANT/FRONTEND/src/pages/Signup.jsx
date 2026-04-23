import React, { useState } from 'react'
import bg from '../assets/img3.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverURL } from '../main';
import { toast } from 'react-toastify'

const Signup = () => {
  const [show, setshow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()

  const [userdetails, setuserdetails] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleEye = () => {
    setshow(!show)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setuserdetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg("")

    if (!userdetails.name || !userdetails.email || !userdetails.password) {
      const msg = "All fields are required ❌"
      setErrorMsg(msg)
      toast.error(msg)
      return
    }

    try {
      setLoading(true)

      const res = await axios.post(
        `${serverURL}/api/auth/signup`,
        userdetails
      )

      toast.success(res.data.message || "Signup Successful ✅")

      navigate('/login')

    } catch (error) {
      const msg =
        error.response?.data?.message || "Something went wrong ❌"

      setErrorMsg(msg)
      toast.error(msg)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-6 flex-col w-full max-w-md bg-black/30 backdrop-blur-md shadow-lg shadow-black rounded-xl p-6 text-white"
      >

        {/* Heading */}
        <h1 className="font-bold text-xl sm:text-2xl text-center">
          REGISTER TO{" "}
          <span className="animate-pulse bg-linear-to-r from-blue-400 to-white text-transparent bg-clip-text">
            VIRTUAL ASSISTANT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm text-center -mt-3">
          Assist <span className='font-extrabold text-white'>•</span> Automate <span className='font-extrabold text-white'>•</span> Achieve
        </p>

        <div className="w-full h-px bg-gray-300"></div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          className="outline-none border rounded-2xl shadow-sm shadow-white w-full py-2 px-4 text-sm"
          value={userdetails.name}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="outline-none border rounded-2xl shadow-sm shadow-white w-full py-2 px-4 text-sm"
          value={userdetails.email}
          onChange={handleChange}
        />

        {/* Password */}
        <div className="w-full relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="outline-none border rounded-2xl shadow-sm shadow-white w-full py-2 px-4 pr-10 text-sm"
            value={userdetails.password}
            onChange={handleChange}
          />

          {show ? (
            <IoMdEyeOff
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleEye}
            />
          ) : (
            <IoMdEye
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleEye}
            />
          )}
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-400 text-sm text-center">{errorMsg}</p>
        )}

        {/* Button + Login */}
        <div className="gap-3 w-full flex flex-col items-center">

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-1/2 py-2 border rounded-2xl font-bold text-white shadow-sm shadow-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <p className="text-gray-300 text-sm text-center">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer text-blue-400"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Signup