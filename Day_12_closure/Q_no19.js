
let age = 25;

function displayAge() {
    console.log("Current age is:", age);
}
function changeAge(newAge) {
    age = newAge;
    console.log("Age after update is:", age);
}
displayAge();     
changeAge(30);
displayAge();        
