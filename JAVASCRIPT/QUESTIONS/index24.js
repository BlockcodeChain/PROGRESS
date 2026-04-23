// write a js function taht accepts a string as a paramter and converts the first letter of each word of the string in upper case
let str=["banana","apple","kiwi","ornage","ishi","gola","sam"]

const solu=str.map((item)=>{
    return item[0].toUpperCase() +item.slice(1)
}).join(" , ")
console.log(solu)