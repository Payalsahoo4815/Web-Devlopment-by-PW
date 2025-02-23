// let a = [1,2,3,4,'payal',false];
// console.log(a);
// a[4] = 'jyoti';
// console.log(a);


// Method 
let arr = [1,2,3,4,5,6]
console.log(arr)
arr.push(10)
console.log(arr)
arr.push(3,0,9)
console.log(arr)

arr.pop();
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(8)
console.log(arr)

let a1 = [1,2,3,4,5]
let a2 = [6,7,8,9,10]
let a3 = a1.concat(a2)
console.log(a1,a2,a3)

let s = a3.join("#")
console.log(s);

a3.reverse()
console.log(a3);

console.log(a3.indexOf(3))

let arr1 = [9,8,7,45,56,55,6,67,78,34,45]
console.log(arr1.slice(3,6));

arr1.splice(2,0,11);
console.log(arr1);
arr1.splice(1,2,13)
console.log(arr1)