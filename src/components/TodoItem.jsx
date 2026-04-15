import React from 'react'

function TodoItem({todo, onToggle, onDelete}) {
  return (
    <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </span>
  )
}

export default TodoItem