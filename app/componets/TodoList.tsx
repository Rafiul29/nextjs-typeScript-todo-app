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
      setIsLoading(true)
      const res=await fetch('/api/todo');
      if(!res.ok){
        setIsError("there was a server side error")
      } 
      const data= await res.json();
      setTodos(data)
      setIsLoading(false)
     
    }catch(error){
      console.log(error)
      setIsLoading(false)
      setIsError("There was an server side error")
    }
   
  }
  useEffect(()=>{
    getAllTodo()
  },[])

  // decide what to render
  let content=null
  if(isLoading){
    content=<Loading />
  }

  if( isError){
    content=<Error/>
  }

  if(!isLoading && !isError && todos?.length===0){
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
