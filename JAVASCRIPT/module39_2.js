// DOM Part 2

// Create element through javascript 
//Append Child 
let title = document.createElement('h1')
title.className = 'Pw'
title.style.fontSize = '25px'
title.textContent = "Hello Bachoo";
console.log(title)
document.body.appendChild(title);

// Remove Child
let ul = document.querySelector("ul");
console.log(ul);
let lists = document.querySelectorAll("li");
console.log(lists);
for(li of lists){
    ul.removeChild(li);
}