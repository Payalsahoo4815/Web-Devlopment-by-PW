let score = 4;
function one(){
    let score = 0
    console.log(score);
}
function two() {
    let score = 3
    console.log(score)
}
function three(){
    console.log(score);
}
// one()
// two()
// three() 
// console.log(score)

function outerFunc(){
    let outerVar = 'I am at scope level 1'
    function innerFunc(){
        let innerVar = 'I am at scope level 2'
        console.log(outerVar)
    }
    // console.log(innerVar)
    innerFunc()
}
// outerFunc();

const myGlobalValue = 0
function func() {
    const val1 = 1;
    console.log(myGlobalValue);
    function innerFunc(){
        const val2 =2;
        console.log(val2,val1,myGlobalValue);
        function innerOfInnerFunc(){
            const val3 = 3;
            console.log(val3,val2,val1,myGlobalValue);
        }
        innerOfInnerFunc();
    }
    innerFunc();
}
// func();


// Closure topic
function superFunc(){
    let outerValue = 'I am Outer'
    function minorFunc(){
        console.log(outerValue)
    }
    minorFunc()
}
superFunc(); 