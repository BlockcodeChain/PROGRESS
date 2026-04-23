// create a function that reverse each word of a given sentence eg mai hu aanshi -> 

let sentence= "mai hu ishi"

const sol=sentence.split(" ").map((word)=>{
      return word.split("").reverse().join("")
}).join(" ")

console.log(sol)