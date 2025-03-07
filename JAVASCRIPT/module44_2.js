// class instatiation

class Product{
    // Properties or variables or data member
    // to make private data member we have to add # 
    #rating;

    // custom cunstructor
    constructor(n,p,r){
        console.log("Calling the constructor")
        this.name = n;
        this.price = p;
        this.#rating =r;
        // return 10 ; if u r returning any primitive the it will be avoided in cunstroctor.
        
    }

    static custom() {
        console.log("Calling a static method"); 
    }

    get ratingGetter() {
        console.log(this.#rating)
    }
    set ratingSetter(r) {
        if(r<0) return;
        this.rating =  r;
    }
    // behaviour or functions or member function
    display() {
        console.log("this is refers to",this)
        console.log("displaying the product",this.name,this.price,this.#rating)
    }
}


const p = new Product('iphone',100000,4.5); //new creates an empty plain object
// in the above piece of code we are calling the constructor method.
console.log(p)
p.ratingSetter = 10
p.ratingGetter;
p.display()

// p.custom()   static method can't be call like this we have to call by its class name
Product.custom();




























/**
 * 1.this keyword in js is different than other language
 * 2.this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * -if u return primitive it is ignored and we return the object refered by this
 * -if u return a custom object ,the the custom object is returned
 * -if u don't return anything ,the object refered by this is returned
 */ 