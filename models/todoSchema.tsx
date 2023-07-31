import mongoose, { Schema } from "mongoose";

interface Todo {
  title: string;
}

const todoSchema = new mongoose.Schema<Todo>(
  {
    title:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

const Todo=mongoose.models.Todo || mongoose.model("Todo",todoSchema);
export default Todo;