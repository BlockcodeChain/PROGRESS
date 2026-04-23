import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
   <BrowserRouter>
   <ToastContainer position="top-center" autoClose={2000} />
   <Routes>
    <Route path='/' element={<Signup />} />
    <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
