// what is difference between slice and splice


let arr=[1,2,3,4,5,6,7,8,9]

const copy=arr.slice(1,5)

console.log(copy)
console.log(arr)

// splice
const modify=arr.splice(1,2,10,23)
console.log(modify)
console.log(arr)