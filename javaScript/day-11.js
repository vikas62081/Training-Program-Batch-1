// day-11

// function

//Syntax:  function functionName(parameters1, parameters2,.., parameterN) {
//     // function body
// }

// example

// function grettings(name) {
//   // function definition
//   console.log("Welcome", name);
// }

// // function call
// grettings("Vikas");
// grettings("John");

// function to return sum of two numbers
// function sumOfTwoNumbers(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
//   console.log("hello"); //dead code
// }

// const sum = sumOfTwoNumbers(20, 4);
// console.log("sum of two numbers is", sum);

// function getSumOfDigits(number) {
//   let sumOfDigits = 0;
//   while (number !== 0) {
//     const rem = number % 10; // 1
//     sumOfDigits = sumOfDigits + rem; // 5+1=6
//     number = parseInt(number / 10); // 0
//   }
//   return sumOfDigits;
// }
// console.log(getSumOfDigits(1890));

// function sumOfNumbers() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }

// console.log(sumOfNumbers(1, 2, 3, 90, 466, 4354, 35));

// arrow function
// syntax: const functionName = () => {
//      function body
// }

// const sumOfTwoNumbers = (firstNumber, secondNumber) => {
//   console.log(arguments);
//   return firstNumber + secondNumber;
// };

// console.log(sumOfTwoNumbers(20, 4));

// const sumOfTwoNumbers = (...a) => {
//   console.log(rest);
//   let sum = 0;
//   a.forEach((element) => (sum = sum + element));
//   //   return firstNumber + secondNumber;
//   return sum;
// };
// console.log(sumOfTwoNumbers(20, 4, 8, 9, 67));

// const sumOfTwoNumbers = (firstNumber, secondNumber) => {
//   return firstNumber + secondNumber;
// };

// console.log(sumOfTwoNumbers(20, 4));

// JSON
// 1. key value seprated by:
// 2. one key pair seprated to others by comma ,
const name = "John";
// Syntax:
const person = {
  firstName: name,
  age: 20,
  address: {
    streetNo: 12,
    city: "Banglore",
    country: "India",
    pincode: null,
  },
};

// console.log(person.address.city);

const key = "address";
const address = person[key];
console.log(address);
