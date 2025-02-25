// Array -----> spread,rest,destructing

const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArrray = oneArray.concat(twoArray)
// console.log(threeArrray)

//const threeArrray = [oneArray,twoArray]


// spread operator 
const threeArrray = [...oneArray,...twoArray]
// console.log(threeArrray)


function manyArguments()
{
    let args = Array.from(arguments)
    let finalArr = args.map(e => e*2)
    console.log(finalArr)
}
// manyArguments(1,2,3,3,4,5,6)
// manyArguments(10,5,5,6,6,6,7,5,4,3,22,2)

// Rest operator
function manyArgumentsV2(...args){
    console.log(typeof args)
    let finalArr = args.map(e => e)
    console.log(finalArr)
}

// manyArgumentsV2(1,2,3)


// Set 

let emptySet = new Set()

console.log(emptySet.size)

let myArr = [1,2,3,4,5,1,2,3,4,5,5,32,22]
let newSet = new Set(myArr)
console.log(newSet)

newSet.add(21)
// console.log(newSet.has(21))
newSet.clear()
console.log(newSet)


function setOfDiff(setA,setB){
    return new Set([...setA].filter(el => !setB.has(el)))
}


//Map 
let map = new Map()

let arr = [
    [1,'Payal'],
    [2,'jyoti'],
    [3,'kumar'],
]
arr.map((el) => map.set(arr[0],arr[1]) )