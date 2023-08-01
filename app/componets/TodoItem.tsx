import React from 'react'

interface TodoItemProps{
  todo:any;
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) => {
  const {_id,title,status}=todo

  return (
    <div>
      {status && <p>{title}</p>} 
    </div>
  )
}

export default TodoItem