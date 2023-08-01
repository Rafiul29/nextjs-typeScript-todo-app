import React from 'react'
import variables from '../scss/variables.module.scss'
interface TodoItemProps{
  todo:any;
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) => {
  const {_id,title,status}=todo

  const handleDelete=async(id:string)=>{
    await fetch(`/api/todo/${id}`,{
      method:"DELETE",
      headers:{
        "Content-type": "application/json"
      }
     })
  }

  return (
    <div>
      <p className={variables.title}>{title}</p> 
      <button onClick={()=>handleDelete(_id)}>delete</button>
    </div>
  )
}

export default TodoItem