// Destructuring Object
let person = {
    name : 'Al Muksid',
    age : 25, 
    interest : ['Programming', 'Designing'],
    addr : {city: 'Magura', zip: 7600}
}

let {name: fullName = 'Mesion', age, interest, addr : {city, zip}} = person;
console.log(fullName, city);

console.log(`My name is ${fullName}, I am ${age} years old, I am interested in ${interest}, and I live in ${city} with ZIP code ${zip}.`)