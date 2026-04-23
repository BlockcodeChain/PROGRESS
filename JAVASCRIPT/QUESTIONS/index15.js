// create a fn that remove duplicates from array

let array=[1,2,1,2,13,24]

const result = [...new Set(array)]

console.log(result)

// method -2

let res=array.filter((elem,idx)=>{
    return array.indexOf(elem)===idx
})
console.log(res)