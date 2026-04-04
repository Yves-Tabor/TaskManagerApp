export default function Footer({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="footer">
      <p>
        {tasks.length} tasks • {completed} completed
      </p>
    </div>
  );
}