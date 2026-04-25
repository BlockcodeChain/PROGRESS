import jwt from 'jsonwebtoken'
import ApiError from '../utils/ApiError.js'

export const protect=(req,res,next)=>{
    try{
    const token=req.cookies.token

    if(!token){
        throw new ApiError(400,"Not authorized, no token")
    }

    const decoded=jwt.verify(token,process.env.JWTSECRET_KEY)
     req.user=decoded._id
     next()
}
catch(err){
   next(new ApiError(401, "Invalid or expired token"))
}
}

