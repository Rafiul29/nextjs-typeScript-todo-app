import { useState } from "react";
import { useRouter } from "next/navigation";
const EditTodoFrom = ({ todo }: { todo: any }) => {
  const [title, setTitle] = useState(todo?.title);
  const [status, setStatus] = useState(todo?.status);

  const router = useRouter();

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, status }),
    });
    if (res.ok) {
      console.log("todo was updated");
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
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodoFrom;
