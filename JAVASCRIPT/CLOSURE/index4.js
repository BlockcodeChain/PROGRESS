// ==========================================
// IMPORTANT QUESTION ON CLOSURE (LOOPS)
// ==========================================

// Case 1: using let

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output after 1 second:
// 0 1 2 3 4

// Explanation:
// 'let' creates a new variable for each iteration,
// so each callback remembers its own value of i.


// ==========================================
// Case 2: using var
// ==========================================

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output:
// 5 5 5 5 5

// Explanation:
// 'var' is function-scoped, not block-scoped.
// All callbacks share the SAME variable 'i'.
// By the time setTimeout runs, loop is finished,
// and i becomes 5.


// ==========================================
// Solution using closure (IMPORTANT FIX)
// ==========================================

for (var j = 8; j < 15; j++) {
 (function (x) {
        setTimeout(() => {
            console.log(x);
        }, 1000);
    })(j)

    // print(j);
}

// Output:
// 0 1 2 3 4

// Explanation:
// We pass 'j' as 'x'.
// Now each function call has its OWN copy of value.
// This creates a closure for each iteration.


for (var i = 0; i < 3; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 100, i);
}

// 0 1 2
// 💡 Why?
// Third argument i is passed as parameter
// So each callback gets its own value


let fn1 = outer();
let fn2 = outer();

fn1();
fn2();

// ✅ Your answer: 10 10
// ✔️ Correct

// 👉 But important:

// Values same
// Memory different (2 closures)


let d = demo();
d();
d();

// ❌ Your answer: 1 2 3

// 👉 Correct answer:

// [1,2,3]
// [1,2,3,3]

// “Closure is used for data hiding and security, because variables inside a function cannot be accessed directly from outside.




function outer(x) {
    return function (y) {
        return function (z) {
            console.log(x + y + z);
        }
    }
}

outer(2)(3)(4);


// “This is an example of closures in JavaScript.
// Each function returns another function and forms a closure.
// The innermost function remembers variables x and y from its lexical scope,
// so when it executes, it can access all three values and prints their sum.”

// Closures are used for:

// Data hiding / encapsulation
// Private variables
// Function factories
// Event handlers / async callbacks


// “Closure is a function + its lexical environment bundled together.”
// because it helps in data privacy and allows functions to maintain state without using global variables.”


// var i is function scoped
// All setTimeout callbacks share SAME i
// Loop finishes → i = 3
// Then all print 3
// Because var is function scoped, all callbacks refer to the same variable, which becomes 3 after loop ends.”
