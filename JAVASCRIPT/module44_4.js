// Prototypes

let myHeros = ['thor','spiderman']
let dcHeros = ['batsman','flash','superman']

let heropower = {
    thor : 'harmer',
    spiderman : 'sling',

    getSpidermanPower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.payal = function(){
    console.log(`Payal is present in all object`)
}

console.log(myHeros.payal())
console.log(heropower.payal())


// Inheritance 

const User = {
    name : 'top name',
    email : 'top@gmail.com'
}

const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailable : false
}

const TeachingAssistance = {
    makeAssgn : "JS Assignment",
    fulltime : true,
    // inherit TeachingSupport property
    __proto__ :TeachingSupport
} 
console.log(TeachingAssistance.isAvailable)

// New method to inherit 
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideos)

// to add method to into String
String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
}

'ugvhjbvh        '.truelength()
'vbvv    '.truelength()