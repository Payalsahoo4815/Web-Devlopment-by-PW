// Array

// Declaration 
const myArr = [0,1,2,3,4,5,6,7,true,'payal']
console.log(myArr[8]);
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[3]);


// Array Methods
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(5) //insert in start
console.log(myArr);
myArr.shift()
console.log(myArr);//delete element from first
console.log(myArr.includes('payal'));
console.log(myArr.indexOf(7));

const myArr3 = myArr.join();
console.log(myArr3);



// slice and splice

console.log("A",myArr);
console.log(myArr.slice(1,4));
console.log(myArr.splice(1,4));



