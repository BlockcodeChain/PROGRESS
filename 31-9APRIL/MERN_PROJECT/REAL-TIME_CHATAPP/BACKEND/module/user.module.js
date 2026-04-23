import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    fullname:{
        type:String
    },
     username:{
        type:String,
        required:true,
        unique:true
    },
     email:{
        type:String,
        required:true,
    },
     password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:" "
    },

},{timestamps:true})

const usermodel=mongoose.model("user",userSchema)

export default usermodel