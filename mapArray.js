// Array Map
const arr = [1, 2, 3];
const newArra = [];
for(el of arr){
    newArra.push(el);
}
console.log(newArra);

const newArr = arr.map(function(el){
    return el;
})
console.log(newArr);

// Single line 
const newArr1 = arr.map((el) => {
    return el;
})
console.log(newArr1);

const newArr2 = arr.map(el => el * 2);
console.log(newArr2);

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// Get an array of all names
const allNames = characters.map(el => el.name);
console.log(allNames);

// Get an array of all heights
const allHeight = characters.map(el => el.height);
console.log(allHeight);

// Get an array of objects with just name and height properties
const nameHeight = characters.map(el => {
    return{
        name: el.name,
        height : el.height
    }
});
console.log(nameHeight);

// Get an array of all first names
// const fName = characters.map(el => el.name.split(" ")[0]); // Single Line
const fName = characters.map(el => {
    return el.name.split(" ")[0];
});
console.log(fName);

// Split Methods
const name = "Al Muksid";
console.log(name.split(" "));


