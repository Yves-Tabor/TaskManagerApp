export default function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className="task-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}