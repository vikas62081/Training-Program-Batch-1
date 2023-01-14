import axios from "axios";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Counter, { Grettings } from "./components/Counter";
import StudentForm from "./components/Form";
import Student from "./components/Student";
import Todo from "./components/Todo";
import Users from "./components/users";
export const StudentContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((resp) =>
      setPosts(resp.data)
    );
  }, []);
  return (
    <div className="App">
      <StudentContext.Provider value={posts}>
        {/* <Student /> */}
        {/* <Todo /> */}
        {/* <Counter /> */}
        <Users />
      </StudentContext.Provider>
    </div>
  );
};

export default App;
