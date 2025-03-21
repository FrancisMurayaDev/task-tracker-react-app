import TodoInput from "./TodoInput";
import useTasksStore from "../store/taskStore";
import now from "../utils/now";

const Hero = () => {
  const tasks = useTasksStore((state) => state.tasks);
  let incomplete = 0;
  tasks.forEach((currentTask) => {
    if (currentTask.completed === false) incomplete += 1;
  });
  return (
    <section className="hero">
      <h3>Good {now()} dennis</h3>
      <h2>You have {incomplete} tasks left today</h2>
      <TodoInput />
    </section>
  );
};
export default Hero;
