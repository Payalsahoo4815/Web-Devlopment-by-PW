let pattern = 'pw'

let regExOne = new RegExp(pattern)
let flag = 'gi'

let regExTwo = new RegExp(pattern,flag)

let regExThree = /pw/gi

const strToCheck = 'pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent'

const result = regExThree.test(strToCheck)
console.log(result)

const result2 = strToCheck.match(regExThree)
console.log(result2)

const result3 =strToCheck.replace(regExThree,'p-w')
console.log(result3)

const webUrl = "https://pwskills.com/hitesh%21choudhary"

const rep = webUrl.replace(/%20/gi,'-')
console.log(rep)


const rep1 = webUrl.replace(/%\d\d/gi,'-')
console.log(rep1)

// follow this website to learn RegeExp --- regexr.com