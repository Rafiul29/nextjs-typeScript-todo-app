"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "../hooks/useTodosContex";
import style from "../scss/todoList.module.scss"
import common from "../scss/common.module.scss"

const TodoList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // data fetch
  const { todos, dispatch } = useTodosContext();

  // fetched all todo
  useEffect(() => {
    const getAllTodo = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/todos");
        const json = await res.json();
        if (res.ok) {
          dispatch({ type: "SET_TODOS", payload: json });
        }
        setLoading(false);
        setError("");
      } catch (error) {
        setLoading(false);
        setError("failed to fetched data");
      }
    };
    getAllTodo();
  }, [dispatch]);

  // decide what to render
  let content = null;
  
  // loading 
  if (loading) {
    content = <div className={common.loading}>Loading.........</div>
  }

  // error
  if (error) {
    content = <div className={common.error}>{error}</div>
  }
    // map all todo 
  if (!loading && !error && todos?.length > 0) {
    content = todos.map((todo: any) => <TodoItem key={todo._id} todo={todo} />);
  }
  
  return (
    <div className={style.todo_list_container}>
       <div className={style.todo_list}>
        {content }
       </div>
    </div>
     
  );
};

export default TodoList;
