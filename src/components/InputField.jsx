import React from 'react'

function InputField({onAddTodo}) {
    const [todo, setTodo] = React.useState('')
    const handleAdd = () => {
    if (!todo.trim()) return;

    onAddTodo(todo);
    setTodo('');    
};
  return (
    <div className="input-field">
      <input type="text" placeholder="Add todo ..." 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()} 
            />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  )
};

export default InputField
