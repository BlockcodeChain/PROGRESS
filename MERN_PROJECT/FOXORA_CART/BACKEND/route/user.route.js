import express from 'express'
import { protect } from '../middleware/auth.middleware.js'

import {
  register,
  login,
  logout,
  googleAuth,
  getCurrentUser,
  forgotPassword,
  resetPassword,
  verifyEmail
} from '../controller/user.controller.js'

import { validate } from '../middleware/validate.js'
import { 
  signupValidator, 
  loginValidator 
} from '../validator/auth.validator.js'

const router = express.Router()

router.post("/register", signupValidator, validate, register)
router.post("/login", loginValidator, validate, login)
router.post("/logout", logout)

router.post("/google", googleAuth)

router.get("/me", protect, getCurrentUser)

router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)
router.get("/verify/:token", verifyEmail)

export default router