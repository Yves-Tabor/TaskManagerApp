import React from 'react'
import TodoItem from './TodoItem'
import FilterBar from './FilterBar'

function TodoList({todos, onToggle, onDelete, onClick}) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList

