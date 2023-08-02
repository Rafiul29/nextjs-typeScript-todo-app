import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTodosContext } from "../hooks/useTodosContex";
const EditTodoFrom = ({ todo }: { todo: any }) => {
  const [title, setTitle] = useState(todo?.title);
  const [status, setStatus] = useState(todo?.status);
  const [loading,setLoading]=useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  // dispatch todo
  const {dispatch}=useTodosContext();

  // router
  const router = useRouter();

  const handleUpdate = async (e: any) => {
    e.preventDefault();
      setLoading(true)
    const res = await fetch(`/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, status }),
    });
    const json=await res.json()
      if(!res.ok){
        setLoading(false)
        setError("update not successful")
      }
    if (res.ok) {
      setLoading(false);
      setError("")
      dispatch({type:"UPDATE_TODO",payload:json})
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />
      <div>
        <input onClick={() => setStatus(!status)} type="checkbox" id="status" />
        <label htmlFor="status"> status Changes</label>
      </div>
      <button disabled={loading} type="submit">Update</button>
      <p>{error}</p>
    </form>
  );
};

export default EditTodoFrom;
