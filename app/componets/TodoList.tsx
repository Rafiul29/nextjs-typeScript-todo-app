"use client"
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "../hooks/useTodosContex";

const TodoList = () => {
const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // data fetch
  const {todos,dispatch}=useTodosContext()
  
  // fetched data
  useEffect(()=>{
    const getAllTodo=async()=>{
      try{
        setLoading(true)
        const res=await fetch('/api/todos');
        const json= await res.json();
        if(res.ok){
          dispatch({type:"SET_TODOS",payload:json})
        } 
        setLoading(false);
        setError("")
      }catch(error){
        setLoading(false)
        setError(" sevr is not ruuning")
      }
    }
    getAllTodo()
  },[dispatch])

  // decide what to render
  let content=null
  if (loading) {
    content="Loading........."
  }

  if (error) {
    content={error}
  }

  if(!loading && !error && todos?.length>0){
    content=todos.map((todo:any)=><TodoItem key={todo._id} todo={todo}/>)
  }

  return (
    <>
      {content}
    </>
  )
}

export default TodoList;
