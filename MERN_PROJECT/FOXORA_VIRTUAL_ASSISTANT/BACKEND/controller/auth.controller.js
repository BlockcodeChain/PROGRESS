import User from "../modles/user.model.js"
import AsyncHandler from "../middleware/AsyncHandler.js"
import ApiResponse from "../utils/ApiRespnse.js"
import bcrypt from 'bcryptjs'
import ApiError from "../utils/ApiError.js"
import gentoken from "../utils/token.js"


export const signup =AsyncHandler(async(req,res)=>{


    const {name,email,password}=req.body
   if(!name || !email ||! password){
    throw new ApiError(400,"All fields are required")
   }
    const existemail=await User.findOne({email})
    if(existemail){
        throw new ApiError(400,"Email exist")
    }
  if(password.length<6){
    throw new ApiError(400,"Password must be 6 character")
  }
    // hash password
    const hashpassword=await bcrypt.hash(password,10)
    const newuser= await User.create({
        name,
        email,
        password:hashpassword
    })
    const token=gentoken(newuser._id);
    res.cookie("token",token,{
        httpOnly:true,
         secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:2*24*60*60*1000

    })
    return res.status(200).json(
        new ApiResponse(200, newuser, "User registered successfully") 
    )
})

export const login =AsyncHandler(async(req,res)=>{


    const {email,password}=req.body
   if(!email ||! password){
    throw new ApiError(400,"All fields are required")
   }
    const existUser=await User.findOne({email})
    if(!existUser){
        throw new ApiError(404,"User not found, please signup")
    }

    // compare password
    const ismatched=await bcrypt.compare(password,existUser.password)
    if(!ismatched){
        throw new ApiError(401,"Invalid Credentials")
    }
    
    const token=gentoken(existUser._id);
    res.cookie("token",token,{
        httpOnly:true,
         secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:2*24*60*60*1000

    })
    return res.status(200).json(
        new ApiResponse(200, existUser, "User login successfully") 
    )
})

export const logout =AsyncHandler(async(req,res)=>{
    
    res.cookie("token","",{
        httpOnly:true,
        sameSite:"strict",
         secure: process.env.NODE_ENV === "production",
    })
    return res.status(200).json(
        new ApiResponse(200, null, "User logout successfully") 
    )
})