/////
console.log(`5 + 7 = ${5 + 7}`);
//////
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

//////
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);
/////
const square = n => n * n;
////
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

/////
const obj = {
  value: 50,
  test: function() {
    console.log(this.value);
  }
};
obj.test();

