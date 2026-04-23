// wjs function taht reverse aa number

function reversenum(num){
const result =num.toString().split('').reverse().join('');
return Number(result);
}

console.log(reversenum(12345))