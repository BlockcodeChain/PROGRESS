import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './utils/DB.js'
import cors from 'cors'
import authRouter from "./route/user.route.js"
import cookieParser from 'cookie-parser'
import errorHandler from './middleware/ErrorHandler.js'
dotenv.config({
    path:'./.env'
})
const myport=process.env.PORT||3000

const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRouter)
app.use(errorHandler)
app.listen(myport,(req,res)=>{
    ConnectDB()
    console.log(`Server running at ${myport}`)
})
