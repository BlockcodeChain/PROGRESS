import React from 'react'
import {BrowserRouter ,Routes, Route}  from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer position="top-right" autoClose={2000} pauseOnHover
        theme="colored"
         />
     <Routes>
       
       <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
