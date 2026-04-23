// global , function , block scope
// gloabal scope 
let global="aanshi sahu"
// function scope
function func(){
    let funcName="sanaya sahu"
    console.log(funcName)
}
func()
// console.log(funcName); // Error
if(true){
    let blockName="ishi sahu"
    console.log(blockName)
}
console.log(global)

// scope-> where a varibale can be used 
// Global scope means the variable is accessible everywhere in the program.
// Function scope means the variable is accessible only inside that function, not outside.
// Block scope means variables declared with let and const are only accessible inside the block.


// ...................................................................................//

// LEXICAL SCOPE->Function apni position (location) ke basis pe variables access karta hai.
// lexical scope->means a inner function can access varibale from parent function but 

// Lexical = Location  ::::  Matlab: Function jaha likha hai uske basis pe scope milega.

function outer(){
    let outerVar="I am from outer function"
    
  function inner(){
  console.log(outerVar) // inner function can access outer function variable
  }
   inner();
}
outer()

// .......................................................................................//
// variable overshadowing -> when a inner fn has a same name as a outer fn , inner varibale hides the outer varibale 


let petname="eglionfox"
function outerpet(){
    let petname="dog"
    function innerpet(){
        let petname="cat"
        console.log(petname) 
    }
    innerpet()
}
outerpet() 
console.log(petname) // global variable is not affected by inner variable


// ..........................................................................................//

// scope chaining -> when a variable is not found in the current scope, it looks for the variable in the outer scope, and this process continues until it reaches the global scope.
let username="eglionfox"
function scopeChain(){

    let fname="aanshi"
    function innerscope(){
        let lname="sahu"
        console.log(fname,lname ,username)
    }
    innerscope()
}
scopeChain()

// ..........................................................................................//
// tdz ->temporal dead zone-> it is a  time between  varibale declararrion to variable initiallization 
// tdz i sonly in let and const not in var 