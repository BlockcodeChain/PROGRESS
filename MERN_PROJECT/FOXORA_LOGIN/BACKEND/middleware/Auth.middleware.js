import jwt from 'jsonwebtoken'
import ApiError from '../utils/ApiError.js'

export const protect=(req,res,next)=>{
  try{
      const token =req.cookies.token 
    if(!token){
           return next(new ApiError(401, "Not authorized, no token"));
    }

    const decoded=jwt.verify(token , process.env.JWTSECRET_KEY)
    req.user=decoded.id
       next();
  }
  catch(Err){
   return next(new ApiError(401, "Not authorized, token failed"))
  }
}