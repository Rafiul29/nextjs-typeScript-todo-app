import mongoose, { Schema } from "mongoose";

interface Todos {
  title: string;
  status:boolean;
}

const todoSchema = new mongoose.Schema<Todos>(
  {
    title:{
      type:String,
      required:true,
    },
    status:{
      type:Boolean,
      default:false
    },
  },
  { timestamps: true }
);

const Todo=mongoose.models.Todo || mongoose.model("Todo",todoSchema);
export default Todo;