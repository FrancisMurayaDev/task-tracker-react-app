import { useRef, useEffect, useState } from "react";
import useTasksStore from "../store/taskStore";

const TodoInput = () => {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);

  const addTask = useTasksStore((state) => state.addTask);
  const tasks = useTasksStore((state) => state.tasks);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeTaskTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleChangeTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskTitle) return alert("Please add a task title");
    if (!taskDescription) return alert("Please add a task description");
    addTask({
      id: Math.ceil(Math.random() * 10000000),
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      completed: false,
    });
  };

  return (
    <form className="todo-input-form">
      <input
        type="text"
        placeholder="enter task title"
        className="todo-text-input"
        ref={inputRef}
        onChange={handleChangeTaskTitle}
      />
      <textarea
        placeholder="enter todo description"
        onChange={handleChangeTaskDescription}
      ></textarea>
      <button className="submit-btn" onClick={handleAddTask}>
        Add todo
      </button>
    </form>
  );
};
export default TodoInput;
