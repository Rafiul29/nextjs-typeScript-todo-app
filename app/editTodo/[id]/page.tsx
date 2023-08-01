"use client"
import EditTodoFrom from '@/app/componets/EditTodoFrom';
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TodoData {
  id: string;
  title: string;
  status: string;
}

const EditTodo: React.FC = () => {
  const [todo,setTodo]=useState<TodoData | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams()
  const {id}=params

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/todos/${id}`);
       setTodo(response.data)
       setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id,setTodo]);

  // decide what to render
  let content=null;
  if (loading) {
    content="Loading ....."
  }

  if (error) {
    content={error}
  }

  if(!loading && !error){
    content=<EditTodoFrom todo={todo}/>
  }

  return (
    <>
      {content}
    </>
  )
}

export default EditTodo;
