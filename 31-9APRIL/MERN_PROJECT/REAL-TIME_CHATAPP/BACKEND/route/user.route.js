import express from "express"
import { signup, login, logout,  getMe } from "../controller/user.controller.js"
import  isAuth  from "../middleware/isAuth.js"
const router=express.Router();
router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", logout)
// Protected route
router.get("/me", isAuth, getMe);

export default router