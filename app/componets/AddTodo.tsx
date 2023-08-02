"use client";

import { use, useState } from "react";
import { useTodosContext } from "../hooks/useTodosContex";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onClick={() => setStatus(!status)}
          checked={status}
          type="checkbox" readOnly
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          placeholder="What things to do?"
        />
        <button disabled={loading} type="submit">
          Add task
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default AddTodo;
