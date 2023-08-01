"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  // router
  const router=useRouter()
  const handleSubmit=async(e:any)=>{
    e.preventDefault();
  const res= await fetch('/api/todos',{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({title})
   })
    setTitle("")
    if(res.ok){
      router.push("/");
    }
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
