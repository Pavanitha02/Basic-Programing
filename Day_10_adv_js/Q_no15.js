////template literals

const username = "Sam";
const course = "Full Stack Web Development";
console.log(`Hello, welcome to the course!`);

///shortened syntax
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

////arrow function

const getFullName = (first, last) => `${first} ${last}`;
