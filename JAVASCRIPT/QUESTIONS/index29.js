// how can u update the dom based on user input in real time (eg live preview of a form)


let nameinput=document.querySelector("#name")
let emailinput=document.querySelector("#email")
let namevalue=document.querySelector(".namevalue")
let emailvalue=document.querySelector(".emailvalue")
nameinput.addEventListener("input",(e)=>{
      namevalue.innerText=  e.target.value
})

emailinput.addEventListener("input",(e)=>{
      emailvalue.innerText=  e.target.value
})