import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})
import {ErrorHandler} from './middleware/ErrorHandler.js'
import ConnectDB from './utils/DB.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Authrouter from './route/user.route.js'
const app=express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',Authrouter)
const MyPort=process.env.PORT
app.use(ErrorHandler)
app.listen(MyPort,(req,res)=>{
    ConnectDB()
    console.log(`Server Running at port ${MyPort}`)
})