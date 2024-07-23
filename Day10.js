// //Activity 1 Basic Event Handling
let btn = document.querySelector("button")
let p=document.querySelector('p')
// btn.addEventListener("click",()=>{
//     p.textContent="the text is changed"
// })

let img = document.querySelector("img")
// img.addEventListener("dblclick",()=>{
//     img.classList.toggle("visi")
// })

//Activity 2 Mouse Events
p.addEventListener("mouseover",()=>{
    p.style.backgroundColor="red"
})

p.addEventListener("mouseout",()=>{
    p.style.backgroundColor="white"
})

//Activity 3 Keyboard Events
let n=document.getElementsByClassName("name")[0]
 // n.addEventListener("keydown",(e)=>console.log(e.code))
// n.addEventListener("keyup",(e)=>console.log(e.target.value))

//Activity 4 Form Events
let form = document.querySelector("form")
// form.addEventListener("click",(e)=>{
//     e.preventDefault()
// })

//Activity 5 Event Delegation
let div=document.querySelector("div")
// div.addEventListener("click",(e)=>console.log(e.target.innerText))

let span = document.querySelector("span")
div.addEventListener("click",()=>{
    
    const newChild = document.createElement('div');
    newChild.className = 'child';
    newChild.textContent = 'I am a new child element';
    span.appendChild(newChild);
},true)

span.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(e.target.innerText)
})