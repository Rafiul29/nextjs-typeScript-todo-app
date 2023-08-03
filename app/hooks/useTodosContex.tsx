"use client"
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodosContext=()=>{
  const context=useContext(TodoContext)
  if(!context){
    throw new Error("You must call useTodos inside a Todo contect")
  }
  return context;
}