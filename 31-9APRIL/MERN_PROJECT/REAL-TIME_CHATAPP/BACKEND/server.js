import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authrouter from './route/user.route.js'
import ConnectDB  from './utils/DB.js'
dotenv.config({
    path:"./.env"
})
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authrouter)

const myport=process.env.PORT||3000
app.listen(myport,(req,res)=>{
    ConnectDB()
    console.log(`Server is running on port ${myport}`)
})
