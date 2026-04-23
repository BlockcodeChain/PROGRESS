import jwt from "jsonwebtoken"

const gentoken=(id)=>{
   const token= jwt.sign({id},process.env.JWT_SECRET_KEY,{
        expiresIn:"2d"
    })
    return token
}
export default gentoken