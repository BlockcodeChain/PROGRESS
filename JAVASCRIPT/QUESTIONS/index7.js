// in an array of object filter out those objects which have gender value male 

let obj=[{
    name:'ishi',
    gender:"female"
},
{
    name:'kiwi',
    gender:"male"
},
{
    name:'sam',
    gender:"female"
},
{
    name:'ankit',
    gender:"male"
},
]

const ans=obj.filter((elem)=>{
    elem.gender==="male"
}).map((print)=>{
    return  print.name
})
console.log(ans)