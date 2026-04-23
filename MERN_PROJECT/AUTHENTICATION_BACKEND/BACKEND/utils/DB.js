import mongoose from 'mongoose'

const ConnectDB= async ()=>{
    try{
           await mongoose.connect(process.env.MONGODB_URL)
           console.log("DB CONNECTED SUCCESSFULLY ✅")
    }
    catch(err){
        console.log("DB Not Connected Successfully ❌",err)
    }
}

export default ConnectDB