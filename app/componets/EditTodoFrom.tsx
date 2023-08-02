import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTodosContext } from "../hooks/useTodosContex";
import style from "../scss/eiditTodo.module.scss";
import common from "../scss/common.module.scss"

const EditTodoFrom = ({ todo }: { todo: any }) => {
  const [title, setTitle] = useState(todo?.title);
  const [status, setStatus] = useState(todo?.status);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // dispatch todo
  const { dispatch } = useTodosContext();

  // router
  const router = useRouter();

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, status }),
    });
    const json = await res.json();
    if (!res.ok) {
      setLoading(false);
      setError("update not successful");
    }
    if (res.ok) {
      setLoading(false);
      setError("");
      dispatch({ type: "UPDATE_TODO", payload: json });
      router.push("/");
    }
  };

  return (
    <div className={style.edit_form_container}>
      <form onSubmit={handleUpdate} className={style.editTodo_form}>
        <div className={style.input_item}>
          <div className={style.checkbox}>
            <input
              onClick={() => setStatus(!status)}
              type="checkbox"
              checked={status}
              id="status"
              className={style.input_filed}
            />
          </div>
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              required
              className={style.input_filed}
            />
          </div>
        </div>
        <button disabled={loading} type="submit" className={style.button}>
          Update
        </button>
      </form>
      {error && <p className={common.error}>{error}</p>}
    </div>
  );
};

export default EditTodoFrom;
