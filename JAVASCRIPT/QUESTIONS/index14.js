// build a simple isPrime() function to check if a number iss prime 


function isPrime(x) {
    if (x < 2) return false;

    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}

let num = 7;

if (isPrime(num)) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}