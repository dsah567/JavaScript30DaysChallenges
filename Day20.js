//activity 1 understanding local storage 
function clic(){

    let name= document.querySelector("input").value
    localStorage.setItem("name",name)
}

function dis(){
    console.log(localStorage.getItem("name"));

}

function sesclic(){

    let name= document.querySelector("input").value
    sessionStorage.setItem("name",name)
}

function sesdis(){
    console.log(sessionStorage.getItem("name"));

}