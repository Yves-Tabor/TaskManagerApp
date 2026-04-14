import React from 'react'

function InputField({onAddTodo}) {
    const [todo, setTodo] = React.useState('')

  return (
    <div className="input-field">
      <input type="text" placeholder="Add todo ..." 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && onAddTodo(todo)} 
            />
      <button onClick={() => onAddTodo(todo)}>Add</button>
    </div>
  )
};

export default InputField
