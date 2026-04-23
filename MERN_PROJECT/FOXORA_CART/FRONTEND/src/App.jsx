import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MainLayout from "./layout/MainLayout"
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/Resetpassword'
import VerifyEmail from './pages/VerifyEmail'
import VerifyEmailLink from './pages/VerifyEmailLink'
const App = () => {
  return (
    <BrowserRouter>

      <ToastContainer position="top-center" theme="colored" />

      <Routes>

        {/* ✅ Navbar visible */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* ❌ Navbar hidden */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify/:token" element={<VerifyEmailLink />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
           
      </Routes>

    </BrowserRouter>
  )
}

export default App