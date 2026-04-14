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
  return(
    <main id="container">
      <h1>todos</h1>
      <InputField onAddTodo={addTodo}/>
      <FilterBar />
      <TodoList todos={todos} />
    </main>
  )
}

export default App;