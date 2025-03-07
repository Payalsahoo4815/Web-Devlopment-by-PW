// function Product(n,p,r) {
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }


// another types of function declaration
const Product = function(n,p,r){
    this.name = n;
    this.price = p;
    this.rating =r;
}

const p = new Product("Macbook",150000,5);
console.log(p);

let x = {
    p : Product
};
x.p("airdopps",20000,5)
console.log(x);

// another types of function declaration

// const Product = (n,p,r) => {
//     this.name = n;
//     this.price = p;
//     this.rating =r;
// }
// arrow function can't be used as function constructor so that it gives error

// The theory of this keyword pointing to calling context is not applicable with arrow function.