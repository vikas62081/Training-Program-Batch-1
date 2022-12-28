import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter, { Grettings } from "./Counter";

const App = () => {
  return (
    <div className="App">
      <Counter incrementBy={5} decrementBy={3} resetValue={0} />
      <Counter incrementBy={10} initialCount={100} />
      <Counter incrementBy={10} initialCount={100} />
      <Grettings />
      <Grettings name="Vikas" />
    </div>
  );
};

export default App;
