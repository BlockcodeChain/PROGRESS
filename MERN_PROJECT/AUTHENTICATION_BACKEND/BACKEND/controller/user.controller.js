
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import { sendEmail } from "../utils/sendEmail.js"
import gentoken from '../utils/token.js'
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import { AsyncHandler } from "../middleware/AsyncHandler.js"


// =========================
// 🔐 SIGNUP
// =========================
export const signup = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    throw new ApiError(400, "All fields are required")
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new ApiError(400, "User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const token = crypto.randomBytes(32).toString("hex")

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    isverified: false,
    emailVerifyToken: token,
    emailVerifyExpire: Date.now() + 5 * 60 * 1000
  })

  const verifyLink = `http://localhost:8000/api/auth/verify-email/${token}`

   await sendEmail(
    email,
    "Verify Email",
    verifyEmailTemplate(verifyLink)
  )

  return res.status(201).json(
    new ApiResponse(201, "Signup successful, check your email", {
      userId: user._id
    })
  )
})


// =========================
// 🔐 VERIFY email
// =========================
export const verifyEmail = AsyncHandler(async (req, res) => {
  const { token } = req.params

  const user = await User.findOne({
    emailVerifyToken: token,
    emailVerifyExpire: { $gt: Date.now() }
  })

  if (!user) {
    throw new ApiError(400, "Invalid or expired link")
  }

  user.isverified = true
  user.emailVerifyToken = undefined
  user.emailVerifyExpire = undefined

  await user.save()

  return res.send("Email verified successfully ✅")
})

// =========================
// 🔐 LOGIN
// =========================
export const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    throw new ApiError(400, "User not found")
  }

  if (!user.isverified) {
    throw new ApiError(400, "Please verify email first")
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new ApiError(400, "Wrong password")
  }

  const token = gentoken(user._id)

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 2 * 24 * 60 * 60 * 1000
  })

  return res.json(
    new ApiResponse(200, "Login successful", {
      user: user._id
    })
  )
})
// =========================
// get profile 
// =========================
export const getProfile = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user).select("-password")

  return res.json(
    new ApiResponse(200, `Welcome back ${user.username}`, user)
  )
})
// =========================
// 🚪 LOGOUT
// =========================
export const logout = AsyncHandler(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  })

  return res.json(
    new ApiResponse(200, "Logout successful")
  )
})

export const resetPassword = AsyncHandler(async (req, res) => {
  const { token } = req.params
  const { password } = req.body

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex")

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() }
  })

  if (!user) {
    throw new ApiError(400, "Invalid or expired token")
  }

  user.password = await bcrypt.hash(password, 10)
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined

  await user.save()

  return res.json(
    new ApiResponse(200, "Password reset successful")
  )
})


export const forgotPassword = AsyncHandler(async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.json(new ApiResponse(200, "If email exists, link sent"))
  }

  const resetToken = crypto.randomBytes(32).toString("hex")
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex")

  user.resetPasswordToken = hashedToken
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000

  await user.save()

  const resetLink = `http://localhost:8000/api/auth/reset-password/${resetToken}`

   await sendEmail(
    email,
    "Reset Password",
    resetPasswordTemplate(resetLink)
  )

  return res.json(
    new ApiResponse(200, "Reset link sent if email exists")
  )
})