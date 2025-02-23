let obj = {id : 101,name:'Payal',salary:10000};
console.log(obj)


// Another method for creating object
let emp = new Object()
console.log(emp)
emp.id = 102;
emp.name = 'jyoti'
console.log(emp)

// Another method for creating object
function persron(i,n,s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
const p = new persron(3,'payal',80000)
console.log(p);

// access key value of objects by using dot operator and []
console.log(emp.id);
console.log(emp['name']);

// New value pair assign 
emp.salary = 130000;
emp['joined'] = '16th feb 2025'
console.log(emp);

// update value of the object 
emp.salary = 290000;
console.log(emp);

// delete key value 
delete emp.joined;
console.log(emp);


// object methods
let student = {
    roll : 101,
    batch : 2025,
    fees : 10000,
    course : 'Full Stack web Development'
}
// to fetch all keys 
let a = Object.keys(student);
console.log(a)

// to fetch all values
let b = Object.values(student)
console.log(b);

// to fetch key value both
let c = Object.entries(student)
console.log(c);

// to restrict object value updation and adding key by freeze method

Object.freeze(student);
student.roll = 12
console.log(student);
// roll 101 tha aur wahi rahegi change nehi hogi.


// update allowed but add and delete is not allowed
Object.seal(emp);
console.log(emp);
emp.id = 120;
console.log(emp);
emp.dob = '04/04/2002'
delete emp.id;
// entries and delete are not allowed .
console.log(emp);

// to copy all the keys and values to a new object
let o = Object.assign({age : 22},emp)
console.log(o);