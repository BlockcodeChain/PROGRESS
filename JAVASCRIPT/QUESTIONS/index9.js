// check if an object is empty has no keys

let obj={
    name:"aansji shai"
}
const value =Object.keys(obj).length
if(value==0){
    console.log("Object is Empty/n VALUE:",value)
}
else console.log("Object is not empty \n VALUE:",value)