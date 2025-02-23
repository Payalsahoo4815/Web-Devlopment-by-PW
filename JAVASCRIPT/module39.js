// DOM --- Document object model
// method of DOM part-1 
// It has a html file name with module39.html


// id
let var1 = document.getElementById("one");
console.log(var1.innerText);

// class
let var2 = document.getElementsByClassName("tech");
console.log(var2[2].innerText);
var2[1].innerText = "Node.js"

// Tag name
let var3 = document.getElementsByTagName("h4");
console.log(var3[1].innerHTML)
var3[2].innerText = "PW Skills";
var3[2].style.color = "red";


// Query Selector
let var4 = document.querySelector(".classs")
console.log(var4);
let var5 = document.querySelector("#ids");
console.log(var5)

// var4.className = "Hello"
// var4.classList = "hello hlo hey"
var4.setAttribute("id","js")