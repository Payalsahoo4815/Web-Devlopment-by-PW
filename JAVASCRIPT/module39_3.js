// DOM Part 3
// Event Listener
// click , dblclick,mouseenter

document.addEventListener("dblclick",hello)
function hello(){
    document.getElementById("js").innerText = "Namaste Bachoo"
}

function hey(){
    document.getElementById("jss").innerText = "Namaste";

    document.getElementById("jss").style.color = "red"
    document.getElementById("jss").style.backgroundColor = 'white'
    document.getElementById("jss").style.padding = "10px"
    document.getElementById("jss").style.border = "2px solid red"
} 