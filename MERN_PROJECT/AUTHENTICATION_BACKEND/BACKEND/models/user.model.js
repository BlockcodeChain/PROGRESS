import mongoose from "mongoose";
// 👉 You are creating structure for user
const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
    },
    password:{
    type:String,
    required:true,
    minlength:6
    },
    // user verified hai ya nahi
// ➡️ By default = false
   isverified:{
    type:Boolean,
    default:false
   },
   
emailVerifyToken: {
  type: String,
  select: false
},
emailVerifyExpire: {
  type: Date,
  select: false
},
resetPasswordToken: String,
resetPasswordExpire: Date,
//    👉 Email verification code
// 👉 select:false means:
// 👉 database me hoga but normally show nahi hoga
   
   forgotPasswordCode:{
    type:String,
    select:false
   },
    forgotPasswordCodeExpire:{
    type:Date,
    select:false
   },
},{timestamps:true})

const userModel=mongoose.model("user",userSchema)

export default userModel



// 👉 select:false = “isko chhupa do (hide kar do)”