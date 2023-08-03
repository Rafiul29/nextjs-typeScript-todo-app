"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTodosContext } from "../hooks/useTodosContex";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "../scss/todoItem.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface TodoItemProps {
  todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  // session
  const {data:session}=useSession()

  // router
  const router=useRouter()

  // distructure todo
  const { _id, title,status } = todo;

  // 
  const { dispatch } = useTodosContext();

  // delete todo
  const handleDelete = async (id: string) => {
      // check user authorization
      if(!session){
          router.push('/signin')
          return;  
      }
      
    setLoading(true);
    const res = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    if (!res.ok) {
      setError("delete not successfull");
    }
    if (res.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };


  return (
    <div className={style.todo_item}>
      <p className={`${status ? `${style.title_true}`:`${style.title_false}`}`}>{title}</p>
      <div className={style.todo_links}>
        <Link href={`/edit-todo/${_id}`} className={style.edit} >
          <FiEdit/>
        </Link>
        <button disabled={loading} onClick={() => handleDelete(_id)} className={style.delete}>
          <RiDeleteBin6Line />
        </button>
      </div>
      {/* error */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TodoItem;
