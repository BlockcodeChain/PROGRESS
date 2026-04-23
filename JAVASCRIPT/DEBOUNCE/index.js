const input= document.querySelector("#input")
const debounce=(fn,delay)=>{
    let timer;
return (...args)=>{
clearTimeout(timer);
timer=setTimeout(()=>{
    fn(...args)
},delay)
}
}
 const  handler =async(e)=>{
    const res=await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
    const data=await res.json()
    console.log(data.products)
       console.log("Value:", e.target.value);
 }
 const debounced=debounce(handler,1000)
input.addEventListener("input",debounced)