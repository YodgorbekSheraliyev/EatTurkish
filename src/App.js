import React from "react";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "./Components/ExampleContext";

function App() {
  const {count, increaseCount, decreaseCount} = useContext(MyContext);
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={()=>{increaseCount()}}>Add one</button>
      <button onClick={()=>{decreaseCount()}}>Substract one</button>
    </div>
  );
}

export default App;
