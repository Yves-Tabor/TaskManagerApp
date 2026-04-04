import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}