import mongoose from 'mongoose'

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter your name"],
    
    },
     email:{
        type:String,
        required:[true,"Enter your email"],
        unique: true,
      trim: true,
      lowercase: true,
    
    },
     password:{
        type:String,
        required:[true,"Enter your password"],
        minlength: 6,
    
    },
    isverified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: {
    type: String
  },

  resetPasswordExpire: {
    type: Date
  },
//   google auth 
    provider:{
   type:String,
   enum:['local','global'],
   default:'local'
    }
},{timestamps:true})

const usermodel=mongoose.model("user",UserSchema)

export default usermodel