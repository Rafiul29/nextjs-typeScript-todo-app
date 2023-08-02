import AddTodo from './componets/TodoForm'
import TodoList from './componets/TodoList'
import variables from './scss/variables.module.scss'

const HomePage = () => {
  return (
    <div >
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default HomePage