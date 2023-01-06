import React, { useState } from "react";
const initialFormData = {
  name: "",
  email: "",
  dob: "",
};
const StudentForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, dob } = formData;
    console.log(name, email, dob);
    resetForm();
  };
  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <h1>Student form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name :
          <input
            name="name"
            value={formData.name}
            onChange={onChange}
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
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div>
          Date of Birth :
          <input
            name="dob"
            type="date"
            required
            value={formData.dob}
            onChange={onChange}
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
