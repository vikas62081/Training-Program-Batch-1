import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import Counter, { Grettings } from "./Counter";

const App = () => {
  const tableHeader = ["Id", "Name", "Email", "Age", "City", "Action"];
  const users = [
    { id: 1, name: "John", email: "john@example.com", age: 88 },
    { id: 2, name: "Abc", email: "abc@example.com", age: 12 },
    { id: 3, name: "Ben", email: "ben@example.com", age: 56 },
    { id: 4, name: "David", email: "david@example.com", age: 67 },
    { id: 5, name: "Sam", email: "sam@example.com", age: 22 },
    {
      id: 6,
      name: "Vikas",
      email: "vikas@gmail.com",
      age: null,
      address: { streetNo: 4, city: "Banglore" },
    },
    {
      id: 7,
      name: "Vikas",
      email: "vikas@gmail.com",
      age: null,
      address: { streetNo: 4, city: "Banglore" },
    },
  ];
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="App">
      {/* <Counter incrementBy={5} decrementBy={3} resetValue={0} />
      <Counter incrementBy={10} initialCount={100} />
      <Counter incrementBy={10} initialCount={100} />
      <Grettings />
      <Grettings name="Vikas" /> */}
      {/* <h1>User are : </h1>
      {users.map((user) => (
        <Fragment key={user.id}>
          <p>
            my name is <b>{user.name}</b>, my email id is <b>{user.email}</b>{" "}
            {user?.address?.city}.
          </p>
        </Fragment>
      ))} */}
      <table>
        <caption>Student Table</caption>
        <thead>
          <tr>
            {tableHeader.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.email}</td>
              <td>{row?.address?.city}</td>
              <td>
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
