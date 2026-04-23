import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/registerlogo.png'

const VerifyEmail = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center justify-center px-4'>
      
      {/* Logo */}
      <img
        src={logo}
        className='w-16 sm:w-20 absolute top-4 left-4 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Card */}
      <div className='w-full max-w-md bg-black/40 border border-white/20 rounded-3xl p-8 text-center'>
        
        {/* Email Icon */}
        <div className='text-6xl mb-4'>📧</div>

        <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
          Verify Your Email
        </h2>

        <p className='text-gray-300 text-sm sm:text-base mb-6'>
          We've sent a verification link to your email. 
          <br />
          <span className='text-orange-400 font-semibold'>Click the link in your email to verify your account.</span>
        </p>

        <div className='bg-orange-500/10 border border-orange-500/50 rounded-lg p-4 mb-6'>
          <p className='text-gray-200 text-xs sm:text-sm'>
            💡 Check your spam folder if you don't see the email
          </p>
        </div>

        <button
          onClick={() => navigate('/login')}
          className='w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-xl text-sm sm:text-base'
        >
          Go to Login
        </button>

        <p className='text-gray-400 text-xs sm:text-sm mt-4'>
          Already verified?{" "}
          <span
            className='text-orange-500 underline cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  )
}

export default VerifyEmail
