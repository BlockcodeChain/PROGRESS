// why does 0.1+0.2!==0.3 in js 

console.log(0.1+0.2!==0.3)
console.log(0.1+0.2)

// to solve
const res =(0.1+0.2).toFixed(1)
const ans =parseInt(res)
console.log(res)
console.log(typeof res)
console.log(ans)
console.log(typeof ans)