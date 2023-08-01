import TodoList from './componets/TodoList'
import variables from './scss/variables.module.scss'

const HomePage = () => {
  return (
    <div  className={variables.title}>
      <TodoList/>
    </div>
  )
}

export default HomePage