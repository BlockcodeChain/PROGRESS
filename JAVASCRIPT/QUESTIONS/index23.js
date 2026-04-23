// writea js function athat accept a string as a parameter and converts the first letter of eaach  word of string in upper case 
let str =["ishi","gola","sam","kiwi","aanshi"]

const result =str.sort()
console.log(result)

let num=[1,18,200,12,199,54,87]

const sol=num.sort((a,b)=>{
   return  a-b;
})
console.log(sol)

const solutions=num.sort((a,b)=>{
    return b-a;
})
console.log(solutions)

let sentence="i am aanshi sahu";
const ans=sentence.split(' ').sort().join(' ').trim()
console.log(ans)