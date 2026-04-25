// ==========================================
// CLOSURE & LEXICAL SCOPING NOTES
// ==========================================

// Closure:
// A closure is a phenomenon where a function remembers
// variables from its outer scope even after the outer
// function has finished execution.

// Lexical Scoping:
// Lexical scoping means the scope of variables is decided
// at the time of writing code, not at runtime.


// ==========================================
// EXAMPLE 1: BASIC CLOSURE
// ==========================================

function outer() {
    let count = 0;

    function inner() {
        console.log(count);
        count++;
    }

    return inner;
}

const call = outer();
call(); // 0
call(); // 1

// Explanation:
// inner() remembers the variable 'count'
// even after outer() has finished execution.
// Therefore, this is a closure.


// ==========================================
// EXAMPLE 2: CLOSURE WITH GLOBAL + OUTER SCOPE
// ==========================================

let global = 10;
let name = "ishi";

function parent() {
    function child() {
        console.log(global);
        return name;
    }

    return child;
}

let print = parent();
print();              // 10
console.log(print()); // 10, "ishi"

// Note:
// This is ALSO a closure.
// A closure can remember variables from:
// 1. outer function scope
// 2. global scope
// Both are part of its lexical environment.


// ==========================================
// EXAMPLE 3: OBJECT RETURN WITH CLOSURE
// ==========================================

function bfunc() {
    let name = "ishi sahu";

    function s1() {}
    function s2() {}
    function s3() {}

    function s4() {
        console.log(name);
    }

    return { s1, s2, s3, s4 };
}

const ans = bfunc();
ans.s4(); // "ishi sahu"

// Explanation:
// ans is an object, so we cannot call ans()
// directly as a function.
// We must call the function inside the object,
// like ans.s4().
//  s1 , s2 ,s3 also have a closure property in them
// s4 remembers 'name', so this is also a closure.


// Closure is not only about outer local variables.
// It is about remembering the lexical environment.

// That lexical environment can include:

// local variables
// parent variables
// global variables


// .------------------------------------------------------

// imp question on closure

for(let i=0;i<5;i++){
    setTimeout(()=>{
     console.log(i)
    },1000)
}