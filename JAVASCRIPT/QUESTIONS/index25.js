// write a js fn to get the first element of an array passing a parameter n will return n element of array 

function getarray(arr,n){
    if(!n){
        return arr[0]
    }
    else if(n>arr.length){
        console.log("itna toh elem array mai hai hi nhi")
    }
    else {
      return arr.slice(0,n) 
    }
}

console.log(getarray([1,2,3,4,5,6,7,8],2))