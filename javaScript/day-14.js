// Day 14

const users = [
  { id: 1, name: "John", email: "john@example.com", age: 88 },
  { id: 2, name: "Abc", email: "abc@example.com", age: 12 },
  { id: 3, name: "Ben", email: "ben@example.com", age: 56 },
  { id: 4, name: "David", email: "david@example.com", age: 67 },
  { id: 5, name: "Sam", email: "sam@example.com", age: 22 },
  { id: 5, name: "Vikas", email: "vikas@gmail.com", age: null },
];

// const user1 = {
//   id: 1,
//   name: "John",
//   email: "john@example.com",
//   age: 88,
//   address: { city: "Banglore", street: { No: 12 } },
// };
// const user2 = { id: 3, name: "Ben", email: "ben@example.com", age: 56 };
// Object Destructring
// const { name: user1Name, email } = user1;
// const { name, email: user2Email } = user2;
// console.log(name, email);
// console.log(name, user2Email);
// const name = user.name;
// console.log(user.name);

// nested Object
// 1.
// const { address } = user1;
// const { city } = address;
// 2.

// const {
//   address: {
//     city,
//     street: { No },
//   },
// } = user1;
// console.log(city, No);

// Array Destructure

// const [user1, user2, ...restUsers] = users;
// console.log(restUsers);
// const obj1 = { id: 1, name: "John" };
// const obj2 = { email: "john@example.com" };

// const obj3 = { id: "kjsfh", ...obj1, ...obj2 };
// console.log(obj3);

const getUser = new Promise((resolve, reject) => {
  const person = { id: 1, name: "John" };

  //   setTimeout(() => {
  //     if (person.id == 2) {
  //       resolve(person);
  //     } else {
  //       reject({ message: "user not found" });
  //     }
  //   }, 1000);
});
// console.log(getUser);

// getUser
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finally"));

//  CRUD (Create, Read, Update, Delete)
let students = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    dob: "10/10/2002",
  },
];

const getStudents = () => {
  console.log(students);
};

const createStudent = (newStudent) => {
  students = [...students, newStudent];
};
const updateStudentById = (id, updatedStudent) => {
  students = students.map((student) => {
    if (student.id === id) {
      return { ...student, ...updatedStudent };
    }
    return student;
  });
};
const deleteStudentById = (id) => {
  students = students.filter((student) => student.id !== id);
};

getStudents();
console.log("Before adding");

createStudent({
  id: 2,
  name: "Ben",
  email: "ben@gmail.com",
  dob: "10/10/2002",
});
console.log("After adding");
getStudents();

updateStudentById(2, {
  name: "Bob",
  email: "jdggn@gmail.com",
  dob: "13/10/2002",
});

console.log("After update");
getStudents();

deleteStudentById(1);
console.log("After delete");
getStudents();
