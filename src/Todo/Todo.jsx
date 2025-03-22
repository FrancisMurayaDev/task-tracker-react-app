import Hero from "./Hero";
import "./todo.css";
import TodoItems from "./TodoItems";

const Todo = () => {
  return (
    <section className="todo">
      <Hero />
      <TodoItems />
    </section>
  );
};

export default Todo;
