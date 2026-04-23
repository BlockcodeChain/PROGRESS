import jwt from 'jsonwebtoken'

const gentoken=(_id)=>{
   
    const token=jwt.sign({_id},process.env.JWT_SECRETKEY ,{expiresIn:"2d"})
    return token;
}
export default gentoken