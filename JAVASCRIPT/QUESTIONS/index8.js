// given an  array of strings return a new array wheere all strings are uppercase
let str=["ishi","hello","sam","kiwi","gola"]

const newstr=str.map((elem)=>{
  return  elem.toUpperCase()
})
console.log(newstr)