import { useEffect, useState } from "react";
import "./App.css";
import Counter, { Grettings } from "./components/Counter";
import StudentForm from "./components/Form";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

export default App;
