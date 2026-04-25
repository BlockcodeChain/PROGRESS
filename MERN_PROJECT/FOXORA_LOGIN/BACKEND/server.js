import express from 'express'
import dotenv from 'dotenv'
import cors  from 'cors'
import cookieParser from 'cookie-parser'
// import Authrouter from 
import ConnectDB from './utils/DB.js'
import ErrorHandler from './middleware/ErrorHandler.js'
dotenv.config({
    path:"./.env"
})
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser)
app.use(express.urlencoded({extended:true}));
// app.use('/api/auth',Authrouter)
const myport =process.env.PORT
app.use(ErrorHandler)
app.listen(myport,(req,res)=>{
    ConnectDB()
console.log(`Server Runing at port ${myport}`);
})