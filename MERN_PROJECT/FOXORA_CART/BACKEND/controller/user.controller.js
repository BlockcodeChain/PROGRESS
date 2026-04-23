import User from '../models/user.model.js'
import { AsyncHandler } from '../middleware/AsyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import gentoken from "../utils/token.js"

import { generateRandomToken } from "../utils/genemailtoken.js";
import { sendEmail } from "../utils/sendEmail.js";
import { verifyEmailTemplate, resetPasswordTemplate } from "../utils/emailtemplate.js";

// ================= REGISTER =================
export const register = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields required");
  }

  const existUser = await User.findOne({ email });
  if (existUser) throw new ApiError(400, "User already exists");

  const hashpass = await bcrypt.hash(password, 10);

  const verifyToken = generateRandomToken();

  const newuser = await User.create({
    name,
    email,
    password: hashpass,
    verificationToken: verifyToken
  });

  const verifyURL = `http://localhost:5173/verify/${verifyToken}`;

  await sendEmail(
    email,
    "Verify Email",
    verifyEmailTemplate(verifyURL)
  );

  return res.status(201).json(
    new ApiResponse(201, "Register successful, check email to verify")
  );
});

// ================= LOGIN =================
export const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "User not found");

  if (!user.emailVerified) {
    throw new ApiError(400, "Please verify your email first");
  }

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) throw new ApiError(400, "Invalid credentials");

  const token = gentoken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 24 * 60 * 60 * 1000
  });

  const safeUser = await User.findById(user._id).select("-password");

  return res.status(200).json(
    new ApiResponse(200, "Login successful", safeUser)
  );
});

// ================= LOGOUT =================
export const logout = AsyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production"
  });

  return res.status(200).json(
    new ApiResponse(200, "Logout successful")
  );
});

// ================= GOOGLE AUTH =================
export const googleAuth = AsyncHandler(async (req, res) => {
  const { name, email } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      name,
      email,
      password: "",
      provider: "google",
      emailVerified: true
    });
  }

  const token = gentoken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 24 * 60 * 60 * 1000
  });

  return res.status(200).json(
    new ApiResponse(200, "Google login successful", user)
  );
});

// ================= CURRENT USER =================
export const getCurrentUser = AsyncHandler(async (req, res) => {
  const user = await User.findById(req.user).select("-password");

  return res.status(200).json(
    new ApiResponse(200, "User fetched", user)
  );
});

// ================= VERIFY EMAIL =================
export const verifyEmail = AsyncHandler(async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({ verificationToken: token });

  if (!user) throw new ApiError(400, "Invalid token");

  user.emailVerified = true;
  user.verificationToken = undefined;
  await user.save();

  return res.status(200).json(
    new ApiResponse(200, "Email verified successfully")
  );
});

// ================= FORGOT PASSWORD =================
export const forgotPassword = AsyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  // 🔒 Security: Return generic message (prevents user enumeration attack)
  if (!user) return res.status(200).json(new ApiResponse(200, "If email exists, reset link has been sent"));

  const resetToken = generateRandomToken();
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
  await user.save();

  const resetURL = `http://localhost:5173/reset/${resetToken}`;

  await sendEmail(
    email,
    "Reset Password",
    resetPasswordTemplate(resetURL)
  );

  return res.status(200).json(
    new ApiResponse(200, "If email exists, reset link has been sent")
  );
});

// ================= RESET PASSWORD =================
export const resetPassword = AsyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!user) throw new ApiError(400, "Token expired or invalid");

  user.password = await bcrypt.hash(password, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return res.status(200).json(
    new ApiResponse(200, "Password reset successful")
  );
});