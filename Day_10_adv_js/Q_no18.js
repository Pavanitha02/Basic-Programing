if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); 
console.log(x); 

//////
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email); // "test@mail.com"
console.log(profile.user?.details?.phone); // undefined (no error)


////optional chaining
const student = {
  name: "Bob"
};

console.log(student.address?.city); 

