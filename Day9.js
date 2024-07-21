// //Activity 1 Selecting and manipulating  Elements
// let cont= document.getElementById("p1")
// console.log(cont);
// cont.textContent="Goodmorning Everyone"

// let cl = document.getElementsByClassName("c1")
// cl[0].style.color="red"

// //Activity 2 Creating and appending Elements
// let div = document.querySelector("div").textContent
// let body = document.querySelector('body')
// body.append(div)

// let orderdList = document.querySelector("ol")
// const li=document.createElement("li")
// li.appendChild(document.createTextNode("water"))
// orderdList.appendChild(li)

// //Activit 3 Removing Elements
// let div = document.querySelector("div")
// div.remove()

// let orderdList = document.querySelector("ol")
// orderdList.removeChild(orderdList.lastElementChild)

// //Activity 4 Modifying Attributes and classes
// document.querySelector('ul')
//         .setAttribute("onmousemove", "alert(5)");

// let ol=document.querySelector('ol')
// ol.classList.remove("removed")
// ol.classList.add("added");

//Event Handling
let divs = document.querySelector("div")
let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    divs.textContent="hellllllo"
})
divs.addEventListener('mouseover',()=>{
    divs.style.border="2px solid red"
})
