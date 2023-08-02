"use client";

import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContex";
import style from "../scss/todo.module.scss";
import common from "../scss/common.module.scss";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { dispatch } = useTodosContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const todo = { title, status };
    setLoading(true);
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setLoading(false);
      setTitle("");
      setStatus(false);
      dispatch({ type: "ADD_TODO", payload: json });
    }
  };

  return (
    <div className={style.form_container}>
      <form onSubmit={handleSubmit} className={style.addtodo_form}>
        <div className={style.input_item}>
          <div className={style.checkbox}>
            <input
              onClick={() => setStatus(!status)}
              checked={status}
              type="checkbox"
              readOnly
              className={style.input_filed}
            />
          </div>
          <div className={style.input_box}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              type="text"
              placeholder="What things to do?"
              className={style.input_filed}
            />
          </div>
        </div>
        <button disabled={loading} type="submit" className={style.button}>
          Add
        </button>
      </form>
      {error && <p className={common.error}>{error}</p>}
    </div>
  );
};

export default AddTodo;
