import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { authDataContext } from '../context/Authcontext'
import { toast } from 'react-toastify'
import logo from '../assets/registerlogo.png'

const VerifyEmailLink = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const { serverURL } = useContext(authDataContext)
  const [loading, setLoading] = useState(true)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(`${serverURL}/api/auth/verify/${token}`)
        
        toast.success("✅ Email verified successfully!", {
          position: "top-center",
          theme: "colored"
        })
        
        setVerified(true)
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login')
        }, 2000)
        
      } catch (err) {
        console.error("Verify Error:", err)
        toast.error(
          err?.response?.data?.message || "❌ Verification failed",
          { position: "top-center", theme: "colored" }
        )
        setVerified(false)
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      verifyEmail()
    }
  }, [token, serverURL, navigate])

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
        
        {loading ? (
          <>
            <div className='text-5xl mb-4 animate-spin'>⏳</div>
            <h2 className='text-2xl font-bold text-white'>Verifying Email...</h2>
            <p className='text-gray-400 text-sm mt-2'>Please wait while we verify your email</p>
          </>
        ) : verified ? (
          <>
            <div className='text-6xl mb-4'>✅</div>
            <h2 className='text-2xl sm:text-3xl font-bold text-white mb-3'>Email Verified!</h2>
            <p className='text-gray-300 text-sm sm:text-base mb-6'>
              Your email has been verified successfully.
              <br />
              <span className='text-orange-400 font-semibold'>Redirecting to login...</span>
            </p>
          </>
        ) : (
          <>
            <div className='text-5xl mb-4'>❌</div>
            <h2 className='text-2xl font-bold text-white mb-3'>Verification Failed</h2>
            <p className='text-gray-300 text-sm mb-6'>
              This verification link is invalid or has expired.
            </p>
            <button
              onClick={() => navigate('/register')}
              className='w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-xl text-sm'
            >
              Try Again
            </button>
          </>
        )}

      </div>

    </div>
  )
}

export default VerifyEmailLink
