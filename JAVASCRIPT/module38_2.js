// Function and declaration 

function greet(){
    console.log("Hi there")
    console.log("How are you");
}

// function calling
greet();

function sqr(x)
{
    // x is parameter
    return x*x;
}
let a = sqr(5) //5 is argument
console.log(a);


// default parameter
function add(x,y=9){
    console.log(x+y);
}

add(6) //by default x will assign with 6

// unlimited parameter
function sum()
{
    let s = 0;
    for(let i = 0 ; i < arguments.length;i++)
        s = s + arguments[i];
    return s;
}
let res = sum(1,2,3,4,5,6,7,8,9,10);
console.log(res);

// Arrow function or fat arrow function
const square = (x) => x*x;
let output1 = square(5)
console.log(output1)


const sumOfNumbers = (x,y) => {
    console.log("ADD of",x,y,"is");
    return x+y;
}
let output2 = sumOfNumbers(8,9)
console.log(output2)

// Annonymous Function
let x = function(){
    console.log("Hii..")
}
x()

