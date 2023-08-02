import AddTodo from "./componets/AddTodo";
import TodoList from "./componets/TodoList";
import style from "./scss/home.module.scss";

const HomePage = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_item}>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
