import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import helmet from "helmet"

import ConnectDB from "./utils/DB.js"
import authRouter from "./routes/authrouter.js"
import errorHandler from "./middleware/ErrorHandler.js"

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(helmet())

app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}))

// routes
app.use("/api/auth", authRouter)

// error handler
app.use(errorHandler)

// server
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
   ConnectDB()
  console.log(`🚀 Server running on port ${PORT}`)
})