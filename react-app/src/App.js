import { useEffect, useState } from "react";
import "./App.css";
import Counter, { Grettings } from "./components/Counter";
import StudentForm from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <StudentForm />
    </div>
  );
};

export default App;
