import mongoose from "mongoose";

// DataBase connection
const connectMongoDB=()=>{
  try{
    mongoose.connect(process.env.MONGO_URI as string)
    console.log("connected to MongoDB")
  }catch(error){
    console.log("Not connected to MongoDB")
  }
}

export default connectMongoDB;