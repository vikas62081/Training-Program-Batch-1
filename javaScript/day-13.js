// working with Object Arrays
const users = [
  { id: 1, name: "John", email: "john@example.com", age: 88 },
  { id: 2, name: "Abc", email: "abc@example.com", age: 12 },
  { id: 3, name: "Ben", email: "ben@example.com", age: 56 },
  { id: 4, name: "David", email: "david@example.com", age: 67 },
  { id: 5, name: "Sam", email: "sam@example.com", age: 22 },
  { id: 5, name: "Vikas", email: "vikas@gmail.com", age: null },
];

// 1. forEach
// console.log(users);
// const isUserEligibleToVote = (age) => {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// users.forEach((user, index) => {
//   const vote = isUserEligibleToVote(user.age, user.name);

//   //   console.log(index, user.name);
// });

// for (let i = 0; i < users.length; i++) {
//   isUserEligibleToVote(users[i].age, users[i].name);
// }

// 2. fiter

// const eligibleUsers = users.filter((user) => user.age >= 18);
// console.log(eligibleUsers);

// const correctUsers = users.filter(
//   (user) => user.email.includes("example.com") && user.age >= 18
// );
// console.log(correctUsers);

// 3. find

// const obj = users.find((user) => user.age < 10);
// console.log(obj);

// 4. map

// const modifiedUsers = users.map((user) => {
//   const a = {
//     ...user,
//     isEligibleToVote: user.age >= 18 ? "Yes" : "No",
//     birthYear: new Date().getFullYear() - user.age,
//   };
//   delete a.age;
//   return a;
//   //{id: 2, name: 'Abc', email: 'abc@example.com', age: 34}
// });

// console.log(modifiedUsers);

// slice
// const fewUsers = users.slice(2);
// console.log(fewUsers);

// const a = users.splice(2, 3);

// console.log(a);

// every

// const isAllUsersEligibleToVote = users.every((user) => user.age >= 18);
// console.log(isAllUsersEligibleToVote);

// Some
// const isAnyUserEligibleToVote = users.some((user) => user.age === null);
// console.log(isAnyUserEligibleToVote);

// method chaining
// const modifiedUsersWithExampleEmail = users
//   .filter((user) => user.email.includes("example.com"))
//   .map((user) => {
//     return {
//       ...user,
//       isEligibleToVote: user.age >= 18 ? "Yes" : "No",
//       birthYear: new Date().getFullYear() - user.age,
//     };
//   });
// console.log(modifiedUsersWithExampleEmail);
