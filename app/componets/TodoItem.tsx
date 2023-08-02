"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTodosContext } from "../hooks/useTodosContex";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "../scss/todoItem.module.scss";

interface TodoItemProps {
  todo: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // distructure todo
  const { _id, title,status } = todo;

  const { dispatch } = useTodosContext();

  // delete todo
  const handleDelete = async (id: string) => {
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
      <p className={style.title }>{title}</p>
      <div className={style.todo_links}>
        <Link href={`/editTodo/${_id}`} className={style.edit} >
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
