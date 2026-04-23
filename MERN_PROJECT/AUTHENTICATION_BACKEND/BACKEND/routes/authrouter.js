import express from 'express'
import { signup, login, logout, forgotPassword, resetPassword, verifyEmail} from '../controller/user.controller.js'
import { protect } from "../middleware/auth.middleware.js"
import { getProfile } from "../controller/user.controller.js"
import {
  signupValidator,
  loginValidator,
  forgotPasswordValidator,
  resetPasswordValidator
} from "../validators/auth.validator.js"

import { validate } from "../middleware/validate.js"
const router = express.Router()
router.post('/signup',signupValidator, validate, signup)
// ✅ Email verify (IMPORTANT)
router.get("/verify-email/:token", verifyEmail)

// User routes
router.get("/profile", protect, getProfile)

router.post('/login',loginValidator, validate, login)
router.post('/logout', logout)
router.post("/forgot-password", forgotPasswordValidator, validate,forgotPassword)
router.post("/reset-password/:token",resetPasswordValidator, validate, resetPassword)
export default router