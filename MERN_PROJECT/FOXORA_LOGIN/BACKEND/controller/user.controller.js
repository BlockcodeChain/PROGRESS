import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import gentoken from '../utils/token.js'
import ApiError from '../utils/ApiError.js'
import { AsyncHandler } from '../middleware/AsyncHandler.js'
import ApiResponse from '../utils/ApiResponse.js'
import sendEmail from '../utils/sendEmail.js'
import { verifyEmailTemplate } from "../utils/EmailTemplate.js";
import jwt from 'jsonwebtoken'
import { resetPasswordTemplate } from "../utils/EmailTemplate.js"
import crypto from "crypto";


// =========================================== REGISTER =================================
export const register = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existuser = await User.findOne({ email });

    if (existuser) {
        throw new ApiError(400, "User already exists");
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const newuser = await User.create({
        name,
        email,
        password: hashedpassword,
        isverified: false
    });

    const token = gentoken(newuser._id);

    const verifyUrl = `http://localhost:8000/api/auth/verify/${token}`;

    await sendEmail({
        email: newuser.email,
        subject: "Verify Your Email 🔐",
        html: verifyEmailTemplate(newuser.name, verifyUrl)
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 2 * 24 * 60 * 60 * 1000
    });

    const userData = await User.findById(newuser._id).select("-password");

    return res.status(201).json(
        new ApiResponse(201, "User Registered Successfully", userData)
    );
});



// =========================================== VERIFY EMAIL =================================
export const verifyemail = AsyncHandler(async (req, res) => {

    const { token } = req.params;

    if (!token) {
        throw new ApiError(400, "Token missing");
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    } catch (err) {
        throw new ApiError(400, "Invalid or expired verification link");
    }

    const user = await User.findById(decoded._id);

    if (!user) {
        throw new ApiError(400, "User not found");
    }

    if (user.isverified) {
        return res.status(200).json(
            new ApiResponse(200, "Email already verified")
        );
    }

    user.isverified = true;
    await user.save();

    return res.status(200).json(
        new ApiResponse(200, "Email verified successfully 🎉")
    );
});



// =========================================== LOGIN =================================
export const login = AsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existuser = await User.findOne({ email });

    if (!existuser) {
        throw new ApiError(400, "Email doesn't exist");
    }

    const isMatched = await bcrypt.compare(password, existuser.password);

    if (!isMatched) {
        throw new ApiError(400, "Invalid credentials");
    }

    if (!existuser.isverified) {
        throw new ApiError(403, "Please verify your email first");
    }

    const token = gentoken(existuser._id);

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 2 * 24 * 60 * 60 * 1000
    });

    const userdata = await User.findById(existuser._id).select("-password");

    return res.status(200).json(
        new ApiResponse(200, "User login successfully", userdata)
    );
});



// =========================================== LOGOUT =================================
export const logout = AsyncHandler(async (req, res) => {

    res.cookie("token", "", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        expires: new Date(0)
    });

    return res.status(200).json(
        new ApiResponse(200, "User logout successfully")
    );
});



// =========================================== CURRENT USER =================================
export const currentuser = AsyncHandler(async (req, res) => {

    const me = await User.findById(req.user).select("-password");

    return res.status(200).json(
        new ApiResponse(200, "User fetched 🎉", me)
    );
});



// =========================================== GOOGLE AUTH (FIXED) =================================
export const google = AsyncHandler(async (req, res) => {

    const { name, email } = req.body;

    let user = await User.findOne({ email });

    // IF USER NOT EXISTS → CREATE
    if (!user) {
        user = await User.create({
            name,
            email,
            password: null,
            provider: "google",
            isverified: true
        });
    }

    const token = gentoken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 2 * 24 * 60 * 60 * 1000
    });

    const userdata = await User.findById(user._id).select("-password");

    return res.status(200).json(
        new ApiResponse(200, "Google login successful", userdata)
    );
});




export const forgotPassword = AsyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // 🔐 generate reset token
  const resetToken = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRETKEY,
    { expiresIn: "15m" }
  );

  // 🔗 reset link
  const resetUrl = `http://localhost:8000/api/auth/reset-password/${resetToken}`;

  // 📧 send email
  await sendEmail({
    email: user.email,
    subject: "Reset Password 🔐",
    html: resetPasswordTemplate(user.name, resetUrl),
  });

  return res.status(200).json(
    new ApiResponse(200, "Reset password link sent to email")
  );
});


export const resetPassword = AsyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!token) {
    throw new ApiError(400, "Invalid link");
  }

  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  // 🔐 verify token
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
  } catch (err) {
    throw new ApiError(400, "Invalid or expired reset link");
  }

  // 👤 find user
  const user = await User.findById(decoded.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // 🔒 hash new password
  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;
  await user.save();

  return res.status(200).json(
    new ApiResponse(200, "Password reset successfully 🎉")
  );
});