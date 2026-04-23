import mongoose from "mongoose"

const ConnectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connected ✅")
    }
    catch(err){
        console.log("Mongodb not connected ❌")
        console.error("Error connecting to MongoDB:", err)
    }
}
 export default ConnectDB