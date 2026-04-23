// find maximum number in an array

let num=[1,250,3,4,5,200]

let max=num[0]
for(let i=0;i<num.length;i++){
if(max<num[i]){
    max=num[i];
}

}
console.log(max)