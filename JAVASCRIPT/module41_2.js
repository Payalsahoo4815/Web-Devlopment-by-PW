let arr  = [2,3,4]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr)
})



arr.forEach((element,index,arr) =>{
    console.log("arrow",index,element,arr)
})


const hero =  ['nagaraj','salman','sharukh','akshya','maniraj','shivraj']
hero.forEach((el) =>{
    console.log(el.toUpperCase())
})

arr.map(function(element,index,arr){
    console.log(element,index,arr)
})

hero.map((h) =>{
    console.log(h.toUpperCase())
})


// filter
console.log(hero)
const herowithRaj = hero.filter((h) =>{
    return h.endsWith("raj")
})
console.log(herowithRaj)


// shopping cart
const cartBill = [20,900,89,6776,566,6778]
const sum = cartBill.reduce((prev,curr) => prev + curr ,0)
console.log(sum)


// Game Score
const gameScore = [200,300,310,250,150]
// check if values are numbers
// console.log(typeof gameScore[2])
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check : ",gameScoreCheck)

// find score above 200
const above200 = gameScore.find((score) => score > 200)
console.log(above200)