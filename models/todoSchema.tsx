import mongoose, { Schema } from "mongoose";

interface Todo {
  title: string;
  status:boolean;
}

const todoSchema = new mongoose.Schema<Todo>(
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