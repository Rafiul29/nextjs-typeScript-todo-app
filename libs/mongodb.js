import mongoose from "mongoose";


const connectMongoDB=()=>{
  try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("connected to MongoDB")
  }catch(error){
    console.log("connected to MongoDB")
  }
}

export default connectMongoDB;