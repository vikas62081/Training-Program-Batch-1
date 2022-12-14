// let numberVariable = 45; //Type of variable a is number
// console.log(numberVariable);

// numberVariable = "Hello"; //Type of variable a is string

// console.log(numberVariable);
// variable naming
// const sumOfTwoNumbers = firstNumber + secondNumber;

// let number = 6; //variable initialization
// let firstName; //variable declaration

//block scope
// {
//   //   let number = 4;
//   console.log(number);
//   number = number + 6;
//   console.log(number);
// }

// console.log(number);

// function scope
// const firstNumber = 2; //golobal variable
// const secondNumber = 7;
// function sumOfTwoNumbers() {
//   // function defination
//   const firstNumber = 12; //local variable
//   const secondNumber = 47;
//   console.log("inside function ", firstNumber, secondNumber);
// }
// sumOfTwoNumbers(); // function call
// console.log("outside function", firstNumber, secondNumber);

// Data Type
//  1. primitive data type
let firstNumber = 7; //number
let secondNumber = "7"; //string
let name = "John"; // string
let bool = true || false; //boolean
let age; // undefined

// 78653=>78,653
// console.log(typeof firstNumber, typeof secondNumber);
// console.log(firstNumber == secondNumber);
// console.log(firstNumber === secondNumber);

// == compare values alone
// === compare values along with type

//  2. non -primitive data type  (Object, array)
//Object
const pen = { height: 20, radius: 5, color: "white", isBallPen: true };
console.log(pen);
//Array
const names = ["John", "Ben"];
const numbers = [1, 2, 3, 4, 5];
const pens = [
  { height: 20, radius: 5, color: "white", isBallPen: true },
  { height: 18, radius: 5, color: "BLACK", isBallPen: false },
];
console.log(pens);
//Object
