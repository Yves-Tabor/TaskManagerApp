import React from 'react'
import InputField from "./components/InputField";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";
import { nanoid } from 'nanoid'

function App() {
  const [todos, setTodos] = React.useState([]);
  
  const addTodo = (text) => {
    const newTodo = {
        id: nanoid(),
        text: text,
        completed: false
    };

    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const [filter, setFilter] = React.useState('all');
  const filtered = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  return(
    <main id="container">
      <h1>todos</h1>
      <InputField onAddTodo={addTodo}/>
      <FilterBar setFilter={setFilter}/>
      <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}

export default App;