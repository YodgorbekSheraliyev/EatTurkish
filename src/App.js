import React from "react";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "./Components/ExampleContext";

function App() {
  const {count, handleCount} = useContext(MyContext);
  return (
    <div className="App">
      <h2>{count}</h2>
      <button>Add me</button>
    </div>
  );
}

export default App;
