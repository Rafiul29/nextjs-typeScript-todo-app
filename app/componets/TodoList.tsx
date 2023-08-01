"use client"
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import TodoItem from "./TodoItem";
import { useRouter } from "next/navigation";

const TodoList = () => {
  const [todos,setTodos]=useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const getAllTodo=async()=>{
    try{
      setLoading(true);
      const res=await fetch('/api/todos');
      if(res.ok){
        router.push("/");
      } 
      const data= await res.json();
      setTodos(data)
      setLoading(false);
     
    }catch(error){
      setError('Error fetching user data');
      setLoading(false);
    }
   
  }
  useEffect(()=>{
    getAllTodo()
  },[])

  // decide what to render
  let content=null
  if (loading) {
    content="Loading"
  }

  if (error) {
    content={error}
  }

  if(!loading && !error && todos?.length===0){
    content="Todos Not Found"
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
