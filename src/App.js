import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const handleTodo = (excludeItem) => {
    const filteredItems = todos.filter((item) => {
      return item !== excludeItem;
    });
    setTodos(filteredItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
