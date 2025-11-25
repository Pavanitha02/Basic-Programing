let num = 15; 
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Yes");
} else {
    console.log("No");
}
function EvenOdd(num){
    return num % 2===0;
}
