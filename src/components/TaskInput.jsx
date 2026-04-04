import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    addTask(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}