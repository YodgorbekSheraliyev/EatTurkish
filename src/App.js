import { ToDo } from "./Components/ToDo/ToDo";
import { useState } from "react";

function App() {
  const localTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos): [ ])

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos}></Form>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  );
}

export default App;
