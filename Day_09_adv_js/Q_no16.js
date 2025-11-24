///arrow function
if (marks >= 35) {
  result = "Pass";
} else {
  result = "Fail";
}

///ternary operator
result = marks >= 35 ? "Pass" : "Fail";

///aarrow function
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
