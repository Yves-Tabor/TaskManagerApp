import React from 'react'

function TodoItem({todo, onToggle, onDelete}) {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.completed}/>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn">Delete</button>
    </li>
  )
}

export default TodoItem