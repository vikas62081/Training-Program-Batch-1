import React, { useContext } from "react";
import { StudentContext } from "../App";

const Student = () => {
  return (
    <>
      <h2>parent</h2>
      <StudentProfile />
    </>
  );
};

export default Student;

const StudentProfile = () => {
  const posts = useContext(StudentContext);
  if (posts.length == 0) return "Loading...";
  return (
    <>
      <h5>Child </h5>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};
