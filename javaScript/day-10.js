//Day 10
// while loop

// syntax:while (condition) {
//     statements;

// }

// example 1
// const maxLimit = 10;
// let i = 1; //initialization
// while (i <= maxLimit) {
//   console.log(i);
//   i++;
// }

// problem 1: find the sum of digits of numbers
// example: 123=>1+2+3=6
// 123 % 10=3
// 12 % 10=2
// 1 % 10=1
// 0=

// let number = 85734673;
// let sumOfDigits = 0;
// while (number !== 0) {
//   const rem = number % 10; // 1
//   sumOfDigits = sumOfDigits + rem; // 5+1=6
//   number = parseInt(number / 10); // 0
// }

// console.log(sumOfDigits);

// do while loop
// syntax: do {
//      statements;
//  }while (condition)

// let error = 0;
// do {
//   console.log("do while loop");
//   error++;
// } while (error < 3);

// Break => coming out of loop

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i === 5) {
//     break; // will break looping
//   }
//   i++;
// }

// continue

// let i = 0;
// while (i < 10) {
//   i++;
//   if (i === 5) {
//     continue; // will break looping
//   }
//   //   console.log("Hey", i); //statement will get skipped
//     console.log(i);
// }

// switch
// const status = "failed";

// switch (status) {
//   case "success":
//     console.log("success");
//     break;
//   case "failed":
//     console.log("falied");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// 5. Numbers

// const number = 16;

// number.toString(2); // convert into binary representation 1000
// number.toFixed(2); // 16.00

// console.log(Math.abs(-56));

// 6. string
const firstName = "   AbC    ";
console.log(firstName.trimEnd().length);
