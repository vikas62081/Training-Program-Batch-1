import React, { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeDob = (e) => {
    setDob(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, dob);
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setDob("");
  };

  return (
    <>
      <h1>Student form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name :
          <input
            name="name"
            value={name}
            onChange={changeName}
            placeholder="Enter name"
            type="text"
            required
          />
        </div>
        <div>
          Email :{" "}
          <input
            name="email"
            placeholder="Enter email"
            type="email"
            required
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div>
          Date of Birth :
          <input
            name="dob"
            type="date"
            required
            value={dob}
            onChange={changeDob}
          />
        </div>
        <div>
          {/* <button>Submit</button> */}
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default StudentForm;
