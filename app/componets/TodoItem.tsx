"use client"

import React, { useState } from 'react'
import variables from '../scss/variables.module.scss'
import Link from 'next/link';
interface TodoItemProps{
  todo:any;
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {_id,title}=todo
  const handleDelete=async(id:string)=>{
    const res=await fetch(`/api/todos/${id}`,{
      method:"DELETE",
      headers:{
        "Content-type": "application/json"
      }
     })
     const json=res.json()
  }



  return (
    <div>
      <p className={variables.title}>{title}</p> 
      <button>
        <Link href={`/editTodo/${_id}`}>edit</Link>
      </button>
      <button onClick={()=>handleDelete(_id)}>delete</button>
    </div>
  )
}

export default TodoItem