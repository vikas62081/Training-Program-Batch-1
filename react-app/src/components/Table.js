import React, { useState } from "react";
const initialUsers = [
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
const Table = () => {
  const tableHeader = ["Id", "Name", "Email", "Age", "City", "Action"];
  const [usersState, setUsersState] = useState(initialUsers);

  const handleDelete = (id) => {
    setUsersState(usersState.filter((user) => user.id !== id));
  };
  return (
    <>
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
          {usersState?.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.age}</td>
              <td>{row?.address?.city}</td>
              <td>
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
