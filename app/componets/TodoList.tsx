"use client"
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos,setTodos]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState("");

  const getAllTodo=async()=>{
    try{
      const res=await fetch('/api/todo');
      if(!res.ok){
        // throw new Error("Someting went wrong" as string)
      } 
      const data= await res.json();
      setTodos(data)
      setIsLoading(false)
      setIsError("")
    }catch(error){
      setIsLoading(true)
      setIsError("There was an server side error")
    }
   
  }
  useEffect(()=>{
    getAllTodo()
  },[])

  // decide what to render
  let content=null
  if(isLoading){
    content=<Loading/>
  }

  if(!isLoading && isError){
    content=<Error/>
  }

  if(isLoading && isError && todos.length===0){
    content=<Error/>
  }

  if(!isLoading && !isError && todos?.length>0){
    content=todos.map((todo:any)=><TodoItem key={todo._id} todo={todo}/>)
  }

  return (
    <>
      {content}
    </>
  )
}

export default TodoList;
