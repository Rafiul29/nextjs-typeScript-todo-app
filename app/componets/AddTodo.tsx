"use client";

import { useState } from "react";
import { json } from "stream/consumers";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleSubmit=async(e:any)=>{
    e.preventDefault();
   await fetch('/api/todo',{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({title})
   })
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          placeholder="What things to do?"
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddTodo;
