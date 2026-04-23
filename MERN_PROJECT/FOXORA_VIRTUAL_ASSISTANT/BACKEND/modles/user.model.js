import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    assiname:{
        type:String,
      
    },
    assiImage:{
        type:String,
       
    },
    history:[
        {type:String}
    ]
},{timestamps:true})

const UserModel=mongoose.model("User",UserSchema)

export default UserModel