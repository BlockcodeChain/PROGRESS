// in an array of number and string only add those number which are not strings

let elem=[1,2,3,4,55,"ishi","sam","goli"]


const ans=elem.filter((itm)=>typeof itm ==="number").reduce((acc,current)=>{
    return acc+current;
},0)
console.log(ans)