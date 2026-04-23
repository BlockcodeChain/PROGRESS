import mongoose from 'mongoose'

const ConnectDB=async  ()=>{
    try{
       await  mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected Succeffully✅")
    }
    catch(err){
        console.log("DB not Connected Successfully ❌",err);
    }
}

export  default ConnectDB