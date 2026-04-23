import mongoose from "mongoose";

const ConnectDB=async()=>{
    try{
     await  mongoose.connect(process.env.MONGODB_URL)
     console.log("DB Connected Successfully ✅")
    }
    catch(err){
        console.log("DB Not Connected ❌",err)
    }
}
export default ConnectDB