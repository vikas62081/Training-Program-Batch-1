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
// let firstNumber = 7; //number
// let secondNumber = "7"; //string
// let name = "John"; // string
// let bool = true || false; //boolean
// let age; // undefined

// 78653=>78,653
// console.log(typeof firstNumber, typeof secondNumber);
// console.log(firstNumber == secondNumber);
// console.log(firstNumber === secondNumber);

// == compare values alone
// === compare values along with type

//  2. non -primitive data type  (Object, array)
//Object
// const pen = { height: 20, radius: 5, color: "white", isBallPen: true };
// console.log(pen);
// //Array
// const names = ["John", "Ben"];
// const numbers = [1, 2, 3, 4, 5];
// const pens = [
//   { height: 20, radius: 5, color: "white", isBallPen: true },
//   { height: 18, radius: 5, color: "BLACK", isBallPen: false },
// ];
// console.log(pens);
//Object

// Day-8
// type conversion

// const number = 9;
// console.log(String(number) + 1);

// const string = "10";
// console.log(Number(string) + 1);

// const bool = true;
//number will return false in case of 0, null ,undefined
//string will return false in case of '', null ,undefined
// console.log(!!number); // !Boolean(number)
// console.log("Your number is ", number);

//Operators
//1 . +,-,*,/,%,

// console.log(parseInt(secondNumber / firstNumber));
// 2.  &&, ||, !
// if both variable values are true then only it returns true

// console.log(firstNumber && "HEllo" && secondNumber);
// console.log(firstNumber || secondNumber);
// if both variable values are false then only it returns false

// 3. ternary operator
//  syntax  condition? success body : false body

// const result = false
//   ? "First Number value is " + firstNumber
//   : "Value is null, undefined or 0";

// console.log(result);
// 4. =, == & ===
// 5. relational operator (<, >,<=,>=)

// Conditional control
// 1. if condition

// syntax: if (condition) {
//   body;
// }
const firstNumber = 9;
const secondNumber = 90;
// 7 > 9;
// if (firstNumber > secondNumber) {
//   // condition returns false
//   console.log("First Number is greater than second Number");
// }
// // 7 < 9;
// if (firstNumber < secondNumber) {
//   console.log("Second Number is greater than first Number");
// }

// 2. if else condition

// syntax: if (condition) {
//     true statements
// }
// else {
//     false statements
// }

// if (firstNumber > secondNumber) {
//   console.log("First Number is greater than second Number");
// } else {
//   console.log("Second Number is greater than first Number");
// }

// 3. if else if condition

// syntax: if (condition) {

// }
// else if (condition) {

// } else {

//     }

// if (firstNumber == secondNumber) {
//   console.log("First Number is equal to second Number");
// } else if (firstNumber > secondNumber) {
//   console.log("First Number is greater than second Number");
// } else {
//   console.log("Second Number is greater than first Number");
// }

// if (firstNumber == secondNumber) {
//   console.log("First Number is equal to second Number");
// } else {
//   if (firstNumber > secondNumber) {
//     console.log("First Number is greater than second Number");
//   } else {
//     console.log("Second Number is greater than first Number");
//   }
// }

// Day 9
// Looping

// Increment , decrement Operators
// let i = 4;
// // --i; // i=i+1
// // console.log(i++); // post increment 4
// console.log(++i); // pre increment
// console.log(i);

//For loop

// syntax: for (initialization; condition; ++| --){
//   statement 1
// 2
// }

// Example

// for (let i = 1; i <= 10; i++) {
//   console.log(i * 3); //table of 3
// }

// problem 1 : find odd even number
// const number = 2;
// if (number % 2 === 0) {
//   console.log(number, "is even number");
// } else {
//   console.log(number, "is odd number");
// }

// problem 2: print all even number b/w 1 to N
// solution 1:
// const N = 100;
// for (let i = 1; i <= N; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "is even number");
//   }
//   /// 100 items
// }
//  solution 2:
// const N = 10;
// for (let i = 2; i <= N; i = i + 2) {
//   console.log(i, "is even number");
//   /// N/2 iterations
// }

// problem 3: print all number which are divisible by 8 b/w 1 to N
// const N = 100;
// const number = 9;
// for (let i = 1; i <= N; i++) {
//   if (i % number === 0) {
//     console.log(i, "is divisible by", number);
//   }
// }

// problem 4: print all number which are divisible by 8 and 5 b/w 1 to N
// const N = 100;
// const number1 = 8;
// const number2 = 5;

// for (let i = 1; i <= N; i++) {
//   if (i % number1 === 0 && i % number2 === 0) {
//     console.log(i, "is divisible by", number1, number2);
//   }
// }
// problem 5: print count of all number which are divisible by 8 and 5 b/w 1 to N
// const N = 100;
// const number1 = 8;
// const number2 = 5;
// let count = 0;
// for (let i = 1; i <= N; i++) {
//   if (i % number1 === 0 && i % number2 === 0) {
//     count++;
//   }
// }
// console.log("Total count is", count);
