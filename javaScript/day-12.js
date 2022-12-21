// Day-12
//scope of this
function printName(name) {
  this; // scope is global;
  console.log("Name is", name);
}
const human = {
  firstName: "John",
  age: 12,
  getHuman: function (...grettings) {
    return `My name is ${this.firstName}, and i am ${this.age} years old. ${grettings}`; //scope is object level
  },
};
// console.log(human.getHuman("Hello"));
// printName("Vikas");

// call vs bind vs apply
person1 = {
  firstName: "Person 1",
  age: 56,
};
// console.log(human.getHuman.call(person1, "Hello", "Hello 2"));
// const result = human.getHuman.bind(person1,""); // bind create a function and returns
// console.log(result());
// console.log(human.getHuman.apply(person1, ["Hello", "Hello 2"]));

// Objects

const person2 = {
  firstName: "John",
  age: 56,
};
Object.freeze(person2); // modification disabled
// to add new properties to objects
person2.email = "abc@gmail.com";
// console.log(person2);

// to delete properties from objects
delete person2.age;
// console.log(person2);

//to get all keys of objects
// console.log(Object.keys(person2)); //return array
// console.log(Object.values(person2)); //return array

// Array
const numbers = [10, 1, 2, 3, 4, 5, 68, 0, 6, 4];
// console.log(numbers);
numbers.forEach((number, index, arr) => {
  //   console.log(number, index, arr);
});

// const a = numbers.forEach((number) => console.log(number * 2)); //return void
// console.log(a);

const numbersMoreThanTwo = numbers.filter((number) => number >= 4);
// [3, 4, 5];
// console.log(numbersMoreThanTwo);
const numberMoreThanTwo = numbers.find((number) => number > 2);
// console.log(numberMoreThanTwo);

const squareOfNumbers = numbers.map((number, index) => number * index);
// [100, 1, 4];
console.log(squareOfNumbers);
