// CallBack Function 

function h(x,fn){
    console.log(x*x);
    fn(x*x);
}

h(10,function() {
    console.log("Done with callback")
})

function exec(n){
    console.log("squared value is",n)
}

h(12,exec)

// Timer
setTimeout(function(){
    console.log("Timer done")
},3000)

