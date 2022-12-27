import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Count : {count}</h1>

      <button onClick={handleIncrement}>Incement</button>
      <button onClick={handleDecrement} disabled={false}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
