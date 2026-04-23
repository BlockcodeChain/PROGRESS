// create a fucntion that takes an arrya contianing both number and string and returna new array containing only the string  value 

let arr=["ishi","sam",12,22,27,"goli","kiwi",22]

const ans=arr.filter((elem,id)=>{
    return typeof elem==="string" 
})
console.log(ans)

