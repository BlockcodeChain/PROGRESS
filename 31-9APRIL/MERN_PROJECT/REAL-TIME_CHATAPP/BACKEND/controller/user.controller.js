import User from "../module/user.module.js";
import asyncHandler from "../middleware/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/token.js";

// SIGNUP
export const signup = asyncHandler(async (req, res) => {
    const { fullname, username, email, password } = req.body;

    if (!fullname || !username || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existUser = await User.findOne({
        $or: [{ email }, { username }]
    });

    if (existUser) {
        throw new ApiError(400, "Email or Username already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        fullname,
        username,
        email,
        password: hashPassword
    });

    const token = genToken(newUser._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 2 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json(
        new ApiResponse(201, "User registered successfully",{
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email
        })
    );
});

// LOGIN
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const user = await User.findOne({ email });
      console.log("User from DB:", user);

    if (!user) {
        throw new ApiError(400, "User not found");
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
        throw new ApiError(400, "Invalid credentials");
    }

    const token = genToken(user._id);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 2 * 24 * 60 * 60 * 1000
    });
console.log("Login email:", email);
    return res.status(200).json(
        new ApiResponse(200,"Login successful", {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
        })
    );
});

// LOGOUT
export const logout = asyncHandler(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    return res.status(200).json(
        new ApiResponse(200, "Logout successful")
    );
});

export const getMe = asyncHandler(async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user
    });
});