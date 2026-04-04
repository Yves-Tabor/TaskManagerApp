import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import Footer from "./Footer";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Smart Tasks</h1>

      <TaskInput addTask={addTask} />

      <FilterBar filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <Footer tasks={tasks} />
    </div>
  );
}