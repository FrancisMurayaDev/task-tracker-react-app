import Hero from "../Hero/Hero";
import "./Todo.css";
import TodoItems from "../TodoItems";
import Time from "../Time/Time";

const Todo = () => {
  return (
    <section className="todo">
      <Hero />
      <Time />
      <TodoItems />
    </section>
  );
};

export default Todo;
